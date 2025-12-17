import { useTranslation } from "react-i18next";

interface PotentialRisksProps {
  risks: string[];
  loading?: boolean;
}
const PotentialRisks: React.FC<PotentialRisksProps> = ({ risks, loading }) => {
  const { t } = useTranslation();
  if (!loading && risks.length === 0) {
    return (
      <p className="text-gray-500">
        {t("user_segments.no_potential_risks_identified")}
      </p>
    );
  }
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {t("user_segments.potential_risks")}
      </h3>
      <div className="space-y-3">
        {(loading ? [1, 2, 3, 4, 5] : risks).map((risk, idx) =>
          loading ? (
            <div
              className="animate-pulse space-y-4 flex gap-4 justify-between"
              key={idx}
            >
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <div className="h-8 bg-gray-200 rounded w-4/4"></div>
            </div>
          ) : (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 border border-gray-200 bg-red-50 rounded-xl"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="src/assets/images/potential_risks.png"
                  alt="Potential Risks"
                  className="w-full h-full object-cover size[48]"
                />
                {/* <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /> */}
              </div>
              <span className="text-sm text-gray-700">{risk}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default PotentialRisks;
