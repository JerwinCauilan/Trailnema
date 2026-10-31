import { useCallback, useEffect, useMemo, useRef } from "react";
import { useMoviesInfinite } from "./useMoviesInfinite";

export const useMovieListPage = (path: string) => {
    const loadMoreRef = useRef<HTMLDivElement>(null);

    const {
        data,
        isLoading,
        isError,
        isFetchNextPageError,
        isFetching,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
        refetch,
    } = useMoviesInfinite(path ?? "");

    const movies = useMemo(() => {
        const seen = new Set<number>();

        return (data?.pages.flat() ?? []).filter((movie) => {
            if (seen.has(movie.id)) return false;
            seen.add(movie.id);
            return true;
        });
    }, [data]);

    const retry = useCallback(
        () => (isFetchNextPageError ? fetchNextPage() : refetch()),
        [isFetchNextPageError, fetchNextPage, refetch],
    );

    // Ensure the page always opens at the top, regardless of scroll
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [path]);

    useEffect(() => {
        const target = loadMoreRef.current;
        if (!target || !hasNextPage || isFetching || isError) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) void fetchNextPage();
            },
            { rootMargin: "300px" },
        );
        observer.observe(target);

        return () => observer.disconnect();
    }, [hasNextPage, isFetching, isError, fetchNextPage]);

    return {
        movies,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        loadMoreRef,
        isError,
        isFetchNextPageError,
        retry,
    };
};
