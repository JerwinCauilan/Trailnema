import { Box, Typography } from "@mui/material";
import { useSimilarMovies } from "../../hooks/useSimilarMovies";
import MovieCarousel from "../MovieCarousel/MovieCarousel";

const SIMILAR_MOVIE_COUNT = 20;

const SimilarMovies = ({ movieId }: Readonly<{ movieId?: string }>) => {
    const {
        data: movies,
        isLoading,
        isError,
        refetch,
    } = useSimilarMovies(movieId);

    if (!movieId || movies?.length === 0) return null;

    return (
        <Box
            component="section"
            sx={{
                mt: { xs: 6, md: 8 },
                width: "100%",
                p: { xs: 2, sm: 3 },
                bgcolor: "#F5F5F5",
                borderRadius: 2,
            }}
        >
            <Typography
                component="h2"
                sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    textAlign: "center",
                    mb: 5,
                    fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                }}
            >
                Similar Movies
            </Typography>

            <MovieCarousel
                movies={movies?.slice(0, SIMILAR_MOVIE_COUNT)}
                isLoading={isLoading}
                isError={isError}
                onRetry={() => void refetch()}
                errorMessage="Couldn't load similar movies."
            />
        </Box>
    );
};

export default SimilarMovies;
