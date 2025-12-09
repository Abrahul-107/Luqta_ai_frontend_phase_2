import type { NavItem } from "../../../types";
import NavItemComponent from "./NavItem";

interface NavigationProps {
  navItems: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({ navItems }) => (
  <nav>
    <ul className="space-y-1">
      {navItems.map((item, idx) => (
        <NavItemComponent key={idx} {...item} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
