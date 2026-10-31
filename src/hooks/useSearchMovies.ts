import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../services/MovieService";

export const useSearchMovies = (query: string) =>
    useQuery({
        queryKey: ["movies", "search", query],
        queryFn: () => searchMovies(query),
        enabled: query.length >= 2,
        staleTime: 1000 * 60 * 5,
    });
