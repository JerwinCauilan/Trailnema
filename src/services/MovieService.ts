import { baseApi } from "../api/axiosInstance";
import { formatMovieDetails, formatMovies } from "../utils/movies.util";
import {
    GetMoviesType,
    RawMovieDetails,
    RawMoviesResponse,
} from "../utils/type";
import { fetchJSON } from "../utils/util";

export const getMovies = async ({
    path,
    page = 1,
}: Readonly<GetMoviesType>) => {
    const url = `/3/movie/${path}?language=en-US&page=${page}`;

    try {
        const response = await fetchJSON<RawMoviesResponse>(url);
        return formatMovies(response.results);
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error;
    }
};

export const getMovieDetails = async (movieId: string) => {
    const url = `/3/movie/${movieId}?language=en-US`;

    try {
        const result = await fetchJSON<RawMovieDetails>(url);
        return formatMovieDetails(result);
    } catch (error) {
        console.error("Failed to fetch movie details:", error);
        throw error;
    }
};

export const fetchMovieTrailers = async (id: string | undefined) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await baseApi.get(`/3/movie/${id}/videos?language=en-US`);
    return response.data.results.filter(
        (data: { type: string }) => data.type === "Trailer",
    );
};

export const fetchSimilarMovies = async (id: string, page: number) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await baseApi.get(
        `/3/movie/${id}/similar?language=en-US&page=${page}`,
    );
    return response.data.results;
};
