import axios from "axios";

export const baseApi = axios.create({
    baseURL: import.meta.env.BASE_URL_TMDB,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.AUTHORIZATION_KEY}`,
    },
});
