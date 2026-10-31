import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/MovieService";

type UseMovies = {
    path: string;
    page?: number;
};

export const useMovies = ({ path, page }: UseMovies) => {
    return useQuery({
        queryKey: ["movies", path, page],
        queryFn: () => getMovies({ path, page }),
    });
};
