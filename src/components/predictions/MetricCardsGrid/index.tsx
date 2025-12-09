import type { MetricCardData } from "../../../types";
import MetricCard from "./MetricCard";

interface MetricCardsGridProps {
  metrics: MetricCardData[];
}

const MetricCardsGrid: React.FC<MetricCardsGridProps> = ({ metrics }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    {metrics.map((metric, idx) => (
      <MetricCard key={idx} {...metric} />
    ))}
  </div>
);

export default MetricCardsGrid;
