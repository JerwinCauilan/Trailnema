export interface CarouselMoviesType {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_count: number;
}

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

export interface MovieDetailType {
    id: number
    poster_path: string
    backdrop_path: string
    original_title: string
    release_date: string
    tagline: string
    overview: string
    genres: { name: string }[]
    vote_average: number
    original_language: string
}