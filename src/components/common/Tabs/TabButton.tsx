interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-7 py-2 rounded-full text-sm font-medium transition z-10 flex cursor-pointer ${
      active ? "bg-white text-gray-900 shadow-lg" : "text-white text-opacity-70"
    }`}
  >
    {children}
  </button>
);

export default TabButton;
