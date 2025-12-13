import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  CartesianGrid,
} from "recharts";
import type {
  KeyMetrics,
  TimeSeriesDataPoint,
  WhatIfSimulationMetrics,
} from "../../../types";

interface AreaChartCardProps {
  title: string;
  subtitle: string;
  data: TimeSeriesDataPoint[];
  color: string;
  accentColor: string;
  metrics: KeyMetrics | WhatIfSimulationMetrics | undefined;
  scenario?: string;
  isRecommended?: boolean;
}

// Custom Tooltip Props Interface
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value?: number;
    name?: string;
    dataKey?: string;
    payload?: TimeSeriesDataPoint;
  }>;
  label?: string;
}

// Custom Tooltip Component
const CustomTooltip: React.FC<CustomTooltipProps> = (props) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
        <p className="text-sm font-semibold text-gray-900">
          Joins: {payload[0].value?.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};
// Area Chart Card Component
const AreaChartCard: React.FC<AreaChartCardProps> = ({
  title,
  subtitle,
  data,
  color,
  accentColor,
  metrics,
  scenario,
  isRecommended = false,
}) => {
  // Find peak for annotation
  const peakIndex = Math.floor(data.length * 0.7);
  const peakValue = data[peakIndex].joins;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <p
          className={`text-sm font-semibold mt-2 ${
            isRecommended ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {isRecommended ? scenario || "" : <br />}
        </p>
      </div>

      <div className="h-64 mb-6 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id={`gradient-${title}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={color} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
              tickFormatter={(value: number) =>
                value > 1000
                  ? `${(value / 1000).toFixed(0)}K`
                  : value.toString()
              }
              label={{
                value: "Joins",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 12, fill: "#6b7280" },
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="joins"
              stroke={color}
              fill={`url(#gradient-${title})`}
              strokeWidth={3}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Annotation */}
        <div
          className="absolute bg-white px-3 py-1.5 rounded-lg shadow-md border-2"
          style={{
            borderColor: color,
            top: "20%",
            right: "15%",
          }}
        >
          <p className="text-xs text-gray-600">
            Joins: {Math.round(peakValue / 100) * 100}
          </p>
          <p className="text-xs font-bold" style={{ color: accentColor }}>
            Joins: {metrics?.joins.toLocaleString() || "N/A"}
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-5">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          {isRecommended ? "Upcoming Statistics" : "Current Statistics"}
        </h4>
        <p className="text-xs text-gray-600 mb-4">
          {isRecommended
            ? "Highest expected revenue and ROI"
            : "Highest expected revenue and ROI"}
        </p>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Expected Revenue:</span>
            <span className="text-lg font-bold text-gray-900">
              ${metrics?.expected_revenue.toLocaleString() || "N/A"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Predicted Joins:</span>
            <span className="text-lg font-bold text-gray-900">
              {metrics?.joins.toLocaleString() || "N/A"}
            </span>
          </div>
          {(metrics?.engagement_score || "") && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Engagement Score:</span>
              <span className="text-lg font-bold" style={{ color: color }}>
                {metrics?.engagement_score}%
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AreaChartCard;
