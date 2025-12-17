import { useTranslation } from "react-i18next";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
} from "recharts";

interface ScenarioCardProps {
  scenario: string;
  metrics: {
    views: number;
    joins: number;
    revenue: number;
    dropoff: number;
  };
  engagementScore: number;
  notes: string;
  confidence: string;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({
  scenario,
  metrics,
  engagementScore,
  notes,
  confidence,
}) => {
  const { t, i18n } = useTranslation();
  const chartData = [
    { name: t("user_segments.metrics.views"), value: metrics.views },
    { name: t("user_segments.metrics.joins"), value: metrics.joins },
    // { name: t("user_segments.metrics.revenue"), value: metrics.revenue },
    { name: t("user_segments.metrics.drop_off"), value: metrics.dropoff },
  ];

  const bg =
    confidence === "high"
      ? "bg-green-100 text-green-700"
      : confidence === "medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">{scenario}</h3>
        <span className={`px-3 py-1 ${bg} text-xs font-medium rounded-full`}>
          {t(
            `user_segments.detailed_scenario_analysis.confidence_score.${confidence}`
          )}
        </span>
      </div>

      <div className="h-40 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis hide />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#8b5cf6"
              radius={[8, 8, 0, 0]}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-600 mb-4">{notes}</p>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            {t("user_segments.detailed_scenario_analysis.engagement_score")}
          </span>
          <span className="font-semibold text-gray-900">
            {Intl.NumberFormat(i18n.language).format(engagementScore)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gray-900 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${engagementScore}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScenarioCard;
