import { useTranslation } from "react-i18next";
import type { QuickAction } from "../../../types";

interface QuickActionsProps {
  actions: QuickAction[];
  showActions: boolean;
  onActionClick: (label: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({
  actions,
  showActions,
  onActionClick,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={
        "transition-all p-4 duration-300 overflow-hidden " +
        (showActions ? "max-h-96 border-gray-b-200" : "max-h-0 py-0 border-0")
      }
    >
      <div className="space-y-2">
        {actions.map((action, idx) => (
          <button
            key={idx}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer rounded-lg transition flex items-center gap-2"
            onClick={() =>
              onActionClick(
                t(`chat_room.${action.translation_key}` || action.label)
              )
            }
          >
            <span>{action.icon}</span>
            <span>
              {t(`chat_room.${action.translation_key}` || action.label)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
