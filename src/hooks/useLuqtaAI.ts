import { useState } from "react";

export const useLuqtaAI = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const token = "9dX$44A[~K10";
    const askAI = async (query: string): Promise<string | null> => {
        try {
            setLoading(true);
            setError(null);
            console.log(token);


            const res = await fetch("https://ai.luqta.io/api/ask_to_bot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,   // ⭐ IMPORTANT
                },
                body: JSON.stringify({ user_query: query }),
            });

            const data = await res.json();
            return data?.response || null;
        } catch (err) {
            setError("Could not connect to AI service.");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { askAI, loading, error };
};
export default useLuqtaAI;