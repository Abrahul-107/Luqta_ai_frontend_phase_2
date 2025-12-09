import type { ChartData } from "../../../types";
import ChartCard from "./ChartCard";

interface ChartsGridProps {
  charts: ChartData[];
}

const ChartsGrid: React.FC<ChartsGridProps> = ({ charts }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
    {charts.map((chart, idx) => (
      <ChartCard key={idx} {...chart} />
    ))}
  </div>
);

export default ChartsGrid;
