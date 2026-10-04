import { FiThumbsUp } from "react-icons/fi";
import { imagePath } from "../../utils/constant";
import { CarouselMoviesType } from "../../utils/type";
import { Link } from "react-router";

interface HomeCarouselProps {
    carouselMovies: CarouselMoviesType[]
}

function HomeCarousel({ carouselMovies }: Readonly<HomeCarouselProps>) {

    return (
        <div className="carousel-inner h-full">
            {carouselMovies.map((movie, index) => (
                <Link to={`/details/${movie.id}`} key={movie.id}>
                    <div className={`carousel-item ${index === 0 ? "active" : ""} h-full`}>
                        <div className="relative h-full">
                            <img src={`${imagePath}${movie?.backdrop_path}`} alt="" className="w-full h-full min-h-[300px] object-cover aspect-[7/4]" />
                            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-[0.1] hover:opacity-[0.2] "></div>
                            <div className="absolute bottom-0 w-full h-24 _carouselGradient"></div>
                        </div>
            
                        <div className="md:flex absolute bottom-0 px-4 gap-4 items-end">
                            <img src={`${imagePath}${movie?.poster_path}`} alt="" className="md:w-[160px] w-[120px] aspect-[4/5]" />
                            <div className="flex flex-col gap-1">
                                {/* <h1 className="text-4xl text-white">{movie?.title}</h1>
                                <h2 className="w-[600px] text-xl line-clamp-3 text-zinc-400">{movie?.overview}</h2> */}
                                <span className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white">{movie?.title}</span>
                                <span className="w-[95%] lg:text-xl md:text-lg text-md line-clamp-3 text-zinc-400">{movie?.overview}</span>
                                <div className="flex items-center gap-1 text-zinc-400 lg:text-lg md:text-md text-sm">
                                    <FiThumbsUp />
                                    {/* <h3 className="text-lg">{movie?.vote_count}</h3> */}
                                    <span>{movie?.vote_count}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default HomeCarousel
