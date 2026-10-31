import { Box, Grid, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router";
import ErrorState from "../../components/ErrorState/ErrorState";
import MovieCard from "../../components/MovieCard/MovieCard";
import Navbar from "../../components/Navbar/Navbar";
import { useMovieListPage } from "../../hooks/useMovieListPage";
import MovieListPageSkeleton from "./MovieListPageSkeleton";

const INITIAL_SKELETONS = 20;
const NEXT_PAGE_SKELETONS = 6;

const InitialMovieError = ({ onRetry }: { onRetry: () => void }) => {
    return <ErrorState message="Couldn't load movies." onRetry={onRetry} />;
};

const MovieListPage = () => {
    const { path = "" } = useParams<{ path: string }>();
    const title = useLocation().state?.title as string | undefined;

    const {
        movies,
        isLoading,
        isFetchingNextPage,
        isError,
        isFetchNextPageError,
        hasNextPage,
        loadMoreRef,
        retry,
    } = useMovieListPage(path);

    const isInitialError = isError && !isFetchNextPageError;

    return (
        <Box sx={{ width: "100%" }}>
            <Navbar />

            <Box sx={{ p: 5 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                    {title}
                </Typography>

                {isInitialError && <InitialMovieError onRetry={retry} />}

                <Grid container spacing={2}>
                    {isLoading ? (
                        <MovieListPageSkeleton
                            count={INITIAL_SKELETONS}
                            prefix="initial"
                        />
                    ) : (
                        movies.map((movie) => (
                            <Grid
                                key={movie.id}
                                size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                            >
                                <MovieCard movies={movie} />
                            </Grid>
                        ))
                    )}

                    {isFetchingNextPage && (
                        <MovieListPageSkeleton
                            count={NEXT_PAGE_SKELETONS}
                            prefix="next"
                        />
                    )}
                </Grid>

                {isFetchNextPageError && (
                    <ErrorState
                        message="Couldn't load more movies."
                        onRetry={retry}
                    />
                )}

                <Box ref={loadMoreRef} sx={{ py: 2, textAlign: "center" }}>
                    {!hasNextPage && !isLoading && !isError && (
                        <Typography variant="body2" color="text.secondary">
                            No more movies to show
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default MovieListPage;
