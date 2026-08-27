import {
  TechnologyParam,
  GridParam,
  HourlyRecord,
  HourDispatchResult,
  ProfileType,
  ProfileSummary,
  SourceAccounting,
  TimeWindow,
  SeasonName,
  PeriodIdentification,
  PeriodHourlyDispatchResult,
  PeriodDispatchSummary,
  FourPeriodComparison,
} from '../types';
import {
  INITIAL_TECHNOLOGIES,
  INITIAL_GRIDS,
  ANNUAL_8760_DATA,
  DEFAULT_CARBON_PRICE,
  DEFAULT_DATACENTER_DEMAND_MW,
} from '../data/energyDataset';


export interface OptimizationOptions {
  demandMw?: number;
  carbonPrice?: number;
  technologies?: TechnologyParam[];
  grids?: GridParam[];
}

export function solveHourDispatch(
  hour: number,
  gridPrice: number,
  gridCo2IntensityKg: number, // gCO2/kWh = kgCO2/MWh
  options?: OptimizationOptions,
  windCapacityFactor?: number
): HourDispatchResult {
  // Constant fixed data center demand = 100 MW
  const demand = DEFAULT_DATACENTER_DEMAND_MW;
  const carbonPrice = options?.carbonPrice ?? DEFAULT_CARBON_PRICE;
  const techs = options?.technologies ?? INITIAL_TECHNOLOGIES;

  const gridCo2_tMwh = gridCo2IntensityKg / 1000.0;
  const gridEffectiveCost = gridPrice + gridCo2_tMwh * carbonPrice;

  const effectiveTechCosts: Record<string, number> = {};
  const candidates: {
    id: string;
    isGrid: boolean;
    capacity: number;
    baseEnergyCost: number; // LCOE + add cost, or grid price
    emissionFactor: number; // tCO2/MWh
    carbonCostRate: number; // emissionFactor * carbonPrice
    effectiveCost: number;
  }[] = [];

  let windCFUsed: number | undefined = undefined;
  let windAvailMw: number | undefined = undefined;

  for (const t of techs) {
    const baseEnergyCost = t.LCOE_eur_mwh + t.additional_cost_eur_mwh;
    const carbonCostRate = t.emission_factor_tco2_mwh * carbonPrice;
    const effCost = baseEnergyCost + carbonCostRate;
    effectiveTechCosts[t.technology] = effCost;

    const isWind = t.technology.toLowerCase().includes('wind');
    let cf = t.capacity_factor;
    let availableCap = 0;

    if (isWind) {
      // Wind capacity factor must NOT be manually adjustable.
      // Wind capacity factor must come directly from the time-dependent wind capacity factor dataset.
      if (windCapacityFactor !== undefined) {
        cf = windCapacityFactor;
      } else {
        const records = ANNUAL_8760_DATA.filter((r) => r.Hour === hour % 24);
        cf = records.length > 0 ? records.reduce((s, r) => s + r.Wind_Capacity_Factor, 0) / records.length : 0.25;
      }
      availableCap = t.capacity_mw * cf;
      windCFUsed = cf;
      windAvailMw = availableCap;
    } else {
      availableCap = t.capacity_mw * cf;
    }

    if (availableCap > 0) {
      candidates.push({
        id: t.technology,
        isGrid: false,
        capacity: availableCap,
        baseEnergyCost,
        emissionFactor: t.emission_factor_tco2_mwh,
        carbonCostRate,
        effectiveCost: effCost,
      });
    }
  }

  // Grid has NO upper bound (unrestricted, infinite capacity, non-negative)
  candidates.push({
    id: 'Grid',
    isGrid: true,
    capacity: Infinity,
    baseEnergyCost: gridPrice,
    emissionFactor: gridCo2_tMwh,
    carbonCostRate: gridCo2_tMwh * carbonPrice,
    effectiveCost: gridEffectiveCost,
  });

  // Sort by effective cost ascending (Merit-Order linear dispatch)
  candidates.sort((a, b) => a.effectiveCost - b.effectiveCost);

  let remDemand = demand;
  const generation: Record<string, number> = {};
  const energyCostBySource: Record<string, number> = {};
  const carbonCostBySource: Record<string, number> = {};
  const totalCostBySource: Record<string, number> = {};
  const co2BySource: Record<string, number> = {};

  for (const t of techs) {
    generation[t.technology] = 0;
    energyCostBySource[t.technology] = 0;
    carbonCostBySource[t.technology] = 0;
    totalCostBySource[t.technology] = 0;
    co2BySource[t.technology] = 0;
  }
  energyCostBySource['Grid'] = 0;
  carbonCostBySource['Grid'] = 0;
  totalCostBySource['Grid'] = 0;
  co2BySource['Grid'] = 0;

  let gridImport = 0;
  let totalEnergyCost = 0;
  let totalCarbonCost = 0;
  let totalCost = 0;
  let totalEmissions = 0;

  for (const c of candidates) {
    if (remDemand <= 1e-9) break;
    const alloc = Math.min(c.capacity, remDemand);
    if (alloc <= 0) continue;

    const sourceEnergyCost = alloc * c.baseEnergyCost;
    const sourceCarbonCost = alloc * c.carbonCostRate;
    const sourceTotalCost = sourceEnergyCost + sourceCarbonCost;
    const sourceCo2 = alloc * c.emissionFactor;

    if (c.isGrid) {
      gridImport += alloc;
      energyCostBySource['Grid'] = (energyCostBySource['Grid'] || 0) + sourceEnergyCost;
      carbonCostBySource['Grid'] = (carbonCostBySource['Grid'] || 0) + sourceCarbonCost;
      totalCostBySource['Grid'] = (totalCostBySource['Grid'] || 0) + sourceTotalCost;
      co2BySource['Grid'] = (co2BySource['Grid'] || 0) + sourceCo2;
    } else {
      generation[c.id] = (generation[c.id] || 0) + alloc;
      energyCostBySource[c.id] = (energyCostBySource[c.id] || 0) + sourceEnergyCost;
      carbonCostBySource[c.id] = (carbonCostBySource[c.id] || 0) + sourceCarbonCost;
      totalCostBySource[c.id] = (totalCostBySource[c.id] || 0) + sourceTotalCost;
      co2BySource[c.id] = (co2BySource[c.id] || 0) + sourceCo2;
    }

    totalEnergyCost += sourceEnergyCost;
    totalCarbonCost += sourceCarbonCost;
    totalCost += sourceTotalCost;
    totalEmissions += sourceCo2;

    remDemand -= alloc;
  }

  const totalOnsiteGen = Object.values(generation).reduce((sum, v) => sum + v, 0);
  const totalGen = totalOnsiteGen + gridImport; // Must equal 100 MW

  return {
    hour,
    label: `${hour.toString().padStart(2, '0')}:00`,
    gridPrice,
    gridCo2Intensity: gridCo2_tMwh,
    gridEffectiveCost,
    gridImport,
    windCapacityFactor: windCFUsed,
    windAvailableMw: windAvailMw,
    generation,
    totalGeneration: totalGen,
    energyCostBySource,
    carbonCostBySource,
    totalCostBySource,
    co2BySource,
    totalEnergyCost,
    totalCarbonCost,
    totalCost,
    avgCostPerMwh: demand > 0 ? totalCost / demand : 0,
    totalCo2Emissions: totalEmissions,
    effectiveTechCosts,
  };
}

