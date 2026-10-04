import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { Star } from "lucide-react";
import "swiper/css";
import { IMAGEPATH } from "../../utils/constant";
import { Movies } from "../../utils/type";

type MovieCardProps = {
    movies: Movies;
};

const MovieCard = ({ movies }: MovieCardProps) => {
    const theme = useTheme();
    const target = `/movies/details/${movies?.id}`;

    return (
        <Card variant="outlined">
            <CardActionArea sx={{ p: 1 }} LinkComponent="a" href={target}>
                <CardMedia
                    component="img"
                    height={250}
                    image={`${IMAGEPATH}${movies.posterPath}`}
                    sx={{
                        borderRadius: ".2rem",
                        objectPosition: "center",
                    }}
                    alt={movies.title}
                />
                <CardContent sx={{ px: 0, pb: 0 }}>
                    <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {movies.title}
                    </Typography>

                    <Stack direction="row" alignItems="center" gap={1}>
                        <Star
                            size={16}
                            color={theme.palette.warning.main}
                            fill={theme.palette.warning.main}
                        />
                        <Typography variant="caption" color="textSecondary">
                            {movies.voteAverage.toFixed(1)}/10
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MovieCard;
