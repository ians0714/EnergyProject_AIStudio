import React, { useState, useMemo } from 'react';
import { ANNUAL_8760_DATA } from '../data/energyDataset';
import { TechnologyParam, GridParam } from '../types';
import { solveHourDispatch } from '../utils/optimization';
import { Database, Search, Filter, Download, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  demandMw: number;
  carbonPrice: number;
  technologies: TechnologyParam[];
  grids: GridParam[];
}

export const DataExplorerView: React.FC<Props> = ({
  demandMw,
  carbonPrice,
  technologies,
  grids,
}) => {
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  const [selectedMonth, setSelectedMonth] = useState<number | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const pageSize = 50;

  const seasons = ['All', 'Winter', 'Spring', 'Summer', 'Autumn'];
  const months = [
    { value: 'All', label: 'All Months' },
    { value: 1, label: 'Jan' },
    { value: 2, label: 'Feb' },
    { value: 3, label: 'Mar' },
    { value: 4, label: 'Apr' },
    { value: 5, label: 'May' },
    { value: 6, label: 'Jun' },
    { value: 7, label: 'Jul' },
    { value: 8, label: 'Aug' },
    { value: 9, label: 'Sep' },
    { value: 10, label: 'Oct' },
    { value: 11, label: 'Nov' },
    { value: 12, label: 'Dec' },
  ];

  const filteredData = useMemo(() => {
    return ANNUAL_8760_DATA.filter((r) => {
      if (selectedSeason !== 'All' && r.Season !== selectedSeason) return false;
      if (selectedMonth !== 'All' && r.Month !== selectedMonth) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const str = `${r.Timestamp} ${r.Month} ${r.Day} ${r.Hour}`.toLowerCase();
        if (!str.includes(query)) return false;
      }
      return true;
    });
  }, [selectedSeason, selectedMonth, searchQuery]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const currentPageData = filteredData.slice(page * pageSize, (page + 1) * pageSize);

  const handleExportCSV = () => {
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
      'Total_Cost_EUR',
    ];

    const rows = filteredData.map((r) => {
      const dispatch = solveHourDispatch(
        r.Hour,
        r.Price,
        r.CO2_Intensity,
        {
          demandMw,
          carbonPrice,
          technologies,
          grids,
        },
        r.Wind_Capacity_Factor
      );

      return [
        r.Timestamp,
        r.Month,
        r.Day,
        r.Hour,
        r.Season,
        r.Price.toFixed(2),
        r.CO2_Intensity.toFixed(1),
        r.Wind_Capacity_Factor.toFixed(3),
        dispatch.gridEffectiveCost.toFixed(2),
        dispatch.gridImport.toFixed(2),
        (dispatch.generation['Wind'] || 0).toFixed(2),
        (dispatch.generation['Gas turebine'] || 0).toFixed(2),
        (dispatch.generation['Coal'] || 0).toFixed(2),
        (dispatch.generation['Biomass'] || 0).toFixed(2),
        dispatch.totalCost.toFixed(2),
      ].join(',');
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `energy_dispatch_8760_demand${demandMw}MW_co2${carbonPrice}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Header and Filter Controls */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-100">Annual 8,760 Hourly Dataset Explorer</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Inspect raw hourly market data alongside real-time optimized dispatch and cost calculation.
              </p>
            </div>
          </div>
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow transition-colors self-start md:self-auto"
          >
            <Download className="w-4 h-4" />
            Export Filtered CSV ({filteredData.length} records)
          </button>
        </div>

        {/* Filter bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Season Filter */}
          <div>
            <label className="block text-slate-400 font-medium mb-1">Season Filter:</label>
            <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
              {seasons.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSelectedSeason(s);
                    setPage(0);
                  }}
                  className={`flex-1 py-1 rounded-md text-xs font-medium transition-colors ${
                    selectedSeason === s ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Month Filter */}
          <div>
            <label className="block text-slate-400 font-medium mb-1">Month Filter:</label>
            <select
              value={selectedMonth}
              onChange={(e) => {
                setSelectedMonth(e.target.value === 'All' ? 'All' : Number(e.target.value));
                setPage(0);
              }}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-slate-200 focus:outline-none focus:border-blue-500"
            >
              {months.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          {/* Search Box */}
          <div>
            <label className="block text-slate-400 font-medium mb-1">Search Date / Hour:</label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. 08-27 or 14:00"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(0);
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-2.5 top-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-2.5 px-3">Timestamp</th>
                <th className="py-2.5 px-2">Season</th>
                <th className="py-2.5 px-3 text-right">Grid Price</th>
                <th className="py-2.5 px-3 text-right">Grid CO2</th>
                <th className="py-2.5 px-3 text-right text-emerald-400">Wind CF</th>
                <th className="py-2.5 px-3 text-right">Grid Eff. Cost</th>
                <th className="py-2.5 px-3 text-right text-sky-400">Grid (MW)</th>
                <th className="py-2.5 px-3 text-right text-emerald-400">Wind (MW)</th>
                <th className="py-2.5 px-3 text-right text-amber-400">Gas (MW)</th>
                <th className="py-2.5 px-3 text-right text-stone-400">Coal (MW)</th>
                <th className="py-2.5 px-3 text-right text-lime-400">Biomass (MW)</th>
                <th className="py-2.5 px-3 text-right text-amber-300 font-bold">Total Cost (€)</th>
                <th className="py-2.5 px-3 text-right text-emerald-300">Cost/MWh</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {currentPageData.map((r, idx) => {
                const dispatch = solveHourDispatch(
                  r.Hour,
                  r.Price,
                  r.CO2_Intensity,
                  {
                    demandMw,
                    carbonPrice,
                    technologies,
                    grids,
                  },
                  r.Wind_Capacity_Factor
                );

                return (
                  <tr key={idx} className="hover:bg-slate-800/40">
                    <td className="py-2 px-3 text-slate-200 font-sans font-medium">{r.Timestamp}</td>
                    <td className="py-2 px-2 text-slate-400 font-sans text-[11px]">{r.Season}</td>
                    <td className="py-2 px-3 text-right text-slate-300">€{r.Price.toFixed(2)}</td>
                    <td className="py-2 px-3 text-right text-slate-400">{r.CO2_Intensity.toFixed(0)} g</td>
                    <td className="py-2 px-3 text-right text-emerald-400 font-bold">{r.Wind_Capacity_Factor.toFixed(3)}</td>
                    <td className="py-2 px-3 text-right text-sky-400 font-semibold">
                      €{dispatch.gridEffectiveCost.toFixed(2)}
                    </td>
                    <td className="py-2 px-3 text-right text-sky-300 font-bold">
                      {dispatch.gridImport.toFixed(1)}
                    </td>
                    <td className="py-2 px-3 text-right text-emerald-400">
                      {(dispatch.generation['Wind'] || 0).toFixed(1)}
                    </td>
                    <td className="py-2 px-3 text-right text-amber-400">
                      {(dispatch.generation['Gas turebine'] || 0).toFixed(1)}
                    </td>
                    <td className="py-2 px-3 text-right text-stone-400">
                      {(dispatch.generation['Coal'] || 0).toFixed(1)}
                    </td>
                    <td className="py-2 px-3 text-right text-lime-400">
                      {(dispatch.generation['Biomass'] || 0).toFixed(1)}
                    </td>
                    <td className="py-2 px-3 text-right font-bold text-amber-300">
                      €{dispatch.totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                    <td className="py-2 px-3 text-right text-emerald-300 font-semibold">
                      €{dispatch.avgCostPerMwh.toFixed(1)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination bar */}
        <div className="p-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <div>
            Showing {filteredData.length > 0 ? page * pageSize + 1 : 0} to{' '}
            {Math.min((page + 1) * pageSize, filteredData.length)} of {filteredData.length} records
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 disabled:opacity-30 hover:bg-slate-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono">
              Page {page + 1} of {Math.max(1, totalPages)}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 disabled:opacity-30 hover:bg-slate-800 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
