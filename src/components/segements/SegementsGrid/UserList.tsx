import type { User } from "../../../types";
import UserListItem from "./UserListItem";

interface UserListProps {
  users: User[];
  loading?: boolean;
}

const UserList: React.FC<UserListProps> = ({ users, loading }) => (
  <ul className="space-y-2">
    {(loading ? [1, 2, 3, 4] : users).map((user, idx) =>
      loading ? (
        <div
          key={idx}
          className="animate-pulse space-y-4 flex gap-4 justify-between"
        >
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>
          <div className="h-5 w-8 rounded-full bg-gray-200 mt-3"></div>
        </div>
      ) : (
        <UserListItem key={idx} {...(user as User)} />
      )
    )}
  </ul>
);

export default UserList;
