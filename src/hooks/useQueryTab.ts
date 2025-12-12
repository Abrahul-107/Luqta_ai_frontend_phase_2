import { useState, useEffect, useMemo } from "react";
import { useQuery } from "./useQuery"; // your custom hook

export function useQueryTab(defaultTab: string) {
    useMemo(
        () => ({ tab: defaultTab }),
        [defaultTab]
    );
    const { getQuery, updateQuery } = useQuery({ tab: defaultTab });

    const tabFromUrl = getQuery("tab") || defaultTab;
    const [activeTab, setActiveTab] = useState(tabFromUrl);

    // Sync URL when state changes
    useEffect(() => {
        if (activeTab !== tabFromUrl) {
            updateQuery("tab", activeTab);
        }
    }, [activeTab, tabFromUrl, updateQuery]);

    return [activeTab, setActiveTab] as const;
}
