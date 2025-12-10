import { useState, useCallback } from "react";
import type {
    EngagementPredictionResponse,
    PredictiveEngagementRequest,
} from "../types/index";
import { useHttp } from "./useHttp";

interface UsePredictiveEngagementResult {
    data: EngagementPredictionResponse | null;
    loading: boolean;
    error: string | null;
    fetchPrediction: (params: PredictiveEngagementRequest) => Promise<void>;
}

export const usePredictiveEngagement = (): UsePredictiveEngagementResult => {
    const [data, setData] = useState<EngagementPredictionResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { baseUrl, httpPost } = useHttp();

    const fetchPrediction = useCallback(
        async (params: PredictiveEngagementRequest) => {
            setLoading(true);
            setError(null);

            try {
                const result = await httpPost<EngagementPredictionResponse>(
                    `${baseUrl}predictive_engagement`,
                    params
                );
                setData(result);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Something went wrong");
                }
                setData(null);
            } finally {
                setLoading(false);
            }
        },
        [baseUrl]
    );

    return { data, loading, error, fetchPrediction };
};
