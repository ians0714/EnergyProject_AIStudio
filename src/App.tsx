import React, { useState } from 'react';
import { INITIAL_TECHNOLOGIES, INITIAL_GRIDS, DEFAULT_CARBON_PRICE, DEFAULT_DATACENTER_DEMAND_MW } from './data/energyDataset';
import { TechnologyParam, GridParam } from './types';
import { RepresentativeMixView } from './components/RepresentativeMixView';
import { AnnualCostHeatmap } from './components/AnnualCostHeatmap';
import { ModelParametersView } from './components/ModelParametersView';
import { DataExplorerView } from './components/DataExplorerView';
import {
  Zap,
  Activity,
  Grid,
  Sliders,
  Database,
  Layers,
  Flame,
  DollarSign,
  Server,
  HelpCircle,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'mix' | 'heatmap' | 'params' | 'data'>('mix');
  const [demandMw, setDemandMw] = useState<number>(DEFAULT_DATACENTER_DEMAND_MW);
  const [carbonPrice, setCarbonPrice] = useState<number>(DEFAULT_CARBON_PRICE);
  const [technologies, setTechnologies] = useState<TechnologyParam[]>(INITIAL_TECHNOLOGIES);
  const [grids] = useState<GridParam[]>(INITIAL_GRIDS);

  const handleResetDefaults = () => {
    setDemandMw(DEFAULT_DATACENTER_DEMAND_MW);
    setCarbonPrice(DEFAULT_CARBON_PRICE);
    setTechnologies(INITIAL_TECHNOLOGIES);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-500 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-3">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/20 text-white shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  Data Center Electricity Supply Optimization
                </h1>
                <p className="text-xs text-slate-400">
                  Simplified Linear Cost-Optimization & Temporal Aggregation Model (8,760h)
                </p>
              </div>
            </div>

            {/* Quick Status Badges */}
            <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono">
              <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <span className="text-slate-400">Demand:</span>
                <strong className="text-amber-400">{demandMw} MW</strong>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <span className="text-slate-400">CO2 Price:</span>
                <strong className="text-emerald-400">€{carbonPrice}/t</strong>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 border-t border-slate-800/80 pt-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('mix')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'mix'
                  ? 'border-blue-500 text-blue-400 bg-slate-800/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <Layers className="w-4 h-4" />
              Hourly Supply Mix (Day / Month / Season / Year)
            </button>

            <button
              onClick={() => setActiveTab('heatmap')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'heatmap'
                  ? 'border-blue-500 text-blue-400 bg-slate-800/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <Activity className="w-4 h-4" />
              Annual Cost Heatmap (365×24)
            </button>

            <button
              onClick={() => setActiveTab('params')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'params'
                  ? 'border-blue-500 text-blue-400 bg-slate-800/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <Sliders className="w-4 h-4" />
              Model Parameters & Merit Order
            </button>

            <button
              onClick={() => setActiveTab('data')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'data'
                  ? 'border-blue-500 text-blue-400 bg-slate-800/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <Database className="w-4 h-4" />
              8,760h Data Explorer
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'mix' && (
          <RepresentativeMixView
            demandMw={demandMw}
            carbonPrice={carbonPrice}
            technologies={technologies}
            grids={grids}
          />
        )}

        {activeTab === 'heatmap' && (
          <AnnualCostHeatmap
            demandMw={demandMw}
            carbonPrice={carbonPrice}
            technologies={technologies}
            grids={grids}
          />
        )}

        {activeTab === 'params' && (
          <ModelParametersView
            demandMw={demandMw}
            setDemandMw={setDemandMw}
            carbonPrice={carbonPrice}
            setCarbonPrice={setCarbonPrice}
            technologies={technologies}
            setTechnologies={setTechnologies}
            grids={grids}
            onResetDefaults={handleResetDefaults}
          />
        )}

        {activeTab === 'data' && (
          <DataExplorerView
            demandMw={demandMw}
            carbonPrice={carbonPrice}
            technologies={technologies}
            grids={grids}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Data Center Electricity Supply Mix Cost Optimization • Grounded in <code className="text-slate-400">data/input_data.xlsx</code> & <code className="text-slate-400">germany-seasonal-co2-v2</code>
          </div>
          <div className="flex items-center gap-4">
            <span>Hourly Linear Optimization</span>
            <span>Zero Synthetic Assumptions</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
