import Tabs from "../components/common/Tabs";
import UserSegmentsTab from "../components/segements/UserSegementsTab";
import PredictionsTab from "../components/predictions/PredictionsTab";
import { useQueryTab } from "../hooks/useQuerryTab";

const AIInsights: React.FC = () => {
  const [activeTab, setActiveTab] = useQueryTab("segments");

  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        {activeTab === "segments" && <UserSegmentsTab />}
        {activeTab === "predictions" && <PredictionsTab />}
      </div>
    </>
  );
};

export default AIInsights;