export function computeProfileSummary(
  profileType: ProfileType,
  options?: OptimizationOptions
): ProfileSummary {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  let title = '';
  let description = '';
  let hourlyAverages: { hour: number; price: number; co2Kg: number; windCF: number }[] = [];

  if (profileType === 'annual') {
    title = 'Annual Average Profile';
    description =
      'Average of all 8,760 hourly observations (price, grid CO2, wind CF) across the entire year for each hour of the day (00:00–23:00).';
    hourlyAverages = hours.map((h) => {
      const records = ANNUAL_8760_DATA.filter((r) => r.Hour === h);
      const avgPrice = records.reduce((s, r) => s + r.Price, 0) / (records.length || 1);
      const avgCo2 = records.reduce((s, r) => s + r.CO2_Intensity, 0) / (records.length || 1);
      const avgWindCF = records.reduce((s, r) => s + r.Wind_Capacity_Factor, 0) / (records.length || 1);
      return { hour: h, price: avgPrice, co2Kg: avgCo2, windCF: avgWindCF };
    });
  } else if (profileType === 'summer') {
    title = 'Seasonal Average Profile (Summer)';
    description =
      'Average of hourly observations during summer months (June, July, August) for each hour of the day (00:00–23:00).';
    hourlyAverages = hours.map((h) => {
      const records = ANNUAL_8760_DATA.filter((r) => r.Season === 'Summer' && r.Hour === h);
      const avgPrice = records.reduce((s, r) => s + r.Price, 0) / (records.length || 1);
      const avgCo2 = records.reduce((s, r) => s + r.CO2_Intensity, 0) / (records.length || 1);
      const avgWindCF = records.reduce((s, r) => s + r.Wind_Capacity_Factor, 0) / (records.length || 1);
      return { hour: h, price: avgPrice, co2Kg: avgCo2, windCF: avgWindCF };
    });
  } else if (profileType === 'august') {
    title = 'Monthly Average Profile (August)';
    description = 'Average of hourly observations in August for each hour of the day (00:00–23:00).';
    hourlyAverages = hours.map((h) => {
      const records = ANNUAL_8760_DATA.filter((r) => r.Month === 8 && r.Hour === h);
      const avgPrice = records.reduce((s, r) => s + r.Price, 0) / (records.length || 1);
      const avgCo2 = records.reduce((s, r) => s + r.CO2_Intensity, 0) / (records.length || 1);
      const avgWindCF = records.reduce((s, r) => s + r.Wind_Capacity_Factor, 0) / (records.length || 1);
      return { hour: h, price: avgPrice, co2Kg: avgCo2, windCF: avgWindCF };
    });
  } else {
    title = 'Daily Profile (August 27)';
    description =
      'Actual measured hourly observations on August 27 without averaging across multiple days (00:00–23:00).';
    const aug27Records = ANNUAL_8760_DATA.filter((r) => r.Month === 8 && r.Day === 27);
    hourlyAverages = hours.map((h) => {
      const rec = aug27Records.find((r) => r.Hour === h);
      return {
        hour: h,
        price: rec ? rec.Price : 0,
        co2Kg: rec ? rec.CO2_Intensity : 0,
        windCF: rec ? rec.Wind_Capacity_Factor : 0,
      };
    });
  }

  const hourlyResults: HourDispatchResult[] = hourlyAverages.map((ha) =>
    solveHourDispatch(ha.hour, ha.price, ha.co2Kg, options, ha.windCF)
  );

  let total24hCost = 0;
  let total24hEnergyCost = 0;
  let total24hCarbonCost = 0;
  let total24hEmissions = 0;
  let totalGridImportMwh = 0;
  let totalOnsiteGenerationMwh = 0;

  const techs = options?.technologies ?? INITIAL_TECHNOLOGIES;
  const supplyMixSummary: Record<string, number> = { Grid: 0 };
  const energyCostSummary: Record<string, number> = { Grid: 0 };
  const carbonCostSummary: Record<string, number> = { Grid: 0 };
  const totalCostSummary: Record<string, number> = { Grid: 0 };
  const co2Summary: Record<string, number> = { Grid: 0 };

  for (const t of techs) {
    supplyMixSummary[t.technology] = 0;
    energyCostSummary[t.technology] = 0;
    carbonCostSummary[t.technology] = 0;
    totalCostSummary[t.technology] = 0;
    co2Summary[t.technology] = 0;
  }

  for (const res of hourlyResults) {
    total24hCost += res.totalCost;
    total24hEnergyCost += res.totalEnergyCost;
    total24hCarbonCost += res.totalCarbonCost;
    total24hEmissions += res.totalCo2Emissions;

    totalGridImportMwh += res.gridImport;
    supplyMixSummary['Grid'] += res.gridImport;
    energyCostSummary['Grid'] += res.energyCostBySource['Grid'] || 0;
    carbonCostSummary['Grid'] += res.carbonCostBySource['Grid'] || 0;
    totalCostSummary['Grid'] += res.totalCostBySource['Grid'] || 0;
    co2Summary['Grid'] += res.co2BySource['Grid'] || 0;

    for (const [tech, mw] of Object.entries(res.generation)) {
      supplyMixSummary[tech] = (supplyMixSummary[tech] || 0) + mw;
      totalOnsiteGenerationMwh += mw;
      energyCostSummary[tech] = (energyCostSummary[tech] || 0) + (res.energyCostBySource[tech] || 0);
      carbonCostSummary[tech] = (carbonCostSummary[tech] || 0) + (res.carbonCostBySource[tech] || 0);
      totalCostSummary[tech] = (totalCostSummary[tech] || 0) + (res.totalCostBySource[tech] || 0);
      co2Summary[tech] = (co2Summary[tech] || 0) + (res.co2BySource[tech] || 0);
    }
  }

  const totalGenerationMwh = totalGridImportMwh + totalOnsiteGenerationMwh; // Exactly 2,400 MWh
  const supplyMixPercentages: Record<string, number> = {};
  for (const [k, v] of Object.entries(supplyMixSummary)) {
    supplyMixPercentages[k] = totalGenerationMwh > 0 ? (v / totalGenerationMwh) * 100 : 0;
  }

  // Build complete source accounting records
  const avgWindCFProfile = hourlyAverages.reduce((s, h) => s + h.windCF, 0) / (hourlyAverages.length || 1);

  const sourceAccounting: SourceAccounting[] = [];

  for (const t of techs) {
    const isWind = t.technology.toLowerCase().includes('wind');
    const cf = isWind ? avgWindCFProfile : t.capacity_factor;
    const maxAvail = t.capacity_mw * cf;
    const genMwh = supplyMixSummary[t.technology] || 0;
    const co2Tons = co2Summary[t.technology] || 0;
    const eCost = energyCostSummary[t.technology] || 0;
    const cCost = carbonCostSummary[t.technology] || 0;
    const tCost = totalCostSummary[t.technology] || 0;
    const conf = TECHNOLOGY_COLORS[t.technology] || { label: t.technology };

    sourceAccounting.push({
      source: t.technology,
      label: conf.label,
      isGrid: false,
      installedCapacityMw: t.capacity_mw,
      capacityFactor: cf,
      maxAvailableMw: maxAvail,
      generationMwh: genMwh,
      sharePercent: totalGenerationMwh > 0 ? (genMwh / totalGenerationMwh) * 100 : 0,
      co2EmissionsTons: co2Tons,
      co2SharePercent: total24hEmissions > 0 ? (co2Tons / total24hEmissions) * 100 : 0,
      energyCostEur: eCost,
      carbonCostEur: cCost,
      totalCostEur: tCost,
      avgCostPerMwh: genMwh > 0 ? tCost / genMwh : 0,
    });
  }

  // Add Grid record
  const gridGenMwh = supplyMixSummary['Grid'] || 0;
  const gridCo2Tons = co2Summary['Grid'] || 0;
  const gridECost = energyCostSummary['Grid'] || 0;
  const gridCCost = carbonCostSummary['Grid'] || 0;
  const gridTCost = totalCostSummary['Grid'] || 0;

  sourceAccounting.push({
    source: 'Grid',
    label: 'Offsite Grid',
    isGrid: true,
    installedCapacityMw: Infinity,
    capacityFactor: 1.0,
    maxAvailableMw: Infinity,
    generationMwh: gridGenMwh,
    sharePercent: totalGenerationMwh > 0 ? (gridGenMwh / totalGenerationMwh) * 100 : 0,
    co2EmissionsTons: gridCo2Tons,
    co2SharePercent: total24hEmissions > 0 ? (gridCo2Tons / total24hEmissions) * 100 : 0,
    energyCostEur: gridECost,
    carbonCostEur: gridCCost,
    totalCostEur: gridTCost,
    avgCostPerMwh: gridGenMwh > 0 ? gridTCost / gridGenMwh : 0,
  });

  return {
    profileType,
    title,
    description,
    hourlyResults,
    total24hCost,
    avg24hCostPerMwh: totalGenerationMwh > 0 ? total24hCost / totalGenerationMwh : 0,
    total24hEmissions,
    total24hEnergyCost,
    total24hCarbonCost,
    totalGenerationMwh,
    totalGridImportMwh,
    totalOnsiteGenerationMwh,
    sourceAccounting,
    supplyMixSummary,
    supplyMixPercentages,
  };
}

