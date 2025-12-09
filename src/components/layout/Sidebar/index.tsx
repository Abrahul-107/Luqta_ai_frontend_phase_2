import { NavLink } from "react-router-dom";
import type { NavItem } from "../../../types";
import Logo from "./Logo";
import Navigation from "./Navigation";
import WelcomeSection from "./WelcomeSection";

interface SidebarProps {
  isOpen: boolean;
  navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, navItems }) => (
  <aside
    className={`fixed lg:static scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-60 bg-opacity-40 border-r border-purple-500 border-opacity-30 h-screen overflow-y-auto z-40 transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    }`}
    style={{ background: "linear-gradient(to top, #000000, #5304FB)" }}
  >
    <div className="p-2">
      <Logo />
      <WelcomeSection />
      <Navigation navItems={navItems} />
      <div className="mt-auto pt-5">
        <NavLink
          to="/logout"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white text-opacity-70 hover:bg-purple-500 hover:bg-opacity-30 hover:text-white transition"
        >
          <span>😊</span>
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  </aside>
);
export default Sidebar;
