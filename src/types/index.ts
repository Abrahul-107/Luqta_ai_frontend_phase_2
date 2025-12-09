
export interface NavItem {
    icon: string;
    label: string;
    href: string;
    active?: boolean;
}

export interface StatData {
    icon: string;
    label: string;
    value: number | string;
}

export interface User {
    name: string;
    badge: string;
    badgeColor: string;
}

export interface Segment {
    icon: string;
    title: string;
    description: string;
    percentage: number;
    gradient: string;
    users: User[];
}

export interface MetricCardData {
    title: string;
    value: string;
    change?: string;
    changeType?: 'positive' | 'negative';
}

export interface ChartData {
    title: string;
    placeholder: string;
}

export interface Prediction {
    label: string;
    volatility: 'high' | 'low';
    heights: string[];
    description: string;
}


export interface ChatMessage {
    id: string;
    type: 'user' | 'ai';
    content: string;
    timestamp: Date;
}

export interface QuickAction {
    icon: string;
    label: string;
}

export interface ClientSegments {
    "Engaged User": string[];
    "High Performer": string[];
    "Inactive User": string[];
    "Loyal User": string[];
    "One-time User": string[];
    "Super Loyal User": string[];
}
