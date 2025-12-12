import { useCallback } from "react";

interface HttpOptions<T = unknown> {
    params?: Record<string, string | number>;
    body?: T;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
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

    /** COMMON REQUEST HANDLER */
    const request = useCallback(
        async <T>(url: string, options: HttpOptions = {}): Promise<T> => {
            const { method = "GET", params, body } = options;

            const response = await fetch(buildUrl(url, params), {
                method,
                headers: getHeaders(),
                body: body ? JSON.stringify(body) : undefined,
            });

            if (!response.ok) {
                throw new Error(
                    `${method} failed: ${response.status} ${response.statusText}`
                );
            }

            return response.json() as Promise<T>;
        },
        [token]
    );

    /** PUBLIC METHODS — THIN WRAPPERS */
    const httpGet = <T>(url: string, params?: HttpOptions["params"]) =>
        request<T>(url, { method: "GET", params });

    const httpPost = <T, U = unknown>(url: string, body?: U) =>
        request<T>(url, { method: "POST", body });

    const httpPut = <T, U = unknown>(url: string, body?: U) =>
        request<T>(url, { method: "PUT", body });

    const httpPatch = <T, U = unknown>(url: string, body?: U) =>
        request<T>(url, { method: "PATCH", body });

    const httpDelete = <T>(url: string) =>
        request<T>(url, { method: "DELETE" });

    return {
        baseUrl,
        httpGet,
        httpPost,
        httpPut,
        httpPatch,
        httpDelete,
    };
};
