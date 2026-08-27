import React from 'react';
import { TechnologyParam, GridParam } from '../types';
import { TECHNOLOGY_COLORS } from '../utils/optimization';
import { Settings, ShieldCheck, Database, Zap, Cpu, BarChart3, RotateCcw, Flame, Factory, Wind, Lock, CheckCircle2 } from 'lucide-react';

interface Props {
  demandMw: number;
  setDemandMw: (v: number) => void;
  carbonPrice: number;
  setCarbonPrice: (v: number) => void;
  technologies: TechnologyParam[];
  setTechnologies: React.Dispatch<React.SetStateAction<TechnologyParam[]>>;
  grids: GridParam[];
  onResetDefaults: () => void;
}

export const ModelParametersView: React.FC<Props> = ({
  demandMw,
  carbonPrice,
  setCarbonPrice,
  technologies,
  setTechnologies,
  onResetDefaults,
}) => {
  // Technology indices for direct sensitivity shortcuts
  const windIndex = technologies.findIndex((t) => t.technology.toLowerCase().includes('wind'));
  const gasIndex = technologies.findIndex((t) => t.technology.toLowerCase().includes('gas turebine') || t.technology.toLowerCase().includes('gas turbine'));
  const coalIndex = technologies.findIndex((t) => t.technology.toLowerCase().includes('coal'));

  const handleTechChange = (index: number, field: keyof TechnologyParam, val: number) => {
    setTechnologies((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: val };
      return next;
    });
  };

  // Compute effective costs and merit order
  const meritOrder = technologies
    .map((t) => {
      const isWind = t.technology.toLowerCase().includes('wind');
      const carbonCost = t.emission_factor_tco2_mwh * carbonPrice;
      const effectiveCost = t.LCOE_eur_mwh + t.additional_cost_eur_mwh + carbonCost;
      const maxCap = isWind ? t.capacity_mw : t.capacity_mw * t.capacity_factor;
      return {
        ...t,
        carbonCost,
        effectiveCost,
        maxCap,
        isGrid: false,
        isWind,
      };
    })
    .concat([
      {
        technology: 'Grid (Representative Avg)',
        capacity_mw: Infinity,
        capacity_factor: 1.0,
        LCOE_eur_mwh: 89.0,
        additional_cost_eur_mwh: 0.0,
        emission_factor_tco2_mwh: 0.39,
        carbonCost: 0.39 * carbonPrice,
        effectiveCost: 89.0 + 0.39 * carbonPrice,
        maxCap: Infinity,
        isGrid: true,
        isWind: false,
      },
    ])
    .sort((a, b) => a.effectiveCost - b.effectiveCost);

  return (
    <div className="space-y-6">
      {/* Top Controls Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-100">Core Optimization Scenario Parameters</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Installed capacities and technology capacity factors are scenario variables. Wind CF is automatically time-varying from dataset.
              </p>
            </div>
          </div>
          <button
            onClick={onResetDefaults}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Excel Defaults
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Data Center Demand - Fixed at 100 MW */}
          <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-xl space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-400" />
                Data Center Electricity Demand:
              </label>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-md">
                <Lock className="w-3 h-3 text-amber-400" />
                <span className="font-mono font-bold text-amber-400 text-sm">{demandMw} MW</span>
              </div>
            </div>
            <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Strict 100 MW Fixed Hourly Demand Rule</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Demand is non-adjustable across all 8,760 hours of the year. The supply balance requires:
                <br />
                <code className="text-amber-300 font-mono text-[11px]">∑ Onsite Generation + Grid Import = 100 MW</code>
              </p>
            </div>
          </div>

          {/* Carbon Price Slider */}
          <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-xl space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-400" />
                Carbon Price:
              </label>
              <span className="font-mono font-bold text-emerald-400 text-sm">€{carbonPrice} / tCO2</span>
            </div>
            <input
              type="range"
              min="0"
              max="500"
              step="10"
              value={carbonPrice}
              onChange={(e) => setCarbonPrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <p className="text-[11px] text-slate-500">
              Default baseline: 200 €/tCO2. Directly penalizes emissions from Coal, Gas turbine, and Grid import.
            </p>
          </div>
        </div>

        {/* Dedicated Scenario Sliders for Wind, Gas Turbine & Coal */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Wind Scenario Sensitivity */}
          {windIndex !== -1 && (
            <div className="bg-slate-950/80 border border-emerald-500/20 p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                  <Wind className="w-4 h-4 text-emerald-400" />
                  Wind Scenario Controls
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 font-sans">
                  Dynamic CF(t)
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Installed Capacity:</span>
                    <span className="font-mono text-emerald-300 font-bold">{technologies[windIndex].capacity_mw} MW</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    step="5"
                    value={technologies[windIndex].capacity_mw}
                    onChange={(e) => handleTechChange(windIndex, 'capacity_mw', Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                </div>
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Capacity Factor:</span>
                  <span className="font-mono text-emerald-400 flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Time-Varying Dataset
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                Available Wind(t) = {technologies[windIndex].capacity_mw} MW × Wind CF(t). Automatically assigned for each hour from 2023 dataset.
              </p>
            </div>
          )}

          {/* Gas Turbine Scenario Sensitivity */}
          {gasIndex !== -1 && (
            <div className="bg-slate-950/80 border border-amber-500/20 p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Gas Turbine Scenario Controls
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Max: <strong className="text-amber-400 font-bold">{(technologies[gasIndex].capacity_mw * technologies[gasIndex].capacity_factor).toFixed(1)} MW</strong>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Installed:</span>
                    <span className="font-mono text-amber-300">{technologies[gasIndex].capacity_mw} MW</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    step="5"
                    value={technologies[gasIndex].capacity_mw}
                    onChange={(e) => handleTechChange(gasIndex, 'capacity_mw', Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Cap. Factor:</span>
                    <span className="font-mono text-amber-300">{technologies[gasIndex].capacity_factor.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={technologies[gasIndex].capacity_factor}
                    onChange={(e) => handleTechChange(gasIndex, 'capacity_factor', Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                Gas Available = {technologies[gasIndex].capacity_mw} MW × {technologies[gasIndex].capacity_factor} = {(technologies[gasIndex].capacity_mw * technologies[gasIndex].capacity_factor).toFixed(1)} MW max. Continuous partial-load allowed.
              </p>
            </div>
          )}

          {/* Coal Scenario Sensitivity */}
          {coalIndex !== -1 && (
            <div className="bg-slate-950/80 border border-stone-500/20 p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Factory className="w-4 h-4 text-stone-400" />
                  Coal Scenario Controls
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Max: <strong className="text-stone-300 font-bold">{(technologies[coalIndex].capacity_mw * technologies[coalIndex].capacity_factor).toFixed(1)} MW</strong>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Installed:</span>
                    <span className="font-mono text-stone-300">{technologies[coalIndex].capacity_mw} MW</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    step="5"
                    value={technologies[coalIndex].capacity_mw}
                    onChange={(e) => handleTechChange(coalIndex, 'capacity_mw', Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-stone-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Cap. Factor:</span>
                    <span className="font-mono text-stone-300">{technologies[coalIndex].capacity_factor.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={technologies[coalIndex].capacity_factor}
                    onChange={(e) => handleTechChange(coalIndex, 'capacity_factor', Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-stone-500"
                  />
                </div>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                Coal Available = {technologies[coalIndex].capacity_mw} MW × {technologies[coalIndex].capacity_factor} = {(technologies[coalIndex].capacity_mw * technologies[coalIndex].capacity_factor).toFixed(1)} MW max. Continuous partial-load allowed.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Merit Order Ladder */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
        <h4 className="text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-blue-400" />
          Dynamic Merit Order Dispatch Ladder
        </h4>
        <p className="text-xs text-slate-400 mb-4">
          Technologies are dispatched in ascending order of effective unit cost (LCOE + Additional Cost + Emission Factor × Carbon Price).
        </p>

        <div className="space-y-2">
          {meritOrder.map((m, idx) => {
            const conf = TECHNOLOGY_COLORS[m.technology] || { fill: '#64748b', label: m.technology };
            return (
              <div
                key={m.technology}
                className="flex items-center gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs"
              >
                <div className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-mono font-bold shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm inline-block shrink-0" style={{ backgroundColor: conf.fill }} />
                    <span className="font-semibold text-slate-200">{conf.label}</span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {m.isGrid
                        ? '(Unlimited import capacity)'
                        : m.isWind
                        ? `(Cap: ${m.capacity_mw} MW × CF(t))`
                        : `(Cap: ${m.maxCap.toFixed(1)} MW)`}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] font-mono">
                    <span className="text-slate-400">
                      LCOE: €{m.LCOE_eur_mwh.toFixed(0)} + Carbon: €{m.carbonCost.toFixed(0)}
                    </span>
                    <span className="font-bold text-amber-400 text-sm">
                      = €{m.effectiveCost.toFixed(1)} / MWh
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Onsite Technologies Editable Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
            <Database className="w-4 h-4 text-blue-400" />
            Onsite Power Technologies Data (from data/input_data.xlsx)
          </h4>
          <span className="text-xs text-slate-500">Scenario adjustable parameters</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-medium">
              <tr>
                <th className="py-2.5 px-4">Technology</th>
                <th className="py-2.5 px-4 text-right">Installed Capacity (MW)</th>
                <th className="py-2.5 px-4 text-right">Capacity Factor</th>
                <th className="py-2.5 px-4 text-right">Max Available (MW)</th>
                <th className="py-2.5 px-4 text-right">LCOE (€/MWh)</th>
                <th className="py-2.5 px-4 text-right">Emission Factor (tCO2/MWh)</th>
                <th className="py-2.5 px-4 text-right">Carbon Cost (€/MWh)</th>
                <th className="py-2.5 px-4 text-right font-bold text-slate-200">Effective Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {technologies.map((t, idx) => {
                const isWind = t.technology.toLowerCase().includes('wind');
                const carbonCost = t.emission_factor_tco2_mwh * carbonPrice;
                const effectiveCost = t.LCOE_eur_mwh + t.additional_cost_eur_mwh + carbonCost;
                const maxCap = t.capacity_mw * t.capacity_factor;
                const conf = TECHNOLOGY_COLORS[t.technology] || { fill: '#64748b', label: t.technology };

                return (
                  <tr key={t.technology} className="hover:bg-slate-800/40">
                    <td className="py-2.5 px-4 font-sans font-medium text-slate-200 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ backgroundColor: conf.fill }} />
                      {conf.label}
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <input
                        type="number"
                        min="0"
                        max="200"
                        step="5"
                        value={t.capacity_mw}
                        onChange={(e) => handleTechChange(idx, 'capacity_mw', Number(e.target.value))}
                        className="w-16 px-1.5 py-0.5 bg-slate-950 border border-slate-700 rounded text-right text-slate-200 focus:outline-none focus:border-blue-500"
                      />
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      {isWind ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 font-sans text-[11px] font-medium">
                          <Lock className="w-3 h-3 text-emerald-400" />
                          Dynamic (Dataset)
                        </span>
                      ) : (
                        <input
                          type="number"
                          min="0"
                          max="1"
                          step="0.05"
                          value={t.capacity_factor}
                          onChange={(e) => handleTechChange(idx, 'capacity_factor', Number(e.target.value))}
                          className="w-16 px-1.5 py-0.5 bg-slate-950 border border-slate-700 rounded text-right text-slate-200 focus:outline-none focus:border-blue-500"
                        />
                      )}
                    </td>
                    <td className="py-2.5 px-4 text-right text-slate-300 font-bold">
                      {isWind ? (
                        <span className="text-emerald-400 font-mono text-xs">{t.capacity_mw} MW × CF(t)</span>
                      ) : (
                        `${maxCap.toFixed(1)} MW`
                      )}
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <input
                        type="number"
                        min="0"
                        max="500"
                        step="10"
                        value={t.LCOE_eur_mwh}
                        onChange={(e) => handleTechChange(idx, 'LCOE_eur_mwh', Number(e.target.value))}
                        className="w-16 px-1.5 py-0.5 bg-slate-950 border border-slate-700 rounded text-right text-slate-200 focus:outline-none focus:border-blue-500"
                      />
                    </td>
                    <td className="py-2.5 px-4 text-right text-slate-400">
                      {t.emission_factor_tco2_mwh.toFixed(2)}
                    </td>
                    <td className="py-2.5 px-4 text-right text-rose-400 font-semibold">
                      €{carbonCost.toFixed(1)}
                    </td>
                    <td className="py-2.5 px-4 text-right text-amber-400 font-bold text-sm">
                      €{effectiveCost.toFixed(1)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Model Formulation Equations Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg text-xs space-y-3">
        <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Optimization Model Formulation (PuLP / Linear Dispatch)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 font-mono">
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1">
            <div className="text-slate-400 font-sans font-semibold">1. Objective Function:</div>
            <div className="text-amber-300">
              Minimize Z = ∑ [ Gen(i, t) × EffectiveCost(i) ] + Grid(t) × EffectiveGridCost(t)
            </div>
            <div className="text-[11px] text-slate-500">
              Where EffectiveCost(i) = LCOE(i) + AddCost(i) + EmissionFactor(i) × CarbonPrice
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1">
            <div className="text-slate-400 font-sans font-semibold">2. Constraints:</div>
            <div className="text-emerald-300">
              • Supply = Demand: ∑ Gen(i, t) + Grid(t) == 100 MW (Strict)
            </div>
            <div className="text-sky-300">
              • Wind Capacity: 0 ≤ Wind(t) ≤ Wind Installed × Wind CF(t) (Dataset)
            </div>
            <div className="text-amber-400">
              • Thermal Onsite: 0 ≤ Gen(i, t) ≤ Capacity(i) × CapacityFactor(i)
            </div>
            <div className="text-slate-400">
              • Unbounded Grid Import: 0 ≤ Grid(t) &lt; ∞ (Balancing source)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

