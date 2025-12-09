import type { MetricCardData, ChartData, Prediction } from "../../types";
import SectionHeader from "../common/SectionHeader";
import ChartsGrid from "./ChartsGrid";
import MetricCardsGrid from "./MetricCardsGrid";
import MetricsRow from "./MetricsRow";
import PredictionSection from "./PredictionSection";

const PredictionsTab: React.FC = () => {
  const metrics: string[] = [
    "Views 👁️",
    "Revenue 💰",
    "Links 🔗",
    "Engagement 📈",
    "Drop-off Rate ⬇️",
  ];

  const metricCards: MetricCardData[] = [
    {
      title: "Now",
      value: "+14",
      change: "Total Views",
      changeType: "positive",
    },
    {
      title: "in the next 10 Days!",
      value: "+40,603",
      change: "+0.10%",
      changeType: "positive",
    },
    { title: "Now", value: "+14" },
    {
      title: "in the next 10 Days!",
      value: "+0.10%",
      change: "-2",
      changeType: "negative",
    },
  ];

  const charts: ChartData[] = [
    { title: "Now", placeholder: "Chart: Total Views" },
    { title: "In the next 10 Days!", placeholder: "Chart: Upcoming Behavior" },
  ];

  const increasePredictions: Prediction[] = [
    {
      label: "Increase prize by 10%",
      volatility: "high",
      heights: ["60%", "80%", "50%", "90%"],
      description:
        "Total prize value estimator may exceed target but could impact...",
    },
    {
      label: "Increase prize by 25%",
      volatility: "high",
      heights: ["50%", "70%", "85%", "75%"],
      description:
        "Total prize value estimator may exceed target but could impact...",
    },
    {
      label: "Increase prize by 50%",
      volatility: "high",
      heights: ["70%", "60%", "90%", "80%"],
      description:
        "Total prize value estimator may exceed target but could impact...",
    },
  ];

  const decreasePredictions: Prediction[] = [
    {
      label: "Decrease prize by 10%",
      volatility: "low",
      heights: ["45%", "55%", "50%", "60%"],
      description:
        "Total prize value estimator helps you maintain budget within limit...",
    },
  ];

  return (
    <div>
      <div className="bg-white rounded-2xl p-5 mb-5">
        <SectionHeader
          title="User Segments"
          subtitle="User Insights & Predictions"
        />
        <MetricsRow metrics={metrics} />
        <MetricCardsGrid metrics={metricCards} />
      </div>
      <ChartsGrid charts={charts} />
      <PredictionSection
        title="Increase prize by"
        predictions={increasePredictions}
      />
      <PredictionSection
        title="Decrease prize by"
        predictions={decreasePredictions}
      />
    </div>
  );
};
export default PredictionsTab;
