import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function useQueryTab(defaultTab: string) {
    const [searchParams, setSearchParams] = useSearchParams();
    const paramTab = searchParams.get("tab");
    const [activeTab, setActiveTab] = useState<string>(paramTab || defaultTab);

    // Sync URL query param when tab changes
    useEffect(() => {
        if (activeTab !== paramTab) {
            setSearchParams({ tab: activeTab });
        }
    }, [activeTab, paramTab, setSearchParams]);

    return [activeTab, setActiveTab] as const;
}
