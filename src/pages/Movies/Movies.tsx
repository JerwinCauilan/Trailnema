import { useEffect, useState } from 'react';
import { baseApi } from '../../api/axiosInstance';
import { Category } from '../../utils/constant';
import { MovieCardType } from '../../utils/type';
import MovieList from '../../components/Home/MovieList';
import LoadMore from '../../components/Button/LoadMore';

interface PageType {
    [key: string]: number
}

function Movies() {
    const categoryName = Category[0].name;
    const [filter, setFilter] = useState(categoryName);
    const [nowPlaying, setNowPlaying] = useState<MovieCardType[]>([]);
    const [popular, setPopular] = useState<MovieCardType[]>([]);
    const [topRated, setTopRated] = useState<MovieCardType[]>([]);
    const [upcoming, setUpcoming] = useState<MovieCardType[]>([]);
    const [page, setPage] = useState<PageType>({ "now_playing": 1, "popular": 1, "top_rated": 1, "upcoming": 1 });
    // const [movieData, setMovieData] = useState<Record<string, MovieCardType[]>>({});

    const toggleSelection = (item: string) => {
        setFilter(item);
    };

    const fetchMovies = async (path: string, page: number) => {
        try {
            const response = await baseApi.get(`/3/movie/${path}?language=en-US&page=${page}`);
            switch (path) {
                case "now_playing":
                    setNowPlaying(prev => [ ...prev, ...response.data.results ]);
                    break;
                case "popular":
                    setPopular(prev => [ ...prev, ...response.data.results ]);
                    break;
                case "top_rated":
                    setTopRated(prev => [ ...prev, ...response.data.results ]);
                    break;
                case "upcoming":
                    setUpcoming(prev => [ ...prev, ...response.data.results ]);
                    break;
                default:
                    break;
            }
        } catch (err) {
            console.error("Error fetching movies page",err);
        }
    };

    useEffect(() => {
        // const current = Category.find(item => item.name === filter);

        // if (!current) return;

        // If data already exists, don't fetch again (optional optimization)
        // if (movieData[current.path]) return;

        // const fetchMovies = async () => {
        //     try {
        //         const response = await baseApi.get(`/3/movie/${current.path}?language=en-US&page=1`);
        //         setMovieData(prev => ({
        //             ...prev,
        //             [current.path]: response.data.results
        //         }));
        //     } catch (err) {
        //         console.error("Error fetching movies page", err);
        //     }
        // };

        // fetchMovies();

        const current = Category.filter(item => item.name === filter);

        fetchMovies(current[0].path, 1);
    }, [filter]);

    // const currentCategory = Category.find(item => item.name === filter);
    // const currentMovies = currentCategory ? movieData[currentCategory.path] : [];

    const handleLoadMore = () => {
        const currentCategory = Category.find(item => item.name === filter);
        console.log(currentCategory);
        console.log(currentCategory?.path);
        if (currentCategory) {
            setPage(prev => ({
                ...prev, [currentCategory.path]: prev[currentCategory.path] + 1
            }));
            fetchMovies(currentCategory.path, page[currentCategory.path] + 1)
        }
    };
    
    return (
        <div className="w-[90%] mx-auto mt-4">
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-yellow-500">Explore Movies</h1>
            <div className="flex flex-wrap mt-2">
                {Category.map(item => (
                    <div key={item.id}>
                        <button onClick={() => toggleSelection(item.name)} className="md:text-base sm:text-sm text-xs font-semibold lg:w-44 md:w-40 sm:w-36 h-10 hover:bg-[#121212] p-2">{item.name}</button>
                        <div className={`h-0.5 bg-blue-400 mx-auto ${filter === item.name ? "w-full" : "w-0"} duration-200`}></div>
                    </div>
                ))}
            </div>

            {filter == "Now Playing" && <MovieList movies={nowPlaying} />}
            {filter == "Popular" && <MovieList movies={popular} />}
            {filter == "Top Rated" && <MovieList movies={topRated} />}
            {filter == "Upcoming" && <MovieList movies={upcoming} />}

            <LoadMore onClick={handleLoadMore}/>

            {/* {currentMovies && <MovieList movies={currentMovies} />} */}
        </div>
    )
}

export default Movies
