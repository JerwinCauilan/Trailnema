import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "../services/MovieService";

export const useMoviesInfinite = (path: string) => {
    return useInfiniteQuery({
        queryKey: ["movies-infinite", path],
        queryFn: ({ pageParam }) => getMovies({ path: path, page: pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (!lastPage) return undefined;
            return allPages.length + 1;
        },
    });
};
