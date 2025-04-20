import { CategoryType } from "./type";

export const imagePath = "https://image.tmdb.org/t/p/original";

export const Category: CategoryType[] = [
    {
        id: 1,
        name: "Now Playing",
        path: "now_playing"
    },
    {
        id: 2,
        name: "Popular",
        path: "popular"
    },
    {
        id: 3,
        name: "Top Rated",
        path: "top_rated"
    },
    {
        id: 4,
        name: "Upcoming",
        path: "upcoming"
    },
];
