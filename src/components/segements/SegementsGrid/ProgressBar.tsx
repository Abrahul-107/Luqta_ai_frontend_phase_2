import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProgressBarProps {
  percentage: number;
  gradient: string;
  loading?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  gradient,
  loading,
}) => {
  const { t } = useTranslation();
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-600">
          {t("user_segments.segment_cards.super_loyal_user.segment_share")}
        </span>
        <strong>
          {loading ? <Loader2 className="animate-spin" /> : `${percentage}%`}
        </strong>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${gradient} rounded-full transition-all duration-500 ease-in-out`}
          style={{ width: `${loading ? 0 : percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
