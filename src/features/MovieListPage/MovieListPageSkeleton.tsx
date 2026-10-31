import { Grid } from "@mui/material";
import MovieCardSkeleton from "../../components/MovieCard/MovieCardSkeleton";

const MovieListPageSkeleton = ({
    count,
    prefix,
}: {
    count: number;
    prefix: string;
}) => (
    <>
        {Array.from({ length: count }, (_, idx) => (
            <Grid
                key={`${prefix}-${idx}`}
                size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
            >
                <MovieCardSkeleton />
            </Grid>
        ))}
    </>
);

export default MovieListPageSkeleton;
