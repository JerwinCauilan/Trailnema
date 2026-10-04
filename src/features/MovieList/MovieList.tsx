import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import ErrorState from "../../components/ErrorState/ErrorState";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieCardSkeleton from "../../components/MovieCard/MovieCardSkeleton";
import { useMovies } from "../../hooks/useMovies";

type MovieListProps = {
    title: string;
    path?: string;
    page?: number;
};

const MovieList = ({ title, path = "upcoming", page }: MovieListProps) => {
    const navigate = useNavigate();

    const {
        data: movies,
        isLoading,
        isError,
        refetch,
    } = useMovies({ path, page });

    const handleMoreClick = () => {
        void navigate(`/movies/list/${path}`, { state: { title } });
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="h5">{title}</Typography>

                <Button
                    size="small"
                    variant="text"
                    onClick={handleMoreClick}
                    sx={{ textTransform: "none" }}
                >
                    More
                </Button>
            </Box>

            {isError ? (
                <ErrorState
                    message="Couldn't load this list."
                    onRetry={() => refetch()}
                />
            ) : (
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={10}
                    style={{ width: "100%", padding: "10px 0" }}
                >
                    {isLoading
                        ? Array.from({ length: 20 }).map((_, idx) => (
                              <SwiperSlide key={idx} style={{ width: 180 }}>
                                  <MovieCardSkeleton />
                              </SwiperSlide>
                          ))
                        : movies?.map((movie) => (
                              <SwiperSlide
                                  key={movie.id}
                                  style={{ width: 180 }}
                              >
                                  <MovieCard movies={movie} />
                              </SwiperSlide>
                          ))}
                </Swiper>
            )}
        </Box>
    );
};

export default MovieList;
