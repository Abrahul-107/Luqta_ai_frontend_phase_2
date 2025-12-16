import TabButton from "./TabButton";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => (
  <div className="flex justify-center" style={{ margin: "-3rem" }}>
    <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-full p-1 inline-flex gap-1">
      {/* Sliding indicator */}
      <span
        className={`absolute top-1 bottom-1 rounded-full bg-white/20 backdrop-blur-md transition-all duration-300`}
      ></span>
      <TabButton
        active={activeTab === "segments"}
        onClick={() => setActiveTab("segments")}
      >
        User Segments
      </TabButton>
      <TabButton
        active={activeTab === "predictions"}
        onClick={() => setActiveTab("predictions")}
      >
        Predictions ✨
      </TabButton>
    </div>
  </div>
);

export default Tabs;
