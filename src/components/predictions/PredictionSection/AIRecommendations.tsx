interface AIRecommendationsProps {
  recommendations: string[];
  loading?: boolean;
}
const AIRecommendations: React.FC<AIRecommendationsProps> = ({
  recommendations,
  loading,
}) => {
  if (!loading && recommendations.length === 0) {
    return <p className="text-gray-500">No recommendations available.</p>;
  }
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        AI Recommendations
      </h3>
      <div className="space-y-3">
        {(loading ? [1, 2, 3, 4, 5] : recommendations).map(
          (recommendation, idx) =>
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
                className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg"
              >
                <div className="w-7 h-7 rounded-full bg-yellow-50 p-1 overflow-hidden">
                  <img
                    src="src/assets/images/ai_recommendations.png"
                    alt="AI Recommendations"
                    className="w-full h-full object-cover size[48]"
                  />
                </div>
                <span className="text-sm text-gray-700">{recommendation}</span>
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default AIRecommendations;
