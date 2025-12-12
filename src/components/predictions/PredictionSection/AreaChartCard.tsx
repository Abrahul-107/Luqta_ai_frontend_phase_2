import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";
import type { WhatIfSimulation, WhatIfSimulationMetrics } from "../../../types";

interface AreaChartCardProps {
  title: string;
  subtitle: string;
  data: any[];
  color1: string;
  color2: string;
  simulation: WhatIfSimulation;
}

const AreaChartCard: React.FC<AreaChartCardProps> = ({
  title,
  subtitle,
  data,
  color1,
  color2,
  simulation,
}) => (
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>

    <div className="h-56 mb-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id={`gradient1-${title}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={color1} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color1} stopOpacity={0.1} />
            </linearGradient>
            <linearGradient
              id={`gradient2-${title}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={color2} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color2} stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            ticks={[data[0].date, data[data.length - 1].date]}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value} Joins`}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Joins-70"
            stroke={color1}
            fill={`url(#gradient1-${title})`}
            strokeWidth={2}
            animationDuration={1000}
          />
          <Area
            type="monotone"
            dataKey="Joins-15000"
            stroke={color2}
            fill={`url(#gradient2-${title})`}
            strokeWidth={2}
            animationDuration={1000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>

    <div className="bg-gray-50 rounded-lg p-4">
      <h4 className="text-xs font-semibold text-gray-700 mb-2">
        {title === "Now" ? "Current Statistics" : "Upcoming Statistics"}
      </h4>
      <p className="text-xs text-gray-600 mb-3">{simulation?.notes}</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Expected Revenue:</span>
          <span className="font-semibold text-gray-900">
            $ {simulation?.predicted_metrics?.expected_revenue}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Predicted Joins:</span>
          <span className="font-semibold text-gray-900">
            {simulation?.predicted_metrics?.joins}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Engagement Score:</span>
          <span className="font-semibold text-gray-900">
            {simulation?.predicted_metrics?.engagement_score}%
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default AreaChartCard;
