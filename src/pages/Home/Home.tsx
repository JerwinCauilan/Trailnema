import { useEffect, useState } from 'react'
import HomeSlider from '../../components/Home/HomeSlider'
import { baseApi } from '../../api/axiosInstance';
import { MovieCardType } from '../../utils/type';
import MovieList from '../../components/Home/MovieList';
import LoadMore from '../../components/Button/LoadMore';

function Home() {
    const [movies, setMovies] = useState<MovieCardType[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const fetchMovies = async (page: number) => {
            try {
                const response = await baseApi.get(`/3/movie/top_rated?language=en-US&page=${page}`);
                setMovies(prev => [ ...prev, ...response.data.results ]);
            } catch (err) {
                console.error("Error fetching top rated movies:",err);
            }
        };

        fetchMovies(page);
    }, [page]);

    const handleLoadMore = () => {
        setPage(prev => prev + 1);
    };

    return (
        <div className="xl:w-[90%] md:w-[95%] mx-auto mb-44">
            <HomeSlider/>
            <MovieList movies={movies} title="Top Rated Movies" />
            <LoadMore onClick={handleLoadMore}/>
        </div>
    )
}

export default Home
