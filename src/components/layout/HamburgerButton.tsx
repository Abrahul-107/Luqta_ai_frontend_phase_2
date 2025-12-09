import { Menu, X } from "lucide-react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="lg:hidden fixed top-5 left-5 z-50 bg-purple-500 bg-opacity-80 text-white p-2 rounded-lg"
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);

export default HamburgerButton;
