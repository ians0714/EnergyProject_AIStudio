import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import { ProfileType, ProfileSummary, TechnologyParam, GridParam } from '../types';
import { computeProfileSummary, TECHNOLOGY_COLORS } from '../utils/optimization';
import { Clock, Zap, Leaf, DollarSign, Layers, Info } from 'lucide-react';

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
  const [activeProfileTab, setActiveProfileTab] = useState<ProfileType | 'all'>('all');
  const [selectedHour, setSelectedHour] = useState<number | null>(null);

  const profileTypes: { id: ProfileType; label: string; tag: string }[] = [
    { id: 'annual', label: 'Annual Average', tag: '8,760h Mean' },
    { id: 'summer', label: 'Summer Average', tag: 'Jun-Aug Mean' },
    { id: 'august', label: 'August Average', tag: 'Monthly Mean' },
    { id: 'august27', label: 'August 27', tag: 'Daily Profile' },
  ];

  const summaries: Record<ProfileType, ProfileSummary> = {
    annual: computeProfileSummary('annual', { demandMw, carbonPrice, technologies, grids }),
    summer: computeProfileSummary('summer', { demandMw, carbonPrice, technologies, grids }),
    august: computeProfileSummary('august', { demandMw, carbonPrice, technologies, grids }),
    august27: computeProfileSummary('august27', { demandMw, carbonPrice, technologies, grids }),
  };

  // Technologies list for stacked chart
  const activeTechKeys = [
    'Wind',
    'Gas turebine',
    'Coal',
    'Biomass',
    'BioCH4-Gas Turebine',
    'Grid',
  ];

  const renderProfileChart = (summary: ProfileSummary, isCompact: boolean = false) => {
    const chartData = summary.hourlyResults.map((r) => ({
      hour: r.hour,
      label: r.label,
      Grid: Number(r.gridImport.toFixed(2)),
      Wind: Number((r.generation['Wind'] || 0).toFixed(2)),
      'Gas turebine': Number((r.generation['Gas turebine'] || 0).toFixed(2)),
      Coal: Number((r.generation['Coal'] || 0).toFixed(2)),
      Biomass: Number((r.generation['Biomass'] || 0).toFixed(2)),
      'BioCH4-Gas Turebine': Number((r.generation['BioCH4-Gas Turebine'] || 0).toFixed(2)),
      gridPrice: r.gridPrice,
      gridCo2: r.gridCo2Intensity,
      gridEffCost: r.gridEffectiveCost,
      windCF: r.windCapacityFactor,
      windAvail: r.windAvailableMw,
      totalCost: r.totalCost,
      costPerMwh: r.avgCostPerMwh,
    }));

    return (
      <div
        key={summary.profileType}
        className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-lg flex flex-col justify-between"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span>{summary.title}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">{summary.description}</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <span className="text-slate-400">24h Total: </span>
              <span className="font-mono font-bold text-amber-400">
                €{summary.total24hCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <span className="text-slate-400">Avg Cost: </span>
              <span className="font-mono font-bold text-emerald-400">
                €{summary.avg24hCostPerMwh.toFixed(1)}/MWh
              </span>
            </div>
          </div>
        </div>

        <div className={isCompact ? 'h-64 w-full' : 'h-80 w-full'}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                {activeTechKeys.map((key) => {
                  const conf = TECHNOLOGY_COLORS[key] || { fill: '#64748b', stroke: '#475569' };
                  const safeKey = key.replace(/[^a-zA-Z0-9]/g, '_');
                  return (
                    <linearGradient key={key} id={`grad-${summary.profileType}-${safeKey}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={conf.fill} stopOpacity={0.9} />
                      <stop offset="95%" stopColor={conf.fill} stopOpacity={0.7} />
                    </linearGradient>
                  );
                })}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis
                dataKey="label"
                stroke="#64748b"
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                interval={2}
              />
              <YAxis
                stroke="#64748b"
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                domain={[0, demandMw]}
                label={{
                  value: 'Power [MW]',
                  angle: -90,
                  position: 'insideLeft',
                  fill: '#94a3b8',
                  fontSize: 11,
                  offset: 15,
                }}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl text-xs z-50 min-w-[200px]">
                        <div className="font-bold text-slate-200 border-b border-slate-700/80 pb-1.5 mb-2 flex justify-between">
                          <span>Hour {label}</span>
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
                                      className="w-2.5 h-2.5 rounded-sm inline-block"
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
                          {data.windCF !== undefined && (
                            <div className="flex justify-between">
                              <span className="text-emerald-400">Wind CF (Hourly Avail):</span>
                              <span className="font-mono text-emerald-300 font-semibold">
                                {(data.windCF * 100).toFixed(1)}% ({data.windAvail?.toFixed(1) ?? '—'} MW)
                              </span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span>Grid Market Price:</span>
                            <span className="font-mono text-slate-300">€{data.gridPrice.toFixed(1)}/MWh</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Grid Effective Cost:</span>
                            <span className="font-mono text-sky-400">€{data.gridEffCost.toFixed(1)}/MWh</span>
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
                    fill={`url(#grad-${summary.profileType}-${safeKey})`}
                  />
                );
              })}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Share breakdown bar */}
        <div className="mt-4 pt-3 border-t border-slate-800">
          <div className="flex justify-between items-center text-xs mb-1.5">
            <span className="text-slate-400">24-Hour Energy Mix Breakdown:</span>
            <span className="text-slate-400">Total: {demandMw * 24} MWh</span>
          </div>
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
            {activeTechKeys.map((key) => {
              const pct = summary.supplyMixPercentages[key] || 0;
              if (pct < 0.1) return null;
              const conf = TECHNOLOGY_COLORS[key] || { fill: '#64748b' };
              return (
                <div
                  key={key}
                  style={{ width: `${pct}%`, backgroundColor: conf.fill }}
                  title={`${conf.label}: ${pct.toFixed(1)}% (${(summary.supplyMixSummary[key] || 0).toFixed(0)} MWh)`}
                  className="h-full transition-all duration-300 hover:opacity-80"
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px]">
            {activeTechKeys.map((key) => {
              const pct = summary.supplyMixPercentages[key] || 0;
              const mwh = summary.supplyMixSummary[key] || 0;
              const conf = TECHNOLOGY_COLORS[key] || { fill: '#64748b', label: key };
              return (
                <span key={key} className="flex items-center gap-1 text-slate-300">
                  <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: conf.fill }} />
                  {conf.label}: <strong className="text-slate-100 font-mono">{pct.toFixed(1)}%</strong> ({mwh.toFixed(0)} MWh)
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Explanation */}
      <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-100">
              Representative 24-Hour Energy Supply Mix Comparison
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Investigating how different aggregation periods for time-varying grid electricity price and CO2 intensity
              shape the optimized 00:00–23:00 dispatch mix for a {demandMw} MW data center.
            </p>
          </div>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 self-start md:self-auto shrink-0">
          <button
            onClick={() => setActiveProfileTab('all' as any)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeProfileTab === ('all' as any)
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Compare All 4
          </button>
          {profileTypes.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProfileTab(p.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeProfileTab === p.id
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Metric comparison table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-400" />
            Cross-Aggregation Period Summary Matrix
          </span>
          <span className="text-xs text-slate-500 font-mono">Carbon Price: €{carbonPrice}/tCO2</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/60 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-2.5 px-4 font-medium">Aggregation Period</th>
                <th className="py-2.5 px-4 font-medium">Data Description</th>
                <th className="py-2.5 px-4 font-medium text-right">24h Total Cost</th>
                <th className="py-2.5 px-4 font-medium text-right">Avg Cost / MWh</th>
                <th className="py-2.5 px-4 font-medium text-right">24h CO2 Emissions</th>
                <th className="py-2.5 px-4 font-medium text-right">Grid Share</th>
                <th className="py-2.5 px-4 font-medium text-right">Onsite Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {profileTypes.map((pt) => {
                const s = summaries[pt.id];
                const gridPct = s.supplyMixPercentages['Grid'] || 0;
                const onsitePct = 100 - gridPct;
                return (
                  <tr
                    key={pt.id}
                    className={`hover:bg-slate-800/40 transition-colors ${
                      activeProfileTab === pt.id ? 'bg-blue-950/20' : ''
                    }`}
                  >
                    <td className="py-3 px-4 font-sans font-medium text-slate-200 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                      {s.title}
                    </td>
                    <td className="py-3 px-4 font-sans text-slate-400 text-[11px]">{s.description}</td>
                    <td className="py-3 px-4 text-right font-bold text-amber-400">
                      €{s.total24hCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-emerald-400">
                      €{s.avg24hCostPerMwh.toFixed(1)}/MWh
                    </td>
                    <td className="py-3 px-4 text-right text-slate-300">
                      {s.total24hEmissions.toFixed(1)} tCO2
                    </td>
                    <td className="py-3 px-4 text-right text-sky-400">{gridPct.toFixed(1)}%</td>
                    <td className="py-3 px-4 text-right text-emerald-400">{onsitePct.toFixed(1)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grid of charts */}
      {activeProfileTab === 'all' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {profileTypes.map((pt) => renderProfileChart(summaries[pt.id], true))}
        </div>
      ) : (
        <div className="space-y-6">
          {renderProfileChart(summaries[activeProfileTab as ProfileType], false)}

          {/* Detailed Hourly Table for the selected profile */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-5">
            <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              Detailed Hourly Optimal Dispatch Schedule (00:00 – 23:00)
            </h4>
            <div className="overflow-x-auto max-h-80 overflow-y-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-950 text-slate-400 sticky top-0 border-b border-slate-800">
                  <tr>
                    <th className="py-2 px-3">Hour</th>
                    <th className="py-2 px-3 text-right">Grid Price (€/MWh)</th>
                    <th className="py-2 px-3 text-right">Grid CO2 (t/MWh)</th>
                    <th className="py-2 px-3 text-right">Grid Eff. Cost</th>
                    <th className="py-2 px-3 text-right">Wind CF</th>
                    <th className="py-2 px-3 text-right">Wind (MW)</th>
                    <th className="py-2 px-3 text-right">Grid Import (MW)</th>
                    <th className="py-2 px-3 text-right">Gas Turbine (MW)</th>
                    <th className="py-2 px-3 text-right">Biomass (MW)</th>
                    <th className="py-2 px-3 text-right">Hourly Cost (€)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {summaries[activeProfileTab as ProfileType].hourlyResults.map((r: any) => (
                    <tr key={r.hour} className="hover:bg-slate-800/50">
                      <td className="py-2 px-3 font-semibold text-slate-200">{r.label}</td>
                      <td className="py-2 px-3 text-right text-slate-300">€{r.gridPrice.toFixed(2)}</td>
                      <td className="py-2 px-3 text-right text-slate-400">{r.gridCo2Intensity.toFixed(3)}</td>
                      <td className="py-2 px-3 text-right text-sky-400 font-semibold">
                        €{r.gridEffectiveCost.toFixed(2)}
                      </td>
                      <td className="py-2 px-3 text-right text-emerald-300 font-mono">
                        {r.windCapacityFactor !== undefined ? `${(r.windCapacityFactor * 100).toFixed(1)}%` : '—'}
                      </td>
                      <td className="py-2 px-3 text-right text-emerald-400 font-bold">
                        {(r.generation['Wind'] || 0).toFixed(1)}
                      </td>
                      <td className="py-2 px-3 text-right text-sky-300 font-bold">{r.gridImport.toFixed(1)}</td>
                      <td className="py-2 px-3 text-right text-amber-400">
                        {(r.generation['Gas turebine'] || 0).toFixed(1)}
                      </td>
                      <td className="py-2 px-3 text-right text-lime-400">
                        {(r.generation['Biomass'] || 0).toFixed(1)}
                      </td>
                      <td className="py-2 px-3 text-right font-bold text-amber-300">
                        €{r.totalCost.toLocaleString(undefined, { maximumFractionDigits: 1 })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
