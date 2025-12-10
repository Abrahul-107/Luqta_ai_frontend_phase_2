import AreaChartCard from "./AreaChartCard";

interface PredictionChartsGridProps {
  currentData: any[];
  predictedData: any[];
  loading?: boolean;
}

const PredictionChartsGrid: React.FC<PredictionChartsGridProps> = ({
  currentData,
  predictedData,
  loading,
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {loading ? (
      [1, 2].map(() => (
        <div
          className="space-y-4 flex gap-4 justify-between"
          key={Math.random()}
        >
          <div className="h-130 w-210 bg-gray-200 rounded-xl"></div>
        </div>
      ))
    ) : (
      <>
        <AreaChartCard
          title="Now"
          subtitle="Current metrics | Based on 2025"
          data={currentData}
          color1="#ef4444"
          color2="#fca5a5"
          stats={{
            revenue: 15,
            joins: 4,
            engagement: "20%",
          }}
        />
        <AreaChartCard
          title="In the next 10 Days!"
          subtitle="Recommended by our science | Increased prize by 25%"
          data={predictedData}
          color1="#10b981"
          color2="#6ee7b7"
          stats={{
            revenue: 560,
            joins: 8,
            engagement: "50%",
          }}
        />
      </>
    )}
  </div>
);
export default PredictionChartsGrid;
