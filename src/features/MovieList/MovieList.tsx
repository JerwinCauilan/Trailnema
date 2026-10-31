import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
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
                {!(isLoading || isError) && (
                    <Button
                        size="small"
                        variant="text"
                        onClick={handleMoreClick}
                        sx={{ textTransform: "none" }}
                    >
                        More
                    </Button>
                )}
            </Box>

            <MovieCarousel
                movies={movies}
                isLoading={isLoading}
                isError={isError}
                onRetry={() => void refetch()}
            />
        </Box>
    );
};

export default MovieList;
