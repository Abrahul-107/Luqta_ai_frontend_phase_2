import React from "react";
import type { EngagementPredictionResponse } from "../../../types";
import PotentialRisks from "./PotentialRisks";
import AIRecommendations from "./AIRecommendations";
import DetailedScenarioAnalysis from "./DetailedScenarioAnalysis";
import PredictionChartsGrid from "./PredictionChartsGrid";
import usePredictiveEngagementFormatter from "../../../hooks/usePredictiveEngagementFormatter";

interface PredictionsDashboardProps {
  data: EngagementPredictionResponse | null;
  loading?: boolean;
}
const PredictionsDashboard: React.FC<PredictionsDashboardProps> = ({
  data,
  loading,
}) => {
  // Extract data
  const currentMetrics =
    data?.engagement_prediction.predictive_engagement.summary.key_metrics;
  const simulations =
    data?.engagement_prediction.predictive_engagement.what_if_simulations || [];

  const bestScenario = simulations.reduce(
    (best, current) =>
      current.predicted_metrics.expected_revenue >
      best.predicted_metrics.expected_revenue
        ? current
        : best,
    simulations[0]
  );

  const { generateTimeSeriesData } = usePredictiveEngagementFormatter();
  const currentData = generateTimeSeriesData(
    currentMetrics?.joins,
    10,
    "normal"
  );
  const predictedData = generateTimeSeriesData(
    bestScenario?.predicted_metrics.joins,
    10,
    "optimized"
  );

  return (
    // <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-7xl mx-auto space-y-8 z-[50]">
      {/* Charts Grid */}
      <PredictionChartsGrid
        currentData={currentData}
        predictedData={predictedData}
        currentMetrics={currentMetrics}
        bestScenario={bestScenario}
        loading={loading}
      />
      {/* Detailed Scenario Analysis */}
      <DetailedScenarioAnalysis
        what_if_simulations={
          data?.engagement_prediction.predictive_engagement
            .what_if_simulations || []
        }
        loading={loading}
      />
      {/* Potential Risks */}
      <PotentialRisks
        risks={
          data?.engagement_prediction.predictive_engagement.summary.risks || []
        }
        loading={loading}
      />
      {/* AI Recommendations */}
      <AIRecommendations
        recommendations={
          data?.engagement_prediction.predictive_engagement.summary
            .recommendations || []
        }
        loading={loading}
      />
    </div>
    // </div>
  );
};

export default PredictionsDashboard;
