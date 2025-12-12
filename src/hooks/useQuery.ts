import { useSearchParams } from "react-router-dom";
import { useEffect, useCallback } from "react";

type QueryValue = string | number;
type QueryObject = Record<string, QueryValue>;

export function useQuery(defaultParams?: QueryObject) {
    const [searchParams, setSearchParams] = useSearchParams();

    // Set defaults only if missing
    useEffect(() => {
        if (!defaultParams) return;

        let changed = false;

        Object.entries(defaultParams).forEach(([key, value]) => {
            if (searchParams.get(key) === null) {
                searchParams.set(key, String(value));
                changed = true;
            }
        });

        if (changed) {
            setSearchParams(searchParams);
        }
    }, [defaultParams, searchParams, setSearchParams]);

    /** 🔹 GET a query param */
    const getQuery = useCallback(
        (key: string) => searchParams.get(key),
        [searchParams]
    );

    /** 🔹 UPDATE a single query param */
    const updateQuery = useCallback(
        (key: string, value: QueryValue) => {
            searchParams.set(key, String(value));
            setSearchParams(searchParams);
        },
        [searchParams, setSearchParams]
    );

    /** 🔹 ADD multiple params at once */
    const addQueries = useCallback(
        (entries: QueryObject) => {
            Object.entries(entries).forEach(([key, value]) => {
                searchParams.set(key, String(value));
            });
            setSearchParams(searchParams);
        },
        [searchParams, setSearchParams]
    );

    /** 🔹 REMOVE a single param */
    const removeQuery = useCallback(
        (key: string) => {
            searchParams.delete(key);
            setSearchParams(searchParams);
        },
        [searchParams, setSearchParams]
    );

    /** 🔹 REMOVE multiple params */
    const removeQueries = useCallback(
        (keys: string[]) => {
            keys.forEach((key) => searchParams.delete(key));
            setSearchParams(searchParams);
        },
        [searchParams, setSearchParams]
    );

    return {
        query: searchParams,
        getQuery,
        updateQuery,
        addQueries,
        removeQuery,
        removeQueries,
    };
}
