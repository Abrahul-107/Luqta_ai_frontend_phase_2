import type { Segment } from "../../../types";
import SegmentCard from "./SegementCard";

interface SegmentsGridProps {
  segments: Segment[];
  loading?: boolean;
}

const SegmentsGrid: React.FC<SegmentsGridProps> = ({ segments, loading }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
    {segments.map((segment, idx) => (
      <SegmentCard key={idx} {...segment} loading={loading} />
    ))}
  </div>
);

export default SegmentsGrid;
