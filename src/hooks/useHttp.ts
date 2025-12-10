import { useCallback } from "react";

interface HttpOptions {
    params?: Record<string, string | number>;
    body?: unknown;
}

export const useHttp = () => {
    const token = import.meta.env.VITE_ACCESS_TOKEN;
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const getHeaders = () =>
    ({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    } as Record<string, string>);

    const buildUrl = (url: string, params?: HttpOptions["params"]) => {
        const finalUrl = new URL(url);

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                finalUrl.searchParams.append(key, String(value));
            });
        }

        return finalUrl.toString();
    };

    const httpGet = useCallback(
        async <T>(url: string, options?: HttpOptions): Promise<T> => {
            const response = await fetch(buildUrl(url, options?.params), {
                method: "GET",
                headers: getHeaders(),
            });

            if (!response.ok)
                throw new Error(`GET failed: ${response.status} ${response.statusText}`);

            return response.json() as Promise<T>;
        },
        [token]
    );

    const httpPost = useCallback(
        async <T>(url: string, body?: unknown): Promise<T> => {
            const response = await fetch(url, {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(body),
            });

            if (!response.ok)
                throw new Error(`POST failed: ${response.status} ${response.statusText}`);

            return response.json() as Promise<T>;
        },
        [token]
    );

    const httpPut = useCallback(
        async <T>(url: string, body?: unknown): Promise<T> => {
            const response = await fetch(url, {
                method: "PUT",
                headers: getHeaders(),
                body: JSON.stringify(body),
            });

            if (!response.ok)
                throw new Error(`PUT failed: ${response.status} ${response.statusText}`);

            return response.json() as Promise<T>;
        },
        [token]
    );

    const httpPatch = useCallback(
        async <T>(url: string, body?: unknown): Promise<T> => {
            const response = await fetch(url, {
                method: "PATCH",
                headers: getHeaders(),
                body: JSON.stringify(body),
            });

            if (!response.ok)
                throw new Error(
                    `PATCH failed: ${response.status} ${response.statusText}`
                );

            return response.json() as Promise<T>;
        },
        [token]
    );

    const httpDelete = useCallback(
        async <T>(url: string): Promise<T> => {
            const response = await fetch(url, {
                method: "DELETE",
                headers: getHeaders(),
            });

            if (!response.ok)
                throw new Error(
                    `DELETE failed: ${response.status} ${response.statusText}`
                );

            return response.json() as Promise<T>;
        },
        [token]
    );

    return {
        baseUrl,
        httpGet,
        httpPost,
        httpPut,
        httpPatch,
        httpDelete,
    };
};
