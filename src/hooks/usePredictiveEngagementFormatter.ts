import type { EngagementPredictionResponse, StatData } from "../types";

const usePredictiveEngagementFormatter = () => {
    const getPredictions = (predictionResponse: EngagementPredictionResponse | null) => {
        if (!predictionResponse) return [];
        const { views, expected_revenue, joins, engagement_score, dropoff_rate } = predictionResponse.engagement_prediction.predictive_engagement.summary.key_metrics;
        const predictions: StatData[] = [
            { icon: '👥', label: 'Views', value: views },
            { icon: '📊', label: 'Revenue', value: expected_revenue },
            { icon: '💎', label: 'Joins', value: joins },
            { icon: '💎', label: 'Engagement', value: engagement_score },
            { icon: '💎', label: 'Drop-off Rate', value: dropoff_rate },
        ];
        return predictions;
    }

    // const getSegmentDetails = (clientSegments: ClientSegments | null) => {
    //     if (!clientSegments) return [];
    //     const totalUniqueUsers = clientSegments['One-time User'];
    //     const totalUsers = totalUniqueUsers?.length || 1;
    //     const superLoyalUsers = clientSegments["Loyal User"]?.map(user => ({ name: user, badge: 'Top', badgeColor: 'bg-green-100 text-green-800' }));
    //     const highPerformers = clientSegments["High Performer"]?.map((user, index) => ({
    //         name: user,
    //         badge: `${index + 1}${['st', 'nd', 'rd'][index] || 'th'}`,
    //         badgeColor: 'bg-blue-100 text-blue-800'
    //     }));
    //     const segments: Segment[] = [
    //         {
    //             icon: '👑',
    //             title: 'Super Loyal User',
    //             description: 'Top tier users with exceptional loyalty and engagement',
    //             percentage: +((superLoyalUsers?.length || 0) / totalUsers * 100).toFixed(2),
    //             gradient: 'bg-gradient-to-r from-orange-500 to-orange-400',
    //             users: superLoyalUsers,
    //         },
    //         {
    //             icon: '🏆',
    //             title: 'High Performer',
    //             description: 'Users who consistently perform well in contests',
    //             percentage: +((highPerformers?.length || 0) / totalUsers * 100).toFixed(2),
    //             gradient: 'bg-gradient-to-r from-purple-500 to-purple-400',
    //             users: highPerformers,
    //         },
    //     ];

    //     return segments;
    // }

    return { getPredictions };
}

export default usePredictiveEngagementFormatter;