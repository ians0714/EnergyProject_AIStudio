export interface TechnologyParam {
  technology: string;
  capacity_mw: number;
  capacity_factor: number;
  LCOE_eur_mwh: number;
  additional_cost_eur_mwh: number;
  emission_factor_tco2_mwh: number;
}

export interface GridParam {
  time: string;
  grid_amount_mwh?: number;
  grid_price_eur_mwh: number;
  grid_carbon_intensity_tco2_mwh: number;
}

export interface HourlyRecord {
  Timestamp: string;
  Month: number;
  Day: number;
  Hour: number;
  Season: string;
  CO2_Intensity: number; // in gCO2/kWh (kgCO2/MWh)
  Price: number; // in €/MWh
  Wind_Capacity_Factor: number; // Hourly onshore capacity factor [0-1]
}

export interface SourceAccounting {
  source: string;
  label: string;
  isGrid: boolean;
  installedCapacityMw: number;
  capacityFactor: number;
  maxAvailableMw: number;
  generationMwh: number; // MWh over the period
  sharePercent: number; // % of total demand/generation
  co2EmissionsTons: number; // tCO2
  co2SharePercent: number; // % of total CO2
  energyCostEur: number; // € from LCOE / Grid wholesale
  carbonCostEur: number; // € from carbon emissions * carbon price
  totalCostEur: number; // energyCost + carbonCost
  avgCostPerMwh: number; // totalCostEur / generationMwh
}

export interface HourDispatchResult {
  hour: number;
  label: string;
  gridPrice: number;
  gridCo2Intensity: number; // in tCO2/MWh
  gridEffectiveCost: number; // in €/MWh
  gridImport: number; // MW
  windCapacityFactor?: number; // Hourly wind capacity factor used
  windAvailableMw?: number; // Wind MW available = Installed * CF
  generation: Record<string, number>; // MW per technology
  totalGeneration: number; // MW (always 100 MW)
  energyCostBySource: Record<string, number>; // € (pure energy generation / grid price cost)
  carbonCostBySource: Record<string, number>; // € (pure carbon cost)
  totalCostBySource: Record<string, number>; // € (energy + carbon cost per source)
  co2BySource: Record<string, number>; // tCO2 per source
  totalEnergyCost: number; // €
  totalCarbonCost: number; // €
  totalCost: number; // € for this hour (total system cost)
  avgCostPerMwh: number; // €/MWh
  totalCo2Emissions: number; // tCO2
  effectiveTechCosts: Record<string, number>; // €/MWh
}

export type TimeWindow = 'day' | 'month' | 'season' | 'year';

export type SeasonName = 'Winter' | 'Spring' | 'Summer' | 'Autumn';

export interface PeriodIdentification {
  selectedDate: string; // YYYY-MM-DD
  dayLabel: string; // e.g. "15 July 2025"
  monthNumber: number; // 1-12
  monthLabel: string; // e.g. "July 2025"
  seasonName: SeasonName; // "Summer"
  seasonLabel: string; // e.g. "Summer 2025 (Jun, Jul, Aug)" or "Winter (Dec, Jan, Feb)"
  yearNumber: number; // 2025
  yearLabel: string; // e.g. "2025 (Full Annual 8,760h)"
}

export interface PeriodHourlyDispatchResult extends HourDispatchResult {
  timestamp: string;
  month: number;
  day: number;
  formattedTime: string;
  season: string;
}

export interface PeriodDispatchSummary {
  timeWindow: TimeWindow;
  title: string;
  periodLabel: string;
  startDate: string;
  endDate: string;
  totalHours: number;
  hourlyResults: PeriodHourlyDispatchResult[];
  totalDemandMwh: number;
  totalGenerationMwh: number;
  totalGridImportMwh: number;
  totalOnsiteGenerationMwh: number;
  totalEnergyCostEur: number;
  totalCarbonCostEur: number;
  totalSystemCostEur: number;
  avgCostPerMwh: number;
  totalCo2EmissionsTons: number;
  avgCo2IntensityKgMwh: number;
  sourceAccounting: SourceAccounting[];
  supplyMixSummary: Record<string, number>;
  supplyMixPercentages: Record<string, number>;
}

export interface FourPeriodComparison {
  dateInfo: PeriodIdentification;
  daySummary: PeriodDispatchSummary;
  monthSummary: PeriodDispatchSummary;
  seasonSummary: PeriodDispatchSummary;
  yearSummary: PeriodDispatchSummary;
}

export type ProfileType = 'annual' | 'summer' | 'august' | 'august27';

export interface ProfileSummary {
  profileType: ProfileType;
  title: string;
  description: string;
  hourlyResults: HourDispatchResult[];
  total24hCost: number; // Total system cost (€)
  avg24hCostPerMwh: number; // €/MWh
  total24hEmissions: number; // Total CO2 emissions (tCO2)
  total24hEnergyCost: number; // Total energy cost (€)
  total24hCarbonCost: number; // Total carbon cost (€)
  totalGenerationMwh: number; // Total generation (2,400 MWh)
  totalGridImportMwh: number; // Grid import (MWh)
  totalOnsiteGenerationMwh: number; // Onsite generation (MWh)
  sourceAccounting: SourceAccounting[]; // Detailed breakdown by each energy source & grid
  supplyMixSummary: Record<string, number>; // Tech -> Total MWh over 24h
  supplyMixPercentages: Record<string, number>;
}


