import { FiThumbsUp } from "react-icons/fi"
import { Link } from "react-router"
import { imagePath } from "../../utils/constant"
import { CarouselMoviesType } from "../../utils/type"

interface CarouselMiniCardProps {
    carouselMovies: CarouselMoviesType[]
    item: number
    index: number
}

function CarouselMiniCard({ carouselMovies, item, index }: Readonly<CarouselMiniCardProps>) {
    return (
        <Link to={`/details/${carouselMovies[item].id}`} className="col-xl-12 col">
            <div key={index} className="flex gap-2">
                <img src={`${imagePath}${carouselMovies[item]?.poster_path}`} className="w-[100px] aspect-[4/6]" alt="" />
                <div className="flex flex-col justify-between py-2">
                    <div className="leading-5">
                        {/* <h1>{carouselMovies[item]?.title}</h1> */}
                        {/* <h1 className="text-md text-zinc-300 line-clamp-3">{carouselMovies[item]?.overview}</h1> */}
                        <span>{carouselMovies[item]?.title}</span>
                        <span className="text-md text-zinc-300 line-clamp-3">{carouselMovies[item]?.overview}</span>
                    </div>

                    <div className="flex gap-1 text-center">
                        <FiThumbsUp/>
                        {/* <h2>{carouselMovies[item]?.vote_count}</h2> */}
                        <span>{carouselMovies[item]?.vote_count}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CarouselMiniCard
