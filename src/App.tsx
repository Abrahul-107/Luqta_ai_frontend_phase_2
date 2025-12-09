import { useState } from "react";
import "./App.css";
import AIButton from "./components/layout/AIButton";
// import HamburgerButton from "./components/layout/HamburgerButton";
// import { navItems } from "./data/navItems";
// import Sidebar from "./components/layout/Sidebar";
// import { useState } from "react";
import Main from "./components/layout/Main";
import AIChatDrawer from "./components/layout/AIChatDrawer.tsx/index";

function App() {
  // const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState<boolean>(false);
  return (
    <>
      <div className="bg-white relative">
        {/* <HamburgerButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        /> */}

        <div className="flex min-h-screen">
          {/* Sidebar stays fixed (no scroll) */}
          {/* <Sidebar isOpen={sidebarOpen} navItems={navItems} /> */}

          {/* Main scrollable content */}
          <Main></Main>
        </div>

        <AIButton onClick={() => setIsAIChatOpen(true)} />
        <AIChatDrawer
          isOpen={isAIChatOpen}
          onClose={() => setIsAIChatOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
