import type { KeyMetrics, WhatIfSimulation } from "../../../types";
import AreaChartCard from "./AreaChartCard";

interface PredictionChartsGridProps {
  currentData: any[];
  predictedData: any[];
  currentMetrics: KeyMetrics | undefined;
  bestScenario: WhatIfSimulation | undefined;
  loading?: boolean;
}

const PredictionChartsGrid: React.FC<PredictionChartsGridProps> = ({
  currentData,
  predictedData,
  currentMetrics,
  bestScenario,
  loading,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {loading ? (
        [1, 2].map(() => (
          <div
            className="space-y-4 flex gap-4 justify-between"
            key={Math.random()}
          >
            <div className="h-130 w-210 bg-gray-200 rounded-xl"></div>
          </div>
        ))
      ) : (
        <>
          <AreaChartCard
            title="Now"
            subtitle="Current Scenario"
            data={currentData}
            color="#ef4444"
            accentColor="#dc2626"
            metrics={currentMetrics}
            prizeRate="20%"
            isRecommended={false}
          />

          <AreaChartCard
            title="In the next 10 Days!"
            subtitle="Recommended Best Scenario"
            data={predictedData}
            color="#10b981"
            accentColor="#059669"
            metrics={bestScenario?.predicted_metrics}
            prizeRate="24%"
            isRecommended={true}
          />
        </>
      )}
    </div>
  );
};
export default PredictionChartsGrid;
