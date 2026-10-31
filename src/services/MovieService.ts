import {
    formatMovieDetails,
    formatMovies,
    formatMovieTrailer,
} from "../utils/movies.util";
import {
    GetMoviesType,
    MovieTrailer,
    RawMovieDetails,
    RawMoviesResponse,
    RawMovieTrailer,
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

export const getSimilarMovies = async (movieId: string, page = 1) => {
    const url = `/3/movie/${movieId}/similar?language=en-US&page=${page}`;

    try {
        const response = await fetchJSON<RawMoviesResponse>(url);
        return formatMovies(response.results);
    } catch (error) {
        console.error("Failed to fetch similar movies:", error);
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

export const getMovieTrailers = async (
    id: string | undefined,
): Promise<MovieTrailer[]> => {
    const url = `/3/movie/${id}/videos?language=en-US`;

    try {
        const result = await fetchJSON<RawMovieTrailer>(url);
        console.log(result);
        const filtered = result.results.filter(
            (data) => data.type === "Trailer",
        );
        return formatMovieTrailer(filtered);
    } catch (error) {
        console.error("Failed to fetch movie trailer:", error);
        throw error;
    }
};

export const searchMovies = async (query: string) => {
    const url = `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

    try {
        const response = await fetchJSON<RawMoviesResponse>(url);
        return formatMovies(response.results);
    } catch (error) {
        console.error("Failed to search movies:", error);
        throw error;
    }
};
