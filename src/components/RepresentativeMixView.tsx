import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Brush,
} from 'recharts';
import {
  TimeWindow,
  TechnologyParam,
  GridParam,
  PeriodDispatchSummary,
  FourPeriodComparison,
} from '../types';
import {
  computePeriodDispatchSummary,
  computeFourPeriodComparison,
  identifyPeriodInfo,
  TECHNOLOGY_COLORS,
  MONTH_NAMES,
} from '../utils/optimization';
import {
  Calendar,
  Clock,
  Zap,
  Leaf,
  DollarSign,
  Layers,
  Info,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Download,
  Activity,
  ArrowUpDown,
  Table,
  CheckCircle2,
} from 'lucide-react';

interface Props {
  demandMw: number;
  carbonPrice: number;
  technologies: TechnologyParam[];
  grids: GridParam[];
}

export const RepresentativeMixView: React.FC<Props> = ({
  demandMw,
  carbonPrice,
  technologies,
  grids,
}) => {
  // Default selected date: 2025-08-27 (August 27, 2025 - baseline date)
  const [selectedDate, setSelectedDate] = useState<string>('2025-08-27');
  const [selectedWindow, setSelectedWindow] = useState<TimeWindow>('day');
  const [showMarketDrivers, setShowMarketDrivers] = useState<boolean>(true);
  const [comparisonPeriodFocus, setComparisonPeriodFocus] = useState<TimeWindow>('day');

  // Identify period info from selected date
  const periodInfo = useMemo(() => identifyPeriodInfo(selectedDate), [selectedDate]);

  // Compute period summary for the active time window
  const activeSummary: PeriodDispatchSummary = useMemo(() => {
    return computePeriodDispatchSummary(selectedWindow, selectedDate, {
      demandMw,
      carbonPrice,
      technologies,
      grids,
    });
  }, [selectedWindow, selectedDate, demandMw, carbonPrice, technologies, grids]);

  // Compute all 4 period summaries for comparison (Rule 18)
  const fourPeriodComparison: FourPeriodComparison = useMemo(() => {
    return computeFourPeriodComparison(selectedDate, {
      demandMw,
      carbonPrice,
      technologies,
      grids,
    });
  }, [selectedDate, demandMw, carbonPrice, technologies, grids]);

  // Technologies list for stacked chart
  const activeTechKeys = [
    'Wind',
    'Gas turebine',
    'Coal',
    'Biomass',
    'BioCH4-Gas Turebine',
    'Grid',
  ];

  // Quick date presets
  const presets = [
    { label: 'Aug 27 (Baseline)', date: '2025-08-27', tag: 'Summer Day' },
    { label: 'Jul 15 (Mid-Summer)', date: '2025-07-15', tag: 'High Solar/Wind' },
    { label: 'Jan 15 (Winter Peak)', date: '2025-01-15', tag: 'Winter' },
    { label: 'Apr 15 (Spring)', date: '2025-04-15', tag: 'Spring' },
    { label: 'Oct 15 (Autumn)', date: '2025-10-15', tag: 'Autumn' },
  ];

  // Navigate dates
  const handleDateShift = (days: number) => {
    const current = new Date(selectedDate);
    current.setDate(current.getDate() + days);
    // Keep within 2025
    if (current.getFullYear() === 2025) {
      const yyyy = current.getFullYear();
      const mm = String(current.getMonth() + 1).padStart(2, '0');
      const dd = String(current.getDate()).padStart(2, '0');
      setSelectedDate(`${yyyy}-${mm}-${dd}`);
    }
  };

  // Format chart data with downsampling if necessary for smooth performance
  const chartData = useMemo(() => {
    return activeSummary.hourlyResults.map((r, idx) => {
      let displayLabel = r.formattedTime;
      if (selectedWindow === 'day') {
        displayLabel = `${r.hour.toString().padStart(2, '0')}:00`;
      } else if (selectedWindow === 'month') {
        displayLabel = r.hour === 0 ? `${MONTH_NAMES[r.month - 1].substring(0, 3)} ${r.day}` : `${r.day}d ${r.hour}h`;
      } else if (selectedWindow === 'season') {
        displayLabel = r.hour === 0 && (r.day === 1 || r.day === 15) ? `${MONTH_NAMES[r.month - 1].substring(0, 3)} ${r.day}` : `${r.day}d`;
      } else {
        // year
        displayLabel = r.hour === 0 && r.day === 1 ? MONTH_NAMES[r.month - 1].substring(0, 3) : '';
      }

      return {
        index: idx,
        timestamp: r.timestamp,
        formattedTime: r.formattedTime,
        displayLabel,
        hour: r.hour,
        month: r.month,
        day: r.day,
        Grid: Number(r.gridImport.toFixed(2)),
        Wind: Number((r.generation['Wind'] || 0).toFixed(2)),
        'Gas turebine': Number((r.generation['Gas turebine'] || 0).toFixed(2)),
        Coal: Number((r.generation['Coal'] || 0).toFixed(2)),
        Biomass: Number((r.generation['Biomass'] || 0).toFixed(2)),
        'BioCH4-Gas Turebine': Number((r.generation['BioCH4-Gas Turebine'] || 0).toFixed(2)),
        gridPrice: Number(r.gridPrice.toFixed(2)),
        gridCo2: Number((r.gridCo2Intensity * 1000).toFixed(1)), // gCO2/kWh
        gridEffCost: Number(r.gridEffectiveCost.toFixed(2)),
        windCF: r.windCapacityFactor !== undefined ? Number((r.windCapacityFactor * 100).toFixed(1)) : 0,
        windAvail: r.windAvailableMw !== undefined ? Number(r.windAvailableMw.toFixed(1)) : 0,
        totalCost: Number(r.totalCost.toFixed(2)),
        totalEnergyCost: Number(r.totalEnergyCost.toFixed(2)),
        totalCarbonCost: Number(r.totalCarbonCost.toFixed(2)),
        costPerMwh: Number(r.avgCostPerMwh.toFixed(2)),
      };
    });
  }, [activeSummary, selectedWindow]);

  // Export CSV function for the selected period
  const handleExportPeriodCSV = () => {
    const headers = [
      'Timestamp',
      'Month',
      'Day',
      'Hour',
      'Season',
      'Grid_Price_EUR_MWh',
      'Grid_CO2_g_kWh',
      'Wind_Capacity_Factor',
      'Grid_Effective_Cost_EUR_MWh',
      'Grid_Import_MW',
      'Wind_MW',
      'Gas_Turbine_MW',
      'Coal_MW',
      'Biomass_MW',
      'BioCH4_MW',
      'Total_Supply_MW',
      'Energy_Cost_EUR',
      'Carbon_Cost_EUR',
      'Total_System_Cost_EUR',
      'Cost_EUR_MWh',
    ];

    const rows = activeSummary.hourlyResults.map((r) => [
      r.timestamp,
      r.month,
      r.day,
      r.hour,
      r.season,
      r.gridPrice.toFixed(2),
      (r.gridCo2Intensity * 1000).toFixed(1),
      (r.windCapacityFactor || 0).toFixed(4),
      r.gridEffectiveCost.toFixed(2),
      r.gridImport.toFixed(2),
      (r.generation['Wind'] || 0).toFixed(2),
      (r.generation['Gas turebine'] || 0).toFixed(2),
      (r.generation['Coal'] || 0).toFixed(2),
      (r.generation['Biomass'] || 0).toFixed(2),
      (r.generation['BioCH4-Gas Turebine'] || 0).toFixed(2),
      r.totalGeneration.toFixed(2),
      r.totalEnergyCost.toFixed(2),
      r.totalCarbonCost.toFixed(2),
      r.totalCost.toFixed(2),
      r.avgCostPerMwh.toFixed(2),
    ]);

    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hourly_dispatch_${selectedWindow}_${selectedDate}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Determine tick interval for x-axis based on time window
  const getXAxisInterval = () => {
    if (selectedWindow === 'day') return 2; // Every 2 hours
    if (selectedWindow === 'month') return 24 * 3; // Every 3 days
    if (selectedWindow === 'season') return 24 * 10; // Every 10 days
    return 24 * 30; // Every month
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Date Selection Card */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>Hourly Energy Supply Mix & Time-Window Analysis</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Preserving original hourly time-series data without artificial averaging • 100 MW constant demand.
              </p>
            </div>
          </div>

          {/* Date Selector Controls */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleDateShift(-1)}
                title="Previous Day"
                className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 px-2 py-1 bg-slate-900 border border-slate-700/80 rounded-lg">
                <Calendar className="w-4 h-4 text-blue-400" />
                <input
                  type="date"
                  min="2025-01-01"
                  max="2025-12-31"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-transparent text-xs font-mono font-bold text-slate-100 focus:outline-none cursor-pointer"
                />
              </div>

              <button
                onClick={() => handleDateShift(1)}
                title="Next Day"
                className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded-lg transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Date Presets */}
            <div className="hidden sm:flex items-center gap-1 border-l border-slate-800 pl-2">
              {presets.map((preset) => (
                <button
                  key={preset.date}
                  onClick={() => setSelectedDate(preset.date)}
                  className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    selectedDate === preset.date
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Automatic Period Identification Indicators (Rule 14 & 15) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-800/80 text-xs">
          <div
            onClick={() => setSelectedWindow('day')}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
              selectedWindow === 'day'
                ? 'bg-blue-950/50 border-blue-500/60 text-blue-300 ring-1 ring-blue-500/40 shadow-sm'
                : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-[10px] uppercase font-semibold text-slate-400 flex items-center justify-between">
              <span>Selected Day</span>
              <span className="font-mono text-slate-400">24 Hours</span>
            </div>
            <div className="font-bold text-slate-100 text-sm mt-0.5">{periodInfo.dayLabel}</div>
          </div>

          <div
            onClick={() => setSelectedWindow('month')}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
              selectedWindow === 'month'
                ? 'bg-blue-950/50 border-blue-500/60 text-blue-300 ring-1 ring-blue-500/40 shadow-sm'
                : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-[10px] uppercase font-semibold text-slate-400 flex items-center justify-between">
              <span>Corresponding Month</span>
              <span className="font-mono text-slate-400">{fourPeriodComparison.monthSummary.totalHours}h</span>
            </div>
            <div className="font-bold text-slate-100 text-sm mt-0.5">{periodInfo.monthLabel}</div>
          </div>

          <div
            onClick={() => setSelectedWindow('season')}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
              selectedWindow === 'season'
                ? 'bg-blue-950/50 border-blue-500/60 text-blue-300 ring-1 ring-blue-500/40 shadow-sm'
                : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-[10px] uppercase font-semibold text-slate-400 flex items-center justify-between">
              <span>Corresponding Season</span>
              <span className="font-mono text-slate-400">{fourPeriodComparison.seasonSummary.totalHours}h</span>
            </div>
            <div className="font-bold text-slate-100 text-sm mt-0.5 truncate" title={periodInfo.seasonLabel}>
              {periodInfo.seasonLabel}
            </div>
          </div>

          <div
            onClick={() => setSelectedWindow('year')}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
              selectedWindow === 'year'
                ? 'bg-blue-950/50 border-blue-500/60 text-blue-300 ring-1 ring-blue-500/40 shadow-sm'
                : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-[10px] uppercase font-semibold text-slate-400 flex items-center justify-between">
              <span>Corresponding Year</span>
              <span className="font-mono text-slate-400">8,760 Hours</span>
            </div>
            <div className="font-bold text-slate-100 text-sm mt-0.5">{periodInfo.yearLabel}</div>
          </div>
        </div>
      </div>

      {/* Time Window Switcher Bar (Rule 13) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-3 rounded-xl">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-400" />
            Time-Window:
          </span>
          <div className="inline-flex bg-slate-950 p-1 rounded-lg border border-slate-800">
            {(['day', 'month', 'season', 'year'] as TimeWindow[]).map((tw) => {
              const labels = {
                day: `Day (${periodInfo.dayLabel})`,
                month: `Month (${periodInfo.monthLabel})`,
                season: `Season (${periodInfo.seasonName})`,
                year: `Year (2025)`,
              };
              return (
                <button
                  key={tw}
                  onClick={() => setSelectedWindow(tw)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors capitalize ${
                    selectedWindow === tw
                      ? 'bg-blue-600 text-white font-semibold shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {labels[tw]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setShowMarketDrivers(!showMarketDrivers)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 ${
              showMarketDrivers
                ? 'bg-slate-800 border-slate-700 text-sky-400'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{showMarketDrivers ? 'Hide Drivers Chart' : 'Show Drivers Chart'}</span>
          </button>

          <button
            onClick={handleExportPeriodCSV}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Active Time-Window Period KPI Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl shadow-sm">
          <div className="text-[11px] text-slate-400 uppercase font-semibold">Total Period Demand</div>
          <div className="text-lg font-bold font-mono text-slate-100 mt-1">
            {activeSummary.totalDemandMwh.toLocaleString()} <span className="text-xs text-slate-400 font-sans">MWh</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            {activeSummary.totalHours} hours × 100 MW
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl shadow-sm">
          <div className="text-[11px] text-slate-400 uppercase font-semibold">Total System Cost</div>
          <div className="text-lg font-bold font-mono text-amber-400 mt-1">
            €{activeSummary.totalSystemCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Avg: <strong className="text-emerald-400">€{activeSummary.avgCostPerMwh.toFixed(1)}/MWh</strong>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl shadow-sm">
          <div className="text-[11px] text-slate-400 uppercase font-semibold">Energy Supply Cost</div>
          <div className="text-lg font-bold font-mono text-slate-200 mt-1">
            €{activeSummary.totalEnergyCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            {((activeSummary.totalEnergyCostEur / (activeSummary.totalSystemCostEur || 1)) * 100).toFixed(1)}% of total
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl shadow-sm">
          <div className="text-[11px] text-slate-400 uppercase font-semibold">Carbon Emissions Cost</div>
          <div className="text-lg font-bold font-mono text-rose-400 mt-1">
            €{activeSummary.totalCarbonCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            @ €{carbonPrice}/tCO2
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl shadow-sm">
          <div className="text-[11px] text-slate-400 uppercase font-semibold">Total CO2 Emissions</div>
          <div className="text-lg font-bold font-mono text-slate-100 mt-1">
            {activeSummary.totalCo2EmissionsTons.toLocaleString(undefined, { maximumFractionDigits: 1 })}{' '}
            <span className="text-xs text-slate-400 font-sans">t</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Intensity: <strong>{activeSummary.avgCo2IntensityKgMwh.toFixed(0)} g/kWh</strong>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl shadow-sm">
          <div className="text-[11px] text-slate-400 uppercase font-semibold">Grid Import Share</div>
          <div className="text-lg font-bold font-mono text-sky-400 mt-1">
            {activeSummary.supplyMixPercentages['Grid']?.toFixed(1)}%
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            {activeSummary.totalGridImportMwh.toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh
          </div>
        </div>
      </div>

      {/* Main Hourly Dispatch Stacked Area Chart (Rule 16 & 17) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <span>{activeSummary.title}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Original hourly linear dispatch for every hour in {activeSummary.periodLabel} ({activeSummary.totalHours} hourly steps).
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
              Demand: <strong className="text-amber-400">100.0 MW</strong> (Strict)
            </div>
            <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
              Avg Cost: <strong className="text-emerald-400">€{activeSummary.avgCostPerMwh.toFixed(1)}/MWh</strong>
            </div>
          </div>
        </div>

        {/* Stacked Chart Container */}
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 15, left: -10, bottom: 0 }}>
              <defs>
                {activeTechKeys.map((key) => {
                  const conf = TECHNOLOGY_COLORS[key] || { fill: '#64748b', stroke: '#475569' };
                  const safeKey = key.replace(/[^a-zA-Z0-9]/g, '_');
                  return (
                    <linearGradient key={key} id={`grad-${selectedWindow}-${safeKey}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={conf.fill} stopOpacity={0.9} />
                      <stop offset="95%" stopColor={conf.fill} stopOpacity={0.7} />
                    </linearGradient>
                  );
                })}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis
                dataKey="displayLabel"
                stroke="#64748b"
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                interval={getXAxisInterval()}
              />
              <YAxis
                stroke="#64748b"
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                domain={[0, demandMw]}
                label={{
                  value: 'Hourly Power [MW]',
                  angle: -90,
                  position: 'insideLeft',
                  fill: '#94a3b8',
                  fontSize: 11,
                  offset: 15,
                }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-slate-900/95 border border-slate-700 p-3 rounded-xl shadow-2xl text-xs z-50 min-w-[240px] backdrop-blur">
                        <div className="font-bold text-slate-100 border-b border-slate-700/80 pb-1.5 mb-2 flex justify-between">
                          <span>{data.formattedTime}</span>
                          <span className="text-amber-400 font-mono">€{data.costPerMwh.toFixed(1)}/MWh</span>
                        </div>
                        <div className="space-y-1 mb-2">
                          {payload
                            .filter((p: any) => Number(p.value) > 0)
                            .map((p: any) => {
                              const conf = TECHNOLOGY_COLORS[p.dataKey] || { fill: '#fff', label: p.dataKey };
                              return (
                                <div key={p.dataKey} className="flex justify-between items-center">
                                  <span className="flex items-center gap-1.5 text-slate-300">
                                    <span
                                      className="w-2.5 h-2.5 rounded-sm inline-block shrink-0"
                                      style={{ backgroundColor: conf.fill }}
                                    />
                                    {conf.label}:
                                  </span>
                                  <span className="font-mono font-semibold text-slate-100">
                                    {Number(p.value).toFixed(1)} MW
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                        <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-0.5">
                          <div className="flex justify-between">
                            <span className="text-emerald-400">Wind CF (Hourly Avail):</span>
                            <span className="font-mono text-emerald-300 font-semibold">
                              {data.windCF.toFixed(1)}% ({data.windAvail.toFixed(1)} MW)
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Grid Market Price:</span>
                            <span className="font-mono text-slate-300">€{data.gridPrice.toFixed(1)}/MWh</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Grid Carbon Intensity:</span>
                            <span className="font-mono text-slate-300">{data.gridCo2.toFixed(0)} g/kWh</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Grid Effective Cost:</span>
                            <span className="font-mono text-sky-400">€{data.gridEffCost.toFixed(1)}/MWh</span>
                          </div>
                          <div className="flex justify-between pt-1 border-t border-slate-800 text-amber-300 font-semibold">
                            <span>Total Hourly System Cost:</span>
                            <span className="font-mono">€{data.totalCost.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value) => {
                  const conf = TECHNOLOGY_COLORS[value];
                  return <span className="text-xs text-slate-300 ml-1">{conf?.label || value}</span>;
                }}
              />
              {activeTechKeys.map((key) => {
                const conf = TECHNOLOGY_COLORS[key] || { stroke: '#94a3b8' };
                const safeKey = key.replace(/[^a-zA-Z0-9]/g, '_');
                return (
                  <Area
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stackId="1"
                    stroke={conf.stroke}
                    fill={`url(#grad-${selectedWindow}-${safeKey})`}
                  />
                );
              })}
              {selectedWindow !== 'day' && <Brush dataKey="index" height={24} stroke="#3b82f6" fill="#0f172a" />}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Energy Mix Share Bar */}
        <div className="pt-3 border-t border-slate-800">
          <div className="flex justify-between items-center text-xs mb-1.5">
            <span className="text-slate-400 font-semibold">
              {activeSummary.periodLabel} Supply Mix Contribution:
            </span>
            <span className="text-slate-400 font-mono">
              Total Generation: {activeSummary.totalGenerationMwh.toLocaleString()} MWh
            </span>
          </div>
          <div className="h-3.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
            {activeTechKeys.map((key) => {
              const pct = activeSummary.supplyMixPercentages[key] || 0;
              if (pct < 0.1) return null;
              const conf = TECHNOLOGY_COLORS[key] || { fill: '#64748b' };
              return (
                <div
                  key={key}
                  style={{ width: `${pct}%`, backgroundColor: conf.fill }}
                  title={`${conf.label}: ${pct.toFixed(1)}% (${(activeSummary.supplyMixSummary[key] || 0).toLocaleString()} MWh)`}
                  className="h-full transition-all duration-300 hover:opacity-80"
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px]">
            {activeTechKeys.map((key) => {
              const pct = activeSummary.supplyMixPercentages[key] || 0;
              const mwh = activeSummary.supplyMixSummary[key] || 0;
              const conf = TECHNOLOGY_COLORS[key] || { fill: '#64748b', label: key };
              return (
                <span key={key} className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-sm inline-block shrink-0" style={{ backgroundColor: conf.fill }} />
                  <span>{conf.label}:</span>
                  <strong className="text-slate-100 font-mono">{pct.toFixed(1)}%</strong>
                  <span className="text-slate-400">({mwh.toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh)</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hourly Market Drivers & Wind Availability Sub-Chart */}
      {showMarketDrivers && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Activity className="w-4 h-4 text-sky-400" />
                Hourly Market Drivers & Dynamic Wind Profile ({activeSummary.periodLabel})
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Exact dataset inputs driving the merit-order dispatch for each individual hour.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-sky-400">
                <span className="w-2.5 h-0.5 bg-sky-400 inline-block" /> Grid Eff. Cost (€/MWh)
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <span className="w-2.5 h-0.5 bg-slate-400 inline-block" /> Grid Price (€/MWh)
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2.5 h-0.5 bg-emerald-400 inline-block" /> Wind CF (%)
              </span>
            </div>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 15, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis
                  dataKey="displayLabel"
                  stroke="#64748b"
                  tick={{ fill: '#94a3b8', fontSize: 10 }}
                  interval={getXAxisInterval()}
                />
                <YAxis
                  yAxisId="cost"
                  stroke="#64748b"
                  tick={{ fill: '#94a3b8', fontSize: 10 }}
                  label={{
                    value: 'Cost [€/MWh]',
                    angle: -90,
                    position: 'insideLeft',
                    fill: '#94a3b8',
                    fontSize: 10,
                    offset: 15,
                  }}
                />
                <YAxis
                  yAxisId="cf"
                  orientation="right"
                  stroke="#10b981"
                  domain={[0, 100]}
                  tick={{ fill: '#10b981', fontSize: 10 }}
                  label={{
                    value: 'Wind CF [%]',
                    angle: 90,
                    position: 'insideRight',
                    fill: '#10b981',
                    fontSize: 10,
                    offset: 15,
                  }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const d = payload[0].payload;
                      return (
                        <div className="bg-slate-950 border border-slate-700 p-2.5 rounded-lg shadow-xl text-xs font-mono space-y-1">
                          <div className="text-slate-300 font-bold border-b border-slate-800 pb-1 font-sans">
                            {d.formattedTime}
                          </div>
                          <div className="text-sky-400">Grid Eff. Cost: €{d.gridEffCost}/MWh</div>
                          <div className="text-slate-300">Grid Wholesale Price: €{d.gridPrice}/MWh</div>
                          <div className="text-slate-400">Grid Carbon Intensity: {d.gridCo2} g/kWh</div>
                          <div className="text-emerald-400">Wind CF: {d.windCF}% ({d.windAvail} MW)</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  yAxisId="cost"
                  type="monotone"
                  dataKey="gridEffCost"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  dot={false}
                  name="Grid Effective Cost (€/MWh)"
                />
                <Line
                  yAxisId="cost"
                  type="monotone"
                  dataKey="gridPrice"
                  stroke="#94a3b8"
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                  dot={false}
                  name="Grid Wholesale Price (€/MWh)"
                />
                <Line
                  yAxisId="cf"
                  type="monotone"
                  dataKey="windCF"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                  name="Wind Capacity Factor (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* 4-Period Comparison Matrix & Report (Rule 18) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <span>4-Period Optimization Comparison Matrix (Rule 18)</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Side-by-side comparison of the Selected Day, Month, Season, and Year derived by summing original hourly optimizations.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
            Selected Anchor: <strong className="text-blue-400">{periodInfo.dayLabel}</strong>
          </span>
        </div>

        {/* 4 Cards Summary View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: 'day' as TimeWindow,
              title: 'Selected Day',
              sub: periodInfo.dayLabel,
              summary: fourPeriodComparison.daySummary,
              accent: 'border-blue-500/40 bg-blue-950/20',
            },
            {
              id: 'month' as TimeWindow,
              title: 'Corresponding Month',
              sub: periodInfo.monthLabel,
              summary: fourPeriodComparison.monthSummary,
              accent: 'border-indigo-500/40 bg-indigo-950/20',
            },
            {
              id: 'season' as TimeWindow,
              title: 'Corresponding Season',
              sub: periodInfo.seasonLabel,
              summary: fourPeriodComparison.seasonSummary,
              accent: 'border-emerald-500/40 bg-emerald-950/20',
            },
            {
              id: 'year' as TimeWindow,
              title: 'Full Annual Year',
              sub: periodInfo.yearLabel,
              summary: fourPeriodComparison.yearSummary,
              accent: 'border-amber-500/40 bg-amber-950/20',
            },
          ].map((item) => {
            const s = item.summary;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedWindow(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer hover:border-slate-600 ${item.accent} ${
                  selectedWindow === item.id ? 'ring-2 ring-blue-400 shadow-lg' : ''
                }`}
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-300">{item.title}</span>
                    <div className="text-xs text-slate-400 font-sans truncate">{item.sub}</div>
                  </div>
                  <span className="text-xs font-mono font-bold bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800 text-slate-300">
                    {s.totalHours}h
                  </span>
                </div>

                <div className="mt-3 space-y-2 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total System Cost:</span>
                    <strong className="text-amber-400">
                      €{s.totalSystemCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Unit Cost:</span>
                    <strong className="text-emerald-400">€{s.avgCostPerMwh.toFixed(1)}/MWh</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">CO2 Emissions:</span>
                    <span className="text-slate-200">
                      {s.totalCo2EmissionsTons.toLocaleString(undefined, { maximumFractionDigits: 1 })} t
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Grid Import:</span>
                    <span className="text-sky-400 font-semibold">
                      {s.supplyMixPercentages['Grid']?.toFixed(1)}% ({s.totalGridImportMwh.toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Wind Share:</span>
                    <span className="text-emerald-400 font-semibold">
                      {s.supplyMixPercentages['Wind']?.toFixed(1)}% ({s.supplyMixSummary['Wind']?.toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh)
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Demand: {s.totalDemandMwh.toLocaleString()} MWh</span>
                  <span className="text-blue-400 hover:underline flex items-center gap-1 font-medium">
                    View Dispatch →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Side-by-Side Comparison Table (Rule 18 Calculation) */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-3.5 font-sans font-semibold">Comparison Metric</th>
                <th className="py-3 px-3.5 text-right font-sans text-blue-400 font-semibold">
                  Selected Day ({periodInfo.dayLabel})
                </th>
                <th className="py-3 px-3.5 text-right font-sans text-indigo-300 font-semibold">
                  Month ({periodInfo.monthLabel})
                </th>
                <th className="py-3 px-3.5 text-right font-sans text-emerald-300 font-semibold">
                  Season ({periodInfo.seasonName})
                </th>
                <th className="py-3 px-3.5 text-right font-sans text-amber-300 font-semibold">
                  Year (2025 Annual)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr className="hover:bg-slate-800/40">
                <td className="py-2.5 px-3.5 font-sans text-slate-300 font-medium">Time Window Duration</td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">24 Hours</td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">
                  {fourPeriodComparison.monthSummary.totalHours} Hours
                </td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">
                  {fourPeriodComparison.seasonSummary.totalHours} Hours
                </td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">8,760 Hours</td>
              </tr>

              <tr className="hover:bg-slate-800/40">
                <td className="py-2.5 px-3.5 font-sans text-slate-300 font-medium">Total Electricity Demand</td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">2,400 MWh</td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">
                  {fourPeriodComparison.monthSummary.totalDemandMwh.toLocaleString()} MWh
                </td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">
                  {fourPeriodComparison.seasonSummary.totalDemandMwh.toLocaleString()} MWh
                </td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">876,000 MWh</td>
              </tr>

              <tr className="hover:bg-slate-800/40 bg-slate-950/30">
                <td className="py-2.5 px-3.5 font-sans text-amber-400 font-semibold">Total System Cost (€)</td>
                <td className="py-2.5 px-3.5 text-right font-bold text-amber-400">
                  €{fourPeriodComparison.daySummary.totalSystemCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-2.5 px-3.5 text-right font-bold text-amber-400">
                  €{fourPeriodComparison.monthSummary.totalSystemCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-2.5 px-3.5 text-right font-bold text-amber-400">
                  €{fourPeriodComparison.seasonSummary.totalSystemCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-2.5 px-3.5 text-right font-bold text-amber-400">
                  €{fourPeriodComparison.yearSummary.totalSystemCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
              </tr>

              <tr className="hover:bg-slate-800/40 bg-slate-950/30">
                <td className="py-2.5 px-3.5 font-sans text-emerald-400 font-semibold">Average Unit Cost (€/MWh)</td>
                <td className="py-2.5 px-3.5 text-right font-bold text-emerald-400">
                  €{fourPeriodComparison.daySummary.avgCostPerMwh.toFixed(1)}/MWh
                </td>
                <td className="py-2.5 px-3.5 text-right font-bold text-emerald-400">
                  €{fourPeriodComparison.monthSummary.avgCostPerMwh.toFixed(1)}/MWh
                </td>
                <td className="py-2.5 px-3.5 text-right font-bold text-emerald-400">
                  €{fourPeriodComparison.seasonSummary.avgCostPerMwh.toFixed(1)}/MWh
                </td>
                <td className="py-2.5 px-3.5 text-right font-bold text-emerald-400">
                  €{fourPeriodComparison.yearSummary.avgCostPerMwh.toFixed(1)}/MWh
                </td>
              </tr>

              <tr className="hover:bg-slate-800/40">
                <td className="py-2.5 px-3.5 font-sans text-slate-300">Energy Generation Cost (€)</td>
                <td className="py-2.5 px-3.5 text-right text-slate-300">
                  €{fourPeriodComparison.daySummary.totalEnergyCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-2.5 px-3.5 text-right text-slate-300">
                  €{fourPeriodComparison.monthSummary.totalEnergyCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-2.5 px-3.5 text-right text-slate-300">
                  €{fourPeriodComparison.seasonSummary.totalEnergyCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-2.5 px-3.5 text-right text-slate-300">
                  €{fourPeriodComparison.yearSummary.totalEnergyCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
              </tr>

              <tr className="hover:bg-slate-800/40">
                <td className="py-2.5 px-3.5 font-sans text-rose-400">Carbon Cost (€)</td>
                <td className="py-2.5 px-3.5 text-right text-rose-400">
                  €{fourPeriodComparison.daySummary.totalCarbonCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-2.5 px-3.5 text-right text-rose-400">
                  €{fourPeriodComparison.monthSummary.totalCarbonCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-2.5 px-3.5 text-right text-rose-400">
                  €{fourPeriodComparison.seasonSummary.totalCarbonCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-2.5 px-3.5 text-right text-rose-400">
                  €{fourPeriodComparison.yearSummary.totalCarbonCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
              </tr>

              <tr className="hover:bg-slate-800/40">
                <td className="py-2.5 px-3.5 font-sans text-slate-300">Total CO2 Emissions (tCO2)</td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">
                  {fourPeriodComparison.daySummary.totalCo2EmissionsTons.toFixed(1)} t
                </td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">
                  {fourPeriodComparison.monthSummary.totalCo2EmissionsTons.toLocaleString(undefined, { maximumFractionDigits: 0 })} t
                </td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">
                  {fourPeriodComparison.seasonSummary.totalCo2EmissionsTons.toLocaleString(undefined, { maximumFractionDigits: 0 })} t
                </td>
                <td className="py-2.5 px-3.5 text-right text-slate-200">
                  {fourPeriodComparison.yearSummary.totalCo2EmissionsTons.toLocaleString(undefined, { maximumFractionDigits: 0 })} t
                </td>
              </tr>

              <tr className="hover:bg-slate-800/40">
                <td className="py-2.5 px-3.5 font-sans text-sky-400">Grid Import (MWh & Share)</td>
                <td className="py-2.5 px-3.5 text-right text-sky-400">
                  {fourPeriodComparison.daySummary.totalGridImportMwh.toFixed(1)} MWh (
                  {fourPeriodComparison.daySummary.supplyMixPercentages['Grid']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-sky-400">
                  {fourPeriodComparison.monthSummary.totalGridImportMwh.toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.monthSummary.supplyMixPercentages['Grid']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-sky-400">
                  {fourPeriodComparison.seasonSummary.totalGridImportMwh.toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.seasonSummary.supplyMixPercentages['Grid']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-sky-400">
                  {fourPeriodComparison.yearSummary.totalGridImportMwh.toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.yearSummary.supplyMixPercentages['Grid']?.toFixed(1)}%)
                </td>
              </tr>

              <tr className="hover:bg-slate-800/40">
                <td className="py-2.5 px-3.5 font-sans text-emerald-400">Wind Generation (MWh & Share)</td>
                <td className="py-2.5 px-3.5 text-right text-emerald-400">
                  {(fourPeriodComparison.daySummary.supplyMixSummary['Wind'] || 0).toFixed(1)} MWh (
                  {fourPeriodComparison.daySummary.supplyMixPercentages['Wind']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-emerald-400">
                  {(fourPeriodComparison.monthSummary.supplyMixSummary['Wind'] || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.monthSummary.supplyMixPercentages['Wind']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-emerald-400">
                  {(fourPeriodComparison.seasonSummary.supplyMixSummary['Wind'] || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.seasonSummary.supplyMixPercentages['Wind']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-emerald-400">
                  {(fourPeriodComparison.yearSummary.supplyMixSummary['Wind'] || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.yearSummary.supplyMixPercentages['Wind']?.toFixed(1)}%)
                </td>
              </tr>

              <tr className="hover:bg-slate-800/40">
                <td className="py-2.5 px-3.5 font-sans text-amber-400">Gas Turbine (MWh & Share)</td>
                <td className="py-2.5 px-3.5 text-right text-amber-400">
                  {(fourPeriodComparison.daySummary.supplyMixSummary['Gas turebine'] || 0).toFixed(1)} MWh (
                  {fourPeriodComparison.daySummary.supplyMixPercentages['Gas turebine']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-amber-400">
                  {(fourPeriodComparison.monthSummary.supplyMixSummary['Gas turebine'] || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.monthSummary.supplyMixPercentages['Gas turebine']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-amber-400">
                  {(fourPeriodComparison.seasonSummary.supplyMixSummary['Gas turebine'] || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.seasonSummary.supplyMixPercentages['Gas turebine']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-amber-400">
                  {(fourPeriodComparison.yearSummary.supplyMixSummary['Gas turebine'] || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.yearSummary.supplyMixPercentages['Gas turebine']?.toFixed(1)}%)
                </td>
              </tr>

              <tr className="hover:bg-slate-800/40">
                <td className="py-2.5 px-3.5 font-sans text-stone-400">Coal Generation (MWh & Share)</td>
                <td className="py-2.5 px-3.5 text-right text-stone-400">
                  {(fourPeriodComparison.daySummary.supplyMixSummary['Coal'] || 0).toFixed(1)} MWh (
                  {fourPeriodComparison.daySummary.supplyMixPercentages['Coal']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-stone-400">
                  {(fourPeriodComparison.monthSummary.supplyMixSummary['Coal'] || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.monthSummary.supplyMixPercentages['Coal']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-stone-400">
                  {(fourPeriodComparison.seasonSummary.supplyMixSummary['Coal'] || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.seasonSummary.supplyMixPercentages['Coal']?.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-3.5 text-right text-stone-400">
                  {(fourPeriodComparison.yearSummary.supplyMixSummary['Coal'] || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })} MWh (
                  {fourPeriodComparison.yearSummary.supplyMixPercentages['Coal']?.toFixed(1)}%)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Comprehensive Source Accounting Table for Current Window */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div>
            <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <Table className="w-4 h-4 text-blue-400" />
              Source Accounting Breakdown ({activeSummary.title})
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Installed capacity, period generation, CO2 accounting, energy cost, carbon cost, and average unit cost.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-slate-400">Time-Window:</span>
            <span className="text-blue-400 font-bold uppercase">{selectedWindow}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-2.5 px-3 font-sans font-semibold">Energy Source</th>
                <th className="py-2.5 px-3 text-right">Installed Cap (MW)</th>
                <th className="py-2.5 px-3 text-right">Period CF</th>
                <th className="py-2.5 px-3 text-right font-sans font-semibold text-slate-200">
                  Period Gen (MWh)
                </th>
                <th className="py-2.5 px-3 text-right">Gen Share (%)</th>
                <th className="py-2.5 px-3 text-right">CO2 (tCO2)</th>
                <th className="py-2.5 px-3 text-right">CO2 Share (%)</th>
                <th className="py-2.5 px-3 text-right">Energy Cost (€)</th>
                <th className="py-2.5 px-3 text-right">Carbon Cost (€)</th>
                <th className="py-2.5 px-3 text-right font-sans font-bold text-amber-400">Total Cost (€)</th>
                <th className="py-2.5 px-3 text-right font-bold text-emerald-400">Avg Cost (€/MWh)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {activeSummary.sourceAccounting.map((sa) => {
                const conf = TECHNOLOGY_COLORS[sa.source] || { fill: '#64748b', label: sa.label };
                return (
                  <tr key={sa.source} className="hover:bg-slate-800/40">
                    <td className="py-2.5 px-3 font-sans font-medium text-slate-200 flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-sm inline-block shrink-0"
                        style={{ backgroundColor: conf.fill }}
                      />
                      <span>{conf.label}</span>
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-400">
                      {Number.isFinite(sa.installedCapacityMw) ? `${sa.installedCapacityMw.toFixed(1)} MW` : '∞ (Unrestricted)'}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-300">
                      {sa.isGrid ? '1.000' : sa.capacityFactor.toFixed(3)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-slate-100">
                      {sa.generationMwh.toLocaleString(undefined, { maximumFractionDigits: 1 })} MWh
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-300">{sa.sharePercent.toFixed(1)}%</td>
                    <td className="py-2.5 px-3 text-right text-slate-400">
                      {sa.co2EmissionsTons.toLocaleString(undefined, { maximumFractionDigits: 1 })} t
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-400">{sa.co2SharePercent.toFixed(1)}%</td>
                    <td className="py-2.5 px-3 text-right text-slate-300">
                      €{sa.energyCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                    <td className="py-2.5 px-3 text-right text-rose-400">
                      €{sa.carbonCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-amber-400">
                      €{sa.totalCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-emerald-400">
                      {sa.generationMwh > 0 ? `€${sa.avgCostPerMwh.toFixed(1)}/MWh` : '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-slate-950/80 font-bold border-t-2 border-slate-700 text-slate-100">
              <tr>
                <td className="py-3 px-3 font-sans">Total System Summary</td>
                <td className="py-3 px-3 text-right">—</td>
                <td className="py-3 px-3 text-right">—</td>
                <td className="py-3 px-3 text-right text-blue-400 font-mono">
                  {activeSummary.totalGenerationMwh.toLocaleString()} MWh
                </td>
                <td className="py-3 px-3 text-right">100.0%</td>
                <td className="py-3 px-3 text-right font-mono">
                  {activeSummary.totalCo2EmissionsTons.toLocaleString(undefined, { maximumFractionDigits: 1 })} t
                </td>
                <td className="py-3 px-3 text-right">100.0%</td>
                <td className="py-3 px-3 text-right text-slate-200 font-mono">
                  €{activeSummary.totalEnergyCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-3 px-3 text-right text-rose-400 font-mono">
                  €{activeSummary.totalCarbonCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-3 px-3 text-right text-amber-400 font-mono">
                  €{activeSummary.totalSystemCostEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="py-3 px-3 text-right text-emerald-400 font-mono">
                  €{activeSummary.avgCostPerMwh.toFixed(1)}/MWh
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
