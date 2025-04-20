import { useEffect, useRef, useState } from 'react';
import { baseApi } from '../../api/axiosInstance';
import { CarouselMoviesType } from '../../utils/type';
import HomeCarousel from './HomeCarousel';
import HomeCarouselList from './HomeCarouselList';
import HomeCarouselSkeleton from '../Skeleton/HomeCarouselSkeleton';

function HomeSlider() {
    const [carouselMovies, setCarouselMovies] = useState<CarouselMoviesType[]>([]);
    const [selected, setSelected] = useState(0);
    const [next, setNext] = useState<number[]>([]);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (carouselMovies.length) {
            const nextIndices = [1, 2, 3].map(i => (selected + i) % carouselMovies.length);
            setNext(nextIndices);
        }
    }, [carouselMovies, selected]);

    // useEffect(() => {
    //     if (carouselMovies.length) {
    //         const index1 = (selected + 1) % carouselMovies.length;
    //         const index2 = (selected + 2) % carouselMovies.length;
    //         const index3 = (selected + 3) % carouselMovies.length;
    //         setNext([index1, index2, index3]);
    //     }
    // }, [carouselMovies, selected])

    // useEffect(() => {
    //     const myCarousel = document.getElementById("carouselExample");

    //     const handleSlide = (e) => {
    //         setSelected(e.to)
    //     }

    //     if (myCarousel) {
    //         myCarousel.addEventListener("slid.bs.carousel", handleSlide);
            
    //         return () => {
    //             myCarousel.removeEventListener("slid.bs.carousel", handleSlide);
    //         }
    //     }
    // }, []);

    useEffect(() => {
        const handleSlide = (e) => {
            setSelected(e.to);
        };
        const myCarousel = carouselRef.current;

        if (myCarousel) {
            myCarousel.addEventListener("slid.bs.carousel", handleSlide);

            return () => {
                myCarousel.removeEventListener("slid.bs.carousel", handleSlide);
            };
        }
    }, []);

    useEffect(() => {
        const fetchUpcoming = async () => {
            try {
                const response = await baseApi.get("/3/movie/upcoming?language=en-US&page=1");
                setCarouselMovies(response.data.results);
            } catch (err) {
                console.error("Error fetching upcoming movies:",err)
            }
        };
        
        fetchUpcoming();
    }, []);

    return (
        <div className="row" ref={carouselRef}>
            <div className="relative col-xl-8">
                {
                carouselMovies.length > 0 ? 
                    <div id="carouselExample" className="carousel slide h-full">
                        <HomeCarousel carouselMovies={carouselMovies} />
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                : <HomeCarouselSkeleton />
                }
            </div>

            <div className="col-xl-4 lg:block hidden">
                <HomeCarouselList next={next} carouselMovies={carouselMovies} />
            </div>
        </div>
    )
}

export default HomeSlider