interface UserListItemProps {
  name: string;
  badge: string;
  badgeColor: string;
  gradient?: string;
}

const UserListItem: React.FC<UserListItemProps> = ({
  name,
  badge,
  badgeColor,
  gradient,
}) => (
  <li className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
    <div className="flex items-center gap-2">
      <img
        src="src/assets/images/avatar.png"
        className={`w-8 h-8 rounded-full ${gradient}`}
        alt=""
      />
      <span className="text-sm">{name}</span>
    </div>
    <span
      className={`px-3 py-1 ${badgeColor} text-xs font-medium rounded-full`}
    >
      {badge}
    </span>
  </li>
);

export default UserListItem;
