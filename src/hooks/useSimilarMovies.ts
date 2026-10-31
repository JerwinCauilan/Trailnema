import { useQuery } from "@tanstack/react-query";
import { getSimilarMovies } from "../services/MovieService";

export const useSimilarMovies = (movieId?: string) => {
    return useQuery({
        queryKey: ["similarMovies", movieId],
        queryFn: () => getSimilarMovies(movieId ?? ""),
        enabled: !!movieId,
    });
};
