import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../utils/type";
import ErrorState from "../ErrorState/ErrorState";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardSkeleton from "../MovieCard/MovieCardSkeleton";

type MovieCarouselProps = {
    movies?: Movies[];
    isLoading: boolean;
    isError: boolean;
    onRetry: () => void;
    errorMessage?: string;
};

const MovieCarousel = ({
    movies,
    isLoading,
    isError,
    onRetry,
    errorMessage = "Couldn't load this list.",
}: MovieCarouselProps) => {
    if (isError) {
        return <ErrorState message={errorMessage} onRetry={onRetry} />;
    }

    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            style={{ width: "100%", padding: "10px 0" }}
        >
            {isLoading
                ? Array.from({ length: 20 }, (_, idx) => (
                      <SwiperSlide
                          key={`skeleton-${idx}`}
                          style={{ width: 180 }}
                      >
                          <MovieCardSkeleton />
                      </SwiperSlide>
                  ))
                : movies?.map((movie) => (
                      <SwiperSlide key={movie.id} style={{ width: 180 }}>
                          <MovieCard movies={movie} />
                      </SwiperSlide>
                  ))}
        </Swiper>
    );
};

export default MovieCarousel;
