import type { User } from "../../../types";
import ProgressBar from "./ProgressBar";
import UserList from "./UserList";

interface SegmentCardProps {
  icon: string;
  icon_url?: string;
  title: string;
  description: string;
  percentage: number;
  gradient: string;
  users: User[];
  loading?: boolean;
}

const SegmentCard: React.FC<SegmentCardProps> = ({
  icon,
  icon_url,
  title,
  description,
  percentage,
  gradient,
  users,
  loading,
}) => (
  <div className="border border-gray-200 rounded-xl p-5 bg-white">
    <div className="flex items-center justify-between gap-4 mb-4">
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      {icon_url ? (
        <div className="w-25 h-25 rounded-full overflow-hidden">
          <img
            src={icon_url}
            alt={title}
            className="w-full h-full object-cover size[48]"
          />
        </div>
      ) : (
        <div className="text-5xl">{icon}</div>
      )}
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
