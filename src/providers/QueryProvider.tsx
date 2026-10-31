import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { lazy, ReactNode, Suspense, useEffect, useState } from "react";

const ReactQueryDevToolsProduction = lazy(() =>
    import("@tanstack/react-query-devtools/build/modern/production.js").then(
        (d) => ({
            default: d.ReactQueryDevtools,
        }),
    ),
);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
});

const QueryProvider = ({ children }: { children: ReactNode }) => {
    const [showDevTools, setShowDevTools] = useState(false);

    useEffect(() => {
        // @ts-expect-error Devtools in production
        window.toggleDevTools = () => setShowDevTools((prev) => !prev);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen />
            {showDevTools && (
                <Suspense fallback={null}>
                    <ReactQueryDevToolsProduction />
                </Suspense>
            )}
        </QueryClientProvider>
    );
};

export default QueryProvider;
