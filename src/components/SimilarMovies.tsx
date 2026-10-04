import { Box, Stack, Typography } from "@mui/material";
import LoadMore from "./LoadMore";
import { useEffect, useState } from "react";
import { MovieCardType } from "../utils/type";
import { useQuery } from "@tanstack/react-query";
import { fetchSimilarMovies } from "../services/MovieService";
import CustomCard from "./CustomCard";

const SimilarMovies = ({ movieId }: Readonly<{ movieId: string }>) => {
    const [page, setPage] = useState<number>(1);
    const [allMovies, setAllMovies] = useState<MovieCardType[]>([]);

    const {
        data: movies,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["similarMovies", movieId, page],
        queryFn: () => fetchSimilarMovies(movieId, page),
    });

    /** Reset the state when the path change */
    useEffect(() => {
        setPage(1);
        setAllMovies([]);
    }, [movieId]);

    /** Update the movie list when new data is fetched */
    useEffect(() => {
        if (movies) {
            if (page === 1) {
                setAllMovies(movies);
            } else {
                setAllMovies((prev) => [...prev, ...movies]);
            }
        }
    }, [movies, page]);

    // const handleLoadMore = () => {
    //     setPage((prev) => prev + 1);
    // };

    return (
        <Box sx={{ mt: 10 }}>
            <Typography
                component="h1"
                sx={{
                    color: "#ffd100",
                    fontWeight: "bold",
                    fontSize: {
                        xs: "1.2rem",
                        sm: "1.5rem",
                        md: "1.8rem",
                    },
                    mb: 2,
                }}
            >
                Similar Movies
            </Typography>

            <Stack
                direction="row"
                gap={1.2}
                sx={{
                    flexWrap: "wrap",
                    justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                    },
                }}
            >
                {allMovies.map((movie) => (
                    <CustomCard key={movie.id} movie={movie} />
                ))}
            </Stack>
        </Box>
    );
};

export default SimilarMovies;
