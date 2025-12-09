import { NavLink } from "react-router-dom";

interface NavItemProps {
  icon: string;
  label: string;
  href: string;
}

const NavItemComponent: React.FC<NavItemProps> = ({ icon, label, href }) => (
  <li>
    <NavLink
      to={href}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition ${
          isActive
            ? "bg-purple-500 bg-opacity-30 text-white"
            : "text-white text-opacity-70 hover:bg-purple-500 hover:bg-opacity-30 hover:text-white"
        }`
      }
    >
      <span>{icon}</span>
      <span>{label}</span>
    </NavLink>
  </li>
);

export default NavItemComponent;
