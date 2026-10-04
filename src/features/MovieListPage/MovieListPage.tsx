import { Box, Grid, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router";
import ErrorState from "../../components/ErrorState/ErrorState";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieCardSkeleton from "../../components/MovieCard/MovieCardSkeleton";
import Navbar from "../../components/Navbar";
import { useMovieListPage } from "../../hooks/useMovieListPage";

const MovieListPage = () => {
    const { path } = useParams<{ path: string }>();
    const location = useLocation();
    const title = (location.state as { title?: string })?.title;

    const {
        movies,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        loadMoreRef,
        isError,
        isFetchNextPageError,
        retry,
    } = useMovieListPage(path ?? "");

    const isInitialError = isError && !isFetchNextPageError;

    return (
        <Box sx={{ width: "100%" }}>
            <Navbar />

            <Box sx={{ width: "100%", p: 5 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                    {title}
                </Typography>

                {isInitialError ? (
                    <ErrorState
                        message="Couldn't load movies."
                        onRetry={retry}
                    />
                ) : (
                    <>
                        <Grid container spacing={2}>
                            {isLoading
                                ? Array.from({ length: 20 }, (_, idx) => (
                                      <Grid
                                          key={`skeleton-initial-${idx + 1}`}
                                          size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                                      >
                                          <MovieCardSkeleton />
                                      </Grid>
                                  ))
                                : movies.map((movie, idx) => (
                                      <Grid
                                          key={`${movie.id}-${idx}`}
                                          size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                                      >
                                          <MovieCard movies={movie} />
                                      </Grid>
                                  ))}

                            {isFetchingNextPage &&
                                Array.from({ length: 20 }, (_, idx) => (
                                    <Grid
                                        key={`skeleton-next-${idx + 1}`}
                                        size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                                    >
                                        <MovieCardSkeleton />
                                    </Grid>
                                ))}
                        </Grid>

                        {isFetchNextPageError && (
                            <ErrorState
                                message="Couldn't load more movies."
                                onRetry={retry}
                            />
                        )}

                        {/* Sentinel element that triggers loading the next page when it scrolls into view */}
                        <Box ref={loadMoreRef} sx={{ py: 2 }}>
                            {!hasNextPage && !isLoading && !isError && (
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ textAlign: "center" }}
                                >
                                    No more movies to show
                                </Typography>
                            )}
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default MovieListPage;
