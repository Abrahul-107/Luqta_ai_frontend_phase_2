interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative";
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeType,
}) => (
  <div className="bg-gray-50 p-5 rounded-xl">
    <h4 className="text-sm text-gray-600 mb-2">{title}</h4>
    <div className="text-3xl font-bold text-gray-900">{value}</div>
    {change && (
      <div
        className={`text-xs mt-1 ${
          changeType === "positive" ? "text-green-600" : "text-red-600"
        }`}
      >
        {change}
      </div>
    )}
  </div>
);

export default MetricCard;
