interface MiniChartProps {
  heights: string[];
}

const MiniChart: React.FC<MiniChartProps> = ({ heights }) => (
  <div className="h-20 bg-purple-50 rounded-lg mb-3 flex items-end p-2 gap-1">
    {heights.map((height, idx) => (
      <div
        key={idx}
        className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t"
        style={{ height }}
      ></div>
    ))}
  </div>
);

export default MiniChart;
