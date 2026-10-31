import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/MovieService";

export const useMovieDetails = (movieId?: string) => {
    return useQuery({
        queryKey: ["moviedetails", movieId],
        queryFn: () => getMovieDetails(movieId ?? ""),
        enabled: !!movieId,
    });
};
