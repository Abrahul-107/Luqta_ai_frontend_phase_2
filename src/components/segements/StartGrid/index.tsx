import type { StatData } from "../../../types";
import StatCard from "./StartCard";

interface StatsGridProps {
  stats: StatData[];
  loading?: boolean;
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats, loading }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
    {stats.map((stat, idx) => (
      <StatCard key={idx} {...stat} loading={loading} />
    ))}
  </div>
);

export default StatsGrid;
