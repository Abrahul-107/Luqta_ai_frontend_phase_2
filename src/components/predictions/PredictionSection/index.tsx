import React from "react";
import type { EngagementPredictionResponse } from "../../../types";
import PotentialRisks from "./PotentialRisks";
import AIRecommendations from "./AIRecommendations";
import DetailedScenarioAnalysis from "./DetailedScenarioAnalysis";
import PredictionChartsGrid from "./PredictionChartsGrid";

// Generate chart data
const generateCurrentData = () => {
  const data = [];
  for (let i = 0; i <= 30; i++) {
    data.push({
      date: `${9}/${25 + i}`,
      "Joins-70": Math.floor(Math.random() * 20) + 30,
      "Joins-15000": Math.floor(Math.random() * 30) + 10,
    });
  }
  return data;
};

const generateFutureData = () => {
  const data = [];
  for (let i = 0; i <= 30; i++) {
    data.push({
      date: `${9}/${25 + i}`,
      "Joins-70": Math.floor(Math.random() * 40) + 70,
      "Joins-15000": Math.floor(Math.random() * 50) + 100,
    });
  }
  return data;
};

interface PredictionsDashboardProps {
  data: EngagementPredictionResponse | null;
  loading?: boolean;
}
const PredictionsDashboard: React.FC<PredictionsDashboardProps> = ({
  data,
  loading,
}) => {
  const currentChartData = generateCurrentData();
  const futureChartData = generateFutureData();
  const maxSimulation =
    data?.engagement_prediction.predictive_engagement.what_if_simulations.reduce(
      (prev, curr) => {
        return curr.predicted_metrics.expected_revenue >
          prev.predicted_metrics.expected_revenue
          ? curr
          : prev;
      }
    );
  return (
    // <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-7xl mx-auto space-y-8 z-[50]">
      {/* Charts Grid */}
      <PredictionChartsGrid
        currentData={currentChartData}
        predictedData={futureChartData}
        simulation={maxSimulation || ({} as any)}
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
