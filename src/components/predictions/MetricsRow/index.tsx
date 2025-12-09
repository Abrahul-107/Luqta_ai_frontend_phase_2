import MetricFilter from "./MetricFilter";

interface MetricsRowProps {
  metrics: string[];
}

const MetricsRow: React.FC<MetricsRowProps> = ({ metrics }) => (
  <div className="flex flex-wrap gap-3 mb-6">
    {metrics.map((metric, idx) => (
      <MetricFilter key={idx} label={metric} />
    ))}
  </div>
);

export default MetricsRow;
