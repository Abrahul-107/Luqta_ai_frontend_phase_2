import { Loader } from "lucide-react";

interface StatCardProps {
  icon: string;
  label: string;
  value: number | string;
  loading?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, loading }) => (
  <div className="bg-gray-50 h-50 border border-gray-200 p-5 rounded-xl flex flex-col justify-between">
    <div className="text-sm text-gray-600 mb-2 relative flex items-between 6justify-start gap-1">
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
);

export default StatCard;
