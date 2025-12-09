interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="mb-5">
    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    <p className="text-sm text-gray-600">{subtitle}</p>
  </div>
);

export default SectionHeader;
