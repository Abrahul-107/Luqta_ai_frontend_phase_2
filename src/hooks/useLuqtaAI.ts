import { useState, useCallback } from "react";
import { useHttp } from "./useHttp";

export const useLuqtaAI = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { baseUrl, httpPost } = useHttp();

    const askAI = useCallback(async (query: string): Promise<string | null> => {
        try {
            setLoading(true);
            setError(null);
            const result = await httpPost<{ response: string }>(
                `${baseUrl}ask_to_bot`,
                { user_query: query }
            );
            return result?.response || null;
        } catch (err) {
            setError("Could not connect to AI service.");
            return null;
        } finally {
            setLoading(false);
        }
    }, [httpPost, baseUrl]);

    return { askAI, loading, error };
};
