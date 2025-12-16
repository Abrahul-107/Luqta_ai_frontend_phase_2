import type { StatData } from "../../../types";
import MetricCard from "./MetricCard";

interface MetricCardsGridProps {
  metrics: StatData[];
  loading?: boolean;
}

const MetricCardsGrid: React.FC<MetricCardsGridProps> = ({
  metrics,
  loading,
}) => {
  const gridColClass = `lg:grid-cols-${metrics.length}`;
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${gridColClass} gap-4 mb-8`}
    >
      {metrics.map((metric, idx) => (
        <MetricCard key={idx} {...metric} loading={loading} />
      ))}
    </div>
  );
};

export default MetricCardsGrid;
