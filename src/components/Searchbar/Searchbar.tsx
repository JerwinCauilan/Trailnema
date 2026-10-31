import {
    Box,
    ClickAwayListener,
    IconButton,
    InputBase,
    Paper,
} from "@mui/material";
import { Search, X } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { useNavigate } from "react-router";
import { useDebounced } from "../../hooks/useDebounced";
import { useSearchMovies } from "../../hooks/useSearchMovies";
import SearchContent from "./SearchContent";

const MIN_CHARS = 2;

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const [open, setOpen] = useState(false);

    const trimmedValue = searchValue.trim();
    const debounced = useDebounced(trimmedValue);

    const {
        data: results,
        isFetching,
        isError,
        refetch,
    } = useSearchMovies(debounced);

    const showSearchContent = open && trimmedValue.length >= MIN_CHARS;
    const isSearching = trimmedValue !== debounced || (isFetching && !results);

    const onClose = () => setOpen(false);

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") onClose();
        if (event.key === "Enter" && results?.[0])
            handleSelectedMovie(results[0].id);
    };

    const handleSelectedMovie = (id: number) => {
        onClose();
        setSearchValue("");
        void navigate(`/movies/details/${id}`);
    };

    return (
        <ClickAwayListener onClickAway={onClose}>
            <Box
                sx={{
                    flex: 1,
                    minWidth: 0,
                    maxWidth: { sm: 420, md: 500 },
                    mx: { xs: 1, sm: 2 },
                    position: { xs: "static", sm: "relative" },
                }}
            >
                <Box
                    role="search"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "common.white",
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 5,
                        pl: 1.5,
                        pr: 0.5,
                        height: 40,
                    }}
                >
                    <Search size={18} />
                    <InputBase
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                            setOpen(true);
                        }}
                        onFocus={() => setOpen(true)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search movies..."
                        inputProps={{
                            "aria-label": "Search movies",
                            "aria-expanded": showSearchContent,
                        }}
                        sx={{
                            flex: 1,
                            minWidth: 0,
                            ml: 1,
                            color: "text.primary",
                        }}
                    />
                    {searchValue && (
                        <IconButton
                            size="small"
                            aria-label="Clear search"
                            onClick={() => {
                                setSearchValue("");
                                onClose();
                            }}
                        >
                            <X size={16} />
                        </IconButton>
                    )}
                </Box>

                {showSearchContent && (
                    <Paper
                        elevation={5}
                        sx={{
                            position: "absolute",
                            top: "100%",
                            left: { xs: 0, sm: 0 },
                            right: { xs: 0, sm: 0 },
                            mt: { xs: 0, sm: 1 },
                            maxHeight: { xs: "70vh", sm: 380 },
                            overflowY: "auto",
                            borderRadius: { xs: 0, sm: 2 },
                            zIndex: 1,
                        }}
                    >
                        <SearchContent
                            results={results}
                            trimmedValue={trimmedValue}
                            isSearching={isSearching}
                            isError={isError}
                            onSelect={handleSelectedMovie}
                            onRefetch={() => refetch()}
                        />
                    </Paper>
                )}
            </Box>
        </ClickAwayListener>
    );
};

export default SearchBar;
