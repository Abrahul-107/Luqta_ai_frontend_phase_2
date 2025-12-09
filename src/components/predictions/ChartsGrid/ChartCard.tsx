interface ChartCardProps {
  title: string;
  placeholder: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, placeholder }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5">
    <h3 className="text-sm font-medium mb-4">{title}</h3>
    <div className="h-48 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-600">
      {placeholder}
    </div>
  </div>
);

export default ChartCard;
