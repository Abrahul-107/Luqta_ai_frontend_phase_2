import type { User } from "../../../types";
import ProgressBar from "./ProgressBar";
import UserList from "./UserList";

interface SegmentCardProps {
  icon: string;
  title: string;
  description: string;
  percentage: number;
  gradient: string;
  users: User[];
  loading?: boolean;
}

const SegmentCard: React.FC<SegmentCardProps> = ({
  icon,
  title,
  description,
  percentage,
  gradient,
  users,
  loading,
}) => (
  <div className="border border-gray-200 rounded-xl p-5 bg-white">
    <div className="flex items-center gap-4 mb-4">
      <div className="text-5xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
    <ProgressBar
      percentage={percentage}
      gradient={gradient}
      loading={loading}
    />
    <UserList users={users} loading={loading} />
  </div>
);

export default SegmentCard;
