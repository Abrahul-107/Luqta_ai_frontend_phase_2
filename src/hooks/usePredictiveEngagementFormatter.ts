import type { EngagementPredictionResponse, StatData } from "../types";

const usePredictiveEngagementFormatter = () => {
    const getPredictions = (predictionResponse: EngagementPredictionResponse | null) => {
        if (!predictionResponse) return [];
        const { views, expected_revenue, joins, engagement_score, dropoff_rate } = predictionResponse.engagement_prediction.predictive_engagement.summary.key_metrics;
        const predictions: StatData[] = [
            { icon: '👥', icon_url: 'src/assets/icons/group_add.svg', label: 'Views', value: views },
            { icon: '📊', icon_url: 'src/assets/icons/account_balance_wallet.svg', label: 'Revenue', value: expected_revenue },
            { icon: '💎', icon_url: 'src/assets/icons/groups.svg', label: 'Joins', value: joins },
            { icon: '💎', icon_url: 'src/assets/icons/flare.svg', label: 'Engagement', value: engagement_score },
            { icon: '💎', icon_url: 'src/assets/icons/arrow_outward_down.svg', label: 'Drop-off Rate', value: dropoff_rate },
        ];
        return predictions;
    }

    return { getPredictions };
}

export default usePredictiveEngagementFormatter;