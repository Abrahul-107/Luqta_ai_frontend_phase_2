import type { StatData } from "../types";

export const stats: StatData[] = [
    { icon: '👥', icon_url: 'src/assets/icons/group_add.svg', label: 'Total Unique Users', value: 0, translation_key: 'user_segments.segment_metrics.total_unique_users' },
    { icon: '📊', icon_url: 'src/assets/icons/arrow_outward_up.svg', label: 'Total Segments', value: 0, translation_key: 'user_segments.segment_metrics.total_segments' },
    { icon: '💎', icon_url: 'src/assets/icons/workspace_premium.svg', label: 'High Value Users', value: 0, translation_key: 'user_segments.segment_metrics.high_value_users' },
];