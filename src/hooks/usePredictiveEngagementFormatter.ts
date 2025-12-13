import type { EngagementPredictionResponse, StatData, TimeSeriesDataPoint } from "../types";

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

    const generateTimeSeriesData = (
        finalJoins: number | null | undefined,
        days: number = 10,
        growthPattern: 'normal' | 'optimized' = 'normal',
        startDate = new Date()
    ): TimeSeriesDataPoint[] => {
        const data: TimeSeriesDataPoint[] = [];

        for (let i = 0; i <= days; i++) {
            let progress: number;

            // Different growth patterns for different scenarios
            if (growthPattern === 'optimized') {
                // Faster growth for better scenarios (S-curve with earlier peak)
                progress = 1 / (1 + Math.exp(-0.8 * (i - days / 2.2)));
            } else {
                // Normal growth (standard S-curve)
                progress = 1 / (1 + Math.exp(-0.7 * (i - days / 2.5)));
            }

            const joins = Math.round((finalJoins || 0) * progress);

            // Calculate the date for this data point
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);

            // Format date as MM/DD
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const formattedDate = `${month}/${day}`;

            data.push({
                day: i,
                date: formattedDate, // Show only first and last dates
                joins: joins,
                displayJoins: joins > 1000 ? `${(joins / 1000).toFixed(1)}K` : joins.toString()
            });
        }

        return data;
    };

    return { getPredictions, generateTimeSeriesData };
}

export default usePredictiveEngagementFormatter;