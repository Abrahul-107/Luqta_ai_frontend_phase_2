import { useEffect } from "react";
import { segments } from "../../data/segmentsData";
import { stats } from "../../data/statsData";
import SectionHeader from "../common/SectionHeader";
import SegmentsGrid from "./SegementsGrid";
import StatsGrid from "./StartGrid";
import { useClientSegments } from "../../hooks/useClientSegments";
import useClientSegmentFormatter from "../../hooks/useClientSegmentFormatter";
import { useQueryClient } from "../../hooks/useQueryClient";

const UserSegmentsTab: React.FC = () => {
  const { data, loading, error, fetchSegments } = useClientSegments();
  const { getStats, getSegmentDetails } = useClientSegmentFormatter();
  const { clientName } = useQueryClient({ client_name: "Luqta Admin" });

  useEffect(() => {
    const loadSegments = async () => {
      await fetchSegments(clientName);
    };
    loadSegments();
  }, [, clientName]);
  return (
    <div>
      <div className="bg-white rounded-2xl p-5 mb-5">
        <SectionHeader
          title="User Segments"
          subtitle="User Insights & Predictions"
        />
        <StatsGrid
          stats={loading || error ? stats : getStats(data)}
          loading={loading}
        />
      </div>
      <SegmentsGrid
        segments={loading || error ? segments : getSegmentDetails(data)}
        loading={loading}
      />
    </div>
  );
};
export default UserSegmentsTab;
