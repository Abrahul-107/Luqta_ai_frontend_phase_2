import { useState, useCallback } from "react";
import type { ClientSegments } from "../types";


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
    const token = "9dX$44A[~K10";

    const fetchSegments = useCallback(async (clientName: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                "https://ai.luqta.io/api/client_level_user_segments",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,   // ⭐ IMPORTANT
                    },
                    body: JSON.stringify({ client_name: clientName }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result: ClientSegments = await response.json();
            setData(result);
        } catch (err: any) {
            setError(err.message || "Something went wrong");
            setData(null);
        } finally {
            setLoading(false);
        }
    }, []);

    return { data, loading, error, fetchSegments };
};
