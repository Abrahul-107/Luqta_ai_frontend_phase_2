import { Loader } from "lucide-react";
import Card from "../../shared/Card";

interface StatCardProps {
  icon: string;
  label: string;
  value: number | string;
  loading?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, loading }) => (
  <Card>
    <div className="h-50 flex flex-col justify-between">
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

export default StatCard;
