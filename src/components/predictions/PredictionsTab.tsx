import { useEffect } from "react";
import { predictions } from "../../data/predictionsData";
import { usePredictiveEngagement } from "../../hooks/usePredictiveEngagement";
import usePredictiveEngagementFormatter from "../../hooks/usePredictiveEngagementFormatter";
import SectionHeader from "../common/SectionHeader";
import MetricCardsGrid from "./MetricCardsGrid";
import PredictionSection from "./PredictionSection";
import { useQueryClient } from "../../hooks/useQueryClient";

const PredictionsTab: React.FC = () => {
  const { data, loading, error, fetchPrediction } = usePredictiveEngagement();
  const { getPredictions } = usePredictiveEngagementFormatter();
  const { clientName, clientId } = useQueryClient({
    client_name: "Hind Yassin",
  });

  useEffect(() => {
    const loadPrediction = async () => {
      await fetchPrediction({ client_name: clientName, client_id: clientId });
    };
    loadPrediction();
  }, [fetchPrediction, clientName, clientId]);
  return (
    <div>
      <div className="bg-white rounded-2xl p-5 mb-5">
        <SectionHeader
          title="User Segments"
          subtitle="User Insights & Predictions"
        />
        <MetricCardsGrid
          metrics={loading || error ? predictions : getPredictions(data)}
          loading={loading}
        />
      </div>
      <PredictionSection data={data} loading={loading} />
    </div>
  );
};
export default PredictionsTab;
