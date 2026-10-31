import wretch from "wretch";

export const getRandInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const baseApi = wretch(import.meta.env.VITE_BASE_URL_TMDB).headers({
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION_KEY}`,
});

export const fetchJSON = <T>(url: string): Promise<T> => {
    return baseApi.url(url).get().json<T>();
};