export interface AnnualHeatmapData {
  days: {
    dayOfYear: number;
    month: number;
    day: number;
    dateLabel: string;
    hours: {
      hour: number;
      gridPrice: number;
      gridCo2Intensity: number; // in tCO2/MWh
      gridEffectiveCost: number; // in €/MWh
      totalOptimizedCost: number; // in €
      costPerMwh: number; // in €/MWh
      gridImportMw: number;
      onsiteGenerationMw: number;
      windCapacityFactor: number;
      windAvailableMw?: number;
    }[];
  }[];
  minGridCost: number;
  maxGridCost: number;
  minOptimizedCost: number;
  maxOptimizedCost: number;
  totalAnnualCost: number;
  avgAnnualCostPerMwh: number;
  totalAnnualEmissions: number;
}

export function computeAnnualHeatmapData(options?: OptimizationOptions): AnnualHeatmapData {
  const daysMap = new Map<number, HourlyRecord[]>();

  // Group by day of year (1 to 365)
  ANNUAL_8760_DATA.forEach((r, idx) => {
    const dayOfYear = Math.floor(idx / 24) + 1;
    if (!daysMap.has(dayOfYear)) {
      daysMap.set(dayOfYear, []);
    }
    daysMap.get(dayOfYear)!.push(r);
  });

  let minGridCost = Infinity;
  let maxGridCost = -Infinity;
  let minOptimizedCost = Infinity;
  let maxOptimizedCost = -Infinity;
  let totalAnnualCost = 0;
  let totalAnnualEmissions = 0;

  const days: AnnualHeatmapData['days'] = [];

  for (let d = 1; d <= 365; d++) {
    const recs = daysMap.get(d) || [];
    const first = recs[0] || { Month: 1, Day: 1, Timestamp: '' };
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateLabel = `${monthNames[first.Month - 1]} ${first.Day}`;

    const hours = recs.map((r) => {
      const dispatch = solveHourDispatch(r.Hour, r.Price, r.CO2_Intensity, options, r.Wind_Capacity_Factor);
      const gridEff = dispatch.gridEffectiveCost;
      const optCost = dispatch.totalCost;
      const costPerMwh = dispatch.avgCostPerMwh;

      if (gridEff < minGridCost) minGridCost = gridEff;
      if (gridEff > maxGridCost) maxGridCost = gridEff;
      if (costPerMwh < minOptimizedCost) minOptimizedCost = costPerMwh;
      if (costPerMwh > maxOptimizedCost) maxOptimizedCost = costPerMwh;

      totalAnnualCost += optCost;
      totalAnnualEmissions += dispatch.totalCo2Emissions;

      return {
        hour: r.Hour,
        gridPrice: r.Price,
        gridCo2Intensity: dispatch.gridCo2Intensity,
        gridEffectiveCost: gridEff,
        totalOptimizedCost: optCost,
        costPerMwh,
        gridImportMw: dispatch.gridImport,
        onsiteGenerationMw: dispatch.totalGeneration - dispatch.gridImport,
        windCapacityFactor: r.Wind_Capacity_Factor,
        windAvailableMw: dispatch.windAvailableMw,
      };
    });

    days.push({
      dayOfYear: d,
      month: first.Month,
      day: first.Day,
      dateLabel,
      hours,
    });
  }

  const demand = DEFAULT_DATACENTER_DEMAND_MW;
  const totalAnnualDemandMwh = demand * 8760;

  return {
    days,
    minGridCost: Number.isFinite(minGridCost) ? minGridCost : 0,
    maxGridCost: Number.isFinite(maxGridCost) ? maxGridCost : 100,
    minOptimizedCost: Number.isFinite(minOptimizedCost) ? minOptimizedCost : 0,
    maxOptimizedCost: Number.isFinite(maxOptimizedCost) ? maxOptimizedCost : 100,
    totalAnnualCost,
    avgAnnualCostPerMwh: totalAnnualDemandMwh > 0 ? totalAnnualCost / totalAnnualDemandMwh : 0,
    totalAnnualEmissions,
  };
}

