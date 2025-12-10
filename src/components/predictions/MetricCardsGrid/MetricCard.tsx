import { Loader } from "lucide-react";
import Card from "../../shared/Card";

interface MetricCardProps {
  icon: string;
  label: string;
  value: number | string;
  loading?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  label,
  value,
  loading,
}) => (
  <Card>
    <div className="h-30 flex flex-col justify-between">
      <div className="text-sm text-gray-600 mb-2 relative flex items-between justify-start gap-1">
        {label}
        <span className="absolute top-0 right-0">{icon}</span>
      </div>
      <div className="text-4xl font-bold text-gray-900">
        {loading ? (
          <Loader className="animate-spin" />
        ) : (
          (+value).toLocaleString()
        )}
      </div>
    </div>
  </Card>
);

export default MetricCard;
