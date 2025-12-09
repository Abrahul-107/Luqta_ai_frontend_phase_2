import type { Prediction } from "../../../types";
import PredictionCard from "./PredictionCard";

interface PredictionSectionProps {
  title: string;
  predictions: Prediction[];
}

const PredictionSection: React.FC<PredictionSectionProps> = ({
  title,
  predictions,
}) => (
  <div>
    <h3 className="text-base font-semibold mb-4 mt-8">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {predictions.map((prediction, idx) => (
        <PredictionCard key={idx} {...prediction} />
      ))}
    </div>
  </div>
);

export default PredictionSection;
