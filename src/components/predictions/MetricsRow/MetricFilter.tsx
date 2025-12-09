interface MetricFilterProps {
  label: string;
}

const MetricFilter: React.FC<MetricFilterProps> = ({ label }) => (
  <button className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-gray-200 transition">
    {label}
  </button>
);

export default MetricFilter;