export const TECHNOLOGY_COLORS: Record<string, { bg: string; fill: string; stroke: string; label: string }> = {
  Wind: { bg: 'bg-emerald-500', fill: '#10b981', stroke: '#059669', label: 'Wind' },
  'Gas turebine': { bg: 'bg-amber-500', fill: '#f59e0b', stroke: '#d97706', label: 'Gas Turbine' },
  'Gas Turbine': { bg: 'bg-amber-500', fill: '#f59e0b', stroke: '#d97706', label: 'Gas Turbine' },
  'Gas turbine': { bg: 'bg-amber-500', fill: '#f59e0b', stroke: '#d97706', label: 'Gas Turbine' },
  Coal: { bg: 'bg-stone-600', fill: '#57534e', stroke: '#44403c', label: 'Coal' },
  Nuclear: { bg: 'bg-indigo-500', fill: '#6366f1', stroke: '#4f46e5', label: 'Nuclear' },
  Biomass: { bg: 'bg-lime-600', fill: '#65a30d', stroke: '#4d7c0f', label: 'Biomass' },
  'BioCH4-Gas Turebine': { bg: 'bg-teal-500', fill: '#14b8a6', stroke: '#0d9488', label: 'Bio-CH4 Gas Turbine' },
  'Bio-CH4 Gas Turbine': { bg: 'bg-teal-500', fill: '#14b8a6', stroke: '#0d9488', label: 'Bio-CH4 Gas Turbine' },
  Grid: { bg: 'bg-sky-500', fill: '#0ea5e9', stroke: '#0284c7', label: 'Offsite Grid' },
  'Offsite Grid': { bg: 'bg-sky-500', fill: '#0ea5e9', stroke: '#0284c7', label: 'Offsite Grid' },
};

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function getSeasonForMonth(month: number): SeasonName {
  if (month === 12 || month === 1 || month === 2) return 'Winter';
  if (month >= 3 && month <= 5) return 'Spring';
  if (month >= 6 && month <= 8) return 'Summer';
  return 'Autumn';
}

