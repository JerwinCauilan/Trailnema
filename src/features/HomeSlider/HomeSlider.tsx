import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { CirclePlay, Star } from "lucide-react";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ErrorState from "../../components/ErrorState/ErrorState";
import { getMovies } from "../../services/MovieService";
import { IMAGEPATH } from "../../utils/constant";
import HomeSliderSkeleton from "./HomeSliderSkeleton";

const HomeSlider = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const path = "upcoming";

    const {
        data: movieData,
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ["movies", path],
        queryFn: () => getMovies({ path }),
    });

    if (isLoading) return <HomeSliderSkeleton />;

    if (isError)
        return (
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ErrorState
                    message="Couldn't load movies."
                    onRetry={() => refetch()}
                />
            </Box>
        );

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                "& .swiper-pagination-bullet": {
                    backgroundColor: theme.palette.secondary.main,
                    opacity: 0.6,
                    transition: "all 0.3s ease",
                },
                "& .swiper-pagination-bullet-active": {
                    width: "1.4rem",
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.primary.main,
                    opacity: 1,
                },
            }}
        >
            <Swiper
                loop
                centeredSlides
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                style={{ width: "100%", height: "100%" }}
            >
                {movieData?.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(${IMAGEPATH}${movie.backdropPath})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                color: "#fff",
                                position: "relative",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundColor: "rgba(0,0,0,0.4)",
                                }}
                            />

                            <Box pl={10} sx={{ zIndex: 1 }}>
                                <Stack
                                    sx={{ maxWidth: "400px" }}
                                    gap={2}
                                    mb={2}
                                >
                                    <Typography variant="h3" component="h1">
                                        {movie.title}
                                    </Typography>

                                    <Typography variant="body2">
                                        {movie.overview}
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        gap={1}
                                    >
                                        <Star
                                            size={16}
                                            color={theme.palette.warning.main}
                                            fill={theme.palette.warning.main}
                                        />
                                        <Typography variant="body2">
                                            {movie.voteAverage.toFixed(1)}/10
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Button
                                    startIcon={<CirclePlay />}
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => {
                                        const target = `/movies/details/${movie?.id}`;
                                        void navigate(target);
                                    }}
                                >
                                    Watch Trailer
                                </Button>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default HomeSlider;
