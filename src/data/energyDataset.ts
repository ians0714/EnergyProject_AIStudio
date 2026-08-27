// Extracted and verified from data/input_data.xlsx, data/germany-seasonal-co2-v2(by-Notebook-LM).xlsx, and data/ninja-wind-country-DE-current_onshore-merra2 - 2023.csv
import { TechnologyParam, GridParam, HourlyRecord } from '../types';

export const DEFAULT_CARBON_PRICE: number = 200.0;
export const DEFAULT_DATACENTER_DEMAND_MW: number = 100;

export const INITIAL_TECHNOLOGIES: TechnologyParam[] = [
  {
    technology: 'Wind',
    capacity_mw: 30.0,
    capacity_factor: 0.35,
    LCOE_eur_mwh: 80.0,
    additional_cost_eur_mwh: 0.0,
    emission_factor_tco2_mwh: 0.0,
  },
  {
    technology: 'Gas turebine',
    capacity_mw: 40.0,
    capacity_factor: 0.9,
    LCOE_eur_mwh: 100.0,
    additional_cost_eur_mwh: 0.0,
    emission_factor_tco2_mwh: 0.35,
  },
  {
    technology: 'Coal',
    capacity_mw: 30.0,
    capacity_factor: 0.9,
    LCOE_eur_mwh: 70.0,
    additional_cost_eur_mwh: 0.0,
    emission_factor_tco2_mwh: 0.85,
  },
  {
    technology: 'Nuclear',
    capacity_mw: 0.0,
    capacity_factor: 0.95,
    LCOE_eur_mwh: 150.0,
    additional_cost_eur_mwh: 0.0,
    emission_factor_tco2_mwh: 0.0,
  },
  {
    technology: 'Biomass',
    capacity_mw: 30.0,
    capacity_factor: 0.8,
    LCOE_eur_mwh: 200.0,
    additional_cost_eur_mwh: 0.0,
    emission_factor_tco2_mwh: 0.1,
  },
  {
    technology: 'BioCH4-Gas Turebine',
    capacity_mw: 20.0,
    capacity_factor: 0.8,
    LCOE_eur_mwh: 350.0,
    additional_cost_eur_mwh: 0.0,
    emission_factor_tco2_mwh: 0.0,
  },
];

export const INITIAL_GRIDS: GridParam[] = [
  {
    time: 'Hourly Data (8760h)',
    grid_amount_mwh: 11250,
    grid_price_eur_mwh: 89.0,
    grid_carbon_intensity_tco2_mwh: 0.3238,
  },
];

export const ANNUAL_8760_DATA: HourlyRecord[] = [
  {"Timestamp": "2025-01-01 00:00", "Month": 1, "Day": 1, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.739945},
  {"Timestamp": "2025-01-01 01:00", "Month": 1, "Day": 1, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.736138},
  {"Timestamp": "2025-01-01 02:00", "Month": 1, "Day": 1, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.735283},
  {"Timestamp": "2025-01-01 03:00", "Month": 1, "Day": 1, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.728194},
  {"Timestamp": "2025-01-01 04:00", "Month": 1, "Day": 1, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.714988},
  {"Timestamp": "2025-01-01 05:00", "Month": 1, "Day": 1, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.705622},
  {"Timestamp": "2025-01-01 06:00", "Month": 1, "Day": 1, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.691835},
  {"Timestamp": "2025-01-01 07:00", "Month": 1, "Day": 1, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.665659},
  {"Timestamp": "2025-01-01 08:00", "Month": 1, "Day": 1, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.624156},
  {"Timestamp": "2025-01-01 09:00", "Month": 1, "Day": 1, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.573418},
  {"Timestamp": "2025-01-01 10:00", "Month": 1, "Day": 1, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.53455},
  {"Timestamp": "2025-01-01 11:00", "Month": 1, "Day": 1, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.508755},
  {"Timestamp": "2025-01-01 12:00", "Month": 1, "Day": 1, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.47737},
  {"Timestamp": "2025-01-01 13:00", "Month": 1, "Day": 1, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.4413},
  {"Timestamp": "2025-01-01 14:00", "Month": 1, "Day": 1, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.413821},
  {"Timestamp": "2025-01-01 15:00", "Month": 1, "Day": 1, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.390029},
  {"Timestamp": "2025-01-01 16:00", "Month": 1, "Day": 1, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.362122},
  {"Timestamp": "2025-01-01 17:00", "Month": 1, "Day": 1, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.349623},
  {"Timestamp": "2025-01-01 18:00", "Month": 1, "Day": 1, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.339823},
  {"Timestamp": "2025-01-01 19:00", "Month": 1, "Day": 1, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.332892},
  {"Timestamp": "2025-01-01 20:00", "Month": 1, "Day": 1, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.325697},
  {"Timestamp": "2025-01-01 21:00", "Month": 1, "Day": 1, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.324133},
  {"Timestamp": "2025-01-01 22:00", "Month": 1, "Day": 1, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.31358},
  {"Timestamp": "2025-01-01 23:00", "Month": 1, "Day": 1, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.31116},
  {"Timestamp": "2025-01-02 00:00", "Month": 1, "Day": 2, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.323515},
  {"Timestamp": "2025-01-02 01:00", "Month": 1, "Day": 2, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.344412},
  {"Timestamp": "2025-01-02 02:00", "Month": 1, "Day": 2, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.359034},
  {"Timestamp": "2025-01-02 03:00", "Month": 1, "Day": 2, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.361504},
  {"Timestamp": "2025-01-02 04:00", "Month": 1, "Day": 2, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.3764},
  {"Timestamp": "2025-01-02 05:00", "Month": 1, "Day": 2, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.382918},
  {"Timestamp": "2025-01-02 06:00", "Month": 1, "Day": 2, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.386172},
  {"Timestamp": "2025-01-02 07:00", "Month": 1, "Day": 2, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.383511},
  {"Timestamp": "2025-01-02 08:00", "Month": 1, "Day": 2, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.371463},
  {"Timestamp": "2025-01-02 09:00", "Month": 1, "Day": 2, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.34279},
  {"Timestamp": "2025-01-02 10:00", "Month": 1, "Day": 2, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.322829},
  {"Timestamp": "2025-01-02 11:00", "Month": 1, "Day": 2, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.329403},
  {"Timestamp": "2025-01-02 12:00", "Month": 1, "Day": 2, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.345772},
  {"Timestamp": "2025-01-02 13:00", "Month": 1, "Day": 2, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.342699},
  {"Timestamp": "2025-01-02 14:00", "Month": 1, "Day": 2, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.331082},
  {"Timestamp": "2025-01-02 15:00", "Month": 1, "Day": 2, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.330983},
  {"Timestamp": "2025-01-02 16:00", "Month": 1, "Day": 2, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.326367},
  {"Timestamp": "2025-01-02 17:00", "Month": 1, "Day": 2, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.328063},
  {"Timestamp": "2025-01-02 18:00", "Month": 1, "Day": 2, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.330855},
  {"Timestamp": "2025-01-02 19:00", "Month": 1, "Day": 2, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.331351},
  {"Timestamp": "2025-01-02 20:00", "Month": 1, "Day": 2, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.327798},
  {"Timestamp": "2025-01-02 21:00", "Month": 1, "Day": 2, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.30863},
  {"Timestamp": "2025-01-02 22:00", "Month": 1, "Day": 2, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.29178},
  {"Timestamp": "2025-01-02 23:00", "Month": 1, "Day": 2, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.277977},
  {"Timestamp": "2025-01-03 00:00", "Month": 1, "Day": 3, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.263258},
  {"Timestamp": "2025-01-03 01:00", "Month": 1, "Day": 3, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.245751},
  {"Timestamp": "2025-01-03 02:00", "Month": 1, "Day": 3, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.226342},
  {"Timestamp": "2025-01-03 03:00", "Month": 1, "Day": 3, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.212842},
  {"Timestamp": "2025-01-03 04:00", "Month": 1, "Day": 3, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.196975},
  {"Timestamp": "2025-01-03 05:00", "Month": 1, "Day": 3, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.181265},
  {"Timestamp": "2025-01-03 06:00", "Month": 1, "Day": 3, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.175747},
  {"Timestamp": "2025-01-03 07:00", "Month": 1, "Day": 3, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.170958},
  {"Timestamp": "2025-01-03 08:00", "Month": 1, "Day": 3, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.162994},
  {"Timestamp": "2025-01-03 09:00", "Month": 1, "Day": 3, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.159153},
  {"Timestamp": "2025-01-03 10:00", "Month": 1, "Day": 3, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.166332},
  {"Timestamp": "2025-01-03 11:00", "Month": 1, "Day": 3, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.169249},
  {"Timestamp": "2025-01-03 12:00", "Month": 1, "Day": 3, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.163512},
  {"Timestamp": "2025-01-03 13:00", "Month": 1, "Day": 3, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.14523},
  {"Timestamp": "2025-01-03 14:00", "Month": 1, "Day": 3, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.153721},
  {"Timestamp": "2025-01-03 15:00", "Month": 1, "Day": 3, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.184638},
  {"Timestamp": "2025-01-03 16:00", "Month": 1, "Day": 3, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.210584},
  {"Timestamp": "2025-01-03 17:00", "Month": 1, "Day": 3, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.23583},
  {"Timestamp": "2025-01-03 18:00", "Month": 1, "Day": 3, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.262507},
  {"Timestamp": "2025-01-03 19:00", "Month": 1, "Day": 3, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.290658},
  {"Timestamp": "2025-01-03 20:00", "Month": 1, "Day": 3, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.319078},
  {"Timestamp": "2025-01-03 21:00", "Month": 1, "Day": 3, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.335891},
  {"Timestamp": "2025-01-03 22:00", "Month": 1, "Day": 3, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.366333},
  {"Timestamp": "2025-01-03 23:00", "Month": 1, "Day": 3, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.394913},
  {"Timestamp": "2025-01-04 00:00", "Month": 1, "Day": 4, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.429981},
  {"Timestamp": "2025-01-04 01:00", "Month": 1, "Day": 4, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.462095},
  {"Timestamp": "2025-01-04 02:00", "Month": 1, "Day": 4, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.501355},
  {"Timestamp": "2025-01-04 03:00", "Month": 1, "Day": 4, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.535198},
  {"Timestamp": "2025-01-04 04:00", "Month": 1, "Day": 4, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.57171},
  {"Timestamp": "2025-01-04 05:00", "Month": 1, "Day": 4, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.611972},
  {"Timestamp": "2025-01-04 06:00", "Month": 1, "Day": 4, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.655598},
  {"Timestamp": "2025-01-04 07:00", "Month": 1, "Day": 4, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.701293},
  {"Timestamp": "2025-01-04 08:00", "Month": 1, "Day": 4, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.729364},
  {"Timestamp": "2025-01-04 09:00", "Month": 1, "Day": 4, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.754166},
  {"Timestamp": "2025-01-04 10:00", "Month": 1, "Day": 4, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.772471},
  {"Timestamp": "2025-01-04 11:00", "Month": 1, "Day": 4, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.775445},
  {"Timestamp": "2025-01-04 12:00", "Month": 1, "Day": 4, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.779238},
  {"Timestamp": "2025-01-04 13:00", "Month": 1, "Day": 4, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.779034},
  {"Timestamp": "2025-01-04 14:00", "Month": 1, "Day": 4, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.786528},
  {"Timestamp": "2025-01-04 15:00", "Month": 1, "Day": 4, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.789574},
  {"Timestamp": "2025-01-04 16:00", "Month": 1, "Day": 4, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.782097},
  {"Timestamp": "2025-01-04 17:00", "Month": 1, "Day": 4, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.780633},
  {"Timestamp": "2025-01-04 18:00", "Month": 1, "Day": 4, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.787196},
  {"Timestamp": "2025-01-04 19:00", "Month": 1, "Day": 4, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.791265},
  {"Timestamp": "2025-01-04 20:00", "Month": 1, "Day": 4, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.793033},
  {"Timestamp": "2025-01-04 21:00", "Month": 1, "Day": 4, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.784839},
  {"Timestamp": "2025-01-04 22:00", "Month": 1, "Day": 4, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.776499},
  {"Timestamp": "2025-01-04 23:00", "Month": 1, "Day": 4, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.767959},
  {"Timestamp": "2025-01-05 00:00", "Month": 1, "Day": 5, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.754018},
  {"Timestamp": "2025-01-05 01:00", "Month": 1, "Day": 5, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.742301},
  {"Timestamp": "2025-01-05 02:00", "Month": 1, "Day": 5, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.732192},
  {"Timestamp": "2025-01-05 03:00", "Month": 1, "Day": 5, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.726524},
  {"Timestamp": "2025-01-05 04:00", "Month": 1, "Day": 5, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.7142},
  {"Timestamp": "2025-01-05 05:00", "Month": 1, "Day": 5, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.691302},
  {"Timestamp": "2025-01-05 06:00", "Month": 1, "Day": 5, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.663948},
  {"Timestamp": "2025-01-05 07:00", "Month": 1, "Day": 5, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.625836},
  {"Timestamp": "2025-01-05 08:00", "Month": 1, "Day": 5, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.580486},
  {"Timestamp": "2025-01-05 09:00", "Month": 1, "Day": 5, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.539058},
  {"Timestamp": "2025-01-05 10:00", "Month": 1, "Day": 5, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.51854},
  {"Timestamp": "2025-01-05 11:00", "Month": 1, "Day": 5, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.50196},
  {"Timestamp": "2025-01-05 12:00", "Month": 1, "Day": 5, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.453101},
  {"Timestamp": "2025-01-05 13:00", "Month": 1, "Day": 5, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.370168},
  {"Timestamp": "2025-01-05 14:00", "Month": 1, "Day": 5, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.311311},
  {"Timestamp": "2025-01-05 15:00", "Month": 1, "Day": 5, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.276397},
  {"Timestamp": "2025-01-05 16:00", "Month": 1, "Day": 5, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.238862},
  {"Timestamp": "2025-01-05 17:00", "Month": 1, "Day": 5, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.201089},
  {"Timestamp": "2025-01-05 18:00", "Month": 1, "Day": 5, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.172923},
  {"Timestamp": "2025-01-05 19:00", "Month": 1, "Day": 5, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.158169},
  {"Timestamp": "2025-01-05 20:00", "Month": 1, "Day": 5, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.15687},
  {"Timestamp": "2025-01-05 21:00", "Month": 1, "Day": 5, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.164219},
  {"Timestamp": "2025-01-05 22:00", "Month": 1, "Day": 5, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.174684},
  {"Timestamp": "2025-01-05 23:00", "Month": 1, "Day": 5, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.190349},
  {"Timestamp": "2025-01-06 00:00", "Month": 1, "Day": 6, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.213126},
  {"Timestamp": "2025-01-06 01:00", "Month": 1, "Day": 6, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.238803},
  {"Timestamp": "2025-01-06 02:00", "Month": 1, "Day": 6, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.260454},
  {"Timestamp": "2025-01-06 03:00", "Month": 1, "Day": 6, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.284973},
  {"Timestamp": "2025-01-06 04:00", "Month": 1, "Day": 6, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.297165},
  {"Timestamp": "2025-01-06 05:00", "Month": 1, "Day": 6, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.335471},
  {"Timestamp": "2025-01-06 06:00", "Month": 1, "Day": 6, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.365149},
  {"Timestamp": "2025-01-06 07:00", "Month": 1, "Day": 6, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.409908},
  {"Timestamp": "2025-01-06 08:00", "Month": 1, "Day": 6, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.443332},
  {"Timestamp": "2025-01-06 09:00", "Month": 1, "Day": 6, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.453129},
  {"Timestamp": "2025-01-06 10:00", "Month": 1, "Day": 6, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.450497},
  {"Timestamp": "2025-01-06 11:00", "Month": 1, "Day": 6, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.4405},
  {"Timestamp": "2025-01-06 12:00", "Month": 1, "Day": 6, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.423106},
  {"Timestamp": "2025-01-06 13:00", "Month": 1, "Day": 6, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.396843},
  {"Timestamp": "2025-01-06 14:00", "Month": 1, "Day": 6, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.384184},
  {"Timestamp": "2025-01-06 15:00", "Month": 1, "Day": 6, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.363529},
  {"Timestamp": "2025-01-06 16:00", "Month": 1, "Day": 6, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.32831},
  {"Timestamp": "2025-01-06 17:00", "Month": 1, "Day": 6, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.297781},
  {"Timestamp": "2025-01-06 18:00", "Month": 1, "Day": 6, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.279647},
  {"Timestamp": "2025-01-06 19:00", "Month": 1, "Day": 6, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.269973},
  {"Timestamp": "2025-01-06 20:00", "Month": 1, "Day": 6, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.262157},
  {"Timestamp": "2025-01-06 21:00", "Month": 1, "Day": 6, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.249457},
  {"Timestamp": "2025-01-06 22:00", "Month": 1, "Day": 6, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.235693},
  {"Timestamp": "2025-01-06 23:00", "Month": 1, "Day": 6, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.227178},
  {"Timestamp": "2025-01-07 00:00", "Month": 1, "Day": 7, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.223729},
  {"Timestamp": "2025-01-07 01:00", "Month": 1, "Day": 7, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.224146},
  {"Timestamp": "2025-01-07 02:00", "Month": 1, "Day": 7, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.224076},
  {"Timestamp": "2025-01-07 03:00", "Month": 1, "Day": 7, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.224657},
  {"Timestamp": "2025-01-07 04:00", "Month": 1, "Day": 7, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.231432},
  {"Timestamp": "2025-01-07 05:00", "Month": 1, "Day": 7, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.247977},
  {"Timestamp": "2025-01-07 06:00", "Month": 1, "Day": 7, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.258106},
  {"Timestamp": "2025-01-07 07:00", "Month": 1, "Day": 7, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.26061},
  {"Timestamp": "2025-01-07 08:00", "Month": 1, "Day": 7, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.244762},
  {"Timestamp": "2025-01-07 09:00", "Month": 1, "Day": 7, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.225749},
  {"Timestamp": "2025-01-07 10:00", "Month": 1, "Day": 7, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.224435},
  {"Timestamp": "2025-01-07 11:00", "Month": 1, "Day": 7, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.248025},
  {"Timestamp": "2025-01-07 12:00", "Month": 1, "Day": 7, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.268707},
  {"Timestamp": "2025-01-07 13:00", "Month": 1, "Day": 7, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.287305},
  {"Timestamp": "2025-01-07 14:00", "Month": 1, "Day": 7, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.316955},
  {"Timestamp": "2025-01-07 15:00", "Month": 1, "Day": 7, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.36842},
  {"Timestamp": "2025-01-07 16:00", "Month": 1, "Day": 7, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.395962},
  {"Timestamp": "2025-01-07 17:00", "Month": 1, "Day": 7, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.412078},
  {"Timestamp": "2025-01-07 18:00", "Month": 1, "Day": 7, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.414995},
  {"Timestamp": "2025-01-07 19:00", "Month": 1, "Day": 7, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.429308},
  {"Timestamp": "2025-01-07 20:00", "Month": 1, "Day": 7, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.432372},
  {"Timestamp": "2025-01-07 21:00", "Month": 1, "Day": 7, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.433205},
  {"Timestamp": "2025-01-07 22:00", "Month": 1, "Day": 7, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.428561},
  {"Timestamp": "2025-01-07 23:00", "Month": 1, "Day": 7, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.411619},
  {"Timestamp": "2025-01-08 00:00", "Month": 1, "Day": 8, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.391652},
  {"Timestamp": "2025-01-08 01:00", "Month": 1, "Day": 8, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.36731},
  {"Timestamp": "2025-01-08 02:00", "Month": 1, "Day": 8, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.355508},
  {"Timestamp": "2025-01-08 03:00", "Month": 1, "Day": 8, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.34219},
  {"Timestamp": "2025-01-08 04:00", "Month": 1, "Day": 8, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.326659},
  {"Timestamp": "2025-01-08 05:00", "Month": 1, "Day": 8, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.307474},
  {"Timestamp": "2025-01-08 06:00", "Month": 1, "Day": 8, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.295007},
  {"Timestamp": "2025-01-08 07:00", "Month": 1, "Day": 8, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.286838},
  {"Timestamp": "2025-01-08 08:00", "Month": 1, "Day": 8, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.278537},
  {"Timestamp": "2025-01-08 09:00", "Month": 1, "Day": 8, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.26265},
  {"Timestamp": "2025-01-08 10:00", "Month": 1, "Day": 8, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.253221},
  {"Timestamp": "2025-01-08 11:00", "Month": 1, "Day": 8, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.253797},
  {"Timestamp": "2025-01-08 12:00", "Month": 1, "Day": 8, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.260619},
  {"Timestamp": "2025-01-08 13:00", "Month": 1, "Day": 8, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.268243},
  {"Timestamp": "2025-01-08 14:00", "Month": 1, "Day": 8, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.285076},
  {"Timestamp": "2025-01-08 15:00", "Month": 1, "Day": 8, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.311505},
  {"Timestamp": "2025-01-08 16:00", "Month": 1, "Day": 8, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.321335},
  {"Timestamp": "2025-01-08 17:00", "Month": 1, "Day": 8, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.320933},
  {"Timestamp": "2025-01-08 18:00", "Month": 1, "Day": 8, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.311251},
  {"Timestamp": "2025-01-08 19:00", "Month": 1, "Day": 8, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.295838},
  {"Timestamp": "2025-01-08 20:00", "Month": 1, "Day": 8, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.278221},
  {"Timestamp": "2025-01-08 21:00", "Month": 1, "Day": 8, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.261971},
  {"Timestamp": "2025-01-08 22:00", "Month": 1, "Day": 8, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.253936},
  {"Timestamp": "2025-01-08 23:00", "Month": 1, "Day": 8, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.239894},
  {"Timestamp": "2025-01-09 00:00", "Month": 1, "Day": 9, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.230455},
  {"Timestamp": "2025-01-09 01:00", "Month": 1, "Day": 9, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.227525},
  {"Timestamp": "2025-01-09 02:00", "Month": 1, "Day": 9, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.224815},
  {"Timestamp": "2025-01-09 03:00", "Month": 1, "Day": 9, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.232292},
  {"Timestamp": "2025-01-09 04:00", "Month": 1, "Day": 9, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.245564},
  {"Timestamp": "2025-01-09 05:00", "Month": 1, "Day": 9, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.270347},
  {"Timestamp": "2025-01-09 06:00", "Month": 1, "Day": 9, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.286536},
  {"Timestamp": "2025-01-09 07:00", "Month": 1, "Day": 9, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.295803},
  {"Timestamp": "2025-01-09 08:00", "Month": 1, "Day": 9, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.29555},
  {"Timestamp": "2025-01-09 09:00", "Month": 1, "Day": 9, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.297808},
  {"Timestamp": "2025-01-09 10:00", "Month": 1, "Day": 9, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.308137},
  {"Timestamp": "2025-01-09 11:00", "Month": 1, "Day": 9, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.317433},
  {"Timestamp": "2025-01-09 12:00", "Month": 1, "Day": 9, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.299159},
  {"Timestamp": "2025-01-09 13:00", "Month": 1, "Day": 9, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.261587},
  {"Timestamp": "2025-01-09 14:00", "Month": 1, "Day": 9, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.244092},
  {"Timestamp": "2025-01-09 15:00", "Month": 1, "Day": 9, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.251042},
  {"Timestamp": "2025-01-09 16:00", "Month": 1, "Day": 9, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.250975},
  {"Timestamp": "2025-01-09 17:00", "Month": 1, "Day": 9, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.248652},
  {"Timestamp": "2025-01-09 18:00", "Month": 1, "Day": 9, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.246816},
  {"Timestamp": "2025-01-09 19:00", "Month": 1, "Day": 9, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.243499},
  {"Timestamp": "2025-01-09 20:00", "Month": 1, "Day": 9, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.246206},
  {"Timestamp": "2025-01-09 21:00", "Month": 1, "Day": 9, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.257928},
  {"Timestamp": "2025-01-09 22:00", "Month": 1, "Day": 9, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.264605},
  {"Timestamp": "2025-01-09 23:00", "Month": 1, "Day": 9, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.260644},
  {"Timestamp": "2025-01-10 00:00", "Month": 1, "Day": 10, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.256016},
  {"Timestamp": "2025-01-10 01:00", "Month": 1, "Day": 10, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.25903},
  {"Timestamp": "2025-01-10 02:00", "Month": 1, "Day": 10, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.258939},
  {"Timestamp": "2025-01-10 03:00", "Month": 1, "Day": 10, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.262118},
  {"Timestamp": "2025-01-10 04:00", "Month": 1, "Day": 10, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.260041},
  {"Timestamp": "2025-01-10 05:00", "Month": 1, "Day": 10, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.25881},
  {"Timestamp": "2025-01-10 06:00", "Month": 1, "Day": 10, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.258383},
  {"Timestamp": "2025-01-10 07:00", "Month": 1, "Day": 10, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.26039},
  {"Timestamp": "2025-01-10 08:00", "Month": 1, "Day": 10, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.251533},
  {"Timestamp": "2025-01-10 09:00", "Month": 1, "Day": 10, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.232232},
  {"Timestamp": "2025-01-10 10:00", "Month": 1, "Day": 10, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.236367},
  {"Timestamp": "2025-01-10 11:00", "Month": 1, "Day": 10, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.250776},
  {"Timestamp": "2025-01-10 12:00", "Month": 1, "Day": 10, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.250498},
  {"Timestamp": "2025-01-10 13:00", "Month": 1, "Day": 10, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.244983},
  {"Timestamp": "2025-01-10 14:00", "Month": 1, "Day": 10, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.270145},
  {"Timestamp": "2025-01-10 15:00", "Month": 1, "Day": 10, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.305556},
  {"Timestamp": "2025-01-10 16:00", "Month": 1, "Day": 10, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.333687},
  {"Timestamp": "2025-01-10 17:00", "Month": 1, "Day": 10, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.376799},
  {"Timestamp": "2025-01-10 18:00", "Month": 1, "Day": 10, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.419303},
  {"Timestamp": "2025-01-10 19:00", "Month": 1, "Day": 10, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.46444},
  {"Timestamp": "2025-01-10 20:00", "Month": 1, "Day": 10, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.507314},
  {"Timestamp": "2025-01-10 21:00", "Month": 1, "Day": 10, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.532505},
  {"Timestamp": "2025-01-10 22:00", "Month": 1, "Day": 10, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.552632},
  {"Timestamp": "2025-01-10 23:00", "Month": 1, "Day": 10, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.567687},
  {"Timestamp": "2025-01-11 00:00", "Month": 1, "Day": 11, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.574728},
  {"Timestamp": "2025-01-11 01:00", "Month": 1, "Day": 11, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.593763},
  {"Timestamp": "2025-01-11 02:00", "Month": 1, "Day": 11, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.611331},
  {"Timestamp": "2025-01-11 03:00", "Month": 1, "Day": 11, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.61289},
  {"Timestamp": "2025-01-11 04:00", "Month": 1, "Day": 11, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.600129},
  {"Timestamp": "2025-01-11 05:00", "Month": 1, "Day": 11, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.556528},
  {"Timestamp": "2025-01-11 06:00", "Month": 1, "Day": 11, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.498215},
  {"Timestamp": "2025-01-11 07:00", "Month": 1, "Day": 11, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.439966},
  {"Timestamp": "2025-01-11 08:00", "Month": 1, "Day": 11, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.386958},
  {"Timestamp": "2025-01-11 09:00", "Month": 1, "Day": 11, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.34198},
  {"Timestamp": "2025-01-11 10:00", "Month": 1, "Day": 11, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.320575},
  {"Timestamp": "2025-01-11 11:00", "Month": 1, "Day": 11, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.312612},
  {"Timestamp": "2025-01-11 12:00", "Month": 1, "Day": 11, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.321907},
  {"Timestamp": "2025-01-11 13:00", "Month": 1, "Day": 11, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.332245},
  {"Timestamp": "2025-01-11 14:00", "Month": 1, "Day": 11, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.346479},
  {"Timestamp": "2025-01-11 15:00", "Month": 1, "Day": 11, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.362265},
  {"Timestamp": "2025-01-11 16:00", "Month": 1, "Day": 11, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.364251},
  {"Timestamp": "2025-01-11 17:00", "Month": 1, "Day": 11, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.37174},
  {"Timestamp": "2025-01-11 18:00", "Month": 1, "Day": 11, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.391098},
  {"Timestamp": "2025-01-11 19:00", "Month": 1, "Day": 11, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.421468},
  {"Timestamp": "2025-01-11 20:00", "Month": 1, "Day": 11, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.45355},
  {"Timestamp": "2025-01-11 21:00", "Month": 1, "Day": 11, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.47666},
  {"Timestamp": "2025-01-11 22:00", "Month": 1, "Day": 11, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.507612},
  {"Timestamp": "2025-01-11 23:00", "Month": 1, "Day": 11, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.53862},
  {"Timestamp": "2025-01-12 00:00", "Month": 1, "Day": 12, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.570915},
  {"Timestamp": "2025-01-12 01:00", "Month": 1, "Day": 12, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.589159},
  {"Timestamp": "2025-01-12 02:00", "Month": 1, "Day": 12, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.599435},
  {"Timestamp": "2025-01-12 03:00", "Month": 1, "Day": 12, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.611141},
  {"Timestamp": "2025-01-12 04:00", "Month": 1, "Day": 12, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.626046},
  {"Timestamp": "2025-01-12 05:00", "Month": 1, "Day": 12, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.642881},
  {"Timestamp": "2025-01-12 06:00", "Month": 1, "Day": 12, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.667465},
  {"Timestamp": "2025-01-12 07:00", "Month": 1, "Day": 12, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.706874},
  {"Timestamp": "2025-01-12 08:00", "Month": 1, "Day": 12, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.744508},
  {"Timestamp": "2025-01-12 09:00", "Month": 1, "Day": 12, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.770214},
  {"Timestamp": "2025-01-12 10:00", "Month": 1, "Day": 12, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.790005},
  {"Timestamp": "2025-01-12 11:00", "Month": 1, "Day": 12, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.789091},
  {"Timestamp": "2025-01-12 12:00", "Month": 1, "Day": 12, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.768658},
  {"Timestamp": "2025-01-12 13:00", "Month": 1, "Day": 12, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.730819},
  {"Timestamp": "2025-01-12 14:00", "Month": 1, "Day": 12, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.691038},
  {"Timestamp": "2025-01-12 15:00", "Month": 1, "Day": 12, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.657223},
  {"Timestamp": "2025-01-12 16:00", "Month": 1, "Day": 12, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.635294},
  {"Timestamp": "2025-01-12 17:00", "Month": 1, "Day": 12, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.633913},
  {"Timestamp": "2025-01-12 18:00", "Month": 1, "Day": 12, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.652746},
  {"Timestamp": "2025-01-12 19:00", "Month": 1, "Day": 12, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.67927},
  {"Timestamp": "2025-01-12 20:00", "Month": 1, "Day": 12, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.699959},
  {"Timestamp": "2025-01-12 21:00", "Month": 1, "Day": 12, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.711006},
  {"Timestamp": "2025-01-12 22:00", "Month": 1, "Day": 12, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.705514},
  {"Timestamp": "2025-01-12 23:00", "Month": 1, "Day": 12, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.69091},
  {"Timestamp": "2025-01-13 00:00", "Month": 1, "Day": 13, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.670564},
  {"Timestamp": "2025-01-13 01:00", "Month": 1, "Day": 13, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.652192},
  {"Timestamp": "2025-01-13 02:00", "Month": 1, "Day": 13, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.635875},
  {"Timestamp": "2025-01-13 03:00", "Month": 1, "Day": 13, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.608336},
  {"Timestamp": "2025-01-13 04:00", "Month": 1, "Day": 13, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.582855},
  {"Timestamp": "2025-01-13 05:00", "Month": 1, "Day": 13, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.581425},
  {"Timestamp": "2025-01-13 06:00", "Month": 1, "Day": 13, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.584722},
  {"Timestamp": "2025-01-13 07:00", "Month": 1, "Day": 13, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.603808},
  {"Timestamp": "2025-01-13 08:00", "Month": 1, "Day": 13, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.605988},
  {"Timestamp": "2025-01-13 09:00", "Month": 1, "Day": 13, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.61414},
  {"Timestamp": "2025-01-13 10:00", "Month": 1, "Day": 13, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.659238},
  {"Timestamp": "2025-01-13 11:00", "Month": 1, "Day": 13, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.714838},
  {"Timestamp": "2025-01-13 12:00", "Month": 1, "Day": 13, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.738095},
  {"Timestamp": "2025-01-13 13:00", "Month": 1, "Day": 13, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.739637},
  {"Timestamp": "2025-01-13 14:00", "Month": 1, "Day": 13, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.735292},
  {"Timestamp": "2025-01-13 15:00", "Month": 1, "Day": 13, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.734078},
  {"Timestamp": "2025-01-13 16:00", "Month": 1, "Day": 13, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.73103},
  {"Timestamp": "2025-01-13 17:00", "Month": 1, "Day": 13, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.722348},
  {"Timestamp": "2025-01-13 18:00", "Month": 1, "Day": 13, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.709321},
  {"Timestamp": "2025-01-13 19:00", "Month": 1, "Day": 13, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.689405},
  {"Timestamp": "2025-01-13 20:00", "Month": 1, "Day": 13, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.671331},
  {"Timestamp": "2025-01-13 21:00", "Month": 1, "Day": 13, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.643541},
  {"Timestamp": "2025-01-13 22:00", "Month": 1, "Day": 13, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.616948},
  {"Timestamp": "2025-01-13 23:00", "Month": 1, "Day": 13, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.590244},
  {"Timestamp": "2025-01-14 00:00", "Month": 1, "Day": 14, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.545495},
  {"Timestamp": "2025-01-14 01:00", "Month": 1, "Day": 14, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.496391},
  {"Timestamp": "2025-01-14 02:00", "Month": 1, "Day": 14, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.457128},
  {"Timestamp": "2025-01-14 03:00", "Month": 1, "Day": 14, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.419723},
  {"Timestamp": "2025-01-14 04:00", "Month": 1, "Day": 14, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.391618},
  {"Timestamp": "2025-01-14 05:00", "Month": 1, "Day": 14, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.3863},
  {"Timestamp": "2025-01-14 06:00", "Month": 1, "Day": 14, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.383542},
  {"Timestamp": "2025-01-14 07:00", "Month": 1, "Day": 14, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.377972},
  {"Timestamp": "2025-01-14 08:00", "Month": 1, "Day": 14, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.361723},
  {"Timestamp": "2025-01-14 09:00", "Month": 1, "Day": 14, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.370066},
  {"Timestamp": "2025-01-14 10:00", "Month": 1, "Day": 14, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.437959},
  {"Timestamp": "2025-01-14 11:00", "Month": 1, "Day": 14, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.509451},
  {"Timestamp": "2025-01-14 12:00", "Month": 1, "Day": 14, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.574789},
  {"Timestamp": "2025-01-14 13:00", "Month": 1, "Day": 14, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.643074},
  {"Timestamp": "2025-01-14 14:00", "Month": 1, "Day": 14, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.699758},
  {"Timestamp": "2025-01-14 15:00", "Month": 1, "Day": 14, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.742355},
  {"Timestamp": "2025-01-14 16:00", "Month": 1, "Day": 14, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.769849},
  {"Timestamp": "2025-01-14 17:00", "Month": 1, "Day": 14, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.774584},
  {"Timestamp": "2025-01-14 18:00", "Month": 1, "Day": 14, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.766426},
  {"Timestamp": "2025-01-14 19:00", "Month": 1, "Day": 14, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.747416},
  {"Timestamp": "2025-01-14 20:00", "Month": 1, "Day": 14, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.73455},
  {"Timestamp": "2025-01-14 21:00", "Month": 1, "Day": 14, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.706571},
  {"Timestamp": "2025-01-14 22:00", "Month": 1, "Day": 14, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.666345},
  {"Timestamp": "2025-01-14 23:00", "Month": 1, "Day": 14, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.634273},
  {"Timestamp": "2025-01-15 00:00", "Month": 1, "Day": 15, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.606532},
  {"Timestamp": "2025-01-15 01:00", "Month": 1, "Day": 15, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.564166},
  {"Timestamp": "2025-01-15 02:00", "Month": 1, "Day": 15, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.515778},
  {"Timestamp": "2025-01-15 03:00", "Month": 1, "Day": 15, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.480399},
  {"Timestamp": "2025-01-15 04:00", "Month": 1, "Day": 15, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.459448},
  {"Timestamp": "2025-01-15 05:00", "Month": 1, "Day": 15, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.462943},
  {"Timestamp": "2025-01-15 06:00", "Month": 1, "Day": 15, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.473636},
  {"Timestamp": "2025-01-15 07:00", "Month": 1, "Day": 15, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.490071},
  {"Timestamp": "2025-01-15 08:00", "Month": 1, "Day": 15, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.51368},
  {"Timestamp": "2025-01-15 09:00", "Month": 1, "Day": 15, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.559585},
  {"Timestamp": "2025-01-15 10:00", "Month": 1, "Day": 15, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.657555},
  {"Timestamp": "2025-01-15 11:00", "Month": 1, "Day": 15, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.735269},
  {"Timestamp": "2025-01-15 12:00", "Month": 1, "Day": 15, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.773119},
  {"Timestamp": "2025-01-15 13:00", "Month": 1, "Day": 15, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.786216},
  {"Timestamp": "2025-01-15 14:00", "Month": 1, "Day": 15, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.784709},
  {"Timestamp": "2025-01-15 15:00", "Month": 1, "Day": 15, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.783291},
  {"Timestamp": "2025-01-15 16:00", "Month": 1, "Day": 15, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.77332},
  {"Timestamp": "2025-01-15 17:00", "Month": 1, "Day": 15, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.754978},
  {"Timestamp": "2025-01-15 18:00", "Month": 1, "Day": 15, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.729082},
  {"Timestamp": "2025-01-15 19:00", "Month": 1, "Day": 15, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.687614},
  {"Timestamp": "2025-01-15 20:00", "Month": 1, "Day": 15, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.633679},
  {"Timestamp": "2025-01-15 21:00", "Month": 1, "Day": 15, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.573671},
  {"Timestamp": "2025-01-15 22:00", "Month": 1, "Day": 15, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.506398},
  {"Timestamp": "2025-01-15 23:00", "Month": 1, "Day": 15, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.439808},
  {"Timestamp": "2025-01-16 00:00", "Month": 1, "Day": 16, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.395189},
  {"Timestamp": "2025-01-16 01:00", "Month": 1, "Day": 16, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.359331},
  {"Timestamp": "2025-01-16 02:00", "Month": 1, "Day": 16, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.330984},
  {"Timestamp": "2025-01-16 03:00", "Month": 1, "Day": 16, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.311455},
  {"Timestamp": "2025-01-16 04:00", "Month": 1, "Day": 16, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.300803},
  {"Timestamp": "2025-01-16 05:00", "Month": 1, "Day": 16, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.299929},
  {"Timestamp": "2025-01-16 06:00", "Month": 1, "Day": 16, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.312629},
  {"Timestamp": "2025-01-16 07:00", "Month": 1, "Day": 16, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.321933},
  {"Timestamp": "2025-01-16 08:00", "Month": 1, "Day": 16, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.316461},
  {"Timestamp": "2025-01-16 09:00", "Month": 1, "Day": 16, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.31819},
  {"Timestamp": "2025-01-16 10:00", "Month": 1, "Day": 16, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.357574},
  {"Timestamp": "2025-01-16 11:00", "Month": 1, "Day": 16, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.407448},
  {"Timestamp": "2025-01-16 12:00", "Month": 1, "Day": 16, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.434906},
  {"Timestamp": "2025-01-16 13:00", "Month": 1, "Day": 16, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.450355},
  {"Timestamp": "2025-01-16 14:00", "Month": 1, "Day": 16, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.47667},
  {"Timestamp": "2025-01-16 15:00", "Month": 1, "Day": 16, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.497091},
  {"Timestamp": "2025-01-16 16:00", "Month": 1, "Day": 16, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.496887},
  {"Timestamp": "2025-01-16 17:00", "Month": 1, "Day": 16, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.499908},
  {"Timestamp": "2025-01-16 18:00", "Month": 1, "Day": 16, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.490309},
  {"Timestamp": "2025-01-16 19:00", "Month": 1, "Day": 16, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.484782},
  {"Timestamp": "2025-01-16 20:00", "Month": 1, "Day": 16, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.476509},
  {"Timestamp": "2025-01-16 21:00", "Month": 1, "Day": 16, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.46333},
  {"Timestamp": "2025-01-16 22:00", "Month": 1, "Day": 16, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.435365},
  {"Timestamp": "2025-01-16 23:00", "Month": 1, "Day": 16, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.419586},
  {"Timestamp": "2025-01-17 00:00", "Month": 1, "Day": 17, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.417992},
  {"Timestamp": "2025-01-17 01:00", "Month": 1, "Day": 17, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.4192},
  {"Timestamp": "2025-01-17 02:00", "Month": 1, "Day": 17, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.413272},
  {"Timestamp": "2025-01-17 03:00", "Month": 1, "Day": 17, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.411052},
  {"Timestamp": "2025-01-17 04:00", "Month": 1, "Day": 17, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.403099},
  {"Timestamp": "2025-01-17 05:00", "Month": 1, "Day": 17, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.404022},
  {"Timestamp": "2025-01-17 06:00", "Month": 1, "Day": 17, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.405424},
  {"Timestamp": "2025-01-17 07:00", "Month": 1, "Day": 17, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.385824},
  {"Timestamp": "2025-01-17 08:00", "Month": 1, "Day": 17, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.355584},
  {"Timestamp": "2025-01-17 09:00", "Month": 1, "Day": 17, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.327531},
  {"Timestamp": "2025-01-17 10:00", "Month": 1, "Day": 17, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.314665},
  {"Timestamp": "2025-01-17 11:00", "Month": 1, "Day": 17, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.294178},
  {"Timestamp": "2025-01-17 12:00", "Month": 1, "Day": 17, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.264186},
  {"Timestamp": "2025-01-17 13:00", "Month": 1, "Day": 17, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.221339},
  {"Timestamp": "2025-01-17 14:00", "Month": 1, "Day": 17, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.200807},
  {"Timestamp": "2025-01-17 15:00", "Month": 1, "Day": 17, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.204534},
  {"Timestamp": "2025-01-17 16:00", "Month": 1, "Day": 17, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.205011},
  {"Timestamp": "2025-01-17 17:00", "Month": 1, "Day": 17, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.202865},
  {"Timestamp": "2025-01-17 18:00", "Month": 1, "Day": 17, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.199418},
  {"Timestamp": "2025-01-17 19:00", "Month": 1, "Day": 17, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.190787},
  {"Timestamp": "2025-01-17 20:00", "Month": 1, "Day": 17, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.177961},
  {"Timestamp": "2025-01-17 21:00", "Month": 1, "Day": 17, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.170544},
  {"Timestamp": "2025-01-17 22:00", "Month": 1, "Day": 17, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.159455},
  {"Timestamp": "2025-01-17 23:00", "Month": 1, "Day": 17, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.147919},
  {"Timestamp": "2025-01-18 00:00", "Month": 1, "Day": 18, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.13478},
  {"Timestamp": "2025-01-18 01:00", "Month": 1, "Day": 18, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.126003},
  {"Timestamp": "2025-01-18 02:00", "Month": 1, "Day": 18, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.122896},
  {"Timestamp": "2025-01-18 03:00", "Month": 1, "Day": 18, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.119777},
  {"Timestamp": "2025-01-18 04:00", "Month": 1, "Day": 18, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.114582},
  {"Timestamp": "2025-01-18 05:00", "Month": 1, "Day": 18, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.111966},
  {"Timestamp": "2025-01-18 06:00", "Month": 1, "Day": 18, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.112176},
  {"Timestamp": "2025-01-18 07:00", "Month": 1, "Day": 18, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.113796},
  {"Timestamp": "2025-01-18 08:00", "Month": 1, "Day": 18, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.100705},
  {"Timestamp": "2025-01-18 09:00", "Month": 1, "Day": 18, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.086602},
  {"Timestamp": "2025-01-18 10:00", "Month": 1, "Day": 18, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.092784},
  {"Timestamp": "2025-01-18 11:00", "Month": 1, "Day": 18, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.11306},
  {"Timestamp": "2025-01-18 12:00", "Month": 1, "Day": 18, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.130901},
  {"Timestamp": "2025-01-18 13:00", "Month": 1, "Day": 18, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.138356},
  {"Timestamp": "2025-01-18 14:00", "Month": 1, "Day": 18, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.155483},
  {"Timestamp": "2025-01-18 15:00", "Month": 1, "Day": 18, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.192972},
  {"Timestamp": "2025-01-18 16:00", "Month": 1, "Day": 18, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.221594},
  {"Timestamp": "2025-01-18 17:00", "Month": 1, "Day": 18, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.239107},
  {"Timestamp": "2025-01-18 18:00", "Month": 1, "Day": 18, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.259224},
  {"Timestamp": "2025-01-18 19:00", "Month": 1, "Day": 18, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.281875},
  {"Timestamp": "2025-01-18 20:00", "Month": 1, "Day": 18, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.303229},
  {"Timestamp": "2025-01-18 21:00", "Month": 1, "Day": 18, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.318295},
  {"Timestamp": "2025-01-18 22:00", "Month": 1, "Day": 18, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.332766},
  {"Timestamp": "2025-01-18 23:00", "Month": 1, "Day": 18, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.342386},
  {"Timestamp": "2025-01-19 00:00", "Month": 1, "Day": 19, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.333271},
  {"Timestamp": "2025-01-19 01:00", "Month": 1, "Day": 19, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.329282},
  {"Timestamp": "2025-01-19 02:00", "Month": 1, "Day": 19, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.319589},
  {"Timestamp": "2025-01-19 03:00", "Month": 1, "Day": 19, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.323667},
  {"Timestamp": "2025-01-19 04:00", "Month": 1, "Day": 19, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.319004},
  {"Timestamp": "2025-01-19 05:00", "Month": 1, "Day": 19, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.313759},
  {"Timestamp": "2025-01-19 06:00", "Month": 1, "Day": 19, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.312749},
  {"Timestamp": "2025-01-19 07:00", "Month": 1, "Day": 19, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.307446},
  {"Timestamp": "2025-01-19 08:00", "Month": 1, "Day": 19, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.280659},
  {"Timestamp": "2025-01-19 09:00", "Month": 1, "Day": 19, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.280904},
  {"Timestamp": "2025-01-19 10:00", "Month": 1, "Day": 19, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.279622},
  {"Timestamp": "2025-01-19 11:00", "Month": 1, "Day": 19, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.270948},
  {"Timestamp": "2025-01-19 12:00", "Month": 1, "Day": 19, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.2474},
  {"Timestamp": "2025-01-19 13:00", "Month": 1, "Day": 19, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.217752},
  {"Timestamp": "2025-01-19 14:00", "Month": 1, "Day": 19, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.210935},
  {"Timestamp": "2025-01-19 15:00", "Month": 1, "Day": 19, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.231147},
  {"Timestamp": "2025-01-19 16:00", "Month": 1, "Day": 19, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.23642},
  {"Timestamp": "2025-01-19 17:00", "Month": 1, "Day": 19, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.223184},
  {"Timestamp": "2025-01-19 18:00", "Month": 1, "Day": 19, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.207821},
  {"Timestamp": "2025-01-19 19:00", "Month": 1, "Day": 19, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.186662},
  {"Timestamp": "2025-01-19 20:00", "Month": 1, "Day": 19, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.168817},
  {"Timestamp": "2025-01-19 21:00", "Month": 1, "Day": 19, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.152462},
  {"Timestamp": "2025-01-19 22:00", "Month": 1, "Day": 19, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.139066},
  {"Timestamp": "2025-01-19 23:00", "Month": 1, "Day": 19, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.124786},
  {"Timestamp": "2025-01-20 00:00", "Month": 1, "Day": 20, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.115084},
  {"Timestamp": "2025-01-20 01:00", "Month": 1, "Day": 20, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.104025},
  {"Timestamp": "2025-01-20 02:00", "Month": 1, "Day": 20, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.097549},
  {"Timestamp": "2025-01-20 03:00", "Month": 1, "Day": 20, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.090785},
  {"Timestamp": "2025-01-20 04:00", "Month": 1, "Day": 20, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.082674},
  {"Timestamp": "2025-01-20 05:00", "Month": 1, "Day": 20, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.076555},
  {"Timestamp": "2025-01-20 06:00", "Month": 1, "Day": 20, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.072684},
  {"Timestamp": "2025-01-20 07:00", "Month": 1, "Day": 20, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.068864},
  {"Timestamp": "2025-01-20 08:00", "Month": 1, "Day": 20, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.057469},
  {"Timestamp": "2025-01-20 09:00", "Month": 1, "Day": 20, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.049873},
  {"Timestamp": "2025-01-20 10:00", "Month": 1, "Day": 20, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.04539},
  {"Timestamp": "2025-01-20 11:00", "Month": 1, "Day": 20, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.04012},
  {"Timestamp": "2025-01-20 12:00", "Month": 1, "Day": 20, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.033317},
  {"Timestamp": "2025-01-20 13:00", "Month": 1, "Day": 20, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.026819},
  {"Timestamp": "2025-01-20 14:00", "Month": 1, "Day": 20, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.02289},
  {"Timestamp": "2025-01-20 15:00", "Month": 1, "Day": 20, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.023672},
  {"Timestamp": "2025-01-20 16:00", "Month": 1, "Day": 20, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.027124},
  {"Timestamp": "2025-01-20 17:00", "Month": 1, "Day": 20, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.03203},
  {"Timestamp": "2025-01-20 18:00", "Month": 1, "Day": 20, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.039061},
  {"Timestamp": "2025-01-20 19:00", "Month": 1, "Day": 20, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.048253},
  {"Timestamp": "2025-01-20 20:00", "Month": 1, "Day": 20, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.057976},
  {"Timestamp": "2025-01-20 21:00", "Month": 1, "Day": 20, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.067459},
  {"Timestamp": "2025-01-20 22:00", "Month": 1, "Day": 20, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.078352},
  {"Timestamp": "2025-01-20 23:00", "Month": 1, "Day": 20, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.088721},
  {"Timestamp": "2025-01-21 00:00", "Month": 1, "Day": 21, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.09721},
  {"Timestamp": "2025-01-21 01:00", "Month": 1, "Day": 21, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.100823},
  {"Timestamp": "2025-01-21 02:00", "Month": 1, "Day": 21, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.101421},
  {"Timestamp": "2025-01-21 03:00", "Month": 1, "Day": 21, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.10269},
  {"Timestamp": "2025-01-21 04:00", "Month": 1, "Day": 21, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.104738},
  {"Timestamp": "2025-01-21 05:00", "Month": 1, "Day": 21, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.111327},
  {"Timestamp": "2025-01-21 06:00", "Month": 1, "Day": 21, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.119627},
  {"Timestamp": "2025-01-21 07:00", "Month": 1, "Day": 21, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.129009},
  {"Timestamp": "2025-01-21 08:00", "Month": 1, "Day": 21, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.139153},
  {"Timestamp": "2025-01-21 09:00", "Month": 1, "Day": 21, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.164132},
  {"Timestamp": "2025-01-21 10:00", "Month": 1, "Day": 21, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.200679},
  {"Timestamp": "2025-01-21 11:00", "Month": 1, "Day": 21, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.230514},
  {"Timestamp": "2025-01-21 12:00", "Month": 1, "Day": 21, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.258647},
  {"Timestamp": "2025-01-21 13:00", "Month": 1, "Day": 21, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.278396},
  {"Timestamp": "2025-01-21 14:00", "Month": 1, "Day": 21, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.301027},
  {"Timestamp": "2025-01-21 15:00", "Month": 1, "Day": 21, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.334475},
  {"Timestamp": "2025-01-21 16:00", "Month": 1, "Day": 21, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.36307},
  {"Timestamp": "2025-01-21 17:00", "Month": 1, "Day": 21, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.374401},
  {"Timestamp": "2025-01-21 18:00", "Month": 1, "Day": 21, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.376356},
  {"Timestamp": "2025-01-21 19:00", "Month": 1, "Day": 21, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.371798},
  {"Timestamp": "2025-01-21 20:00", "Month": 1, "Day": 21, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.368317},
  {"Timestamp": "2025-01-21 21:00", "Month": 1, "Day": 21, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.369385},
  {"Timestamp": "2025-01-21 22:00", "Month": 1, "Day": 21, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.360784},
  {"Timestamp": "2025-01-21 23:00", "Month": 1, "Day": 21, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.340754},
  {"Timestamp": "2025-01-22 00:00", "Month": 1, "Day": 22, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.32257},
  {"Timestamp": "2025-01-22 01:00", "Month": 1, "Day": 22, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.302605},
  {"Timestamp": "2025-01-22 02:00", "Month": 1, "Day": 22, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.289365},
  {"Timestamp": "2025-01-22 03:00", "Month": 1, "Day": 22, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.281582},
  {"Timestamp": "2025-01-22 04:00", "Month": 1, "Day": 22, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.270125},
  {"Timestamp": "2025-01-22 05:00", "Month": 1, "Day": 22, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.249013},
  {"Timestamp": "2025-01-22 06:00", "Month": 1, "Day": 22, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.231358},
  {"Timestamp": "2025-01-22 07:00", "Month": 1, "Day": 22, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.20695},
  {"Timestamp": "2025-01-22 08:00", "Month": 1, "Day": 22, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.170685},
  {"Timestamp": "2025-01-22 09:00", "Month": 1, "Day": 22, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.152549},
  {"Timestamp": "2025-01-22 10:00", "Month": 1, "Day": 22, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.149889},
  {"Timestamp": "2025-01-22 11:00", "Month": 1, "Day": 22, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.147879},
  {"Timestamp": "2025-01-22 12:00", "Month": 1, "Day": 22, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.141141},
  {"Timestamp": "2025-01-22 13:00", "Month": 1, "Day": 22, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.12794},
  {"Timestamp": "2025-01-22 14:00", "Month": 1, "Day": 22, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.131548},
  {"Timestamp": "2025-01-22 15:00", "Month": 1, "Day": 22, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.163877},
  {"Timestamp": "2025-01-22 16:00", "Month": 1, "Day": 22, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.1809},
  {"Timestamp": "2025-01-22 17:00", "Month": 1, "Day": 22, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.179131},
  {"Timestamp": "2025-01-22 18:00", "Month": 1, "Day": 22, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.167137},
  {"Timestamp": "2025-01-22 19:00", "Month": 1, "Day": 22, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.152918},
  {"Timestamp": "2025-01-22 20:00", "Month": 1, "Day": 22, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.140865},
  {"Timestamp": "2025-01-22 21:00", "Month": 1, "Day": 22, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.137674},
  {"Timestamp": "2025-01-22 22:00", "Month": 1, "Day": 22, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.134296},
  {"Timestamp": "2025-01-22 23:00", "Month": 1, "Day": 22, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.128694},
  {"Timestamp": "2025-01-23 00:00", "Month": 1, "Day": 23, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.120796},
  {"Timestamp": "2025-01-23 01:00", "Month": 1, "Day": 23, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.1126},
  {"Timestamp": "2025-01-23 02:00", "Month": 1, "Day": 23, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.104661},
  {"Timestamp": "2025-01-23 03:00", "Month": 1, "Day": 23, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.10117},
  {"Timestamp": "2025-01-23 04:00", "Month": 1, "Day": 23, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.102343},
  {"Timestamp": "2025-01-23 05:00", "Month": 1, "Day": 23, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.101773},
  {"Timestamp": "2025-01-23 06:00", "Month": 1, "Day": 23, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.101347},
  {"Timestamp": "2025-01-23 07:00", "Month": 1, "Day": 23, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.097192},
  {"Timestamp": "2025-01-23 08:00", "Month": 1, "Day": 23, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.074344},
  {"Timestamp": "2025-01-23 09:00", "Month": 1, "Day": 23, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.065784},
  {"Timestamp": "2025-01-23 10:00", "Month": 1, "Day": 23, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.076154},
  {"Timestamp": "2025-01-23 11:00", "Month": 1, "Day": 23, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.076069},
  {"Timestamp": "2025-01-23 12:00", "Month": 1, "Day": 23, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.077298},
  {"Timestamp": "2025-01-23 13:00", "Month": 1, "Day": 23, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.082184},
  {"Timestamp": "2025-01-23 14:00", "Month": 1, "Day": 23, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.090243},
  {"Timestamp": "2025-01-23 15:00", "Month": 1, "Day": 23, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.121331},
  {"Timestamp": "2025-01-23 16:00", "Month": 1, "Day": 23, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.15078},
  {"Timestamp": "2025-01-23 17:00", "Month": 1, "Day": 23, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.163912},
  {"Timestamp": "2025-01-23 18:00", "Month": 1, "Day": 23, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.161462},
  {"Timestamp": "2025-01-23 19:00", "Month": 1, "Day": 23, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.154808},
  {"Timestamp": "2025-01-23 20:00", "Month": 1, "Day": 23, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.14601},
  {"Timestamp": "2025-01-23 21:00", "Month": 1, "Day": 23, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.13194},
  {"Timestamp": "2025-01-23 22:00", "Month": 1, "Day": 23, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.120362},
  {"Timestamp": "2025-01-23 23:00", "Month": 1, "Day": 23, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.11221},
  {"Timestamp": "2025-01-24 00:00", "Month": 1, "Day": 24, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.106602},
  {"Timestamp": "2025-01-24 01:00", "Month": 1, "Day": 24, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.100344},
  {"Timestamp": "2025-01-24 02:00", "Month": 1, "Day": 24, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.091583},
  {"Timestamp": "2025-01-24 03:00", "Month": 1, "Day": 24, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.085645},
  {"Timestamp": "2025-01-24 04:00", "Month": 1, "Day": 24, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.082289},
  {"Timestamp": "2025-01-24 05:00", "Month": 1, "Day": 24, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.081643},
  {"Timestamp": "2025-01-24 06:00", "Month": 1, "Day": 24, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.084502},
  {"Timestamp": "2025-01-24 07:00", "Month": 1, "Day": 24, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.083881},
  {"Timestamp": "2025-01-24 08:00", "Month": 1, "Day": 24, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.069492},
  {"Timestamp": "2025-01-24 09:00", "Month": 1, "Day": 24, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.069073},
  {"Timestamp": "2025-01-24 10:00", "Month": 1, "Day": 24, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.067604},
  {"Timestamp": "2025-01-24 11:00", "Month": 1, "Day": 24, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.057582},
  {"Timestamp": "2025-01-24 12:00", "Month": 1, "Day": 24, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.049392},
  {"Timestamp": "2025-01-24 13:00", "Month": 1, "Day": 24, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.044601},
  {"Timestamp": "2025-01-24 14:00", "Month": 1, "Day": 24, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.045069},
  {"Timestamp": "2025-01-24 15:00", "Month": 1, "Day": 24, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.061399},
  {"Timestamp": "2025-01-24 16:00", "Month": 1, "Day": 24, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.076864},
  {"Timestamp": "2025-01-24 17:00", "Month": 1, "Day": 24, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.078934},
  {"Timestamp": "2025-01-24 18:00", "Month": 1, "Day": 24, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.075212},
  {"Timestamp": "2025-01-24 19:00", "Month": 1, "Day": 24, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.06774},
  {"Timestamp": "2025-01-24 20:00", "Month": 1, "Day": 24, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.059747},
  {"Timestamp": "2025-01-24 21:00", "Month": 1, "Day": 24, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.054458},
  {"Timestamp": "2025-01-24 22:00", "Month": 1, "Day": 24, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.050073},
  {"Timestamp": "2025-01-24 23:00", "Month": 1, "Day": 24, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.04614},
  {"Timestamp": "2025-01-25 00:00", "Month": 1, "Day": 25, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.043352},
  {"Timestamp": "2025-01-25 01:00", "Month": 1, "Day": 25, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.042008},
  {"Timestamp": "2025-01-25 02:00", "Month": 1, "Day": 25, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.042001},
  {"Timestamp": "2025-01-25 03:00", "Month": 1, "Day": 25, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.042731},
  {"Timestamp": "2025-01-25 04:00", "Month": 1, "Day": 25, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.044116},
  {"Timestamp": "2025-01-25 05:00", "Month": 1, "Day": 25, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.046137},
  {"Timestamp": "2025-01-25 06:00", "Month": 1, "Day": 25, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.04957},
  {"Timestamp": "2025-01-25 07:00", "Month": 1, "Day": 25, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.051531},
  {"Timestamp": "2025-01-25 08:00", "Month": 1, "Day": 25, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.048987},
  {"Timestamp": "2025-01-25 09:00", "Month": 1, "Day": 25, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.052058},
  {"Timestamp": "2025-01-25 10:00", "Month": 1, "Day": 25, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.05158},
  {"Timestamp": "2025-01-25 11:00", "Month": 1, "Day": 25, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.052076},
  {"Timestamp": "2025-01-25 12:00", "Month": 1, "Day": 25, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.050613},
  {"Timestamp": "2025-01-25 13:00", "Month": 1, "Day": 25, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.048383},
  {"Timestamp": "2025-01-25 14:00", "Month": 1, "Day": 25, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.046542},
  {"Timestamp": "2025-01-25 15:00", "Month": 1, "Day": 25, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.050052},
  {"Timestamp": "2025-01-25 16:00", "Month": 1, "Day": 25, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.054967},
  {"Timestamp": "2025-01-25 17:00", "Month": 1, "Day": 25, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.058652},
  {"Timestamp": "2025-01-25 18:00", "Month": 1, "Day": 25, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.058426},
  {"Timestamp": "2025-01-25 19:00", "Month": 1, "Day": 25, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.05653},
  {"Timestamp": "2025-01-25 20:00", "Month": 1, "Day": 25, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.054719},
  {"Timestamp": "2025-01-25 21:00", "Month": 1, "Day": 25, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.052005},
  {"Timestamp": "2025-01-25 22:00", "Month": 1, "Day": 25, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.048081},
  {"Timestamp": "2025-01-25 23:00", "Month": 1, "Day": 25, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.042084},
  {"Timestamp": "2025-01-26 00:00", "Month": 1, "Day": 26, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.035379},
  {"Timestamp": "2025-01-26 01:00", "Month": 1, "Day": 26, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.030084},
  {"Timestamp": "2025-01-26 02:00", "Month": 1, "Day": 26, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.025676},
  {"Timestamp": "2025-01-26 03:00", "Month": 1, "Day": 26, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.022972},
  {"Timestamp": "2025-01-26 04:00", "Month": 1, "Day": 26, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.024372},
  {"Timestamp": "2025-01-26 05:00", "Month": 1, "Day": 26, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.028989},
  {"Timestamp": "2025-01-26 06:00", "Month": 1, "Day": 26, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.032511},
  {"Timestamp": "2025-01-26 07:00", "Month": 1, "Day": 26, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.033888},
  {"Timestamp": "2025-01-26 08:00", "Month": 1, "Day": 26, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.032122},
  {"Timestamp": "2025-01-26 09:00", "Month": 1, "Day": 26, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.030725},
  {"Timestamp": "2025-01-26 10:00", "Month": 1, "Day": 26, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.034611},
  {"Timestamp": "2025-01-26 11:00", "Month": 1, "Day": 26, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.043774},
  {"Timestamp": "2025-01-26 12:00", "Month": 1, "Day": 26, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.053751},
  {"Timestamp": "2025-01-26 13:00", "Month": 1, "Day": 26, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.06614},
  {"Timestamp": "2025-01-26 14:00", "Month": 1, "Day": 26, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.081389},
  {"Timestamp": "2025-01-26 15:00", "Month": 1, "Day": 26, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.101142},
  {"Timestamp": "2025-01-26 16:00", "Month": 1, "Day": 26, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.119161},
  {"Timestamp": "2025-01-26 17:00", "Month": 1, "Day": 26, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.125856},
  {"Timestamp": "2025-01-26 18:00", "Month": 1, "Day": 26, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.127921},
  {"Timestamp": "2025-01-26 19:00", "Month": 1, "Day": 26, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.128431},
  {"Timestamp": "2025-01-26 20:00", "Month": 1, "Day": 26, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.130237},
  {"Timestamp": "2025-01-26 21:00", "Month": 1, "Day": 26, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.13274},
  {"Timestamp": "2025-01-26 22:00", "Month": 1, "Day": 26, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.140278},
  {"Timestamp": "2025-01-26 23:00", "Month": 1, "Day": 26, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.149977},
  {"Timestamp": "2025-01-27 00:00", "Month": 1, "Day": 27, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.153467},
  {"Timestamp": "2025-01-27 01:00", "Month": 1, "Day": 27, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.159337},
  {"Timestamp": "2025-01-27 02:00", "Month": 1, "Day": 27, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.168148},
  {"Timestamp": "2025-01-27 03:00", "Month": 1, "Day": 27, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.172838},
  {"Timestamp": "2025-01-27 04:00", "Month": 1, "Day": 27, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.17812},
  {"Timestamp": "2025-01-27 05:00", "Month": 1, "Day": 27, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.185541},
  {"Timestamp": "2025-01-27 06:00", "Month": 1, "Day": 27, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.194098},
  {"Timestamp": "2025-01-27 07:00", "Month": 1, "Day": 27, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.189975},
  {"Timestamp": "2025-01-27 08:00", "Month": 1, "Day": 27, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.160109},
  {"Timestamp": "2025-01-27 09:00", "Month": 1, "Day": 27, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.147854},
  {"Timestamp": "2025-01-27 10:00", "Month": 1, "Day": 27, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.164761},
  {"Timestamp": "2025-01-27 11:00", "Month": 1, "Day": 27, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.173667},
  {"Timestamp": "2025-01-27 12:00", "Month": 1, "Day": 27, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.171565},
  {"Timestamp": "2025-01-27 13:00", "Month": 1, "Day": 27, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.162648},
  {"Timestamp": "2025-01-27 14:00", "Month": 1, "Day": 27, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.16708},
  {"Timestamp": "2025-01-27 15:00", "Month": 1, "Day": 27, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.198799},
  {"Timestamp": "2025-01-27 16:00", "Month": 1, "Day": 27, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.217786},
  {"Timestamp": "2025-01-27 17:00", "Month": 1, "Day": 27, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.206225},
  {"Timestamp": "2025-01-27 18:00", "Month": 1, "Day": 27, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.183823},
  {"Timestamp": "2025-01-27 19:00", "Month": 1, "Day": 27, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.15649},
  {"Timestamp": "2025-01-27 20:00", "Month": 1, "Day": 27, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.131491},
  {"Timestamp": "2025-01-27 21:00", "Month": 1, "Day": 27, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.110054},
  {"Timestamp": "2025-01-27 22:00", "Month": 1, "Day": 27, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.097163},
  {"Timestamp": "2025-01-27 23:00", "Month": 1, "Day": 27, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.083275},
  {"Timestamp": "2025-01-28 00:00", "Month": 1, "Day": 28, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.07246},
  {"Timestamp": "2025-01-28 01:00", "Month": 1, "Day": 28, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.064209},
  {"Timestamp": "2025-01-28 02:00", "Month": 1, "Day": 28, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.058351},
  {"Timestamp": "2025-01-28 03:00", "Month": 1, "Day": 28, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.054887},
  {"Timestamp": "2025-01-28 04:00", "Month": 1, "Day": 28, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.053617},
  {"Timestamp": "2025-01-28 05:00", "Month": 1, "Day": 28, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.052779},
  {"Timestamp": "2025-01-28 06:00", "Month": 1, "Day": 28, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.052443},
  {"Timestamp": "2025-01-28 07:00", "Month": 1, "Day": 28, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.049573},
  {"Timestamp": "2025-01-28 08:00", "Month": 1, "Day": 28, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.038921},
  {"Timestamp": "2025-01-28 09:00", "Month": 1, "Day": 28, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.039437},
  {"Timestamp": "2025-01-28 10:00", "Month": 1, "Day": 28, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.038686},
  {"Timestamp": "2025-01-28 11:00", "Month": 1, "Day": 28, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.039594},
  {"Timestamp": "2025-01-28 12:00", "Month": 1, "Day": 28, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.044982},
  {"Timestamp": "2025-01-28 13:00", "Month": 1, "Day": 28, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.053637},
  {"Timestamp": "2025-01-28 14:00", "Month": 1, "Day": 28, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.069528},
  {"Timestamp": "2025-01-28 15:00", "Month": 1, "Day": 28, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.09858},
  {"Timestamp": "2025-01-28 16:00", "Month": 1, "Day": 28, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.122672},
  {"Timestamp": "2025-01-28 17:00", "Month": 1, "Day": 28, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.135725},
  {"Timestamp": "2025-01-28 18:00", "Month": 1, "Day": 28, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.138765},
  {"Timestamp": "2025-01-28 19:00", "Month": 1, "Day": 28, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.13817},
  {"Timestamp": "2025-01-28 20:00", "Month": 1, "Day": 28, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.137146},
  {"Timestamp": "2025-01-28 21:00", "Month": 1, "Day": 28, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.13346},
  {"Timestamp": "2025-01-28 22:00", "Month": 1, "Day": 28, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.14092},
  {"Timestamp": "2025-01-28 23:00", "Month": 1, "Day": 28, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.146516},
  {"Timestamp": "2025-01-29 00:00", "Month": 1, "Day": 29, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.153926},
  {"Timestamp": "2025-01-29 01:00", "Month": 1, "Day": 29, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.164146},
  {"Timestamp": "2025-01-29 02:00", "Month": 1, "Day": 29, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.181197},
  {"Timestamp": "2025-01-29 03:00", "Month": 1, "Day": 29, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.186545},
  {"Timestamp": "2025-01-29 04:00", "Month": 1, "Day": 29, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.185962},
  {"Timestamp": "2025-01-29 05:00", "Month": 1, "Day": 29, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.188246},
  {"Timestamp": "2025-01-29 06:00", "Month": 1, "Day": 29, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.19335},
  {"Timestamp": "2025-01-29 07:00", "Month": 1, "Day": 29, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.202245},
  {"Timestamp": "2025-01-29 08:00", "Month": 1, "Day": 29, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.209635},
  {"Timestamp": "2025-01-29 09:00", "Month": 1, "Day": 29, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.218303},
  {"Timestamp": "2025-01-29 10:00", "Month": 1, "Day": 29, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.23979},
  {"Timestamp": "2025-01-29 11:00", "Month": 1, "Day": 29, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.267221},
  {"Timestamp": "2025-01-29 12:00", "Month": 1, "Day": 29, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.288378},
  {"Timestamp": "2025-01-29 13:00", "Month": 1, "Day": 29, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.301074},
  {"Timestamp": "2025-01-29 14:00", "Month": 1, "Day": 29, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.318547},
  {"Timestamp": "2025-01-29 15:00", "Month": 1, "Day": 29, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.349338},
  {"Timestamp": "2025-01-29 16:00", "Month": 1, "Day": 29, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.388648},
  {"Timestamp": "2025-01-29 17:00", "Month": 1, "Day": 29, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.42615},
  {"Timestamp": "2025-01-29 18:00", "Month": 1, "Day": 29, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.455215},
  {"Timestamp": "2025-01-29 19:00", "Month": 1, "Day": 29, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.478575},
  {"Timestamp": "2025-01-29 20:00", "Month": 1, "Day": 29, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.507454},
  {"Timestamp": "2025-01-29 21:00", "Month": 1, "Day": 29, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.533315},
  {"Timestamp": "2025-01-29 22:00", "Month": 1, "Day": 29, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.55685},
  {"Timestamp": "2025-01-29 23:00", "Month": 1, "Day": 29, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.579986},
  {"Timestamp": "2025-01-30 00:00", "Month": 1, "Day": 30, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.605675},
  {"Timestamp": "2025-01-30 01:00", "Month": 1, "Day": 30, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.627003},
  {"Timestamp": "2025-01-30 02:00", "Month": 1, "Day": 30, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.624522},
  {"Timestamp": "2025-01-30 03:00", "Month": 1, "Day": 30, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.635925},
  {"Timestamp": "2025-01-30 04:00", "Month": 1, "Day": 30, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.654438},
  {"Timestamp": "2025-01-30 05:00", "Month": 1, "Day": 30, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.67465},
  {"Timestamp": "2025-01-30 06:00", "Month": 1, "Day": 30, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.688669},
  {"Timestamp": "2025-01-30 07:00", "Month": 1, "Day": 30, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.696846},
  {"Timestamp": "2025-01-30 08:00", "Month": 1, "Day": 30, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.699937},
  {"Timestamp": "2025-01-30 09:00", "Month": 1, "Day": 30, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.711169},
  {"Timestamp": "2025-01-30 10:00", "Month": 1, "Day": 30, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.733627},
  {"Timestamp": "2025-01-30 11:00", "Month": 1, "Day": 30, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.756795},
  {"Timestamp": "2025-01-30 12:00", "Month": 1, "Day": 30, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.768397},
  {"Timestamp": "2025-01-30 13:00", "Month": 1, "Day": 30, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.768608},
  {"Timestamp": "2025-01-30 14:00", "Month": 1, "Day": 30, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.763949},
  {"Timestamp": "2025-01-30 15:00", "Month": 1, "Day": 30, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.75887},
  {"Timestamp": "2025-01-30 16:00", "Month": 1, "Day": 30, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.746091},
  {"Timestamp": "2025-01-30 17:00", "Month": 1, "Day": 30, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.726339},
  {"Timestamp": "2025-01-30 18:00", "Month": 1, "Day": 30, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.70457},
  {"Timestamp": "2025-01-30 19:00", "Month": 1, "Day": 30, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.676415},
  {"Timestamp": "2025-01-30 20:00", "Month": 1, "Day": 30, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.648685},
  {"Timestamp": "2025-01-30 21:00", "Month": 1, "Day": 30, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.620297},
  {"Timestamp": "2025-01-30 22:00", "Month": 1, "Day": 30, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.590304},
  {"Timestamp": "2025-01-30 23:00", "Month": 1, "Day": 30, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.561544},
  {"Timestamp": "2025-01-31 00:00", "Month": 1, "Day": 31, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.517754},
  {"Timestamp": "2025-01-31 01:00", "Month": 1, "Day": 31, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.468873},
  {"Timestamp": "2025-01-31 02:00", "Month": 1, "Day": 31, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.425641},
  {"Timestamp": "2025-01-31 03:00", "Month": 1, "Day": 31, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.388608},
  {"Timestamp": "2025-01-31 04:00", "Month": 1, "Day": 31, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.355293},
  {"Timestamp": "2025-01-31 05:00", "Month": 1, "Day": 31, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.342101},
  {"Timestamp": "2025-01-31 06:00", "Month": 1, "Day": 31, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.355481},
  {"Timestamp": "2025-01-31 07:00", "Month": 1, "Day": 31, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.390938},
  {"Timestamp": "2025-01-31 08:00", "Month": 1, "Day": 31, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.429002},
  {"Timestamp": "2025-01-31 09:00", "Month": 1, "Day": 31, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.502249},
  {"Timestamp": "2025-01-31 10:00", "Month": 1, "Day": 31, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.572839},
  {"Timestamp": "2025-01-31 11:00", "Month": 1, "Day": 31, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.627904},
  {"Timestamp": "2025-01-31 12:00", "Month": 1, "Day": 31, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.665396},
  {"Timestamp": "2025-01-31 13:00", "Month": 1, "Day": 31, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.689941},
  {"Timestamp": "2025-01-31 14:00", "Month": 1, "Day": 31, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.711134},
  {"Timestamp": "2025-01-31 15:00", "Month": 1, "Day": 31, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.738443},
  {"Timestamp": "2025-01-31 16:00", "Month": 1, "Day": 31, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.748741},
  {"Timestamp": "2025-01-31 17:00", "Month": 1, "Day": 31, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.742679},
  {"Timestamp": "2025-01-31 18:00", "Month": 1, "Day": 31, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.723781},
  {"Timestamp": "2025-01-31 19:00", "Month": 1, "Day": 31, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.69844},
  {"Timestamp": "2025-01-31 20:00", "Month": 1, "Day": 31, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.677909},
  {"Timestamp": "2025-01-31 21:00", "Month": 1, "Day": 31, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.662627},
  {"Timestamp": "2025-01-31 22:00", "Month": 1, "Day": 31, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.654643},
  {"Timestamp": "2025-01-31 23:00", "Month": 1, "Day": 31, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.648189},
  {"Timestamp": "2025-02-01 00:00", "Month": 2, "Day": 1, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.633768},
  {"Timestamp": "2025-02-01 01:00", "Month": 2, "Day": 1, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.616469},
  {"Timestamp": "2025-02-01 02:00", "Month": 2, "Day": 1, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.6086},
  {"Timestamp": "2025-02-01 03:00", "Month": 2, "Day": 1, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.612981},
  {"Timestamp": "2025-02-01 04:00", "Month": 2, "Day": 1, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.628491},
  {"Timestamp": "2025-02-01 05:00", "Month": 2, "Day": 1, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.652445},
  {"Timestamp": "2025-02-01 06:00", "Month": 2, "Day": 1, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.661135},
  {"Timestamp": "2025-02-01 07:00", "Month": 2, "Day": 1, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.659255},
  {"Timestamp": "2025-02-01 08:00", "Month": 2, "Day": 1, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.664355},
  {"Timestamp": "2025-02-01 09:00", "Month": 2, "Day": 1, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.671623},
  {"Timestamp": "2025-02-01 10:00", "Month": 2, "Day": 1, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.685817},
  {"Timestamp": "2025-02-01 11:00", "Month": 2, "Day": 1, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.715722},
  {"Timestamp": "2025-02-01 12:00", "Month": 2, "Day": 1, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.72777},
  {"Timestamp": "2025-02-01 13:00", "Month": 2, "Day": 1, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.729985},
  {"Timestamp": "2025-02-01 14:00", "Month": 2, "Day": 1, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.732914},
  {"Timestamp": "2025-02-01 15:00", "Month": 2, "Day": 1, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.728601},
  {"Timestamp": "2025-02-01 16:00", "Month": 2, "Day": 1, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.734615},
  {"Timestamp": "2025-02-01 17:00", "Month": 2, "Day": 1, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.743699},
  {"Timestamp": "2025-02-01 18:00", "Month": 2, "Day": 1, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.746947},
  {"Timestamp": "2025-02-01 19:00", "Month": 2, "Day": 1, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.746415},
  {"Timestamp": "2025-02-01 20:00", "Month": 2, "Day": 1, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.74455},
  {"Timestamp": "2025-02-01 21:00", "Month": 2, "Day": 1, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.746149},
  {"Timestamp": "2025-02-01 22:00", "Month": 2, "Day": 1, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.741889},
  {"Timestamp": "2025-02-01 23:00", "Month": 2, "Day": 1, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.734408},
  {"Timestamp": "2025-02-02 00:00", "Month": 2, "Day": 2, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.706464},
  {"Timestamp": "2025-02-02 01:00", "Month": 2, "Day": 2, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.666927},
  {"Timestamp": "2025-02-02 02:00", "Month": 2, "Day": 2, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.628658},
  {"Timestamp": "2025-02-02 03:00", "Month": 2, "Day": 2, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.591727},
  {"Timestamp": "2025-02-02 04:00", "Month": 2, "Day": 2, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.551436},
  {"Timestamp": "2025-02-02 05:00", "Month": 2, "Day": 2, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.509735},
  {"Timestamp": "2025-02-02 06:00", "Month": 2, "Day": 2, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.465042},
  {"Timestamp": "2025-02-02 07:00", "Month": 2, "Day": 2, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.418624},
  {"Timestamp": "2025-02-02 08:00", "Month": 2, "Day": 2, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.363187},
  {"Timestamp": "2025-02-02 09:00", "Month": 2, "Day": 2, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.332717},
  {"Timestamp": "2025-02-02 10:00", "Month": 2, "Day": 2, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.325683},
  {"Timestamp": "2025-02-02 11:00", "Month": 2, "Day": 2, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.314751},
  {"Timestamp": "2025-02-02 12:00", "Month": 2, "Day": 2, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.28587},
  {"Timestamp": "2025-02-02 13:00", "Month": 2, "Day": 2, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.240804},
  {"Timestamp": "2025-02-02 14:00", "Month": 2, "Day": 2, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.202539},
  {"Timestamp": "2025-02-02 15:00", "Month": 2, "Day": 2, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.204917},
  {"Timestamp": "2025-02-02 16:00", "Month": 2, "Day": 2, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.207852},
  {"Timestamp": "2025-02-02 17:00", "Month": 2, "Day": 2, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.202995},
  {"Timestamp": "2025-02-02 18:00", "Month": 2, "Day": 2, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.207286},
  {"Timestamp": "2025-02-02 19:00", "Month": 2, "Day": 2, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.219156},
  {"Timestamp": "2025-02-02 20:00", "Month": 2, "Day": 2, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.245075},
  {"Timestamp": "2025-02-02 21:00", "Month": 2, "Day": 2, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.276748},
  {"Timestamp": "2025-02-02 22:00", "Month": 2, "Day": 2, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.318833},
  {"Timestamp": "2025-02-02 23:00", "Month": 2, "Day": 2, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.376017},
  {"Timestamp": "2025-02-03 00:00", "Month": 2, "Day": 3, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.448184},
  {"Timestamp": "2025-02-03 01:00", "Month": 2, "Day": 3, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.50142},
  {"Timestamp": "2025-02-03 02:00", "Month": 2, "Day": 3, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.556322},
  {"Timestamp": "2025-02-03 03:00", "Month": 2, "Day": 3, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.618303},
  {"Timestamp": "2025-02-03 04:00", "Month": 2, "Day": 3, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.682855},
  {"Timestamp": "2025-02-03 05:00", "Month": 2, "Day": 3, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.734706},
  {"Timestamp": "2025-02-03 06:00", "Month": 2, "Day": 3, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.775938},
  {"Timestamp": "2025-02-03 07:00", "Month": 2, "Day": 3, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.808726},
  {"Timestamp": "2025-02-03 08:00", "Month": 2, "Day": 3, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.822219},
  {"Timestamp": "2025-02-03 09:00", "Month": 2, "Day": 3, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.824955},
  {"Timestamp": "2025-02-03 10:00", "Month": 2, "Day": 3, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.828199},
  {"Timestamp": "2025-02-03 11:00", "Month": 2, "Day": 3, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.829114},
  {"Timestamp": "2025-02-03 12:00", "Month": 2, "Day": 3, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.82781},
  {"Timestamp": "2025-02-03 13:00", "Month": 2, "Day": 3, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.819741},
  {"Timestamp": "2025-02-03 14:00", "Month": 2, "Day": 3, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.805806},
  {"Timestamp": "2025-02-03 15:00", "Month": 2, "Day": 3, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.793313},
  {"Timestamp": "2025-02-03 16:00", "Month": 2, "Day": 3, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.776107},
  {"Timestamp": "2025-02-03 17:00", "Month": 2, "Day": 3, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.750365},
  {"Timestamp": "2025-02-03 18:00", "Month": 2, "Day": 3, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.721235},
  {"Timestamp": "2025-02-03 19:00", "Month": 2, "Day": 3, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.683374},
  {"Timestamp": "2025-02-03 20:00", "Month": 2, "Day": 3, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.635558},
  {"Timestamp": "2025-02-03 21:00", "Month": 2, "Day": 3, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.585005},
  {"Timestamp": "2025-02-03 22:00", "Month": 2, "Day": 3, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.53047},
  {"Timestamp": "2025-02-03 23:00", "Month": 2, "Day": 3, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.460422},
  {"Timestamp": "2025-02-04 00:00", "Month": 2, "Day": 4, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.38595},
  {"Timestamp": "2025-02-04 01:00", "Month": 2, "Day": 4, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.313388},
  {"Timestamp": "2025-02-04 02:00", "Month": 2, "Day": 4, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.25026},
  {"Timestamp": "2025-02-04 03:00", "Month": 2, "Day": 4, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.206204},
  {"Timestamp": "2025-02-04 04:00", "Month": 2, "Day": 4, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.174583},
  {"Timestamp": "2025-02-04 05:00", "Month": 2, "Day": 4, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.149488},
  {"Timestamp": "2025-02-04 06:00", "Month": 2, "Day": 4, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.13018},
  {"Timestamp": "2025-02-04 07:00", "Month": 2, "Day": 4, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.104959},
  {"Timestamp": "2025-02-04 08:00", "Month": 2, "Day": 4, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.070317},
  {"Timestamp": "2025-02-04 09:00", "Month": 2, "Day": 4, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.064314},
  {"Timestamp": "2025-02-04 10:00", "Month": 2, "Day": 4, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.055246},
  {"Timestamp": "2025-02-04 11:00", "Month": 2, "Day": 4, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.049433},
  {"Timestamp": "2025-02-04 12:00", "Month": 2, "Day": 4, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.049257},
  {"Timestamp": "2025-02-04 13:00", "Month": 2, "Day": 4, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.052002},
  {"Timestamp": "2025-02-04 14:00", "Month": 2, "Day": 4, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.053625},
  {"Timestamp": "2025-02-04 15:00", "Month": 2, "Day": 4, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.073777},
  {"Timestamp": "2025-02-04 16:00", "Month": 2, "Day": 4, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.100151},
  {"Timestamp": "2025-02-04 17:00", "Month": 2, "Day": 4, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.118494},
  {"Timestamp": "2025-02-04 18:00", "Month": 2, "Day": 4, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.129304},
  {"Timestamp": "2025-02-04 19:00", "Month": 2, "Day": 4, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.13539},
  {"Timestamp": "2025-02-04 20:00", "Month": 2, "Day": 4, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.136601},
  {"Timestamp": "2025-02-04 21:00", "Month": 2, "Day": 4, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.132397},
  {"Timestamp": "2025-02-04 22:00", "Month": 2, "Day": 4, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.127894},
  {"Timestamp": "2025-02-04 23:00", "Month": 2, "Day": 4, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.126153},
  {"Timestamp": "2025-02-05 00:00", "Month": 2, "Day": 5, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.125824},
  {"Timestamp": "2025-02-05 01:00", "Month": 2, "Day": 5, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.123263},
  {"Timestamp": "2025-02-05 02:00", "Month": 2, "Day": 5, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.117806},
  {"Timestamp": "2025-02-05 03:00", "Month": 2, "Day": 5, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.113584},
  {"Timestamp": "2025-02-05 04:00", "Month": 2, "Day": 5, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.109778},
  {"Timestamp": "2025-02-05 05:00", "Month": 2, "Day": 5, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.105389},
  {"Timestamp": "2025-02-05 06:00", "Month": 2, "Day": 5, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.100075},
  {"Timestamp": "2025-02-05 07:00", "Month": 2, "Day": 5, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.09126},
  {"Timestamp": "2025-02-05 08:00", "Month": 2, "Day": 5, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.082283},
  {"Timestamp": "2025-02-05 09:00", "Month": 2, "Day": 5, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.101328},
  {"Timestamp": "2025-02-05 10:00", "Month": 2, "Day": 5, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.124754},
  {"Timestamp": "2025-02-05 11:00", "Month": 2, "Day": 5, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.143966},
  {"Timestamp": "2025-02-05 12:00", "Month": 2, "Day": 5, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.154034},
  {"Timestamp": "2025-02-05 13:00", "Month": 2, "Day": 5, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.150291},
  {"Timestamp": "2025-02-05 14:00", "Month": 2, "Day": 5, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.138467},
  {"Timestamp": "2025-02-05 15:00", "Month": 2, "Day": 5, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.152224},
  {"Timestamp": "2025-02-05 16:00", "Month": 2, "Day": 5, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.174574},
  {"Timestamp": "2025-02-05 17:00", "Month": 2, "Day": 5, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.177555},
  {"Timestamp": "2025-02-05 18:00", "Month": 2, "Day": 5, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.16642},
  {"Timestamp": "2025-02-05 19:00", "Month": 2, "Day": 5, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.150675},
  {"Timestamp": "2025-02-05 20:00", "Month": 2, "Day": 5, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.136956},
  {"Timestamp": "2025-02-05 21:00", "Month": 2, "Day": 5, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.118526},
  {"Timestamp": "2025-02-05 22:00", "Month": 2, "Day": 5, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.097253},
  {"Timestamp": "2025-02-05 23:00", "Month": 2, "Day": 5, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.081127},
  {"Timestamp": "2025-02-06 00:00", "Month": 2, "Day": 6, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.069511},
  {"Timestamp": "2025-02-06 01:00", "Month": 2, "Day": 6, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.063038},
  {"Timestamp": "2025-02-06 02:00", "Month": 2, "Day": 6, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.060742},
  {"Timestamp": "2025-02-06 03:00", "Month": 2, "Day": 6, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.059081},
  {"Timestamp": "2025-02-06 04:00", "Month": 2, "Day": 6, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.057535},
  {"Timestamp": "2025-02-06 05:00", "Month": 2, "Day": 6, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.057278},
  {"Timestamp": "2025-02-06 06:00", "Month": 2, "Day": 6, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.058949},
  {"Timestamp": "2025-02-06 07:00", "Month": 2, "Day": 6, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.053564},
  {"Timestamp": "2025-02-06 08:00", "Month": 2, "Day": 6, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.051537},
  {"Timestamp": "2025-02-06 09:00", "Month": 2, "Day": 6, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.057422},
  {"Timestamp": "2025-02-06 10:00", "Month": 2, "Day": 6, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.061144},
  {"Timestamp": "2025-02-06 11:00", "Month": 2, "Day": 6, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.068403},
  {"Timestamp": "2025-02-06 12:00", "Month": 2, "Day": 6, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.07815},
  {"Timestamp": "2025-02-06 13:00", "Month": 2, "Day": 6, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.087653},
  {"Timestamp": "2025-02-06 14:00", "Month": 2, "Day": 6, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.085527},
  {"Timestamp": "2025-02-06 15:00", "Month": 2, "Day": 6, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.087889},
  {"Timestamp": "2025-02-06 16:00", "Month": 2, "Day": 6, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.10409},
  {"Timestamp": "2025-02-06 17:00", "Month": 2, "Day": 6, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.113175},
  {"Timestamp": "2025-02-06 18:00", "Month": 2, "Day": 6, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.122001},
  {"Timestamp": "2025-02-06 19:00", "Month": 2, "Day": 6, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.130345},
  {"Timestamp": "2025-02-06 20:00", "Month": 2, "Day": 6, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.129847},
  {"Timestamp": "2025-02-06 21:00", "Month": 2, "Day": 6, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.121974},
  {"Timestamp": "2025-02-06 22:00", "Month": 2, "Day": 6, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.113669},
  {"Timestamp": "2025-02-06 23:00", "Month": 2, "Day": 6, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.110822},
  {"Timestamp": "2025-02-07 00:00", "Month": 2, "Day": 7, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.106241},
  {"Timestamp": "2025-02-07 01:00", "Month": 2, "Day": 7, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.099211},
  {"Timestamp": "2025-02-07 02:00", "Month": 2, "Day": 7, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.09411},
  {"Timestamp": "2025-02-07 03:00", "Month": 2, "Day": 7, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.087596},
  {"Timestamp": "2025-02-07 04:00", "Month": 2, "Day": 7, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.08096},
  {"Timestamp": "2025-02-07 05:00", "Month": 2, "Day": 7, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.077392},
  {"Timestamp": "2025-02-07 06:00", "Month": 2, "Day": 7, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.077336},
  {"Timestamp": "2025-02-07 07:00", "Month": 2, "Day": 7, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.068929},
  {"Timestamp": "2025-02-07 08:00", "Month": 2, "Day": 7, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.059267},
  {"Timestamp": "2025-02-07 09:00", "Month": 2, "Day": 7, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.05503},
  {"Timestamp": "2025-02-07 10:00", "Month": 2, "Day": 7, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.048645},
  {"Timestamp": "2025-02-07 11:00", "Month": 2, "Day": 7, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.044064},
  {"Timestamp": "2025-02-07 12:00", "Month": 2, "Day": 7, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.038886},
  {"Timestamp": "2025-02-07 13:00", "Month": 2, "Day": 7, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.035404},
  {"Timestamp": "2025-02-07 14:00", "Month": 2, "Day": 7, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.03558},
  {"Timestamp": "2025-02-07 15:00", "Month": 2, "Day": 7, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.046826},
  {"Timestamp": "2025-02-07 16:00", "Month": 2, "Day": 7, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.065234},
  {"Timestamp": "2025-02-07 17:00", "Month": 2, "Day": 7, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.079967},
  {"Timestamp": "2025-02-07 18:00", "Month": 2, "Day": 7, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.091697},
  {"Timestamp": "2025-02-07 19:00", "Month": 2, "Day": 7, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.101481},
  {"Timestamp": "2025-02-07 20:00", "Month": 2, "Day": 7, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.10781},
  {"Timestamp": "2025-02-07 21:00", "Month": 2, "Day": 7, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.11119},
  {"Timestamp": "2025-02-07 22:00", "Month": 2, "Day": 7, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.110145},
  {"Timestamp": "2025-02-07 23:00", "Month": 2, "Day": 7, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.105152},
  {"Timestamp": "2025-02-08 00:00", "Month": 2, "Day": 8, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.099777},
  {"Timestamp": "2025-02-08 01:00", "Month": 2, "Day": 8, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.096257},
  {"Timestamp": "2025-02-08 02:00", "Month": 2, "Day": 8, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.095485},
  {"Timestamp": "2025-02-08 03:00", "Month": 2, "Day": 8, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.097682},
  {"Timestamp": "2025-02-08 04:00", "Month": 2, "Day": 8, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.104998},
  {"Timestamp": "2025-02-08 05:00", "Month": 2, "Day": 8, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.116519},
  {"Timestamp": "2025-02-08 06:00", "Month": 2, "Day": 8, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.129954},
  {"Timestamp": "2025-02-08 07:00", "Month": 2, "Day": 8, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.112246},
  {"Timestamp": "2025-02-08 08:00", "Month": 2, "Day": 8, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.07483},
  {"Timestamp": "2025-02-08 09:00", "Month": 2, "Day": 8, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.091326},
  {"Timestamp": "2025-02-08 10:00", "Month": 2, "Day": 8, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.110434},
  {"Timestamp": "2025-02-08 11:00", "Month": 2, "Day": 8, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.112734},
  {"Timestamp": "2025-02-08 12:00", "Month": 2, "Day": 8, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.111015},
  {"Timestamp": "2025-02-08 13:00", "Month": 2, "Day": 8, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.112434},
  {"Timestamp": "2025-02-08 14:00", "Month": 2, "Day": 8, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.121115},
  {"Timestamp": "2025-02-08 15:00", "Month": 2, "Day": 8, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.177702},
  {"Timestamp": "2025-02-08 16:00", "Month": 2, "Day": 8, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.255859},
  {"Timestamp": "2025-02-08 17:00", "Month": 2, "Day": 8, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.294161},
  {"Timestamp": "2025-02-08 18:00", "Month": 2, "Day": 8, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.305354},
  {"Timestamp": "2025-02-08 19:00", "Month": 2, "Day": 8, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.305475},
  {"Timestamp": "2025-02-08 20:00", "Month": 2, "Day": 8, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.300516},
  {"Timestamp": "2025-02-08 21:00", "Month": 2, "Day": 8, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.291322},
  {"Timestamp": "2025-02-08 22:00", "Month": 2, "Day": 8, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.27851},
  {"Timestamp": "2025-02-08 23:00", "Month": 2, "Day": 8, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.263376},
  {"Timestamp": "2025-02-09 00:00", "Month": 2, "Day": 9, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.248438},
  {"Timestamp": "2025-02-09 01:00", "Month": 2, "Day": 9, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.235988},
  {"Timestamp": "2025-02-09 02:00", "Month": 2, "Day": 9, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.227885},
  {"Timestamp": "2025-02-09 03:00", "Month": 2, "Day": 9, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.233331},
  {"Timestamp": "2025-02-09 04:00", "Month": 2, "Day": 9, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.240568},
  {"Timestamp": "2025-02-09 05:00", "Month": 2, "Day": 9, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.241653},
  {"Timestamp": "2025-02-09 06:00", "Month": 2, "Day": 9, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.237446},
  {"Timestamp": "2025-02-09 07:00", "Month": 2, "Day": 9, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.203108},
  {"Timestamp": "2025-02-09 08:00", "Month": 2, "Day": 9, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.152364},
  {"Timestamp": "2025-02-09 09:00", "Month": 2, "Day": 9, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.161263},
  {"Timestamp": "2025-02-09 10:00", "Month": 2, "Day": 9, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.18317},
  {"Timestamp": "2025-02-09 11:00", "Month": 2, "Day": 9, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.183097},
  {"Timestamp": "2025-02-09 12:00", "Month": 2, "Day": 9, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.178648},
  {"Timestamp": "2025-02-09 13:00", "Month": 2, "Day": 9, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.163919},
  {"Timestamp": "2025-02-09 14:00", "Month": 2, "Day": 9, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.163758},
  {"Timestamp": "2025-02-09 15:00", "Month": 2, "Day": 9, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.198037},
  {"Timestamp": "2025-02-09 16:00", "Month": 2, "Day": 9, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.234176},
  {"Timestamp": "2025-02-09 17:00", "Month": 2, "Day": 9, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.253642},
  {"Timestamp": "2025-02-09 18:00", "Month": 2, "Day": 9, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.262835},
  {"Timestamp": "2025-02-09 19:00", "Month": 2, "Day": 9, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.263948},
  {"Timestamp": "2025-02-09 20:00", "Month": 2, "Day": 9, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.266564},
  {"Timestamp": "2025-02-09 21:00", "Month": 2, "Day": 9, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.265497},
  {"Timestamp": "2025-02-09 22:00", "Month": 2, "Day": 9, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.264724},
  {"Timestamp": "2025-02-09 23:00", "Month": 2, "Day": 9, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.259933},
  {"Timestamp": "2025-02-10 00:00", "Month": 2, "Day": 10, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.24825},
  {"Timestamp": "2025-02-10 01:00", "Month": 2, "Day": 10, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.225971},
  {"Timestamp": "2025-02-10 02:00", "Month": 2, "Day": 10, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.206667},
  {"Timestamp": "2025-02-10 03:00", "Month": 2, "Day": 10, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.194422},
  {"Timestamp": "2025-02-10 04:00", "Month": 2, "Day": 10, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.189806},
  {"Timestamp": "2025-02-10 05:00", "Month": 2, "Day": 10, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.188082},
  {"Timestamp": "2025-02-10 06:00", "Month": 2, "Day": 10, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.187934},
  {"Timestamp": "2025-02-10 07:00", "Month": 2, "Day": 10, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.18168},
  {"Timestamp": "2025-02-10 08:00", "Month": 2, "Day": 10, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.166866},
  {"Timestamp": "2025-02-10 09:00", "Month": 2, "Day": 10, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.175479},
  {"Timestamp": "2025-02-10 10:00", "Month": 2, "Day": 10, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.192614},
  {"Timestamp": "2025-02-10 11:00", "Month": 2, "Day": 10, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.22042},
  {"Timestamp": "2025-02-10 12:00", "Month": 2, "Day": 10, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.246446},
  {"Timestamp": "2025-02-10 13:00", "Month": 2, "Day": 10, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.253953},
  {"Timestamp": "2025-02-10 14:00", "Month": 2, "Day": 10, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.259913},
  {"Timestamp": "2025-02-10 15:00", "Month": 2, "Day": 10, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.310255},
  {"Timestamp": "2025-02-10 16:00", "Month": 2, "Day": 10, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.373364},
  {"Timestamp": "2025-02-10 17:00", "Month": 2, "Day": 10, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.40655},
  {"Timestamp": "2025-02-10 18:00", "Month": 2, "Day": 10, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.428209},
  {"Timestamp": "2025-02-10 19:00", "Month": 2, "Day": 10, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.442266},
  {"Timestamp": "2025-02-10 20:00", "Month": 2, "Day": 10, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.436277},
  {"Timestamp": "2025-02-10 21:00", "Month": 2, "Day": 10, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.424735},
  {"Timestamp": "2025-02-10 22:00", "Month": 2, "Day": 10, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.41907},
  {"Timestamp": "2025-02-10 23:00", "Month": 2, "Day": 10, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.429947},
  {"Timestamp": "2025-02-11 00:00", "Month": 2, "Day": 11, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.429044},
  {"Timestamp": "2025-02-11 01:00", "Month": 2, "Day": 11, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.430588},
  {"Timestamp": "2025-02-11 02:00", "Month": 2, "Day": 11, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.422715},
  {"Timestamp": "2025-02-11 03:00", "Month": 2, "Day": 11, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.423283},
  {"Timestamp": "2025-02-11 04:00", "Month": 2, "Day": 11, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.427004},
  {"Timestamp": "2025-02-11 05:00", "Month": 2, "Day": 11, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.436465},
  {"Timestamp": "2025-02-11 06:00", "Month": 2, "Day": 11, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.43611},
  {"Timestamp": "2025-02-11 07:00", "Month": 2, "Day": 11, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.424539},
  {"Timestamp": "2025-02-11 08:00", "Month": 2, "Day": 11, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.408018},
  {"Timestamp": "2025-02-11 09:00", "Month": 2, "Day": 11, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.4061},
  {"Timestamp": "2025-02-11 10:00", "Month": 2, "Day": 11, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.40316},
  {"Timestamp": "2025-02-11 11:00", "Month": 2, "Day": 11, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.400868},
  {"Timestamp": "2025-02-11 12:00", "Month": 2, "Day": 11, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.393731},
  {"Timestamp": "2025-02-11 13:00", "Month": 2, "Day": 11, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.374823},
  {"Timestamp": "2025-02-11 14:00", "Month": 2, "Day": 11, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.350435},
  {"Timestamp": "2025-02-11 15:00", "Month": 2, "Day": 11, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.341186},
  {"Timestamp": "2025-02-11 16:00", "Month": 2, "Day": 11, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.326046},
  {"Timestamp": "2025-02-11 17:00", "Month": 2, "Day": 11, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.297251},
  {"Timestamp": "2025-02-11 18:00", "Month": 2, "Day": 11, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.273784},
  {"Timestamp": "2025-02-11 19:00", "Month": 2, "Day": 11, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.2482},
  {"Timestamp": "2025-02-11 20:00", "Month": 2, "Day": 11, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.22572},
  {"Timestamp": "2025-02-11 21:00", "Month": 2, "Day": 11, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.20874},
  {"Timestamp": "2025-02-11 22:00", "Month": 2, "Day": 11, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.18787},
  {"Timestamp": "2025-02-11 23:00", "Month": 2, "Day": 11, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.16753},
  {"Timestamp": "2025-02-12 00:00", "Month": 2, "Day": 12, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.14757},
  {"Timestamp": "2025-02-12 01:00", "Month": 2, "Day": 12, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.128623},
  {"Timestamp": "2025-02-12 02:00", "Month": 2, "Day": 12, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.110602},
  {"Timestamp": "2025-02-12 03:00", "Month": 2, "Day": 12, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.095468},
  {"Timestamp": "2025-02-12 04:00", "Month": 2, "Day": 12, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.084537},
  {"Timestamp": "2025-02-12 05:00", "Month": 2, "Day": 12, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.076718},
  {"Timestamp": "2025-02-12 06:00", "Month": 2, "Day": 12, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.071848},
  {"Timestamp": "2025-02-12 07:00", "Month": 2, "Day": 12, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.065164},
  {"Timestamp": "2025-02-12 08:00", "Month": 2, "Day": 12, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.057775},
  {"Timestamp": "2025-02-12 09:00", "Month": 2, "Day": 12, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.051489},
  {"Timestamp": "2025-02-12 10:00", "Month": 2, "Day": 12, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.05345},
  {"Timestamp": "2025-02-12 11:00", "Month": 2, "Day": 12, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.061483},
  {"Timestamp": "2025-02-12 12:00", "Month": 2, "Day": 12, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.068369},
  {"Timestamp": "2025-02-12 13:00", "Month": 2, "Day": 12, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.072984},
  {"Timestamp": "2025-02-12 14:00", "Month": 2, "Day": 12, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.074472},
  {"Timestamp": "2025-02-12 15:00", "Month": 2, "Day": 12, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.087936},
  {"Timestamp": "2025-02-12 16:00", "Month": 2, "Day": 12, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.105368},
  {"Timestamp": "2025-02-12 17:00", "Month": 2, "Day": 12, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.112243},
  {"Timestamp": "2025-02-12 18:00", "Month": 2, "Day": 12, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.113734},
  {"Timestamp": "2025-02-12 19:00", "Month": 2, "Day": 12, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.115566},
  {"Timestamp": "2025-02-12 20:00", "Month": 2, "Day": 12, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.118966},
  {"Timestamp": "2025-02-12 21:00", "Month": 2, "Day": 12, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.121397},
  {"Timestamp": "2025-02-12 22:00", "Month": 2, "Day": 12, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.121486},
  {"Timestamp": "2025-02-12 23:00", "Month": 2, "Day": 12, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.118619},
  {"Timestamp": "2025-02-13 00:00", "Month": 2, "Day": 13, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.112741},
  {"Timestamp": "2025-02-13 01:00", "Month": 2, "Day": 13, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.107375},
  {"Timestamp": "2025-02-13 02:00", "Month": 2, "Day": 13, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.104591},
  {"Timestamp": "2025-02-13 03:00", "Month": 2, "Day": 13, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.101337},
  {"Timestamp": "2025-02-13 04:00", "Month": 2, "Day": 13, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.097688},
  {"Timestamp": "2025-02-13 05:00", "Month": 2, "Day": 13, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.094443},
  {"Timestamp": "2025-02-13 06:00", "Month": 2, "Day": 13, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.09097},
  {"Timestamp": "2025-02-13 07:00", "Month": 2, "Day": 13, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.077916},
  {"Timestamp": "2025-02-13 08:00", "Month": 2, "Day": 13, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.055115},
  {"Timestamp": "2025-02-13 09:00", "Month": 2, "Day": 13, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.047943},
  {"Timestamp": "2025-02-13 10:00", "Month": 2, "Day": 13, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.054616},
  {"Timestamp": "2025-02-13 11:00", "Month": 2, "Day": 13, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.052788},
  {"Timestamp": "2025-02-13 12:00", "Month": 2, "Day": 13, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.046186},
  {"Timestamp": "2025-02-13 13:00", "Month": 2, "Day": 13, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.042226},
  {"Timestamp": "2025-02-13 14:00", "Month": 2, "Day": 13, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.042203},
  {"Timestamp": "2025-02-13 15:00", "Month": 2, "Day": 13, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.05863},
  {"Timestamp": "2025-02-13 16:00", "Month": 2, "Day": 13, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.08228},
  {"Timestamp": "2025-02-13 17:00", "Month": 2, "Day": 13, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.101463},
  {"Timestamp": "2025-02-13 18:00", "Month": 2, "Day": 13, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.112603},
  {"Timestamp": "2025-02-13 19:00", "Month": 2, "Day": 13, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.111916},
  {"Timestamp": "2025-02-13 20:00", "Month": 2, "Day": 13, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.100847},
  {"Timestamp": "2025-02-13 21:00", "Month": 2, "Day": 13, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.08719},
  {"Timestamp": "2025-02-13 22:00", "Month": 2, "Day": 13, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.076393},
  {"Timestamp": "2025-02-13 23:00", "Month": 2, "Day": 13, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.068725},
  {"Timestamp": "2025-02-14 00:00", "Month": 2, "Day": 14, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.064258},
  {"Timestamp": "2025-02-14 01:00", "Month": 2, "Day": 14, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.063362},
  {"Timestamp": "2025-02-14 02:00", "Month": 2, "Day": 14, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.063893},
  {"Timestamp": "2025-02-14 03:00", "Month": 2, "Day": 14, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.067103},
  {"Timestamp": "2025-02-14 04:00", "Month": 2, "Day": 14, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.072982},
  {"Timestamp": "2025-02-14 05:00", "Month": 2, "Day": 14, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.077916},
  {"Timestamp": "2025-02-14 06:00", "Month": 2, "Day": 14, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.08034},
  {"Timestamp": "2025-02-14 07:00", "Month": 2, "Day": 14, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.066407},
  {"Timestamp": "2025-02-14 08:00", "Month": 2, "Day": 14, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.042135},
  {"Timestamp": "2025-02-14 09:00", "Month": 2, "Day": 14, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.031777},
  {"Timestamp": "2025-02-14 10:00", "Month": 2, "Day": 14, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.026208},
  {"Timestamp": "2025-02-14 11:00", "Month": 2, "Day": 14, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.021771},
  {"Timestamp": "2025-02-14 12:00", "Month": 2, "Day": 14, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.018807},
  {"Timestamp": "2025-02-14 13:00", "Month": 2, "Day": 14, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.018251},
  {"Timestamp": "2025-02-14 14:00", "Month": 2, "Day": 14, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.022366},
  {"Timestamp": "2025-02-14 15:00", "Month": 2, "Day": 14, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.042413},
  {"Timestamp": "2025-02-14 16:00", "Month": 2, "Day": 14, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.077628},
  {"Timestamp": "2025-02-14 17:00", "Month": 2, "Day": 14, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.118882},
  {"Timestamp": "2025-02-14 18:00", "Month": 2, "Day": 14, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.152736},
  {"Timestamp": "2025-02-14 19:00", "Month": 2, "Day": 14, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.169928},
  {"Timestamp": "2025-02-14 20:00", "Month": 2, "Day": 14, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.168534},
  {"Timestamp": "2025-02-14 21:00", "Month": 2, "Day": 14, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.152084},
  {"Timestamp": "2025-02-14 22:00", "Month": 2, "Day": 14, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.128949},
  {"Timestamp": "2025-02-14 23:00", "Month": 2, "Day": 14, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.104966},
  {"Timestamp": "2025-02-15 00:00", "Month": 2, "Day": 15, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.082545},
  {"Timestamp": "2025-02-15 01:00", "Month": 2, "Day": 15, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.064608},
  {"Timestamp": "2025-02-15 02:00", "Month": 2, "Day": 15, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.055583},
  {"Timestamp": "2025-02-15 03:00", "Month": 2, "Day": 15, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.053606},
  {"Timestamp": "2025-02-15 04:00", "Month": 2, "Day": 15, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.055973},
  {"Timestamp": "2025-02-15 05:00", "Month": 2, "Day": 15, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.061192},
  {"Timestamp": "2025-02-15 06:00", "Month": 2, "Day": 15, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.067846},
  {"Timestamp": "2025-02-15 07:00", "Month": 2, "Day": 15, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.064319},
  {"Timestamp": "2025-02-15 08:00", "Month": 2, "Day": 15, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.057321},
  {"Timestamp": "2025-02-15 09:00", "Month": 2, "Day": 15, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.056331},
  {"Timestamp": "2025-02-15 10:00", "Month": 2, "Day": 15, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.059481},
  {"Timestamp": "2025-02-15 11:00", "Month": 2, "Day": 15, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.060397},
  {"Timestamp": "2025-02-15 12:00", "Month": 2, "Day": 15, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.062312},
  {"Timestamp": "2025-02-15 13:00", "Month": 2, "Day": 15, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.06178},
  {"Timestamp": "2025-02-15 14:00", "Month": 2, "Day": 15, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.060993},
  {"Timestamp": "2025-02-15 15:00", "Month": 2, "Day": 15, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.081595},
  {"Timestamp": "2025-02-15 16:00", "Month": 2, "Day": 15, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.135124},
  {"Timestamp": "2025-02-15 17:00", "Month": 2, "Day": 15, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.193223},
  {"Timestamp": "2025-02-15 18:00", "Month": 2, "Day": 15, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.231153},
  {"Timestamp": "2025-02-15 19:00", "Month": 2, "Day": 15, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.250159},
  {"Timestamp": "2025-02-15 20:00", "Month": 2, "Day": 15, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.257075},
  {"Timestamp": "2025-02-15 21:00", "Month": 2, "Day": 15, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.253869},
  {"Timestamp": "2025-02-15 22:00", "Month": 2, "Day": 15, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.2432},
  {"Timestamp": "2025-02-15 23:00", "Month": 2, "Day": 15, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.228992},
  {"Timestamp": "2025-02-16 00:00", "Month": 2, "Day": 16, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.215513},
  {"Timestamp": "2025-02-16 01:00", "Month": 2, "Day": 16, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.197724},
  {"Timestamp": "2025-02-16 02:00", "Month": 2, "Day": 16, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.179307},
  {"Timestamp": "2025-02-16 03:00", "Month": 2, "Day": 16, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.169378},
  {"Timestamp": "2025-02-16 04:00", "Month": 2, "Day": 16, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.170305},
  {"Timestamp": "2025-02-16 05:00", "Month": 2, "Day": 16, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.173352},
  {"Timestamp": "2025-02-16 06:00", "Month": 2, "Day": 16, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.180735},
  {"Timestamp": "2025-02-16 07:00", "Month": 2, "Day": 16, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.172899},
  {"Timestamp": "2025-02-16 08:00", "Month": 2, "Day": 16, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.154686},
  {"Timestamp": "2025-02-16 09:00", "Month": 2, "Day": 16, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.175486},
  {"Timestamp": "2025-02-16 10:00", "Month": 2, "Day": 16, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.189857},
  {"Timestamp": "2025-02-16 11:00", "Month": 2, "Day": 16, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.2075},
  {"Timestamp": "2025-02-16 12:00", "Month": 2, "Day": 16, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.21586},
  {"Timestamp": "2025-02-16 13:00", "Month": 2, "Day": 16, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.205024},
  {"Timestamp": "2025-02-16 14:00", "Month": 2, "Day": 16, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.189082},
  {"Timestamp": "2025-02-16 15:00", "Month": 2, "Day": 16, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.211106},
  {"Timestamp": "2025-02-16 16:00", "Month": 2, "Day": 16, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.265235},
  {"Timestamp": "2025-02-16 17:00", "Month": 2, "Day": 16, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.291647},
  {"Timestamp": "2025-02-16 18:00", "Month": 2, "Day": 16, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.299778},
  {"Timestamp": "2025-02-16 19:00", "Month": 2, "Day": 16, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.307668},
  {"Timestamp": "2025-02-16 20:00", "Month": 2, "Day": 16, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.318024},
  {"Timestamp": "2025-02-16 21:00", "Month": 2, "Day": 16, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.333498},
  {"Timestamp": "2025-02-16 22:00", "Month": 2, "Day": 16, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.353071},
  {"Timestamp": "2025-02-16 23:00", "Month": 2, "Day": 16, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.364595},
  {"Timestamp": "2025-02-17 00:00", "Month": 2, "Day": 17, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.375641},
  {"Timestamp": "2025-02-17 01:00", "Month": 2, "Day": 17, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.399726},
  {"Timestamp": "2025-02-17 02:00", "Month": 2, "Day": 17, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.427528},
  {"Timestamp": "2025-02-17 03:00", "Month": 2, "Day": 17, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.445575},
  {"Timestamp": "2025-02-17 04:00", "Month": 2, "Day": 17, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.461977},
  {"Timestamp": "2025-02-17 05:00", "Month": 2, "Day": 17, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.492778},
  {"Timestamp": "2025-02-17 06:00", "Month": 2, "Day": 17, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.541988},
  {"Timestamp": "2025-02-17 07:00", "Month": 2, "Day": 17, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.573725},
  {"Timestamp": "2025-02-17 08:00", "Month": 2, "Day": 17, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.615041},
  {"Timestamp": "2025-02-17 09:00", "Month": 2, "Day": 17, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.675776},
  {"Timestamp": "2025-02-17 10:00", "Month": 2, "Day": 17, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.742222},
  {"Timestamp": "2025-02-17 11:00", "Month": 2, "Day": 17, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.790016},
  {"Timestamp": "2025-02-17 12:00", "Month": 2, "Day": 17, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.819846},
  {"Timestamp": "2025-02-17 13:00", "Month": 2, "Day": 17, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.833006},
  {"Timestamp": "2025-02-17 14:00", "Month": 2, "Day": 17, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.843831},
  {"Timestamp": "2025-02-17 15:00", "Month": 2, "Day": 17, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.849282},
  {"Timestamp": "2025-02-17 16:00", "Month": 2, "Day": 17, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.84141},
  {"Timestamp": "2025-02-17 17:00", "Month": 2, "Day": 17, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.823931},
  {"Timestamp": "2025-02-17 18:00", "Month": 2, "Day": 17, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.795657},
  {"Timestamp": "2025-02-17 19:00", "Month": 2, "Day": 17, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.757058},
  {"Timestamp": "2025-02-17 20:00", "Month": 2, "Day": 17, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.717047},
  {"Timestamp": "2025-02-17 21:00", "Month": 2, "Day": 17, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.681115},
  {"Timestamp": "2025-02-17 22:00", "Month": 2, "Day": 17, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.646566},
  {"Timestamp": "2025-02-17 23:00", "Month": 2, "Day": 17, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.609006},
  {"Timestamp": "2025-02-18 00:00", "Month": 2, "Day": 18, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.57639},
  {"Timestamp": "2025-02-18 01:00", "Month": 2, "Day": 18, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.5431},
  {"Timestamp": "2025-02-18 02:00", "Month": 2, "Day": 18, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.501785},
  {"Timestamp": "2025-02-18 03:00", "Month": 2, "Day": 18, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.455775},
  {"Timestamp": "2025-02-18 04:00", "Month": 2, "Day": 18, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.42327},
  {"Timestamp": "2025-02-18 05:00", "Month": 2, "Day": 18, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.417486},
  {"Timestamp": "2025-02-18 06:00", "Month": 2, "Day": 18, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.417839},
  {"Timestamp": "2025-02-18 07:00", "Month": 2, "Day": 18, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.417452},
  {"Timestamp": "2025-02-18 08:00", "Month": 2, "Day": 18, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.45056},
  {"Timestamp": "2025-02-18 09:00", "Month": 2, "Day": 18, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.48466},
  {"Timestamp": "2025-02-18 10:00", "Month": 2, "Day": 18, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.531254},
  {"Timestamp": "2025-02-18 11:00", "Month": 2, "Day": 18, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.58241},
  {"Timestamp": "2025-02-18 12:00", "Month": 2, "Day": 18, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.617356},
  {"Timestamp": "2025-02-18 13:00", "Month": 2, "Day": 18, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.617383},
  {"Timestamp": "2025-02-18 14:00", "Month": 2, "Day": 18, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.578432},
  {"Timestamp": "2025-02-18 15:00", "Month": 2, "Day": 18, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.535327},
  {"Timestamp": "2025-02-18 16:00", "Month": 2, "Day": 18, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.508079},
  {"Timestamp": "2025-02-18 17:00", "Month": 2, "Day": 18, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.464336},
  {"Timestamp": "2025-02-18 18:00", "Month": 2, "Day": 18, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.404278},
  {"Timestamp": "2025-02-18 19:00", "Month": 2, "Day": 18, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.349022},
  {"Timestamp": "2025-02-18 20:00", "Month": 2, "Day": 18, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.301294},
  {"Timestamp": "2025-02-18 21:00", "Month": 2, "Day": 18, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.273751},
  {"Timestamp": "2025-02-18 22:00", "Month": 2, "Day": 18, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.252072},
  {"Timestamp": "2025-02-18 23:00", "Month": 2, "Day": 18, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.238684},
  {"Timestamp": "2025-02-19 00:00", "Month": 2, "Day": 19, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.236873},
  {"Timestamp": "2025-02-19 01:00", "Month": 2, "Day": 19, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.243229},
  {"Timestamp": "2025-02-19 02:00", "Month": 2, "Day": 19, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.257995},
  {"Timestamp": "2025-02-19 03:00", "Month": 2, "Day": 19, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.26562},
  {"Timestamp": "2025-02-19 04:00", "Month": 2, "Day": 19, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.269845},
  {"Timestamp": "2025-02-19 05:00", "Month": 2, "Day": 19, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.267208},
  {"Timestamp": "2025-02-19 06:00", "Month": 2, "Day": 19, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.253981},
  {"Timestamp": "2025-02-19 07:00", "Month": 2, "Day": 19, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.227536},
  {"Timestamp": "2025-02-19 08:00", "Month": 2, "Day": 19, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.219965},
  {"Timestamp": "2025-02-19 09:00", "Month": 2, "Day": 19, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.245986},
  {"Timestamp": "2025-02-19 10:00", "Month": 2, "Day": 19, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.235876},
  {"Timestamp": "2025-02-19 11:00", "Month": 2, "Day": 19, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.225373},
  {"Timestamp": "2025-02-19 12:00", "Month": 2, "Day": 19, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.224428},
  {"Timestamp": "2025-02-19 13:00", "Month": 2, "Day": 19, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.226241},
  {"Timestamp": "2025-02-19 14:00", "Month": 2, "Day": 19, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.201013},
  {"Timestamp": "2025-02-19 15:00", "Month": 2, "Day": 19, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.167518},
  {"Timestamp": "2025-02-19 16:00", "Month": 2, "Day": 19, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.178893},
  {"Timestamp": "2025-02-19 17:00", "Month": 2, "Day": 19, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.199235},
  {"Timestamp": "2025-02-19 18:00", "Month": 2, "Day": 19, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.217814},
  {"Timestamp": "2025-02-19 19:00", "Month": 2, "Day": 19, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.230366},
  {"Timestamp": "2025-02-19 20:00", "Month": 2, "Day": 19, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.244334},
  {"Timestamp": "2025-02-19 21:00", "Month": 2, "Day": 19, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.255823},
  {"Timestamp": "2025-02-19 22:00", "Month": 2, "Day": 19, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.275995},
  {"Timestamp": "2025-02-19 23:00", "Month": 2, "Day": 19, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.302013},
  {"Timestamp": "2025-02-20 00:00", "Month": 2, "Day": 20, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.324004},
  {"Timestamp": "2025-02-20 01:00", "Month": 2, "Day": 20, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.354983},
  {"Timestamp": "2025-02-20 02:00", "Month": 2, "Day": 20, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.389287},
  {"Timestamp": "2025-02-20 03:00", "Month": 2, "Day": 20, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.414656},
  {"Timestamp": "2025-02-20 04:00", "Month": 2, "Day": 20, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.444751},
  {"Timestamp": "2025-02-20 05:00", "Month": 2, "Day": 20, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.479281},
  {"Timestamp": "2025-02-20 06:00", "Month": 2, "Day": 20, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.519931},
  {"Timestamp": "2025-02-20 07:00", "Month": 2, "Day": 20, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.583835},
  {"Timestamp": "2025-02-20 08:00", "Month": 2, "Day": 20, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.651063},
  {"Timestamp": "2025-02-20 09:00", "Month": 2, "Day": 20, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.705439},
  {"Timestamp": "2025-02-20 10:00", "Month": 2, "Day": 20, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.727145},
  {"Timestamp": "2025-02-20 11:00", "Month": 2, "Day": 20, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.739777},
  {"Timestamp": "2025-02-20 12:00", "Month": 2, "Day": 20, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.739833},
  {"Timestamp": "2025-02-20 13:00", "Month": 2, "Day": 20, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.730828},
  {"Timestamp": "2025-02-20 14:00", "Month": 2, "Day": 20, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.706154},
  {"Timestamp": "2025-02-20 15:00", "Month": 2, "Day": 20, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.68013},
  {"Timestamp": "2025-02-20 16:00", "Month": 2, "Day": 20, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.66203},
  {"Timestamp": "2025-02-20 17:00", "Month": 2, "Day": 20, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.640639},
  {"Timestamp": "2025-02-20 18:00", "Month": 2, "Day": 20, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.618275},
  {"Timestamp": "2025-02-20 19:00", "Month": 2, "Day": 20, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.598558},
  {"Timestamp": "2025-02-20 20:00", "Month": 2, "Day": 20, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.582059},
  {"Timestamp": "2025-02-20 21:00", "Month": 2, "Day": 20, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.56303},
  {"Timestamp": "2025-02-20 22:00", "Month": 2, "Day": 20, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.548976},
  {"Timestamp": "2025-02-20 23:00", "Month": 2, "Day": 20, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.537306},
  {"Timestamp": "2025-02-21 00:00", "Month": 2, "Day": 21, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.516656},
  {"Timestamp": "2025-02-21 01:00", "Month": 2, "Day": 21, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.502629},
  {"Timestamp": "2025-02-21 02:00", "Month": 2, "Day": 21, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.48442},
  {"Timestamp": "2025-02-21 03:00", "Month": 2, "Day": 21, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.461768},
  {"Timestamp": "2025-02-21 04:00", "Month": 2, "Day": 21, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.43467},
  {"Timestamp": "2025-02-21 05:00", "Month": 2, "Day": 21, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.405235},
  {"Timestamp": "2025-02-21 06:00", "Month": 2, "Day": 21, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.368201},
  {"Timestamp": "2025-02-21 07:00", "Month": 2, "Day": 21, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.318365},
  {"Timestamp": "2025-02-21 08:00", "Month": 2, "Day": 21, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.292841},
  {"Timestamp": "2025-02-21 09:00", "Month": 2, "Day": 21, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.298149},
  {"Timestamp": "2025-02-21 10:00", "Month": 2, "Day": 21, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.28708},
  {"Timestamp": "2025-02-21 11:00", "Month": 2, "Day": 21, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.268697},
  {"Timestamp": "2025-02-21 12:00", "Month": 2, "Day": 21, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.245624},
  {"Timestamp": "2025-02-21 13:00", "Month": 2, "Day": 21, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.212025},
  {"Timestamp": "2025-02-21 14:00", "Month": 2, "Day": 21, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.167494},
  {"Timestamp": "2025-02-21 15:00", "Month": 2, "Day": 21, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.135147},
  {"Timestamp": "2025-02-21 16:00", "Month": 2, "Day": 21, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.126288},
  {"Timestamp": "2025-02-21 17:00", "Month": 2, "Day": 21, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.11079},
  {"Timestamp": "2025-02-21 18:00", "Month": 2, "Day": 21, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.092432},
  {"Timestamp": "2025-02-21 19:00", "Month": 2, "Day": 21, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.074111},
  {"Timestamp": "2025-02-21 20:00", "Month": 2, "Day": 21, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.056065},
  {"Timestamp": "2025-02-21 21:00", "Month": 2, "Day": 21, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.044507},
  {"Timestamp": "2025-02-21 22:00", "Month": 2, "Day": 21, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.039896},
  {"Timestamp": "2025-02-21 23:00", "Month": 2, "Day": 21, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.041115},
  {"Timestamp": "2025-02-22 00:00", "Month": 2, "Day": 22, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.047064},
  {"Timestamp": "2025-02-22 01:00", "Month": 2, "Day": 22, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.052959},
  {"Timestamp": "2025-02-22 02:00", "Month": 2, "Day": 22, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.055856},
  {"Timestamp": "2025-02-22 03:00", "Month": 2, "Day": 22, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.055642},
  {"Timestamp": "2025-02-22 04:00", "Month": 2, "Day": 22, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.056665},
  {"Timestamp": "2025-02-22 05:00", "Month": 2, "Day": 22, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.06073},
  {"Timestamp": "2025-02-22 06:00", "Month": 2, "Day": 22, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.067071},
  {"Timestamp": "2025-02-22 07:00", "Month": 2, "Day": 22, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.063119},
  {"Timestamp": "2025-02-22 08:00", "Month": 2, "Day": 22, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.05805},
  {"Timestamp": "2025-02-22 09:00", "Month": 2, "Day": 22, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.063917},
  {"Timestamp": "2025-02-22 10:00", "Month": 2, "Day": 22, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.073833},
  {"Timestamp": "2025-02-22 11:00", "Month": 2, "Day": 22, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.078264},
  {"Timestamp": "2025-02-22 12:00", "Month": 2, "Day": 22, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.07955},
  {"Timestamp": "2025-02-22 13:00", "Month": 2, "Day": 22, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.080861},
  {"Timestamp": "2025-02-22 14:00", "Month": 2, "Day": 22, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.083467},
  {"Timestamp": "2025-02-22 15:00", "Month": 2, "Day": 22, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.109988},
  {"Timestamp": "2025-02-22 16:00", "Month": 2, "Day": 22, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.156758},
  {"Timestamp": "2025-02-22 17:00", "Month": 2, "Day": 22, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.187698},
  {"Timestamp": "2025-02-22 18:00", "Month": 2, "Day": 22, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.193864},
  {"Timestamp": "2025-02-22 19:00", "Month": 2, "Day": 22, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.191207},
  {"Timestamp": "2025-02-22 20:00", "Month": 2, "Day": 22, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.18006},
  {"Timestamp": "2025-02-22 21:00", "Month": 2, "Day": 22, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.164029},
  {"Timestamp": "2025-02-22 22:00", "Month": 2, "Day": 22, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.146196},
  {"Timestamp": "2025-02-22 23:00", "Month": 2, "Day": 22, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.129912},
  {"Timestamp": "2025-02-23 00:00", "Month": 2, "Day": 23, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.111561},
  {"Timestamp": "2025-02-23 01:00", "Month": 2, "Day": 23, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.094308},
  {"Timestamp": "2025-02-23 02:00", "Month": 2, "Day": 23, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.080716},
  {"Timestamp": "2025-02-23 03:00", "Month": 2, "Day": 23, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.07305},
  {"Timestamp": "2025-02-23 04:00", "Month": 2, "Day": 23, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.067999},
  {"Timestamp": "2025-02-23 05:00", "Month": 2, "Day": 23, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.064301},
  {"Timestamp": "2025-02-23 06:00", "Month": 2, "Day": 23, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.060767},
  {"Timestamp": "2025-02-23 07:00", "Month": 2, "Day": 23, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.050483},
  {"Timestamp": "2025-02-23 08:00", "Month": 2, "Day": 23, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.043369},
  {"Timestamp": "2025-02-23 09:00", "Month": 2, "Day": 23, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.048256},
  {"Timestamp": "2025-02-23 10:00", "Month": 2, "Day": 23, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.057427},
  {"Timestamp": "2025-02-23 11:00", "Month": 2, "Day": 23, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.068714},
  {"Timestamp": "2025-02-23 12:00", "Month": 2, "Day": 23, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.081176},
  {"Timestamp": "2025-02-23 13:00", "Month": 2, "Day": 23, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.092314},
  {"Timestamp": "2025-02-23 14:00", "Month": 2, "Day": 23, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.102074},
  {"Timestamp": "2025-02-23 15:00", "Month": 2, "Day": 23, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.114061},
  {"Timestamp": "2025-02-23 16:00", "Month": 2, "Day": 23, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.134924},
  {"Timestamp": "2025-02-23 17:00", "Month": 2, "Day": 23, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.147854},
  {"Timestamp": "2025-02-23 18:00", "Month": 2, "Day": 23, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.154389},
  {"Timestamp": "2025-02-23 19:00", "Month": 2, "Day": 23, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.156784},
  {"Timestamp": "2025-02-23 20:00", "Month": 2, "Day": 23, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.156133},
  {"Timestamp": "2025-02-23 21:00", "Month": 2, "Day": 23, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.159432},
  {"Timestamp": "2025-02-23 22:00", "Month": 2, "Day": 23, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.164381},
  {"Timestamp": "2025-02-23 23:00", "Month": 2, "Day": 23, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.169243},
  {"Timestamp": "2025-02-24 00:00", "Month": 2, "Day": 24, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.176958},
  {"Timestamp": "2025-02-24 01:00", "Month": 2, "Day": 24, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.185449},
  {"Timestamp": "2025-02-24 02:00", "Month": 2, "Day": 24, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.194795},
  {"Timestamp": "2025-02-24 03:00", "Month": 2, "Day": 24, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.197386},
  {"Timestamp": "2025-02-24 04:00", "Month": 2, "Day": 24, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.204884},
  {"Timestamp": "2025-02-24 05:00", "Month": 2, "Day": 24, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.221743},
  {"Timestamp": "2025-02-24 06:00", "Month": 2, "Day": 24, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.240739},
  {"Timestamp": "2025-02-24 07:00", "Month": 2, "Day": 24, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.241724},
  {"Timestamp": "2025-02-24 08:00", "Month": 2, "Day": 24, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.26254},
  {"Timestamp": "2025-02-24 09:00", "Month": 2, "Day": 24, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.337869},
  {"Timestamp": "2025-02-24 10:00", "Month": 2, "Day": 24, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.390223},
  {"Timestamp": "2025-02-24 11:00", "Month": 2, "Day": 24, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.416951},
  {"Timestamp": "2025-02-24 12:00", "Month": 2, "Day": 24, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.432297},
  {"Timestamp": "2025-02-24 13:00", "Month": 2, "Day": 24, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.42124},
  {"Timestamp": "2025-02-24 14:00", "Month": 2, "Day": 24, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.380569},
  {"Timestamp": "2025-02-24 15:00", "Month": 2, "Day": 24, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.367795},
  {"Timestamp": "2025-02-24 16:00", "Month": 2, "Day": 24, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.384616},
  {"Timestamp": "2025-02-24 17:00", "Month": 2, "Day": 24, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.403339},
  {"Timestamp": "2025-02-24 18:00", "Month": 2, "Day": 24, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.405534},
  {"Timestamp": "2025-02-24 19:00", "Month": 2, "Day": 24, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.400845},
  {"Timestamp": "2025-02-24 20:00", "Month": 2, "Day": 24, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.404179},
  {"Timestamp": "2025-02-24 21:00", "Month": 2, "Day": 24, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.410724},
  {"Timestamp": "2025-02-24 22:00", "Month": 2, "Day": 24, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.428547},
  {"Timestamp": "2025-02-24 23:00", "Month": 2, "Day": 24, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.431804},
  {"Timestamp": "2025-02-25 00:00", "Month": 2, "Day": 25, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.443547},
  {"Timestamp": "2025-02-25 01:00", "Month": 2, "Day": 25, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.455323},
  {"Timestamp": "2025-02-25 02:00", "Month": 2, "Day": 25, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.455104},
  {"Timestamp": "2025-02-25 03:00", "Month": 2, "Day": 25, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.459337},
  {"Timestamp": "2025-02-25 04:00", "Month": 2, "Day": 25, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.458854},
  {"Timestamp": "2025-02-25 05:00", "Month": 2, "Day": 25, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.453964},
  {"Timestamp": "2025-02-25 06:00", "Month": 2, "Day": 25, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.434046},
  {"Timestamp": "2025-02-25 07:00", "Month": 2, "Day": 25, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.412323},
  {"Timestamp": "2025-02-25 08:00", "Month": 2, "Day": 25, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.44976},
  {"Timestamp": "2025-02-25 09:00", "Month": 2, "Day": 25, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.481253},
  {"Timestamp": "2025-02-25 10:00", "Month": 2, "Day": 25, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.484775},
  {"Timestamp": "2025-02-25 11:00", "Month": 2, "Day": 25, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.48},
  {"Timestamp": "2025-02-25 12:00", "Month": 2, "Day": 25, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.476044},
  {"Timestamp": "2025-02-25 13:00", "Month": 2, "Day": 25, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.468331},
  {"Timestamp": "2025-02-25 14:00", "Month": 2, "Day": 25, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.442829},
  {"Timestamp": "2025-02-25 15:00", "Month": 2, "Day": 25, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.392922},
  {"Timestamp": "2025-02-25 16:00", "Month": 2, "Day": 25, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.369473},
  {"Timestamp": "2025-02-25 17:00", "Month": 2, "Day": 25, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.353033},
  {"Timestamp": "2025-02-25 18:00", "Month": 2, "Day": 25, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.328391},
  {"Timestamp": "2025-02-25 19:00", "Month": 2, "Day": 25, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.308725},
  {"Timestamp": "2025-02-25 20:00", "Month": 2, "Day": 25, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.28976},
  {"Timestamp": "2025-02-25 21:00", "Month": 2, "Day": 25, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.28265},
  {"Timestamp": "2025-02-25 22:00", "Month": 2, "Day": 25, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.268688},
  {"Timestamp": "2025-02-25 23:00", "Month": 2, "Day": 25, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.262329},
  {"Timestamp": "2025-02-26 00:00", "Month": 2, "Day": 26, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.258507},
  {"Timestamp": "2025-02-26 01:00", "Month": 2, "Day": 26, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.251505},
  {"Timestamp": "2025-02-26 02:00", "Month": 2, "Day": 26, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.240884},
  {"Timestamp": "2025-02-26 03:00", "Month": 2, "Day": 26, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.233638},
  {"Timestamp": "2025-02-26 04:00", "Month": 2, "Day": 26, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.229566},
  {"Timestamp": "2025-02-26 05:00", "Month": 2, "Day": 26, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.233362},
  {"Timestamp": "2025-02-26 06:00", "Month": 2, "Day": 26, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.225172},
  {"Timestamp": "2025-02-26 07:00", "Month": 2, "Day": 26, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.206208},
  {"Timestamp": "2025-02-26 08:00", "Month": 2, "Day": 26, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.272778},
  {"Timestamp": "2025-02-26 09:00", "Month": 2, "Day": 26, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.296226},
  {"Timestamp": "2025-02-26 10:00", "Month": 2, "Day": 26, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.275516},
  {"Timestamp": "2025-02-26 11:00", "Month": 2, "Day": 26, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.259379},
  {"Timestamp": "2025-02-26 12:00", "Month": 2, "Day": 26, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.254108},
  {"Timestamp": "2025-02-26 13:00", "Month": 2, "Day": 26, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.257043},
  {"Timestamp": "2025-02-26 14:00", "Month": 2, "Day": 26, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.258188},
  {"Timestamp": "2025-02-26 15:00", "Month": 2, "Day": 26, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.24053},
  {"Timestamp": "2025-02-26 16:00", "Month": 2, "Day": 26, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.242937},
  {"Timestamp": "2025-02-26 17:00", "Month": 2, "Day": 26, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.241694},
  {"Timestamp": "2025-02-26 18:00", "Month": 2, "Day": 26, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.225827},
  {"Timestamp": "2025-02-26 19:00", "Month": 2, "Day": 26, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.210998},
  {"Timestamp": "2025-02-26 20:00", "Month": 2, "Day": 26, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.196752},
  {"Timestamp": "2025-02-26 21:00", "Month": 2, "Day": 26, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.184891},
  {"Timestamp": "2025-02-26 22:00", "Month": 2, "Day": 26, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.167019},
  {"Timestamp": "2025-02-26 23:00", "Month": 2, "Day": 26, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.148552},
  {"Timestamp": "2025-02-27 00:00", "Month": 2, "Day": 27, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.130875},
  {"Timestamp": "2025-02-27 01:00", "Month": 2, "Day": 27, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.120787},
  {"Timestamp": "2025-02-27 02:00", "Month": 2, "Day": 27, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.113739},
  {"Timestamp": "2025-02-27 03:00", "Month": 2, "Day": 27, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.105671},
  {"Timestamp": "2025-02-27 04:00", "Month": 2, "Day": 27, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.100167},
  {"Timestamp": "2025-02-27 05:00", "Month": 2, "Day": 27, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.095026},
  {"Timestamp": "2025-02-27 06:00", "Month": 2, "Day": 27, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.085275},
  {"Timestamp": "2025-02-27 07:00", "Month": 2, "Day": 27, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.080232},
  {"Timestamp": "2025-02-27 08:00", "Month": 2, "Day": 27, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.105434},
  {"Timestamp": "2025-02-27 09:00", "Month": 2, "Day": 27, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.121612},
  {"Timestamp": "2025-02-27 10:00", "Month": 2, "Day": 27, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.123195},
  {"Timestamp": "2025-02-27 11:00", "Month": 2, "Day": 27, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.121255},
  {"Timestamp": "2025-02-27 12:00", "Month": 2, "Day": 27, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.122808},
  {"Timestamp": "2025-02-27 13:00", "Month": 2, "Day": 27, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.128379},
  {"Timestamp": "2025-02-27 14:00", "Month": 2, "Day": 27, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.133627},
  {"Timestamp": "2025-02-27 15:00", "Month": 2, "Day": 27, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.132889},
  {"Timestamp": "2025-02-27 16:00", "Month": 2, "Day": 27, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.148119},
  {"Timestamp": "2025-02-27 17:00", "Month": 2, "Day": 27, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.159241},
  {"Timestamp": "2025-02-27 18:00", "Month": 2, "Day": 27, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.154275},
  {"Timestamp": "2025-02-27 19:00", "Month": 2, "Day": 27, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.142649},
  {"Timestamp": "2025-02-27 20:00", "Month": 2, "Day": 27, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.125718},
  {"Timestamp": "2025-02-27 21:00", "Month": 2, "Day": 27, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.109453},
  {"Timestamp": "2025-02-27 22:00", "Month": 2, "Day": 27, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.095402},
  {"Timestamp": "2025-02-27 23:00", "Month": 2, "Day": 27, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.084457},
  {"Timestamp": "2025-02-28 00:00", "Month": 2, "Day": 28, "Hour": 0, "Season": "Winter", "CO2_Intensity": 380.0, "Price": 70.0, "Wind_Capacity_Factor": 0.077824},
  {"Timestamp": "2025-02-28 01:00", "Month": 2, "Day": 28, "Hour": 1, "Season": "Winter", "CO2_Intensity": 380.1, "Price": 59.94, "Wind_Capacity_Factor": 0.075154},
  {"Timestamp": "2025-02-28 02:00", "Month": 2, "Day": 28, "Hour": 2, "Season": "Winter", "CO2_Intensity": 381.6, "Price": 53.23, "Wind_Capacity_Factor": 0.077095},
  {"Timestamp": "2025-02-28 03:00", "Month": 2, "Day": 28, "Hour": 3, "Season": "Winter", "CO2_Intensity": 384.8, "Price": 52.4, "Wind_Capacity_Factor": 0.081797},
  {"Timestamp": "2025-02-28 04:00", "Month": 2, "Day": 28, "Hour": 4, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 60.0, "Wind_Capacity_Factor": 0.088307},
  {"Timestamp": "2025-02-28 05:00", "Month": 2, "Day": 28, "Hour": 5, "Season": "Winter", "CO2_Intensity": 396.7, "Price": 77.07, "Wind_Capacity_Factor": 0.095119},
  {"Timestamp": "2025-02-28 06:00", "Month": 2, "Day": 28, "Hour": 6, "Season": "Winter", "CO2_Intensity": 402.1, "Price": 98.7, "Wind_Capacity_Factor": 0.09881},
  {"Timestamp": "2025-02-28 07:00", "Month": 2, "Day": 28, "Hour": 7, "Season": "Winter", "CO2_Intensity": 402.7, "Price": 118.48, "Wind_Capacity_Factor": 0.090398},
  {"Timestamp": "2025-02-28 08:00", "Month": 2, "Day": 28, "Hour": 8, "Season": "Winter", "CO2_Intensity": 395.0, "Price": 130.0, "Wind_Capacity_Factor": 0.121596},
  {"Timestamp": "2025-02-28 09:00", "Month": 2, "Day": 28, "Hour": 9, "Season": "Winter", "CO2_Intensity": 377.9, "Price": 128.49, "Wind_Capacity_Factor": 0.12773},
  {"Timestamp": "2025-02-28 10:00", "Month": 2, "Day": 28, "Hour": 10, "Season": "Winter", "CO2_Intensity": 359.1, "Price": 115.69, "Wind_Capacity_Factor": 0.114195},
  {"Timestamp": "2025-02-28 11:00", "Month": 2, "Day": 28, "Hour": 11, "Season": "Winter", "CO2_Intensity": 348.9, "Price": 95.0, "Wind_Capacity_Factor": 0.102266},
  {"Timestamp": "2025-02-28 12:00", "Month": 2, "Day": 28, "Hour": 12, "Season": "Winter", "CO2_Intensity": 355.0, "Price": 71.36, "Wind_Capacity_Factor": 0.094358},
  {"Timestamp": "2025-02-28 13:00", "Month": 2, "Day": 28, "Hour": 13, "Season": "Winter", "CO2_Intensity": 374.3, "Price": 56.0, "Wind_Capacity_Factor": 0.090508},
  {"Timestamp": "2025-02-28 14:00", "Month": 2, "Day": 28, "Hour": 14, "Season": "Winter", "CO2_Intensity": 396.1, "Price": 58.47, "Wind_Capacity_Factor": 0.087296},
  {"Timestamp": "2025-02-28 15:00", "Month": 2, "Day": 28, "Hour": 15, "Season": "Winter", "CO2_Intensity": 408.4, "Price": 75.36, "Wind_Capacity_Factor": 0.083062},
  {"Timestamp": "2025-02-28 16:00", "Month": 2, "Day": 28, "Hour": 16, "Season": "Winter", "CO2_Intensity": 405.0, "Price": 100.0, "Wind_Capacity_Factor": 0.093741},
  {"Timestamp": "2025-02-28 17:00", "Month": 2, "Day": 28, "Hour": 17, "Season": "Winter", "CO2_Intensity": 399.5, "Price": 125.62, "Wind_Capacity_Factor": 0.10409},
  {"Timestamp": "2025-02-28 18:00", "Month": 2, "Day": 28, "Hour": 18, "Season": "Winter", "CO2_Intensity": 395.4, "Price": 141.0, "Wind_Capacity_Factor": 0.101516},
  {"Timestamp": "2025-02-28 19:00", "Month": 2, "Day": 28, "Hour": 19, "Season": "Winter", "CO2_Intensity": 392.3, "Price": 141.0, "Wind_Capacity_Factor": 0.094181},
  {"Timestamp": "2025-02-28 20:00", "Month": 2, "Day": 28, "Hour": 20, "Season": "Winter", "CO2_Intensity": 390.0, "Price": 138.97, "Wind_Capacity_Factor": 0.086948},
  {"Timestamp": "2025-02-28 21:00", "Month": 2, "Day": 28, "Hour": 21, "Season": "Winter", "CO2_Intensity": 388.0, "Price": 115.53, "Wind_Capacity_Factor": 0.080841},
  {"Timestamp": "2025-02-28 22:00", "Month": 2, "Day": 28, "Hour": 22, "Season": "Winter", "CO2_Intensity": 385.9, "Price": 90.0, "Wind_Capacity_Factor": 0.074219},
  {"Timestamp": "2025-02-28 23:00", "Month": 2, "Day": 28, "Hour": 23, "Season": "Winter", "CO2_Intensity": 383.4, "Price": 71.71, "Wind_Capacity_Factor": 0.067757},
  {"Timestamp": "2025-03-01 00:00", "Month": 3, "Day": 1, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.063236},
  {"Timestamp": "2025-03-01 01:00", "Month": 3, "Day": 1, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.060571},
  {"Timestamp": "2025-03-01 02:00", "Month": 3, "Day": 1, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.059383},
  {"Timestamp": "2025-03-01 03:00", "Month": 3, "Day": 1, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.059427},
  {"Timestamp": "2025-03-01 04:00", "Month": 3, "Day": 1, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.060118},
  {"Timestamp": "2025-03-01 05:00", "Month": 3, "Day": 1, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.060907},
  {"Timestamp": "2025-03-01 06:00", "Month": 3, "Day": 1, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.057173},
  {"Timestamp": "2025-03-01 07:00", "Month": 3, "Day": 1, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.043226},
  {"Timestamp": "2025-03-01 08:00", "Month": 3, "Day": 1, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.065773},
  {"Timestamp": "2025-03-01 09:00", "Month": 3, "Day": 1, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.074948},
  {"Timestamp": "2025-03-01 10:00", "Month": 3, "Day": 1, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.073564},
  {"Timestamp": "2025-03-01 11:00", "Month": 3, "Day": 1, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.079011},
  {"Timestamp": "2025-03-01 12:00", "Month": 3, "Day": 1, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.092975},
  {"Timestamp": "2025-03-01 13:00", "Month": 3, "Day": 1, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.112893},
  {"Timestamp": "2025-03-01 14:00", "Month": 3, "Day": 1, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.127217},
  {"Timestamp": "2025-03-01 15:00", "Month": 3, "Day": 1, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.135356},
  {"Timestamp": "2025-03-01 16:00", "Month": 3, "Day": 1, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.177029},
  {"Timestamp": "2025-03-01 17:00", "Month": 3, "Day": 1, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.206806},
  {"Timestamp": "2025-03-01 18:00", "Month": 3, "Day": 1, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.210715},
  {"Timestamp": "2025-03-01 19:00", "Month": 3, "Day": 1, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.200889},
  {"Timestamp": "2025-03-01 20:00", "Month": 3, "Day": 1, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.183387},
  {"Timestamp": "2025-03-01 21:00", "Month": 3, "Day": 1, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.162898},
  {"Timestamp": "2025-03-01 22:00", "Month": 3, "Day": 1, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.143321},
  {"Timestamp": "2025-03-01 23:00", "Month": 3, "Day": 1, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.130454},
  {"Timestamp": "2025-03-02 00:00", "Month": 3, "Day": 2, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.124407},
  {"Timestamp": "2025-03-02 01:00", "Month": 3, "Day": 2, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.119202},
  {"Timestamp": "2025-03-02 02:00", "Month": 3, "Day": 2, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.116002},
  {"Timestamp": "2025-03-02 03:00", "Month": 3, "Day": 2, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.112018},
  {"Timestamp": "2025-03-02 04:00", "Month": 3, "Day": 2, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.105029},
  {"Timestamp": "2025-03-02 05:00", "Month": 3, "Day": 2, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.098901},
  {"Timestamp": "2025-03-02 06:00", "Month": 3, "Day": 2, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.085152},
  {"Timestamp": "2025-03-02 07:00", "Month": 3, "Day": 2, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.054752},
  {"Timestamp": "2025-03-02 08:00", "Month": 3, "Day": 2, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.052605},
  {"Timestamp": "2025-03-02 09:00", "Month": 3, "Day": 2, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.070881},
  {"Timestamp": "2025-03-02 10:00", "Month": 3, "Day": 2, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.070543},
  {"Timestamp": "2025-03-02 11:00", "Month": 3, "Day": 2, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.068313},
  {"Timestamp": "2025-03-02 12:00", "Month": 3, "Day": 2, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.068101},
  {"Timestamp": "2025-03-02 13:00", "Month": 3, "Day": 2, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.070234},
  {"Timestamp": "2025-03-02 14:00", "Month": 3, "Day": 2, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.072007},
  {"Timestamp": "2025-03-02 15:00", "Month": 3, "Day": 2, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.079205},
  {"Timestamp": "2025-03-02 16:00", "Month": 3, "Day": 2, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.112521},
  {"Timestamp": "2025-03-02 17:00", "Month": 3, "Day": 2, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.140498},
  {"Timestamp": "2025-03-02 18:00", "Month": 3, "Day": 2, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.139206},
  {"Timestamp": "2025-03-02 19:00", "Month": 3, "Day": 2, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.120681},
  {"Timestamp": "2025-03-02 20:00", "Month": 3, "Day": 2, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.095011},
  {"Timestamp": "2025-03-02 21:00", "Month": 3, "Day": 2, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.073882},
  {"Timestamp": "2025-03-02 22:00", "Month": 3, "Day": 2, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.060518},
  {"Timestamp": "2025-03-02 23:00", "Month": 3, "Day": 2, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.052295},
  {"Timestamp": "2025-03-03 00:00", "Month": 3, "Day": 3, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.048651},
  {"Timestamp": "2025-03-03 01:00", "Month": 3, "Day": 3, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.048421},
  {"Timestamp": "2025-03-03 02:00", "Month": 3, "Day": 3, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.049724},
  {"Timestamp": "2025-03-03 03:00", "Month": 3, "Day": 3, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.050345},
  {"Timestamp": "2025-03-03 04:00", "Month": 3, "Day": 3, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.048552},
  {"Timestamp": "2025-03-03 05:00", "Month": 3, "Day": 3, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.045015},
  {"Timestamp": "2025-03-03 06:00", "Month": 3, "Day": 3, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.038791},
  {"Timestamp": "2025-03-03 07:00", "Month": 3, "Day": 3, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.031292},
  {"Timestamp": "2025-03-03 08:00", "Month": 3, "Day": 3, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.031049},
  {"Timestamp": "2025-03-03 09:00", "Month": 3, "Day": 3, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.035432},
  {"Timestamp": "2025-03-03 10:00", "Month": 3, "Day": 3, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.044939},
  {"Timestamp": "2025-03-03 11:00", "Month": 3, "Day": 3, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.057963},
  {"Timestamp": "2025-03-03 12:00", "Month": 3, "Day": 3, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.072771},
  {"Timestamp": "2025-03-03 13:00", "Month": 3, "Day": 3, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.088352},
  {"Timestamp": "2025-03-03 14:00", "Month": 3, "Day": 3, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.103931},
  {"Timestamp": "2025-03-03 15:00", "Month": 3, "Day": 3, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.116992},
  {"Timestamp": "2025-03-03 16:00", "Month": 3, "Day": 3, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.162552},
  {"Timestamp": "2025-03-03 17:00", "Month": 3, "Day": 3, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.216088},
  {"Timestamp": "2025-03-03 18:00", "Month": 3, "Day": 3, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.243644},
  {"Timestamp": "2025-03-03 19:00", "Month": 3, "Day": 3, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.257059},
  {"Timestamp": "2025-03-03 20:00", "Month": 3, "Day": 3, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.261837},
  {"Timestamp": "2025-03-03 21:00", "Month": 3, "Day": 3, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.259758},
  {"Timestamp": "2025-03-03 22:00", "Month": 3, "Day": 3, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.263563},
  {"Timestamp": "2025-03-03 23:00", "Month": 3, "Day": 3, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.262101},
  {"Timestamp": "2025-03-04 00:00", "Month": 3, "Day": 4, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.270699},
  {"Timestamp": "2025-03-04 01:00", "Month": 3, "Day": 4, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.284459},
  {"Timestamp": "2025-03-04 02:00", "Month": 3, "Day": 4, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.306258},
  {"Timestamp": "2025-03-04 03:00", "Month": 3, "Day": 4, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.315984},
  {"Timestamp": "2025-03-04 04:00", "Month": 3, "Day": 4, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.316294},
  {"Timestamp": "2025-03-04 05:00", "Month": 3, "Day": 4, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.323626},
  {"Timestamp": "2025-03-04 06:00", "Month": 3, "Day": 4, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.316236},
  {"Timestamp": "2025-03-04 07:00", "Month": 3, "Day": 4, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.302032},
  {"Timestamp": "2025-03-04 08:00", "Month": 3, "Day": 4, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.342407},
  {"Timestamp": "2025-03-04 09:00", "Month": 3, "Day": 4, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.359553},
  {"Timestamp": "2025-03-04 10:00", "Month": 3, "Day": 4, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.352854},
  {"Timestamp": "2025-03-04 11:00", "Month": 3, "Day": 4, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.345104},
  {"Timestamp": "2025-03-04 12:00", "Month": 3, "Day": 4, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.341737},
  {"Timestamp": "2025-03-04 13:00", "Month": 3, "Day": 4, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.332741},
  {"Timestamp": "2025-03-04 14:00", "Month": 3, "Day": 4, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.305532},
  {"Timestamp": "2025-03-04 15:00", "Month": 3, "Day": 4, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.271734},
  {"Timestamp": "2025-03-04 16:00", "Month": 3, "Day": 4, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.267452},
  {"Timestamp": "2025-03-04 17:00", "Month": 3, "Day": 4, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.267774},
  {"Timestamp": "2025-03-04 18:00", "Month": 3, "Day": 4, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.252259},
  {"Timestamp": "2025-03-04 19:00", "Month": 3, "Day": 4, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.237896},
  {"Timestamp": "2025-03-04 20:00", "Month": 3, "Day": 4, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.230038},
  {"Timestamp": "2025-03-04 21:00", "Month": 3, "Day": 4, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.222232},
  {"Timestamp": "2025-03-04 22:00", "Month": 3, "Day": 4, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.22727},
  {"Timestamp": "2025-03-04 23:00", "Month": 3, "Day": 4, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.232417},
  {"Timestamp": "2025-03-05 00:00", "Month": 3, "Day": 5, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.237188},
  {"Timestamp": "2025-03-05 01:00", "Month": 3, "Day": 5, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.241491},
  {"Timestamp": "2025-03-05 02:00", "Month": 3, "Day": 5, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.242181},
  {"Timestamp": "2025-03-05 03:00", "Month": 3, "Day": 5, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.23436},
  {"Timestamp": "2025-03-05 04:00", "Month": 3, "Day": 5, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.223112},
  {"Timestamp": "2025-03-05 05:00", "Month": 3, "Day": 5, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.214436},
  {"Timestamp": "2025-03-05 06:00", "Month": 3, "Day": 5, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.198074},
  {"Timestamp": "2025-03-05 07:00", "Month": 3, "Day": 5, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.169327},
  {"Timestamp": "2025-03-05 08:00", "Month": 3, "Day": 5, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.193746},
  {"Timestamp": "2025-03-05 09:00", "Month": 3, "Day": 5, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.217262},
  {"Timestamp": "2025-03-05 10:00", "Month": 3, "Day": 5, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.231949},
  {"Timestamp": "2025-03-05 11:00", "Month": 3, "Day": 5, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.235604},
  {"Timestamp": "2025-03-05 12:00", "Month": 3, "Day": 5, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.229815},
  {"Timestamp": "2025-03-05 13:00", "Month": 3, "Day": 5, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.212268},
  {"Timestamp": "2025-03-05 14:00", "Month": 3, "Day": 5, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.170091},
  {"Timestamp": "2025-03-05 15:00", "Month": 3, "Day": 5, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.120634},
  {"Timestamp": "2025-03-05 16:00", "Month": 3, "Day": 5, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.114567},
  {"Timestamp": "2025-03-05 17:00", "Month": 3, "Day": 5, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.117539},
  {"Timestamp": "2025-03-05 18:00", "Month": 3, "Day": 5, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.116375},
  {"Timestamp": "2025-03-05 19:00", "Month": 3, "Day": 5, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.1159},
  {"Timestamp": "2025-03-05 20:00", "Month": 3, "Day": 5, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.115251},
  {"Timestamp": "2025-03-05 21:00", "Month": 3, "Day": 5, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.113847},
  {"Timestamp": "2025-03-05 22:00", "Month": 3, "Day": 5, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.113111},
  {"Timestamp": "2025-03-05 23:00", "Month": 3, "Day": 5, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.110574},
  {"Timestamp": "2025-03-06 00:00", "Month": 3, "Day": 6, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.1094},
  {"Timestamp": "2025-03-06 01:00", "Month": 3, "Day": 6, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.111043},
  {"Timestamp": "2025-03-06 02:00", "Month": 3, "Day": 6, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.10969},
  {"Timestamp": "2025-03-06 03:00", "Month": 3, "Day": 6, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.104665},
  {"Timestamp": "2025-03-06 04:00", "Month": 3, "Day": 6, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.103524},
  {"Timestamp": "2025-03-06 05:00", "Month": 3, "Day": 6, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.10412},
  {"Timestamp": "2025-03-06 06:00", "Month": 3, "Day": 6, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.096523},
  {"Timestamp": "2025-03-06 07:00", "Month": 3, "Day": 6, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.084969},
  {"Timestamp": "2025-03-06 08:00", "Month": 3, "Day": 6, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.099599},
  {"Timestamp": "2025-03-06 09:00", "Month": 3, "Day": 6, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.114101},
  {"Timestamp": "2025-03-06 10:00", "Month": 3, "Day": 6, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.112019},
  {"Timestamp": "2025-03-06 11:00", "Month": 3, "Day": 6, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.108747},
  {"Timestamp": "2025-03-06 12:00", "Month": 3, "Day": 6, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.107045},
  {"Timestamp": "2025-03-06 13:00", "Month": 3, "Day": 6, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.105069},
  {"Timestamp": "2025-03-06 14:00", "Month": 3, "Day": 6, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.10017},
  {"Timestamp": "2025-03-06 15:00", "Month": 3, "Day": 6, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.086806},
  {"Timestamp": "2025-03-06 16:00", "Month": 3, "Day": 6, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.099423},
  {"Timestamp": "2025-03-06 17:00", "Month": 3, "Day": 6, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.141099},
  {"Timestamp": "2025-03-06 18:00", "Month": 3, "Day": 6, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.191295},
  {"Timestamp": "2025-03-06 19:00", "Month": 3, "Day": 6, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.232506},
  {"Timestamp": "2025-03-06 20:00", "Month": 3, "Day": 6, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.268602},
  {"Timestamp": "2025-03-06 21:00", "Month": 3, "Day": 6, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.309241},
  {"Timestamp": "2025-03-06 22:00", "Month": 3, "Day": 6, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.33493},
  {"Timestamp": "2025-03-06 23:00", "Month": 3, "Day": 6, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.340385},
  {"Timestamp": "2025-03-07 00:00", "Month": 3, "Day": 7, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.350959},
  {"Timestamp": "2025-03-07 01:00", "Month": 3, "Day": 7, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.379765},
  {"Timestamp": "2025-03-07 02:00", "Month": 3, "Day": 7, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.418765},
  {"Timestamp": "2025-03-07 03:00", "Month": 3, "Day": 7, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.473536},
  {"Timestamp": "2025-03-07 04:00", "Month": 3, "Day": 7, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.510902},
  {"Timestamp": "2025-03-07 05:00", "Month": 3, "Day": 7, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.53752},
  {"Timestamp": "2025-03-07 06:00", "Month": 3, "Day": 7, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.540277},
  {"Timestamp": "2025-03-07 07:00", "Month": 3, "Day": 7, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.539295},
  {"Timestamp": "2025-03-07 08:00", "Month": 3, "Day": 7, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.569494},
  {"Timestamp": "2025-03-07 09:00", "Month": 3, "Day": 7, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.597371},
  {"Timestamp": "2025-03-07 10:00", "Month": 3, "Day": 7, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.594601},
  {"Timestamp": "2025-03-07 11:00", "Month": 3, "Day": 7, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.566644},
  {"Timestamp": "2025-03-07 12:00", "Month": 3, "Day": 7, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.523385},
  {"Timestamp": "2025-03-07 13:00", "Month": 3, "Day": 7, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.466656},
  {"Timestamp": "2025-03-07 14:00", "Month": 3, "Day": 7, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.392587},
  {"Timestamp": "2025-03-07 15:00", "Month": 3, "Day": 7, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.321094},
  {"Timestamp": "2025-03-07 16:00", "Month": 3, "Day": 7, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.283908},
  {"Timestamp": "2025-03-07 17:00", "Month": 3, "Day": 7, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.267492},
  {"Timestamp": "2025-03-07 18:00", "Month": 3, "Day": 7, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.254774},
  {"Timestamp": "2025-03-07 19:00", "Month": 3, "Day": 7, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.242409},
  {"Timestamp": "2025-03-07 20:00", "Month": 3, "Day": 7, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.228237},
  {"Timestamp": "2025-03-07 21:00", "Month": 3, "Day": 7, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.217796},
  {"Timestamp": "2025-03-07 22:00", "Month": 3, "Day": 7, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.207836},
  {"Timestamp": "2025-03-07 23:00", "Month": 3, "Day": 7, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.192444},
  {"Timestamp": "2025-03-08 00:00", "Month": 3, "Day": 8, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.176858},
  {"Timestamp": "2025-03-08 01:00", "Month": 3, "Day": 8, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.169909},
  {"Timestamp": "2025-03-08 02:00", "Month": 3, "Day": 8, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.159425},
  {"Timestamp": "2025-03-08 03:00", "Month": 3, "Day": 8, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.139273},
  {"Timestamp": "2025-03-08 04:00", "Month": 3, "Day": 8, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.121082},
  {"Timestamp": "2025-03-08 05:00", "Month": 3, "Day": 8, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.106909},
  {"Timestamp": "2025-03-08 06:00", "Month": 3, "Day": 8, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.090341},
  {"Timestamp": "2025-03-08 07:00", "Month": 3, "Day": 8, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.078091},
  {"Timestamp": "2025-03-08 08:00", "Month": 3, "Day": 8, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.086108},
  {"Timestamp": "2025-03-08 09:00", "Month": 3, "Day": 8, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.10354},
  {"Timestamp": "2025-03-08 10:00", "Month": 3, "Day": 8, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.120161},
  {"Timestamp": "2025-03-08 11:00", "Month": 3, "Day": 8, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.134634},
  {"Timestamp": "2025-03-08 12:00", "Month": 3, "Day": 8, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.14205},
  {"Timestamp": "2025-03-08 13:00", "Month": 3, "Day": 8, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.139805},
  {"Timestamp": "2025-03-08 14:00", "Month": 3, "Day": 8, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.138258},
  {"Timestamp": "2025-03-08 15:00", "Month": 3, "Day": 8, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.136982},
  {"Timestamp": "2025-03-08 16:00", "Month": 3, "Day": 8, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.142409},
  {"Timestamp": "2025-03-08 17:00", "Month": 3, "Day": 8, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.154405},
  {"Timestamp": "2025-03-08 18:00", "Month": 3, "Day": 8, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.159981},
  {"Timestamp": "2025-03-08 19:00", "Month": 3, "Day": 8, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.160662},
  {"Timestamp": "2025-03-08 20:00", "Month": 3, "Day": 8, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.158232},
  {"Timestamp": "2025-03-08 21:00", "Month": 3, "Day": 8, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.155215},
  {"Timestamp": "2025-03-08 22:00", "Month": 3, "Day": 8, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.165528},
  {"Timestamp": "2025-03-08 23:00", "Month": 3, "Day": 8, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.190994},
  {"Timestamp": "2025-03-09 00:00", "Month": 3, "Day": 9, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.209542},
  {"Timestamp": "2025-03-09 01:00", "Month": 3, "Day": 9, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.221548},
  {"Timestamp": "2025-03-09 02:00", "Month": 3, "Day": 9, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.224468},
  {"Timestamp": "2025-03-09 03:00", "Month": 3, "Day": 9, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.224631},
  {"Timestamp": "2025-03-09 04:00", "Month": 3, "Day": 9, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.221454},
  {"Timestamp": "2025-03-09 05:00", "Month": 3, "Day": 9, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.215263},
  {"Timestamp": "2025-03-09 06:00", "Month": 3, "Day": 9, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.195969},
  {"Timestamp": "2025-03-09 07:00", "Month": 3, "Day": 9, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.178562},
  {"Timestamp": "2025-03-09 08:00", "Month": 3, "Day": 9, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.176427},
  {"Timestamp": "2025-03-09 09:00", "Month": 3, "Day": 9, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.169566},
  {"Timestamp": "2025-03-09 10:00", "Month": 3, "Day": 9, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.168324},
  {"Timestamp": "2025-03-09 11:00", "Month": 3, "Day": 9, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.164823},
  {"Timestamp": "2025-03-09 12:00", "Month": 3, "Day": 9, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.161243},
  {"Timestamp": "2025-03-09 13:00", "Month": 3, "Day": 9, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.155259},
  {"Timestamp": "2025-03-09 14:00", "Month": 3, "Day": 9, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.14504},
  {"Timestamp": "2025-03-09 15:00", "Month": 3, "Day": 9, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.138095},
  {"Timestamp": "2025-03-09 16:00", "Month": 3, "Day": 9, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.144223},
  {"Timestamp": "2025-03-09 17:00", "Month": 3, "Day": 9, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.16206},
  {"Timestamp": "2025-03-09 18:00", "Month": 3, "Day": 9, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.17704},
  {"Timestamp": "2025-03-09 19:00", "Month": 3, "Day": 9, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.184387},
  {"Timestamp": "2025-03-09 20:00", "Month": 3, "Day": 9, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.19289},
  {"Timestamp": "2025-03-09 21:00", "Month": 3, "Day": 9, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.203717},
  {"Timestamp": "2025-03-09 22:00", "Month": 3, "Day": 9, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.225021},
  {"Timestamp": "2025-03-09 23:00", "Month": 3, "Day": 9, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.246741},
  {"Timestamp": "2025-03-10 00:00", "Month": 3, "Day": 10, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.26756},
  {"Timestamp": "2025-03-10 01:00", "Month": 3, "Day": 10, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.285843},
  {"Timestamp": "2025-03-10 02:00", "Month": 3, "Day": 10, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.306346},
  {"Timestamp": "2025-03-10 03:00", "Month": 3, "Day": 10, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.331135},
  {"Timestamp": "2025-03-10 04:00", "Month": 3, "Day": 10, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.343802},
  {"Timestamp": "2025-03-10 05:00", "Month": 3, "Day": 10, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.344617},
  {"Timestamp": "2025-03-10 06:00", "Month": 3, "Day": 10, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.321495},
  {"Timestamp": "2025-03-10 07:00", "Month": 3, "Day": 10, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.299173},
  {"Timestamp": "2025-03-10 08:00", "Month": 3, "Day": 10, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.320148},
  {"Timestamp": "2025-03-10 09:00", "Month": 3, "Day": 10, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.327472},
  {"Timestamp": "2025-03-10 10:00", "Month": 3, "Day": 10, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.323682},
  {"Timestamp": "2025-03-10 11:00", "Month": 3, "Day": 10, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.319786},
  {"Timestamp": "2025-03-10 12:00", "Month": 3, "Day": 10, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.322418},
  {"Timestamp": "2025-03-10 13:00", "Month": 3, "Day": 10, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.322596},
  {"Timestamp": "2025-03-10 14:00", "Month": 3, "Day": 10, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.320787},
  {"Timestamp": "2025-03-10 15:00", "Month": 3, "Day": 10, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.33437},
  {"Timestamp": "2025-03-10 16:00", "Month": 3, "Day": 10, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.366256},
  {"Timestamp": "2025-03-10 17:00", "Month": 3, "Day": 10, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.407461},
  {"Timestamp": "2025-03-10 18:00", "Month": 3, "Day": 10, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.44209},
  {"Timestamp": "2025-03-10 19:00", "Month": 3, "Day": 10, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.457855},
  {"Timestamp": "2025-03-10 20:00", "Month": 3, "Day": 10, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.454671},
  {"Timestamp": "2025-03-10 21:00", "Month": 3, "Day": 10, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.447769},
  {"Timestamp": "2025-03-10 22:00", "Month": 3, "Day": 10, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.437649},
  {"Timestamp": "2025-03-10 23:00", "Month": 3, "Day": 10, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.434578},
  {"Timestamp": "2025-03-11 00:00", "Month": 3, "Day": 11, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.42438},
  {"Timestamp": "2025-03-11 01:00", "Month": 3, "Day": 11, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.414564},
  {"Timestamp": "2025-03-11 02:00", "Month": 3, "Day": 11, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.40075},
  {"Timestamp": "2025-03-11 03:00", "Month": 3, "Day": 11, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.380715},
  {"Timestamp": "2025-03-11 04:00", "Month": 3, "Day": 11, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.347889},
  {"Timestamp": "2025-03-11 05:00", "Month": 3, "Day": 11, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.307817},
  {"Timestamp": "2025-03-11 06:00", "Month": 3, "Day": 11, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.251897},
  {"Timestamp": "2025-03-11 07:00", "Month": 3, "Day": 11, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.221136},
  {"Timestamp": "2025-03-11 08:00", "Month": 3, "Day": 11, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.21281},
  {"Timestamp": "2025-03-11 09:00", "Month": 3, "Day": 11, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.198205},
  {"Timestamp": "2025-03-11 10:00", "Month": 3, "Day": 11, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.192655},
  {"Timestamp": "2025-03-11 11:00", "Month": 3, "Day": 11, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.208885},
  {"Timestamp": "2025-03-11 12:00", "Month": 3, "Day": 11, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.241249},
  {"Timestamp": "2025-03-11 13:00", "Month": 3, "Day": 11, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.265446},
  {"Timestamp": "2025-03-11 14:00", "Month": 3, "Day": 11, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.255542},
  {"Timestamp": "2025-03-11 15:00", "Month": 3, "Day": 11, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.220104},
  {"Timestamp": "2025-03-11 16:00", "Month": 3, "Day": 11, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.210809},
  {"Timestamp": "2025-03-11 17:00", "Month": 3, "Day": 11, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.222728},
  {"Timestamp": "2025-03-11 18:00", "Month": 3, "Day": 11, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.222173},
  {"Timestamp": "2025-03-11 19:00", "Month": 3, "Day": 11, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.220861},
  {"Timestamp": "2025-03-11 20:00", "Month": 3, "Day": 11, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.216256},
  {"Timestamp": "2025-03-11 21:00", "Month": 3, "Day": 11, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.208289},
  {"Timestamp": "2025-03-11 22:00", "Month": 3, "Day": 11, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.203647},
  {"Timestamp": "2025-03-11 23:00", "Month": 3, "Day": 11, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.199511},
  {"Timestamp": "2025-03-12 00:00", "Month": 3, "Day": 12, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.189227},
  {"Timestamp": "2025-03-12 01:00", "Month": 3, "Day": 12, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.17462},
  {"Timestamp": "2025-03-12 02:00", "Month": 3, "Day": 12, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.161629},
  {"Timestamp": "2025-03-12 03:00", "Month": 3, "Day": 12, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.149126},
  {"Timestamp": "2025-03-12 04:00", "Month": 3, "Day": 12, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.138373},
  {"Timestamp": "2025-03-12 05:00", "Month": 3, "Day": 12, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.132859},
  {"Timestamp": "2025-03-12 06:00", "Month": 3, "Day": 12, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.120022},
  {"Timestamp": "2025-03-12 07:00", "Month": 3, "Day": 12, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.11002},
  {"Timestamp": "2025-03-12 08:00", "Month": 3, "Day": 12, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.136108},
  {"Timestamp": "2025-03-12 09:00", "Month": 3, "Day": 12, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.180514},
  {"Timestamp": "2025-03-12 10:00", "Month": 3, "Day": 12, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.236081},
  {"Timestamp": "2025-03-12 11:00", "Month": 3, "Day": 12, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.29163},
  {"Timestamp": "2025-03-12 12:00", "Month": 3, "Day": 12, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.328408},
  {"Timestamp": "2025-03-12 13:00", "Month": 3, "Day": 12, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.345949},
  {"Timestamp": "2025-03-12 14:00", "Month": 3, "Day": 12, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.32927},
  {"Timestamp": "2025-03-12 15:00", "Month": 3, "Day": 12, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.334778},
  {"Timestamp": "2025-03-12 16:00", "Month": 3, "Day": 12, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.372788},
  {"Timestamp": "2025-03-12 17:00", "Month": 3, "Day": 12, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.419847},
  {"Timestamp": "2025-03-12 18:00", "Month": 3, "Day": 12, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.429656},
  {"Timestamp": "2025-03-12 19:00", "Month": 3, "Day": 12, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.420192},
  {"Timestamp": "2025-03-12 20:00", "Month": 3, "Day": 12, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.411279},
  {"Timestamp": "2025-03-12 21:00", "Month": 3, "Day": 12, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.407888},
  {"Timestamp": "2025-03-12 22:00", "Month": 3, "Day": 12, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.399512},
  {"Timestamp": "2025-03-12 23:00", "Month": 3, "Day": 12, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.403366},
  {"Timestamp": "2025-03-13 00:00", "Month": 3, "Day": 13, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.411568},
  {"Timestamp": "2025-03-13 01:00", "Month": 3, "Day": 13, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.422112},
  {"Timestamp": "2025-03-13 02:00", "Month": 3, "Day": 13, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.443585},
  {"Timestamp": "2025-03-13 03:00", "Month": 3, "Day": 13, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.479724},
  {"Timestamp": "2025-03-13 04:00", "Month": 3, "Day": 13, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.52647},
  {"Timestamp": "2025-03-13 05:00", "Month": 3, "Day": 13, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.58924},
  {"Timestamp": "2025-03-13 06:00", "Month": 3, "Day": 13, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.659115},
  {"Timestamp": "2025-03-13 07:00", "Month": 3, "Day": 13, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.700983},
  {"Timestamp": "2025-03-13 08:00", "Month": 3, "Day": 13, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.744375},
  {"Timestamp": "2025-03-13 09:00", "Month": 3, "Day": 13, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.784748},
  {"Timestamp": "2025-03-13 10:00", "Month": 3, "Day": 13, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.819048},
  {"Timestamp": "2025-03-13 11:00", "Month": 3, "Day": 13, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.838053},
  {"Timestamp": "2025-03-13 12:00", "Month": 3, "Day": 13, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.835564},
  {"Timestamp": "2025-03-13 13:00", "Month": 3, "Day": 13, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.817937},
  {"Timestamp": "2025-03-13 14:00", "Month": 3, "Day": 13, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.783951},
  {"Timestamp": "2025-03-13 15:00", "Month": 3, "Day": 13, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.749596},
  {"Timestamp": "2025-03-13 16:00", "Month": 3, "Day": 13, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.729117},
  {"Timestamp": "2025-03-13 17:00", "Month": 3, "Day": 13, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.71479},
  {"Timestamp": "2025-03-13 18:00", "Month": 3, "Day": 13, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.689329},
  {"Timestamp": "2025-03-13 19:00", "Month": 3, "Day": 13, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.649629},
  {"Timestamp": "2025-03-13 20:00", "Month": 3, "Day": 13, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.600959},
  {"Timestamp": "2025-03-13 21:00", "Month": 3, "Day": 13, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.543671},
  {"Timestamp": "2025-03-13 22:00", "Month": 3, "Day": 13, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.521989},
  {"Timestamp": "2025-03-13 23:00", "Month": 3, "Day": 13, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.502285},
  {"Timestamp": "2025-03-14 00:00", "Month": 3, "Day": 14, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.512339},
  {"Timestamp": "2025-03-14 01:00", "Month": 3, "Day": 14, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.519709},
  {"Timestamp": "2025-03-14 02:00", "Month": 3, "Day": 14, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.536562},
  {"Timestamp": "2025-03-14 03:00", "Month": 3, "Day": 14, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.55326},
  {"Timestamp": "2025-03-14 04:00", "Month": 3, "Day": 14, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.558837},
  {"Timestamp": "2025-03-14 05:00", "Month": 3, "Day": 14, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.567751},
  {"Timestamp": "2025-03-14 06:00", "Month": 3, "Day": 14, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.539621},
  {"Timestamp": "2025-03-14 07:00", "Month": 3, "Day": 14, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.527885},
  {"Timestamp": "2025-03-14 08:00", "Month": 3, "Day": 14, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.597909},
  {"Timestamp": "2025-03-14 09:00", "Month": 3, "Day": 14, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.658342},
  {"Timestamp": "2025-03-14 10:00", "Month": 3, "Day": 14, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.671622},
  {"Timestamp": "2025-03-14 11:00", "Month": 3, "Day": 14, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.665252},
  {"Timestamp": "2025-03-14 12:00", "Month": 3, "Day": 14, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.658102},
  {"Timestamp": "2025-03-14 13:00", "Month": 3, "Day": 14, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.658399},
  {"Timestamp": "2025-03-14 14:00", "Month": 3, "Day": 14, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.637918},
  {"Timestamp": "2025-03-14 15:00", "Month": 3, "Day": 14, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.600692},
  {"Timestamp": "2025-03-14 16:00", "Month": 3, "Day": 14, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.549735},
  {"Timestamp": "2025-03-14 17:00", "Month": 3, "Day": 14, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.496484},
  {"Timestamp": "2025-03-14 18:00", "Month": 3, "Day": 14, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.417752},
  {"Timestamp": "2025-03-14 19:00", "Month": 3, "Day": 14, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.359088},
  {"Timestamp": "2025-03-14 20:00", "Month": 3, "Day": 14, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.323216},
  {"Timestamp": "2025-03-14 21:00", "Month": 3, "Day": 14, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.292029},
  {"Timestamp": "2025-03-14 22:00", "Month": 3, "Day": 14, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.267427},
  {"Timestamp": "2025-03-14 23:00", "Month": 3, "Day": 14, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.251705},
  {"Timestamp": "2025-03-15 00:00", "Month": 3, "Day": 15, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.246489},
  {"Timestamp": "2025-03-15 01:00", "Month": 3, "Day": 15, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.243396},
  {"Timestamp": "2025-03-15 02:00", "Month": 3, "Day": 15, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.235156},
  {"Timestamp": "2025-03-15 03:00", "Month": 3, "Day": 15, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.223007},
  {"Timestamp": "2025-03-15 04:00", "Month": 3, "Day": 15, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.213019},
  {"Timestamp": "2025-03-15 05:00", "Month": 3, "Day": 15, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.196452},
  {"Timestamp": "2025-03-15 06:00", "Month": 3, "Day": 15, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.179745},
  {"Timestamp": "2025-03-15 07:00", "Month": 3, "Day": 15, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.176328},
  {"Timestamp": "2025-03-15 08:00", "Month": 3, "Day": 15, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.19883},
  {"Timestamp": "2025-03-15 09:00", "Month": 3, "Day": 15, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.216701},
  {"Timestamp": "2025-03-15 10:00", "Month": 3, "Day": 15, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.230449},
  {"Timestamp": "2025-03-15 11:00", "Month": 3, "Day": 15, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.243016},
  {"Timestamp": "2025-03-15 12:00", "Month": 3, "Day": 15, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.254175},
  {"Timestamp": "2025-03-15 13:00", "Month": 3, "Day": 15, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.255905},
  {"Timestamp": "2025-03-15 14:00", "Month": 3, "Day": 15, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.234947},
  {"Timestamp": "2025-03-15 15:00", "Month": 3, "Day": 15, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.190612},
  {"Timestamp": "2025-03-15 16:00", "Month": 3, "Day": 15, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.162471},
  {"Timestamp": "2025-03-15 17:00", "Month": 3, "Day": 15, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.157564},
  {"Timestamp": "2025-03-15 18:00", "Month": 3, "Day": 15, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.150188},
  {"Timestamp": "2025-03-15 19:00", "Month": 3, "Day": 15, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.158232},
  {"Timestamp": "2025-03-15 20:00", "Month": 3, "Day": 15, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.177632},
  {"Timestamp": "2025-03-15 21:00", "Month": 3, "Day": 15, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.192542},
  {"Timestamp": "2025-03-15 22:00", "Month": 3, "Day": 15, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.201307},
  {"Timestamp": "2025-03-15 23:00", "Month": 3, "Day": 15, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.206662},
  {"Timestamp": "2025-03-16 00:00", "Month": 3, "Day": 16, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.207976},
  {"Timestamp": "2025-03-16 01:00", "Month": 3, "Day": 16, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.205908},
  {"Timestamp": "2025-03-16 02:00", "Month": 3, "Day": 16, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.199053},
  {"Timestamp": "2025-03-16 03:00", "Month": 3, "Day": 16, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.192263},
  {"Timestamp": "2025-03-16 04:00", "Month": 3, "Day": 16, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.196215},
  {"Timestamp": "2025-03-16 05:00", "Month": 3, "Day": 16, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.192407},
  {"Timestamp": "2025-03-16 06:00", "Month": 3, "Day": 16, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.163946},
  {"Timestamp": "2025-03-16 07:00", "Month": 3, "Day": 16, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.150863},
  {"Timestamp": "2025-03-16 08:00", "Month": 3, "Day": 16, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.179787},
  {"Timestamp": "2025-03-16 09:00", "Month": 3, "Day": 16, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.219828},
  {"Timestamp": "2025-03-16 10:00", "Month": 3, "Day": 16, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.244483},
  {"Timestamp": "2025-03-16 11:00", "Month": 3, "Day": 16, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.265822},
  {"Timestamp": "2025-03-16 12:00", "Month": 3, "Day": 16, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.287458},
  {"Timestamp": "2025-03-16 13:00", "Month": 3, "Day": 16, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.309809},
  {"Timestamp": "2025-03-16 14:00", "Month": 3, "Day": 16, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.321772},
  {"Timestamp": "2025-03-16 15:00", "Month": 3, "Day": 16, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.336766},
  {"Timestamp": "2025-03-16 16:00", "Month": 3, "Day": 16, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.376083},
  {"Timestamp": "2025-03-16 17:00", "Month": 3, "Day": 16, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.428122},
  {"Timestamp": "2025-03-16 18:00", "Month": 3, "Day": 16, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.441605},
  {"Timestamp": "2025-03-16 19:00", "Month": 3, "Day": 16, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.441677},
  {"Timestamp": "2025-03-16 20:00", "Month": 3, "Day": 16, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.439935},
  {"Timestamp": "2025-03-16 21:00", "Month": 3, "Day": 16, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.429084},
  {"Timestamp": "2025-03-16 22:00", "Month": 3, "Day": 16, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.414477},
  {"Timestamp": "2025-03-16 23:00", "Month": 3, "Day": 16, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.398972},
  {"Timestamp": "2025-03-17 00:00", "Month": 3, "Day": 17, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.373618},
  {"Timestamp": "2025-03-17 01:00", "Month": 3, "Day": 17, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.343182},
  {"Timestamp": "2025-03-17 02:00", "Month": 3, "Day": 17, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.324785},
  {"Timestamp": "2025-03-17 03:00", "Month": 3, "Day": 17, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.316707},
  {"Timestamp": "2025-03-17 04:00", "Month": 3, "Day": 17, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.309595},
  {"Timestamp": "2025-03-17 05:00", "Month": 3, "Day": 17, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.30518},
  {"Timestamp": "2025-03-17 06:00", "Month": 3, "Day": 17, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.262283},
  {"Timestamp": "2025-03-17 07:00", "Month": 3, "Day": 17, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.204638},
  {"Timestamp": "2025-03-17 08:00", "Month": 3, "Day": 17, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.210399},
  {"Timestamp": "2025-03-17 09:00", "Month": 3, "Day": 17, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.260422},
  {"Timestamp": "2025-03-17 10:00", "Month": 3, "Day": 17, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.266302},
  {"Timestamp": "2025-03-17 11:00", "Month": 3, "Day": 17, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.260522},
  {"Timestamp": "2025-03-17 12:00", "Month": 3, "Day": 17, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.245878},
  {"Timestamp": "2025-03-17 13:00", "Month": 3, "Day": 17, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.215477},
  {"Timestamp": "2025-03-17 14:00", "Month": 3, "Day": 17, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.19707},
  {"Timestamp": "2025-03-17 15:00", "Month": 3, "Day": 17, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.212263},
  {"Timestamp": "2025-03-17 16:00", "Month": 3, "Day": 17, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.252991},
  {"Timestamp": "2025-03-17 17:00", "Month": 3, "Day": 17, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.28108},
  {"Timestamp": "2025-03-17 18:00", "Month": 3, "Day": 17, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.282873},
  {"Timestamp": "2025-03-17 19:00", "Month": 3, "Day": 17, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.27092},
  {"Timestamp": "2025-03-17 20:00", "Month": 3, "Day": 17, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.255433},
  {"Timestamp": "2025-03-17 21:00", "Month": 3, "Day": 17, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.246545},
  {"Timestamp": "2025-03-17 22:00", "Month": 3, "Day": 17, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.235238},
  {"Timestamp": "2025-03-17 23:00", "Month": 3, "Day": 17, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.223762},
  {"Timestamp": "2025-03-18 00:00", "Month": 3, "Day": 18, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.219797},
  {"Timestamp": "2025-03-18 01:00", "Month": 3, "Day": 18, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.211697},
  {"Timestamp": "2025-03-18 02:00", "Month": 3, "Day": 18, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.208678},
  {"Timestamp": "2025-03-18 03:00", "Month": 3, "Day": 18, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.213075},
  {"Timestamp": "2025-03-18 04:00", "Month": 3, "Day": 18, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.207869},
  {"Timestamp": "2025-03-18 05:00", "Month": 3, "Day": 18, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.196577},
  {"Timestamp": "2025-03-18 06:00", "Month": 3, "Day": 18, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.160291},
  {"Timestamp": "2025-03-18 07:00", "Month": 3, "Day": 18, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.115616},
  {"Timestamp": "2025-03-18 08:00", "Month": 3, "Day": 18, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.109238},
  {"Timestamp": "2025-03-18 09:00", "Month": 3, "Day": 18, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.12415},
  {"Timestamp": "2025-03-18 10:00", "Month": 3, "Day": 18, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.124969},
  {"Timestamp": "2025-03-18 11:00", "Month": 3, "Day": 18, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.117442},
  {"Timestamp": "2025-03-18 12:00", "Month": 3, "Day": 18, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.100407},
  {"Timestamp": "2025-03-18 13:00", "Month": 3, "Day": 18, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.079427},
  {"Timestamp": "2025-03-18 14:00", "Month": 3, "Day": 18, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.060108},
  {"Timestamp": "2025-03-18 15:00", "Month": 3, "Day": 18, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.047243},
  {"Timestamp": "2025-03-18 16:00", "Month": 3, "Day": 18, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.050365},
  {"Timestamp": "2025-03-18 17:00", "Month": 3, "Day": 18, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.066355},
  {"Timestamp": "2025-03-18 18:00", "Month": 3, "Day": 18, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.084563},
  {"Timestamp": "2025-03-18 19:00", "Month": 3, "Day": 18, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.10271},
  {"Timestamp": "2025-03-18 20:00", "Month": 3, "Day": 18, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.120742},
  {"Timestamp": "2025-03-18 21:00", "Month": 3, "Day": 18, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.136566},
  {"Timestamp": "2025-03-18 22:00", "Month": 3, "Day": 18, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.14642},
  {"Timestamp": "2025-03-18 23:00", "Month": 3, "Day": 18, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.153987},
  {"Timestamp": "2025-03-19 00:00", "Month": 3, "Day": 19, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.163841},
  {"Timestamp": "2025-03-19 01:00", "Month": 3, "Day": 19, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.167531},
  {"Timestamp": "2025-03-19 02:00", "Month": 3, "Day": 19, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.159496},
  {"Timestamp": "2025-03-19 03:00", "Month": 3, "Day": 19, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.145559},
  {"Timestamp": "2025-03-19 04:00", "Month": 3, "Day": 19, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.135409},
  {"Timestamp": "2025-03-19 05:00", "Month": 3, "Day": 19, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.131544},
  {"Timestamp": "2025-03-19 06:00", "Month": 3, "Day": 19, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.110418},
  {"Timestamp": "2025-03-19 07:00", "Month": 3, "Day": 19, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.074036},
  {"Timestamp": "2025-03-19 08:00", "Month": 3, "Day": 19, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.062266},
  {"Timestamp": "2025-03-19 09:00", "Month": 3, "Day": 19, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.070082},
  {"Timestamp": "2025-03-19 10:00", "Month": 3, "Day": 19, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.079149},
  {"Timestamp": "2025-03-19 11:00", "Month": 3, "Day": 19, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.081494},
  {"Timestamp": "2025-03-19 12:00", "Month": 3, "Day": 19, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.076713},
  {"Timestamp": "2025-03-19 13:00", "Month": 3, "Day": 19, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.067003},
  {"Timestamp": "2025-03-19 14:00", "Month": 3, "Day": 19, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.056915},
  {"Timestamp": "2025-03-19 15:00", "Month": 3, "Day": 19, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.055722},
  {"Timestamp": "2025-03-19 16:00", "Month": 3, "Day": 19, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.065987},
  {"Timestamp": "2025-03-19 17:00", "Month": 3, "Day": 19, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.080649},
  {"Timestamp": "2025-03-19 18:00", "Month": 3, "Day": 19, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.092552},
  {"Timestamp": "2025-03-19 19:00", "Month": 3, "Day": 19, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.104352},
  {"Timestamp": "2025-03-19 20:00", "Month": 3, "Day": 19, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.117111},
  {"Timestamp": "2025-03-19 21:00", "Month": 3, "Day": 19, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.12779},
  {"Timestamp": "2025-03-19 22:00", "Month": 3, "Day": 19, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.129478},
  {"Timestamp": "2025-03-19 23:00", "Month": 3, "Day": 19, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.132425},
  {"Timestamp": "2025-03-20 00:00", "Month": 3, "Day": 20, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.136561},
  {"Timestamp": "2025-03-20 01:00", "Month": 3, "Day": 20, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.137016},
  {"Timestamp": "2025-03-20 02:00", "Month": 3, "Day": 20, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.129406},
  {"Timestamp": "2025-03-20 03:00", "Month": 3, "Day": 20, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.11646},
  {"Timestamp": "2025-03-20 04:00", "Month": 3, "Day": 20, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.108058},
  {"Timestamp": "2025-03-20 05:00", "Month": 3, "Day": 20, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.108686},
  {"Timestamp": "2025-03-20 06:00", "Month": 3, "Day": 20, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.110521},
  {"Timestamp": "2025-03-20 07:00", "Month": 3, "Day": 20, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.111007},
  {"Timestamp": "2025-03-20 08:00", "Month": 3, "Day": 20, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.132575},
  {"Timestamp": "2025-03-20 09:00", "Month": 3, "Day": 20, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.170784},
  {"Timestamp": "2025-03-20 10:00", "Month": 3, "Day": 20, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.200691},
  {"Timestamp": "2025-03-20 11:00", "Month": 3, "Day": 20, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.222687},
  {"Timestamp": "2025-03-20 12:00", "Month": 3, "Day": 20, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.239635},
  {"Timestamp": "2025-03-20 13:00", "Month": 3, "Day": 20, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.238558},
  {"Timestamp": "2025-03-20 14:00", "Month": 3, "Day": 20, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.213717},
  {"Timestamp": "2025-03-20 15:00", "Month": 3, "Day": 20, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.178941},
  {"Timestamp": "2025-03-20 16:00", "Month": 3, "Day": 20, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.157744},
  {"Timestamp": "2025-03-20 17:00", "Month": 3, "Day": 20, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.156366},
  {"Timestamp": "2025-03-20 18:00", "Month": 3, "Day": 20, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.153422},
  {"Timestamp": "2025-03-20 19:00", "Month": 3, "Day": 20, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.149506},
  {"Timestamp": "2025-03-20 20:00", "Month": 3, "Day": 20, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.149267},
  {"Timestamp": "2025-03-20 21:00", "Month": 3, "Day": 20, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.14851},
  {"Timestamp": "2025-03-20 22:00", "Month": 3, "Day": 20, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.142522},
  {"Timestamp": "2025-03-20 23:00", "Month": 3, "Day": 20, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.129509},
  {"Timestamp": "2025-03-21 00:00", "Month": 3, "Day": 21, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.11304},
  {"Timestamp": "2025-03-21 01:00", "Month": 3, "Day": 21, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.100438},
  {"Timestamp": "2025-03-21 02:00", "Month": 3, "Day": 21, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.093051},
  {"Timestamp": "2025-03-21 03:00", "Month": 3, "Day": 21, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.090905},
  {"Timestamp": "2025-03-21 04:00", "Month": 3, "Day": 21, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.095084},
  {"Timestamp": "2025-03-21 05:00", "Month": 3, "Day": 21, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.105014},
  {"Timestamp": "2025-03-21 06:00", "Month": 3, "Day": 21, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.104044},
  {"Timestamp": "2025-03-21 07:00", "Month": 3, "Day": 21, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.098795},
  {"Timestamp": "2025-03-21 08:00", "Month": 3, "Day": 21, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.111464},
  {"Timestamp": "2025-03-21 09:00", "Month": 3, "Day": 21, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.130132},
  {"Timestamp": "2025-03-21 10:00", "Month": 3, "Day": 21, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.1521},
  {"Timestamp": "2025-03-21 11:00", "Month": 3, "Day": 21, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.167632},
  {"Timestamp": "2025-03-21 12:00", "Month": 3, "Day": 21, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.177294},
  {"Timestamp": "2025-03-21 13:00", "Month": 3, "Day": 21, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.181946},
  {"Timestamp": "2025-03-21 14:00", "Month": 3, "Day": 21, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.17566},
  {"Timestamp": "2025-03-21 15:00", "Month": 3, "Day": 21, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.174012},
  {"Timestamp": "2025-03-21 16:00", "Month": 3, "Day": 21, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.185075},
  {"Timestamp": "2025-03-21 17:00", "Month": 3, "Day": 21, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.206653},
  {"Timestamp": "2025-03-21 18:00", "Month": 3, "Day": 21, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.232989},
  {"Timestamp": "2025-03-21 19:00", "Month": 3, "Day": 21, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.247807},
  {"Timestamp": "2025-03-21 20:00", "Month": 3, "Day": 21, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.256941},
  {"Timestamp": "2025-03-21 21:00", "Month": 3, "Day": 21, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.264526},
  {"Timestamp": "2025-03-21 22:00", "Month": 3, "Day": 21, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.268683},
  {"Timestamp": "2025-03-21 23:00", "Month": 3, "Day": 21, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.266217},
  {"Timestamp": "2025-03-22 00:00", "Month": 3, "Day": 22, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.267759},
  {"Timestamp": "2025-03-22 01:00", "Month": 3, "Day": 22, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.262232},
  {"Timestamp": "2025-03-22 02:00", "Month": 3, "Day": 22, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.251628},
  {"Timestamp": "2025-03-22 03:00", "Month": 3, "Day": 22, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.244493},
  {"Timestamp": "2025-03-22 04:00", "Month": 3, "Day": 22, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.243393},
  {"Timestamp": "2025-03-22 05:00", "Month": 3, "Day": 22, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.254133},
  {"Timestamp": "2025-03-22 06:00", "Month": 3, "Day": 22, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.253933},
  {"Timestamp": "2025-03-22 07:00", "Month": 3, "Day": 22, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.268718},
  {"Timestamp": "2025-03-22 08:00", "Month": 3, "Day": 22, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.36979},
  {"Timestamp": "2025-03-22 09:00", "Month": 3, "Day": 22, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.455483},
  {"Timestamp": "2025-03-22 10:00", "Month": 3, "Day": 22, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.505255},
  {"Timestamp": "2025-03-22 11:00", "Month": 3, "Day": 22, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.524985},
  {"Timestamp": "2025-03-22 12:00", "Month": 3, "Day": 22, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.529942},
  {"Timestamp": "2025-03-22 13:00", "Month": 3, "Day": 22, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.526686},
  {"Timestamp": "2025-03-22 14:00", "Month": 3, "Day": 22, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.499833},
  {"Timestamp": "2025-03-22 15:00", "Month": 3, "Day": 22, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.468021},
  {"Timestamp": "2025-03-22 16:00", "Month": 3, "Day": 22, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.45246},
  {"Timestamp": "2025-03-22 17:00", "Month": 3, "Day": 22, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.440948},
  {"Timestamp": "2025-03-22 18:00", "Month": 3, "Day": 22, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.418496},
  {"Timestamp": "2025-03-22 19:00", "Month": 3, "Day": 22, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.399166},
  {"Timestamp": "2025-03-22 20:00", "Month": 3, "Day": 22, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.389574},
  {"Timestamp": "2025-03-22 21:00", "Month": 3, "Day": 22, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.390117},
  {"Timestamp": "2025-03-22 22:00", "Month": 3, "Day": 22, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.378232},
  {"Timestamp": "2025-03-22 23:00", "Month": 3, "Day": 22, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.381779},
  {"Timestamp": "2025-03-23 00:00", "Month": 3, "Day": 23, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.407515},
  {"Timestamp": "2025-03-23 01:00", "Month": 3, "Day": 23, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.434758},
  {"Timestamp": "2025-03-23 02:00", "Month": 3, "Day": 23, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.455798},
  {"Timestamp": "2025-03-23 03:00", "Month": 3, "Day": 23, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.478248},
  {"Timestamp": "2025-03-23 04:00", "Month": 3, "Day": 23, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.494404},
  {"Timestamp": "2025-03-23 05:00", "Month": 3, "Day": 23, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.501463},
  {"Timestamp": "2025-03-23 06:00", "Month": 3, "Day": 23, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.491728},
  {"Timestamp": "2025-03-23 07:00", "Month": 3, "Day": 23, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.481742},
  {"Timestamp": "2025-03-23 08:00", "Month": 3, "Day": 23, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.526975},
  {"Timestamp": "2025-03-23 09:00", "Month": 3, "Day": 23, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.58492},
  {"Timestamp": "2025-03-23 10:00", "Month": 3, "Day": 23, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.607875},
  {"Timestamp": "2025-03-23 11:00", "Month": 3, "Day": 23, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.604369},
  {"Timestamp": "2025-03-23 12:00", "Month": 3, "Day": 23, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.587374},
  {"Timestamp": "2025-03-23 13:00", "Month": 3, "Day": 23, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.54958},
  {"Timestamp": "2025-03-23 14:00", "Month": 3, "Day": 23, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.468026},
  {"Timestamp": "2025-03-23 15:00", "Month": 3, "Day": 23, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.365634},
  {"Timestamp": "2025-03-23 16:00", "Month": 3, "Day": 23, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.32456},
  {"Timestamp": "2025-03-23 17:00", "Month": 3, "Day": 23, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.347015},
  {"Timestamp": "2025-03-23 18:00", "Month": 3, "Day": 23, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.3467},
  {"Timestamp": "2025-03-23 19:00", "Month": 3, "Day": 23, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.334371},
  {"Timestamp": "2025-03-23 20:00", "Month": 3, "Day": 23, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.332335},
  {"Timestamp": "2025-03-23 21:00", "Month": 3, "Day": 23, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.339383},
  {"Timestamp": "2025-03-23 22:00", "Month": 3, "Day": 23, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.35784},
  {"Timestamp": "2025-03-23 23:00", "Month": 3, "Day": 23, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.387981},
  {"Timestamp": "2025-03-24 00:00", "Month": 3, "Day": 24, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.419602},
  {"Timestamp": "2025-03-24 01:00", "Month": 3, "Day": 24, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.43799},
  {"Timestamp": "2025-03-24 02:00", "Month": 3, "Day": 24, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.445208},
  {"Timestamp": "2025-03-24 03:00", "Month": 3, "Day": 24, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.456908},
  {"Timestamp": "2025-03-24 04:00", "Month": 3, "Day": 24, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.45803},
  {"Timestamp": "2025-03-24 05:00", "Month": 3, "Day": 24, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.481954},
  {"Timestamp": "2025-03-24 06:00", "Month": 3, "Day": 24, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.50097},
  {"Timestamp": "2025-03-24 07:00", "Month": 3, "Day": 24, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.534273},
  {"Timestamp": "2025-03-24 08:00", "Month": 3, "Day": 24, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.599148},
  {"Timestamp": "2025-03-24 09:00", "Month": 3, "Day": 24, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.640416},
  {"Timestamp": "2025-03-24 10:00", "Month": 3, "Day": 24, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.660768},
  {"Timestamp": "2025-03-24 11:00", "Month": 3, "Day": 24, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.664295},
  {"Timestamp": "2025-03-24 12:00", "Month": 3, "Day": 24, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.650347},
  {"Timestamp": "2025-03-24 13:00", "Month": 3, "Day": 24, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.615795},
  {"Timestamp": "2025-03-24 14:00", "Month": 3, "Day": 24, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.551675},
  {"Timestamp": "2025-03-24 15:00", "Month": 3, "Day": 24, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.442901},
  {"Timestamp": "2025-03-24 16:00", "Month": 3, "Day": 24, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.352997},
  {"Timestamp": "2025-03-24 17:00", "Month": 3, "Day": 24, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.363245},
  {"Timestamp": "2025-03-24 18:00", "Month": 3, "Day": 24, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.384107},
  {"Timestamp": "2025-03-24 19:00", "Month": 3, "Day": 24, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.396083},
  {"Timestamp": "2025-03-24 20:00", "Month": 3, "Day": 24, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.397768},
  {"Timestamp": "2025-03-24 21:00", "Month": 3, "Day": 24, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.396128},
  {"Timestamp": "2025-03-24 22:00", "Month": 3, "Day": 24, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.411728},
  {"Timestamp": "2025-03-24 23:00", "Month": 3, "Day": 24, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.428209},
  {"Timestamp": "2025-03-25 00:00", "Month": 3, "Day": 25, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.430832},
  {"Timestamp": "2025-03-25 01:00", "Month": 3, "Day": 25, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.438636},
  {"Timestamp": "2025-03-25 02:00", "Month": 3, "Day": 25, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.44463},
  {"Timestamp": "2025-03-25 03:00", "Month": 3, "Day": 25, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.459165},
  {"Timestamp": "2025-03-25 04:00", "Month": 3, "Day": 25, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.468756},
  {"Timestamp": "2025-03-25 05:00", "Month": 3, "Day": 25, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.476908},
  {"Timestamp": "2025-03-25 06:00", "Month": 3, "Day": 25, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.481712},
  {"Timestamp": "2025-03-25 07:00", "Month": 3, "Day": 25, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.54006},
  {"Timestamp": "2025-03-25 08:00", "Month": 3, "Day": 25, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.616114},
  {"Timestamp": "2025-03-25 09:00", "Month": 3, "Day": 25, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.646202},
  {"Timestamp": "2025-03-25 10:00", "Month": 3, "Day": 25, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.648503},
  {"Timestamp": "2025-03-25 11:00", "Month": 3, "Day": 25, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.644119},
  {"Timestamp": "2025-03-25 12:00", "Month": 3, "Day": 25, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.634042},
  {"Timestamp": "2025-03-25 13:00", "Month": 3, "Day": 25, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.621446},
  {"Timestamp": "2025-03-25 14:00", "Month": 3, "Day": 25, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.582914},
  {"Timestamp": "2025-03-25 15:00", "Month": 3, "Day": 25, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.536782},
  {"Timestamp": "2025-03-25 16:00", "Month": 3, "Day": 25, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.520883},
  {"Timestamp": "2025-03-25 17:00", "Month": 3, "Day": 25, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.52607},
  {"Timestamp": "2025-03-25 18:00", "Month": 3, "Day": 25, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.52544},
  {"Timestamp": "2025-03-25 19:00", "Month": 3, "Day": 25, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.521154},
  {"Timestamp": "2025-03-25 20:00", "Month": 3, "Day": 25, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.50706},
  {"Timestamp": "2025-03-25 21:00", "Month": 3, "Day": 25, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.481921},
  {"Timestamp": "2025-03-25 22:00", "Month": 3, "Day": 25, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.456477},
  {"Timestamp": "2025-03-25 23:00", "Month": 3, "Day": 25, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.427587},
  {"Timestamp": "2025-03-26 00:00", "Month": 3, "Day": 26, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.404898},
  {"Timestamp": "2025-03-26 01:00", "Month": 3, "Day": 26, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.368782},
  {"Timestamp": "2025-03-26 02:00", "Month": 3, "Day": 26, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.321508},
  {"Timestamp": "2025-03-26 03:00", "Month": 3, "Day": 26, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.279751},
  {"Timestamp": "2025-03-26 04:00", "Month": 3, "Day": 26, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.245814},
  {"Timestamp": "2025-03-26 05:00", "Month": 3, "Day": 26, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.207955},
  {"Timestamp": "2025-03-26 06:00", "Month": 3, "Day": 26, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.161038},
  {"Timestamp": "2025-03-26 07:00", "Month": 3, "Day": 26, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.163696},
  {"Timestamp": "2025-03-26 08:00", "Month": 3, "Day": 26, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.166347},
  {"Timestamp": "2025-03-26 09:00", "Month": 3, "Day": 26, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.17317},
  {"Timestamp": "2025-03-26 10:00", "Month": 3, "Day": 26, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.1825},
  {"Timestamp": "2025-03-26 11:00", "Month": 3, "Day": 26, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.196252},
  {"Timestamp": "2025-03-26 12:00", "Month": 3, "Day": 26, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.205699},
  {"Timestamp": "2025-03-26 13:00", "Month": 3, "Day": 26, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.207062},
  {"Timestamp": "2025-03-26 14:00", "Month": 3, "Day": 26, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.202238},
  {"Timestamp": "2025-03-26 15:00", "Month": 3, "Day": 26, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.203787},
  {"Timestamp": "2025-03-26 16:00", "Month": 3, "Day": 26, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.215802},
  {"Timestamp": "2025-03-26 17:00", "Month": 3, "Day": 26, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.238454},
  {"Timestamp": "2025-03-26 18:00", "Month": 3, "Day": 26, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.2542},
  {"Timestamp": "2025-03-26 19:00", "Month": 3, "Day": 26, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.265149},
  {"Timestamp": "2025-03-26 20:00", "Month": 3, "Day": 26, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.264624},
  {"Timestamp": "2025-03-26 21:00", "Month": 3, "Day": 26, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.269391},
  {"Timestamp": "2025-03-26 22:00", "Month": 3, "Day": 26, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.275443},
  {"Timestamp": "2025-03-26 23:00", "Month": 3, "Day": 26, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.280835},
  {"Timestamp": "2025-03-27 00:00", "Month": 3, "Day": 27, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.293906},
  {"Timestamp": "2025-03-27 01:00", "Month": 3, "Day": 27, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.304578},
  {"Timestamp": "2025-03-27 02:00", "Month": 3, "Day": 27, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.309205},
  {"Timestamp": "2025-03-27 03:00", "Month": 3, "Day": 27, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.288405},
  {"Timestamp": "2025-03-27 04:00", "Month": 3, "Day": 27, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.25534},
  {"Timestamp": "2025-03-27 05:00", "Month": 3, "Day": 27, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.22744},
  {"Timestamp": "2025-03-27 06:00", "Month": 3, "Day": 27, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.212173},
  {"Timestamp": "2025-03-27 07:00", "Month": 3, "Day": 27, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.27622},
  {"Timestamp": "2025-03-27 08:00", "Month": 3, "Day": 27, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.332851},
  {"Timestamp": "2025-03-27 09:00", "Month": 3, "Day": 27, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.346505},
  {"Timestamp": "2025-03-27 10:00", "Month": 3, "Day": 27, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.36039},
  {"Timestamp": "2025-03-27 11:00", "Month": 3, "Day": 27, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.387872},
  {"Timestamp": "2025-03-27 12:00", "Month": 3, "Day": 27, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.421961},
  {"Timestamp": "2025-03-27 13:00", "Month": 3, "Day": 27, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.448316},
  {"Timestamp": "2025-03-27 14:00", "Month": 3, "Day": 27, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.45836},
  {"Timestamp": "2025-03-27 15:00", "Month": 3, "Day": 27, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.429795},
  {"Timestamp": "2025-03-27 16:00", "Month": 3, "Day": 27, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.377307},
  {"Timestamp": "2025-03-27 17:00", "Month": 3, "Day": 27, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.39183},
  {"Timestamp": "2025-03-27 18:00", "Month": 3, "Day": 27, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.414807},
  {"Timestamp": "2025-03-27 19:00", "Month": 3, "Day": 27, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.413196},
  {"Timestamp": "2025-03-27 20:00", "Month": 3, "Day": 27, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.412006},
  {"Timestamp": "2025-03-27 21:00", "Month": 3, "Day": 27, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.40151},
  {"Timestamp": "2025-03-27 22:00", "Month": 3, "Day": 27, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.386188},
  {"Timestamp": "2025-03-27 23:00", "Month": 3, "Day": 27, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.370411},
  {"Timestamp": "2025-03-28 00:00", "Month": 3, "Day": 28, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.345612},
  {"Timestamp": "2025-03-28 01:00", "Month": 3, "Day": 28, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.320394},
  {"Timestamp": "2025-03-28 02:00", "Month": 3, "Day": 28, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.286506},
  {"Timestamp": "2025-03-28 03:00", "Month": 3, "Day": 28, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.247314},
  {"Timestamp": "2025-03-28 04:00", "Month": 3, "Day": 28, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.213742},
  {"Timestamp": "2025-03-28 05:00", "Month": 3, "Day": 28, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.186781},
  {"Timestamp": "2025-03-28 06:00", "Month": 3, "Day": 28, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.164019},
  {"Timestamp": "2025-03-28 07:00", "Month": 3, "Day": 28, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.177539},
  {"Timestamp": "2025-03-28 08:00", "Month": 3, "Day": 28, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.180895},
  {"Timestamp": "2025-03-28 09:00", "Month": 3, "Day": 28, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.168516},
  {"Timestamp": "2025-03-28 10:00", "Month": 3, "Day": 28, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.158557},
  {"Timestamp": "2025-03-28 11:00", "Month": 3, "Day": 28, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.154244},
  {"Timestamp": "2025-03-28 12:00", "Month": 3, "Day": 28, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.149411},
  {"Timestamp": "2025-03-28 13:00", "Month": 3, "Day": 28, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.140231},
  {"Timestamp": "2025-03-28 14:00", "Month": 3, "Day": 28, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.124671},
  {"Timestamp": "2025-03-28 15:00", "Month": 3, "Day": 28, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.102091},
  {"Timestamp": "2025-03-28 16:00", "Month": 3, "Day": 28, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.082135},
  {"Timestamp": "2025-03-28 17:00", "Month": 3, "Day": 28, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.089243},
  {"Timestamp": "2025-03-28 18:00", "Month": 3, "Day": 28, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.117747},
  {"Timestamp": "2025-03-28 19:00", "Month": 3, "Day": 28, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.155032},
  {"Timestamp": "2025-03-28 20:00", "Month": 3, "Day": 28, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.185669},
  {"Timestamp": "2025-03-28 21:00", "Month": 3, "Day": 28, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.198263},
  {"Timestamp": "2025-03-28 22:00", "Month": 3, "Day": 28, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.202586},
  {"Timestamp": "2025-03-28 23:00", "Month": 3, "Day": 28, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.20434},
  {"Timestamp": "2025-03-29 00:00", "Month": 3, "Day": 29, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.210672},
  {"Timestamp": "2025-03-29 01:00", "Month": 3, "Day": 29, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.213148},
  {"Timestamp": "2025-03-29 02:00", "Month": 3, "Day": 29, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.214161},
  {"Timestamp": "2025-03-29 03:00", "Month": 3, "Day": 29, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.218682},
  {"Timestamp": "2025-03-29 04:00", "Month": 3, "Day": 29, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.219021},
  {"Timestamp": "2025-03-29 05:00", "Month": 3, "Day": 29, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.203406},
  {"Timestamp": "2025-03-29 06:00", "Month": 3, "Day": 29, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.1502},
  {"Timestamp": "2025-03-29 07:00", "Month": 3, "Day": 29, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.138933},
  {"Timestamp": "2025-03-29 08:00", "Month": 3, "Day": 29, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.140748},
  {"Timestamp": "2025-03-29 09:00", "Month": 3, "Day": 29, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.146829},
  {"Timestamp": "2025-03-29 10:00", "Month": 3, "Day": 29, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.158574},
  {"Timestamp": "2025-03-29 11:00", "Month": 3, "Day": 29, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.168669},
  {"Timestamp": "2025-03-29 12:00", "Month": 3, "Day": 29, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.175348},
  {"Timestamp": "2025-03-29 13:00", "Month": 3, "Day": 29, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.173025},
  {"Timestamp": "2025-03-29 14:00", "Month": 3, "Day": 29, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.155786},
  {"Timestamp": "2025-03-29 15:00", "Month": 3, "Day": 29, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.128109},
  {"Timestamp": "2025-03-29 16:00", "Month": 3, "Day": 29, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.132814},
  {"Timestamp": "2025-03-29 17:00", "Month": 3, "Day": 29, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.16196},
  {"Timestamp": "2025-03-29 18:00", "Month": 3, "Day": 29, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.196516},
  {"Timestamp": "2025-03-29 19:00", "Month": 3, "Day": 29, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.225021},
  {"Timestamp": "2025-03-29 20:00", "Month": 3, "Day": 29, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.24864},
  {"Timestamp": "2025-03-29 21:00", "Month": 3, "Day": 29, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.262459},
  {"Timestamp": "2025-03-29 22:00", "Month": 3, "Day": 29, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.27504},
  {"Timestamp": "2025-03-29 23:00", "Month": 3, "Day": 29, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.288274},
  {"Timestamp": "2025-03-30 00:00", "Month": 3, "Day": 30, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.306175},
  {"Timestamp": "2025-03-30 01:00", "Month": 3, "Day": 30, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.31742},
  {"Timestamp": "2025-03-30 02:00", "Month": 3, "Day": 30, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.329456},
  {"Timestamp": "2025-03-30 03:00", "Month": 3, "Day": 30, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.337869},
  {"Timestamp": "2025-03-30 04:00", "Month": 3, "Day": 30, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.341763},
  {"Timestamp": "2025-03-30 05:00", "Month": 3, "Day": 30, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.336992},
  {"Timestamp": "2025-03-30 06:00", "Month": 3, "Day": 30, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.335825},
  {"Timestamp": "2025-03-30 07:00", "Month": 3, "Day": 30, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.369057},
  {"Timestamp": "2025-03-30 08:00", "Month": 3, "Day": 30, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.446125},
  {"Timestamp": "2025-03-30 09:00", "Month": 3, "Day": 30, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.513248},
  {"Timestamp": "2025-03-30 10:00", "Month": 3, "Day": 30, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.555547},
  {"Timestamp": "2025-03-30 11:00", "Month": 3, "Day": 30, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.58871},
  {"Timestamp": "2025-03-30 12:00", "Month": 3, "Day": 30, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.593071},
  {"Timestamp": "2025-03-30 13:00", "Month": 3, "Day": 30, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.581091},
  {"Timestamp": "2025-03-30 14:00", "Month": 3, "Day": 30, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.556044},
  {"Timestamp": "2025-03-30 15:00", "Month": 3, "Day": 30, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.488517},
  {"Timestamp": "2025-03-30 16:00", "Month": 3, "Day": 30, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.430395},
  {"Timestamp": "2025-03-30 17:00", "Month": 3, "Day": 30, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.42174},
  {"Timestamp": "2025-03-30 18:00", "Month": 3, "Day": 30, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.403088},
  {"Timestamp": "2025-03-30 19:00", "Month": 3, "Day": 30, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.363969},
  {"Timestamp": "2025-03-30 20:00", "Month": 3, "Day": 30, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.341849},
  {"Timestamp": "2025-03-30 21:00", "Month": 3, "Day": 30, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.337805},
  {"Timestamp": "2025-03-30 22:00", "Month": 3, "Day": 30, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.338202},
  {"Timestamp": "2025-03-30 23:00", "Month": 3, "Day": 30, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.32093},
  {"Timestamp": "2025-03-31 00:00", "Month": 3, "Day": 31, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.313181},
  {"Timestamp": "2025-03-31 01:00", "Month": 3, "Day": 31, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.309301},
  {"Timestamp": "2025-03-31 02:00", "Month": 3, "Day": 31, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.285106},
  {"Timestamp": "2025-03-31 03:00", "Month": 3, "Day": 31, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.25381},
  {"Timestamp": "2025-03-31 04:00", "Month": 3, "Day": 31, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.231159},
  {"Timestamp": "2025-03-31 05:00", "Month": 3, "Day": 31, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.217447},
  {"Timestamp": "2025-03-31 06:00", "Month": 3, "Day": 31, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.198012},
  {"Timestamp": "2025-03-31 07:00", "Month": 3, "Day": 31, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.218661},
  {"Timestamp": "2025-03-31 08:00", "Month": 3, "Day": 31, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.270804},
  {"Timestamp": "2025-03-31 09:00", "Month": 3, "Day": 31, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.313773},
  {"Timestamp": "2025-03-31 10:00", "Month": 3, "Day": 31, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.339959},
  {"Timestamp": "2025-03-31 11:00", "Month": 3, "Day": 31, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.339228},
  {"Timestamp": "2025-03-31 12:00", "Month": 3, "Day": 31, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.319665},
  {"Timestamp": "2025-03-31 13:00", "Month": 3, "Day": 31, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.299527},
  {"Timestamp": "2025-03-31 14:00", "Month": 3, "Day": 31, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.283288},
  {"Timestamp": "2025-03-31 15:00", "Month": 3, "Day": 31, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.273611},
  {"Timestamp": "2025-03-31 16:00", "Month": 3, "Day": 31, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.280816},
  {"Timestamp": "2025-03-31 17:00", "Month": 3, "Day": 31, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.299231},
  {"Timestamp": "2025-03-31 18:00", "Month": 3, "Day": 31, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.310388},
  {"Timestamp": "2025-03-31 19:00", "Month": 3, "Day": 31, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.309728},
  {"Timestamp": "2025-03-31 20:00", "Month": 3, "Day": 31, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.301329},
  {"Timestamp": "2025-03-31 21:00", "Month": 3, "Day": 31, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.29895},
  {"Timestamp": "2025-03-31 22:00", "Month": 3, "Day": 31, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.308256},
  {"Timestamp": "2025-03-31 23:00", "Month": 3, "Day": 31, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.322237},
  {"Timestamp": "2025-04-01 00:00", "Month": 4, "Day": 1, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.334011},
  {"Timestamp": "2025-04-01 01:00", "Month": 4, "Day": 1, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.343634},
  {"Timestamp": "2025-04-01 02:00", "Month": 4, "Day": 1, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.347925},
  {"Timestamp": "2025-04-01 03:00", "Month": 4, "Day": 1, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.352244},
  {"Timestamp": "2025-04-01 04:00", "Month": 4, "Day": 1, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.358636},
  {"Timestamp": "2025-04-01 05:00", "Month": 4, "Day": 1, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.35325},
  {"Timestamp": "2025-04-01 06:00", "Month": 4, "Day": 1, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.345286},
  {"Timestamp": "2025-04-01 07:00", "Month": 4, "Day": 1, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.355174},
  {"Timestamp": "2025-04-01 08:00", "Month": 4, "Day": 1, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.37713},
  {"Timestamp": "2025-04-01 09:00", "Month": 4, "Day": 1, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.387472},
  {"Timestamp": "2025-04-01 10:00", "Month": 4, "Day": 1, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.391708},
  {"Timestamp": "2025-04-01 11:00", "Month": 4, "Day": 1, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.396338},
  {"Timestamp": "2025-04-01 12:00", "Month": 4, "Day": 1, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.402011},
  {"Timestamp": "2025-04-01 13:00", "Month": 4, "Day": 1, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.403275},
  {"Timestamp": "2025-04-01 14:00", "Month": 4, "Day": 1, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.400659},
  {"Timestamp": "2025-04-01 15:00", "Month": 4, "Day": 1, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.390531},
  {"Timestamp": "2025-04-01 16:00", "Month": 4, "Day": 1, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.37981},
  {"Timestamp": "2025-04-01 17:00", "Month": 4, "Day": 1, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.381952},
  {"Timestamp": "2025-04-01 18:00", "Month": 4, "Day": 1, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.389403},
  {"Timestamp": "2025-04-01 19:00", "Month": 4, "Day": 1, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.390047},
  {"Timestamp": "2025-04-01 20:00", "Month": 4, "Day": 1, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.379875},
  {"Timestamp": "2025-04-01 21:00", "Month": 4, "Day": 1, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.369538},
  {"Timestamp": "2025-04-01 22:00", "Month": 4, "Day": 1, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.360815},
  {"Timestamp": "2025-04-01 23:00", "Month": 4, "Day": 1, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.339887},
  {"Timestamp": "2025-04-02 00:00", "Month": 4, "Day": 2, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.321667},
  {"Timestamp": "2025-04-02 01:00", "Month": 4, "Day": 2, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.306894},
  {"Timestamp": "2025-04-02 02:00", "Month": 4, "Day": 2, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.297996},
  {"Timestamp": "2025-04-02 03:00", "Month": 4, "Day": 2, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.286739},
  {"Timestamp": "2025-04-02 04:00", "Month": 4, "Day": 2, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.279497},
  {"Timestamp": "2025-04-02 05:00", "Month": 4, "Day": 2, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.269496},
  {"Timestamp": "2025-04-02 06:00", "Month": 4, "Day": 2, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.278022},
  {"Timestamp": "2025-04-02 07:00", "Month": 4, "Day": 2, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.328335},
  {"Timestamp": "2025-04-02 08:00", "Month": 4, "Day": 2, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.31239},
  {"Timestamp": "2025-04-02 09:00", "Month": 4, "Day": 2, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.294888},
  {"Timestamp": "2025-04-02 10:00", "Month": 4, "Day": 2, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.283351},
  {"Timestamp": "2025-04-02 11:00", "Month": 4, "Day": 2, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.278517},
  {"Timestamp": "2025-04-02 12:00", "Month": 4, "Day": 2, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.277805},
  {"Timestamp": "2025-04-02 13:00", "Month": 4, "Day": 2, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.280032},
  {"Timestamp": "2025-04-02 14:00", "Month": 4, "Day": 2, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.287179},
  {"Timestamp": "2025-04-02 15:00", "Month": 4, "Day": 2, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.294454},
  {"Timestamp": "2025-04-02 16:00", "Month": 4, "Day": 2, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.281168},
  {"Timestamp": "2025-04-02 17:00", "Month": 4, "Day": 2, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.270403},
  {"Timestamp": "2025-04-02 18:00", "Month": 4, "Day": 2, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.283731},
  {"Timestamp": "2025-04-02 19:00", "Month": 4, "Day": 2, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.270923},
  {"Timestamp": "2025-04-02 20:00", "Month": 4, "Day": 2, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.250102},
  {"Timestamp": "2025-04-02 21:00", "Month": 4, "Day": 2, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.236822},
  {"Timestamp": "2025-04-02 22:00", "Month": 4, "Day": 2, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.228195},
  {"Timestamp": "2025-04-02 23:00", "Month": 4, "Day": 2, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.214858},
  {"Timestamp": "2025-04-03 00:00", "Month": 4, "Day": 3, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.201608},
  {"Timestamp": "2025-04-03 01:00", "Month": 4, "Day": 3, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.191194},
  {"Timestamp": "2025-04-03 02:00", "Month": 4, "Day": 3, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.183937},
  {"Timestamp": "2025-04-03 03:00", "Month": 4, "Day": 3, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.17604},
  {"Timestamp": "2025-04-03 04:00", "Month": 4, "Day": 3, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.165938},
  {"Timestamp": "2025-04-03 05:00", "Month": 4, "Day": 3, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.143973},
  {"Timestamp": "2025-04-03 06:00", "Month": 4, "Day": 3, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.127225},
  {"Timestamp": "2025-04-03 07:00", "Month": 4, "Day": 3, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.174289},
  {"Timestamp": "2025-04-03 08:00", "Month": 4, "Day": 3, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.198766},
  {"Timestamp": "2025-04-03 09:00", "Month": 4, "Day": 3, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.201398},
  {"Timestamp": "2025-04-03 10:00", "Month": 4, "Day": 3, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.194298},
  {"Timestamp": "2025-04-03 11:00", "Month": 4, "Day": 3, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.186599},
  {"Timestamp": "2025-04-03 12:00", "Month": 4, "Day": 3, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.18215},
  {"Timestamp": "2025-04-03 13:00", "Month": 4, "Day": 3, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.181573},
  {"Timestamp": "2025-04-03 14:00", "Month": 4, "Day": 3, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.183862},
  {"Timestamp": "2025-04-03 15:00", "Month": 4, "Day": 3, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.189468},
  {"Timestamp": "2025-04-03 16:00", "Month": 4, "Day": 3, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.187208},
  {"Timestamp": "2025-04-03 17:00", "Month": 4, "Day": 3, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.202534},
  {"Timestamp": "2025-04-03 18:00", "Month": 4, "Day": 3, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.236293},
  {"Timestamp": "2025-04-03 19:00", "Month": 4, "Day": 3, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.234031},
  {"Timestamp": "2025-04-03 20:00", "Month": 4, "Day": 3, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.214821},
  {"Timestamp": "2025-04-03 21:00", "Month": 4, "Day": 3, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.195848},
  {"Timestamp": "2025-04-03 22:00", "Month": 4, "Day": 3, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.181255},
  {"Timestamp": "2025-04-03 23:00", "Month": 4, "Day": 3, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.162572},
  {"Timestamp": "2025-04-04 00:00", "Month": 4, "Day": 4, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.139073},
  {"Timestamp": "2025-04-04 01:00", "Month": 4, "Day": 4, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.115224},
  {"Timestamp": "2025-04-04 02:00", "Month": 4, "Day": 4, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.095013},
  {"Timestamp": "2025-04-04 03:00", "Month": 4, "Day": 4, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.079768},
  {"Timestamp": "2025-04-04 04:00", "Month": 4, "Day": 4, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.067971},
  {"Timestamp": "2025-04-04 05:00", "Month": 4, "Day": 4, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.049581},
  {"Timestamp": "2025-04-04 06:00", "Month": 4, "Day": 4, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.034977},
  {"Timestamp": "2025-04-04 07:00", "Month": 4, "Day": 4, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.043524},
  {"Timestamp": "2025-04-04 08:00", "Month": 4, "Day": 4, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.04409},
  {"Timestamp": "2025-04-04 09:00", "Month": 4, "Day": 4, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.044633},
  {"Timestamp": "2025-04-04 10:00", "Month": 4, "Day": 4, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.045837},
  {"Timestamp": "2025-04-04 11:00", "Month": 4, "Day": 4, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.047757},
  {"Timestamp": "2025-04-04 12:00", "Month": 4, "Day": 4, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.048931},
  {"Timestamp": "2025-04-04 13:00", "Month": 4, "Day": 4, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.049265},
  {"Timestamp": "2025-04-04 14:00", "Month": 4, "Day": 4, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.04962},
  {"Timestamp": "2025-04-04 15:00", "Month": 4, "Day": 4, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.050153},
  {"Timestamp": "2025-04-04 16:00", "Month": 4, "Day": 4, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.05061},
  {"Timestamp": "2025-04-04 17:00", "Month": 4, "Day": 4, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.061886},
  {"Timestamp": "2025-04-04 18:00", "Month": 4, "Day": 4, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.073505},
  {"Timestamp": "2025-04-04 19:00", "Month": 4, "Day": 4, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.076206},
  {"Timestamp": "2025-04-04 20:00", "Month": 4, "Day": 4, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.073504},
  {"Timestamp": "2025-04-04 21:00", "Month": 4, "Day": 4, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.069513},
  {"Timestamp": "2025-04-04 22:00", "Month": 4, "Day": 4, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.065054},
  {"Timestamp": "2025-04-04 23:00", "Month": 4, "Day": 4, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.059637},
  {"Timestamp": "2025-04-05 00:00", "Month": 4, "Day": 5, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.053782},
  {"Timestamp": "2025-04-05 01:00", "Month": 4, "Day": 5, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.047533},
  {"Timestamp": "2025-04-05 02:00", "Month": 4, "Day": 5, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.041878},
  {"Timestamp": "2025-04-05 03:00", "Month": 4, "Day": 5, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.036485},
  {"Timestamp": "2025-04-05 04:00", "Month": 4, "Day": 5, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.033072},
  {"Timestamp": "2025-04-05 05:00", "Month": 4, "Day": 5, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.029238},
  {"Timestamp": "2025-04-05 06:00", "Month": 4, "Day": 5, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.015299},
  {"Timestamp": "2025-04-05 07:00", "Month": 4, "Day": 5, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.012072},
  {"Timestamp": "2025-04-05 08:00", "Month": 4, "Day": 5, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.013274},
  {"Timestamp": "2025-04-05 09:00", "Month": 4, "Day": 5, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.011641},
  {"Timestamp": "2025-04-05 10:00", "Month": 4, "Day": 5, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.008709},
  {"Timestamp": "2025-04-05 11:00", "Month": 4, "Day": 5, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.006209},
  {"Timestamp": "2025-04-05 12:00", "Month": 4, "Day": 5, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.005068},
  {"Timestamp": "2025-04-05 13:00", "Month": 4, "Day": 5, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.004998},
  {"Timestamp": "2025-04-05 14:00", "Month": 4, "Day": 5, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.005129},
  {"Timestamp": "2025-04-05 15:00", "Month": 4, "Day": 5, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.005093},
  {"Timestamp": "2025-04-05 16:00", "Month": 4, "Day": 5, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.005778},
  {"Timestamp": "2025-04-05 17:00", "Month": 4, "Day": 5, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.011452},
  {"Timestamp": "2025-04-05 18:00", "Month": 4, "Day": 5, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.023372},
  {"Timestamp": "2025-04-05 19:00", "Month": 4, "Day": 5, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.039999},
  {"Timestamp": "2025-04-05 20:00", "Month": 4, "Day": 5, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.059177},
  {"Timestamp": "2025-04-05 21:00", "Month": 4, "Day": 5, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.078081},
  {"Timestamp": "2025-04-05 22:00", "Month": 4, "Day": 5, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.093926},
  {"Timestamp": "2025-04-05 23:00", "Month": 4, "Day": 5, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.10766},
  {"Timestamp": "2025-04-06 00:00", "Month": 4, "Day": 6, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.118629},
  {"Timestamp": "2025-04-06 01:00", "Month": 4, "Day": 6, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.125129},
  {"Timestamp": "2025-04-06 02:00", "Month": 4, "Day": 6, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.126769},
  {"Timestamp": "2025-04-06 03:00", "Month": 4, "Day": 6, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.125657},
  {"Timestamp": "2025-04-06 04:00", "Month": 4, "Day": 6, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.126403},
  {"Timestamp": "2025-04-06 05:00", "Month": 4, "Day": 6, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.120839},
  {"Timestamp": "2025-04-06 06:00", "Month": 4, "Day": 6, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.068022},
  {"Timestamp": "2025-04-06 07:00", "Month": 4, "Day": 6, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.048873},
  {"Timestamp": "2025-04-06 08:00", "Month": 4, "Day": 6, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.080257},
  {"Timestamp": "2025-04-06 09:00", "Month": 4, "Day": 6, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.096794},
  {"Timestamp": "2025-04-06 10:00", "Month": 4, "Day": 6, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.102261},
  {"Timestamp": "2025-04-06 11:00", "Month": 4, "Day": 6, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.102234},
  {"Timestamp": "2025-04-06 12:00", "Month": 4, "Day": 6, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.099773},
  {"Timestamp": "2025-04-06 13:00", "Month": 4, "Day": 6, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.097243},
  {"Timestamp": "2025-04-06 14:00", "Month": 4, "Day": 6, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.09482},
  {"Timestamp": "2025-04-06 15:00", "Month": 4, "Day": 6, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.095365},
  {"Timestamp": "2025-04-06 16:00", "Month": 4, "Day": 6, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.113312},
  {"Timestamp": "2025-04-06 17:00", "Month": 4, "Day": 6, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.170289},
  {"Timestamp": "2025-04-06 18:00", "Month": 4, "Day": 6, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.227921},
  {"Timestamp": "2025-04-06 19:00", "Month": 4, "Day": 6, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.252065},
  {"Timestamp": "2025-04-06 20:00", "Month": 4, "Day": 6, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.251403},
  {"Timestamp": "2025-04-06 21:00", "Month": 4, "Day": 6, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.239449},
  {"Timestamp": "2025-04-06 22:00", "Month": 4, "Day": 6, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.225781},
  {"Timestamp": "2025-04-06 23:00", "Month": 4, "Day": 6, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.209502},
  {"Timestamp": "2025-04-07 00:00", "Month": 4, "Day": 7, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.195501},
  {"Timestamp": "2025-04-07 01:00", "Month": 4, "Day": 7, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.182012},
  {"Timestamp": "2025-04-07 02:00", "Month": 4, "Day": 7, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.172104},
  {"Timestamp": "2025-04-07 03:00", "Month": 4, "Day": 7, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.162077},
  {"Timestamp": "2025-04-07 04:00", "Month": 4, "Day": 7, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.150762},
  {"Timestamp": "2025-04-07 05:00", "Month": 4, "Day": 7, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.130137},
  {"Timestamp": "2025-04-07 06:00", "Month": 4, "Day": 7, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.095034},
  {"Timestamp": "2025-04-07 07:00", "Month": 4, "Day": 7, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.10232},
  {"Timestamp": "2025-04-07 08:00", "Month": 4, "Day": 7, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.136418},
  {"Timestamp": "2025-04-07 09:00", "Month": 4, "Day": 7, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.144012},
  {"Timestamp": "2025-04-07 10:00", "Month": 4, "Day": 7, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.139882},
  {"Timestamp": "2025-04-07 11:00", "Month": 4, "Day": 7, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.132083},
  {"Timestamp": "2025-04-07 12:00", "Month": 4, "Day": 7, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.124051},
  {"Timestamp": "2025-04-07 13:00", "Month": 4, "Day": 7, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.118081},
  {"Timestamp": "2025-04-07 14:00", "Month": 4, "Day": 7, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.116655},
  {"Timestamp": "2025-04-07 15:00", "Month": 4, "Day": 7, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.118734},
  {"Timestamp": "2025-04-07 16:00", "Month": 4, "Day": 7, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.120083},
  {"Timestamp": "2025-04-07 17:00", "Month": 4, "Day": 7, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.133464},
  {"Timestamp": "2025-04-07 18:00", "Month": 4, "Day": 7, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.149822},
  {"Timestamp": "2025-04-07 19:00", "Month": 4, "Day": 7, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.146042},
  {"Timestamp": "2025-04-07 20:00", "Month": 4, "Day": 7, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.135101},
  {"Timestamp": "2025-04-07 21:00", "Month": 4, "Day": 7, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.126146},
  {"Timestamp": "2025-04-07 22:00", "Month": 4, "Day": 7, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.120422},
  {"Timestamp": "2025-04-07 23:00", "Month": 4, "Day": 7, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.111135},
  {"Timestamp": "2025-04-08 00:00", "Month": 4, "Day": 8, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.102629},
  {"Timestamp": "2025-04-08 01:00", "Month": 4, "Day": 8, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.092128},
  {"Timestamp": "2025-04-08 02:00", "Month": 4, "Day": 8, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.087334},
  {"Timestamp": "2025-04-08 03:00", "Month": 4, "Day": 8, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.082687},
  {"Timestamp": "2025-04-08 04:00", "Month": 4, "Day": 8, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.078977},
  {"Timestamp": "2025-04-08 05:00", "Month": 4, "Day": 8, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.073249},
  {"Timestamp": "2025-04-08 06:00", "Month": 4, "Day": 8, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.065722},
  {"Timestamp": "2025-04-08 07:00", "Month": 4, "Day": 8, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.06655},
  {"Timestamp": "2025-04-08 08:00", "Month": 4, "Day": 8, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.069475},
  {"Timestamp": "2025-04-08 09:00", "Month": 4, "Day": 8, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.068472},
  {"Timestamp": "2025-04-08 10:00", "Month": 4, "Day": 8, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.067954},
  {"Timestamp": "2025-04-08 11:00", "Month": 4, "Day": 8, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.068385},
  {"Timestamp": "2025-04-08 12:00", "Month": 4, "Day": 8, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.069203},
  {"Timestamp": "2025-04-08 13:00", "Month": 4, "Day": 8, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.070726},
  {"Timestamp": "2025-04-08 14:00", "Month": 4, "Day": 8, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.073636},
  {"Timestamp": "2025-04-08 15:00", "Month": 4, "Day": 8, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.07629},
  {"Timestamp": "2025-04-08 16:00", "Month": 4, "Day": 8, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.072505},
  {"Timestamp": "2025-04-08 17:00", "Month": 4, "Day": 8, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.076805},
  {"Timestamp": "2025-04-08 18:00", "Month": 4, "Day": 8, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.089197},
  {"Timestamp": "2025-04-08 19:00", "Month": 4, "Day": 8, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.088593},
  {"Timestamp": "2025-04-08 20:00", "Month": 4, "Day": 8, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.078653},
  {"Timestamp": "2025-04-08 21:00", "Month": 4, "Day": 8, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.070572},
  {"Timestamp": "2025-04-08 22:00", "Month": 4, "Day": 8, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.064814},
  {"Timestamp": "2025-04-08 23:00", "Month": 4, "Day": 8, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.057746},
  {"Timestamp": "2025-04-09 00:00", "Month": 4, "Day": 9, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.051115},
  {"Timestamp": "2025-04-09 01:00", "Month": 4, "Day": 9, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.045872},
  {"Timestamp": "2025-04-09 02:00", "Month": 4, "Day": 9, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.041708},
  {"Timestamp": "2025-04-09 03:00", "Month": 4, "Day": 9, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.038625},
  {"Timestamp": "2025-04-09 04:00", "Month": 4, "Day": 9, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.036839},
  {"Timestamp": "2025-04-09 05:00", "Month": 4, "Day": 9, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.031119},
  {"Timestamp": "2025-04-09 06:00", "Month": 4, "Day": 9, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.02374},
  {"Timestamp": "2025-04-09 07:00", "Month": 4, "Day": 9, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.027554},
  {"Timestamp": "2025-04-09 08:00", "Month": 4, "Day": 9, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.0337},
  {"Timestamp": "2025-04-09 09:00", "Month": 4, "Day": 9, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.036987},
  {"Timestamp": "2025-04-09 10:00", "Month": 4, "Day": 9, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.039101},
  {"Timestamp": "2025-04-09 11:00", "Month": 4, "Day": 9, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.040778},
  {"Timestamp": "2025-04-09 12:00", "Month": 4, "Day": 9, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.041188},
  {"Timestamp": "2025-04-09 13:00", "Month": 4, "Day": 9, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.039857},
  {"Timestamp": "2025-04-09 14:00", "Month": 4, "Day": 9, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.038615},
  {"Timestamp": "2025-04-09 15:00", "Month": 4, "Day": 9, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.04045},
  {"Timestamp": "2025-04-09 16:00", "Month": 4, "Day": 9, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.049185},
  {"Timestamp": "2025-04-09 17:00", "Month": 4, "Day": 9, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.081786},
  {"Timestamp": "2025-04-09 18:00", "Month": 4, "Day": 9, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.134995},
  {"Timestamp": "2025-04-09 19:00", "Month": 4, "Day": 9, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.175477},
  {"Timestamp": "2025-04-09 20:00", "Month": 4, "Day": 9, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.194243},
  {"Timestamp": "2025-04-09 21:00", "Month": 4, "Day": 9, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.199166},
  {"Timestamp": "2025-04-09 22:00", "Month": 4, "Day": 9, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.20109},
  {"Timestamp": "2025-04-09 23:00", "Month": 4, "Day": 9, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.203345},
  {"Timestamp": "2025-04-10 00:00", "Month": 4, "Day": 10, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.199301},
  {"Timestamp": "2025-04-10 01:00", "Month": 4, "Day": 10, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.191391},
  {"Timestamp": "2025-04-10 02:00", "Month": 4, "Day": 10, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.188259},
  {"Timestamp": "2025-04-10 03:00", "Month": 4, "Day": 10, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.189449},
  {"Timestamp": "2025-04-10 04:00", "Month": 4, "Day": 10, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.190208},
  {"Timestamp": "2025-04-10 05:00", "Month": 4, "Day": 10, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.171149},
  {"Timestamp": "2025-04-10 06:00", "Month": 4, "Day": 10, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.117935},
  {"Timestamp": "2025-04-10 07:00", "Month": 4, "Day": 10, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.113795},
  {"Timestamp": "2025-04-10 08:00", "Month": 4, "Day": 10, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.195212},
  {"Timestamp": "2025-04-10 09:00", "Month": 4, "Day": 10, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.267577},
  {"Timestamp": "2025-04-10 10:00", "Month": 4, "Day": 10, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.307938},
  {"Timestamp": "2025-04-10 11:00", "Month": 4, "Day": 10, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.343005},
  {"Timestamp": "2025-04-10 12:00", "Month": 4, "Day": 10, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.371014},
  {"Timestamp": "2025-04-10 13:00", "Month": 4, "Day": 10, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.387737},
  {"Timestamp": "2025-04-10 14:00", "Month": 4, "Day": 10, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.394323},
  {"Timestamp": "2025-04-10 15:00", "Month": 4, "Day": 10, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.39749},
  {"Timestamp": "2025-04-10 16:00", "Month": 4, "Day": 10, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.413487},
  {"Timestamp": "2025-04-10 17:00", "Month": 4, "Day": 10, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.45844},
  {"Timestamp": "2025-04-10 18:00", "Month": 4, "Day": 10, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.48991},
  {"Timestamp": "2025-04-10 19:00", "Month": 4, "Day": 10, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.495245},
  {"Timestamp": "2025-04-10 20:00", "Month": 4, "Day": 10, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.487566},
  {"Timestamp": "2025-04-10 21:00", "Month": 4, "Day": 10, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.477797},
  {"Timestamp": "2025-04-10 22:00", "Month": 4, "Day": 10, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.46805},
  {"Timestamp": "2025-04-10 23:00", "Month": 4, "Day": 10, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.443376},
  {"Timestamp": "2025-04-11 00:00", "Month": 4, "Day": 11, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.413225},
  {"Timestamp": "2025-04-11 01:00", "Month": 4, "Day": 11, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.375411},
  {"Timestamp": "2025-04-11 02:00", "Month": 4, "Day": 11, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.342048},
  {"Timestamp": "2025-04-11 03:00", "Month": 4, "Day": 11, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.329823},
  {"Timestamp": "2025-04-11 04:00", "Month": 4, "Day": 11, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.320193},
  {"Timestamp": "2025-04-11 05:00", "Month": 4, "Day": 11, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.297524},
  {"Timestamp": "2025-04-11 06:00", "Month": 4, "Day": 11, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.328699},
  {"Timestamp": "2025-04-11 07:00", "Month": 4, "Day": 11, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.413138},
  {"Timestamp": "2025-04-11 08:00", "Month": 4, "Day": 11, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.446838},
  {"Timestamp": "2025-04-11 09:00", "Month": 4, "Day": 11, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.473485},
  {"Timestamp": "2025-04-11 10:00", "Month": 4, "Day": 11, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.494468},
  {"Timestamp": "2025-04-11 11:00", "Month": 4, "Day": 11, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.500691},
  {"Timestamp": "2025-04-11 12:00", "Month": 4, "Day": 11, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.495173},
  {"Timestamp": "2025-04-11 13:00", "Month": 4, "Day": 11, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.47916},
  {"Timestamp": "2025-04-11 14:00", "Month": 4, "Day": 11, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.440406},
  {"Timestamp": "2025-04-11 15:00", "Month": 4, "Day": 11, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.361801},
  {"Timestamp": "2025-04-11 16:00", "Month": 4, "Day": 11, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.250664},
  {"Timestamp": "2025-04-11 17:00", "Month": 4, "Day": 11, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.183558},
  {"Timestamp": "2025-04-11 18:00", "Month": 4, "Day": 11, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.143636},
  {"Timestamp": "2025-04-11 19:00", "Month": 4, "Day": 11, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.11394},
  {"Timestamp": "2025-04-11 20:00", "Month": 4, "Day": 11, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.106828},
  {"Timestamp": "2025-04-11 21:00", "Month": 4, "Day": 11, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.116632},
  {"Timestamp": "2025-04-11 22:00", "Month": 4, "Day": 11, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.13925},
  {"Timestamp": "2025-04-11 23:00", "Month": 4, "Day": 11, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.16822},
  {"Timestamp": "2025-04-12 00:00", "Month": 4, "Day": 12, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.191768},
  {"Timestamp": "2025-04-12 01:00", "Month": 4, "Day": 12, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.20713},
  {"Timestamp": "2025-04-12 02:00", "Month": 4, "Day": 12, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.227436},
  {"Timestamp": "2025-04-12 03:00", "Month": 4, "Day": 12, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.253421},
  {"Timestamp": "2025-04-12 04:00", "Month": 4, "Day": 12, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.28533},
  {"Timestamp": "2025-04-12 05:00", "Month": 4, "Day": 12, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.294222},
  {"Timestamp": "2025-04-12 06:00", "Month": 4, "Day": 12, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.289026},
  {"Timestamp": "2025-04-12 07:00", "Month": 4, "Day": 12, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.316289},
  {"Timestamp": "2025-04-12 08:00", "Month": 4, "Day": 12, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.364308},
  {"Timestamp": "2025-04-12 09:00", "Month": 4, "Day": 12, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.417896},
  {"Timestamp": "2025-04-12 10:00", "Month": 4, "Day": 12, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.443115},
  {"Timestamp": "2025-04-12 11:00", "Month": 4, "Day": 12, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.436224},
  {"Timestamp": "2025-04-12 12:00", "Month": 4, "Day": 12, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.413053},
  {"Timestamp": "2025-04-12 13:00", "Month": 4, "Day": 12, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.379548},
  {"Timestamp": "2025-04-12 14:00", "Month": 4, "Day": 12, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.323671},
  {"Timestamp": "2025-04-12 15:00", "Month": 4, "Day": 12, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.274468},
  {"Timestamp": "2025-04-12 16:00", "Month": 4, "Day": 12, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.236896},
  {"Timestamp": "2025-04-12 17:00", "Month": 4, "Day": 12, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.222205},
  {"Timestamp": "2025-04-12 18:00", "Month": 4, "Day": 12, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.215468},
  {"Timestamp": "2025-04-12 19:00", "Month": 4, "Day": 12, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.207591},
  {"Timestamp": "2025-04-12 20:00", "Month": 4, "Day": 12, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.211411},
  {"Timestamp": "2025-04-12 21:00", "Month": 4, "Day": 12, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.220066},
  {"Timestamp": "2025-04-12 22:00", "Month": 4, "Day": 12, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.237546},
  {"Timestamp": "2025-04-12 23:00", "Month": 4, "Day": 12, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.260561},
  {"Timestamp": "2025-04-13 00:00", "Month": 4, "Day": 13, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.265341},
  {"Timestamp": "2025-04-13 01:00", "Month": 4, "Day": 13, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.261398},
  {"Timestamp": "2025-04-13 02:00", "Month": 4, "Day": 13, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.261312},
  {"Timestamp": "2025-04-13 03:00", "Month": 4, "Day": 13, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.274709},
  {"Timestamp": "2025-04-13 04:00", "Month": 4, "Day": 13, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.288302},
  {"Timestamp": "2025-04-13 05:00", "Month": 4, "Day": 13, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.295776},
  {"Timestamp": "2025-04-13 06:00", "Month": 4, "Day": 13, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.290806},
  {"Timestamp": "2025-04-13 07:00", "Month": 4, "Day": 13, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.337563},
  {"Timestamp": "2025-04-13 08:00", "Month": 4, "Day": 13, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.374489},
  {"Timestamp": "2025-04-13 09:00", "Month": 4, "Day": 13, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.366755},
  {"Timestamp": "2025-04-13 10:00", "Month": 4, "Day": 13, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.333929},
  {"Timestamp": "2025-04-13 11:00", "Month": 4, "Day": 13, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.29992},
  {"Timestamp": "2025-04-13 12:00", "Month": 4, "Day": 13, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.268862},
  {"Timestamp": "2025-04-13 13:00", "Month": 4, "Day": 13, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.238654},
  {"Timestamp": "2025-04-13 14:00", "Month": 4, "Day": 13, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.201483},
  {"Timestamp": "2025-04-13 15:00", "Month": 4, "Day": 13, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.15435},
  {"Timestamp": "2025-04-13 16:00", "Month": 4, "Day": 13, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.103342},
  {"Timestamp": "2025-04-13 17:00", "Month": 4, "Day": 13, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.082989},
  {"Timestamp": "2025-04-13 18:00", "Month": 4, "Day": 13, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.075228},
  {"Timestamp": "2025-04-13 19:00", "Month": 4, "Day": 13, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.066118},
  {"Timestamp": "2025-04-13 20:00", "Month": 4, "Day": 13, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.059253},
  {"Timestamp": "2025-04-13 21:00", "Month": 4, "Day": 13, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.057155},
  {"Timestamp": "2025-04-13 22:00", "Month": 4, "Day": 13, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.060819},
  {"Timestamp": "2025-04-13 23:00", "Month": 4, "Day": 13, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.068491},
  {"Timestamp": "2025-04-14 00:00", "Month": 4, "Day": 14, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.074172},
  {"Timestamp": "2025-04-14 01:00", "Month": 4, "Day": 14, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.072066},
  {"Timestamp": "2025-04-14 02:00", "Month": 4, "Day": 14, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.066598},
  {"Timestamp": "2025-04-14 03:00", "Month": 4, "Day": 14, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.060043},
  {"Timestamp": "2025-04-14 04:00", "Month": 4, "Day": 14, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.056237},
  {"Timestamp": "2025-04-14 05:00", "Month": 4, "Day": 14, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.051781},
  {"Timestamp": "2025-04-14 06:00", "Month": 4, "Day": 14, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.038152},
  {"Timestamp": "2025-04-14 07:00", "Month": 4, "Day": 14, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.037016},
  {"Timestamp": "2025-04-14 08:00", "Month": 4, "Day": 14, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.055575},
  {"Timestamp": "2025-04-14 09:00", "Month": 4, "Day": 14, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.070574},
  {"Timestamp": "2025-04-14 10:00", "Month": 4, "Day": 14, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.076191},
  {"Timestamp": "2025-04-14 11:00", "Month": 4, "Day": 14, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.079569},
  {"Timestamp": "2025-04-14 12:00", "Month": 4, "Day": 14, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.080866},
  {"Timestamp": "2025-04-14 13:00", "Month": 4, "Day": 14, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.082783},
  {"Timestamp": "2025-04-14 14:00", "Month": 4, "Day": 14, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.089801},
  {"Timestamp": "2025-04-14 15:00", "Month": 4, "Day": 14, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.098022},
  {"Timestamp": "2025-04-14 16:00", "Month": 4, "Day": 14, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.100801},
  {"Timestamp": "2025-04-14 17:00", "Month": 4, "Day": 14, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.114889},
  {"Timestamp": "2025-04-14 18:00", "Month": 4, "Day": 14, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.137961},
  {"Timestamp": "2025-04-14 19:00", "Month": 4, "Day": 14, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.138949},
  {"Timestamp": "2025-04-14 20:00", "Month": 4, "Day": 14, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.130469},
  {"Timestamp": "2025-04-14 21:00", "Month": 4, "Day": 14, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.124147},
  {"Timestamp": "2025-04-14 22:00", "Month": 4, "Day": 14, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.11971},
  {"Timestamp": "2025-04-14 23:00", "Month": 4, "Day": 14, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.115984},
  {"Timestamp": "2025-04-15 00:00", "Month": 4, "Day": 15, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.116554},
  {"Timestamp": "2025-04-15 01:00", "Month": 4, "Day": 15, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.119219},
  {"Timestamp": "2025-04-15 02:00", "Month": 4, "Day": 15, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.12461},
  {"Timestamp": "2025-04-15 03:00", "Month": 4, "Day": 15, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.129534},
  {"Timestamp": "2025-04-15 04:00", "Month": 4, "Day": 15, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.13482},
  {"Timestamp": "2025-04-15 05:00", "Month": 4, "Day": 15, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.130137},
  {"Timestamp": "2025-04-15 06:00", "Month": 4, "Day": 15, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.130195},
  {"Timestamp": "2025-04-15 07:00", "Month": 4, "Day": 15, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.15866},
  {"Timestamp": "2025-04-15 08:00", "Month": 4, "Day": 15, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.185926},
  {"Timestamp": "2025-04-15 09:00", "Month": 4, "Day": 15, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.202652},
  {"Timestamp": "2025-04-15 10:00", "Month": 4, "Day": 15, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.213965},
  {"Timestamp": "2025-04-15 11:00", "Month": 4, "Day": 15, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.220663},
  {"Timestamp": "2025-04-15 12:00", "Month": 4, "Day": 15, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.221882},
  {"Timestamp": "2025-04-15 13:00", "Month": 4, "Day": 15, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.222944},
  {"Timestamp": "2025-04-15 14:00", "Month": 4, "Day": 15, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.220767},
  {"Timestamp": "2025-04-15 15:00", "Month": 4, "Day": 15, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.2108},
  {"Timestamp": "2025-04-15 16:00", "Month": 4, "Day": 15, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.199829},
  {"Timestamp": "2025-04-15 17:00", "Month": 4, "Day": 15, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.203734},
  {"Timestamp": "2025-04-15 18:00", "Month": 4, "Day": 15, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.21322},
  {"Timestamp": "2025-04-15 19:00", "Month": 4, "Day": 15, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.198585},
  {"Timestamp": "2025-04-15 20:00", "Month": 4, "Day": 15, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.178539},
  {"Timestamp": "2025-04-15 21:00", "Month": 4, "Day": 15, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.165335},
  {"Timestamp": "2025-04-15 22:00", "Month": 4, "Day": 15, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.156588},
  {"Timestamp": "2025-04-15 23:00", "Month": 4, "Day": 15, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.150746},
  {"Timestamp": "2025-04-16 00:00", "Month": 4, "Day": 16, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.145822},
  {"Timestamp": "2025-04-16 01:00", "Month": 4, "Day": 16, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.143045},
  {"Timestamp": "2025-04-16 02:00", "Month": 4, "Day": 16, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.140181},
  {"Timestamp": "2025-04-16 03:00", "Month": 4, "Day": 16, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.137009},
  {"Timestamp": "2025-04-16 04:00", "Month": 4, "Day": 16, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.129329},
  {"Timestamp": "2025-04-16 05:00", "Month": 4, "Day": 16, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.110764},
  {"Timestamp": "2025-04-16 06:00", "Month": 4, "Day": 16, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.099803},
  {"Timestamp": "2025-04-16 07:00", "Month": 4, "Day": 16, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.104669},
  {"Timestamp": "2025-04-16 08:00", "Month": 4, "Day": 16, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.109372},
  {"Timestamp": "2025-04-16 09:00", "Month": 4, "Day": 16, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.107406},
  {"Timestamp": "2025-04-16 10:00", "Month": 4, "Day": 16, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.104192},
  {"Timestamp": "2025-04-16 11:00", "Month": 4, "Day": 16, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.1059},
  {"Timestamp": "2025-04-16 12:00", "Month": 4, "Day": 16, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.113534},
  {"Timestamp": "2025-04-16 13:00", "Month": 4, "Day": 16, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.124784},
  {"Timestamp": "2025-04-16 14:00", "Month": 4, "Day": 16, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.135124},
  {"Timestamp": "2025-04-16 15:00", "Month": 4, "Day": 16, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.136553},
  {"Timestamp": "2025-04-16 16:00", "Month": 4, "Day": 16, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.118337},
  {"Timestamp": "2025-04-16 17:00", "Month": 4, "Day": 16, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.114216},
  {"Timestamp": "2025-04-16 18:00", "Month": 4, "Day": 16, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.136068},
  {"Timestamp": "2025-04-16 19:00", "Month": 4, "Day": 16, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.142584},
  {"Timestamp": "2025-04-16 20:00", "Month": 4, "Day": 16, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.133809},
  {"Timestamp": "2025-04-16 21:00", "Month": 4, "Day": 16, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.127019},
  {"Timestamp": "2025-04-16 22:00", "Month": 4, "Day": 16, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.121076},
  {"Timestamp": "2025-04-16 23:00", "Month": 4, "Day": 16, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.113912},
  {"Timestamp": "2025-04-17 00:00", "Month": 4, "Day": 17, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.108087},
  {"Timestamp": "2025-04-17 01:00", "Month": 4, "Day": 17, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.099887},
  {"Timestamp": "2025-04-17 02:00", "Month": 4, "Day": 17, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.091811},
  {"Timestamp": "2025-04-17 03:00", "Month": 4, "Day": 17, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.083421},
  {"Timestamp": "2025-04-17 04:00", "Month": 4, "Day": 17, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.074726},
  {"Timestamp": "2025-04-17 05:00", "Month": 4, "Day": 17, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.067006},
  {"Timestamp": "2025-04-17 06:00", "Month": 4, "Day": 17, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.066938},
  {"Timestamp": "2025-04-17 07:00", "Month": 4, "Day": 17, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.082727},
  {"Timestamp": "2025-04-17 08:00", "Month": 4, "Day": 17, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.10838},
  {"Timestamp": "2025-04-17 09:00", "Month": 4, "Day": 17, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.130658},
  {"Timestamp": "2025-04-17 10:00", "Month": 4, "Day": 17, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.146388},
  {"Timestamp": "2025-04-17 11:00", "Month": 4, "Day": 17, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.15807},
  {"Timestamp": "2025-04-17 12:00", "Month": 4, "Day": 17, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.169194},
  {"Timestamp": "2025-04-17 13:00", "Month": 4, "Day": 17, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.183453},
  {"Timestamp": "2025-04-17 14:00", "Month": 4, "Day": 17, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.204045},
  {"Timestamp": "2025-04-17 15:00", "Month": 4, "Day": 17, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.229478},
  {"Timestamp": "2025-04-17 16:00", "Month": 4, "Day": 17, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.238604},
  {"Timestamp": "2025-04-17 17:00", "Month": 4, "Day": 17, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.236061},
  {"Timestamp": "2025-04-17 18:00", "Month": 4, "Day": 17, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.253762},
  {"Timestamp": "2025-04-17 19:00", "Month": 4, "Day": 17, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.249179},
  {"Timestamp": "2025-04-17 20:00", "Month": 4, "Day": 17, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.227874},
  {"Timestamp": "2025-04-17 21:00", "Month": 4, "Day": 17, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.210107},
  {"Timestamp": "2025-04-17 22:00", "Month": 4, "Day": 17, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.198444},
  {"Timestamp": "2025-04-17 23:00", "Month": 4, "Day": 17, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.189298},
  {"Timestamp": "2025-04-18 00:00", "Month": 4, "Day": 18, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.184865},
  {"Timestamp": "2025-04-18 01:00", "Month": 4, "Day": 18, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.183297},
  {"Timestamp": "2025-04-18 02:00", "Month": 4, "Day": 18, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.184963},
  {"Timestamp": "2025-04-18 03:00", "Month": 4, "Day": 18, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.182776},
  {"Timestamp": "2025-04-18 04:00", "Month": 4, "Day": 18, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.18202},
  {"Timestamp": "2025-04-18 05:00", "Month": 4, "Day": 18, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.169682},
  {"Timestamp": "2025-04-18 06:00", "Month": 4, "Day": 18, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.183391},
  {"Timestamp": "2025-04-18 07:00", "Month": 4, "Day": 18, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.228899},
  {"Timestamp": "2025-04-18 08:00", "Month": 4, "Day": 18, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.257563},
  {"Timestamp": "2025-04-18 09:00", "Month": 4, "Day": 18, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.263687},
  {"Timestamp": "2025-04-18 10:00", "Month": 4, "Day": 18, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.266082},
  {"Timestamp": "2025-04-18 11:00", "Month": 4, "Day": 18, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.27158},
  {"Timestamp": "2025-04-18 12:00", "Month": 4, "Day": 18, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.28054},
  {"Timestamp": "2025-04-18 13:00", "Month": 4, "Day": 18, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.291797},
  {"Timestamp": "2025-04-18 14:00", "Month": 4, "Day": 18, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.306543},
  {"Timestamp": "2025-04-18 15:00", "Month": 4, "Day": 18, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.316748},
  {"Timestamp": "2025-04-18 16:00", "Month": 4, "Day": 18, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.303056},
  {"Timestamp": "2025-04-18 17:00", "Month": 4, "Day": 18, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.292511},
  {"Timestamp": "2025-04-18 18:00", "Month": 4, "Day": 18, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.324495},
  {"Timestamp": "2025-04-18 19:00", "Month": 4, "Day": 18, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.32481},
  {"Timestamp": "2025-04-18 20:00", "Month": 4, "Day": 18, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.297605},
  {"Timestamp": "2025-04-18 21:00", "Month": 4, "Day": 18, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.278817},
  {"Timestamp": "2025-04-18 22:00", "Month": 4, "Day": 18, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.266251},
  {"Timestamp": "2025-04-18 23:00", "Month": 4, "Day": 18, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.25509},
  {"Timestamp": "2025-04-19 00:00", "Month": 4, "Day": 19, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.239941},
  {"Timestamp": "2025-04-19 01:00", "Month": 4, "Day": 19, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.228312},
  {"Timestamp": "2025-04-19 02:00", "Month": 4, "Day": 19, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.224079},
  {"Timestamp": "2025-04-19 03:00", "Month": 4, "Day": 19, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.223529},
  {"Timestamp": "2025-04-19 04:00", "Month": 4, "Day": 19, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.222167},
  {"Timestamp": "2025-04-19 05:00", "Month": 4, "Day": 19, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.190831},
  {"Timestamp": "2025-04-19 06:00", "Month": 4, "Day": 19, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.207984},
  {"Timestamp": "2025-04-19 07:00", "Month": 4, "Day": 19, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.302827},
  {"Timestamp": "2025-04-19 08:00", "Month": 4, "Day": 19, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.373722},
  {"Timestamp": "2025-04-19 09:00", "Month": 4, "Day": 19, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.408018},
  {"Timestamp": "2025-04-19 10:00", "Month": 4, "Day": 19, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.41807},
  {"Timestamp": "2025-04-19 11:00", "Month": 4, "Day": 19, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.423295},
  {"Timestamp": "2025-04-19 12:00", "Month": 4, "Day": 19, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.432018},
  {"Timestamp": "2025-04-19 13:00", "Month": 4, "Day": 19, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.445361},
  {"Timestamp": "2025-04-19 14:00", "Month": 4, "Day": 19, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.458412},
  {"Timestamp": "2025-04-19 15:00", "Month": 4, "Day": 19, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.457601},
  {"Timestamp": "2025-04-19 16:00", "Month": 4, "Day": 19, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.420053},
  {"Timestamp": "2025-04-19 17:00", "Month": 4, "Day": 19, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.376013},
  {"Timestamp": "2025-04-19 18:00", "Month": 4, "Day": 19, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.363189},
  {"Timestamp": "2025-04-19 19:00", "Month": 4, "Day": 19, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.346061},
  {"Timestamp": "2025-04-19 20:00", "Month": 4, "Day": 19, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.314227},
  {"Timestamp": "2025-04-19 21:00", "Month": 4, "Day": 19, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.290104},
  {"Timestamp": "2025-04-19 22:00", "Month": 4, "Day": 19, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.276397},
  {"Timestamp": "2025-04-19 23:00", "Month": 4, "Day": 19, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.272324},
  {"Timestamp": "2025-04-20 00:00", "Month": 4, "Day": 20, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.256029},
  {"Timestamp": "2025-04-20 01:00", "Month": 4, "Day": 20, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.242986},
  {"Timestamp": "2025-04-20 02:00", "Month": 4, "Day": 20, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.228872},
  {"Timestamp": "2025-04-20 03:00", "Month": 4, "Day": 20, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.210803},
  {"Timestamp": "2025-04-20 04:00", "Month": 4, "Day": 20, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.193355},
  {"Timestamp": "2025-04-20 05:00", "Month": 4, "Day": 20, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.173996},
  {"Timestamp": "2025-04-20 06:00", "Month": 4, "Day": 20, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.185695},
  {"Timestamp": "2025-04-20 07:00", "Month": 4, "Day": 20, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.205152},
  {"Timestamp": "2025-04-20 08:00", "Month": 4, "Day": 20, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.220565},
  {"Timestamp": "2025-04-20 09:00", "Month": 4, "Day": 20, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.234833},
  {"Timestamp": "2025-04-20 10:00", "Month": 4, "Day": 20, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.251039},
  {"Timestamp": "2025-04-20 11:00", "Month": 4, "Day": 20, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.271293},
  {"Timestamp": "2025-04-20 12:00", "Month": 4, "Day": 20, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.295099},
  {"Timestamp": "2025-04-20 13:00", "Month": 4, "Day": 20, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.314952},
  {"Timestamp": "2025-04-20 14:00", "Month": 4, "Day": 20, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.326106},
  {"Timestamp": "2025-04-20 15:00", "Month": 4, "Day": 20, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.308686},
  {"Timestamp": "2025-04-20 16:00", "Month": 4, "Day": 20, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.262617},
  {"Timestamp": "2025-04-20 17:00", "Month": 4, "Day": 20, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.256267},
  {"Timestamp": "2025-04-20 18:00", "Month": 4, "Day": 20, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.300076},
  {"Timestamp": "2025-04-20 19:00", "Month": 4, "Day": 20, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.308299},
  {"Timestamp": "2025-04-20 20:00", "Month": 4, "Day": 20, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.295027},
  {"Timestamp": "2025-04-20 21:00", "Month": 4, "Day": 20, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.295718},
  {"Timestamp": "2025-04-20 22:00", "Month": 4, "Day": 20, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.299131},
  {"Timestamp": "2025-04-20 23:00", "Month": 4, "Day": 20, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.300344},
  {"Timestamp": "2025-04-21 00:00", "Month": 4, "Day": 21, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.291674},
  {"Timestamp": "2025-04-21 01:00", "Month": 4, "Day": 21, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.27011},
  {"Timestamp": "2025-04-21 02:00", "Month": 4, "Day": 21, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.247723},
  {"Timestamp": "2025-04-21 03:00", "Month": 4, "Day": 21, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.226398},
  {"Timestamp": "2025-04-21 04:00", "Month": 4, "Day": 21, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.208576},
  {"Timestamp": "2025-04-21 05:00", "Month": 4, "Day": 21, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.18505},
  {"Timestamp": "2025-04-21 06:00", "Month": 4, "Day": 21, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.176641},
  {"Timestamp": "2025-04-21 07:00", "Month": 4, "Day": 21, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.201358},
  {"Timestamp": "2025-04-21 08:00", "Month": 4, "Day": 21, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.243759},
  {"Timestamp": "2025-04-21 09:00", "Month": 4, "Day": 21, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.29353},
  {"Timestamp": "2025-04-21 10:00", "Month": 4, "Day": 21, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.337924},
  {"Timestamp": "2025-04-21 11:00", "Month": 4, "Day": 21, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.370962},
  {"Timestamp": "2025-04-21 12:00", "Month": 4, "Day": 21, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.385539},
  {"Timestamp": "2025-04-21 13:00", "Month": 4, "Day": 21, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.385181},
  {"Timestamp": "2025-04-21 14:00", "Month": 4, "Day": 21, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.373556},
  {"Timestamp": "2025-04-21 15:00", "Month": 4, "Day": 21, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.345735},
  {"Timestamp": "2025-04-21 16:00", "Month": 4, "Day": 21, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.311083},
  {"Timestamp": "2025-04-21 17:00", "Month": 4, "Day": 21, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.32763},
  {"Timestamp": "2025-04-21 18:00", "Month": 4, "Day": 21, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.358243},
  {"Timestamp": "2025-04-21 19:00", "Month": 4, "Day": 21, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.360573},
  {"Timestamp": "2025-04-21 20:00", "Month": 4, "Day": 21, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.352005},
  {"Timestamp": "2025-04-21 21:00", "Month": 4, "Day": 21, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.33938},
  {"Timestamp": "2025-04-21 22:00", "Month": 4, "Day": 21, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.329557},
  {"Timestamp": "2025-04-21 23:00", "Month": 4, "Day": 21, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.313225},
  {"Timestamp": "2025-04-22 00:00", "Month": 4, "Day": 22, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.29276},
  {"Timestamp": "2025-04-22 01:00", "Month": 4, "Day": 22, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.272189},
  {"Timestamp": "2025-04-22 02:00", "Month": 4, "Day": 22, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.260029},
  {"Timestamp": "2025-04-22 03:00", "Month": 4, "Day": 22, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.248971},
  {"Timestamp": "2025-04-22 04:00", "Month": 4, "Day": 22, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.226221},
  {"Timestamp": "2025-04-22 05:00", "Month": 4, "Day": 22, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.16339},
  {"Timestamp": "2025-04-22 06:00", "Month": 4, "Day": 22, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.114001},
  {"Timestamp": "2025-04-22 07:00", "Month": 4, "Day": 22, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.109956},
  {"Timestamp": "2025-04-22 08:00", "Month": 4, "Day": 22, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.151133},
  {"Timestamp": "2025-04-22 09:00", "Month": 4, "Day": 22, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.170817},
  {"Timestamp": "2025-04-22 10:00", "Month": 4, "Day": 22, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.181842},
  {"Timestamp": "2025-04-22 11:00", "Month": 4, "Day": 22, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.192818},
  {"Timestamp": "2025-04-22 12:00", "Month": 4, "Day": 22, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.205878},
  {"Timestamp": "2025-04-22 13:00", "Month": 4, "Day": 22, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.220169},
  {"Timestamp": "2025-04-22 14:00", "Month": 4, "Day": 22, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.224478},
  {"Timestamp": "2025-04-22 15:00", "Month": 4, "Day": 22, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.209109},
  {"Timestamp": "2025-04-22 16:00", "Month": 4, "Day": 22, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.206289},
  {"Timestamp": "2025-04-22 17:00", "Month": 4, "Day": 22, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.240387},
  {"Timestamp": "2025-04-22 18:00", "Month": 4, "Day": 22, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.272996},
  {"Timestamp": "2025-04-22 19:00", "Month": 4, "Day": 22, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.275186},
  {"Timestamp": "2025-04-22 20:00", "Month": 4, "Day": 22, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.262463},
  {"Timestamp": "2025-04-22 21:00", "Month": 4, "Day": 22, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.242094},
  {"Timestamp": "2025-04-22 22:00", "Month": 4, "Day": 22, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.213004},
  {"Timestamp": "2025-04-22 23:00", "Month": 4, "Day": 22, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.187596},
  {"Timestamp": "2025-04-23 00:00", "Month": 4, "Day": 23, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.165194},
  {"Timestamp": "2025-04-23 01:00", "Month": 4, "Day": 23, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.147461},
  {"Timestamp": "2025-04-23 02:00", "Month": 4, "Day": 23, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.136654},
  {"Timestamp": "2025-04-23 03:00", "Month": 4, "Day": 23, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.131009},
  {"Timestamp": "2025-04-23 04:00", "Month": 4, "Day": 23, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.126731},
  {"Timestamp": "2025-04-23 05:00", "Month": 4, "Day": 23, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.10395},
  {"Timestamp": "2025-04-23 06:00", "Month": 4, "Day": 23, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.086673},
  {"Timestamp": "2025-04-23 07:00", "Month": 4, "Day": 23, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.093995},
  {"Timestamp": "2025-04-23 08:00", "Month": 4, "Day": 23, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.105733},
  {"Timestamp": "2025-04-23 09:00", "Month": 4, "Day": 23, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.112006},
  {"Timestamp": "2025-04-23 10:00", "Month": 4, "Day": 23, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.11415},
  {"Timestamp": "2025-04-23 11:00", "Month": 4, "Day": 23, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.112756},
  {"Timestamp": "2025-04-23 12:00", "Month": 4, "Day": 23, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.10767},
  {"Timestamp": "2025-04-23 13:00", "Month": 4, "Day": 23, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.100738},
  {"Timestamp": "2025-04-23 14:00", "Month": 4, "Day": 23, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.091361},
  {"Timestamp": "2025-04-23 15:00", "Month": 4, "Day": 23, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.081482},
  {"Timestamp": "2025-04-23 16:00", "Month": 4, "Day": 23, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.083461},
  {"Timestamp": "2025-04-23 17:00", "Month": 4, "Day": 23, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.117807},
  {"Timestamp": "2025-04-23 18:00", "Month": 4, "Day": 23, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.179336},
  {"Timestamp": "2025-04-23 19:00", "Month": 4, "Day": 23, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.242708},
  {"Timestamp": "2025-04-23 20:00", "Month": 4, "Day": 23, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.285162},
  {"Timestamp": "2025-04-23 21:00", "Month": 4, "Day": 23, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.300612},
  {"Timestamp": "2025-04-23 22:00", "Month": 4, "Day": 23, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.302464},
  {"Timestamp": "2025-04-23 23:00", "Month": 4, "Day": 23, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.301079},
  {"Timestamp": "2025-04-24 00:00", "Month": 4, "Day": 24, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.289435},
  {"Timestamp": "2025-04-24 01:00", "Month": 4, "Day": 24, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.278987},
  {"Timestamp": "2025-04-24 02:00", "Month": 4, "Day": 24, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.272556},
  {"Timestamp": "2025-04-24 03:00", "Month": 4, "Day": 24, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.278509},
  {"Timestamp": "2025-04-24 04:00", "Month": 4, "Day": 24, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.285492},
  {"Timestamp": "2025-04-24 05:00", "Month": 4, "Day": 24, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.276503},
  {"Timestamp": "2025-04-24 06:00", "Month": 4, "Day": 24, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.318606},
  {"Timestamp": "2025-04-24 07:00", "Month": 4, "Day": 24, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.364399},
  {"Timestamp": "2025-04-24 08:00", "Month": 4, "Day": 24, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.377298},
  {"Timestamp": "2025-04-24 09:00", "Month": 4, "Day": 24, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.384681},
  {"Timestamp": "2025-04-24 10:00", "Month": 4, "Day": 24, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.397214},
  {"Timestamp": "2025-04-24 11:00", "Month": 4, "Day": 24, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.417628},
  {"Timestamp": "2025-04-24 12:00", "Month": 4, "Day": 24, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.438055},
  {"Timestamp": "2025-04-24 13:00", "Month": 4, "Day": 24, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.452048},
  {"Timestamp": "2025-04-24 14:00", "Month": 4, "Day": 24, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.456536},
  {"Timestamp": "2025-04-24 15:00", "Month": 4, "Day": 24, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.446001},
  {"Timestamp": "2025-04-24 16:00", "Month": 4, "Day": 24, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.417209},
  {"Timestamp": "2025-04-24 17:00", "Month": 4, "Day": 24, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.376714},
  {"Timestamp": "2025-04-24 18:00", "Month": 4, "Day": 24, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.354331},
  {"Timestamp": "2025-04-24 19:00", "Month": 4, "Day": 24, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.333096},
  {"Timestamp": "2025-04-24 20:00", "Month": 4, "Day": 24, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.309195},
  {"Timestamp": "2025-04-24 21:00", "Month": 4, "Day": 24, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.291584},
  {"Timestamp": "2025-04-24 22:00", "Month": 4, "Day": 24, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.284681},
  {"Timestamp": "2025-04-24 23:00", "Month": 4, "Day": 24, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.27806},
  {"Timestamp": "2025-04-25 00:00", "Month": 4, "Day": 25, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.268672},
  {"Timestamp": "2025-04-25 01:00", "Month": 4, "Day": 25, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.261972},
  {"Timestamp": "2025-04-25 02:00", "Month": 4, "Day": 25, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.256799},
  {"Timestamp": "2025-04-25 03:00", "Month": 4, "Day": 25, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.243065},
  {"Timestamp": "2025-04-25 04:00", "Month": 4, "Day": 25, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.226298},
  {"Timestamp": "2025-04-25 05:00", "Month": 4, "Day": 25, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.205948},
  {"Timestamp": "2025-04-25 06:00", "Month": 4, "Day": 25, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.250028},
  {"Timestamp": "2025-04-25 07:00", "Month": 4, "Day": 25, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.284906},
  {"Timestamp": "2025-04-25 08:00", "Month": 4, "Day": 25, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.305119},
  {"Timestamp": "2025-04-25 09:00", "Month": 4, "Day": 25, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.32763},
  {"Timestamp": "2025-04-25 10:00", "Month": 4, "Day": 25, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.350373},
  {"Timestamp": "2025-04-25 11:00", "Month": 4, "Day": 25, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.370195},
  {"Timestamp": "2025-04-25 12:00", "Month": 4, "Day": 25, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.384664},
  {"Timestamp": "2025-04-25 13:00", "Month": 4, "Day": 25, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.395496},
  {"Timestamp": "2025-04-25 14:00", "Month": 4, "Day": 25, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.398959},
  {"Timestamp": "2025-04-25 15:00", "Month": 4, "Day": 25, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.390703},
  {"Timestamp": "2025-04-25 16:00", "Month": 4, "Day": 25, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.359333},
  {"Timestamp": "2025-04-25 17:00", "Month": 4, "Day": 25, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.296902},
  {"Timestamp": "2025-04-25 18:00", "Month": 4, "Day": 25, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.270048},
  {"Timestamp": "2025-04-25 19:00", "Month": 4, "Day": 25, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.258112},
  {"Timestamp": "2025-04-25 20:00", "Month": 4, "Day": 25, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.249844},
  {"Timestamp": "2025-04-25 21:00", "Month": 4, "Day": 25, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.249013},
  {"Timestamp": "2025-04-25 22:00", "Month": 4, "Day": 25, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.250544},
  {"Timestamp": "2025-04-25 23:00", "Month": 4, "Day": 25, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.24712},
  {"Timestamp": "2025-04-26 00:00", "Month": 4, "Day": 26, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.237127},
  {"Timestamp": "2025-04-26 01:00", "Month": 4, "Day": 26, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.224582},
  {"Timestamp": "2025-04-26 02:00", "Month": 4, "Day": 26, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.211967},
  {"Timestamp": "2025-04-26 03:00", "Month": 4, "Day": 26, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.195704},
  {"Timestamp": "2025-04-26 04:00", "Month": 4, "Day": 26, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.177621},
  {"Timestamp": "2025-04-26 05:00", "Month": 4, "Day": 26, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.155885},
  {"Timestamp": "2025-04-26 06:00", "Month": 4, "Day": 26, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.169455},
  {"Timestamp": "2025-04-26 07:00", "Month": 4, "Day": 26, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.192875},
  {"Timestamp": "2025-04-26 08:00", "Month": 4, "Day": 26, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.194358},
  {"Timestamp": "2025-04-26 09:00", "Month": 4, "Day": 26, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.192748},
  {"Timestamp": "2025-04-26 10:00", "Month": 4, "Day": 26, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.191184},
  {"Timestamp": "2025-04-26 11:00", "Month": 4, "Day": 26, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.189243},
  {"Timestamp": "2025-04-26 12:00", "Month": 4, "Day": 26, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.184862},
  {"Timestamp": "2025-04-26 13:00", "Month": 4, "Day": 26, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.180044},
  {"Timestamp": "2025-04-26 14:00", "Month": 4, "Day": 26, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.173692},
  {"Timestamp": "2025-04-26 15:00", "Month": 4, "Day": 26, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.164149},
  {"Timestamp": "2025-04-26 16:00", "Month": 4, "Day": 26, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.145673},
  {"Timestamp": "2025-04-26 17:00", "Month": 4, "Day": 26, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.125818},
  {"Timestamp": "2025-04-26 18:00", "Month": 4, "Day": 26, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.129034},
  {"Timestamp": "2025-04-26 19:00", "Month": 4, "Day": 26, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.137292},
  {"Timestamp": "2025-04-26 20:00", "Month": 4, "Day": 26, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.139789},
  {"Timestamp": "2025-04-26 21:00", "Month": 4, "Day": 26, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.13691},
  {"Timestamp": "2025-04-26 22:00", "Month": 4, "Day": 26, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.130583},
  {"Timestamp": "2025-04-26 23:00", "Month": 4, "Day": 26, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.123545},
  {"Timestamp": "2025-04-27 00:00", "Month": 4, "Day": 27, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.116328},
  {"Timestamp": "2025-04-27 01:00", "Month": 4, "Day": 27, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.111292},
  {"Timestamp": "2025-04-27 02:00", "Month": 4, "Day": 27, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.10877},
  {"Timestamp": "2025-04-27 03:00", "Month": 4, "Day": 27, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.103405},
  {"Timestamp": "2025-04-27 04:00", "Month": 4, "Day": 27, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.091364},
  {"Timestamp": "2025-04-27 05:00", "Month": 4, "Day": 27, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.062771},
  {"Timestamp": "2025-04-27 06:00", "Month": 4, "Day": 27, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.057462},
  {"Timestamp": "2025-04-27 07:00", "Month": 4, "Day": 27, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.057022},
  {"Timestamp": "2025-04-27 08:00", "Month": 4, "Day": 27, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.053178},
  {"Timestamp": "2025-04-27 09:00", "Month": 4, "Day": 27, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.05174},
  {"Timestamp": "2025-04-27 10:00", "Month": 4, "Day": 27, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.054434},
  {"Timestamp": "2025-04-27 11:00", "Month": 4, "Day": 27, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.05892},
  {"Timestamp": "2025-04-27 12:00", "Month": 4, "Day": 27, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.062194},
  {"Timestamp": "2025-04-27 13:00", "Month": 4, "Day": 27, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.060491},
  {"Timestamp": "2025-04-27 14:00", "Month": 4, "Day": 27, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.052651},
  {"Timestamp": "2025-04-27 15:00", "Month": 4, "Day": 27, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.042653},
  {"Timestamp": "2025-04-27 16:00", "Month": 4, "Day": 27, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.033934},
  {"Timestamp": "2025-04-27 17:00", "Month": 4, "Day": 27, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.035201},
  {"Timestamp": "2025-04-27 18:00", "Month": 4, "Day": 27, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.055746},
  {"Timestamp": "2025-04-27 19:00", "Month": 4, "Day": 27, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.081446},
  {"Timestamp": "2025-04-27 20:00", "Month": 4, "Day": 27, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.101612},
  {"Timestamp": "2025-04-27 21:00", "Month": 4, "Day": 27, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.118473},
  {"Timestamp": "2025-04-27 22:00", "Month": 4, "Day": 27, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.134979},
  {"Timestamp": "2025-04-27 23:00", "Month": 4, "Day": 27, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.146871},
  {"Timestamp": "2025-04-28 00:00", "Month": 4, "Day": 28, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.15004},
  {"Timestamp": "2025-04-28 01:00", "Month": 4, "Day": 28, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.150106},
  {"Timestamp": "2025-04-28 02:00", "Month": 4, "Day": 28, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.152758},
  {"Timestamp": "2025-04-28 03:00", "Month": 4, "Day": 28, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.155281},
  {"Timestamp": "2025-04-28 04:00", "Month": 4, "Day": 28, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.151828},
  {"Timestamp": "2025-04-28 05:00", "Month": 4, "Day": 28, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.114091},
  {"Timestamp": "2025-04-28 06:00", "Month": 4, "Day": 28, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.085813},
  {"Timestamp": "2025-04-28 07:00", "Month": 4, "Day": 28, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.10563},
  {"Timestamp": "2025-04-28 08:00", "Month": 4, "Day": 28, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.124496},
  {"Timestamp": "2025-04-28 09:00", "Month": 4, "Day": 28, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.134056},
  {"Timestamp": "2025-04-28 10:00", "Month": 4, "Day": 28, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.1388},
  {"Timestamp": "2025-04-28 11:00", "Month": 4, "Day": 28, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.140583},
  {"Timestamp": "2025-04-28 12:00", "Month": 4, "Day": 28, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.140628},
  {"Timestamp": "2025-04-28 13:00", "Month": 4, "Day": 28, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.137095},
  {"Timestamp": "2025-04-28 14:00", "Month": 4, "Day": 28, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.131883},
  {"Timestamp": "2025-04-28 15:00", "Month": 4, "Day": 28, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.126322},
  {"Timestamp": "2025-04-28 16:00", "Month": 4, "Day": 28, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.120286},
  {"Timestamp": "2025-04-28 17:00", "Month": 4, "Day": 28, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.137454},
  {"Timestamp": "2025-04-28 18:00", "Month": 4, "Day": 28, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.173242},
  {"Timestamp": "2025-04-28 19:00", "Month": 4, "Day": 28, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.191731},
  {"Timestamp": "2025-04-28 20:00", "Month": 4, "Day": 28, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.192527},
  {"Timestamp": "2025-04-28 21:00", "Month": 4, "Day": 28, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.192394},
  {"Timestamp": "2025-04-28 22:00", "Month": 4, "Day": 28, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.193262},
  {"Timestamp": "2025-04-28 23:00", "Month": 4, "Day": 28, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.190109},
  {"Timestamp": "2025-04-29 00:00", "Month": 4, "Day": 29, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.181863},
  {"Timestamp": "2025-04-29 01:00", "Month": 4, "Day": 29, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.169763},
  {"Timestamp": "2025-04-29 02:00", "Month": 4, "Day": 29, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.163861},
  {"Timestamp": "2025-04-29 03:00", "Month": 4, "Day": 29, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.159471},
  {"Timestamp": "2025-04-29 04:00", "Month": 4, "Day": 29, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.154743},
  {"Timestamp": "2025-04-29 05:00", "Month": 4, "Day": 29, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.12928},
  {"Timestamp": "2025-04-29 06:00", "Month": 4, "Day": 29, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.123762},
  {"Timestamp": "2025-04-29 07:00", "Month": 4, "Day": 29, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.148338},
  {"Timestamp": "2025-04-29 08:00", "Month": 4, "Day": 29, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.16092},
  {"Timestamp": "2025-04-29 09:00", "Month": 4, "Day": 29, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.162503},
  {"Timestamp": "2025-04-29 10:00", "Month": 4, "Day": 29, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.165723},
  {"Timestamp": "2025-04-29 11:00", "Month": 4, "Day": 29, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.174014},
  {"Timestamp": "2025-04-29 12:00", "Month": 4, "Day": 29, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.18606},
  {"Timestamp": "2025-04-29 13:00", "Month": 4, "Day": 29, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.198785},
  {"Timestamp": "2025-04-29 14:00", "Month": 4, "Day": 29, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.205763},
  {"Timestamp": "2025-04-29 15:00", "Month": 4, "Day": 29, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.20545},
  {"Timestamp": "2025-04-29 16:00", "Month": 4, "Day": 29, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.193143},
  {"Timestamp": "2025-04-29 17:00", "Month": 4, "Day": 29, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.182101},
  {"Timestamp": "2025-04-29 18:00", "Month": 4, "Day": 29, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.193629},
  {"Timestamp": "2025-04-29 19:00", "Month": 4, "Day": 29, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.205031},
  {"Timestamp": "2025-04-29 20:00", "Month": 4, "Day": 29, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.202023},
  {"Timestamp": "2025-04-29 21:00", "Month": 4, "Day": 29, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.198255},
  {"Timestamp": "2025-04-29 22:00", "Month": 4, "Day": 29, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.192694},
  {"Timestamp": "2025-04-29 23:00", "Month": 4, "Day": 29, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.183266},
  {"Timestamp": "2025-04-30 00:00", "Month": 4, "Day": 30, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.171052},
  {"Timestamp": "2025-04-30 01:00", "Month": 4, "Day": 30, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.157445},
  {"Timestamp": "2025-04-30 02:00", "Month": 4, "Day": 30, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.142403},
  {"Timestamp": "2025-04-30 03:00", "Month": 4, "Day": 30, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.121058},
  {"Timestamp": "2025-04-30 04:00", "Month": 4, "Day": 30, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.093},
  {"Timestamp": "2025-04-30 05:00", "Month": 4, "Day": 30, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.059934},
  {"Timestamp": "2025-04-30 06:00", "Month": 4, "Day": 30, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.055747},
  {"Timestamp": "2025-04-30 07:00", "Month": 4, "Day": 30, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.056746},
  {"Timestamp": "2025-04-30 08:00", "Month": 4, "Day": 30, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.059151},
  {"Timestamp": "2025-04-30 09:00", "Month": 4, "Day": 30, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.060691},
  {"Timestamp": "2025-04-30 10:00", "Month": 4, "Day": 30, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.061736},
  {"Timestamp": "2025-04-30 11:00", "Month": 4, "Day": 30, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.062244},
  {"Timestamp": "2025-04-30 12:00", "Month": 4, "Day": 30, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.061296},
  {"Timestamp": "2025-04-30 13:00", "Month": 4, "Day": 30, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.058165},
  {"Timestamp": "2025-04-30 14:00", "Month": 4, "Day": 30, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.054073},
  {"Timestamp": "2025-04-30 15:00", "Month": 4, "Day": 30, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.051689},
  {"Timestamp": "2025-04-30 16:00", "Month": 4, "Day": 30, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.05072},
  {"Timestamp": "2025-04-30 17:00", "Month": 4, "Day": 30, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.0603},
  {"Timestamp": "2025-04-30 18:00", "Month": 4, "Day": 30, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.091289},
  {"Timestamp": "2025-04-30 19:00", "Month": 4, "Day": 30, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.120302},
  {"Timestamp": "2025-04-30 20:00", "Month": 4, "Day": 30, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.136324},
  {"Timestamp": "2025-04-30 21:00", "Month": 4, "Day": 30, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.152761},
  {"Timestamp": "2025-04-30 22:00", "Month": 4, "Day": 30, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.175427},
  {"Timestamp": "2025-04-30 23:00", "Month": 4, "Day": 30, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.195845},
  {"Timestamp": "2025-05-01 00:00", "Month": 5, "Day": 1, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.206544},
  {"Timestamp": "2025-05-01 01:00", "Month": 5, "Day": 1, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.205744},
  {"Timestamp": "2025-05-01 02:00", "Month": 5, "Day": 1, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.198845},
  {"Timestamp": "2025-05-01 03:00", "Month": 5, "Day": 1, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.18863},
  {"Timestamp": "2025-05-01 04:00", "Month": 5, "Day": 1, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.165621},
  {"Timestamp": "2025-05-01 05:00", "Month": 5, "Day": 1, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.097821},
  {"Timestamp": "2025-05-01 06:00", "Month": 5, "Day": 1, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.054641},
  {"Timestamp": "2025-05-01 07:00", "Month": 5, "Day": 1, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.068779},
  {"Timestamp": "2025-05-01 08:00", "Month": 5, "Day": 1, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.077622},
  {"Timestamp": "2025-05-01 09:00", "Month": 5, "Day": 1, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.068112},
  {"Timestamp": "2025-05-01 10:00", "Month": 5, "Day": 1, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.05497},
  {"Timestamp": "2025-05-01 11:00", "Month": 5, "Day": 1, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.045325},
  {"Timestamp": "2025-05-01 12:00", "Month": 5, "Day": 1, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.039559},
  {"Timestamp": "2025-05-01 13:00", "Month": 5, "Day": 1, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.038048},
  {"Timestamp": "2025-05-01 14:00", "Month": 5, "Day": 1, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.039342},
  {"Timestamp": "2025-05-01 15:00", "Month": 5, "Day": 1, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.042194},
  {"Timestamp": "2025-05-01 16:00", "Month": 5, "Day": 1, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.045039},
  {"Timestamp": "2025-05-01 17:00", "Month": 5, "Day": 1, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.055551},
  {"Timestamp": "2025-05-01 18:00", "Month": 5, "Day": 1, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.079778},
  {"Timestamp": "2025-05-01 19:00", "Month": 5, "Day": 1, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.108136},
  {"Timestamp": "2025-05-01 20:00", "Month": 5, "Day": 1, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.13208},
  {"Timestamp": "2025-05-01 21:00", "Month": 5, "Day": 1, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.153375},
  {"Timestamp": "2025-05-01 22:00", "Month": 5, "Day": 1, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.175785},
  {"Timestamp": "2025-05-01 23:00", "Month": 5, "Day": 1, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.194455},
  {"Timestamp": "2025-05-02 00:00", "Month": 5, "Day": 2, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.210977},
  {"Timestamp": "2025-05-02 01:00", "Month": 5, "Day": 2, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.222668},
  {"Timestamp": "2025-05-02 02:00", "Month": 5, "Day": 2, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.22491},
  {"Timestamp": "2025-05-02 03:00", "Month": 5, "Day": 2, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.215994},
  {"Timestamp": "2025-05-02 04:00", "Month": 5, "Day": 2, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.196428},
  {"Timestamp": "2025-05-02 05:00", "Month": 5, "Day": 2, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.17771},
  {"Timestamp": "2025-05-02 06:00", "Month": 5, "Day": 2, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.20034},
  {"Timestamp": "2025-05-02 07:00", "Month": 5, "Day": 2, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.195912},
  {"Timestamp": "2025-05-02 08:00", "Month": 5, "Day": 2, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.181734},
  {"Timestamp": "2025-05-02 09:00", "Month": 5, "Day": 2, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.172519},
  {"Timestamp": "2025-05-02 10:00", "Month": 5, "Day": 2, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.170552},
  {"Timestamp": "2025-05-02 11:00", "Month": 5, "Day": 2, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.170927},
  {"Timestamp": "2025-05-02 12:00", "Month": 5, "Day": 2, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.167961},
  {"Timestamp": "2025-05-02 13:00", "Month": 5, "Day": 2, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.164453},
  {"Timestamp": "2025-05-02 14:00", "Month": 5, "Day": 2, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.163966},
  {"Timestamp": "2025-05-02 15:00", "Month": 5, "Day": 2, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.170442},
  {"Timestamp": "2025-05-02 16:00", "Month": 5, "Day": 2, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.175175},
  {"Timestamp": "2025-05-02 17:00", "Month": 5, "Day": 2, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.165325},
  {"Timestamp": "2025-05-02 18:00", "Month": 5, "Day": 2, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.172338},
  {"Timestamp": "2025-05-02 19:00", "Month": 5, "Day": 2, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.185322},
  {"Timestamp": "2025-05-02 20:00", "Month": 5, "Day": 2, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.178465},
  {"Timestamp": "2025-05-02 21:00", "Month": 5, "Day": 2, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.165565},
  {"Timestamp": "2025-05-02 22:00", "Month": 5, "Day": 2, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.15392},
  {"Timestamp": "2025-05-02 23:00", "Month": 5, "Day": 2, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.14366},
  {"Timestamp": "2025-05-03 00:00", "Month": 5, "Day": 3, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.133824},
  {"Timestamp": "2025-05-03 01:00", "Month": 5, "Day": 3, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.123824},
  {"Timestamp": "2025-05-03 02:00", "Month": 5, "Day": 3, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.112279},
  {"Timestamp": "2025-05-03 03:00", "Month": 5, "Day": 3, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.097136},
  {"Timestamp": "2025-05-03 04:00", "Month": 5, "Day": 3, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.075878},
  {"Timestamp": "2025-05-03 05:00", "Month": 5, "Day": 3, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.040559},
  {"Timestamp": "2025-05-03 06:00", "Month": 5, "Day": 3, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.036204},
  {"Timestamp": "2025-05-03 07:00", "Month": 5, "Day": 3, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.031618},
  {"Timestamp": "2025-05-03 08:00", "Month": 5, "Day": 3, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.025419},
  {"Timestamp": "2025-05-03 09:00", "Month": 5, "Day": 3, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.022194},
  {"Timestamp": "2025-05-03 10:00", "Month": 5, "Day": 3, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.020817},
  {"Timestamp": "2025-05-03 11:00", "Month": 5, "Day": 3, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.021722},
  {"Timestamp": "2025-05-03 12:00", "Month": 5, "Day": 3, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.024784},
  {"Timestamp": "2025-05-03 13:00", "Month": 5, "Day": 3, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.028891},
  {"Timestamp": "2025-05-03 14:00", "Month": 5, "Day": 3, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.033105},
  {"Timestamp": "2025-05-03 15:00", "Month": 5, "Day": 3, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.037999},
  {"Timestamp": "2025-05-03 16:00", "Month": 5, "Day": 3, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.044658},
  {"Timestamp": "2025-05-03 17:00", "Month": 5, "Day": 3, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.059912},
  {"Timestamp": "2025-05-03 18:00", "Month": 5, "Day": 3, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.098862},
  {"Timestamp": "2025-05-03 19:00", "Month": 5, "Day": 3, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.138072},
  {"Timestamp": "2025-05-03 20:00", "Month": 5, "Day": 3, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.154147},
  {"Timestamp": "2025-05-03 21:00", "Month": 5, "Day": 3, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.157493},
  {"Timestamp": "2025-05-03 22:00", "Month": 5, "Day": 3, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.157257},
  {"Timestamp": "2025-05-03 23:00", "Month": 5, "Day": 3, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.155423},
  {"Timestamp": "2025-05-04 00:00", "Month": 5, "Day": 4, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.152087},
  {"Timestamp": "2025-05-04 01:00", "Month": 5, "Day": 4, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.146166},
  {"Timestamp": "2025-05-04 02:00", "Month": 5, "Day": 4, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.137122},
  {"Timestamp": "2025-05-04 03:00", "Month": 5, "Day": 4, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.12617},
  {"Timestamp": "2025-05-04 04:00", "Month": 5, "Day": 4, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.10929},
  {"Timestamp": "2025-05-04 05:00", "Month": 5, "Day": 4, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.062235},
  {"Timestamp": "2025-05-04 06:00", "Month": 5, "Day": 4, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.036639},
  {"Timestamp": "2025-05-04 07:00", "Month": 5, "Day": 4, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.045749},
  {"Timestamp": "2025-05-04 08:00", "Month": 5, "Day": 4, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.061661},
  {"Timestamp": "2025-05-04 09:00", "Month": 5, "Day": 4, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.066447},
  {"Timestamp": "2025-05-04 10:00", "Month": 5, "Day": 4, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.06746},
  {"Timestamp": "2025-05-04 11:00", "Month": 5, "Day": 4, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.070039},
  {"Timestamp": "2025-05-04 12:00", "Month": 5, "Day": 4, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.075691},
  {"Timestamp": "2025-05-04 13:00", "Month": 5, "Day": 4, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.085014},
  {"Timestamp": "2025-05-04 14:00", "Month": 5, "Day": 4, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.09689},
  {"Timestamp": "2025-05-04 15:00", "Month": 5, "Day": 4, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.112188},
  {"Timestamp": "2025-05-04 16:00", "Month": 5, "Day": 4, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.131139},
  {"Timestamp": "2025-05-04 17:00", "Month": 5, "Day": 4, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.178255},
  {"Timestamp": "2025-05-04 18:00", "Month": 5, "Day": 4, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.23994},
  {"Timestamp": "2025-05-04 19:00", "Month": 5, "Day": 4, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.274791},
  {"Timestamp": "2025-05-04 20:00", "Month": 5, "Day": 4, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.28173},
  {"Timestamp": "2025-05-04 21:00", "Month": 5, "Day": 4, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.276224},
  {"Timestamp": "2025-05-04 22:00", "Month": 5, "Day": 4, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.268903},
  {"Timestamp": "2025-05-04 23:00", "Month": 5, "Day": 4, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.267087},
  {"Timestamp": "2025-05-05 00:00", "Month": 5, "Day": 5, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.266226},
  {"Timestamp": "2025-05-05 01:00", "Month": 5, "Day": 5, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.267558},
  {"Timestamp": "2025-05-05 02:00", "Month": 5, "Day": 5, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.268283},
  {"Timestamp": "2025-05-05 03:00", "Month": 5, "Day": 5, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.269018},
  {"Timestamp": "2025-05-05 04:00", "Month": 5, "Day": 5, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.261358},
  {"Timestamp": "2025-05-05 05:00", "Month": 5, "Day": 5, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.227908},
  {"Timestamp": "2025-05-05 06:00", "Month": 5, "Day": 5, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.237577},
  {"Timestamp": "2025-05-05 07:00", "Month": 5, "Day": 5, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.254144},
  {"Timestamp": "2025-05-05 08:00", "Month": 5, "Day": 5, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.26772},
  {"Timestamp": "2025-05-05 09:00", "Month": 5, "Day": 5, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.274515},
  {"Timestamp": "2025-05-05 10:00", "Month": 5, "Day": 5, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.271563},
  {"Timestamp": "2025-05-05 11:00", "Month": 5, "Day": 5, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.258265},
  {"Timestamp": "2025-05-05 12:00", "Month": 5, "Day": 5, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.239969},
  {"Timestamp": "2025-05-05 13:00", "Month": 5, "Day": 5, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.221747},
  {"Timestamp": "2025-05-05 14:00", "Month": 5, "Day": 5, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.207846},
  {"Timestamp": "2025-05-05 15:00", "Month": 5, "Day": 5, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.210524},
  {"Timestamp": "2025-05-05 16:00", "Month": 5, "Day": 5, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.224931},
  {"Timestamp": "2025-05-05 17:00", "Month": 5, "Day": 5, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.238015},
  {"Timestamp": "2025-05-05 18:00", "Month": 5, "Day": 5, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.244532},
  {"Timestamp": "2025-05-05 19:00", "Month": 5, "Day": 5, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.242546},
  {"Timestamp": "2025-05-05 20:00", "Month": 5, "Day": 5, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.235221},
  {"Timestamp": "2025-05-05 21:00", "Month": 5, "Day": 5, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.22374},
  {"Timestamp": "2025-05-05 22:00", "Month": 5, "Day": 5, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.209949},
  {"Timestamp": "2025-05-05 23:00", "Month": 5, "Day": 5, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.193555},
  {"Timestamp": "2025-05-06 00:00", "Month": 5, "Day": 6, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.17447},
  {"Timestamp": "2025-05-06 01:00", "Month": 5, "Day": 6, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.157056},
  {"Timestamp": "2025-05-06 02:00", "Month": 5, "Day": 6, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.140949},
  {"Timestamp": "2025-05-06 03:00", "Month": 5, "Day": 6, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.130584},
  {"Timestamp": "2025-05-06 04:00", "Month": 5, "Day": 6, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.113783},
  {"Timestamp": "2025-05-06 05:00", "Month": 5, "Day": 6, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.09372},
  {"Timestamp": "2025-05-06 06:00", "Month": 5, "Day": 6, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.085861},
  {"Timestamp": "2025-05-06 07:00", "Month": 5, "Day": 6, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.084258},
  {"Timestamp": "2025-05-06 08:00", "Month": 5, "Day": 6, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.082311},
  {"Timestamp": "2025-05-06 09:00", "Month": 5, "Day": 6, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.077422},
  {"Timestamp": "2025-05-06 10:00", "Month": 5, "Day": 6, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.074271},
  {"Timestamp": "2025-05-06 11:00", "Month": 5, "Day": 6, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.076237},
  {"Timestamp": "2025-05-06 12:00", "Month": 5, "Day": 6, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.082088},
  {"Timestamp": "2025-05-06 13:00", "Month": 5, "Day": 6, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.090346},
  {"Timestamp": "2025-05-06 14:00", "Month": 5, "Day": 6, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.098202},
  {"Timestamp": "2025-05-06 15:00", "Month": 5, "Day": 6, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.106837},
  {"Timestamp": "2025-05-06 16:00", "Month": 5, "Day": 6, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.115687},
  {"Timestamp": "2025-05-06 17:00", "Month": 5, "Day": 6, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.1247},
  {"Timestamp": "2025-05-06 18:00", "Month": 5, "Day": 6, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.145674},
  {"Timestamp": "2025-05-06 19:00", "Month": 5, "Day": 6, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.170538},
  {"Timestamp": "2025-05-06 20:00", "Month": 5, "Day": 6, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.178614},
  {"Timestamp": "2025-05-06 21:00", "Month": 5, "Day": 6, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.179815},
  {"Timestamp": "2025-05-06 22:00", "Month": 5, "Day": 6, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.178136},
  {"Timestamp": "2025-05-06 23:00", "Month": 5, "Day": 6, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.180125},
  {"Timestamp": "2025-05-07 00:00", "Month": 5, "Day": 7, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.180797},
  {"Timestamp": "2025-05-07 01:00", "Month": 5, "Day": 7, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.179918},
  {"Timestamp": "2025-05-07 02:00", "Month": 5, "Day": 7, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.180347},
  {"Timestamp": "2025-05-07 03:00", "Month": 5, "Day": 7, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.177908},
  {"Timestamp": "2025-05-07 04:00", "Month": 5, "Day": 7, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.166362},
  {"Timestamp": "2025-05-07 05:00", "Month": 5, "Day": 7, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.168063},
  {"Timestamp": "2025-05-07 06:00", "Month": 5, "Day": 7, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.194706},
  {"Timestamp": "2025-05-07 07:00", "Month": 5, "Day": 7, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.218032},
  {"Timestamp": "2025-05-07 08:00", "Month": 5, "Day": 7, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.229518},
  {"Timestamp": "2025-05-07 09:00", "Month": 5, "Day": 7, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.228212},
  {"Timestamp": "2025-05-07 10:00", "Month": 5, "Day": 7, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.223171},
  {"Timestamp": "2025-05-07 11:00", "Month": 5, "Day": 7, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.216939},
  {"Timestamp": "2025-05-07 12:00", "Month": 5, "Day": 7, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.210124},
  {"Timestamp": "2025-05-07 13:00", "Month": 5, "Day": 7, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.203466},
  {"Timestamp": "2025-05-07 14:00", "Month": 5, "Day": 7, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.200186},
  {"Timestamp": "2025-05-07 15:00", "Month": 5, "Day": 7, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.201923},
  {"Timestamp": "2025-05-07 16:00", "Month": 5, "Day": 7, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.200792},
  {"Timestamp": "2025-05-07 17:00", "Month": 5, "Day": 7, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.196753},
  {"Timestamp": "2025-05-07 18:00", "Month": 5, "Day": 7, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.230847},
  {"Timestamp": "2025-05-07 19:00", "Month": 5, "Day": 7, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.265587},
  {"Timestamp": "2025-05-07 20:00", "Month": 5, "Day": 7, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.260066},
  {"Timestamp": "2025-05-07 21:00", "Month": 5, "Day": 7, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.238123},
  {"Timestamp": "2025-05-07 22:00", "Month": 5, "Day": 7, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.226599},
  {"Timestamp": "2025-05-07 23:00", "Month": 5, "Day": 7, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.218047},
  {"Timestamp": "2025-05-08 00:00", "Month": 5, "Day": 8, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.207641},
  {"Timestamp": "2025-05-08 01:00", "Month": 5, "Day": 8, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.198676},
  {"Timestamp": "2025-05-08 02:00", "Month": 5, "Day": 8, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.189389},
  {"Timestamp": "2025-05-08 03:00", "Month": 5, "Day": 8, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.176188},
  {"Timestamp": "2025-05-08 04:00", "Month": 5, "Day": 8, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.155228},
  {"Timestamp": "2025-05-08 05:00", "Month": 5, "Day": 8, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.141657},
  {"Timestamp": "2025-05-08 06:00", "Month": 5, "Day": 8, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.189281},
  {"Timestamp": "2025-05-08 07:00", "Month": 5, "Day": 8, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.215594},
  {"Timestamp": "2025-05-08 08:00", "Month": 5, "Day": 8, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.230455},
  {"Timestamp": "2025-05-08 09:00", "Month": 5, "Day": 8, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.235141},
  {"Timestamp": "2025-05-08 10:00", "Month": 5, "Day": 8, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.232335},
  {"Timestamp": "2025-05-08 11:00", "Month": 5, "Day": 8, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.224992},
  {"Timestamp": "2025-05-08 12:00", "Month": 5, "Day": 8, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.214383},
  {"Timestamp": "2025-05-08 13:00", "Month": 5, "Day": 8, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.202895},
  {"Timestamp": "2025-05-08 14:00", "Month": 5, "Day": 8, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.192794},
  {"Timestamp": "2025-05-08 15:00", "Month": 5, "Day": 8, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.186587},
  {"Timestamp": "2025-05-08 16:00", "Month": 5, "Day": 8, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.173868},
  {"Timestamp": "2025-05-08 17:00", "Month": 5, "Day": 8, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.183777},
  {"Timestamp": "2025-05-08 18:00", "Month": 5, "Day": 8, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.244031},
  {"Timestamp": "2025-05-08 19:00", "Month": 5, "Day": 8, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.290281},
  {"Timestamp": "2025-05-08 20:00", "Month": 5, "Day": 8, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.289981},
  {"Timestamp": "2025-05-08 21:00", "Month": 5, "Day": 8, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.279561},
  {"Timestamp": "2025-05-08 22:00", "Month": 5, "Day": 8, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.269301},
  {"Timestamp": "2025-05-08 23:00", "Month": 5, "Day": 8, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.259582},
  {"Timestamp": "2025-05-09 00:00", "Month": 5, "Day": 9, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.253953},
  {"Timestamp": "2025-05-09 01:00", "Month": 5, "Day": 9, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.248001},
  {"Timestamp": "2025-05-09 02:00", "Month": 5, "Day": 9, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.24316},
  {"Timestamp": "2025-05-09 03:00", "Month": 5, "Day": 9, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.238408},
  {"Timestamp": "2025-05-09 04:00", "Month": 5, "Day": 9, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.2069},
  {"Timestamp": "2025-05-09 05:00", "Month": 5, "Day": 9, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.156886},
  {"Timestamp": "2025-05-09 06:00", "Month": 5, "Day": 9, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.191256},
  {"Timestamp": "2025-05-09 07:00", "Month": 5, "Day": 9, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.238073},
  {"Timestamp": "2025-05-09 08:00", "Month": 5, "Day": 9, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.27021},
  {"Timestamp": "2025-05-09 09:00", "Month": 5, "Day": 9, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.301676},
  {"Timestamp": "2025-05-09 10:00", "Month": 5, "Day": 9, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.322264},
  {"Timestamp": "2025-05-09 11:00", "Month": 5, "Day": 9, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.325959},
  {"Timestamp": "2025-05-09 12:00", "Month": 5, "Day": 9, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.317228},
  {"Timestamp": "2025-05-09 13:00", "Month": 5, "Day": 9, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.304576},
  {"Timestamp": "2025-05-09 14:00", "Month": 5, "Day": 9, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.292226},
  {"Timestamp": "2025-05-09 15:00", "Month": 5, "Day": 9, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.280771},
  {"Timestamp": "2025-05-09 16:00", "Month": 5, "Day": 9, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.261633},
  {"Timestamp": "2025-05-09 17:00", "Month": 5, "Day": 9, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.263353},
  {"Timestamp": "2025-05-09 18:00", "Month": 5, "Day": 9, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.295671},
  {"Timestamp": "2025-05-09 19:00", "Month": 5, "Day": 9, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.313066},
  {"Timestamp": "2025-05-09 20:00", "Month": 5, "Day": 9, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.309707},
  {"Timestamp": "2025-05-09 21:00", "Month": 5, "Day": 9, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.30152},
  {"Timestamp": "2025-05-09 22:00", "Month": 5, "Day": 9, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.280349},
  {"Timestamp": "2025-05-09 23:00", "Month": 5, "Day": 9, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.266101},
  {"Timestamp": "2025-05-10 00:00", "Month": 5, "Day": 10, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.25616},
  {"Timestamp": "2025-05-10 01:00", "Month": 5, "Day": 10, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.246368},
  {"Timestamp": "2025-05-10 02:00", "Month": 5, "Day": 10, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.229621},
  {"Timestamp": "2025-05-10 03:00", "Month": 5, "Day": 10, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.211107},
  {"Timestamp": "2025-05-10 04:00", "Month": 5, "Day": 10, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.175676},
  {"Timestamp": "2025-05-10 05:00", "Month": 5, "Day": 10, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.134781},
  {"Timestamp": "2025-05-10 06:00", "Month": 5, "Day": 10, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.154026},
  {"Timestamp": "2025-05-10 07:00", "Month": 5, "Day": 10, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.172851},
  {"Timestamp": "2025-05-10 08:00", "Month": 5, "Day": 10, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.173262},
  {"Timestamp": "2025-05-10 09:00", "Month": 5, "Day": 10, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.1683},
  {"Timestamp": "2025-05-10 10:00", "Month": 5, "Day": 10, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.161128},
  {"Timestamp": "2025-05-10 11:00", "Month": 5, "Day": 10, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.148657},
  {"Timestamp": "2025-05-10 12:00", "Month": 5, "Day": 10, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.132271},
  {"Timestamp": "2025-05-10 13:00", "Month": 5, "Day": 10, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.11452},
  {"Timestamp": "2025-05-10 14:00", "Month": 5, "Day": 10, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.09722},
  {"Timestamp": "2025-05-10 15:00", "Month": 5, "Day": 10, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.076317},
  {"Timestamp": "2025-05-10 16:00", "Month": 5, "Day": 10, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.057054},
  {"Timestamp": "2025-05-10 17:00", "Month": 5, "Day": 10, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.051284},
  {"Timestamp": "2025-05-10 18:00", "Month": 5, "Day": 10, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.054609},
  {"Timestamp": "2025-05-10 19:00", "Month": 5, "Day": 10, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.05643},
  {"Timestamp": "2025-05-10 20:00", "Month": 5, "Day": 10, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.054585},
  {"Timestamp": "2025-05-10 21:00", "Month": 5, "Day": 10, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.053235},
  {"Timestamp": "2025-05-10 22:00", "Month": 5, "Day": 10, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.052905},
  {"Timestamp": "2025-05-10 23:00", "Month": 5, "Day": 10, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.053999},
  {"Timestamp": "2025-05-11 00:00", "Month": 5, "Day": 11, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.055613},
  {"Timestamp": "2025-05-11 01:00", "Month": 5, "Day": 11, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.059004},
  {"Timestamp": "2025-05-11 02:00", "Month": 5, "Day": 11, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.063262},
  {"Timestamp": "2025-05-11 03:00", "Month": 5, "Day": 11, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.065723},
  {"Timestamp": "2025-05-11 04:00", "Month": 5, "Day": 11, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.057422},
  {"Timestamp": "2025-05-11 05:00", "Month": 5, "Day": 11, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.040066},
  {"Timestamp": "2025-05-11 06:00", "Month": 5, "Day": 11, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.039286},
  {"Timestamp": "2025-05-11 07:00", "Month": 5, "Day": 11, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.05203},
  {"Timestamp": "2025-05-11 08:00", "Month": 5, "Day": 11, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.062048},
  {"Timestamp": "2025-05-11 09:00", "Month": 5, "Day": 11, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.069409},
  {"Timestamp": "2025-05-11 10:00", "Month": 5, "Day": 11, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.075299},
  {"Timestamp": "2025-05-11 11:00", "Month": 5, "Day": 11, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.078486},
  {"Timestamp": "2025-05-11 12:00", "Month": 5, "Day": 11, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.079945},
  {"Timestamp": "2025-05-11 13:00", "Month": 5, "Day": 11, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.081811},
  {"Timestamp": "2025-05-11 14:00", "Month": 5, "Day": 11, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.084195},
  {"Timestamp": "2025-05-11 15:00", "Month": 5, "Day": 11, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.085932},
  {"Timestamp": "2025-05-11 16:00", "Month": 5, "Day": 11, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.085766},
  {"Timestamp": "2025-05-11 17:00", "Month": 5, "Day": 11, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.110044},
  {"Timestamp": "2025-05-11 18:00", "Month": 5, "Day": 11, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.155069},
  {"Timestamp": "2025-05-11 19:00", "Month": 5, "Day": 11, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.188468},
  {"Timestamp": "2025-05-11 20:00", "Month": 5, "Day": 11, "Hour": 20, "Season": "Spring", "CO2_Intensity": 370.0, "Price": 123.97, "Wind_Capacity_Factor": 0.195987},
  {"Timestamp": "2025-05-11 21:00", "Month": 5, "Day": 11, "Hour": 21, "Season": "Spring", "CO2_Intensity": 387.7, "Price": 100.53, "Wind_Capacity_Factor": 0.192028},
  {"Timestamp": "2025-05-11 22:00", "Month": 5, "Day": 11, "Hour": 22, "Season": "Spring", "CO2_Intensity": 399.8, "Price": 75.0, "Wind_Capacity_Factor": 0.182966},
  {"Timestamp": "2025-05-11 23:00", "Month": 5, "Day": 11, "Hour": 23, "Season": "Spring", "CO2_Intensity": 404.5, "Price": 56.71, "Wind_Capacity_Factor": 0.169283},
  {"Timestamp": "2025-05-12 00:00", "Month": 5, "Day": 12, "Hour": 0, "Season": "Spring", "CO2_Intensity": 400.0, "Price": 55.0, "Wind_Capacity_Factor": 0.15725},
  {"Timestamp": "2025-05-12 01:00", "Month": 5, "Day": 12, "Hour": 1, "Season": "Spring", "CO2_Intensity": 408.8, "Price": 46.0, "Wind_Capacity_Factor": 0.150077},
  {"Timestamp": "2025-05-12 02:00", "Month": 5, "Day": 12, "Hour": 2, "Season": "Spring", "CO2_Intensity": 410.0, "Price": 46.0, "Wind_Capacity_Factor": 0.14736},
  {"Timestamp": "2025-05-12 03:00", "Month": 5, "Day": 12, "Hour": 3, "Season": "Spring", "CO2_Intensity": 401.6, "Price": 46.0, "Wind_Capacity_Factor": 0.146487},
  {"Timestamp": "2025-05-12 04:00", "Month": 5, "Day": 12, "Hour": 4, "Season": "Spring", "CO2_Intensity": 390.0, "Price": 46.0, "Wind_Capacity_Factor": 0.125636},
  {"Timestamp": "2025-05-12 05:00", "Month": 5, "Day": 12, "Hour": 5, "Season": "Spring", "CO2_Intensity": 381.3, "Price": 62.07, "Wind_Capacity_Factor": 0.085888},
  {"Timestamp": "2025-05-12 06:00", "Month": 5, "Day": 12, "Hour": 6, "Season": "Spring", "CO2_Intensity": 371.3, "Price": 83.7, "Wind_Capacity_Factor": 0.074823},
  {"Timestamp": "2025-05-12 07:00", "Month": 5, "Day": 12, "Hour": 7, "Season": "Spring", "CO2_Intensity": 353.1, "Price": 103.48, "Wind_Capacity_Factor": 0.102377},
  {"Timestamp": "2025-05-12 08:00", "Month": 5, "Day": 12, "Hour": 8, "Season": "Spring", "CO2_Intensity": 320.0, "Price": 115.0, "Wind_Capacity_Factor": 0.146939},
  {"Timestamp": "2025-05-12 09:00", "Month": 5, "Day": 12, "Hour": 9, "Season": "Spring", "CO2_Intensity": 270.1, "Price": 113.49, "Wind_Capacity_Factor": 0.176795},
  {"Timestamp": "2025-05-12 10:00", "Month": 5, "Day": 12, "Hour": 10, "Season": "Spring", "CO2_Intensity": 221.7, "Price": 100.69, "Wind_Capacity_Factor": 0.191261},
  {"Timestamp": "2025-05-12 11:00", "Month": 5, "Day": 12, "Hour": 11, "Season": "Spring", "CO2_Intensity": 198.0, "Price": 80.0, "Wind_Capacity_Factor": 0.201543},
  {"Timestamp": "2025-05-12 12:00", "Month": 5, "Day": 12, "Hour": 12, "Season": "Spring", "CO2_Intensity": 210.0, "Price": 56.36, "Wind_Capacity_Factor": 0.209656},
  {"Timestamp": "2025-05-12 13:00", "Month": 5, "Day": 12, "Hour": 13, "Season": "Spring", "CO2_Intensity": 227.8, "Price": 46.0, "Wind_Capacity_Factor": 0.215531},
  {"Timestamp": "2025-05-12 14:00", "Month": 5, "Day": 12, "Hour": 14, "Season": "Spring", "CO2_Intensity": 244.4, "Price": 46.0, "Wind_Capacity_Factor": 0.219967},
  {"Timestamp": "2025-05-12 15:00", "Month": 5, "Day": 12, "Hour": 15, "Season": "Spring", "CO2_Intensity": 261.2, "Price": 60.36, "Wind_Capacity_Factor": 0.218748},
  {"Timestamp": "2025-05-12 16:00", "Month": 5, "Day": 12, "Hour": 16, "Season": "Spring", "CO2_Intensity": 280.0, "Price": 85.0, "Wind_Capacity_Factor": 0.188362},
  {"Timestamp": "2025-05-12 17:00", "Month": 5, "Day": 12, "Hour": 17, "Season": "Spring", "CO2_Intensity": 301.7, "Price": 110.62, "Wind_Capacity_Factor": 0.189854},
  {"Timestamp": "2025-05-12 18:00", "Month": 5, "Day": 12, "Hour": 18, "Season": "Spring", "CO2_Intensity": 325.2, "Price": 130.05, "Wind_Capacity_Factor": 0.239926},
  {"Timestamp": "2025-05-12 19:00", "Month": 5, "Day": 12, "Hour": 19, "Season": "Spring", "CO2_Intensity": 348.6, "Price": 136.0, "Wind_Capacity_Factor": 0.278058},
  {"Timesxœ¼M¯­ÇQ…çü
Ëã£şªşÈ4Á ÃÈ
x`;JœBüwºï–`ã³×ê;XI&W‰í<y÷ûvÕÓU]ıËw?şñÛß~ómI%~“â7¹|SÒoSúöñÍ·ÿøóO¿üçş/cÿùo¿û¯ı§\öÿşç¿üiÿ¹¤ıçùş»?ÿüÓùüËÿôÃOÿqş¶ßıSùı?üôË÷?ıù‡_ÎßTGz;í?ÿé‡?|ÿåRßÖØÿÁ¿ığÓ¿ÿşwßıñ»?ì¿ğ÷÷İ~ùùüƒÓ[é³æö?¿ùæ›ÿşö_øñû?ÿò	f¾ÃÌ·˜s¼ÄLé-*Ål±b*Ìr‡Yn1×z›€9âËÃ}YrË¡ ëd½„l©½@F™Qæµú¨”²~“È‹YÿŸòö½léı{âIæ±VáOr3’·o_Ê–æ»_»uÁØëJC1’WoßÈ–ß?GÉud…H^H@¼ó[ÿÄ6Ò*Š±]1¶ëû+c)S?Ç¸bŒë52¿U`ìå-Ñ•<ÍRÆRı
²_Ç›÷³¾qÆcñe|3+ÆqËõ-¿6õ­MúsçZ¦\!çå¼¥,"wVKd„
6r]A®KÈ²Ó‹w2ïG¹øB^jQ/e¾6ù6Úì8ü«ô¢sÌ^Sí
ó2ŞÜœ¼æ»Ÿ|&¹R¶)Ÿå]ÀÉ·§|ˆ8;½¨RÖ6C­•ù.æäÛ ³W¾¯‹İe.ytòmÔ)­½µ¯‚\9TdÌwQ'ß†Òó[Á°“Ôï]VÈ°“ïÂN¾;e¾+§Z,Ëş·ü¾ïâN¾<éÃ2´?¥^8f­ú¿<ù>òÄ»_<×ılƒ‡´L…yzòmìÙËÊ»¼2W™Ÿ¯\U€dù¹OÀsÏ+Ô«É1}[ı4/mÇ%ày¯^Y­˜LÀÒ'ài&±b6*àíağ´Z¹mTÀÑ%àiöÄw®õo@tùwšµWî;
80º<Í¨“Ù
80º<¹
8
80ú¼E«<©lTÀÒ&àut‘a4*àÀèğÔ³ÈÎõo€´ùwê3/¹B’$ }şú^€ÔÇÍü×qŸ§X=«‡Éü1]ş½ßÊ.å]¼ñéwê=ñl²QûFH—}§>zWQ‘Ù7Bºìû@&ùsß…Ÿ}oÊ’ÕRÉì)]öz™ú÷¾:FûŞ˜eJÌ»°c´ï4¶‹ÉŸü.ğøì;íO|©…ˆÙ7fç>ûŞs‰­şFí1}öb®\‡Ù7bºì;µÂ¾µo„´Ùwª;Õ Aå;~ù®#Ä–PPùF›|×%\'¨|¢M¾[]M>Fò>£M¾ÛŒÎß òŒ6ùn+5¾ø•o`ôÉwİ*Ìò ò>ùNYÿØ$F£|·¼ô“$iPúì;jÂÔ¾Òiß=ËˆÙ7.äFû[3¹êµoÄ´U¿Ó~)$ä]Ä1V¿ËÎŒÕ{Éü)mÕïV’Ø9êßi«~÷<…æõo„ôU¿Çl2Ucş”¶ê÷ÌCÔkƒú7B«ß«®)Ÿå]à1úw);óm‚ ş˜6ÿŞŸÛlê7gş	º±ı|Çñ®~sæßˆil?Ö‹Z1™#¦­ı¼Í5¹õo„´ù÷¦‘lt*àıağÒFı¾
80º|àY¤é80º¼ÔÂ;5p`tx©u;’b$É0º|§ôúu$© Ú¼´Õ
_É;p€t	x™1¯~w*àÀèğ2çòI’<(m^Vï"pw*à éğz¨/‡	8.ä>ßO$¹;pÄt	ø^&SU‹9p„´	xmm‰*}§”.¯mÉ—ò.âØô{GçB;Õo„´éwM#)ï‚M¿kä¾T†Áô!}ú]K¢ëªSıFLŸ~×”šhåïT¿Ó§ßkLùb2ıÆìÜ¨ß«eq¯SıFL£~ÏÈ%æ¥ëØô{´1Tgú>ı¹İT¿ÇÃ¯ß£Q\T¿Ñ¦ß§cQ2’Wmú½_H±ï;¨~£O¿S×¿5I†€Ñvü{Í‹o†äBÀèóï´Fá•§Aı mş³Š=«Aış;ó•¯$I„€Òçßm‹ü¹I>ÿ.5ºØÊÔ¿q%÷ùw)+-.ƒú7bºü»”^+ß¼Ô¿Òæß¥œ~Eyslş]ÎìOjàé2ğ’bé—ò.êà«&1©gPGJ[|ÌªÖJ&àÈh¬÷4†Ä¼‹;ÎÓß]ÕÔ¿‘Òwø{¥,Êßƒú7¦çÆÃßsö$1ïóğ÷hU¿Ô¿Óvø;dqgPÿFHßáïº†H.'õïù°ûw.cˆ‘\“ú70Ú¦¯å™D64©£múZ]?GòF£­}Eš&õo`´5 ÷™š|$FcúLbœÔ¿ÒÖ€Şf£'õo`46 GJ¢:©¥±=åÉ7ø'õo€46 ï[4MOêß¸’;ïOıâÌ¿Óvü;Æ˜<ñÔ¿Òxş»Ñ†3©#¥í ø(jFÜ¤ş¶à³ÑI0©#¤Í¿wü®2Ÿdş”6ÿN=ô£¼‹;NÏUœÖ™Ô¿‘Òèß­_`ŞE§€ïÈ£(™€c~n,€§$¶\&õo¤4ú÷ÚY“Ä¼”›è¢×nRÿFHŸ÷TDª±¨¯‡ß¿Û¬]2’·mş]åÕEımş]K3(õo`´?/½7^ŠXÔ¿ÑVÿN9kF’	£Ï¿cfÜmõo€´ùwì%’¯ã‹ú70ı{3¤õo ô??#ÃxJ¹¨¤qüyn¹©œù7®ä>ÿÎy,ùí0ÿFLÛğ²EGBŞEçøóÒ2ßO]Ô¿‘Òw ¼ªc‹ú7BÚ€G_bvê¢şÆàbgzQûFFßñïQDûÚ¢öÎãß]_]T¿Óxü»ÅÓ›ÕoÄ´é÷iÊå±EõÓsŸ~×Ô“3½¨#¦³ÿ<¦èZÔ¿ÓÖŞs'òõo„4ÿÎ©Ñ³$æß_^Fwÿù~”üğÆa|ıV"£­ÿ<¯Âû?ãëWmıç9
6}_¿‘Èhë?O+wÉø:BF›X<§<Œ¯3!d´ùwÓäëT!mıçiUıa¿Î„ÑØŞoä?¯ó „ôµŸÏ6xà|!¤±ı|Æ^%Ñïw¹±ı|¬ı…+ÌËxck?QùtäypŒíç£.Ş~~(ïB¯ı|´¨TÈä]ÌñµŸ.ºpä]Ğñé÷vá.C#ğw”.?/%ß%8waÇ(à¥§àcæ]àq
øØS~=w¡Çy <4%ğwù¹±ş}NˆªUø;LçüµÒx%ï`^ÚMÀk/üšƒy{ŒÕ€”’©€ç‡]Àwn"šä#y+ÑV Ÿ›‘¿’™
80Ú
à3‹-ôÃHŞH`´Àw2ÄË:‡‘$CÀhğºuG>G’£¯ ¾"‰ˆ“©€¤­ ¾Òëx¦ŒÎû¿Óäı‡’$B@é+€—¥’ÊL ğ8·0Jfà¸’à}~xã`^[|<?ÏÔÀÒW _‹—Jä]Èñ	xjâ@ğ¼‹9Æóß#‹Í«L!}¦Ø%ÈÔ¿Òæß¹~’ş@ŞE§ïHÅï¢:˜waÇêßsÛ¯Â¼<Æø~Ş|ôğ¦dşé¹³ ÅĞ°ƒyx¬ğ¼qñ`^Ê¯ ¾Nşäw¡ÇY O‰÷^•Bı»<ìş]JçD#y+ÑV O5ó>œÃH^I`ôù÷Xüpõa$o$0úü»Tá…ú70úü{áß…ú70ı{«Ï2
õo€´ù÷Ñ4R¨~¢±ÿ|í$„¯ã…ê7Púô;ŸùL
’dA iÔïšC~ÜL¿q!7êw]âæİƒyolú]›8„w ïõ²$Úp
õo¤´õŸ§.Ã"Óod´ÿ>­Bj9gúÆãßiÊeˆù7Rú'ÕcW¨#¤±½4~¿Á¡¼;ÎãßÑ?xy0ïñø÷Ì:«dúÙ¹O¿óŒÊo98˜wÇ:m±ó[¨~#¦íüw_Zl™~#¤õü7_Š*µïú°Ûw™DOS¥öŒ¶êw/;µTŒäF›}>ÄWS©}£¯ı¼¨šN¥öŒ¶ÛÇò¨"0VjßÀh³ï»È{+µo€´µŸ¯5ù4ìÃHò `ôéwUML•Ê70ÚäûÜõ’ä@ i¼|¬íGıÜL¾q÷Éwm#õå0ùFLÛåc;lëgyoŒ—Ş»Z)™|#¥íò±¹º¨ŒUjßi»~l51ìş@ŞÅãõc+÷!å]Ğñ]?6ËÔŸÎ]Ôq^?+ñaó.ğ8¯+£jÌ»Ğã<şUÔk+ÕoLÏİç=„~Wªßˆéì>)#¦ßˆé»ı;–\Ö™~#¤¯ú]Ó¿x£şİvÿ.¹¨=ÕFı}İçK¹m£şŒ6ÿî¥ˆùFımÕïm"ùmÔ¿ÑVıŞÿkú70ú§œE÷y£ş¾îó9EƒP£şŒÖñkSÿÜ$Jßøó³%Ä¼QHãøód°a¹OÀS›êDV£˜¶éç­¨#0
8Bú¦Ÿï„DxjTÀ‘Ò6ı¼¥®ï»˜ã+·Òùm:ò.èËß­'±[Ù¨€#¥KÀSäÎ/8waÇ(à)f»Ó
8bú|GQUÆÆ1}õï”;¿lS2ÇüÜXÿ.5ó‚æ]èqÖ¿kU§ÔpÄ´Õ¿ë˜ú'¿‹=ÆúwËj70¨€ÇÃ.à¹•%Ä1¨€£MÀ[m¢‘ ¨€£oş¹š…Ô¿Ñçß)óëC#É…€ÑvıØêE3’T}İç37±/Ô¿Òçß=&7Û şŒÎöóP§ƒú7Púü{Õ®—H’¤Ñ¿W	1Ê.¨€ãBnğÕZQï%pÄ´	øZS&àék?ßj+úÂ‚
8RÚÚÏw`YoPGHÛøó’ÅœéyuŒãÏ÷ÊÕå~v|ıç­óùç‡ñ.ì8ÛÏcÔ$ğ»¸ãì?ŸuˆsAı1}ã×JäÌ1¨czn,€×˜¡>æßˆi,€—²ÄæoPÿFL[<E£(‚ú7Búü{®!öU;õïşğû÷9nÀîNımş=rûú70ú
àcfÉHŞH`´	xOâjƒÃHr!`´ÀKOü>¼ÃHR!`ôÀKmbùéTÀÒ%à;[[âüw§ŒÆñk%¯Úvêß iœ¾Ö’èüìÔ¿ÒxüûQÁ†ù7.äÆãß¥‡¨<uêßˆé;ş]ªÇÕ©#¤ñú±5øMn‡ò.ä¯ªŸ²SÿFHßõcm‰6œNı!}şİÕ…ê7BÚô{¨Eê72õ{´–¸×vªßˆiÔïÕª8bÒ©~#¦O¿·×Šê7fçFıŞA\xm§ú˜FıÎC½˜L¾ÒVü^YÍ^ëT¾Òxø{±[9¨|‡_¾[t‘*ßÀh“ïıáˆL•o`´Éw’C?•o`tÉ÷Vo52lPùF[õ»§Kù òŒ¾êwí“ßz I¶ê÷6b7hPùFcõ»•{jß@é«~·2ÅÅ‚ƒÚ7@«ß­©óßƒÚ7®äÎöó>Åt¦Aí1}íç+%µ
1ûFH_ûy¤"c7³o¤ôµŸ¯&62µo„ôµŸ÷.¶|µo„4¶Ÿ·&z‘Õo¤´µŸo¯ş=¨#¤³ı\§”L¿‘ÒÙ}>’˜…3¨~#¦¯û<7U£T¿1?7vŸ×5:ßbT¿ÓØ}Ş¶©ˆ	8búºÏç5ÛA!}^jm<»œTÀçÃ/à©M1’RF—€§ÙUÕvRF—€§Q²9©€£MÀc-ı[“\mŞ"‰Ÿ“
80ú¼ä!¿L*à iğS,‘?6I„€Ñ(àe†¦$‰Pú¼ÑÈ?©£Ñ¿ëš"nOêß¸;ı;¥¥~pæßˆéóï¬úº'õo„4ÿu’~RÿFJ›Gkb¯rRÿFH›÷ÕÅ…x“ú7Búü{•&îÔ¿‘ÒVşŞÏ^^Ô¿ÒXÿî¥ˆë&pÄ4Ş>–Ïè…yzŒõï˜%Ô7Îóscı{[„Ø¯œTÀÓXÿn#Ä­±“
8bÚÚÏó*bÊÃ¤>_­e¹-*àëáğªE~QFßüó\Äi¼Emğ(Sl¯-*àÀhk??—óå|QFãüµ&F›-*àÀèğ­:bgmQH›€Ï1EïÚ¢ŒÎóßCİ ´¨€¥¯ÿ<e‘¬-*àÀhl?OuˆîÔErcûyj×¢˜¶öó\CÜ[TÀÒyûØB¶¨€#¥­ı¼Ë"ä]ÌñµŸ·¾ÄìÂE!íç;SSip¤´	ø\UìV.*ài¼ş;å$Ó5&àˆiğÒCô<,*àˆéğ~æU
J&à˜Ÿ;¼kc˜N¯ª½rQGL›€—­dò.ö8|%¾—Qğš_ƒç‡ñõ[‰Œ>¯…»Äa|ıJ"£OÀw6DËÃøúDFß ¶%Lâ0¾N†Ñ&à)G£«äa|!£OÀÇ(<õ=¯S!„ô]ÿİ?|_gBÈhğQ?‰w(_'BHi€®&MÈ×iBKàûQòíµMIüİJn,^xw÷Á¼8¶øÌ:8wÇXŸ3WµVGi+¯í*èi3ğ‹OÔ<wQÇhày&>»ğPŞ…c	üL=RwqÇY¯ûë‘«å]àñŞ .ö3æ]è1xŠ,ó!bàït£oN~‘ÒÁ¼=NOÛÉäÓ¼Ôß!ğ”øĞ½y{Œ>jæ¥ÕL<?ü¢ûê ’—m^wçYz¦Œ6/M\opÉ	Œ6O«‰ŒLm-è£,ŞÎtI*ŒÎ3àU¸N¦6¯sñÚòa$‰0¼¯É¹J’¥OÀgº€$Y@:' §Ì§PlJ&à¸’ü\LÏSÊL1m%ğıƒó{9ä]Ä1–À÷ÿ-‘g*àHi,‹‰÷ò.èKà!ÎÚÈ»¨cğ|¸ø¼‹:>ÿŞÂ¨¿œ»°cmAŸI(c¦ş˜ÎleˆÀLı1Ğ§¸›~S2ÿÆüÜèß­Q#ËÔ¿Óèßµ5¹1ÿFLg:Ÿœ{ ïBñ
ğÔé<»ş›ô‰÷ÿ£|­ßùñÇïÿôùÇó•Ş¸b±Ó¬OÄ/å§ˆùq/;_wø¬lı‰øñ…ü±Ü"–ùuf;#³ÁBOÄ¯ã§ˆõq}â:Úá‰ø1ú±}ÅıUïb[t ×ñcô)b\?Åş.$†œ}¾£ÛÃx2~L‚>eì·Œù}Øjôù^ÙÄ„'âÇèSÄq‰¸ÿßÙâ’ƒÏk´E²ò'ãÇüçSÆyËØ?ì$ÇS6z¨äÉø1ùù”qİ2nË¼£;ZeûU_ eİŸ¯ß·1&òîI.ÙvŞ[°½ 'ä]¹2ûÁ¼K|†RîÑ&ëúd¼Š2›<È_-ÂÀf[ì~Æ'äUœù(Ü¯!gÿº@³xçÍ“ñ*Ğ|ôí×ßÍÎjËW0–”/~ì«HóQ·É·ı!Ô(İ.iv¹FşÊ·?‡¼5åCú¨óğ —¢=¯bÍGÛ~Í8Ú¯÷üx¿y>w)Ê«hóQ¶IÔ~¿”‹>ï“ş¸¯âÍG×~Mïsñ\ä¸ó2ŞüÊµ?OÆ¯f¿…ï·Wôec½Jñú•jNy­5ó}ñaéYç‹¶<!ï¼æZlFÙe{v¸àÉxp>jökÆş«¨¨ÊÜc²Æ†Y˜f—‡_³{jÂaÓl@´ivëtÜñõëˆ6ÍŞßâğD|ı6¢M³KŸ¬£÷‰ø:ûD—f§µ’üZ^ç>@h³ìùĞÃBOÆ×©0º,;íTœy"¾Î| ÑfÙi.6•û‰ø:íD›d§5»İûÉø:éF£dŸ?õQÉÆÕÛ'Ù9±{V˜d#¤M²·LvõkÉFFŸd—ÖÙy‡'äU”ñIö^ô}fl’·\°1AOÆ«@ã“ìÜÆ‘†H6Bº$;÷^ØÔ†'ãU¨1Jv‹ezR^E¯dg±©[˜d#¥O²GÍlÖÀH"Ù˜Š%{•&3 "ÙHé“ì1;*ı„¼³—d—Xy2^Ÿd—:i‹Ò†¬L²ëÃ.Ù%=[÷D|ıB¢M²×^ËùòS™d¢M²ÇöC¶+“l@´Iv,ÚÿüD|ı ¢­–Ò`w‰=_'?€è³ì3^>Æ×¹0Ú,»‹Çø:õDŸe˜Â*Ól`ôiö¬‹q|2¾N{€Ñ§ÙiÎ$rñÊ4×o›fï'Ùe$š.ÍN£«$·2ÍFF›fŸ£ìæ'äUœ±iö^~è›'ãU ±iö™_>T¼&šŒ6ÍNc;æ÷„¼
56ÍN‹ŞşùD¼
5NËÎ1¦üj®‚Ñ²s¯ì¤Àò*Ú%»¤&š’*“lLÅ•ì ;Ÿ”WáÆZÉîbë§2ÉFH_%»4nˆd#£¯’İËª<MkL²ÛÃ.Ùy›Pá!±1ÉD›d§YD°iL²Ñ%Ùi%zõÑñõÛˆ.ÉN3©í½Æ$m•ì’Ø8kL²Ñ'Ùõ\ª_g>Àh“ì­“lÒñuæˆ>Én}êoúuŞŒ>É¢¶H“l`4JvëYìV4&Ù¸~û$»Î!—G"Ùi“ìÚfRo$‘ldôIvmKFk"Ùi“ì:é¼÷'ãU ñIvzsİ“ñ*Ò%;¢ˆ¦€Æ$!m’İgÕ…Æ,}–æjìDñ“ò*Ú8-»½‰ôIyo|š½½‹ÎåüI4“q£fç9ØØ¾'åUÀqjvÍ¢^Ó˜f#¤O³[ÎÆ4ã¥‹nì`š¿fG	q8 ˜f¢M³k¦ˆ¯_G@´Õ²ó•¯_¿€hÓìÕ‹Ø¾¦Ù€èÓìNo‘y"¾N~ Ñ©Ù"`³l@ôYöi=Sˆ¯3@ôYvzµÚ“ñuŞŒ>ËnM2fÙÀhµìÁ®ùI,—oŸe·Xò£!–6ËnÑÄù€`–Œ>Ën#…z%‰e#¤Í²cOÌ‚Y62Ú,;Fˆ¾…`–Œ>ËÖÌ²ÒfÙ3’LÍˆe#£³–ÔA‹`–”ÎZö–.¹]Åc1;ÕÊÌ²17ZvébW7˜d#¤O²w¶+Ó4"Ùi“ì1‹˜ºL²‘Ñ'Ù±ã‡ìL²ûÃ/Ù5-±Lv&Ù€h“ì\»8òÜ™d¢M²S
Ñ[Ú™d¢¯–½c¶|Š¯“@4Ö²‡hıèL²Ñ(Ù£ˆJMg–Œ6Ë®QDëYg–ˆÆZvbc“Ÿˆ¯Ó@4JöÈzÙyô £Q²£TqL®3ÉÆåÛ'Ù1+»İø	ycl’İk.ê»&’ŒÆ~ñôƒ¼
3Î~ñ\UBA$}ıâû…Ty‘ld4ö‹—’İ™d#¤O²se3ˆŸŒW¡ÆYÊV‡ù:Sld4*ö^€dîC)}…ì}¨E’(6fâ>ÅŞëx»96RÚ;ç5DOdg6ÇÎYÿÚWÑÆ¨Ø{™]ƒ)öxø;õ,†¦Ø€èk*†w¦Ø€èSìÚ'ÿªSl@ôÕ±K›¹ƒ)6 Ú;Ödw¤=_g>€hTìVÄ1•Á}…ì©¦Ø€èSì²–(æØÀèsì(éuçuÖŒFÇ®µŠógƒ96®ßÆvñPçsl„ôµ‹ÄnÜ}2^Eg»øª2¡ 6ÇnüB¯'ãU q¶‹/q0i0ÇFFc»xîâ*‹Á!}íâ¹SÌ±‘ÑèØ£«£ÄƒY6R:-{lñR”WñÆhÙ­7qÎk0ËÆdÜhÙıÜ£(¯Ñ²#‡è¼Ì²ÒfÙ5ºLw‰f#£O³KR“U'Óìùø+höRÍ¥“i6 º4û”ÚE‹Êdšˆ¾SÙy‰ƒ°“i6 ú*Ù¹‰z2ÍDŸfï¿C>Å×É ú4»¬"®±˜L³Ñ§ÙCM®œL³ÑØ/Õõ/“i605»$Ñ/>™f£S³Û=4“i6®ßÆ~ñ¤&üN¦Ùiì"¡˜L³‘Ñ§Ù‘†0™f#¤¯_<ªülˆf#£¯”š
4Ä²ÑØ.®&L&ÙÈh“ìÑeÖCuìåU¨q:vé!Z’&sl¤ô9vo]Ì›Ì±17:öÌj2ÿd”>ÇŞŸh,Ì±ÒæØıLVŒWÑÆèØû•“6sìõğ;v=Â*Ä×/$ ÚJÙgäA{1ÇD[)»Dˆî×Å}wxEˆr1ÇDß^[_åı:õDãxñı…ÉÇø:õF›cG¨£‹96 Ç‹×$öšsl`ô9öXK\õ³˜c£Ñ±ÏÅêAÇÆõÛçØc±Kº˜c#¤Í±§š²˜b#¢ï¯”#T˜!Š¾K¼šš¶°˜b#£í¯hsÈçxhŒ—xMÙ‘´˜d#¤K²ËÎÍôêsjœ7e×P“»³l¤4^â5fƒ+³l¤´Yv-Ut -&Ù˜Šû$»–1B%@D²‘Ò&Ù5­.†/.&Ùi»ÃkÖ*m.&ÙÈè»Ã+Vã»91Éş’ö˜-»Ô¤Qk8Œäêv`tivÙË$ßå;Œäæv`työØ$#¹¹m¢½jŞÊw_'@Èh»È«Då'¨ãë}ª½Vğ;½äë!]®}Yğûåãëm²}.(¹B¾ÎÒfÛy'K¾’¯Ó„4^šİfpMÜ”D·ß-ä6ßÎ=-^Š=”—áÆvmö8ƒ,ä]¼1*÷Xú÷¾8>å«ñªö¼‹86ç.gF¿|’w!Ç'İ¥Œ"c‘îw”6ënçÆyytœÚ9ñ®çƒyvœŞ½?Şpq0ïQ¼ÛÊ\Å6%1ïwÙ¹Q½û˜¼wî`ŞE£{ï7“÷›ÊKÕqÉw-MÌ8w¡Çhß+&¯ÙåLí;?üö=ÆĞŒä¥F›}÷”y¿Òa$¯$0Úì»…Ø‘>ŒäF—}—òy™û0’\mö­ğ‹ÃHR!`´ÙwN3é†dB i³ïÓ©¤Iˆ>ùŞZË›ò$É‚ Ò'ß=Ÿõ| IFùî!¦	nJ&ß¸å»ñiYò2ØØÜ»om˜{#¤Ï½£«d2SùFJ›|GObÛ<SùFH_Á{eıåÜEcÅ»¯)ó&ßHé’ï<[ã#aä]ĞqÊwÚÂ(Ÿå]ØqÊwŒ5äjyxŒò}6ĞÕoÎä“s£|×‘xãßÁ¼=Fù.)ó‘Cyi:¶Ê÷ü¤²6&ßé“ïñşò\¨|—‡_¾ÏpÉ+	„ÆÂwâ#C#y!Ñ¦Şi	«-Ô¼ÑV÷mòÓú‡‘$BÀè«{×&2ÊBÍ}uï±C·üfH¶ó9+ŸÈyIŒ>õŞ_HÕ
Uo€ô©w«âà$@Õ;"DÉ©PõÆuÜ§Ş1ïë=”—ÑÆæŞQùìĞÃxmŒêİbğ³‡ò.àøÔ»åÂ‡§È»ˆãSïm‹S}ßL½Ò§ŞÑ–ØÅ(T½‘Ò¦Ş#u>›ü@Şç`«ÖßÎ]Ø±ªw'^æ]àq6œGámÒ›’©7&çFõn­Èõ’©7bÕ»OÑ*]¨z#¥O½»8@t ïBS½kW•ªw}øÕ{<üåa$/%0ÚäûŒØVˆäDÛáîUÅ±äÃH^H`´É÷ˆ!Ä¶RùFŸ|Ÿ+ê#É„€Ñ'ß3w>Ñø@’D }Mç{ñáÉZ¥òŒ>ù®«iH’¤O¾cUÑt^©|¤³î=
¿·lS2ùÆuÜ'ßc»·úr˜|#¥¯é¼5~Ê¼‹7FûY4!W*ßi“ïm9üLÿ¼‹8Æ¦ó5²ÊÒ˜|#¤¯é|?IQ÷®T¾‘ÒÖtÑ?Œw1ÇYöî#‰6ÊJİ1î=Õğó.î8İ;~“ğ¦dîÉ¹õ¸÷.+uoÄ4÷ÎYfèÌ½‘ÒæŞ}e¹^2÷FHŸ{·*®ÃÍºw{øİ;¯ş$uo`ô¹wª¢¶QùF›|Ï>DëM£òŒ6ùŞˆY2’Tmò–ê¥lT¾Ñ(ß+‰céÊ7@Úä»ìdMşØ$FcÓy¬ÅCb£òFùnElô6*ß é¬|µCÙ¨|ãBî“ïÖCä@Ê7RÚä»¥-Ê7Búä»Šf°Fİmî][„„¼8¾ÂwmKTuo„ô¾ëê¢…²Q÷FJ[á»5µ×Ò¨|#¤±ğ]§ªÏ7*ßˆigE\“r0ïâqùJ!†:4*ß˜œûä{Ãhcò˜¾‰æsdù1ù>”ÿ  ÿÿ¼[®$)D7”#ñpØÿÆ:¥‘Uw¥?6(éTÜHÜOà·|ßıkê$bîŒ¾‘æ=–øêŞãcwïz×œódhP÷Fßâ°ŞÄ9¨{£msØ*CÜêŞÀh[v×?òcrP÷FÛ\óSØØ îŒÆåaeŠVƒº7@ÚªÎ[¨¹Vƒº70×‡¥j'Ô½Ò7Û<Î³çÁfP÷HãpóØúdî¹Í½O–â‹Ğ î”¶ñæjfÔ î¾b3F¨¨Èì)mKÄÖ¨â[Ë ö¶-b;Šè}Ô¾Ò·Gl¯ÎwL_Ê· ãÛ$¶S]ŠjßiÜ%¶öq‡Ù7búìû½7ôƒÚ7búìû„ŒÌ¾1=÷Ùw­Ee*ßHi“ï²·øÌ?¨{#¤Ë½ËšªyuPùFH›|—9‡8.“Êw~ìò}„lˆºÏ¤òŒ6ùEìe»Œä•F›|Ï(|Äe$o$0úä»¤~I&Œ¾ÅİeˆÑ7Iå}òİC,Z¸$H›|G)ÿØ$FŸ|\EB’$ ‹ÅÊwIå ò½b‰§¤ò¹O¾÷Zâ*4©|#¥íâû¼)å[¼1^|×¥&×%•o¤ô­+Éwû\È·ã»ú>Ï^ŒkI*ßé»ú.«‰ïVIå)ò½ERùFH§|‡ET¾Ó(ß«oQñ™T¾Ó&ßeWÑî”Ô½1;÷¹÷½Á5üIå1ò]TïXRûFJŸ}Ç_[’Ú7Bí{«ÆôIí{~şì{ôàçĞ¤öŒ>ûnMT¶LjßÀh³ïÜÉz_FòF£Í¾³MQæ0©}£Í¾ûn¢4~RûFãÕw[¢ÄwRûHßÕwWb;©}£ñê»–*ßH’¤Ï¾ûìú'9@:¯¾ë­“Ú7ä>ûÑ„}OjßHi»ú¥¾öNjßé»úµ‹¦ïIí)mWßãáÎì!mWß±º(<ŸÔ¾Òwõ}×¡É¿÷[ĞñÙw´"¦¡Ljßi´ï>¶ØÂ9©}#¦Ñ¾{tñYhRûFLŸ}÷“i(J¦ß˜õ»5WqRıFLŸ~Ÿ],~T¿‘Ò¦ßm¨±p“ê7Búôû®ÈâÇú¢ú½>~ı¾Ë"y'Ñfß}TÑı²¨}£Í¾£¤%´¨}£Í¾ï¿µo`ôÙ÷jB"µo`ôÙ÷IB‹üc“D mö]f[òì!y0úì»äÒ$É‚ Ògßeªä|QûH£}—ÕD¦¶¨}ãAî³ïC)Êãµo¤´ÙwYE4è,jßé³ïó(—:Í™}#¥Í¾Ë¢tvQûFH›}—5Å|ûEí!}ö}ÃÉ¿÷[ĞñÙwUÅñ‹Ê72åû¤¢“qQùFL£|GhÊ·¸ã¼ù>Y¥ú“3÷ÆäÜXv>JÕÒ‹º7b:›¾UÛå¢î”¶‰kçLŸuo„ôM\kò»ï¦î½?v÷nmˆ.Mİ›ÆÄbˆMÕm‹ÆZT7Uo`´íø®±ÄçŞMÕmóÖ²­&ÿÖ$FßïVTğ¦ê.õ>o£Z–¾©z£qÓØ¨¢®nSõHß¼µ–U,}ŞT½Ò8o­®*W7Uo<Ç}óÖJfò2äMÕ)mê}×)«?8So„ô©÷!z_6Uo¤´©÷"Ê(7Uo„tö|‹Ïæ›ª7BúÔ{?¸Ê0˜z#¥M½çÖQ‡¹7Bİ{­•‡å[ÜqºwæÛ±6•oÄôÉwn±ægS÷ÆìÜxï=§µ©{#¦ïŞ{İ•éŠòQu|eç¥Š}é›º7B:›¾¿Tn…¹÷?ï¢½ì|6>·å2ş~)‘ÑWv>W“Œ¿_Idô5}¯¶%ãï7×ï^½Œ¿S!dô5}×ÊoÆ.ãïLMßƒ¯}¹¿!„´]|÷^yÙùeü!£sâÿ¬v'AÈh¸Öª>Å§@é¬:Ÿ· J"ßœãÆk%ùeí¥|Œ66ù]$ò-Ü8«ÎGğúÄKùpŒUçYùÒùq|ò="x;è…|9Fù±ùáKùs|ò=Vry¸oAÇ)ß¹ë’¿ğ·¸cíùÎÍ?e\Ì·Èc¸6øñCIìûìÜxóİ[åUçó-ôo¾£_Üv)UÇ6î<–(D¾o¡Ç8ï|ôÍ[¥ö]?vû>¿œIz¥öŒ.û>éSåMß—‘¼’ÀhÛ56rñRÅËHŞH`´í;î-NóJímwßuNá:•Ú70:ï¾ÿ&}!I&¶»ïˆÊç{^F’£ïî;Kğ²óIÒ €ôİ}¯ºåƒ$90¯¾wñ!£RûÆsÜwõ½Åj¹ùll×vçEu—ñ-Øç­Í)òŸJÕ!mãÖF>OæB¾…ß¸µ6JÈ'ùoœãÖTô¥|8Æ{ïõğ(ß"S½Gn^3r1ßbµæ|ı;Æ{ï±‚O8”L½15w^|·ÆçÛ_Ì·Àc½øî|¨â¥|ôßÅwk|F÷…|=Î‹ï5ÅeD£êİ>võ.3o^½Œä¥FßÅ÷QoşÃiT½Ñwñ}¤|äFßÅ÷\B½Uo`´]|g|]úe$©0ú.¾ÏoFc£ê¶‹ï[|¯jT½Ñwñ)z-/$Iƒ Ò8í¼ó²ºËHr `4^|êİ¨zã9î»øwä£¢|Œ6¶‹ïySÉ…|7Æ‹ï•b½î¥|8Æªó,¢d­QûFHß°ó¶«|)ßBÑ¾ã
òQ¾Åßïcµ’ñ-æ8×|ï£Ü•oÄôÉwëbÉÆ¥|‹;>÷ns¨/üº7ææ>÷îwùÿÑ¨{#¦Í½eŠOÓº7RºÜ»—¢Ê¹uo„ô5|ïÖ„GtêŞıcwï¶{çM——‘¼”ÀhëøŞ#ùÆâËH^I`´µ|ï>D ïÔ½ÑÖò½"ÄwéNİ]î}Ì¨èßI„€ÑæŞmDuVº7@ºÜ»TEŠº70ÚÜ»ºùTéI² €´¹w‹-¶%]H’¤O¾[Ì×$Ê7ä6ùn±¢ªgÉä)]ò}~Û¼Mù2¾…Ÿ{·ì›j¹”oÇæŞmößÖ:uo„t¹w›Y¶üå¼…Ÿ{·l)º±:uo¤t¹wë)v]È· c•ï|8…ŞÂQ¾k"îî:µoÄôš|¥é¡döÙ¹±è<ÊÕÚ7búŠÎ{Ù¢k£SûFJ[Ñy‹.>vjßé+:¯)–¶µ ö»}×2Å¼µËH^J`´—CÉÍ6¨}£íæ{gå“„.#y#Ñxó=EùlPûFÛÍw¤*
jßÀhlùM”9µo€ôµ|—*fµo`4¶|·!ú°‚Ú7@7mÕ—Ô¾ÒÙó½ŠøÔ¾ñ 7ö|ÙÔÏ›Ù7RÚ®¾³vñ0¨~#¤ïê;{7Aõ)mWßGlEAFPıFH_Ï÷PŠAõ!=ßEtÏµo„´ÕGv½™}#¤±î<*ß§r)ß¢µì¼¾­äb¾ÅcÙyÌMÊAå“scÙùhb,ÜÅ|<Æ²ó1¶¨É*ßHi+;3…|•o„ô•ß'ÉäƒÊ÷øØåûDÇ‘’‘¼”Àh+;Ï»cC1’W}k¾Ï_›ŸAƒÊ70Úäû¼âÆvPùFŸ|&®ç•o`4.Û©$I„ Ò&ßõx­d$y0úä»vuŸ3¨|¤O¾OÂWx]H’¤Q¾kbjÔ ò¹O¾ëÉ“xv>¨|#¥M¾k=mƒº72÷ŒíÉ‡__Ê·€ãÜ3v(ä[Äqîk|ÁÆ…|9Î=c«ğ•m—ò-æøäûî ’ò-è8å»C_¾–oaÇißuñ)cPûFL§}«;åAí³s£}ïŞ4æ[äq^}ïÎh_ÊGÕ±]}ÏŞÅŒîAí!}Wß{LQß’Ô¾óc·ïv?Mó'™Ô¾ÑVx~+[ø+™Ô¾ÑVx^sŠ¤öŒ¶ÂósàIí}»ÆŠj"JjßÀè›·Vö*<z'µo€tÙw­jAße$‰0úæ­E|ùæ…$i@úæ­ÍQõO›$A i,<¯É¢H&ßxûêÎ3—˜@šT¾‘Ò%ß½fˆêÙ¤ö6ûîYùBåùolòİw™2p3ùFH—|Gá[§.â[¼ñ©wÔ:ôïæ-àØÔ;jÛ|Ûá…|‹8Fõ>~bôMRõFLŸzŸàİÄ`™¤ê˜6õ>F»D»SRõÆÔÜ§Ş÷Ú[HmRõFL›z7µú%©x#£mÅwÉ×2^È·°cìø®Kìto“Š÷üøÅû„oq¥<©x£O¼CÍ;šT¼Ñ'Ş³‰BŒIÅ}â]¦¨‹ŸT¼Ñ&Şc†hy™T¼Ñ'Ş+–8#'o€t‰÷Iîv—l’£¯ãûü¯ä†ä@Àèkø]”MªİÀhÔî5TeĞ¤ŞÇ¸Í»{“ˆ‘Æ&İ±šîI¥!Ò]º¨§›Ôº‘Òfİ#Cô“Ljİé²îQÄİÈ¤Ş6ïîmLQ,2©w#¥Ë»Û^!3 æİéóîsœ«o½“z7bG­µQÄWŒI½1}³ÖZY¡"æİ˜™½»î&¦ßLêİˆéóî2‹ú‹3ñFHÛ÷®S?É·Èc¼ñ¢iQñ^»x×!ÊÖo`´5{g‘g,*ŞÀhÛ0vkâyš±¨x£mÃX„*“^T¼Ñ·a¬Qcµ¨x£qÃXñ%hQñHÛ÷9®Ä·ÉEÅ}7Ş-‡ØË·¨y¤ïÆ»nÑ±¨y£qÃØİ(' ™xã1nïóÛV÷#‹º7RÚ6Œ•5Åè¢î¾cÿ¬ZP”oñÆ8å|Š¯‹ª72ÚªÍ×¬¢g~QõFH_µùÌ%tqQõFJ[µyfèGùr¬+ÆºZk¹¨z#¦³×{¤~šoqÇYmjãË¢ê¹¹±ÚüüÅ¥Š1õFL_¯w´*æ5/êŞHiëõ.SodôµzGOñAuSõŞ»z—ÈÊ¸©z£­Õ{Ô%¾mªŞÀhkõ»tùÉ	Œ¶VïlKHÄ¦êŒ¶VïQŠ¸—ßT½Ñ×êİ–*?ŞT½Ò¥Ş‡Q|ØÔ¼Ñ8f-»˜$³©y¤¯Ó;bÛT½Ò9fm«	G›º7ãÆ1kµ	÷ŞÔ½‘ÒÖé=î,vùnŒ­Ş#Šøf¾©{#¥Í½ÇíÉ›º72ú¦¬…Úæ¾©{#¤qÊZU—ó›º7RÚÜ;BŞlªŞÈèœ²Ör©èÍÔ1ê}ÎJ™Q2õFLŸzg¦ÌÍ™zcnnTïU¦(¸ÚT½Ó¸İ{wQÛ²©z#¥M½÷ù‘ËGùxŒî½çàA¼æŞ½|üî½Wás¯/ãï—mî½sòÃò2ş~%‘Ñ7ã|ş‘ò2ş~#‘ÑæŞk®:—ñw*„Œ¾íŞ9xü¾Œ¿3!dô¹÷ùY7/äïD!mî=‚o¼ˆ¿ó Dô¹wì(òğù!¤Ï½GY¼àüBşÎÒèŞb¼Ña$æıÇ)î3ï¼7ùB>†›xÏÂçÙ_Æ·PcôîÙÅõÈ¥|6>ï3ªÊ~ˆxÿé»ô>Ù
7D¼ÿ€ô‰÷j‹O?¹”oñÆ'Ş«‰¢Şùqœæ=Ë.òµ|‹9VóŞßA\Ì·¨c4ï!V”H"Ş$æFñ£ò‚ó-ğÅ;ûæŸ.å£åØÄ{u1&õB¾Ec½y™tÑáüŸRÿ+Şóÿ(ëÇîİç)Òä/â¿ßÉ¿"ÚªÍÇîì×ıEü÷ùWD[±ùšƒm£ù"şûuü+¢¯É»Ò¡`_Ä§AE´•š¯X)Ÿâ¿“ ¿"ú*Ísu¶—äËøïè¯Œ¾ïšÈşEüwôWD_ƒ÷9%â¿“Ÿ¿"Ú|û¼½“5óÿùü•Ñ§ÛwÌ»ùüò?Âı÷ãÛ×Ş=s°Ù_È·ckğ^£°¯+_Æ§ cìï>Çcª|â?¾ıwH[{÷ªtíë—ñ)Îøº»óDkùÇ~
4ÆæîÈ`Ë¿O‘ÆæÚ½ÎÊ¶ç~ŸB³µ{ñ‰‰_Ê§hãììÎ=XÇĞ—ò)Ş»g™lÒß?ÿ1í¿çâÆ¾îtÆÍ—ò)àÛº×nl‹ÆòMk\šİK)úA>ã8µ½6+¤;YvûØ-ûÎÀàYZc’„¶Yj;'»¹ù"ş~Ñ6Jíü•Å1Ş˜d¢M²w§@¿ˆ¿“@tIöy„[Hvc’ˆ6Én«Öˆñeüú £K²û¦ÛÅ¿„¿ ´9vÌh¬—ûËø;íF›d>[Êõeüô £O²ïšvƒø$‘l<¾m’=ø^”/ã[ˆq9v–(òMmwrÿXÑ˜c#¤Ë±óîçiYcŒ.Ç{vVtøe|Š3>Çs	}mL±‘Ñ¥Ø#z4ù>>E£bÇœtjù—ò)Ö8‡–ï½X{Ã—ò)Úg–ßnxõ'Š™¸O±{Zı¥|Š7>Åîe¶¦²4¢ØéSìÑäs|
7>Ã¾U^âî°3Ãî»aŸÃ ²y_Äßï# º»×"ïL±Ñ¥Ø½·Ê
a¿ˆ¿ßF@t)v¿ä»ø;÷D›b/:–şKø;óBŸaï‘É»3ÃF›a¯ìú]üø ¢O±ûššñwÚŒ6ÅÜÉŠ6¿Œ¿“`ô)vìŞE&Ş™bãñíSìeŒ!.Çí¤e’ñ)Èø{´YÙ(Ä/äS˜±9ö¨sˆ*962Úvƒí1Ä]{gŒ¾å`'Ğ°®¹/äS¨ñí+'Ø¨pH$}’İ[E†96B¯±ÇZ2Ë%”¾kì]€tæØ˜Š¯±Ï9ÉúÉ¿”OñÆx=wc=ˆ_È7«±9vÍUÔ9I$}’=ª¸ÅæØññ;v–!>;sl@´9vÆb]5_Äßo# Úû¤‘lÌñ÷Ëˆ6Ç>Y§¸iæØ€hsìÎ—®§>€è“ì±zğc'˜d£M²#ƒµw}'>€h“ì¾B•æ“l`ôIvM\m“l`4Jv]µëşI$Ïo›dG/ÉÚÏ¾oAÆ%ÙÑWÓò)Êø$;zİâ6˜d#¤K²£ä…qÁ$ÅâE”ú“ldô‹×F›Ü¿O¡Æ·¬ïdÙ_Æ§Xc”ì:è(Á/äS°qve¯=ÅW¾`’”Æqh¥‰Ûö`’¹¸³){-Ñ L²‘Ò8-’ÍûB¾imX[¡ŸâsX/âÃÏ`–=>vËnuT‘JfÙ€h+mù¿€h+_%Ä%ì`–ˆ6Ë.µŠï¹ƒY6 º,ûVUˆgƒY6 Ú,û(ödS5¾Œ¿S`tYv”Ş„ÁfÙ€è»Ê^t”ÓñwŞˆ¾bñ1'›ùeüõ £O²³Ş‘º’H6ß6ÉÎQC|ÉL²ÒV-¾bŠ¯gƒI62Ú${–®*J“l„tIö,-ÅÍ`’Œ.ÉÎóåc|Š3>ÇÎ…šƒ6"º;ïuˆÃFFŸa>«htL±‘Ò§Ø;ØÚ/åS°ñ)ö]õ%&k¦Ø˜ˆkÅ³l6póKùmŒµâmù÷&Š¾ZñºäIN}íØ«Ğ²2™bçÇ¯Øwn2?'“)6 Ú»&F½$Sl@´)öİDÆ#b2ÅDÛ‚í5‹È+’)6 Ú†µ¢‘&™b¢oèY-U|¹O¦ØÀèÛ®*\'Sl@´)v:û‹ø;ïDßjí»rN¾¿³`4®Ö¾êu$ŠÇ·M±kD‘¿k¢ØiÛ¬İûıqÉ}‹µ+_Zı…|
36Å®÷¦K>È§8c1>ôO›862ú&ŒçœÁ…&™e#¤o³×Ş¢{!™e#£Ï²ËÑ'—Ì²‘Òx‘İFê¿÷S¼1^d·û-R@ËÆ\Üx‘İ^KbÙHé»È>ª&ºj’Y6Búöi×!®“Y62úvzÉYX“IöüØ%û¤h!¾úL&Ù€h[èµŠêC›L²Ñ·Ï«LQØ5™d¢m×ÎÂVi'?€hÛæuw‚È?ôïÜ}Ë¼úâ*i2ÉFßí˜“ŸŒ“I6 Ú$û„Á2åŸúwŞŒ¾U^-§è¾ŸÌ²Ñ¸Éëü·ÄçŠÉ,Ïo›eºêûùdl«¼Zâ#äd–Œ¾U^uv¶€êùg|›¼jkò§M,m–}·:IÆ§Hc´ì²ÔĞ¡É,!m–]ëë&³ld4Zvkª\|2ËFJç¯©æİOfÙHi³ìÚæHõ'–É¸Ï²ëC4˜NfÙHéëÉîcŠËÉ,!]–İâ<|uPËFFß]v—_Óìõ±kv«¡ê’Ól@´-ğÚ¡FB,¦Ù€h[à5wŠ‹i6 Úî²SN!^L³Ñv—]g
Í^L³Ñ§Ù™òeüû £oevé"Ï]L³Ñ§ÙÙ·èXL³Ñ§Ù³W11ÍF£fçÂ`Ól<¿}šEÜ/fÙÈh³ìØ)&/fÙÈè³ì8G¤
3Ä²ÒfÙ=Wå²°˜e#£Í²ûT=r‹Y62ú,;Nâ®"±l„´Yö*ÙO¡Æº+{LÑ®²˜e#¥Ï²kë[Üe/fÙHé³ìUÕşÒÅ,sqãä³²–ŒÜÄ²‘ÒgÙ%B|ûYÌ²ÒÖ”½O¢&äSÀq6e½øg3ËŞ»e×,CÅÍ,m–uŠh3ËD›eß!%<"nfÙ€h³ì²Õ¾Í,}—Ù=yÈŞL²Ğ'Ù£6qQ¼™d£M²OèÔ‡ÎïÌ}’U\ÜL²Ñ'Ù1cÉÌï¬’G²$‘l<¾}’}ësÕN,!m–=zK‰7³ldôYöPÃ‘6“ld´Iös«CœH62Ú$;îüJÅøhœ’=Š~O‘Æ(ÙMÕo&ÙÈè”ì¢>Dn&ÙHi”ìEáëf’”>Éklõ(‰dc*n¼Ê#eD$)m’]sùf56ÉİäAI$}’İëâkåja’ıOŞã¶ìšo—¿Œdo;0Ú4»ÌÉ?á_F²¶}Eã{ğ‘¥—‘¬mF_Õø˜üşeü!£Ï´Çâ{g@ÈèsíU'oÎ¾¿3 „´ÉöQÛ~g@Èh³íz²*ÿÚ¿ „ô5h÷>ø÷©ù;ÿAHg‡vk|RÛ¡$¾ıÇAîkÑ>	5~)ÃË¸[UÆDbÜ@Ú”»õsäü-âØ¤»EL^{!ßBÍº[Ü:/ùs|Úİze°—ò-èØ¼»îµy³é…|‹:Î‰ã±E¹×Å|‹;Vó®Á¯/æ[ä1öjïCı|ˆzÿ‘›µgˆşİ‹ùzŒİÚ#;_‹w)]Ç×®ú½$öı¤¯_;ª†_+Õïú±ëw‰ŞÈ{ÉK	Œ¶–íqœŒÿp*Õo`´é÷œ…×Ø\FòF£O¿Wç[È.#É…€ÑVN^Jácú.#I…€Ñ§ß3§|$F›}¯“)Ë³‡äAÀè³ï’K>$H£}Å·Î]H’¤Ó¾;ßÎp ™|ã1î“ï¬móïÑ•Ê7RÚ¤eñµ¥RùFHß„´‘“¯¸”oñÆ7"í¶©IÈ·€c“ïÚ«X5x!ß"O¾ÏQúQ¾Åß¥÷:g¥
:L¾Òzëúşv¬¿º˜ü|1ßñŞûDŞw|(™|crn¼ø¹yÓÃÅ|=Î›ï{÷­(MÇvõ}’_qZ©|#¤±Àü¤ü,jT¾ÛÇ.ßufòVóËH^J`´İ}ÏmW—‘¼’Àh«1O^z	Éû„¾Fî!¶t\F’	£M½GñMºQõFßXòu„MşdH.÷nG„ÅÙ¨{£Í½Û®[ÿµI6÷îqÒ$ù³!)@úÜ»¡òÉFåq›|÷‘…÷\ÊÇ`ã’ï>Ä(èËøl|î}¤˜›v)ßÍ½{Èò›Fİ!m{¶Û-QTo!Çxñ½öâ¥½—ò-æø6mÇØ|AÂ…|:Î‹ï]
Q~1ßÂóâ{ÔÆK/æ[à1º÷ı¾¦soÌÍî}/Å™{#¦Ï½O
%ªuo¤ô-Ü>?	ùzŒî}÷ñ÷²S÷î¿{÷-Æ\FòR£Í½³ß}É+	Œ¾)j÷A*FòF£Í¾gİâœìÔ¾Ñ·lÏ"ÿÖ$FŸ}·><ÿB’L m[Ár&ŸRvI"Œ>û.…	ºŒ$F›|·~Ü›§½Ê7@úäûŸ½êQ2ùÆsÜ&ßm.1MíR>F[Ùùš!êƒ:µo„ô•¯q›É7BÚªÎçèú¥|8¾ªóT×8º72úÜûü¸yŸå¥|‹8>÷®9·ÅNİ!î=Gˆoçº7bİ»O™{#¦qtyn™›3÷ÆÜÜèŞwV½Ä|<F÷.;eäaî”¶¢ó³(Óaî¾¢óuw>RÊ î»{—5T1SP÷Fß°ÙD)FP÷F_ÏwBu‚º70ÚŠÎ×LQĞÔ½ÑÖó=ö”¯#É„ Ñ¸*¬…ø"T½Ò7_í8£<{HŒ6õ.Q¶ˆˆAİ }ÖÎ.&wuo€4XkÈ¿7so<Çmî]òd(ÊÇhc²–õ¼
ò-Ü8§¬‰Gò-ŞÇ¬Uu)Ô½Ò7gmwQÛT¾Ò8hm«Ï½Aå)}“ÖŠ¨¡êŞÈh¬9‘|õÑÅ|‹:Öšó¢C'¨{#¦wÖšÊ)™{cnîsï=ù6Í‹ùx|îİK«Áİ;¨{#¥Ë½QÔ½ÒæŞ½Ï"DbP÷»{÷¾T‹Á îŒ.÷îÑšˆ;ƒº70ºÜ»G¤(Ô½ÑåŞıÄ©Í³ŒAİ]îİÆ\)3$Fß½÷,êNyPùHÛ½÷)Ã“óAå}ß{êÉ‚€Ñwïİš¾5¨z£ñÚûvåğÜbPõÆcÜxí½Cã ê”¶šó2Å±ùmŒEçç_ˆ¡ƒº7RÚî½wqù0¨{#¤ïŞ{…pïAİ!ß}ë¿÷[Èñ]|·Vø²Šùs¬EçYõkùvœßûÄ&y¦¿EŸ|·r_õ7gòÉ¹ñâ{ï*óJ&ßˆé»ø>é¨T¾‘Ò·Pì<Iõ^2ùFHßŞî¶Å=cR÷Îİ½Û¨5x:”Ô½ÑåŞm”üLêŞÀèrï66_~Éûˆ.õ>Ajğ¥9—‘dBÀhSïœbÄe$‰0ÚÔ»«±zIÅ]â'dŠˆ¤âŒ6ñ\]4%5o€´™w¬•"3OªŞ éSïC¢Ú3©zã)nSïXr{RõFJ—zŸ·R$IÍmæÑcªß73o¤t™w”L1z+©y#¤­İ;C9$5o„´™woMŒOjŞHi3ïYªèœOjŞé3ïVfßÖ’š7bÍ;gÓR“š7b¯½›X¥{(™ycjîl÷Î"6è$5oÄô™w„ş“3óFJß–±^Ä³¤æ¾vï£:"@NªŞócWï:zŸ&Uo`ôµ{ßŠÅH^I`ôµ{—c£&uo`ôµ{7¾ô"’TmİŞ‘C\ßMªŞÀè»õî5õûH!€´İzïµÄøÑIåmòİ2
Ï™T¾Òwí½b‹Ò¿Iå ³Öjï2Ö0ùÆsÜ7k-Jõ"“Ê7RÚî½ó¤“Šñ-Ú¯½ç±o.c“Ê7RÚf­M9œ{RùFHŸ|OÑü;©{#£Ï½Çz­(ßBÍ½{ëU|ÛŸÔ½ÒèŞ³‰bÔIÕ)}êİÎÓWQ‡™7Rï¼ïp0AÉÌ3s£y¯©*[&5oÄt®÷®¢ºwRóFJ›yßMÅê bæ>ó™bÚ¢æ½>ÿæ=š¸[×¼ÿ  ÿÿ¼[$¹D7”èE‰ÚÿÆFÊÀ¬êV˜éÇnÿ7p*Ò]äqRä£Í¼ãéüıNjŞÀh3ï(E$IÍmæ=Ê1'©z£oÃØ(bĞZRõFã‚ï¦nŞ%Uo€ô-ø®K\iKªŞÀhSï²ûùERõHßŠ±ó@yD’$ +ÆÊÊª^n¦ŞxÛÔ»ÇRS>†Û±;”GıÁ™{#¤ï¶÷ÊÃ{F’º7RÚ®{gkúïır|×½ç\2Ocò¾ëŞqr;şE(©|#¥íº÷¨[O*ßé“ïÒ›ª7%µoÄ4Ş÷>™‰X]‘T¿Ó·à{”©“ê7¦ç>ı.c¨ÖÙ¤ú˜¾ßC~bKªßHi›µÖG•BÆô!}³Öú	‘ü§ÜT¿÷]¿KÛ)*›ê70Úf­ƒKLÖÛT¿Ñ6k­¯.š¥7Õo`´ÍZw‘b$¹0Úf­,…'•›ê70‡­•*¾clªß é¶VÔwŒMõ}ú³‹İ|›ê7@ú†­e¨á"›ê7@õ»Î!>lªßxûô{È(›ê7RÚô{üBıÁ™~#¤oÅwZÔ»Ãô)m+¾óçÜ7Õo„´­øÎÚE¯ç¦ú¾ß«¨ñÜ›ê7Rºôûî[7Õo„ôéwí=ÄW¡Mõ1}çul!¶›ê7bW|Ï˜ê búé¹±ú][ˆx›ê7bGO©ŒÌ¾ÒVü.½‰ol›Ú7BúŠßE½<­0ûş}İÅïZ3è9t¿?“Èh+~ßõ’ñû#‰Œ¶â÷±#¾?û2~"‘ÑVüî-øÁËø=BF_ñ»‰¾óËø=BFŸ}ï9ùDÊù=BH[ß¹˜™y	¿gAHhsïó^ŞĞ}!¿ç@é+}÷²›<|¾g@itïÑKW?%qï?qŸ{ÇL~7çR>›{Ï½ù,¦ùmŒî}[hÊ{)ßâÏ½×3 /ä[Àñ¹÷<”4á½oÇèŞcë_ò-âøÔ»Q½oAÇYùŞò¯ıs¼cÎ‹L'‰wÿé+{gTş­åPïş#17–½×æ3 /å[Ô1V½gNşòR>J­êkò€ò-ê«Şc'ÿÄß*õîúc÷î2Äúœ‹HI@´½ÏiÎ/…^FòD£­è=²ğ?—‘<Àè+zgçí/#É‚€ÑVôî¹Ä§Jµ}Úİº:È+Õn€´½[(«T¼ÑWôn).8]H’¤¯è}Ş3~-çB’ ÆFİÜ‡’‰7ä6ñ.ÑšøT©x#¥oÃXlŞxs!ßâ±ç|Ô\R¾EcÏùZòbâ¶ó=R|ş«T¼Ò'Ş¥n>àóR¾ŸyßtR>”oQÇjŞQyÁÅ|‹;Vùì*<2ùFLŸ|ï(B¾+•oLÏEï>ù‹ùzŒEï7Ï^ÊG×ñ]ùŞªìT©}#¤¯ê½Š¸˜Şµïöc·ïºææÃ†/#y(ÑVõ^b½ÆE$O$ úf­.ÿÔäFß¬µRÄ—–FímEï~ #É„€Ñ7l­Î">5jß i+zÇ„¢IŒ¾²÷jU” µo€ô•½3+_R|!IÆ²÷æT#so<Å}Eï}şS¿$so¤t¹÷q·œêåfî¾¢÷>™¹ü)ßâ¯è}$‡ïP¹oÇØp|pæe|8Î~ó-ö\Ê·ˆcì7Ï”©$So„4ö›Ÿ—|sŞb³İ¼¬É;¤/æ[Ô1¶›—]åsÉÌSs£y·²ømï‹ùxœcÎKTõd2óFJ£y‹ûXò-ğ8Í{,‘ujŞıÇoŞ9BTu:5o`´™÷.´¶SõFÛ†±2Ä¶ÕËHH`´­;AGôƒuªŞÀh[1Vª¸ZĞ©y¢Ï¼ï¬5ù·&y@ºÌ»õ²ô;CÒ `´™w/½‹Àİ©y¤Í¼ûl!z¬:5o€4î;Ù¼ø¬ß©{ã9nsï1sñM—ò1Ú¸Ü;Ê,âA§î6÷^ªş)ßÍ½cŒ%jº7BºÜ;úîâD§ò6ù²»øDĞ©|#¥K¾ÇI&ù óùuŒòİ×j|¢ÕÅ|‹;Fûî':ŠfÊNí1möİËÜâóy§öÙ¹Ï¾[Æİ-Ú7bÚì»'“dº”ªã²ï¶Îÿ¡2"fßé[ï}(Eí ö=~ìöİæì)ÉC	Œ¶ıŞ³u‘ÿjßÀh³ïYS"µo`´Ùwô*µo`´Ùwİ¢î=¨}¢Ï¾WQ_{µo€´Õ½O¨‘¿#Iƒ Ñ&ß­–%’ Aå };Æ¢v>ıB’ }òİVèPÃäq›|Ÿ'¤ñ™Ò—ò1ØØvŒ•HÑ)=¨|#¤oÉX­mË?ø[¼ñ-«­‰òÃ ò.ùn{/™]0ùFH›|_y_×•o¤´mø±….*ßé“ïs¼6ÑÀ?¨|#¦qÍXiÙTxdò˜¾=cçÒÕAÄä“s£|—¢ésPùFLŸ|—:EÍdPùFJ›|—Ã"Ê·Ğc,}ï¢95¨|Ç]¾ëZbäãe$%0ú6|¯.ú„‚Ê70úöŒ­*ä;¨|£oÏØâ>IPùF[×yeAí}ö]J—çƒÚ7@Úì»“/6I„€Ñ×u^z_zƒê7@úî|ï]D3ePıHãï½»èRªßxûúÎËN¾àçR>†Û°µ–¢ôÔ¾‘Ñ×v>ö=kAí)mmçs…hQjßék;MèCPûFH_ßù!îYµo¤´õï9eÆËì!}çGÄDAPûFLcãùšc«Îì1}ç™j*\PûÆìÜØx¾WßTƒÚ7búÏ·|T¾ÒÖw¾›ºsT¾Ò'ß9ÄÂ¶6©|ÏŸÿ‚|Ÿ÷›QT¾Ñ'ßwê£b$$0Úä{Fˆi©“Ê70Úä;¦ø†1©{¢Í½[6‘­MêŞÀh¼ñİÕ<×Iİ mî=Fˆ.‡Iİ7¾‡ˆ“º7@o|/5}R÷Hçï(MãÌ½ñ÷•¾‹(…NêŞHé»ó½”ÖN*ßi“ïvg™IÊ·€c“ïVúZ**2ùFH›|ï»GEA¾Åç¥ï\|óü¥|:ÆKß«ê‡ò-êX/}·&™M*ßˆé\2–MTk'•oÄôÉ÷¨êÛÕ¤òÙ¹Q¾g©¢UhRùFLŸ|¯¾šÊÑ™}#¥Í¾sŒ%!ßB³ô½‡¨-jßëÇnß­–)Z…µo`´õ×^ÅtéEím}çµ*ÛYÔ¾ÑÖw^Êî<C_T¿Ñ¦ßs©ñû‹ê70úô»ï-Î¢ú>ı.KŒ	[T¿Ñ©ß»ğ4hQıH_çy‹WÕo€tvŸôNQ2ıÆƒÜ¦ß½Ì"Jß‹ê7RÚ:Ï[İbNØ¢ú¾Îó“óùS¾EcçyY¢GqQıFH[çyöµäßû-æ;Ïc½™~#¥­óüPŠÎµEõ!ç¥ŸC]a¾ÅkçùEåEí)}çW!ÔŸœÙ7fçÆÆóª7uQûFL_ãy×ù“o„´õ÷\bÀÕ¢ò¾Kß=§¸‰—T¾óÇ/ß}wQ2I*ßÀh“ï>RôÆ'•o`´ÉwoM´$•o`´Éw?I%?Ì“Ê70ú.}ŸP*ß’£ñÖ÷)!I6ùÎ¦ÚÁ’Ê70Úäû8æÖ§I‚ Ò(ß¥ˆïjIå ò]³ˆéIår_í».±ã'©{#¤­ô}òÍ¢Âso„4–¾‹¨Ï'Uo„´µg[bmmRõFHßŠo‘î&oDôÕ½ûèbJRñFJß±^&×›¤â>ñ.ëÄ™x#¦qÏØjMÿšoQÇ¹ä»‰ÏVIÅ3sŸx—İª˜ü˜T¼Ó·ä{gÒIÍ)meïÒÕ ¤æ¾²÷y&ÄX‡MÍ{ÿØÍ»Öµÿ.½©y£­é¼­W.75o`´5wy‰hSóF[ÓyŸ!<gSóF_×ùšâ»ù¦æŒÆß[T”7o`´‰wEÌjÙT¼ÑWõ+’;Î¦â¾¦óSì(ÙT¼Ò(Ş½«?›Š7ã>ñçıVo3o¤´™÷JÕ­¶©y#¤Ï¼w"ÚT½‘ÒÖt¾[İ½›ª7BÚªŞ'6•o„ôU½Çl¢­eSùFJ[Õ»´®!ß¢³é|ä”Á‘É7b›ÎûTËå6•oÄô5G³Î7•oLÎ=ç-5æ[ä1öœÏ9Ä¥¬Må)mò=WŠûµ›Ê7Búä{wœ¾<½0ùîåÇ/ßsOêcñû3‰ˆ¾ßeò‚ÎeüşD"£oÇwáŸÿ.â÷ç}+¾kã­³—ñ{"„Œ6õ#xÿÒeü!£ñÂw¼›åB~OƒÒæŞ}vı@~Ï‚ÑçŞÙo^ºßs „ô½O6Âë‹ò{„F÷Îòå&îıÇ9îë8ï¥óùA—ò1ÚØ:Î³ß£r!ßÂÏ½Gk“w _Ê·ˆcsïßÓ\ş½ßBÍ½Çè…ß0¸o1ÇçŞ£©.éKùtlî}Òø”:qï? }îİËjE–oqÇÙq¾î"N…ùyŒ-ç³Š1f‡’È÷Ù¹±å<JòÏ€ó-ô[Î£Ş„s)UÇÖs>u|$îı£qÏØHñWêŞõÇîŞ'ùß /#y&Ñ·gl.¾Uù2’'m-ç«5ÍHH`´µœ¯^xçÍe$©0ÚZÎgT>nâ2’Lmöİ!tIˆ¶%ß™sğ¬·R÷F›{÷»€Ÿâ•º7@ÚÜ{”UøˆI2 €4.ù>©]ò ]©{ã1nsï»jA|E­Ô½‘ÒåŞ×yñáB¾E£{Ÿ×›Î¼”oñÆçŞ±ºø"T©{#¤Í½{á· .ã[Àñ©wß|àì¥|‹9>õYxÙûB¾§zßÕ9ücK¥ê˜Æß%:ŸÄt1ßqÇw­›_=”L½17÷©÷ù1·Ô¦ŞˆéSï•v½”¢cSïŒêõaî>÷ÎcGä§Ìÿ)ÿpïüÊÿ†zçfuÆáßä?	mâ}GÖ)ıAüûyü'¢Í»÷œÌ!>ˆ?ÿD´i÷nƒõ¤~ÿÎ‚ş‰h³î,ƒ%AÄ¿“ "ú¤ûæå
ñïèŸˆ6é^ÁjòÂ¿ÓŸú”»÷aü;÷ù'£Í¸{ôÒHJñaü;ñù'£O¸ûZ•õUıBş‡pÿûôöÕº÷\Le?o!Æ¦Û­$ûpúa|Š1FÛA×| Ÿ¢ŒO¶ç¢KÜ?ŒOaÆçÚç­)òw|Š3Æ2wûHõa|
4>ÓÎ]õóøj¬¢ƒ}ËÿP>g‰{›µÿ|Š6ÆwòX¿ÿaÙÿNÄõí¬Õ·?”OáÆèØÙè±ä›ÓØ{íÉ
uÆ§pã¬nõC6fØíÇoØ‘{ó²1ÅD›bz‰àCøıiBß0µllâÒñûÃˆ6Ãn½³õWÄï© ÚºÊ³ÓmHÄï™ úšÊçÈ*¿g>ÀhSìzÔP¾/ß@ôÍQ›cˆŒ¢1ÇFŸc—İØ:çã÷¬­±È¿Ä±ñø6:ö¢K>o1ÆæØ}oÖğa|Š2FÇ^Nöû@>ÅŸcçÖıa|
4>ÇÎl¤Ö‡ñ)Ò{Î*Ïq"Ùé’ìq¯íËò)Ö8%;#ØâáåS´q³ç¤m¦Ê§xc¬eÏÚ%$±lLÆ¥ì9“İùP>Ÿe÷µ7»…ñ|ó—e26ëãü0>Ÿe»~˜ùéÌ²ûİ²Ç8Ï£Düş@¢Ë²ÇäX>ˆßG@tiöQ†Î¶~¿?€èÒì±fŠggšˆ.ÍÙº~¿'?€hÓì‘YØ<Äã÷Ü]šãTò/ı=õD›fÇ9ÅGŸÎ4mš{ğ Ó™d¡O²cÓ‘Ë¿ŒÄ±ñğ¶9väÚl4Õò-Â¸;îe/–uæØÈhsì£
)ŸbŒM±ÏÑ£²²Î]Šu6Ñº×™b#£O±×IÂÕùH!mŠ]]öa|Š3NÅ9ÙzÏåS¤q*ö½•&)Ÿ¢Q±Ë¤óŞ!‰bc"n,d/¾µîCùoœ÷´ËdÓ>oNc+d{•A‘(62ú
ÙõüöÜSìñcWì»9\”kSl@´MHË!¾ŒfØ@h›6—’šÁmóÑÎ;¼Éy0ÃDßdò¡¾ÜfØ€h3ì²gíRƒ60º»l~÷ùƒø=óD›aÿşŒòÔù÷ £Í°c•ˆß“@ô)öù[Ó—¿Ä±ñô¶9v-µˆfÍÁ!]]ùè¶âSŒñ)öybÛëø|Š2¾U`%6[8ğa|
3¾M`%BÜÌ±‘Ñ·
¬De×²?OÆ¸	¬mÑL:˜c#£Ï±Ë)úãsl¤4"/‡†‹á`”¾Iäu,qõu0ÇÆTÜçØwã’Ğ×Á)}ƒÈk„Œ8Ä±Ò6‡¼fß}sldtî kâZ0Ç»cŸ(DËB0ÇD—c—}G¥+Äï# º$»då¤`„.Ç.s…°š`ˆ.Ç.#Kå9d0ÇDŸc· ‹>ŒßS`´9vkK\æØ€èsì6¶ønÌ±ÑçØí<òùõ £Q²{Yêà!§·Í±Kï)OGâØérìÒÕ<`ˆ6Ç.}6tèùel-ÊÁüù\~]Æy§ÕÁCüm~} ‹hXæ×éòë2j.eˆ_#£Ñ¯Ç¢²Ì¯‘Òç×eÍ"š?‚ù5Rızªa9Áü³p£_YÙö•åS¬1úuÄó ‚ù5BÚü:J·Ğ‚ù52úüºgÏäd~=ì~]ï”~´'ók@´Õ°Å¦òâ÷ÇmEìr4BN&Ø€hì=–¨.L&Ø€hìì]t²O&Ø€èìy—Â(Æï¹0Úû¨‚¸û:™`¢O°³«”b2ÁF›`×Òè¢ã÷´}‚}oÕº7™aãùí«bÏâ«Ôd†¶*öÑ1ƒo2ÅFFß^íZR˜×dŠ¶µÚm‘=N¦ÙÈhÛªİ§ê€œL³‘Ñ·Tû„x1Êg2ÍFHÛNí¶¦¸7™f#£O³Û «ª?OÁÆºÔkVÑ¢2™e#¥oäÙÎÃÉ,sqãeì’âºád’¾»ØuÒÙçÈ7«qIöIàC4©L&ÙÈh“ìó7Q9\L²×]²ûÌ)Bâb’ˆ.Éîûhƒü¿?€h»‹]–š¿·˜d¢í.v›Sìb’ˆ¶»Øwj¥"üù ¡ï*vklaÉñ{Şˆ.ÅsõÊ¿÷,¦Ø€è»‰½¢ˆ:ûbŠŒ6Åí.úVŒßs`ô)öœCt“.fØxxÛ{îLy|ÃFH—a¯¶ÕçÅm†½zV¶ßçùdl†½z[¢¶¹˜a#£Ë°×Ñİ¡NHbØÈh3ìUúß¥3l„töI(Ô@ßÅ}†=Ë¹‹6Bú;N†;åOùm|†cVñ±b1ÃÆDÜgØq]‰b#¥M±£¬%>V,¦Øiw¶»¨/fØˆè›v–}‰ÙvÉ;ì†=VWCî“6 Ú¦E¬-ÅïO# Ú{Ô%Ì+™a¢Í°{«b~J2ÃD—a÷Ui’)6 ÚûœS¿/ß3`´9v*Æ#'sl@ô9v›K$Ém+Õh€dŒFÇ®»Š»É$ÏoŸdóf«¿6‘l„tIöœw]€b|Š2>É³ªÙ.É$!]’}ÆÅ¿¨$“ldtIö¼[ÚT¼&’Œ6É5T]3™d#¤K²£´-³
"ÙÈè“ìS¿ÛOÑÆhÙ÷r€¸3Ì²‘Ò8T<ªSšÌ²17Ö±ÛJqí'™e#¥³-¾$“ld´Õ±ËZbŠJ2ËFFßÀ³{Ó™2n&ÙûÇ.Ù-OÆÃÍf’ˆ¶Å]sU!Ù›I6 Ú6wEª%?›I6 Ú6w.&$oæØ@h[]û×6sl@ô-îZ!ÈÍ]Š}÷)f’l¦Ø€èÛÛUN”oô÷¤mŠİÚxx¥¿§<ÀèSìv{÷ÔIOo›bß•©¢ØéRìv9cˆb#£¯S|”:U¬&Š¶Nñ~—b)Æ§8ãëo³KÄ§8cl/±Dõu3ÃFHÛ¼³5«øRº™a#£Ï°ëhbBéf‚>Á®]©ëf~¾ÛØmÑØµ™_cîœvÖ¢ò*›ù5Rúnc—ª¾úl&Øéì²{ˆk ›	62Ú»ä~ja†ı›õ¸ÇåÜ|öe$ËÚÑ6ï,£q=¼ŒdW;0úuÑkxÉ®v`´İÈ^¹¹Ã^Æïé2Ú®d/1Òç"~OÑw%{,~¹â2~Ï~Ñv%ûî¦Êp¿g?Èè»“½ğ/ò{öƒ6Õ.‘™ò¯ı=ûAHãØ³Y/ÌJâÚã¾Ág³5şùçR>Ûä³Y“7d_È·hcœ}6«&)ßâoøÙ|xÁ‰oÿi›€6ûìò¡|9Æh³ˆq¥—ò-èøf ESi.ä[Ô±A«¢wób¾Åç´¾v‘Ñ[äñ‰wé]€=”D¼ÿHÎ}æ]Ún¼”x1ßBO½K[U#Qï?(mî}~Ê­^âŞ@úä»çI)e¥ò]üò]´2\FòP£M¾W‘U*ßÀè“ï]øü…ËHH`ôCÛÉ[B.#É…€Ñ¶Ô«T±wì2’TÑ’wî^H’	¤M¿{’ËH!`ôéwïU?‘$HŸ~÷½EÜ®T¿Ò¨ß£ßz(™~ãAîÓï1+¯‘\ÊÇpcÓï(…/·¸oñÆ¨ßÑcªw‡é7RÚô;£|*ßBO¿ãÓQo1Ç¨ßÑï­º”oAÇ8‚<’W/ä[Ô±ê÷9ˆäşwœú=Ææ×Á.æ[ä1ê÷ƒOÙ=”L¿1=7ê÷î!M‡é7b÷|ÍÉ¯Â_ÊG×±"o±Å÷ÊJõ!}“È›ø:İ¨|·»|×vôˆ?’Ê70ú&‘¯Å']Fò@£myUSC/#yÑ¶P»Œäƒ.#É„€Ñ7Œ<¿6{I"Œ>ùİÄ× Få µï^Û¨|£±ö½cñ¸İ¨|¤O¾3:_Îy!I
Æ‰ä'lóÁ¦‡’É7ä6ù®=†<&™|#¥m&yÌ"ÏI&ßéÛ­½Æà‹è.å[Äñ-×Îúïır|Ûµ÷±Z•§1ùFHßzíİ+£u)ß‚¯ß|fÑï·¨ãl8åaùwœ-ç«,Ñ9Ò¨|#¦¯é|eğ9U‡’É7¦çÆ®ó¥š¥/æ[è1Ê÷<oü1]Ç&ß³$_#s!ßBQ¾#R”#:Õïşã×ï±&Ï;µo@´Ù÷(CT;µo`´ÙweˆNİmîİËMŸº70Ú
ß'¥-İº70úÜ{í.®jtêŞ é[EŸ<$Fã.°µøËIr €´¹÷ñŞÍ¯^H’¤Ó½Çæû¶%so<Æ}î]³Ou3÷FJ›{ŸpÃGü_È·hctïrÎ- uêŞHi+|§}ß"±í<C4¶tªŞé¬{«kª7RÚêŞ}o>&ñB¾gİ»Wu“¨SõFLgÛy¢¢#SoÄt¶ß9z(™zcnn¬{÷¥Êóª7búÚÎû^òbê”¶¶óQ¶(=uªŞék;-EÚ6¨z»z—b_ïe$%0ÚÚÎGª&¡AİmmçQº¸ó=¨}£­í|dÕŒ$F[å{Ô)ÄvPûFŸ}·QER9¨}¤Í¾k·.#I„€Ñgß'Ñm’¤¯ò]W.cƒÚ7@ÛÎ[OyH2ûÆƒÜ×vŞk½³ƒÚ7RÚÚÎCÈ_ò-Ü»ÎG6‘§*ßHéë:o?å[Ä1v·%:=µo„ôÙ÷ØEÆfßHéë:o­ókƒÚ7BZ»Î›hçÔ¾Óhßq‚¾ü5ßÑ¾×âSÆ öÙ¹³ë¼×Q˜o‘Ç9oMŞÔ¾‘ÒVø¾ë{äOùzŒ…ïsbŠ®Ê ö?vû®Ww$#y(ÑVù.sˆAAí}}çç àyFPûF[í»%hƒÚ70újßE4„•o@4–¾s‹‘Aå mò¥Š»Aåmç¥‰†Ï ò>ùcyB’ òçÅQ”L¾ñ÷É÷^*S*ßHi+}—ìòböÆÒ÷*"OjßHi³ïj8ePûFH›}gí|ÅÂ…|‹9Î‘k«hÊ· c¹[|jßi´ï¨#ù7À ö˜NûNUÑ	jßˆi´ïºE§tPûÆìÜhßÙ;_ºx1ßB±öC‡qfßHi«}¯9Ä\¸ ö¾Ú÷ÜMÌ—™Ô¾çİ¾oƒª0²IímµïÙŠ0ÛIí}µïİÅWßIímµïØ)*“Ú70Újß‘K4MªßÀhx>BC’L }#×vŠßIõ#×Nr.H’¤O¿{[!_’¤³ö]Ü½›T¿ñ ÷éw‹"®®NªßHi«}·Q…3Nªßé+~·PÅïIõ)múİR}ÜŸT¿Ò¦ß½§~(ßb³ø}Kù÷~:FıkğÓ“ê7Bõ;«;©~#¦ñÖwo]†G¦ßˆé»õ=Gˆëc“ê7¦çÆ[ß³uÑÇ?©~#¦¯ø}dê,bú”¶âw!º'Õo„4\ë*¹\T¿×]¿k]Uô]-ªßÀèºv~zÿ.ªßÀè+~ï-V¢-ªßÀh+~Ÿ¯I.Œ¾âwna‹ê70úöz×Û¼¦ I&¶ÍŞeŸW[1’Dmú}Şš)>ï/ªß é»øİ"BB’$ ¿ÛlbÈŞ¢ú¹ïâw«Cş–L¿‘Òwñ»/1ÎlQıFHcõûö·(Ê·ˆc¬~gwÕo„´é÷>Ù¤Ê˜~#¤O¿w6ı÷~:¾¡keVÑ§¸¨~#¤qèZ+U44-ªßˆiÔïq’sùö¼E§~÷">±-ªß˜;õ»OqÉvQıFLŸ~Ç(bö¢ú”6ıòåaòˆ>ùîu‰É©Iå;üòİºÚ’T¾Ñ&ßE2’mò}"¾x"“Ê70úä»QŸO*ßÀh”ï"–'•o`ôÕ¾ó®^U$HßÔµ{aC1’4ÏE#rR÷F_é;VãÌ’º7@KßQ·ÈÓ’º7ã¾Ò÷ˆ!>õ&uo¤´•¾Ç‘Zõæ0÷FH_é»¯">¶$uo¤´¹wŸ!æ|&uo„ô•¾÷£“º7BKßk‰zSR÷FJ[é{Ö.®C$uo„t–¾£yX¾Åké»Šo€IÕ)óÎëJõ'gêÉ¹Q½wb´bRõFLŸzï5Ä$Í¤ê”6õŞSFN*ßé“ïÌ>¸ìl*ßûÇ/ßYÁ7uo@´¹÷ºsr#y"ÑæŞ3ŠÈ26uo`´¹÷”³)7uo`´¹÷¬C\¹ÜÔ½ÑWø¾ç¸| I6÷NõMmSõDãÀóØ¢8¿©{¤¯î]Æz6uo€4Ö½×ô	JæŞxûêŞEÖH6uo¤´¹w¦<É™z#£O½×ÜK¥L½‘Ò¦Ş«uá8›ª7BÚÔ{"FOlªŞéSïUÕÈ¨MÕ)}ê}—Ë)È· ãTïÕ«ØN³©z#¦O½O¯U–oÇxé{G]©›º7&çÎ‘k½ÊS¹7b/}·-nÀlêŞHé»ô]UÎ¦îÆKß3ù˜V˜{ÿ>‹öKßj½ÓeüşP"£íÒ÷*³IÆï$2Ú.}¯>yŠ~¿?‘Èh»ô½âÿš¥ÿ  ÿÿ´M²¬©®d'´ëÄÏjÕ¿óo?ÈxVæûä	w:>€´\'6ÒBBÆï¹2Ú.}Ë$ã2~O…ÑøÔwi¼Tr!¿gBé{ê»$ï ¸Œß!dt^úNıÕ|OƒÒWùn9ø„½ù=	BHcå»eç'”‡’Ø÷¯ÜWùnsqg¼”áÆWù>Ö¡>o¢ß¿ Ï§8î½”oÇ8ñ¼4~x!ßBqâyáã.ã[Èq¾W—‘Ø÷/JßÀóÜÄ.ä[Ğ±\ƒŸ^Ì·°cµïÚõÇóxœöÍ¯•FâŞ¿rs£{¯ÉÏ1.å[Ø1ª÷ŒÁç­]ÊGÏ±©w>Õ>DÔû¤õ­1ş<DTªŞõÇ¯Ş­÷àiF¥êŒ6õ-†x\F²$Ñ¦Ş±
ïL½ŒdE£M½c¿^{IŒ6õµxİû2’<oQÏ¹$Hß[c£òÅËH² `ô©·¼xw!I>õ&.1^H’¤sŞÚí‡’©7näFõn•/åc¸1ªwèŸò-ŞÕ;ëàÕ»KùqŒê=9{!ßBQ½ïc¦
ò-æxİ›wÍ^Ê· ctïºD%§R÷FHçccÙx£ôÅ|‹;N÷µùk¾E£{ÙÄùy¥öé¹Ñ¾Çè¼…ÿb¾…£~H™}#¤Í¾GİKíDÌ¾Ògß¹SœUµïøñÛw&¿‚wÉ’DãCß|˜âE$mîİË'©Aİ}ï|«ç-/#I„€ÑøÎ÷äwû/#Éƒ€ÑçŞ­‹†ÏIÒ €´¹wô˜<½êŞÀhtïŞ„Öuo€4–½Or'wH’¤³ì=ù«–’©7nãÆûŞqì[Q>ŸzÏ¡Ê·pãTï¢6T½‘Ò§Şkˆ³µ ê6õg«ä©dPõFHãKc=¶J‚˜z#¥¯é¼/ÑT½ÒÙt~¶!™z#¦³ì½’½˜oÇYön“ßv:”L½1;w6Ÿ}]-M¦Şˆil:¯MœMuo¤ô¹÷šüÕ…ùzœîâi¹hÔ½Ûß½{_¢M¨QùFŸ|Ÿ(Î—d£öŒ>û³§+F²"Ñgß#“ïæÚ70ú^+ªá³QûF£}ÏÎÑ¾$HŸ}Ï&Bw£öŒÆ¦ó³>äIÒ €4Ú·zÅàB’$ öİï»‚’é7nä>ıÎ|VÂ¥|76ıµó)(ò-Şõ{ì! Õo¤ôİùƒ¿ör!ßBñÎ÷
»™~#¤ñÎwŸB¿Õo¤ôéw6qxŞ¨~#¤³ë|nùé¼…ë;ßç×”Ï[à1ÚwVu8İ¨}cvn´ïE£P£ö˜>ûn;ù¤óKù¨:6ûn½oåcÌ¾Ògß-øô‰èT¾û_¾[>Ö©{¢Ï½[áóÿ.#YÀè{å»q)½S÷Fã+ßCÜîÔ½ÑæŞ#gáßu§îŒÆß‘¢ªÜ©{¤±òE~Ø$FŸ{×•¢­®S÷Hc×¹:çíT½ÑÙt>b«%ÉÔ÷qŸzGq§¤SõFJß#ß­Võå0õFHã#ß54å[À1>ò-S¾ŒoÇgŞQ«ü¾™y#¤Ï¼£wÑ'İ©y#¥Í¼c‹Š72Å»Ù$æ[Ğ±š÷®2É`æ˜¾Aç¥‹×œ%3oÌÍ}æ]ïkÊÄ˜y#¦ñ‰ï¡j:š7RúøÎ*ÆFujŞi|â{4qG'©zç]½k„ªÍ'uo`ô=ñ=ª¸ñÔ½Ñ÷Äw¦¸ª‘Ô½Ñ6é¼î)Î’º70Ú&Gˆ‰Í—‘dBÀèsïM4b$uo€´¹÷Œ.®÷'uo`ô¹÷ìeÉ¿6Iƒ ÒçŞë¤óò³!I@å{·%Q“Ê7nä6ù®e‹fŒ¤î¶¾#Å{Nò-Ü_ø>;¸°‘Ô½‘ÒåŞµ¯"&ó$•o„tÉwí»¥ÚÍ™|#¤M¾k[¨XRùFJÛßu-qa#©}#¤ó…ïèú·|;ÎWÆòüÑå×óxœÏŒ1R–Ãì³s£}¯l]åCÌ¾ÓøÌØHQfLjßHé{fìdÌÜ¾“Ú7Búì{ö&§µïñã·ïQ‡hÀÔ¾Ñfß#¶èDÔ¾Ñ÷ÎØÇAƒÊ7 ú+ÉŸ¾Œ$F›|ç˜¢pPùFß3cm«ÒØ ò.ù®yä›§”ƒÊ70Úä;ŠêºÔ½ÑæŞÑFˆ‚Aİ }îÙ‹8 Ô½q·¹wŒŞD™dPùFJ—|GæâÏ_È·hã“ï8Â¸ÔFÉä)]òelq$=¨|#¤M¾gK1)uPùFHŸ|÷2Å<öAå)mò]Šºò=¨|#¤õÊ÷s•oÄ4–¾GÕëò-ğ8{Î›z¬dP÷ÆÜÜØs·:¦0ß"±ç<[w²uo¤ôÍ:1œrPõFFã…ïb»œT½ç]½Ï÷]„ÖNªŞÀhk:cˆ7&Uo`ô½2VTİ¤îŒ¾WÆJŠÆµIİ}¯Œ•*J%“º70›Î{óÿ&uo€´¾[Yü=÷ËHÒ `4^ø¾×$I‚ ÒWøîk‹WÆ&•o€4¾Gª©“Ê7nä¾®ó“óŠ£µIå)m]ç;GUp&ßé«|—³*ÕnÎä)m•ïóÛ‹Úİ¤ò6ù>©»hPœT¾Ò'ßwÈ§ü)ß‚¯í|Ÿ?·\”oQÇYù.¡¦sO*ßˆi¬|·c9r·|‹<ÆÊ÷ˆ-nmLjß˜;+ßEœ·L*ßHé+|¯=W“º7BÚêŞs™i0ùFHcİ;Å)à¢î½~ìî}B~?ä¢îŒ¶²wnåŒ‹º70ÚÊŞYsÊß‘,H`´Õ½û,â‚Á¢îŒ¶ºw[êœeQ÷F_İûN[“’¤A ék:ojÊğ¢îŒ>÷[Ü‚XT½Ñ§Şc,Q«]T½ÒªŞ!®R/ªŞ¸ûÔ{œ5És‹EÕ)}³Öú×5Uo„4ÎZ+ª:¿¨z#¥ó•1Ñ±¨z#¤ó•11^xQõFHßïlb à¢æ6óÎZDå¢æÎQk½Š¹”‹š7b:ËŞ©¦¡,jŞˆé«{Ïêãaâ¹¹±ì=÷‡ü‹š7bË·ˆUo¤´•½çlb’Ğ¢ê¾º÷ìªvS÷Ş?v÷.³tñ\Û¦îŒ¾ºwKQ‡ØÔ½ÑV÷>ÆÈ÷ÉMÕmeï!&RnªŞÀè›s¾›˜µ¶©z£¯ìİ×œoªŞ é+{Çs7Uo`4–½k-›º7@úÜ»İ¶IR €tÎ9¯Kn@Ì½q÷¹wŸU®JæŞHisï¼ódä[¸q>3ò§|‹8F÷®jîõ¦î6÷î«‰ëb›º7B_ø-&¥n*ßHi“ïÖ«¨@l*ßé·V›xíySùFL£|·˜UnDo‘Ç(ß'Ó?&³oÌÎöİÎbV’Ù7bË©ñ›Ú7Rú×%7LfßitŞ¿aÛ
³ïV~üöİVçS.ã÷E‰Œ¾Qç®]Äï+}“ÎÅC%ñûzDD£|O>Ÿç2~Ï„Ñ×sŞyëşEü!¢Ï½g¼åüB~OƒÒæŞ},>Öê2~Ï‚ÑçŞyV¤ü®¿ç@ésï9“Ÿ´\ÈïB:g­õÆ+Œ‡’¸÷¯]Ü8k-7ï!¸”±Æ6lí ¥-ò-Ú[ÎkO>_Ê·€cl9/âòùq|-çeL^mºo1ÇÙr~¶J•J÷şEisïsx÷ş…|‹:N÷^9ù+Ió-î8[ÎËâ]—ò-ğ;Îˆñş›CIÔûWnnì8ï{ñ¾°‹ùyŒ-ç£nŞ)EÇ×s^EóÚ…|‹<Îó±x“o«T½ë]½ëÜC,ÊJÕmMç‡‘¦¼ŒdI£­é|®!Î*•o`´5Ï!\F’
£­éüoqT©}£¯é|´Í‡­]H’¤mØÚb¬ıe$y0ú†­%r‡$Y@Úì;2‹şk“$ ÓÖf±RùÆ}Ü&ß1³ˆ#¡Jå)mÃÖVÍò-Ü‡­”—w!_Ê·€ã¶¶&ŸŞqßÍ½c–.N +uo„´¹w´Şøä­Kùr|³Öæ±Eµ3÷FHãuï1å.ôuŒî¥qÜR©|#¦M¾£utU©|crî“ï(C•+•oÄ4:Oñ<Í¥|4›|¯Hq(T©|#¤Q¾[gïWìÿSş"ßûÿS~uïÿûÿşûßó–?ãàO•| ÿ\‘¬o€-}Ú'-ÚÖ½ÈúCøçjü+a<ÆÿÈë?Á¿—ÌÆnÿ~ÿ\Š%l„å×.ŞçøOØ7=ş ş™ı°?â*Lµ
{L–ì~ ÿÌ~ş
˜Ï€¸
§”í³Ù°ëáŸ™Ï_	Ç3áËëÜ‹Öê>|&=å›o|ÑÿÓş~¢È½r³ âŸ	Ï_×bıÃ±C
j“áÿÌuşJ¸Ÿã˜Lş"ÔåíEÛ½şAü—aÿ}¿~‹(1şH«.nŸ_Zı¡ÿå×g|*ç÷ësŞª²}¯Õ©¯ù_rıwÂ· ˜õĞ“Ôî”2…øTê[T9šü{Ó®êk;$áST©a¥ü–¬<_‹ØgÑ_ËS\©å÷8æQ×öWÊñ_JıwÄÇÈ’¿—â~5)°ùôß	cËq_±%d!»¯R;÷¿dúïŒÁeå¯ø\»ì ï9ØYø‡ñ)ºÔ·ğÒæüı;võI÷¤slşAü—Fÿ=×~ô•?ÏÁ›ìïIËÆ§èÊrş´¿¢t•ãçOÍÆ•ßœåQZâ·V-ùQçLÿ¥Ï'|”–“Ûàb²g¼gc7.b0w³;ŸM‡+ø¾/Dà3©sém³^Èá÷e„&u.Wüxô¦Î@èQçÒTÌœÏcÎ¥uVºüğ}Op€Ï$Î%ÎN(	¿ç7@hç“uÚ ¿§7 h3çc}M~Çß³@t™sÙ“Lú~Ïm€ĞfÎµ²›qÿqÆİÚ%Î¥ö`ó?>ŒoÅ#Î¥Î*÷"ÎHhçR×
õ±qFD“8ß×ıÔÇBÄ	]â>@øA|Š+6qnR.Å§ÀbçZôçüY|âœã¤`Šñ)´øÄyŞÅø\lâ¼êfÃUÿA$âŒ™¶MœWì¦|…ˆ32ÚÄyê\Œx3"š¼yì=•”oFB—7ì®ÑAlÌ›ÛÛ›GQíkLœĞ%ÎcĞB>„ß×!ºÄùŞ=à9Dcâ„&q«³IMÀïI šÌyõÍ./ ¿§8 èRç÷DÖ˜:¡I;‚óáûß ŸÍœsM‘j7fÎ€è2çQ&ëcú~On€ĞfÎ¹jSˆDq¿¶©óèô©Ãã[L1©óÉÆ­}ŸbŠM×òk!êŒˆ®šólì‚Á‡ğ)ªØÔyöZÎ‡ğ)¬ØÌyeŠãÄÆÌMæ<OÊÆë™3ÚÌyNœ‰8#¢Mœ×~Ørb‹Mœw[[ı¥‰8c¦mç}ò0eDœ‘Ñ&Î;Bœz6fÎÈh2ç]§èPlÌœ‘ĞeÎ»4v5õ vfÎıÇmÎk5Ñ­İ™9 Ëœ×¨"…èÌœĞeÎ«uÑÉÛ™9¡Éœ×ù3s­êÌœĞeÎ%D;ygæ€6s.CôufÎ@h2ç¶á÷ mêÜÏ—"Ãï	 ºÔ9ùh·á÷ôê¼åHÔ7l›:½g/:|ß‚ŠIsV6¹úCøTlêœ£‹&ÙÎÔMêœƒ>(ı!|
+6u>+QÈ@gîŒˆ¶ví*¬¯3uFB“:>DWbgêŒ„6u^{/íÌ‘ÑåÎµÅ`?ŒOÁÅåÎõ ªµHÔSm—:×¹·8jêL‘Ñ¥ÎugaÃÈ?ŒoÊâQç(«³‰Â§àâRç8ÖÇf¥Ädêœ?fu:éèŠà÷•€&uó=‹’dê„&uzö(¾“©3zÔù|(•£ù ~Ïq Ğ£ÎC}ÉÉÔ ]G¤Hd“©3šÔy1•?á÷ mê¼gİ`ÉÔMê|¢beÃ?„ß³ t©s-=D»Z2uÆÛ¦Î»Ñ'”L‘ÑUuŞC\¢J¦ÎHèRç±¢ªµHÔ]ê<C8U2uFB—:÷=‹üŸ‹MûîìU¼âSdq¹sÎ)ZÂ’¹3úÜy´Âq’¹32ÚÜ9Æb‡~Ÿ¢‹ÍO’#úŞ“É3&Û>yî)=“É32ÚäyîÂŞgü0¾I‹G÷Ñg.?„OáÅ%Ïg1¦¸§;˜<³<×¶T¹j0y@×”°Fˆ+Âïë]SÂJMÑ=˜<¡«î¼sÉŸğ{–€®ºsk¢<0˜< ­îÜ·èÏLĞÕ±]ª˜*4˜< M£Å–ˆß@tÕÛHÑ„:˜<¡­îÜ—‡3˜;ã~msç¾RÆâÎÈhrç>ôMÜ	]îÜ“=“ò!|Š).uî[œifÎh+:o:şƒøUlæ<çGaƒ™3"zÌ¹™dfÎHè2ç:j­òcy
,6sX¡Ç§Ğâ2ç8KQtCfÎ˜i»Ì9N€–ˆO¡Å&Î‘I—ş0¾	‹©êÜÖ—0g$tU£1i2q?fq“+ŠÑ“‰3 ºÄyŸ¿3Or&g t‰óSñœLœĞ4^{õÉ^/û ~Or Ğ4^{Òøyìdâ€¶ªsb`âdâ„¾ñÚ¢Ùj2q@ß]çP]u“‰3 ÚækÇÆ“‰3ÚªÎí¾<)‰9ã†m›¯İ£²ÇN>ŒoAÅ4_»·"Ã1g$tÍ×î9D×ßdêŒˆu®YÔ‘ödîŒ„&w®¹BLÃ™ÌÑäÎuôQäR|Š,.w^{V‰;#¡ËcÈnèÉÜ]îÜbªÛ›“¹32šÜ¹µUÄË“¹3&Û.wnQC´†M&ÏÈè’ç&«“¹3"šÜyU5ƒk2wFB—;Õ¾ÅÔyı¸Õ¹·.®,¦Î èjØ.Fp-fÎ èê×.ûè½"ü¾
ĞdÎ{ªÏd1s@“9ïÒÅÔàÅÌ ]æœkˆ{‹™3šÌy®!ªö‹™3 ú®:Ÿì†Ç“ÅÌmWOVÉ³ØÅÌm%çKí†Dœq»¶•œ'	øÃøR\íÚw®£"|Š)¾ví]Å“‹‰3"ºÚµWUˆ8#¡­]{ÑZ°˜8#¢­]û˜³Ú‰8#¢«]»/¹)qFBß”09Ro1qFF[»vm•½=şa|
.¶víŞCÜ»_Lœ1×¶µkTwªgdôµk7õxÖbæŒŒ®víºäÎHÌ	]íÚ#Ôû›©óş1«s=ÑE´hl¦Î èª:·¦*A›¹3ºªÎD¼Ö·™;¡ÉËW7Sgà3©s©[¼0·™: «[{×›©3ººµWÅÈÍÔ }İÚµ? ÙLÑ¥ÎÑB”ÍÔmêÜVˆ×³6sgÜ¯}íÚ½.İlæÎÈèj×®!—"qg$t¹së[ÌàÚÌÑõ6•z^|3uF@ÛÓTuÉM‘¨3"ºÔ¹.™:sFB“9×1Eéb3sFB›9GQ‡²›™32Úlß:Ÿ\‹O±Å6`»[Qá˜3fÚ¶Ûı ªØBÌO:O™,sFF×“Î+D¡e3sFB×€í,bï®…™ó?ÙUK¶Ê›Ş/!y]]#¶3?˜½ˆäqq@tÍØÎl¼õ"’×ÅÑtÙ9ëâg—ğ{¢ƒ„¦ÛÎ=£Óç~ÏsĞ%Ğm4>+ì"~OtÑõ¸ó};R~OtĞ÷ºó|&Üeüè £íyç6y³ĞEüç ¢M¢£ü¢‰DÿÚ¹m}$•ãºáÅ¤Ñ'“k¢Ñ¿]]zç7n.ã[|q‰ôAäjpßŒM¥KoüúÜe|16—>i-ï+¹Œo1ÆeÓe%ï‚¿ˆoAÆ§Óuw>¨éB¾EŸO7>½õ"¾E›N«–ƒƒHlúWîmÓéÜÉ»*/ä[ñùôú(!-Æ$ÔSÖÄ§º„zEòRt­T¨ë[¨×ü0ô’Å„.¡ŞêTş"’¥ˆ¶áaeò>‘¬E@t•£û¹D¥B„®‚ô("±­T¨ĞÕÌ]Š8O¾ˆ$ÙD“Pçª"¶T*Ô@è«I¯"¤¿R¡F[Qº¿ówIªˆ6¡>yåà02¡ÆÛ&Ô±;?–¿áÅ$Ô­u>İó"¾…_aZ¥µ•ú4"º‰Ş0v	ßÂ‹M§Û¬üêe|06şç
ªb|‹0.n=ù›yñ-Äøtº»UéÓi„´ét†:Y®T¨Ò%ÔÙ«ük3£ÆäÛgÔ­l	ùe|Feó;úòQcLF'^«]œ)5"ÚjÔUÌN­A•:~ÜJ±ÿ¬ƒ*5º”º¯à—·/"Y‹€èªQ·©2Ç Jˆ¦u‹Íçÿ_B’ó ¡©F}2[qüT©ĞV£Î)w‚*5 š”:R— J„Æ6oÑ*IºŒ6¥ÎÁF¹ˆ$ÙDŸRÏÁÇ	F¦Ô¸sû”z5~Á÷B>†“Rë Jˆ.¥œÂ´‚:52ºš½c-‰ø`|íŞ%Eİ2¨T#£­ß{÷®2&ÕÈh’êdÄùIP©FDŸTW¥A¥!}RâùglR=ºr™Tcúm“êYù„Ëøf|N=sò›´òÑc\Uê]E)!¨S#¢­L½ÄÉD£Jİ~ÌJ}/«ŠZ£J„®+ÓÑ¶HÁUj@tU©û>gú"’¥ˆ¦*õ˜…Ïh¸„$ãBS•zŠkİ¤; è*RÏy
5z„º;M\’\]B]÷ªzÃ!©0š„:Ú˜â*L£Bˆ.¡“w«¿4óiÜ¶]>}¶Ä"ÿÔÌ§ÒãÓuŠ³“F}M>}ˆşşF}=>eL]˜O#¢É§£”ä3ğ.ã[€±ÍìŞYd¾È|MC»çŞ"ënÔ§ÑöâÕjÁ'È_È· ã›>¶ÆâL/ä[˜±;»£èËkÔ§1÷¶ÍË"mõid´Ík·PA>JŒi YµÕFm]óÇŠtR;ÕéşcÖéãûâÉ¦KHÖ"º*Ô³«âj§:ˆ®
õ8Áš¯ÅNu]·¨[Š3¼Nu]·¨—Ê;õi ´U¨·8«íÔ§ĞU nª¬SŸB[ú¤|Ôıe$©0º
ÔUŞ?èÔ§ÑV >ZÔ~;jÜ¸mê³ø£Âò1º˜
Ôµv‘Ôv*Ôˆè*P×ºø,ØËø^\êZ‡°¬N…]êZÄ´¯Ëøa|ê;MD1¾ÅÛH²®ô¥S¡FDßL²-3¿oQÆX >Û#w¬N…!mê5E½S¡ÆìÛV ^e	ùg|ê5»L™Q#¤©B½võÕ0§FD_…z‹²¤N?~§VécR§B—S¯=Åö˜Ô©ÑåÔ[ô+'5j t]£›wR£B×5ê=ô—Bò ´]£^EŒNKªÔ€h»F­’Æ¤J„¾÷¤‹¸éÔ¨ÑeÔ³n!ıImF=ÇI·m›QŸBœ×&5j„t½ŒUw“ˆo±ÅfÔ3Z—ë·ğâ2êÙÕ$¿¤Fˆ.£k	9HjÔÈè2êÕCÜõNjÔÈh2êEt¥'5jD´•¨ûP×“5BºŒ:Ê,B`’5BšŒ:z6QLjÔ˜{»Œ:r©zQR£FH—QGß[L&KjÔiz^úü©Å¤¼¤Fˆ®÷¥ëªÃAzü˜:îOü³Ô¨ĞÕô½æ^¼1oP£DWÓ÷\M|Óƒ:5 ºš¾Õk—ä<@hrêœMdeƒ:5ºœºu5Ò}P§D×CÓEÕÜuj 4¾4â6ã RŒ.©îcOù‡&É Ú¤:³ÈŸ‘I5îÜ6©Î}ş%
ò1¼˜¤:ÕuôA	]Nİw¯]êÔÈhM¦ãsjD´Í&‹¥ß"ŒÍ©Ï7V$ã[ˆ±]£îÇXâ[ŒñU©[_ü±äùdŒUêûÀ¸‚|3¾*u¢GtP§ÆìÛV¥cˆ”A!}Ó¾»Ø1¨S#¤k6ÙâgP§FDÛl²)jı“*õü1+õ¬¢§lR¥BÛóY»tşwT©ÑÖø]kõ"’¥ˆ¦ÆïÑ[ğ|R¥BSã÷˜sKB’ğ ¡«ñ{1hpR£BW•:š˜~1©Q¡Í¨ÛT/*MjÔÀh3ê¥¦+OjÔ€è+S‡QjfÔ¸qÛŒz­)·nfÔé1êZzˆa~“*5"š”ú|TEtUOªÔÈèQê‹(µ&UjD4)u-gwäv0©R#£K©÷Ø¢ÏhR¥FFÓMêS”©'UjD´•©oqUB¾EßMêâšÖ¤FŒ®*uDEÁI“o[•ú$ìâá‹I!mUê˜K\Ô¨ÒT¥®SÕW'5jD´U©»ºµ¨R¯³RGC:Uj 4)õAìb-.ªÔ€hRê¨çk‘¿"Y‹€èQê8ù°ÈUj ô(õÙ‡HxUj 4)õ	ÒEÉ[Ô©Ñ4œl·¥ÿÌ$İBÛp²µªxÜdQ§F×p²\!aQ§D—S·:D7ğ¢J·K©[ÖVÕÖÍ”!=J}²u5xQ¥FD“R·]¶üßÂ‹I©Ûl¢aQ£FB“Q·[¼”¶¨Q#£É¨Ï Ó1fÔÈè1êÃ×ÄØ¯E]F{ì”_Ì[Œ±õùcWqr»¨R#¤I©[?ÿn«‹*5&ß.¥nÙS\0ZT©Ò¥ÔçŸUdÚÃ”!=JİfôPiSjD4)u»¥şÑlªÔûÇ¬ÔçWL‘QlªÔ@hRê6{ƒò6Uj@4)õI(ŠX‹›*5 z”úDÁ%^!ÛT©Ğ£Ô-sŠşşM•MJ}›ÉD ŞT©Ñ£Ô­-õÄ×¦J„.¥î·v)E’î £I©û:	Ïl7Uj@t)uÆ®â¤qS§ÆÛåÔÙc	§ŞÔ©ÒãÔ™1BÅhæÔˆhrê-ôßú-¾˜œ:g¹}3©FD“TçšµIÆ·ã’ê\£òBÑ¦Nˆ§>‹qn‰øclNço-N¡6uj„t9uŞ|B®Ç·0ãrêfJ¨¿6sjÌ¾]N¥wq¢·©S#¤Ë©ûjjÏ¦N§î#Šå°©S#¢É©ûÉqù ú(Ì©ÿY„V§î·E†~2—ğûjDB—Sï½øı¢‹ø}-"¢Ë©OÎ/_ÄïkMN=SLG¸„ßS$49õÉlyÏÛ%üğ ¡Í©»(_Äï	"zœúdÂ¼¿ÿ~OwĞ¥Ôí¾"?çïÙ2º”ºB¹)~ÏuÑ¥Ô=ÆæÚ‰RÿÚ¸]JıÏ©öE¢Ô¿ =J}Çós²‹ø]|eêlüªËø^\eê#1¼iğ"¾Å[ºÖÊD/ã[„q)uŒ*”]Æ·ãªS‡º^tß‚Œ¯NİFò²ùe|ÊÆìüáÕùgl­ß»4~œw‰SÿÊ¾muê²:×Õùg|uêº'ÿùè1¦:u”!óGâÔ¿]uê:·È)*uêúcvêC(¶ğJ• ]JUL¼ˆd)¢K©o&ßw*Uj@4)õ?»"$)š”úd|°û%$	º”:êÖ+‘ä;€hRêœƒO2º„$İB—SG-É§¼]F’í £«óûddÂ©+uj@t9õA\|ÜÉadN;·Ë©£í¬j=2§FHÓ»Ôgóæï{_Ä·ğb|—Z¼A~ßâ‹ë6õê³¨O†95"ºnS§¸[tß"ŒíYj]„©T©‘Ñt™º‰1K—ğ-ÄïRgòöôùc|w©g_E~ÕoQÆö*õZÉ¯KFfÔ˜|»Œúìß¼ê2¾ß«Ô»oqW©P#¤éUêÛ÷¦¾l&Ôˆèz—zíÆ»¡"¨PÇY¨ëšê0/¨Q¡mâ÷’¯ÉZD×ÄïUB$AM¿ïèyù#’„M¿×}ÚT’|]¿çÉk%"Iw Ñt—:CÜ@¸„$İBÛ]êY¦¨g5j`tu9[½üI®ˆ6£>ÁeªÅÈŒwn›QŸ_’?\t!Ã‹É¨oé’çcño£ş   ÿÿ *ıxœ´M«nG’çş¢Æ§.ù‘=mÓØcƒ¢]à‚îª¦«<0Æÿİ™Ò¯#é®•ƒ^3]Õ‡í7wF<;##öÇ¿û÷?şïßıİ­¿üù_ÿzşºŞ¿ş¯üñ¯ùóùÓïşáÇú§ß¿ó÷ÿ¹ıá?şùoüó_ÿô·Ÿş'³|+çïÿ—ıÓ?şñüyŒo}œ?ÿ÷?ıùüáïü—ÿñü÷şğ?şãßşrÿ_Ë·ºw›óÿ~ü»~ø?¿ûoúç?şõo?şó¿ÜD+-_öï[û¡ö¿+åşãşÓ_şü·ÿyşÃıÛŒıqÍ/ŒYúã÷WÔªã0{‰o	û·˜qôV‡bÌ7Æ|clùå)^üÒ=×XŠq¼17ÆüºwŠ_ºÖ]!Î7Äù†8Ïˆµ•o£QÈgE*Èõ¹Ş W~«ç¹&…Œ^·ü±÷ä~|’óë“õ^,©^ìV[yc_díıÛæoö\enYß ëäùu!ëùs;dVµ‰·öùhîö³ r©W{EùßâL{‹3½õ/òÄÂY9cÛü)ö
Yıÿ#>.ÇøE´–ñÄNş!YŒ@ø¸û×Ÿ9ãÛx;„‘,E@|\‰½}y]b}küm™kË‡HV">.Ä^¾ÎoâÖºøæ}IÆ„	OÿºS.Ä^›$é >f;×álß
ß·W+úW&Ù >&;ƒôîßDdi3ävC’ |ÌuZ|Ğõäµ‹1¤6¦\‰$×ÆÇT§ş"B7±Û¬‘d:€ø–è´5¾ÆçgbSÆœ¡ë[`©o‘¥ø²åÜbÆ:S1>†–·ØÒr|y§wQ¿tÎÁïƒøZ\:İb´-ß‚‹I§[´•\²:õiD4ùt;ÏQîŞÌ§‘ÑåÓ»
îT§Ñ¤ÓÙ‡~aŞ"ŒO§s—”Ïñ-ÄøtzD+*V3FH›N×-£ÓiÌ¼m:=¸ğwêÒHhséQJ“ñQ`L.}â $|‹16•Â¥ƒºt|¸]:JŠß9¨K¡Ë¥Ûî)"YŠ€èré:‹ØƒÊ4 šdº”5$!Iw€Ğ#ÓemHr 4ÉtY½OîûAe=2}Rˆİxh	*Ó@è’é}‹C¢ 2Œ&™.YV“?4És Ñ%ÓeÔ"ÎƒÚ4nÜ.›.#Îv¯ £‹G§b“ƒê4"štºŒ>ÅÇ :Œ>ˆµHÄ·øâÒéÃ˜K®Æ·ãÒé’{§Ú™O#£Ç§ËhsHÄ· cóé²ÏÖ£¶pæÓióéì!ßÂŒK§[µÔöÈt“o—NŸ=¿ş-/¨Q#¤Ë¨ÛŒÖÔîÃŒ!=Fİæšâ›hP¥FD“R·™«ğ¼'©Rç‡Y©Û8ˆ|LªÔ@hRê–[>D²Ñ¤Ô-"Äë’T©Ñ£Ô­gÒŸT©Ğ£Ôí¼Ğ¢Ú$©S¡É©[Í*“:5 š¨³—Æ’:5ºœú¬Ã©7E’í £É©k_«ÈµH’@t9u'‘P?5sjÜ¹]N]sUõ™R#£G©kÏİT dJˆ®‚ï)¾å%Ujd4)õÎÒÕKÍ”]J=gã	cR£FD—QG0I…]B¢’:©O#¡Í§g¤|]ŞŒM§ËŠèüTRŸFH“O—İÔ×ï¤>™·Ë§Ë^!7pæÓéòé²ÇJ˜O#¤Ç§Ë.­«½‡ù4"š|ºœl‚¿Øƒêôø0ët™-4!YŒ@hÒé2"ÅK=¨N¢I§Ë¨³ò·ePDNŸ‡X“‡ÁAuM'ÔóìJr%’l]GÔsOaYƒê4 š¨ÇÌ&	I¶„¶#ê~$ùC“l]GÔ½ŠÈ2¨M¡í„úVQ[³iÜ¸m'Ôy^µë0FHÓ	u–G0ƒê4"ºN¨#»ÁAuM:İçÆ?¨N#¢K§{=I­b|‹06ŸV·Õi$4ét?Æ#_é·ãóéÈşqgP¡FH›PŸ¼Vxà B.¡^}/µó0¡ÆÜÛ'Ô³É¤‡	5BÚJ¾Ïî#7&Ôi*ù.­†zµ™P#¢K¨÷VÇ¿“õü0õyŠCœ¹MjÔ@è2ê=§('›Ô¨ÑeÔ«ñ]bR£D—QÏ!&5j 4õ3©OŸË§GÓ¿1Év€Ğ¤Ó±”LªÓ@hÓévF2’\]:]ÏR”ˆ$ÓD›O×)ºMªÓ¸kÛtºee—“ê4Bštú,ÑšcRFD—NŸ—LîÜL§‘Ñ¤ÓmñAyRFD—N·Øz5¾ŸNçç&jd4	õµ@‰øc|B½vÛr{|2Æ~d1õ{ıfl¨wññ{R¡ÆÔÛVñ]³Šëò“
5BÚ*¾ÛTßÊ&j„4U|÷T×'jDtU|G•¿Ù‹
õú0u‹8/"$«]ßÑ–…‹
5 º*¾Ïc_‘¬E@4U|ëzQ¡BSÅw]S||ZT©ĞUñ]F®Z‹:5 º*¾[×-uj ´9õç}QŒ$İFWÅw½…
‘$;€h«øn·‡Ÿ`dR;·­â»ÎMÉ•j„4•|—¥šØ.*Õˆè’êãY¡öF&ÕÈh’ê5›êE¥m%ßcéÇøbŒ·¨Ş˜·c“ê±EwÓE¥}§Ô­‰ÃÕE¥!m§Ô}ë­ç-ÌØ©£Šë–‹*5&ß¶3êlC|åYT©ÒVô={jÈG±QÇTû#SjDtõ%ëE5–ÜT©÷‡Y©O¢åî¦J„®¾dc¦8HØT©Ñ×ã{‰ÂôM•]M¾£ˆı›*5šš|ï6ô3$ùÚ”ºVQ^´©R¢I©ÇnâóÓ¦J„¶KÔm§¨ÜT©Ñw‰Zô6İÔ¨Ğw‡zq’¾©QãÆmëò]»hº©P#£«Ë÷IÄ¦>„®&ßsÑjSŸFFO÷RUÿ¹M}]M¾÷R‹7õid4ùôÙªø¬¼©O#£Ç§ÏO½DAõ¦>ˆ.Ÿ>AIÕğlêÓéòé^×”Ùj„4	uÛ÷c`dF¹·íz-Û2£FHÛ!õIÀEwüM!]mÉ¶h“·©P#¡ëŒzdãñº&Ô½|˜…ºİ)sôw¾„ß_ŒHè:£n+ù}¿¿ÑuF}›_*Âï/E$tùô±šM\Âïg<HhòéYy'‘øıt]C³ÆíŸ/â÷³D4ét”ÆGH\Âï';HèÓéRø•ĞËøı\]:}û¯ÒLç"~?ÓAD›O/Õçû0Ÿş²oÛN¨g†\D¨¿@šN¨GO¡‰QAt5%Ë¾xÛËø^\S¨£‹Á‹ø_lc¨Áğ‚ÁËøblc³Šªß¹Œo1ÆuB½Ká…Àñ-ÈË¾×äÃa.ä[”16&ËªŸä[œñİ£®ôSÙa$Fı%ù¶Q¯¦—$1ê/¾Æd‡ECbÔ_ ]gÔÑùe‰‹øhlgÔuurK¹–ß—úk¥ş)Åù²~˜•º¶}dFşr5ş6¡ëŒºg#ıŸˆ¿\‹¿è:£î“åŸˆ¿\‹¿hrê#?$çù$üeÎóÛ„&§n¬êğ—	Ïoºœº¶ã|"ş2ßùmD“S×6É  OÂ_¦;¿Mh«ú^ä6ú'á/sß&tu)¤¨ñ“ğ—‰ÎoúJ¾{³¬Ÿ%ÔßÙµmBİ[#û?!C‹I¨£æToô¯„ú;ˆ.¡dµxŸŒo±Å(Ôäƒí'â[pñ	uY$íşd|‹/6¡>»§ü¥ßâ‹ku=¯ŒD|0¾9Ô½åÓßôÍÍj­Ë­ç-ÌçPùnû3ã¯|ú;™·Ë§ë}«ÍçW>ıHß(êÎZÜ|B>:ŒÉ§GİdXÑ'â[œ±ùôh‹t[ºŒútûpûôù¡…Æ4êÓ@h«ù>‘¿0ú4 º|z´Bº-}"’µˆ&ŸYI)Â'!Iy€ĞuFİº&$	º„z®BF>}"’„]‡Ô[¯C’î  onV]"ùnÔ¨ÑÕ™låÃR$¹ Ú”š·&û™‘)5nÜ6¥>)#¹‚ğ	ù]LJİfŠOŞ*5"º”º•%¾(7ªÔÈhRê’A.	~"¾ÅÛ-ê­plT©‘Ñ69kVÍøbŒ£³ÈHOÄ· cœ5Ç’ëñ-Êøœº…‘Oò-ÎØœº¹Õÿ3"SjL¾mJ=7ú	ùfŒÉF“Ã”!MEßI*ü?ßâŒouİâóI§Jİ?ÌJİö=¤V„d5¡I©ûIÅ7úN•MJİËÙxxÎÓ©R¢G©{ÙE$·*5z”º·ä^è'!Ix€Ğ¤Ô=ÛJ‰Hò@ô(uÏ™¤Úí“¤;@èrê>gÉM‘d;Àhrê¸É7÷ÕN]N#‹|ŒÌ©qçv9õhYIû´OÈÇğâqê1V%—Š>ßÂ‹Ë©ÇŒ)>ÍwêÔÈèqêq6ouªÔHhRêÑêÅ'*52š”:s±A@ŸŒo!Æ¤ÔYË\ò~‹16¥}¶•42¥FH—RÇØIúˆ~B¾…—RGl6‡ìgFæÔ˜}»œ:z—[A¾…›SGË&¾NtêÔéqê¨‹İúD|‹3.§ZR|têÔñavê(¥‹2Ì N„.§^}ˆÚ¼ Nˆ.§{ˆ/·AMNkŠ“· N„&§>9™¨êÔ@èrê^:iªõ‰H@49u)lÍ'!Éw€ĞåÔmß†'Š‘¤;Àhrê>ú×8‚:5 ºœ:Êb­çfdN;·Ë©£œ ™S#¤Ç©ûÜ)>”ujD49õI—Ì©‘ÑÔìd¤ó×'â[€qIu¿C$åOıblİÉæšÂa‚J52z¤º2gçñ-ÈØ¤º­VÄ×å R¶îde2“úò-Î¸¤º·¡n]•jL¿]Rİ£ÕT$“j„tIu½É­ôOÈG‘ñHu¿wûÕ‚dRˆ&©¾S¾D±hR©Î³T÷ìS’Õ„.©=I[‘OD²Ñ%Õq6şº$•j@4IuœİT’œMRYHƒ²OB’ñ ¡Mªk§1I¥]R}òoIHò ´Iõê¬cì'#Iw€Ñ%Õç¹ë]‘$;€è’ê~<KXLR©ÆÛ%Õ'U½ÔLªÒ$ÕAš’"¾…›T×ÙE9YR©FFT·Ù†8KO*ÕˆèjùİNÒ(ßBŒí>u®-Šè“J52š.T÷{V­ß‚ŒñBunnImµß‡QT%$uj„´Õ~ïI³o—S×{ä¯öpæÔi»O±EÑVR§FH×}ê`£X>ßâŒí>õ	……ÿÖƒ:õø0;u]±…°êÔ@èºO½/£B$k]-¿kMQ,:¨S¢k,õâ(}P§BÓXê¬!.ÅêÔ@èš¡5öÇÀƒ:5 zœºÍ*öÄA• mJ­Ê‹j ´	uiB²j@´R×H¹™Pã¶m;¥ØrWdB¡QR²*ÔˆhêQÄÛA…=B£W2óâñ-º¸„:¬Ê\Œ	52š„:R,ªÓHèÑé˜m‡
0L§ÑWø½¦¸K=¨O#¤Ë§³¶!
¿õi„4ùtÖâÃÄ >™·Ë§³p©~mæÓéòéó$Ù¸OÈG‡ñøt¶ÒEeÇ >ˆ&ŸÎºªh@0©OÏ³OgÉ)®°NêÓ@hòéØÑE œÔ§ÑäÓq4K\æ˜Ô§ÑãÓ'q$£9>IÂ€6¦ˆ/“ê4º¨÷=@Pˆ$ßDÓu¬.Jò&õi ´İ¥.KUÅLjÔÀh3êÙEAÇ¤Fˆ¶#ê5§h>?©QãÆm3êKÂLjÔi2ê:6™øü‰ø]lF}òZÑ7fR£FF“Q×VEqÌ¤Fˆ.£.Eõ'›Ô¨‘ÑdÔ}FNÕNêÔÈhšJê¨mR¥FBÛPêì)
X'Uj„´•}Gq¹R¥FHWÙw/[fL©1ùv)õÃ"îîLªÔiëO6S}-›T©ÒÕŸìCµ‰3¥FDW²ÖUIÙ¢J½>ÌJ}8êâOqQ¥B×õÜ!”zQ¥DWËï\]ÿÎd-¢©åwÜ6Š¤<@hjùİëN½¨S¡«åw]jìÅ¢Nˆ§.k5QR½¨S¡m†ÖÙ¸Ef»¨S£«çw—uj@t9uéeŠ;n‹:5îÜ.§.7 ªßš95Bzœúj–Œ€Ì©ÑäÔ'HOQ¯¼¨S#£Ç©ËÉuô/ı`l=¿Û=)RŒo!ÆÖóû Ê@ÍœM=¿oEÿâ¸¨T#¢­çw*¾Ü.*Õi›K}œZ|ˆZTªÒ6—º«™‹J5¦ß.©®w&‚Z’LªÒV÷İ{L~Àº¨T#¤©î;#EŸ›E¥muß÷µ¡Œ›Jõş0Ku]%÷„M¥]R½"Ä×“M¥]R½úò)’µˆ&©^¥v¾ël*Õ@h’êu‚ |†$ãB—T¯1DàM¥Ms´¦Œ€›J5ÚiE‘Il*ÕÀèMİöãW7•j@´Òê«‹Ş_›J5îÜ.©®Ù„imêÔÈhš£•»‹LgS§FD×­Q†(wÛÔ©‘Ñ4G+{å_x6Uj$´M¦êËÄ¦JŒ®›Ôwª„
‚L©‘Ñt“:ö™SjD´İ¤}‰i;›*5BúFSO1ôrS£FF×MêÈ*¦ÙljÔ˜{ÛŒº«.Ğ›
52Ú„ºmq!oSŸFF“O·6å+Ã|]>]ÇZt{¬…úôOéêZ
ÿâxÙ˜t@tõI'&ıàxÙ”t`t)ui…_T¾ŒlL:0zœºìÜ¼›ÑE$I"z¤ºÜÆétÿ¾ˆ$çAD—U—ZùDàËHrd4iu9~&#ÉyÑvX=wÓ$çAH×iõ˜ƒ·á¹Œ$çAFÛqõjß<Ì¬¿lá6µ.±øgÑKùh\CªÏIS³Ëøh|Sª÷ä2ò1Ò¸ôúNóS{$óë/Œ6ÁÂÛ€]ÈÇ`c3ìè¢5Æ…|Œ6®à¥n†—ñ1ÜøZ€Í›æ_ÈÇpcl>‹8L²¿P{€«%É$ûK:î²ìª"åR>ÆcğQù´Kùª6¦.à±ï‡r¯xşÍ¹V®ÚõÃ¬Ú=Wò3‘­H@t5}‹¤¼rÕFW'ğY’½Œl=£©øŠÊïY_D–ÿ ¢é¢u©ÉÏº."Ë~ Ñ¤Ú÷!ò[G—‘%?Àhºj½÷à%3‘å>€h»kµŠˆ]¹j¤ë²õù±õzd™0Úú—|ÊÖ¤ª[¸Kµ34¨5IU)=ªsWŞóö2>—jç‹_¸‘Æ¤Ú9jåµ\—ñ1Ô¸T;kácE/ãc¬±51›E	Cå¦¦>fy2Hùc?F_#³Ö&¿Ìu)ÃOµw×ïÍc¼±™ö1/~} ©jc:nSí-FO^ÈÇpã3í¹ÕÛME!M¢½çæM.ãc¸±‰öójãİ>ì=S|CkÜ³ÑåÙu&oHyÙrFWwğİ+ïøÙrFS{ğ9¦H,÷l@tõï‘|ãiÜ³ÑÕ ¼Ïà½(/#K}€ÑÔ!¼±}7®Ù@h«Ÿ}èŸšå= é*±„w5®ÙÀh«Ò–‚¤š;¸íD»Íï“^Ê×8c:Ñ>º ãÕld´h§¸õz!ëD»Â¯/\ÆÇHc;Ñ.G´å{ókl×°÷K>ÉÇ`ã*/»ğ¢ñËøn|Uãu.ñÉ´qÏFJ[Ùx“¾@5]eã'ä×A$ÕlÌÆ]š}(ƒÏ ¹”ñÆX9>×TÖ@E)Mµã=›(ªi\´‘ÑU<KU=wnÚıÃlÚuŒÅoc_D¶"Ñvûì‘ü­éÜ´ÑeÚ%“
»Œl=£k—êÃvYşˆ.Ó^¢mÓEdÙ ºL{Í©nç¦Œ¦íC">Œw®Ú€è;ÑÎ5äoÍR€thÏ(¢,²sÕFÛ‰vo÷8?Tµq·h·¾x‹ÜKùh<ª=Êè¢x¼sÕFF“jSdº«6BzT{ŒPî«62šT{Ìà“>.ãc¬q™öXs
‹íÜ´ÒcÚ³Ô.k:7mdt™ö,sñ;»—ò1ÜØL{¬èâBCç®”&×Ù‹¨&îÜµ1w¹ö8ñFbç®”.×ı^Q”¯nãqíqŒM?ÉÇˆãríÑÖ+Á];>Ì®=ê¬¢ô'¸k¢ÉµG-K¼ÛÁ]M®K^ŸîÚÀèqíÌ2“ÆîÚ€èqíóJ7>uï"²ü]Õãç­æÍÅ.#K€ÑãÚQWã»."Ë~ ÑåÚQ2ø”ÜÉ’€4¹vÌÑÄw•à®Œ.×Î~®ƒ»6ná6×î!j^Ê×@cª¿7å“|4¶êñSœ„wm„4U·ª¾£wmdtU—¦Z—m„´ÍÀÕ Áe!Måãe¤8A.ÛÈhÚ¥Ol‚Ë6RÚÊÇOÄwª‚Ë6RºêÇoã$•SÙÆ„Ü%Û·¬¨­	.ÛHi+ ÏñUÌ¡²”¦
òª§NpÙFFÛUíVÏÕ’Ëv~˜e»÷­>¬$—m@t•÷&È_F¶ÑuU»¥ò›ä²Œ¦«Úõìõ|‹L.Û€è‘í~L|H.Û€è:ØŞ­ğÙ‹—‘¥?Àh*!Ÿ#Es¹ä²ˆ.Ù>	|7¾’Ë6@Ú®j7®“»6 ÚæbÏ]Dª›Üµqw¹öm¶!>­$wm¤tMÆ–‡É]m£±×ï6um„tÍÆŸ’»62š\ûmE>ÆÛtìûÙBB>×xì–U4$JîÚÈhsíºURr×FJ_W´:ùKùq\®İæ*rŸ¤®ù¸Ëµ[æZê§®”¶!Ùçé‹‹,É])MS²ë^2+§®Œ®1Ù%Õ7èÁ]{|˜]»îcÛü9îÚ€h”½Rxìà®Œ®ä£¯ÎßìÁ]MS½²-‘¥îÚ€hë½‹š¹Á]]È{¨Oƒ»60š:·,¢¯åà®ˆ¶ûÚå@ò´bp×HWò=Šè6?¸l£­ùŞE„ÂÁe·p—lÿtñT½ÚT¶‘Ò42{×]Š—mdtÍÌ^±DÎÁe!MC³çœâ$dpÙFF×Ôì±UAÈà²®ûÚ£NÑfpÙFHÓÜì1TQñà²Œ¶ÁÙã¤ºrM>Æßäì1ÄU›Á]!]“³Gİ|²é¤®ù¸ËµK-î¾îÚHérí¹‡Ì‚¨k#¥ÇµËı–¦Äº62š\û@†(˜Üµç‡Ùµ¢jå>¹k¢ÉµKìÑxš6¹k£ÉµKÌÔ?5[ÀhšöÙÄ—ŸÉ]MÓ¾¢M¾ñL®Ú@hRíUÍº˜\µÑ£Úç)6ÑâirÕDÛ°¯[¬"7–ú ¤KµÛ~xcXæŒ6Õ¾Wx$œ\µq·©öí]¢~nªÚHiRí,!ÊL'Wmdt©v–-.N®ÚiRí¬êëÏäªŒ.Õ¾*« ª.ÕÎ8kRA>F—jÏ™¢ìprÕFF_k´b İäª”¶Öh}tıv?F[s´¼ı$umÌÇ]®]GUÅ5“»6RÚš£ª¾LîÚHij–sˆÙE“»62ºš£eY•ÇœÅ]{}˜]»FtÑÄvq×D×¹vßE´ƒYÜµÑu®}ş­Ä…íÅ]MçÚm«®:‹»6 šÎµ{U×Ş—m@´kÏ)*—m`4kkÙ^\¶Ñw®=Õô¹Åe mçÚSß]\¶ÑÖ‡<‡ze¨jãîRíº¢-é.®ÚHiêB¾Gˆ*ÓÅUMªİNÀóŸWm„ô¨v;IÿBµ¸i#¢É´[œm\şØ‘ÆeÚmŞZ4ùj\ä=‡¸›¿¸i#£­‚|Ö*>õ-nÚHi« 3ª
‰Ô´‘Òu[;³‹“ØÅM³q—i÷È-D7m¤ôÖîU|İ]Ü´‘Ò5X»nqgrqÓFF×mí>jåYĞæ¦½?Ì¦İÛÍ7óÍM]·µÛLQ|¸¹i£í¶öTsX67m`4İÖncŠ×zsÓDÓmí:¶~aXşˆ&Óî%‹èñ½¹i£é¶ö]\DÜÜ´Ñv[{ö%î…lnÚ i2ívgÆÊİ‘¥>Àè2í[M.ÚÜµqw¹vë»Š›ï›»6Rz\»-Rhìæ®Œ.×>¯ö”?÷c¤q¹v¹ÿP×FD›k§hÕ·¹j#£KµS¶RŞ\µÒ£Úm¥š/°¹j#£ï²v¯[şÜÑÆ§Ú'Ó6Wm¤t©vŸ)
È7WmLÇ­ªÍqsÕFJ_c´šâè}sÕFJWc´YDÇˆÍU]ª=T3ÎV¨jÿ´½ª=FáGt‘¬HDt©öªmÓ,í2’õˆŒ&ÕRDäe$ë=ªmo¸ˆ$BDjÇ1şÁô"’ü]]È×Ù{äCÒdô¨ö½­Iöƒˆ.ÕÎŞV¥QæB’ä!Mª}’ñÎÓÈËHRd´u!Ÿ¥ğïS’©ö—-Ü¥Ú¹D9ß…|3®_+y1ße|Œ3¶_5ÅÀÁùh\¿Ê¼sÒe|Œ4¶_¥$—¯ùk\®«~/íB>“k§ìI}£Íµ³ÇÒïÍc¸±¹vìü®ä¥|8.×‹·b8Ìµ¿äã6×^cğoi—ò1âµWåC&/å«Û˜\û$s|6âe|9¶Æh+ù¬àV¹j×³j·UÄuò‹È$ šT»ÍYÅ‹ÊU]ÃµïğFÉÈ–#0š†k½
ßÆ+Wm@4×»òk_‘¥?€hëA^’}]F–ı £ëT{oçuYòˆ¾Sí&°\H–û ¤ëT{ı[®G–ù £­	ysHªÚ¸…»Tû¬á!×$um¤ô¸v?Ïqğ/+•»62š\ûN»ïum„4jï)º„^ÆÇPc;ÖÎ±CB>Û¹vÔÆ|_ÈÇhã:×Yø­¯Ëønl®İöâÓnå®”¶sí:EÏ±KùqlçÚum™S×Æ„ÜæÚçQJû¢®”6×>ox¨—‡º6Rš\»eá·¿.ãcÈ±k·ŒÆ!—íöa–íó[‹û!‘­H@´•wqdÜ¸k¢­‚¼¯Â³òÆ]]ä±—ü¥Yˆ¦
ò¶«8mÜµÑUA~ç¦ñÍ±q×Fk÷V¦ŞvXòˆ>×Jlwm€´¹v™üÚéed™0Ú\»ö*,¶q×ÆÜæÚ5C|FkÜµ‘ÒäÚµˆfÊ—ñ1ĞØ\»tuÒ¸k#¤Éµç‰5Üwmdt¹öO=‰äc°q¹v]+„{5îÚiríÒÖ’+ò1Üø\»œìG¾ÜñÆæÚ­ŒçÚ»6Rº~•"zÌHêÚ˜»\»î.^ÊÇˆãkŒ¶jÕÏòUnLÑÆâ÷Ş/âcÄñõE›uòü¢sÕîfÕ®1'¿õ~Ù‚DW_´;«“Ç›Î]}}ÑŠxe:wm`tõEë]|êÜµÑÔ­6qÅæ"²ô]}ÑJSeî»60ššïªª³;wm@´5!Âµ;wm€tõE‹ŞDñTç®Œ¶&äYT1Hç®[¸ËµË½xªvêÚHéjB>‚ºŒÆÖ„<ÖâÃü.äc¤q5!^DvÖ¹k#£«	yÌàm7.äc°ñÍûZ]ægÔµÒãÚçåİ#/ãc¸ñ5!“èÜµ‘ÒÖ„|¦*×íÜµ‘ÒÕ„|×
’º6&ä>×Ş]ÔwîÚHi®]Kˆ»6Rš†k·ZÅåÓÎe]5äm¨Â¹à²fÙn½L‘——m@t‘·]Ä­Éà²Œ®"òº›8n.ÛÀh*"¯}‹ä"¸l¢©ˆ¼†è}Yşˆ®"ò³=Ê†e?€hª!o±ùøİ‹È’@´õ ßzãa¹@š\»¹õÆÃ2`ôõ ß)Ä&¸kãîrísó	—ò5Î˜º÷»ı(ÆÇ8ãríZoñ³‚|4.×ŞKœ1WmDt©öŞ…Vº¡Æv¬]ËÅøÁU!Mªİïì]Åøm|ªeˆâÈàª”6ÕÎ^D!UpÕFJÛ¼/UQÜ´1·™öY”âªMpÓFJÛ©vŠi_òUll‡Ú•wg¼ŒñÆvª=KB’‹v~˜E»³OJD¶ Ñuª©~ëä¢Œ®SíX|ØàEdËM‡ÚqD›Ääˆ®a_½‹SÉ=]‡Ú-’Ï:½Œ,÷FÓ°¯:Z}YêˆÆa_)Ê“‹6@ºD»TÑÉ"¹g¢Í³ëš¼·÷¤¸Í³ûÚâ(6¹g#¥É³³¤ü¹©g#£Ë³sªZäÏ®#Š¸”\´‘Ñ$ÚuÆõãÉE!]wµËÓW.äc°qÕgLq1¹h#£­~|æ¥?ÉE)mõã3ŸËq)#Î¿¹hÿ?   ÿÿ´K$;®D7Ğ—”ö¿±–2€~VÈl3MìïàT¤»Èãüèÿ·ş„øú3¹ic:î2í÷´¢|Œ8¾šv´Hõ‚SÕFJSM{î&35ªÚÈèªiß=»”1¸iÇÇlÚm¶.ZA‚›6 ºJÚ£nq–7m`t•´Ûnâ$®ÚÀè*i·møÁUM%íÒº¯	®Ú€èRíµ"åÓÈ²`4©v–%Òñàªˆ6Õî[Ô½‚›60ºLû¶Xğ\µÑ¦Ú-Š„ÁUOp›j·¡ÚÁU)Mªİšš®ÚÈh+iªÿÜÆ¥Ú%šÄàªŒ¾šö5íàª®šviª)2¸j#¤«}|,Ñ*\µ‘ÑVÓ®êæİKùo|5íÚ›øÚ\µ‘ÒUÓ>qÑU\µ1·µkİâ{_pÕFJ[Q»Ì"&&ƒ«6RzTûvÿ(o ¦ˆ&Ó.{1ú•\µócVíƒØÄ(PrÕD“jŸ?uŠÎŸäªŒ&Õ¾{p»I®ÚÀèQíƒ(.ñ»ˆ,DSU»”"¶F&Wm@´j—ÔŒ,ûF“jŸTWÄÂäªˆ¾ªv¨Ò{r×H—k×PµØä®Œ6×î!ºù’«6à6ÕüvÎKùgLªÙÄ†äªŒ.Õ˜â{@rÕFH“jÏ=Ä×ÈäªŒ®ªö¬Stƒ$Wm„t©ö¬CªÚiRí¹Rì	M®ÚÈhSí˜”áÆ§Ú±B4G&Wm¤t©vì)JªÚ˜ÛT;BÍ'Wm¤´©vœSHş–¯nãj ŸK¬bHîÚÈèj ¿“~ü‡\Üµ×ÇìÚ5OÎËŸÈÅ]]äêêÆÅ]]ä«ÔàéÅâ®Œ¦ò5UËîâ®ˆ&×Ş½ˆæ€Å]]“Ú¥©&¯Å]M£ÚeoùN³ä}“ÚQÄÇ©ÅU ]ª½o—»bd™0ºT»×òµ¸kã	îrív²cõÒPÕFHj·1T£ÅâªŒ&Õn½‹]Ü´‘Ñ´¼ÊÔ‹›62ºLû¼ÚCş±#¯|¦èòZÜ´ÒÔ?>Î/)ÈÇ`cìïên“ÅM)}ıã™âcßâ¦”®şñU»ØI´¸ic6î2í¶‡ºW{qÓFJ[ÿø^]ôZ,nÚHéºW»1¾»¸i#£ë®¯Şcó‡rsÓŞ³i÷yÿSˆì‰D×]_Ù»˜ªÚÜ´ÑuÙ×µò†ÍM=¦}É-®€ÚÜ´ÑcÚ³Hş¥Yşˆ&ÓY›877m`ô˜öÌ\¢dsÕD—jÏÉÏæª&Õ½/qgõæªŒ.Õ%»ø°¹jãîRíC9Ä¤Òæ®”×eí”ŒÆåÚ÷ÆF±¨osÙFHló·=Å›Ë62šd{ôãÚê §²&Ù'j‹âÍe!=²=R¿4ÁÆ¦Úc…š»Ø\µ‘Ò¥ÚcÍ!æ6Wm¤4©öùs‡|$©jc:îRí‘¡ ªÚHéRí±NÂË5vsÕFJj\!óªÚÈhRíµqÕî…ªv/³j^’'¼‘<‘ˆèRí½y'ÈE$#"ºLû¼2AsòËHGd4]«5xH¼ˆ$ıADÓµÚÑ6Ÿ½ˆ$ùAD×µÚ³u¾éğ2’ÜM×jwu‰ÍE$É"ºL»—–C<$÷AH×µÚ1+¯|]F’ù £­¨Qx;Íd¦ıÏ	n+jßx­IfÚÿPšªÚçø‘ˆqÆVÔ®cñ™´ùhŒıãü›îe|Œ4¶ªvÛ¢Æp!c¯¼T¾€êB>Wÿøî:ƒdªı£­ªİzã^—ò1ÜøªÚG¼äOùo|—j×ävx ™iÿ“»L»æœüËî¥|Œ7ÎöñÎ¿ö]ÊWµ1µÏXü¦÷Ëøq|íãÑ‹•›vı˜Mû¶QmLVnÚ€èÚŠvYù+²Ç]KÑz©âŒ¬Ü´Ñ´mŠVØKÈÒ 4íDÛM,q¿ˆ,ùD—h÷Ñy™ó2²ÜM¢kğ;•."K} Ñ&Ú[[\H–ù ¤I´ÇI„1T.ÚÀèí1g„•‹6à.Ñ¾{“ø•&—ò5ÌxDû2ò{¿/ãcœ±•´çâã}å¦¦’ví“]ÆÇPã2íswuşPÑFFWûøVcùò1Ø¸ÚÇ×Ãä—ñ1ÚøDû(Ÿùº”áÆ'Ú£7™ERÓFJ—i·Á7=F*Ú˜»D»ÕR¤yQÑFJ›hïÁ·=_ÈW±1yöêE”+÷ld´İóuNsòCÖÿ+yvı/¤_³#7Ûˆö%üõ<şIèÒì‹Êñ×Óø'¢kF;k°ñš/â¯‡ñOD×ˆö9åßùWêó'¡kBûŞi¢%>Ú´O$ùãñWÚó'¢ë*í»÷NşJzş$tv«·¯K1şJyşdtU²ËL¶˜ø‹ø+ßùÑVÈn…~ğùaüí×ŸÜ¶:öàWT!Ã‹©Œ=We÷Á|ßÂ‹­Œ»ÉÓû·\ÿÍhšÍŞ5e”şíÖ#ºÔú®òV!æ·[ÿÍhRë>ïdŠñ-Æ¸zÅOŒaeö/â[ñ5‹ŸX¿ÖoQÆ×+ŞKaM†_È·8cko“~4ûaüíÕ§ß.­G«Y{Êò-ÎØ¬ºïÊV0~=Æ4‘}B¡üßÂŒm;æfû^c£Jİ>f¥îã5?ÁUj tµˆI÷ÉÉ£ˆ®ñ9é¥«_Dò,¢«C|®&D’ñ ¡G©G‰UøÑİ¨R¡I©Ç,É*	_D’î ¢G©ÇÂŠÿ_B’í ¡m»¯Q%#Iv€Ñ5†¥-‰HR@t)u´¬Wï‡‘)5Ü.¥èU;L©Ò£Ô»ˆÏŞ*5"š”:f¥Ã¤_Æ·øbRêó‡.¬İñ‹ø`\J}^™)tµQ¥FF“RG«ìê…/â[ˆ1uÔ¬lóÕñ-ÆØŒzî½Ø>¶/ä[±õ	3ú‹2.¡}®^&Ô˜|»„z¾Ò÷ùelB}rÇ2Ô_›5Bš¯gù;¾…ÛÜu66‘r;5êş1õ{±uM_Bò0¡É¨G;O;5j@4õ(G¶ä¯HE@4õ.¢ŠŞ©P iâz¥Ğ¬N} ]màw).ú4 ººÀK²M€_B’ë ¡­	|D²fÖ/#Iu€ÑäÓ½÷%Š0ú4 º|úüŒesUíÔ§ñÜvùt:ÙÔúò1¸x|ºÇÿ˜O#¢É§ûÌ.>“uêÓÈèñé>ºhêèT§‘ĞU¡n£ÊÈt]ê:·ÕN}=>}şMúY|16>Ipe{R¿o1Æ¦Óı¤Œ¬]ùùe\>İÇ(lSê#óiL½]>İGË¡~HæÓi+P÷±ÙMª_ÈG‰1U¨{«Bù;õiD´­o£ğ|P¡³P÷¾;Ûtı%$O#ÚJÔu‰n‰A…]%ê“óKT¨Ñ$Ô}oÑ78¨Q¡É¨Çš¢š5¨R¡m…YvQ¹T©Ñ¦Ôâ³Ä F€>£¦'¾ˆ$ÙDŸPOYj@´	õ:©·Š,L¨ñÜ¶T·:Ùİ_ÈÇàâêq†mNü"¾Û@õè:F3¡FFÓ<õ\ª}uP£FD×†ğuFù3¾—QÏó—1ƒ52zŒzfélºö‹øc|êœÁÖê!ß¢Œ¯B½ÊM¶ƒ*5BºJÔ“ívüadJÉ·­D^ìñ…|‹3¾õ	òlwÇòQc\%êŞD—è Jˆ¶Õà½	M˜T©çÇ¬Ô£…R­I•]5ê2Bô“MªÔ€h»‚«‹n²IMF}3pùg&)šŒ:O¨–e’ğ ¡­H]C|úÔ¨ÑeÔ©>KLªÔ@hSêYº˜˜Ô©ÑåÔw*”'¶“:5 ÚœºíÉ6Ôÿ02§ÆƒÛV¤c‰„lR§FHS‘:ËJîÔ“:5"ºŠÔ9†èÒšÔ©‘ÑT¤¾×n©Èœ]Uê=§şS¿…Û¥[çlmF“:52ºîÜ*Oã[ñÍQïAwA}!ß¢ŒÏ©{©b1Ë¤N.§½EÛ÷¤NÙ·Í©Or+:¶&uj„t9uT~ÃìòÑc<NeÑ›2¿ˆoÆåÔ'ßlAëaêÔñ1;õÜ9ÄÓÔ©ĞäÔs‰šQP£@“QÏS™ Jˆ¥çÈá¯JP£@ÓÖc§hµjÔ@èºĞúäpb6+¨Q¢é>ëš]?‡$ÙB—Qµ¦è³jÔÀèZı-'‚
5úî²njú7¨Pã©íêy^1—T¨Ò#Ô3ú{D‚
5"š„ú]Fh&ÔÈèêy2s±*¨P#¢«HcÉ7æ-ÀØ|:FcA}M>=g]*N3ŸFD›O÷ìŒ/ä[Œñí%k«ëÓñ-ÌØö’Õêyd:©·m-Y)UôÕi„´u}ïH¶‚şù(1¦®ï}Wa(Ä·0cëú^YgLªÓù1ëô]$ê¿Iu]]ßbµ[R›>W}:öãµIm][Éº*P'Õi t][-‹‚Iu]êØSLp$Õi@4¨À°ë¾„$×B[ú¼ş"ú%Õi`t¨kQÉJêÓ€è›¢C‹Ì§ñØ¶¨w41®“Ô§ÒÔô}¯PW„oÑÅVŸ^;¦Ê!˜N#£©>=Ç–’ê4"Ú¦¨g· $õidtMQ÷yGGRŸFFÓõèj©rRŸFDßuWß%’ú4BÚÆ¨gSE˜¤>®1êØMuR¡ÆìÛ6F¢Ë6©P#¤M¨£-yŠ3¡FH“PG,1—T¨Ñ%Ô¹TÙmQ¡^·PglÑ«µ¨P¡K¨s¦^]Ô©ÑåÔ«o±jpQ§DWÓwWeşE]‹ÉFò]!ºœz§º¯hQ§D“Sï]ÄôÁ¢N„6§^µ‰QÁE]N‡QşŒ$ÙDß õ¨‹§¶‹:5Ü¶Aê{z©™S#¤É©ÇJÑº¨T#¢mz‹¦E]÷RGŠ±şE]N½‰ÙÚE]Nc‰Ì¢NŒ&§Î(B`ujD´9õÉÈD«ò¢N¾õñ,ùÇ~3¶õy%#sjÌ¾mEêûqBıµ™S#¤Ë©Ç˜»JÈG1ÍQßÄG½ÚÌ©Ñ5GİÎOÍ¿:nêÔûcvêQJŠİ›:5ºœzİ12…HE@t9uŞC"yÑU§^KlİÔ©ĞåÔ­‹JÇ¦N„¶AêS¾Î$áD“S¯6ÄŠ MmNUİ¾²©S£Ë©gSÛ¾7uj@´9uİ¢”¾©RãÁm+S÷©vùmªÔiš£ò~¯M•]uê‘)êY›:52šêÔ½y42§FD—S×µÄêMmÛ¾Ç×ÿnêÔÈèÚöİŠ¸ÍtS§FD_º.™y3§FH[:Z›:5BºêÔG²ÄXÌ¦NÙ·­N½ö=Õ›:5BÚêÔ+ºØ_¼©S#¤ëBjùb3£F@_•ºğPX5êŸ\Ç\¦®…]Dv9: ºœzÖàk:/#»mû¾óØŒbd×££ÉªënüËíE$Y"š´º–Â+˜‘$=ˆèòêÒß0qIÒƒŒ±nûæà
‘$=ˆè2ëv‚ ï
¾$éAH“Z·c2¼‰ç2’œ]nİÖ(<1;L®ÿ9Âmv]Vã•ÿKùhLz}{ZÕñÃôúF—_·äµÖËøh\~]–¸Ÿã2>F—`ŸóG˜á…|Œ5.Ãnk‰Kò1Ø¸»”äw§]ÆÇhcsì¶ÛXEùnl’İVü«Ï¥|8.ËnQSfÙÿäã.Ín#'ÿœ{)Í³[KñUåR¾ºG´[™/m¹Œ!ÇåÚUõgÖÊU»~Ìª]Woü*‹ÈH@4©vÍÛ—/#{Ñ¤Úu•Öø+S¹j£GµëÊÉ÷l_D– ¢Gµëîb>á"²ôMª]w¾ç2²ì=ª]÷ê¼rYòˆ.Õ®knñY¥rÕH“j×,›w]_F–ù £Kµk®Æ¯à=Tµñw©v]«TõLRÕFJjŸW;ùÖ–Ëøh\ª} GåÎP¹k#¤ÇµOVÑyÉë2>†—k×èU¦>ÔµÒäÚõ.©§}4ò1Ú˜\»ó‡ï{¸ŒáÆæÚ'C«|‚ôR>Æ›k×XM”l*wm¤4¹v£Š@•»6&ä.×®?ãqŠò1âØ\»¶1äQI])=®]kÛ|®ë2>†›kŸ¬<x\l\¶ÛÇ-ÛD<‘Ë6 ºd»”VøßºqÙF—l—"n¾½ŒìyFloh|Fü"²=²]ö	G‘å?€h’í²Î¹/ŸF–ş £G¶K®½%"Ë~ Ñ%Û%Gğ®öÉ’€4Év9©.ßázYêŒ.Ù.Ù6ïŠ<T¶ñwÉvÉl¢fÜ¸l#¥G¶ËjâêÄËøh\²}ŸHñA²qÙFHlŸ3r4õnSÙFF“lß¿¶¨!6.Ûé’í2CäÔµ‘ÑäÚ½¥øŒÖ¸k#£ÍµGf—§äc¸ñ¹öŒÕ÷Æ])m®½ïy>Ôµ1·¹öŒÊwV\ÊÇ€ãsíò ¤ª&Õ9Å÷ŸÆU]ª}¯„çQ±sÕî·jÏü®Ù‹ÈH@t©ö]%ÙóŒ.Õ>‡¨Òu®ÚÀhªkß ~öt®Ú€hªk·ªrİÎU]uíz|YöŒ¦ºöÉ!ùgçÎMmeí»LSB²Ô ]eí1Î¾Œ,ñF[Y;¥ú!©iã	î2íûb‹L·sÓFJi·UÄÔîe|Œ3Æ	íÉwĞ^ÈÇ@ãZ{ÖRŒ÷]ÆÇHã2íYÎS+ÿÚ±ÆeÚ3Gç·A\ÈÇ`cRí8‘ïÿ¼ŒáÆ¦Ú7Úè—û1ŞØT;úùTDU)Mª}NQy$5mLÇ]¦3;ßåt)ïÆëC)Úa;Wm¤4]ye‰FÎÎU]w^Ï¾ù½ÜupÕ³jGÌ!ú¨Wm@4©v¬•üºáËÈG`4©vÖü"¬ËÈG`ô¨v¶“HÊ?5K€ Ñ£Ú9vŠöÈÁUMª9_`yYöŒÕÎ\U„™Á]]®WäïÈr€4¹vFn1K5¸k£Ëµsî%¼wm<Â]®c(³Üµ‘ÒãÚÙj­‘ƒ»62š\ûFC‘ùîÚéqíès‹•Á]]®}rqıD>›kŸ—†_8u!£ë&ìjzp×FFÛUØe™¡Q×FJÛN´µßz)#m)Zî)>®.Û˜Û¶¢eëK=–T¶‘Ò%Û=Vu‘Áe)M{ÑNR.úæ—mdt­F‹ssÈÉe{~Ì²}ß6~Ù	ˆ&Ùî1ªè£š\¶Ñµm®£~“Ë60šV£¢ ;¹l¢i5Z‹)f.&—m@´­FkSŒÇN.ÛÀhZv÷ZÊŸ‘e?€h[vşÔ¢£frÙH×j´“GJD–ù ¢m3Ú¨"‡œ\µñ ·•µgTÑ°2¹j#¥©¬cÉ¿6Umd4©vu}Ò…|Œ3&Õns4ıC>Ûf´±–°ØÉU!]›Ñ"¶Ì|¨j#¤Gµ[Nñ=rrÓFDÛb´uWšÉM)m‹Ñö9&å)ùol¦İŠ¸ñğ@RÓÆlÜfÚ}Wñ)rÓFJ›i­­š6RšLûä@Ò©i#£Ë´Ç×y×à¦·i¬bZ ¸i¢Ë´Ç¢ÚÜ´ÑfÚ}ˆeTÁMM¦=Çà7]D– ¢É´Ï#ÖD7m@t™v¯CÌ
7m`4İîUÄn—%?@èÛA¾›˜¥
.Ú éí™_ß~YæŒ6Óî!2İà¦¸Í´[ª	ãà¦”&Ó®M\MuÃŒo/Zªb!5m„4íE;™™XgÜ´‘ÑµmÄÂÜ´Ò5ª}B¶P¯à¦¦Yí¹SôPWmd´ÍjÏb™NpÕFJß¬ö‰Q*‹¤ª”®Yí]¬İ®Ú˜ûö¢õRbCU)m³Ú}uù‚SÕFJÓ°ö¨E´ÍWmdtk%.XJnÚù1›v;ÄŠƒä¦ˆ¶Yí˜âyrÓF×¬öØêÎä¦Œ¦Yí±¦—LnÚ€hšÕ>é(Æ&7m@tÍj\¢É=¹i£iV{FˆÏ>ÉUmÃÚ3Š>Yî¶aí5¶ü!YæŒ¶aíÙ’ß} ©kãnÛA>GŠv•ä®”×>Ò Zj’»62º\{fWI$wm„4¹öIßEE)¹k#£Ëµ[­â£Er×FH—k÷âóOr×FH×^´£ò‡|7>×î'7Vg9um¤´¹v«jÇer×FJ—k—T­ÙÉ]r—kß5À))#ÍµË–·&wm¤ô¸vÉ­zû’»62š\»œ°(ÆX—íõ1Ëv‰»õP!²'M²]æR,‹Ë60šd»Ì.bââ®ˆ¦ä³nÈ @4­ Ÿ}‰±üÅ]]+ÈçêâŞêÅ]M+Èã^‘§Yòˆ¶ä‘CÜd³¸k¤oyAfq×Fã
ò&:Èwm<Ám+È×qmõÚP×FJ“k—>Åôâ®Œ.×®k‹O‹»6Bú\[æ=Ôµ‘ÑåÚEÜ»¸k#¤«ƒ¼)n)_ÜµÒÔA¾Ô Ğâªˆ.Õîm7q-Çâª”¶YíhM|Ü]\µ‘ÒÕA¾æLõâPÕÆtÜÖA¾û“6‹«6RÚ:È×Ta‘ª6RºfµÛëaWmdtuçR×ùm®ÚûcVíó·Vms›«6 º:Èw[¢ÙtsÕFWùSBoîÚÀèqíQÅˆñæ¦€Óêâ¹Í= M=òDlùWf™0z<ûNÿˆ&üÍ=]=Ë	ğòf‰@š<{ì.¶Án®Ù€èÒì±j6šm®Ùxz»4{–'µl„ôXö‘¢Ã}sËFF“eÏÑ§Ø³º¹e#¤Ç²gkEÔ87·ld´­ŸKÜ*¹¹e#¤É²ÇC¿6±Æµmµ“qsÍFFÛJ´˜YåŸû1ÚØ4{Ì¶«ü-K³ïî±vsÍÆTÜ¥Ùãüúâ‹Åæš”.Í­ëLj6Rz4{BÑÄ¹¹f#£K³÷à]­PËşyÍ–}Ş,‰HHDtYvVq©öe$#27¢-úb_Fò8"£kN»^f¸ˆ$BD×œv,~ßE$é"ºæ´ï¾1šG^F’ı £iN»ÑpIòƒˆ.Óî¥ğªûe$©2ºæ´WO}~“ÄmsÚ¹/ÃHfÚÿœà¶Aí5&Ït/åkœ1j¯QxÅe|Œ3Î•h|ÜëB>×J´–|½ÁE|4¶zö>kù;>†[ïøÊÉ».äc¬qõ¯|íïe|6¾ŞñŒÆª.åc¸ñõG~CÌ¥|8¾9í=eÄLûŸtÜ7§)KfÚÿPÚæ´ÛIyåoùª6¦9íZŸË¿ŒÇ6§]Úâm}­rÕ®³j×r;M"{"Ñ5¨]J+Wm`tj—2yÑı2²çMƒÚ¥‹¾€‹È2 @4j—Ï"Ë~ Ğv¥öèüfòËÈ’`t]©]B•‹6 ÚÆ´Û<™ˆ‚d©@ºÆ´kO}6²ÄmcÚ5'¯ƒHjÚx€ÛÆ´ë®ò§¤¦”¦Öñ6ßítÃŒ­u¼ßk–äcœqµ½Å§ñÊU]ª=·h¿ÁÆ¦Ú¹….TnÚÈh2í=¦°ÃÊMmËÇK}x·Ãoùxé[FnjÚHi2íVJ‘G95mÌÆm¦½ëä­‡—ò1àøLûçÚXEùj6&ÓîUÄ¡¦Œ¾h…†´ÆM»}Ü¦İsò‹%/"{"ÑeÚm5>pqÙóŒ.Ó®¥‰oä›60šÆ´WlaÚ›6 ºL{‹ì§qÕB›jï%Ì¦qÕF“j—"o\µÑ6¥½ï+£ Yî¶)íÙE¸n\µÑ7¥İÅ­»’ª6à¶)í¬ª‡¡qÕFJjŸ?÷	5Šñ1Î¸Tûœ)ªs«6BšTû.vRg$Umdt©v_âúšùl|ª}ÂŠˆÔµÒ4¥]¢ük?†Ÿk“üÈ_ò1Ş/ú…O ^ÊÇˆcÓîÑøÀÀ¤®ù¸mL{õà«#/åcÄñõ‹­Œ—ñÕlLİã£ÅR‘›š62šL{Dé|‘WëÜ´ûÇlÚcçõâÎMM¦=«Úš}ÙóŒ&Ó}¾nõ2²ç=¦=g-bR sÓDiÏÈ¹x é\µÑ¤Úw¾Æ^F–ü £Gµï»|EÍEd¹ ºT;j	¾hşB²Ô MªmVÑPÜ¹j£KµãFkõ@RÕÆ#Ü¥Ú—SQ¾jÇC4Fv®ÚÈhRíl5øœä…|Œ4&ÕÎ¾ßâ~CKµó¤g¢…ªsÕFH“jŸx8EY»sÕFHjgÌ&ª5«62ºT;#_ãu)ãMµóØ¡ÌÇ©j#¥IµsÖ*zu;WmLÈ]ª=7‚¾”Ç¦ÚÙoÔQ”¯rã‘í»šˆ/3½Œ!Ç%ÛYëâ—´Áe{|Ì²}+|şEdO$ šd;Îã(*‰ƒË60šd;Fçë¼."{ÑãÚQvIÚà®ˆ&×Î²4"K ÑåÚ£ª9èÁ]=®=[UÉÏà®ˆ¾¥hQÅğîà®®¥h+›¨ÅîÚÀèríY[ˆ"Ãà®'¸m+ZFˆšÁ])M®]Ïù£êÚÈhrí8Ç†|Œ4&×’¥©÷†º62š\;JU­øƒ»6Bš\{îP_vwm„ô¸ö\Sô¢®ÚˆèRí™«„¤|76Õ>	ĞUíÁU)Mª=£ê¨HUÓq—jÏŞƒo£¾”Ç¦Ú³ô">A®ÚHiªkG6Qº\µ‘ÑU×>¿£(‹L®ÚócVíQê‹¨&Wm@4©v?¹EÈŸ‘=Àh[‹¦†.&Wm@4mE;$üã‹Èò@ô¨ö]C%êJ“«6 šT»E
\F–ü £GµoÇøì<¹j¢Kµ[îÆ×=_H–û ¤k-ZVÕ„6¹j£m-Zd'Wm<ÁmkÑbÑâ5¹j#¥GµÛ]å®IªÚÈèZ‹¶†Z‹6¹j#¤i-Z®:å#ùj\ª}şÚ‹o(¾ÁÆ¥Ú½´*Š5“«6BzT»ÿŒ¦)ÆÇpãë ß½ˆ‚ñä®”¶ò¸‰¤¢|Œ8¶ií¶Åğîäªé¸oX{~ƒÖ¥|8¾aí›MJÊWµ1k÷,ü¦˜ËøqlÃÚ­7ÑÄ\µãcVí{C§õ®Ú€hÖ.S4›Wm`tk·*:½‚«6 š¶¢Uµ6¸i¡iT»1˜\´Ğ5ª]Æ£’ÁEMjï¢$¸h¢oT»51q\´Ò6ªKlw
.ÚÀhÕÕÅ\lpÑÆóÛ7ªİ›¨)m¤4j¯^Ew@pÑFFÛ¨v,‚{62z<»ì5‹
…Ô³‘Ñ5©]¢¥	îÙéšÔ®»TuHRÏFHÓV´vÇ$ãc´ñío],r®Ùi[?~ìPŒ“×l¤t­¯!c"ÕlLÅmš]»š9®ÙHiÓì“©‰ÂRpÍFJ“f—)Z8ƒ[6"Ú–—-
ÚÉ-;?fË>1Q½6É-M–}Æ%6¹e£mùxWyrÍFÛòñ)ÊÉ=]]»~Yòˆ.Ñn¡ÿĞ,õDÓJ´Ñ¶Xö“Ü³Ñ¶}|.uÁ`rÏH×öñ˜±yLîÙÀhÛ>}JHêÙx‚Û¶¯½ÄWñä”Ï®{«ÎÍäŒ®‚vm[|VI.Úi*h÷±Ää¢Œ®‚v”©ÎêÙÈhòì¶N8äâ•Ü³Ò´mŸsT¾5ÑÆXÏçÏc¸1nDë!ƒ"m¤tÕ³õÅnÉMÓq—i·U·ÌÓ¨i#¥Ë´Ûj)a“›6RzL»­¢õ0¹j#£IµJ¹¸j¯YµÛn)^îÅUMªİ¶¬,­ÿ©Úÿ  ÿÿ´m®d7lD7ôè‹’¸ l Èşiª=/Uò²ÿzà3İ·EKŠü'£«w¼ô*nÏm®ÚÀhj/ÑÄú¾ÍUM+µË9 %"Ë ÑµR»œh(YúŒ¦æñuñ0³¹k¢­y|7µ
zs×HWóx¬ëa6wm`´5÷ÕÅT•Í]p[óx-jˆéæ®”&×^»‹êÜæ®Œ®M_Q¶åµ¹k#¤iüx›!J±›»62ÚŠÚç\•äc°±µKÓ6wmdô¸ömNƒL7wmdt¹öùÑ„¸lº¹k#¥ËµKFkD7wm¤tµËŞ¢Áts×Æ|ÜVÕnY„koîÚHi«jÇPc³7wm¤4UµOR.Åº62º\»^Û¦É];Ü®}şR¢y<¹k¢Ëµc„x¯’ÜµÑäÚw,‘şÙóŒ×nÇ?|’»6 š.jçh¢°”ÜµÑæÚ©êÚÉ]=®İknq%?¹k¢Ëµ¤º’ÜµÒäÚ½Ô!f;%wm`´¹vŞÕœ’º6á6×ÎŞùûÒäª®{ÚKéKnÚˆèªjÏv²qùglUíP£å’›62ºªÚ÷öŠ:~¨i#¤«¬]³Ë’ª6Bº}Õ*$6¹j#£­}|·*Şš&Wm¤´õÏ‹[MrÕFJ—jGWoM“«6¦ã6ÕU½N®ÚHiSíãâ¥drÕFJWùT‡äªŒ&Õ.Yï ï…ªv/?fÕ.k%¯€]DòD"¢«ƒ|®ä7O/#y‘Ñ¤Úe–ÁÒ.#y‘Ñ´T;B¼Æ¿ˆ$BDj—‘“Oˆ¸ˆ$ÿAD“j—1Dëáe$é2š®jzQ!’ìmWµ»XÄqIîƒŒ®›Ú=*Ït/#É|ÑvSûe£éÙd¦ıu‚ÛnjŸ\—n»”¯qÆtS»±,ö2>ÆÛMí#62`3×ş‚4]Õ.¹ù2úËøi\®]j/|ì…|Œ5.×.­Ëƒœ©ö£©ªİÕ‰Ëøl|Uí1¿xq)Ã¯ª'’”Ç¥Ú±ófüÉTû+w©v}óË—ò1àØTûdÉçÕ\ÊWµñ¨vébnÿE|86Ó¾w/HzÑş£Ô_L»ıdıùDûü/ÿç¿şû÷Ÿwùça.>G¹?Œ=‘¿2ÖÁˆGP¤rí>Ù{Óã_Ïã¯Œí™±şçüÜÂµGM6,ëù×ù+d†ß/-šílkÈñ¯èWÄñŠ˜ÿH%Õó8VgûÃøWô+c<3Î¯,íÄeÛ{³bçò¯èWÈù9JûÖí-tûÏ(ÅøWô+ãúŒøAÖº•oG¬9éCùWô+å~şºãa[?“ƒíş@ş• ı
™¯ç!Ì¯dr+å½±±Ô(ÿVîßOòçpsÎî¯l²†rîƒ)?Ì¿ûwÌçˆ3ö×§)õaÄb·>o§>‡œø‡‡Uåa#+ÛÊñ¡|9õ9æ¬ïwj1ÅGV—>oA§¾GùalåİónÜQ”oa§¾ÆQö×«ê_u4| ßÂN};ÿ8-‹:-WÖ&ŸÊ·ÀS_#OÏüÇÊPî}0Ù·æ[ä©ÿ&ô|½¢”Z»‚Î¤úP¾…ú{²ıKù>Ï¥üÊÿ–ïßôçĞ“ÿ´ï­ì{ÕÅJvÌ·ĞÓŞegc)ô{ÏS˜ë÷ï˜ï¾ßRıÊgN¶“÷ù{Ú»ïôï³*_wå$¥lÔÀÛßÀWolçÉ‡‘<•Àè3ğu»‚$y&Ò§à»5qX6ªà iSğİ†ş I:Œ6_™l6ç‡‘$CÀèsğƒÕÅ>$H›ƒŸ€#Ù$D£‚ÏÙXê‡’$B@éSğ`eù"É‚ Ñ(àQ»5ò‡’	8äNŸU’LÀÓ'à»²!6È·xcğàw?”oÇ'à³4Ö„ú|‹8Nß´Ÿ÷CùsœKTK5p¤ôxS>–oqÇiàÇ Ø«æ[à1xæbW|?”o±ÇgàµÔÍ:™şP2ÇüÜgà•ï6úP¾…£€×r2"•ÿ2GL—€×ÂV:|ß"O¿ÏIâ%A§úİìú}O>¤É3	Œ6ı®¥UÖŞû$O$@Úôû@]A’g ]ú}[Ùbæ#I†€Ñ¥ßç—M'–I*Œ6ı®÷?#;Õo€téw­ídxŠ‘äAÀèóïZ'[U÷$Y@ÚôûÎŒY<	êTÀÒ(àÙ‡(5v*àx”|'eôÁ|Œ86ß»ŠŞµN!}¾]5ò¡|9>_›…ú0¾…£Ë¦Nõ!mú}Jñ’ SıFJ›~×¾EOS§ú”>ı®³nÑMĞ©~#¦M¿ëÁ†|(ß"Q¿÷ùÁ©ŸÓoÌÏú½×=ú7bıûœ—âıU§ş˜6ÿŞ…MŞş0¾E£€¯17?Šğñãğu²KşI*àÀèğÕÊó$$@ú\*Ù şŒ6ÿŞâï ö„6ûÎ K¯?Œ$F›}·²ºH1µo€tÙw«^nû0’4}öİê~øºI”6ınµÑájH’¤O¿ï&6íø%Óo<È}ú]w¥«?˜ñÆ¥ß'¡\ì~Ûò-Şøôû$j…ÍşP¾E›~×¬tûõò-èøü»Õ±Ù^Šå[Øñ	x;2,ng*àHiğv”±É_ø[ä1
xC¼SÔ¿‘Òæß'ğÑf7¨#¥Í¿[Ï%º*õoLÏ}şİúòçÃü1}şİúNñÆrPÿFL—·èt¬ùò-öø¼Í±DhP»€·ã¶¢JTÀÑ&àíœèÂ&‚
8@Ú¼í¢4¨¤ËÀ[–%“ Œ.oyÛ)F’£ÏÁs³YF’
£KÁ{ÙE¼âªàÀèSğ^ëéZPJ›‚÷RfÊ’äA éSğ¶³Uu 1Ç£Ü§àm¥êp	ªàˆéRğ6[-èA!m
ŞÆªl8å‡ò-äØ¼»RLA¾Å£‚º…êUp¤ô)xTu½:¨‚#¥OÁ£v™‚#¥SÁ[µ§ ˜>o±:·Û ”>/[Ìõªà˜ Kà9ThPGLc	|í•² 
˜¶øÕèTÁÒW¹Ø(ÚC9©‚Ï»‚ß­ Bx&Up`ôÕÀÇnâæ¤
¾ø8êÈÏÊI mEğDú;©‚£­>JŠŞéI}Mè'â‹&œI mMè]\%šÔÀĞØ‚~”>~H”¾ô¶¶ˆÜ“8@‹à%C}’LÀñ 7ÖÀËo¥'õo¤´•ÀË˜âÎÓ¤ş¾¸zu>©}#£­ ^«jåŸÔ¾Òfßµ•ò£|8ÆôŞSO˜Ô¾‘ÒØÎWx}(ß¢³}t5gfRûFL_ú¨E\:˜Ô¾‘Ò×ŞGgë±şP2ıÆäÜ¨ß­M1lfRıFLçğ¢$1©~#¦K¿O¦±åƒÉô!}#ØNj)Î¢Eõ{ıØõû~Û¢szQıFß¶İ³Ë’<“ iÓï²+İû$Ï$@ÚF°­UÙ"˜#É‡€Ñ7‚­Î"ŸH’£oÛ\EÙ¢ú¶l³«éf‹
80:g°ÕC(p 4Î`S\¯^TÀÒ9½vñNhQÇ³Üx	¼ÇıL‹*8bÚ.÷™"©\TÁÒw	¼/5Q~Q	GJÛ%ğ„ë,*áé»e‹{¬‹J8Rú¦°í*Ï!æàésğºÅ¨«E!
ÎĞ0ßQÁ#U?à¢
”>Ÿ»HÓa
	ºóxé¢dQGLç%ğ9Äm²E1}—ÀcI'c
¾
øîUÜTÁ÷]ÁÏ×M·Ú~ÉS	Œ¾
xNÕ{µ©‚¤¯	½ô-ú6Up€´5¡ßµß
‘$C€hëA/±ØBÉ#I…€Ñ×ƒ^O"H’
¤ïøZ)ŸG’	£ñx«bQÄ¦¾kà·¶,6$Hc|o5WhSÇ“ÜX?Ò(Z?7pÄ´ÕÀcoñ^hSGH_<ªÚKµ©€#¥­
]mRÚTÀÒWŸm‰×›
8Rúªà3Ô¢•M)}«¦¤|<N–2b
˜Fot1ı‡ò-ö<B\ßÔÀ1?7ø,U¼ÚÔÀÓhà³1ufSGL›¯ZÄ]õM!^‹‰¤?~O¹v.©£ÑÀW,.<I ¾Fçæ¤6oµ—HªàÀhSğ¶§²¤
Œ>ï«Š[ƒI m
%Ä²¤
ŒF_¥ŠÁ\I(}¾ïmuIò €4Ş_ç¿Q'sp<Ë÷Àg,qÉ$©ƒ#¦íøª]4&'up„ôİß1%ä[È±)xouŠ6»¤
6ï+õ1Ä)m
>zÓ¿œ·¨ã3ğq~Ş¢0©#¥ÏÀÇš!Æ$5pÄ´øØU]=HjàHi3ğ±VW‹’*8&è>?_¹ØTÁÓ§àcŸXELÁÓ¥à#£‰—ÔI!m
>Î÷Í_³ÕBüOdvğ‘=¸ƒ_H¶¡ m>rŞ»x)Ù‚z ´Yx”|±Ò¥dêÒ¥áGÌ¢R¸$%BH—‡B±ØøB’Œ!m"½Ñ¸sIB„Œ.~ò_šh\H’!¤OÄ£ñ7C’dCióğhmò¦ßKI²!¤ô‰xœT$iq0™ˆè>Z_r9_KÅC\¶¾ŒaÇgâ'4^İ¹˜qÇæâçA“¶Kùx|2~õÆeüb>†ŸG/SçÑÇçãQnTa>Æ«gáÓ¯.çc2ù:?tùq>Æ «’¢0™’¥ëN'¯‹w×^ÎÇä”òX¥¨£“Iù§ÍÊ£‡|8™•Qú´|¶É‡ŠÕÊµ¼şøµ|FU®å éÓò[hyåZ”6-s^Á¿”ì¹J—–Ÿ“½tùT²ì ]Z>bò1—‘¥FÀh³ò1{ò»'—’eF@éòòóË©¼Nq!Y^>/+Ä–“‹ÉÒ"À´™ùX­jJ–¥ÏÌÏO|u²Wnæx¦ûÌü|éâöå|=.3?9fğÍ²—ò1öİ|q_ïb>››ßzä–æcôñ¹ù<Ï¯ì]ÌÇ d¬”Çûe/æc2ÖÊÇHŞfr1cÓÍëšü²Çå|B>7ï{MŞq{1£ÏÍ{ÌÂgLêæ˜³ûÜ¼·ÖømìËù…œ«Ë²Lñ¡r7GN—›·9+¿y)ÃqyÙXb,pmÜÍÛİÍ[+|Àòed&0ÛÖc‹¯«9PÚÔ¼Î>¼øR²Ç(mÃÓG€dÉ@Ú¦§·‘òëf™0ú¦§×ŞEìi\ÍÒ6>½¤U}!YZÆ	êµ_#~1YV˜¾ê¥5ñ2¦q5Jã·•êEfãjgºq†Û”¯ØWsä´q»Ëƒ¸ÿ4®æHiSó;QT©WsÄ´q[{È3“ª9Rú®‘×6Eï[ãj˜¾{äqGZ(ÌÇd¼H¾Ç.Ù¸š#¦q›Ù[­wªæÈi\g6od¿˜QÈ¹S¼>fğ`R5Çœİ§æí{Rç;Usä4ªù8˜\zWsä´©ù8©»Ê7©š#¥QÍ«X½V;WóşãWóŞ•›wîæ éÛ,ŞvÙfçn”67o†_ğ»”ì¹JÛ¥òº§~*Yv¶[åçHåc-.$Ë Òw­¼L1ÙíR²Ô(m÷ÊKåóß/#Ë‹€Ñèæ9›ä»9`úÜ|×/::ws 4Nw;ÆÛÕwNİÏtãx·qudvîæÈi›ïÖ×ÅıÎİ)mn~0Åh˜‹ù||ŞFéâuLçn”>7»ˆ—p»9bİ¼OÑƒİ¹›#¦qÈ[¬)¿ôÇdò6‡x#Ó¹›#§qÌ[,qK¶s7GLãœ·lòÜ¤n9»uÒÛ…»9r:G½E×P;wsät¹y=’xÓÑ¹›#¥oØÛ¬]ä›ƒ»ùø±»ùA(,hp7H_İ<š˜x|)Ùs	”¾ºù½ãÉO£Áİ(muó&–^F–£¯lŞ«è2\ÍÒX7ßSÜ\ÍÒV7?¿n>–îB²¼ n^Ö×¸wsÀôm>Û¹*O2ws 4ÖÍçh|õÙÁ¤ngº±n>²ŠÒÁİ9muó±Ä²Kù{Œuó¨)RÌÁİ1muó¸åcø1î?›£‹·®ƒ»9bú ­âîÊàn˜67¿#%ÄÁİ1}n~bĞï
wsä´¹yYQEÂàn˜67/»Mx0©›cÎîsó’çÏ¨4º9r:w‘ÇuóÁİ9mn~«jê€§n”>7¯©ºÌ‚»yüøİ¼ÓïÁİ }nŞOÇàn”F7ŸCäÄÁİ(}=í<J7s ´™ùHU¨
næ é3óˆQyúÜÌÒfæ'æQ<¸˜£QÌWK¡¼ÁÅ0}EóSÜç.æ@é,š—).Rs<Ğ­Esa?Á½1}5óİE­"¸—#¥¯f>f—¸ƒ{9bÚjæ³ªë5Á½)}5ó=ßgp1ÃÏËÛQbqÕ<¸—#¦ÍËïFNQÚîåˆiìg? ó19ÛÙoÚ¡0c±½5Z:¸–cºnlg/Y‹ä|BÎvöÒ†(°×rä´iy.Õt\Ë‘Ò§å¹KğŸúäZ>üZ³	ÉL€tî(/|ı÷¥dÏ%PúÚÙËQIÉK 4n)ßb$Ëäf¾%i­òİ^’¥F ékgsëï›eF@ikgŸKm˜\ÍÒ¸'-‡?:¹™¥ÍÌûa]®“›9PúÌü`Š÷“‹9é>1ïev!“›9rºÌ¼·Tw”&7s¤´™y¥ˆk+“›9bÚ–¥ÙÅœÔÉÍ)}ÛÒfíúÃ|?>3?Ÿş””áÇ'æ}î"c&sÄô‰ù9g§ØÄ0¹™#§q\ïâUûäf˜¾p{tqmr3ÇŒİ8.Cª&7säô™yÏQ‡Ê5©™#§ËÌÏÃ¹E{Ùäf”63ï'%-¹‹›ùú±›yŸwˆ‚dO&@ÚÌüÄÉ)j¨‹›9PÚÌ¼ßq©ü×³¸™¥ËÌOfºDÇâf.3ï£‰¢ßâbŒ61ïãH7‹ÅÅ(]bŞGŸS~”,/HŸ˜Ÿ”½Š”}q3LŸ™GébóÓâf”F3Ÿ5ùVÑƒIÕÏt£šï1ÏŠWsä´Íg/ç_Æ©š#¥MÍOâÖ—:×©š#¦m>{Yò`§f¾ñìeQ>]ÜÌÓ7½E/]WsÄôgïmÊŒƒª9bÇ³÷âÂâjœ¾Õimlù„Œ«Óî}xõpR5Ç”İ§æwò…˜Z¶¸š#§SÍ^ÈÏóU|j~²MÒ©š#¥QÍ³Š%U›«ùşñ«ùŠ.¶m®æ éSóÕR”ì¹JŸšÏÕEÂæj”65ŸMí1Ù\ÍÒ¦æ¡ö n®æÀhTóL#7Ws ô©y¨v“ÍÕ j^B\VÙ\ÍÓ§æ­¥hsİ\ÍÒ§æ-§z'¼¹šã™îSó¶w
QÛ\Í‘Ó¥æçÓT»&7Ws¤´©yËØâRÚæj˜.5?±g‰—[›»9Rúªæ5ÕÄÍİ1}UóÙÔ¿Íİ1}eóìKÜÙÜÍÓèæ%‹X’¸¹›#§ÑÍCÍdÙÜÍÓçæ}uQØÜÍ1g7ºù¸K#çcr®5ï«ˆ6„Íİ9]n>ˆ!›»9RúÖš÷®n[$wóü±»ùù¡‹ã(¹š£o«y	Õ•\ÍÒ§æ»
éMnæ i4ó"vT%7s€´™ù,)V§%Ws€ô©yT5¡!¹š¥OÍ«Ú…™\ÍÒ¨æ}¦ˆãÉÕ0jŞÄ-¿äj”ÆªySbR5Ç3İX5oCåH®æÈikhÑDBr5GJ_C{¨]0ÉÍ)mıìÑ·ü™S3GJŸ™GoS%EÔÌÓhæsŠ7…ÉÍ1í]´İ's¤4ö³T{1“‹9rúúÙ{QÓ“‹9búúÙëŞòÙ¤b»±ŸıäpE}œTÌ‘ÓX4/­ˆÖ“äbœ.1o¹š4^*æHé[œ–½ğé„­P1ÿó@šÅüXø“y!É“‰¾Åi¹/ı]Jò\"¥ÏÌ[ï|£Å¥$Ï%RÚÔ<Bß$7BFŸ™gãëu.$ÉŒÒgæ¹_){)Ib„”.3½ów—‘¤EÈèóqÂ8Í„/%IŠÒæåqşßkp)IN„”>/}¼\}˜ÌË¿NtŸ—Ï:<2/ÿâtyùŒ¶¦ú‘3/ÿ¢´yù]ª“êÙdbş…éóÙ²òé×—ò1øøÄ<2„£]ÌÇğãó)Vš_ÌÇøclg¿¹›ü?† gÉ|ÖÎ[.çc2–Ìc.?ó1
Kæ'_—˜ÌÌ¿2vcÉ|Gòñ—ó1
Í<J«ü-öå|5 —™GíKğÌÌ¿(mf½>T¢UnæõÇnæ1jçõ•ÉL€´™yŒÑø£KÉK ´™yŒ9…õVnæ@é2óˆ:‡„dÙ@ºÔ<ö-H+H–¤MÍg›…¿¾¾”,5J—šÏ½††d‰@úÜ|E™¼wçb²¼0mr¾KmÂ&+—s ôÉù>vÎ»w&•s<Ô}r¾s7>·ùr¾—œg•¯G¼”ÁÇ'çÙ{ãµÉ‹ù}lr~(;_y{)ÃOÎ³EÊãˆÊ9bÚä<ë\|ØÉÅ|Œ@>9Ï²‚wâ^ÌÇd”óú'ô„|r¾³Æß!T.çˆi“ó}9&•sLÚ}r¾÷[EK*çÈé“ó½›Xºr9_%È%ç{Í‡oı1ùä|Ï]øM Ö¸œ·»œïÈ’\Î—s€´Éùù£q9J›œŸŒxò5—’=—@é’óÉ'=^H–¤KÎ÷8?ù}³Ü mr~Ê*NËÆå(]r¾£¥È†—s€ôÉùùÆS¼i\ÎÓ'ç'/Õ&K‹€Ò(çml¡Ë9êF9/¢ªq9GN—œ¯¬!#*çHi“ó5{ò9pó1úØä|µ{UQ>†ŸœÏ•‚»˜È'çsôà÷d/æcòÉùleğ%ó1åü¸Oå™/çcòÉùŒºEWaãr˜69Ÿk>1è`R9Ç¤İ'ç«”"^¾6.çÈé“óUOäRg•sätÉùjmŠæÂÆå)mr¾êÜ|ÏAë\Îû]Îg¶Q¨s9H›œŸãˆß«90ÚÔ|Lsğ³¨s5J[İ|•íz«9@Úêæı¤p<åè\ÍÒ¦æÌ\>•,1J[K{fz«9@{Úsª¾ÇÎÕ0mj~ßğ1©—’%E@éSóÁŸ‚p0©šã‘îSó±·X‚z9_CmDûU4Kt®æHiSó±ä;¸ÎÕ1m#Úct)ÃqFûÁ£~èTÍÓ8£}¾%şb>F cS{Ù)¤¢s5GLãuó¬UŸGAÈ¹>­>Wâb>F!çú´6øuóƒIÕ“vãuó,!.¢v®æÈiœWN.§NªæÈéRóQòJÊÇ0äœ7D#öàf>~ìf>¢5>'êB² }sàf4qivp7J››µ»xÿ6¸›¥ÍÍ©é§’%G isó¶»hÊÜÍÒçæç¯%Bùàn”.79†x3¸›¤ÏÍ#CÂ¾˜,-L››ßë²•'™ƒ»9PúÜ|6äƒIİuã…ó™Ss¾[Ù¼ô*:Ëws¤ô•Íûœ¢„:¸›#¦­l>çwèws¤´¹ùZ«‹K¨ƒ»9bÚÜü÷eöFİ1mn¾ÏQP%æcrö´ß2’ó1{Úû
ÑÓ>¸›#¦¯§}L,©›cÒnìiótJÎÇ(äìi2“£nœ¶ö˜…/º¾”aÈØÓ'ùà/d‚ËyüØå|GS\ÎÒ×Ó>¶z\ÎÒØÓŞ·8ÛƒË9PÚzÚ{b¶Qp9H[O{±NøB²Ü mr~›]E¢\ÎÒ%çë˜ÜÍÑxß¼—fÜÍÓçæÙ_Üy)YV”F7µø‚ƒIİÏtç0¸­†Öwsä´ƒ+]Œ’¿”±Ççæ1S]û
îæˆéróh'§ç¯c‚»9RúêæëäôêÔ¤n˜Îºùó¶‚»9bëæeêóè19ëæûü†TşFİ9uóã\Ò‚»9búêæ·NîÔÍ1g7ƒ«et•kR7GNcİ¼åC‚»9rÚêæ'Gâí/åc2ƒ«37C“»ùü±»yÜ÷üxŸÜÍÒ×Ò^ê}…“»9PúšÚÇîb4Ëän”.7¿7éDGÔän.7¿wAÄ;ÂÉİ }Ãàòh¯üí°Ô(mÃàrŠ|cr7FŸ›Ï5E7Çäj”>5?_·èÍœ\ÍÒ¨æu†¸2¹šã‘nTó^º<Ô©š#§MÍÇùı¨ó’ª9RÚÔ|±ãKÃ/æcì1Îi*òàÉÕ)}·ÍLŠ!…“«9búæ´¯Xb®ëäj˜651·¸V5¹š#¦OÍ£„¸V5¹™#¦qL{ñ{r3GLß˜öÖ—0ÉÉÍ3vkG»à<¹™#§qZÌÆWO^ÎWr™y¯+¶ú©S3GJßµ•bg[ÜÌ×İÌ[ß­òœxq3Hßµ¢î¢..æ ióºGˆWí‹‹9PºÄ¼Î>E¯Şâb.1¯#¢ğÌhq1H›˜ŸX¯fä..æ@éózş]1‹›9@úÌ¼–cvŠ’eE@i3ó’Cl•½”,)JŸ™—S\Ÿ[ÜÌñH÷™yÙÙÄÅ´ÅÍ9]f^K.Q4_ÜÌ‘Òfæµ÷%:x7sÄt™yCÕ%7s¤´™y+2HR3GL›™·™2u£b”¾Íæõ^çU˜ÈY3Ÿ{É¤ƒš9rúÌ¼–5óÅÍ1}fŞkS‘7sLÙ5ó«ğ¯‹›9rkæ+Õ™ÅÍ9m5óLù¢bÆ’ùq^şYn.æûÇ.æÑnÿ‚d&@÷§uej››9PÚÌ<¢¦¸:¹¹™¥í®ùù¾ÅµıÍÍ mwÍ3ÕL×ÍÍ ûÓš(l.æ i«˜÷QÄHäÍÅ %óQU#Çæf˜¾šùIŞÄÒÍÍ(5ó¶‡håØÜÌñL·ÖÌC”ü67säôÕÌÛm™››9RújæQÆàÎ»¹™#¦­f>V–¶¹™#¥¯f~2Lqjs3GLã„ö=äáNÕ1}Úû’i5s¤4hïµL•Q3GNß€öQ–˜>»¹™#¦o@{œ4SGÔÌ1e÷™ùŒ]…™onæÈé3ó;£CHTÌÓ%æs¿˜Ê<¨™#¥ÍÌçn]¼ÜJnæùc7óëå¢X•ÜÌÒfæ«¬&šà’›9PÚÌ|ÕµÄR‹äf”.3_‡EØEr3H—™¯ƒ(š›“›9@ú.š·™¢*¹š¥í¢yÛ[ŒDN®æ é¼i^UÉ/¹š¦MÍÏ7¾Dº‘\ÍÒ§æç;_òçCÕuŸš¯{ä³IÕ9mSàÆ\âî\r5GJ›š¯Ñ²ªtƒª9bú–§É%×ÉÕ)}SàN‹äj˜>5_+Dñ'¹š#¦OÍGLÑL˜ÜÍÓèæ·²"¿õÇ äsóÈ\bĞVr7GL››GF•‹änI»ÏÍ#W‘¿uêæÈésóØ©Ö1$—sätÉù­üéOó1Ëæ¡úz¡rŞË]Îc¨Íæ’<™i,›—Á‡Ÿ_Jò\"¥¯lŞfçİz—’<—Hi+›×Öùİ€I²#„´•ÍËL~]H’!¤oD{Q=¤—’¤FHi[Ÿ¶Cìô»$1BHãú´9Ä-î‹Iò"Äô­O;ÖËoR]J’!¥OÎÏß«u\29ÿ:Ô}r~8¯H_Î×àã’ó~ß_+ÈÇØãsó¾gå·£/æcğ±¹yŞx‘êR>FŸ›EK>ûb>ÆŸ›÷ã›|¯ÅÅ|@>7o©Ï^ÌÇdtóÛÃgu_ÎÇäsó¶Æä÷è.æcò¹ùŸ-ñ*;bnş•³ûÜ¼Íwl.çc2ºy›MíÌÍ¿8]nŞä „Kù†ŒwÍã  ÿÿ´»Ã0DûÌ’ÂüÈ²Y²ÿS]uTs<„É'‰äÓl³ãnno¹›×Ïß±$‹L€Ôõšç
Ş¶_”,.Rææsğ‘üEÉâ(Unîc4ë;’UG ©rs¯•EmT²Ú enîë¹xKbQ²Ò(UnaÉ_À$+Œ Rçæ1mÜ¼.2îæ€©sóËf–¬*Háfs·¦=zcR5ÇºNÍ3<ù2îâ<Í=²ÍæqÍæôÚ¸›#¥ÌÍÓ½;ƒ3îæˆ)Ûl¾+Ì6ER7GJİ„v›ÍsÂÂ<Ì?Â	í6VsÒaÜÍS8¡}`¦ ¡›ïÏéWwsäÔu›ûjV†æav›§İ³ËèÔÍ±fv›g4#ÁŠó0)»Í£ŞKtœ§$ë6ù4WÆİ)•›Íóÿöäûyı   ÿÿ =hµ