export function identifyPeriodInfo(selectedDateStr: string): PeriodIdentification {
  // selectedDateStr format: YYYY-MM-DD (e.g. 2025-08-27 or 2025-07-15)
  const parts = selectedDateStr.split('-');
  const year = parseInt(parts[0], 10) || 2025;
  const month = parseInt(parts[1], 10) || 8;
  const day = parseInt(parts[2], 10) || 27;

  const monthName = MONTH_NAMES[month - 1] || 'August';
  const seasonName = getSeasonForMonth(month);

  let seasonLabel = '';
  if (seasonName === 'Winter') {
    seasonLabel = month === 12 ? `Winter ${year}–${year + 1} (Dec, Jan, Feb)` : `Winter ${year - 1}–${year} (Dec, Jan, Feb)`;
  } else if (seasonName === 'Spring') {
    seasonLabel = `Spring ${year} (Mar, Apr, May)`;
  } else if (seasonName === 'Summer') {
    seasonLabel = `Summer ${year} (Jun, Jul, Aug)`;
  } else {
    seasonLabel = `Autumn ${year} (Sep, Oct, Nov)`;
  }

  return {
    selectedDate: selectedDateStr,
    dayLabel: `${day} ${monthName} ${year}`,
    monthNumber: month,
    monthLabel: `${monthName} ${year}`,
    seasonName,
    seasonLabel,
    yearNumber: year,
    yearLabel: `${year} (Full Year 8,760h)`,
  };
}

