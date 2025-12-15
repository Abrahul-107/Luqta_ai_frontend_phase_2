import { Info } from "lucide-react";
import type { WhatIfSimulation } from "../../../types";
import ScenarioCard from "./ScenarioCard";

interface DetailedScenarioAnalysisProps {
  what_if_simulations: WhatIfSimulation[];
  loading?: boolean;
}

const DetailedScenarioAnalysis: React.FC<DetailedScenarioAnalysisProps> = ({
  what_if_simulations,
  loading,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-white text-xl font-semibold text-gray-900">
          Detailed Scenario Analysis
        </h2>
        <Info className="w-5 h-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? [1, 2, 3, 4, 5].map(() => (
              <div
                className="animate-pulse space-y-4 flex gap-4 justify-between"
                key={Math.random()}
              >
                <div className="h-60 w-100 bg-gray-200 rounded-xl"></div>
              </div>
            ))
          : what_if_simulations.map((simulation, idx) => {
              const {
                views,
                joins,
                expected_revenue,
                dropoff_rate,
                engagement_score,
                confidence,
              } = simulation?.predicted_metrics;
              return (
                <ScenarioCard
                  key={idx}
                  scenario={simulation.scenario}
                  metrics={{
                    views,
                    joins,
                    revenue: expected_revenue, // Scale for visual
                    dropoff: dropoff_rate,
                  }}
                  engagementScore={engagement_score}
                  notes={simulation.notes}
                  confidence={confidence}
                />
              );
            })}
      </div>
    </div>
  );
};

export default DetailedScenarioAnalysis;
