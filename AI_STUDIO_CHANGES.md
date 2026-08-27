# AI Studio Changes Log

## 1. 2023 German Onshore Hourly Wind Capacity Factor Integration

### What was changed
1. **Dynamic Hourly Wind Availability**: Replaced the static wind capacity factor with 8,760 hourly capacity factors from the `ninja-wind-country-DE-current_onshore-merra2 - 2023` dataset. For each hour, available wind generation is computed as:
   $$\text{Wind Available Generation (MW)} = \text{Installed Wind Capacity} \times \text{Hourly Wind Capacity Factor}$$
2. **Temporal Aggregation Profiles**:
   - **Annual Average**: Wind capacity factor averaged across all 365 observations for each hour of the day (00:00–23:00).
   - **Summer Average (June, July, August)**: Wind capacity factor averaged across summer observations for each hour of the day.
   - **August Average**: Wind capacity factor averaged across all August observations for each hour of the day.
   - **August 27**: Uses actual 24-hour hourly capacity factor observations directly.
   - **Annual Heatmap**: Dispatches and visualizes all 8,760 individual hours with their respective wind capacity factors.
3. **Dispatch & Heatmap Optimization Engine**: Updated `solveHourDispatch`, `computeProfileSummary`, and `computeAnnualHeatmapData` to pass and apply dynamic wind capacity factors.
4. **Interactive UI & Visualizations**: Updated the energy-mix charts, tooltips, detailed dispatch tables, and added a Wind CF heatmap mode layer with color scales.

### Files modified
- `/src/types.ts`
- `/src/data/energyDataset.ts`
- `/src/utils/optimization.ts`
- `/src/components/RepresentativeMixView.tsx`
- `/src/components/AnnualCostHeatmap.tsx`
- `/AI_STUDIO_CHANGES.md`

### Why the change was needed
- To model realistic, weather-driven renewable generation variability using empirical 2023 German onshore wind capacity factor data instead of a static assumption, while keeping installed capacities, cost parameters, and optimization constraints intact.

---

## 2. Gas Turbine Fill Color Visualization Fix

### What was changed
1. **SVG Gradient ID Sanitization**: Sanitized gradient IDs in `RepresentativeMixView.tsx` by replacing whitespace and special characters with alphanumeric underscores (e.g., `grad-${profileType}-${safeKey}`) for both `<linearGradient id=...>` definitions and `<Area fill="url(#...)" />` references.
2. **Color Mapping Aliases**: Added key aliases to `TECHNOLOGY_COLORS` in `src/utils/optimization.ts` (`Gas Turbine`, `Gas turbine`, `Gas turebine`, `Bio-CH4 Gas Turbine`, etc.) to ensure complete consistency across chart areas, legend items, tooltip indicators, and metric breakdowns.

### Files modified
- `/src/components/RepresentativeMixView.tsx`
- `/src/utils/optimization.ts`

### Why the change was needed
- SVG `url(#...)` gradient references containing spaces (such as `#grad-annual-Gas turebine`) failed to resolve in the SVG renderer, resulting in transparent area fills for Gas Turbine in the stacked energy-mix chart even though numerical dispatch values appeared in the hover tooltip.
