export type RawMoviesResponse = {
    results: RawMovies[];
    page: number;
    total_pages: number;
    total_results: number;
};

export type RawMovies = {
    id: number;
    title: string;
    overview: string;
    vote_count: number;
    vote_average: number;
    backdrop_path: string;
    poster_path: string;
};

export type Movies = {
    id: number;
    title: string;
    overview: string;
    voteCount: number;
    voteAverage: number;
    backdropPath: string;
    posterPath: string;
};

export type RawMovieDetails = {
    id: number;
    original_title: string;
    overview: string;
    tagline: string;
    genres: { name: string }[];
    release_date: string;
    vote_average: number;
    original_language: string;
    backdrop_path: string;
    poster_path: string;
};

export type MovieDetails = {
    id: number;
    title: string;
    overview: string;
    tagline: string;
    genres: { name: string }[];
    releaseDate: string;
    voteAverage: number;
    language: string;
    backdropPath: string;
    posterPath: string;
};

export type GetMoviesType = {
    path: string;
    page?: number;
    title?: string;
};

export interface MovieCardType {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    original_language: string;
}

export interface CategoryType {
    id: number;
    name: string;
    path: string;
}

export type FetchMoviesType = {
    path: string;
    page?: number;
    title?: string;
};

export type TrailerType = {
    key: string;
    id: string;
    name: string;
};
