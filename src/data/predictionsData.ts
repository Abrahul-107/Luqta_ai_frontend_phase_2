import type { StatData } from "../types";

export const predictions: StatData[] = [
    { icon: '👥', icon_url: 'src/assets/icons/group_add.svg', label: 'Views', translation_key: 'user_segments.metrics.views', value: 0 },
    // { icon: '📊', icon_url: 'src/assets/icons/account_balance_wallet.svg', label: 'Revenue', translation_key: 'user_segments.metrics.revenue', value: 0 },
    { icon: '💎', icon_url: 'src/assets/icons/groups.svg', label: 'Joins', translation_key: 'user_segments.metrics.joins', value: 0 },
    { icon: '💎', icon_url: 'src/assets/icons/flare.svg', label: 'Engagement', translation_key: 'user_segments.metrics.engagement', value: 0 },
    { icon: '💎', icon_url: 'src/assets/icons/arrow_outward_down.svg', label: 'Drop-off Rate', translation_key: 'user_segments.metrics.drop_off_rate', value: 0 },
];
