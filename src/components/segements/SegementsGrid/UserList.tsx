import { useState } from "react";
import type { User } from "../../../types";
import UserListItem from "./UserListItem";
import { useTranslation } from "react-i18next";

interface UserListProps {
  users?: User[];
  loading?: boolean;
  gradient?: string;
}

const UserList: React.FC<UserListProps> = ({ users, loading, gradient }) => {
  const initialUsersCount = 4;
  const increamentCountNo = 5;
  const [slicedUsers, setSlicedUsers] = useState(initialUsersCount);
  const { t } = useTranslation();
  return (
    <ul className="space-y-2">
      {(loading ? [1, 2, 3, 4] : users?.slice(0, slicedUsers) || []).map(
        (user, idx) =>
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
            <>
              <UserListItem key={idx} {...(user as User)} gradient={gradient} />
            </>
          )
      )}
      {!loading && users && users.length > initialUsersCount && (
        <div className="flex justify-between">
          <span
            className="text-blue-600 cursor-pointer hover:underline transition-all duration-200"
            onClick={() =>
              setSlicedUsers(
                users.length > slicedUsers ? users?.length : initialUsersCount
              )
            }
          >
            {users.length > slicedUsers
              ? t("user_segments.segment_cards.high_performer.show_all", {
                  count: users.length,
                })
              : t("user_segments.segment_cards.high_performer.show_less")}
          </span>
          {users.length > slicedUsers && (
            <span
              className="text-blue-600 cursor-pointer hover:underline transition-all duration-200"
              onClick={() =>
                setSlicedUsers((prev) =>
                  Math.min(prev + increamentCountNo, users?.length || 0)
                )
              }
            >
              {t("user_segments.segment_cards.high_performer.show_more", {
                count: increamentCountNo,
              })}
            </span>
          )}
        </div>
      )}
    </ul>
  );
};

export default UserList;
