import { Loader } from "lucide-react";
import Card from "../../shared/Card";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface StatCardProps {
  icon: string;
  icon_url?: string;
  label: string;
  value: number | string;
  translation_key?: string;
  loading?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  icon_url,
  label,
  value,
  loading,
  translation_key,
}) => {
  const { t, i18n } = useTranslation();
  const [iconPosition, setIconPosition] = useState("right-0");
  useEffect(() => {
    setIconPosition(document.dir === "ltr" ? "right-0" : "left-0");
  }, [i18n, i18n.language]);
  return (
    <Card>
      <div className="h-40 flex flex-col justify-between">
        <div className="text-sm text-gray-600 mb-2 relative flex items-between justify-start gap-1">
          {t(translation_key || label)}
          {icon_url ? (
            <div
              className={`rounded-full bg-[#EDDEFED1] p-2 absolute top-0 ${iconPosition}`}
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
        <div className="text-4xl font-bold text-gray-900">
          {loading ? (
            <Loader className="animate-spin" />
          ) : (
            (+value).toLocaleString()
          )}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
