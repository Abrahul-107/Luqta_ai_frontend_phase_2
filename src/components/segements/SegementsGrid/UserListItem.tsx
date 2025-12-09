interface UserListItemProps {
  name: string;
  badge: string;
  badgeColor: string;
}

const UserListItem: React.FC<UserListItemProps> = ({
  name,
  badge,
  badgeColor,
}) => (
  <li className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
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
