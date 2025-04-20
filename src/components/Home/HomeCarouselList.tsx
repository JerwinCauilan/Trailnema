import { CarouselMoviesType } from "../../utils/type";
import CarouselMiniCardSkeleton from "../Skeleton/CarouselMiniCardSkeleton";
import CarouselMiniCard from "./CarouselMiniCard";

interface HomeCarouselListProps {
    next: number[]
    carouselMovies: CarouselMoviesType[]
}

function HomeCarouselList({ next, carouselMovies }: Readonly<HomeCarouselListProps>) {
    
    return (
        <div>
            {/* <h1 className="text-xl font-bold text-yellow-500">Up Next</h1> */}
            <span className="text-xl font-bold text-yellow-500">Up Next</span>
            <div className="row">
                {
                    carouselMovies.length > 0 ? next.map((item, index) => (
                        <CarouselMiniCard carouselMovies={carouselMovies} item={item} index={item} />
                    ))
                    : [...Array(3)].map(item => <CarouselMiniCardSkeleton />)
                }
            </div>
        </div>
    )
}

export default HomeCarouselList
