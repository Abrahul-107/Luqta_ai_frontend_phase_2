import type { StatData } from "../../../types";
import MetricCard from "./MetricCard";

interface MetricCardsGridProps {
  metrics: StatData[];
  loading?: boolean;
}

const MetricCardsGrid: React.FC<MetricCardsGridProps> = ({
  metrics,
  loading,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
    {metrics.map((metric, idx) => (
      <MetricCard key={idx} {...metric} loading={loading} />
    ))}
  </div>
);

export default MetricCardsGrid;
