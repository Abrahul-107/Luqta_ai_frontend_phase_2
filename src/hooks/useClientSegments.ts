import { useState, useCallback } from "react";
import type { ClientSegments } from "../types";
import { useHttp } from "./useHttp";


interface UseClientSegmentsResult {
    data: ClientSegments | null;
    loading: boolean;
    error: string | null;
    fetchSegments: (clientName: string) => Promise<void>;
}

export const useClientSegments = (): UseClientSegmentsResult => {
    const [data, setData] = useState<ClientSegments | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { baseUrl, httpPost } = useHttp();
    const fetchSegments = useCallback(async (clientName: string) => {
        setLoading(true);
        setError(null);

        try {
            const result = await httpPost<ClientSegments>(`${baseUrl}client_level_user_segments`, { client_name: clientName });
            setData(result);
        } catch (err: any) {
            setError(err.message || "Something went wrong");
            setData(null);
        } finally {
            setLoading(false);
        }
    }, [baseUrl]);

    return { data, loading, error, fetchSegments };
};
