import { useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "./useQuery";

interface ClientParams {
    client_id?: string | number;
    client_name?: string;
}

export function useQueryClient(params: ClientParams) {
    // Freeze incoming defaults only once
    const initialDefaults = useRef(params);

    const defaultParams = useMemo(() => {
        const obj: Record<string, string | number> = {};

        if (initialDefaults.current.client_id) {
            obj.client_id = initialDefaults.current.client_id;
        }

        if (initialDefaults.current.client_name) {
            obj.client_name = initialDefaults.current.client_name;
        }

        return obj;
    }, []);

    const { getQuery, updateQuery, removeQuery } = useQuery(defaultParams);

    // Read from URL only once, freeze initial read
    const initialClientId = useRef(getQuery("client_id"));
    const initialClientName = useRef(
        getQuery("client_name") || initialDefaults.current.client_name || ""
    );

    const [clientId, setClientId] = useState(initialClientId.current);
    const [clientName, setClientName] = useState(initialClientName.current);

    // Only sync TO URL when LOCAL state changes
    useEffect(() => {
        if (clientId === "" || clientId === null) {
            removeQuery("client_id");
        } else {
            updateQuery("client_id", clientId);
        }
    }, [clientId]);

    useEffect(() => {
        if (clientName === "" || clientName === null) {
            removeQuery("client_name");
        } else {
            updateQuery("client_name", clientName);
        }
    }, [clientName]);

    return {
        clientId,
        setClientId,
        clientName,
        setClientName,
    };
}
