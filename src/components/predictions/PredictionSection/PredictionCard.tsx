import MiniChart from "./MiniChart";

interface PredictionCardProps {
  label: string;
  volatility: "high" | "low";
  heights: string[];
  description: string;
}

const PredictionCard: React.FC<PredictionCardProps> = ({
  label,
  volatility,
  heights,
  description,
}) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4">
    <div className="flex justify-between items-center mb-3">
      <span className="text-sm font-medium">{label}</span>
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          volatility === "high"
            ? "bg-red-100 text-red-800"
            : "bg-green-100 text-green-800"
        }`}
      >
        {volatility === "high" ? "High" : "Low"} volatility
      </span>
    </div>
    <MiniChart heights={heights} />
    <div className="text-xs text-gray-600">{description}</div>
  </div>
);

export default PredictionCard;
