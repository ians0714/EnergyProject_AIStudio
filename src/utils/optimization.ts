import { TechnologyParam, GridParam, HourlyRecord, HourDispatchResult, ProfileType, ProfileSummary } from '../types';
import { INITIAL_TECHNOLOGIES, INITIAL_GRIDS, ANNUAL_8760_DATA, DEFAULT_CARBON_PRICE, DEFAULT_DATACENTER_DEMAND_MW } from '../data/energyDataset';

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
  const demand = options?.demandMw ?? DEFAULT_DATACENTER_DEMAND_MW;
  const carbonPrice = options?.carbonPrice ?? DEFAULT_CARBON_PRICE;
  const techs = options?.technologies ?? INITIAL_TECHNOLOGIES;
  const gridParams = options?.grids ?? INITIAL_GRIDS;

  const gridCo2_tMwh = gridCo2IntensityKg / 1000.0;
  const gridEffectiveCost = gridPrice + gridCo2_tMwh * carbonPrice;
  const gridCap = (gridParams[hour % 24]?.grid_amount_mwh ?? 11250) / 365.0;

  const effectiveTechCosts: Record<string, number> = {};
  const candidates: {
    id: string;
    isGrid: boolean;
    capacity: number;
    effectiveCost: number;
    emissionFactor: number;
  }[] = [];

  let windCFUsed: number | undefined = undefined;
  let windAvailMw: number | undefined = undefined;

  for (const t of techs) {
    const effCost = t.LCOE_eur_mwh + t.additional_cost_eur_mwh + t.emission_factor_tco2_mwh * carbonPrice;
    effectiveTechCosts[t.technology] = effCost;
    const isWind = t.technology.toLowerCase().includes('wind');
    const cf = isWind && windCapacityFactor !== undefined ? windCapacityFactor : t.capacity_factor;
    const cap = t.capacity_mw * cf;
    if (isWind) {
      windCFUsed = cf;
      windAvailMw = cap;
    }
    if (cap > 0) {
      candidates.push({
        id: t.technology,
        isGrid: false,
        capacity: cap,
        effectiveCost: effCost,
        emissionFactor: t.emission_factor_tco2_mwh,
      });
    }
  }

  candidates.push({
    id: 'Grid',
    isGrid: true,
    capacity: gridCap,
    effectiveCost: gridEffectiveCost,
    emissionFactor: gridCo2_tMwh,
  });

  // Sort by effective cost ascending
  candidates.sort((a, b) => a.effectiveCost - b.effectiveCost);

  let remDemand = demand;
  const generation: Record<string, number> = {};
  for (const t of techs) {
    generation[t.technology] = 0;
  }
  let gridImport = 0;
  let totalCost = 0;
  let totalEmissions = 0;

  for (const c of candidates) {
    const alloc = Math.min(c.capacity, remDemand);
    if (c.isGrid) {
      gridImport += alloc;
    } else {
      generation[c.id] = (generation[c.id] || 0) + alloc;
    }
    totalCost += alloc * c.effectiveCost;
    totalEmissions += alloc * c.emissionFactor;
    remDemand -= alloc;
    if (remDemand <= 1e-9) break;
  }

  const totalGen = Object.values(generation).reduce((sum, v) => sum + v, 0);

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
    description = 'Average of all 8,760 hourly observations (price, grid CO2, wind CF) across the entire year for each hour of the day (00:00–23:00).';
    hourlyAverages = hours.map((h) => {
      const records = ANNUAL_8760_DATA.filter((r) => r.Hour === h);
      const avgPrice = records.reduce((s, r) => s + r.Price, 0) / (records.length || 1);
      const avgCo2 = records.reduce((s, r) => s + r.CO2_Intensity, 0) / (records.length || 1);
      const avgWindCF = records.reduce((s, r) => s + r.Wind_Capacity_Factor, 0) / (records.length || 1);
      return { hour: h, price: avgPrice, co2Kg: avgCo2, windCF: avgWindCF };
    });
  } else if (profileType === 'summer') {
    title = 'Seasonal Average Profile (Summer)';
    description = 'Average of hourly observations during summer months (June, July, August) for each hour of the day.';
    hourlyAverages = hours.map((h) => {
      const records = ANNUAL_8760_DATA.filter((r) => r.Season === 'Summer' && r.Hour === h);
      const avgPrice = records.reduce((s, r) => s + r.Price, 0) / (records.length || 1);
      const avgCo2 = records.reduce((s, r) => s + r.CO2_Intensity, 0) / (records.length || 1);
      const avgWindCF = records.reduce((s, r) => s + r.Wind_Capacity_Factor, 0) / (records.length || 1);
      return { hour: h, price: avgPrice, co2Kg: avgCo2, windCF: avgWindCF };
    });
  } else if (profileType === 'august') {
    title = 'Monthly Average Profile (August)';
    description = 'Average of hourly observations in August for each hour of the day.';
    hourlyAverages = hours.map((h) => {
      const records = ANNUAL_8760_DATA.filter((r) => r.Month === 8 && r.Hour === h);
      const avgPrice = records.reduce((s, r) => s + r.Price, 0) / (records.length || 1);
      const avgCo2 = records.reduce((s, r) => s + r.CO2_Intensity, 0) / (records.length || 1);
      const avgWindCF = records.reduce((s, r) => s + r.Wind_Capacity_Factor, 0) / (records.length || 1);
      return { hour: h, price: avgPrice, co2Kg: avgCo2, windCF: avgWindCF };
    });
  } else {
    title = 'Daily Profile (August 27)';
    description = 'Actual measured hourly observations on August 27 without averaging across multiple days.';
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
  let total24hEmissions = 0;
  const supplyMixSummary: Record<string, number> = { Grid: 0 };
  const techs = options?.technologies ?? INITIAL_TECHNOLOGIES;
  for (const t of techs) {
    supplyMixSummary[t.technology] = 0;
  }

  for (const res of hourlyResults) {
    total24hCost += res.totalCost;
    total24hEmissions += res.totalCo2Emissions;
    supplyMixSummary.Grid += res.gridImport;
    for (const [tech, mw] of Object.entries(res.generation)) {
      supplyMixSummary[tech] = (supplyMixSummary[tech] || 0) + mw;
    }
  }

  const totalSupplied = Object.values(supplyMixSummary).reduce((a, b) => a + b, 0);
  const supplyMixPercentages: Record<string, number> = {};
  for (const [k, v] of Object.entries(supplyMixSummary)) {
    supplyMixPercentages[k] = totalSupplied > 0 ? (v / totalSupplied) * 100 : 0;
  }

  const totalDemand24h = (options?.demandMw ?? DEFAULT_DATACENTER_DEMAND_MW) * 24;

  return {
    profileType,
    title,
    description,
    hourlyResults,
    total24hCost,
    avg24hCostPerMwh: totalDemand24h > 0 ? total24hCost / totalDemand24h : 0,
    total24hEmissions,
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
        onsiteGenerationMw: dispatch.totalGeneration,
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

  const demand = options?.demandMw ?? DEFAULT_DATACENTER_DEMAND_MW;
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
  'Wind': { bg: 'bg-emerald-500', fill: '#10b981', stroke: '#059669', label: 'Wind' },
  'Gas turebine': { bg: 'bg-amber-500', fill: '#f59e0b', stroke: '#d97706', label: 'Gas Turbine' },
  'Gas Turbine': { bg: 'bg-amber-500', fill: '#f59e0b', stroke: '#d97706', label: 'Gas Turbine' },
  'Gas turbine': { bg: 'bg-amber-500', fill: '#f59e0b', stroke: '#d97706', label: 'Gas Turbine' },
  'Coal': { bg: 'bg-stone-600', fill: '#57534e', stroke: '#44403c', label: 'Coal' },
  'Nuclear': { bg: 'bg-indigo-500', fill: '#6366f1', stroke: '#4f46e5', label: 'Nuclear' },
  'Biomass': { bg: 'bg-lime-600', fill: '#65a30d', stroke: '#4d7c0f', label: 'Biomass' },
  'BioCH4-Gas Turebine': { bg: 'bg-teal-500', fill: '#14b8a6', stroke: '#0d9488', label: 'Bio-CH4 Gas Turbine' },
  'Bio-CH4 Gas Turbine': { bg: 'bg-teal-500', fill: '#14b8a6', stroke: '#0d9488', label: 'Bio-CH4 Gas Turbine' },
  'Grid': { bg: 'bg-sky-500', fill: '#0ea5e9', stroke: '#0284c7', label: 'Offsite Grid' },
  'Offsite Grid': { bg: 'bg-sky-500', fill: '#0ea5e9', stroke: '#0284c7', label: 'Offsite Grid' },
};
