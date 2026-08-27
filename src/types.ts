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
  grid_amount_mwh: number;
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
  totalGeneration: number; // MW
  totalCost: number; // € for this hour
  avgCostPerMwh: number; // €/MWh
  totalCo2Emissions: number; // tCO2
  effectiveTechCosts: Record<string, number>; // €/MWh
}

export type ProfileType = 'annual' | 'summer' | 'august' | 'august27';

export interface ProfileSummary {
  profileType: ProfileType;
  title: string;
  description: string;
  hourlyResults: HourDispatchResult[];
  total24hCost: number;
  avg24hCostPerMwh: number;
  total24hEmissions: number;
  supplyMixSummary: Record<string, number>; // Tech -> Total MWh over 24h
  supplyMixPercentages: Record<string, number>;
}
