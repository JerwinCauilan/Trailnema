import {
    Box,
    List,
    ListItemButton,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { Star } from "lucide-react";
import { IMAGEPATH } from "../../utils/constant";
import { Movies } from "../../utils/type";
import ErrorState from "../ErrorState/ErrorState";
import SearchingSkeleton from "./SearchingSkeleton";

type SearchContentProps = {
    results?: NoInfer<Movies[]>;
    trimmedValue: string;
    isSearching: boolean;
    isError: boolean;
    onSelect: (movieId: number) => void;
    onRefetch: () => void;
};

const SearchContent = ({
    results,
    trimmedValue,
    isSearching,
    isError,
    onSelect,
    onRefetch,
}: SearchContentProps) => {
    const theme = useTheme();

    if (isError) {
        return <ErrorState message="Search failed." onRetry={onRefetch} />;
    }

    if (isSearching) return <SearchingSkeleton />;

    if (!results?.length) {
        return (
            <Typography
                color="text.secondary"
                sx={{ p: 2, textAlign: "center" }}
            >
                No results for "{trimmedValue}"
            </Typography>
        );
    }

    return (
        <List disablePadding>
            {results.map((movie) => (
                <ListItemButton
                    key={movie.id}
                    title={movie.title}
                    onClick={() => onSelect(movie.id)}
                    sx={{ gap: 1.5, alignItems: "center" }}
                >
                    <Box
                        component="img"
                        src={
                            movie.posterPath
                                ? `${IMAGEPATH}${movie.posterPath}`
                                : undefined
                        }
                        alt={movie.title}
                        sx={{
                            width: 46,
                            height: 68,
                            flexShrink: 0,
                            objectFit: "cover",
                            borderRadius: 1,
                            bgcolor: "grey.300",
                        }}
                    />
                    <Box sx={{ minWidth: 0 }}>
                        <Typography noWrap fontWeight={600}>
                            {movie.title}
                        </Typography>
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap={1}
                            color="text.secondary"
                        >
                            <Star
                                size={14}
                                color={theme.palette.warning.main}
                                fill={theme.palette.warning.main}
                            />
                            <Typography variant="body2">
                                {movie.voteAverage?.toFixed(1)}
                            </Typography>
                        </Stack>
                    </Box>
                </ListItemButton>
            ))}
        </List>
    );
};

export default SearchContent;
