import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router";
import ErrorState from "../../components/ErrorState/ErrorState";
import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { IMAGEPATH } from "../../utils/constant";
import Trailers from "../Trailers/Trailers";
import MovieDeitalsContent from "./MovieDeitalsContent";
import MovieDetailsSkeleton from "./MovieDetailsSkeleton";

const MovieDetails = () => {
    const theme = useTheme();
    const { movieId } = useParams();

    const {
        data: details,
        isLoading,
        isError,
        refetch,
    } = useMovieDetails(movieId);

    if (isLoading) {
        return (
            <MovieDeitalsContent>
                <MovieDetailsSkeleton />
            </MovieDeitalsContent>
        );
    }

    if (isError || !details) {
        return (
            <MovieDeitalsContent>
                <Box sx={{ p: 4 }}>
                    <ErrorState
                        message="Failed to load movie details."
                        onRetry={() => void refetch()}
                    />
                </Box>
            </MovieDeitalsContent>
        );
    }

    return (
        <MovieDeitalsContent>
            <Box
                flex={1}
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",

                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        minHeight: "500px",
                        backgroundImage: details.backdropPath
                            ? `url(${IMAGEPATH}${details.backdropPath})`
                            : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        backgroundRepeat: "no-repeat",
                        opacity: 0.4,
                    },

                    "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.4) 55%, #000 100%)",
                        pointerEvents: "none",
                    },
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        position: "relative",
                        zIndex: 1,
                        width: { xs: "95%", sm: "90%", md: "85%" },
                        mx: "auto",
                        pt: { xs: 6, sm: 10, md: 15 },
                        pb: 4,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        gap={{ xs: 3, md: 5 }}
                        alignItems={{ xs: "center", md: "flex-end" }}
                    >
                        <Box
                            component="img"
                            src={`${IMAGEPATH}${details.posterPath}`}
                            alt={details.title}
                            sx={{
                                width: {
                                    xs: "180px",
                                    sm: "220px",
                                    md: "280px",
                                    lg: "320px",
                                },
                                aspectRatio: "3 / 4",
                                objectFit: "cover",
                                borderRadius: 1,
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                            }}
                        />

                        <Box sx={{ maxWidth: "900px" }}>
                            <Typography
                                component="h1"
                                sx={{
                                    fontWeight: 600,
                                    mb: 1,
                                    fontSize: {
                                        xs: "1.4rem",
                                        sm: "2.2rem",
                                        md: "2.8rem",
                                        lg: "3.5rem",
                                    },
                                }}
                            >
                                {details.title}

                                <Typography
                                    component="span"
                                    sx={{
                                        ml: 1.5,
                                        fontWeight: 400,
                                        color: `${theme.palette.secondary.dark}`,
                                        fontSize: {
                                            xs: "0.85rem",
                                            sm: "1.5rem",
                                            md: "1.8rem",
                                            lg: "2.2rem",
                                        },
                                    }}
                                >
                                    ({details.releaseDate?.substring(0, 4)})
                                </Typography>
                            </Typography>

                            {details.tagline && (
                                <Typography
                                    sx={{
                                        color: `${theme.palette.secondary.dark}`,
                                        fontStyle: "italic",
                                        mb: 2,
                                        fontSize: {
                                            xs: "0.70rem",
                                            sm: "1rem",
                                            md: "1.1rem",
                                        },
                                    }}
                                >
                                    {details.tagline}
                                </Typography>
                            )}

                            <Typography
                                sx={{
                                    lineHeight: 1.7,
                                    mb: 2,
                                    color: `${theme.palette.secondary.light}`,
                                    fontSize: {
                                        xs: "0.70rem",
                                        sm: "1rem",
                                        md: "1.1rem",
                                    },
                                }}
                            >
                                {details.overview}
                            </Typography>

                            <Typography
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: "0.70rem", md: "1rem" },
                                }}
                            >
                                Genres:
                            </Typography>
                            <Stack direction="row" gap={0.5} mb={1}>
                                {details.genres?.map((genre) => (
                                    <Chip
                                        key={genre.name}
                                        size="small"
                                        variant="outlined"
                                        label={genre.name}
                                        color="secondary"
                                        sx={{ fontSize: "0.75rem" }}
                                    />
                                ))}
                            </Stack>

                            <Typography
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: "0.70rem", md: "1rem" },
                                }}
                            >
                                Rating: {details.voteAverage?.toFixed(1)}
                            </Typography>

                            <Typography
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: "0.70rem", md: "1rem" },
                                }}
                            >
                                Original Language: {details.language}
                            </Typography>

                            <Typography
                                sx={{ fontSize: { xs: "0.70rem", md: "1rem" } }}
                            >
                                Release Date: {details.releaseDate}
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>

            <Box
                sx={{
                    width: { xs: "95%", sm: "90%", md: "85%" },
                    mx: "auto",
                    py: 4,
                }}
            >
                <Trailers movieId={movieId ?? ""} />
                <SimilarMovies movieId={movieId} />
            </Box>
        </MovieDeitalsContent>
    );
};

export default MovieDetails;
