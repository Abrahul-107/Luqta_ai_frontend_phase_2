
export interface NavItem {
    icon: string;
    label: string;
    href: string;
    active?: boolean;
}

export interface StatData {
    icon: string;
    icon_url?: string;
    label: string;
    translation_key?: string;
    value: number | string;
}

export interface User {
    name: string;
    badge: string;
    badgeColor: string;
}

export interface Segment {
    icon: string;
    icon_url?: string;
    title: string;
    translation_title_key?: string;
    description: string;
    translation_description_key?: string;
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
    isStreaming?: boolean;
}

export interface QuickAction {
    icon: string;
    label: string;
    translation_key?: string;
}

export interface ClientSegments {
    "Engaged User": string[];
    "High Performer": string[];
    "Inactive User": string[];
    "Loyal User": string[];
    "One-time User": string[];
    "Super Loyal User": string[];
}

export interface KeyMetrics {
    views: number;
    joins: number;
    dropoff_rate: number;
    engagement_score: number;
    expected_revenue: number;
    confidence: string;
}

export interface ScenarioComparison {
    best_option: string;
    reason: string;
}

export interface WhatIfSimulationMetrics {
    views: number;
    joins: number;
    dropoff_rate: number;
    engagement_score: number;
    expected_revenue: number;
    confidence: string;
}

export interface WhatIfSimulation {
    scenario: string;
    predicted_metrics: WhatIfSimulationMetrics;
    notes: string;
}

export interface ActionableSuggestion {
    action: string;
    expected_impact: string;
    priority: string;
    confidence: string;
}

export interface DecisionDataBack {
    client_actionable_suggestions: ActionableSuggestion[];
}

export interface Summary {
    key_metrics: KeyMetrics;
    scenario_comparison: ScenarioComparison;
    risks: string[];
    recommendations: string[];
}

export interface PredictiveEngagement {
    summary: Summary;
    what_if_simulations: WhatIfSimulation[];
    decision_data_back: DecisionDataBack;
}

export interface EngagementPredictionResponse {
    engagement_prediction: {
        predictive_engagement: PredictiveEngagement;
    };
}

export interface PredictiveEngagementRequest {
    client_id?: string | number | null;
    client_name?: string | null;
}

export interface TimeSeriesDataPoint {
    day: number;
    date: string;
    joins: number;
    displayJoins: string;
}
