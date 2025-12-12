import type { ClientSegments, Segment, StatData } from "../types";

const useClientSegmentFormatter = () => {
    const getStats = (clientSegments: ClientSegments | null) => {
        if (!clientSegments) return [];
        const { 'One-time User': totalUniqueUsers } = clientSegments;
        const stats: StatData[] = [
            { icon: '👥', icon_url: 'src/assets/icons/group_add.svg', label: 'Total Unique Users', value: totalUniqueUsers?.length || 0 },
            { icon: '📊', icon_url: 'src/assets/icons/arrow_outward_up.svg', label: 'Total Segments', value: '22' },
            { icon: '💎', icon_url: 'src/assets/icons/workspace_premium.svg', label: 'High Value Users', value: '1824' },
        ];
        return stats;
    }

    const getSegmentDetails = (clientSegments: ClientSegments | null) => {
        if (!clientSegments) return [];
        const totalUniqueUsers = clientSegments['One-time User'];
        const totalUsers = totalUniqueUsers?.length || 1;
        const superLoyalUsers = clientSegments["Loyal User"]?.map(user => ({ name: user, badge: 'Top', badgeColor: 'bg-green-100 text-green-800' }));
        const highPerformers = clientSegments["High Performer"]?.map((user, index) => ({
            name: user,
            badge: `${index + 1}${['st', 'nd', 'rd'][index] || 'th'}`,
            badgeColor: 'bg-blue-100 text-blue-800'
        }));
        const segments: Segment[] = [
            {
                icon: '👑',
                icon_url: 'src/assets/images/super_loyal_user.png',
                title: 'Super Loyal User',
                description: 'Top tier users with exceptional loyalty and engagement',
                percentage: +((superLoyalUsers?.length || 0) / totalUsers * 100).toFixed(2),
                gradient: 'bg-gradient-to-r from-orange-500 to-orange-400',
                users: superLoyalUsers,
            },
            {
                icon: '🏆',
                icon_url: 'src/assets/images/high_performer.png',
                title: 'High Performer',
                description: 'Users who consistently perform well in contests',
                percentage: +((highPerformers?.length || 0) / totalUsers * 100).toFixed(2),
                gradient: 'bg-gradient-to-r from-purple-500 to-purple-400',
                users: highPerformers,
            },
        ];

        return segments;
    }

    return { getStats, getSegmentDetails };
}

export default useClientSegmentFormatter;