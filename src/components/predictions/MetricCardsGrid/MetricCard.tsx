import { Loader } from "lucide-react";
import Card from "../../shared/Card";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

interface MetricCardProps {
  icon: string;
  icon_url?: string;
  label: string;
  translation_key?: string;
  value: number | string;
  loading?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  icon_url,
  label,
  value,
  translation_key,
  loading,
}) => {
  const { t, i18n } = useTranslation();
  const [iconPosition, setIconPosition] = useState("right-0");
  useEffect(() => {
    const iconPosition = document.dir === "rtl" ? "left-0" : "right-0";
    setIconPosition(iconPosition);
  }, [i18n.language]);
  return (
    <Card>
      <div className="h-40 flex flex-col justify-between">
        <div className="text-sm text-gray-600 mb-2 relative flex items-between justify-start gap-1">
          {t(translation_key || label)}
          {icon_url ? (
            <div
              className={`rounded-full bg-gray-200 p-2 absolute top-0 ${iconPosition}`}
            >
              <img
                src={icon_url}
                alt={label}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <span className={`absolute top-0 ${iconPosition}`}>{icon}</span>
          )}
        </div>
        <div
          className={`text-4xl font-bold text-gray-900 ${
            +value < 0 ? "text-red-500" : "text-[#1E005E]"
          }`}
        >
          {loading ? (
            <Loader className="animate-spin" />
          ) : (
            `${+value > 0 ? "+" : +value < 0 ? "-" : ""}${Math.abs(
              +value
            ).toLocaleString()}`
          )}
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;
