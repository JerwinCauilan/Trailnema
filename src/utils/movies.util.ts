import { MovieDetails, Movies, RawMovieDetails, RawMovies } from "./type";

export const formatMovies = (data: RawMovies[]): Movies[] => {
    return data.map((movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        voteCount: movie.vote_count,
        voteAverage: movie.vote_average,
        backdropPath: movie.backdrop_path,
        posterPath: movie.poster_path,
    }));
};

export const formatMovieDetails = (data: RawMovieDetails): MovieDetails => {
    return {
        id: data.id,
        title: data.original_title,
        overview: data.overview,
        tagline: data.tagline,
        genres: data.genres,
        releaseDate: data.release_date,
        voteAverage: data.vote_average,
        language: data.original_language,
        backdropPath: data.backdrop_path,
        posterPath: data.poster_path,
    };
};
