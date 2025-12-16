import { Routes, Route, Navigate } from "react-router-dom";
import AIInsights from "../../../pages/AIInsights";
import Header from "../Header";

const Main = () => {
  // To do later
  // const [searchParams] = useSearchParams();
  // const paramTab = searchParams.get("tab");
  // const bgUrl = paramTab === "segments" ? "userSegment" : "prediction3";

  return (
    <main
      className={`flex-1 p-8 lg:p-8 relative bg-contain bg-top bg-no-repeat`}
      style={{ backgroundImage: `url(src/assets/userSegment.png)` }}
    >
      <Header />
      <Routes>
        <Route path="/ai-insights" element={<AIInsights />} />
        <Route path="*" element={<Navigate to="/ai-insights" />} />
      </Routes>
    </main>
  );
};

export default Main;