export function computePeriodDispatchSummary(
  timeWindow: TimeWindow,
  selectedDateStr: string,
  options?: OptimizationOptions
): PeriodDispatchSummary {
  const info = identifyPeriodInfo(selectedDateStr);
  const parts = selectedDateStr.split('-');
  const day = parseInt(parts[2], 10) || 27;

  let filteredRecords: HourlyRecord[] = [];
  let title = '';
  let periodLabel = '';

  if (timeWindow === 'day') {
    title = `Daily Hourly Dispatch: ${info.dayLabel}`;
    periodLabel = info.dayLabel;
    filteredRecords = ANNUAL_8760_DATA.filter((r) => r.Month === info.monthNumber && r.Day === day);
  } else if (timeWindow === 'month') {
    title = `Monthly Hourly Dispatch: ${info.monthLabel}`;
    periodLabel = info.monthLabel;
    filteredRecords = ANNUAL_8760_DATA.filter((r) => r.Month === info.monthNumber);
  } else if (timeWindow === 'season') {
    title = `Seasonal Hourly Dispatch: ${info.seasonLabel}`;
    periodLabel = info.seasonLabel;
    if (info.seasonName === 'Winter') {
      filteredRecords = ANNUAL_8760_DATA.filter((r) => r.Month === 12 || r.Month === 1 || r.Month === 2);
    } else if (info.seasonName === 'Spring') {
      filteredRecords = ANNUAL_8760_DATA.filter((r) => r.Month === 3 || r.Month === 4 || r.Month === 5);
    } else if (info.seasonName === 'Summer') {
      filteredRecords = ANNUAL_8760_DATA.filter((r) => r.Month === 6 || r.Month === 7 || r.Month === 8);
    } else {
      filteredRecords = ANNUAL_8760_DATA.filter((r) => r.Month === 9 || r.Month === 10 || r.Month === 11);
    }
  } else {
    title = `Annual Hourly Dispatch: ${info.yearLabel}`;
    periodLabel = info.yearLabel;
    filteredRecords = ANNUAL_8760_DATA;
  }

  const startDate = filteredRecords[0]?.Timestamp || '';
  const endDate = filteredRecords[filteredRecords.length - 1]?.Timestamp || '';
  const totalHours = filteredRecords.length;

  const hourlyResults: PeriodHourlyDispatchResult[] = filteredRecords.map((r) => {
    const dispatch = solveHourDispatch(r.Hour, r.Price, r.CO2_Intensity, options, r.Wind_Capacity_Factor);
    const monthShort = MONTH_NAMES[r.Month - 1]?.substring(0, 3) || `M${r.Month}`;
    const formattedTime =
      timeWindow === 'day'
        ? `${r.Hour.toString().padStart(2, '0')}:00`
        : `${monthShort} ${r.Day.toString().padStart(2, '0')} ${r.Hour.toString().padStart(2, '0')}:00`;

    return {
      ...dispatch,
      timestamp: r.Timestamp,
      month: r.Month,
      day: r.Day,
      formattedTime,
      season: r.Season,
    };
  });

  let totalSystemCostEur = 0;
  let totalEnergyCostEur = 0;
  let totalCarbonCostEur = 0;
  let totalCo2EmissionsTons = 0;
  let totalGridImportMwh = 0;
  let totalOnsiteGenerationMwh = 0;

  const techs = options?.technologies ?? INITIAL_TECHNOLOGIES;
  const supplyMixSummary: Record<string, number> = { Grid: 0 };
  const energyCostSummary: Record<string, number> = { Grid: 0 };
  const carbonCostSummary: Record<string, number> = { Grid: 0 };
  const totalCostSummary: Record<string, number> = { Grid: 0 };
  const co2Summary: Record<string, number> = { Grid: 0 };

  for (const t of techs) {
    supplyMixSummary[t.technology] = 0;
    energyCostSummary[t.technology] = 0;
    carbonCostSummary[t.technology] = 0;
    totalCostSummary[t.technology] = 0;
    co2Summary[t.technology] = 0;
  }

  for (const res of hourlyResults) {
    totalSystemCostEur += res.totalCost;
    totalEnergyCostEur += res.totalEnergyCost;
    totalCarbonCostEur += res.totalCarbonCost;
    totalCo2EmissionsTons += res.totalCo2Emissions;

    totalGridImportMwh += res.gridImport;
    supplyMixSummary['Grid'] += res.gridImport;
    energyCostSummary['Grid'] += res.energyCostBySource['Grid'] || 0;
    carbonCostSummary['Grid'] += res.carbonCostBySource['Grid'] || 0;
    totalCostSummary['Grid'] += res.totalCostBySource['Grid'] || 0;
    co2Summary['Grid'] += res.co2BySource['Grid'] || 0;

    for (const [tech, mw] of Object.entries(res.generation)) {
      supplyMixSummary[tech] = (supplyMixSummary[tech] || 0) + mw;
      totalOnsiteGenerationMwh += mw;
      energyCostSummary[tech] = (energyCostSummary[tech] || 0) + (res.energyCostBySource[tech] || 0);
      carbonCostSummary[tech] = (carbonCostSummary[tech] || 0) + (res.carbonCostBySource[tech] || 0);
      totalCostSummary[tech] = (totalCostSummary[tech] || 0) + (res.totalCostBySource[tech] || 0);
      co2Summary[tech] = (co2Summary[tech] || 0) + (res.co2BySource[tech] || 0);
    }
  }

  const totalGenerationMwh = totalGridImportMwh + totalOnsiteGenerationMwh;
  const totalDemandMwh = totalHours * (options?.demandMw ?? DEFAULT_DATACENTER_DEMAND_MW);

  const supplyMixPercentages: Record<string, number> = {};
  for (const [k, v] of Object.entries(supplyMixSummary)) {
    supplyMixPercentages[k] = totalGenerationMwh > 0 ? (v / totalGenerationMwh) * 100 : 0;
  }

  // Calculate actual average wind capacity factor over this period
  const avgWindCFInPeriod =
    filteredRecords.length > 0
      ? filteredRecords.reduce((s, r) => s + r.Wind_Capacity_Factor, 0) / filteredRecords.length
      : 0.25;

  const sourceAccounting: SourceAccounting[] = [];

  for (const t of techs) {
    const isWind = t.technology.toLowerCase().includes('wind');
    const cf = isWind ? avgWindCFInPeriod : t.capacity_factor;
    const maxAvail = t.capacity_mw * cf;
    const genMwh = supplyMixSummary[t.technology] || 0;
    const co2Tons = co2Summary[t.technology] || 0;
    const eCost = energyCostSummary[t.technology] || 0;
    const cCost = carbonCostSummary[t.technology] || 0;
    const tCost = totalCostSummary[t.technology] || 0;
    const conf = TECHNOLOGY_COLORS[t.technology] || { label: t.technology };

    sourceAccounting.push({
      source: t.technology,
      label: conf.label,
      isGrid: false,
      installedCapacityMw: t.capacity_mw,
      capacityFactor: cf,
      maxAvailableMw: maxAvail,
      generationMwh: genMwh,
      sharePercent: totalGenerationMwh > 0 ? (genMwh / totalGenerationMwh) * 100 : 0,
      co2EmissionsTons: co2Tons,
      co2SharePercent: totalCo2EmissionsTons > 0 ? (co2Tons / totalCo2EmissionsTons) * 100 : 0,
      energyCostEur: eCost,
      carbonCostEur: cCost,
      totalCostEur: tCost,
      avgCostPerMwh: genMwh > 0 ? tCost / genMwh : 0,
    });
  }

  const gridGenMwh = supplyMixSummary['Grid'] || 0;
  const gridCo2Tons = co2Summary['Grid'] || 0;
  const gridECost = energyCostSummary['Grid'] || 0;
  const gridCCost = carbonCostSummary['Grid'] || 0;
  const gridTCost = totalCostSummary['Grid'] || 0;

  sourceAccounting.push({
    source: 'Grid',
    label: 'Offsite Grid',
    isGrid: true,
    installedCapacityMw: Infinity,
    capacityFactor: 1.0,
    maxAvailableMw: Infinity,
    generationMwh: gridGenMwh,
    sharePercent: totalGenerationMwh > 0 ? (gridGenMwh / totalGenerationMwh) * 100 : 0,
    co2EmissionsTons: gridCo2Tons,
    co2SharePercent: totalCo2EmissionsTons > 0 ? (gridCo2Tons / totalCo2EmissionsTons) * 100 : 0,
    energyCostEur: gridECost,
    carbonCostEur: gridCCost,
    totalCostEur: gridTCost,
    avgCostPerMwh: gridGenMwh > 0 ? gridTCost / gridGenMwh : 0,
  });

  return {
    timeWindow,
    title,
    periodLabel,
    startDate,
    endDate,
    totalHours,
    hourlyResults,
    totalDemandMwh,
    totalGenerationMwh,
    totalGridImportMwh,
    totalOnsiteGenerationMwh,
    totalEnergyCostEur,
    totalCarbonCostEur,
    totalSystemCostEur,
    avgCostPerMwh: totalGenerationMwh > 0 ? totalSystemCostEur / totalGenerationMwh : 0,
    totalCo2EmissionsTons,
    avgCo2IntensityKgMwh: totalGenerationMwh > 0 ? (totalCo2EmissionsTons * 1000) / totalGenerationMwh : 0,
    sourceAccounting,
    supplyMixSummary,
    supplyMixPercentages,
  };
}

export function computeFourPeriodComparison(
  selectedDateStr: string,
  options?: OptimizationOptions
): FourPeriodComparison {
  const dateInfo = identifyPeriodInfo(selectedDateStr);
  const daySummary = computePeriodDispatchSummary('day', selectedDateStr, options);
  const monthSummary = computePeriodDispatchSummary('month', selectedDateStr, options);
  const seasonSummary = computePeriodDispatchSummary('season', selectedDateStr, options);
  const yearSummary = computePeriodDispatchSummary('year', selectedDateStr, options);

  return {
    dateInfo,
    daySummary,
    monthSummary,
    seasonSummary,
    yearSummary,
  };
}


