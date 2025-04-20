import { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosInstance";
import { MovieCardType } from "../../utils/type";
import MovieList from "../Home/MovieList";
import LoadMore from "../Button/LoadMore";

function SimilarMovies({ movieId }: Readonly<{ movieId: string }>) {
    const [movies, setMovies] = useState<MovieCardType[]>([]);
    const [page, setPage] = useState<number>(0);

    const handleLoadMore = () => {
        fetchSimilarMovies(page + 1);
        setPage(prev => prev + 1)
    };

    const fetchSimilarMovies = async (page: number) => {
        try {
            const response = await baseApi.get(`/3/movie/${movieId}/similar?language=en-US&page=${page}`);
            setMovies(prev => [...prev, ...response.data.results]);
        } catch (err) {
            console.error("Error fetching similar movies:",err);
        }
    };

    useEffect(() => {
        fetchSimilarMovies(1);
        setPage(prev => prev + 1)
    }, [movieId]);



    return (
        <div>
            <MovieList movies={movies} title="Similar Movies" />
            <LoadMore onClick={handleLoadMore}/>
        </div>
    )
}

export default SimilarMovies
