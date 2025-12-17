import type { Segment } from "../types";

export const segments: Segment[] = [
    {
        icon: '👑',
        icon_url: 'src/assets/images/super_loyal_user.png',
        title: 'Super Loyal User',
        description: 'Top tier users with exceptional loyalty and engagement',
        translation_title_key: 'user_segments.segment_cards.super_loyal_user.title',
        translation_description_key: 'user_segments.segment_cards.super_loyal_user.description',
        percentage: 0,
        gradient: 'bg-gradient-to-r from-orange-500 to-orange-400',
        users: [],
    },
    {
        icon: '🏆',
        icon_url: 'src/assets/images/high_performer.png',
        title: 'High Performer',
        description: 'Users who consistently perform well in contests',
        translation_title_key: 'user_segments.segment_cards.high_performer.title',
        translation_description_key: 'user_segments.segment_cards.high_performer.description',
        percentage: 0,
        gradient: 'bg-gradient-to-r from-purple-500 to-purple-400',
        users: [],
    },
];