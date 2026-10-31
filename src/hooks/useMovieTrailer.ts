import { useQuery } from "@tanstack/react-query";
import { getMovieTrailers } from "../services/MovieService";

export const useMovieTrailers = (movieId: string) => {
    return useQuery({
        queryKey: ["movieTrailers", movieId],
        queryFn: () => getMovieTrailers(movieId),
        enabled: !!movieId,
    });
};
