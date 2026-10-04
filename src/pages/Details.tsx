import React from "react";
import { useParams } from "react-router";
import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { IMAGEPATH } from "../utils/constant";
import { getMovieDetails } from "../services/MovieService";
import Trailers from "../components/Trailers";
import SimilarMovies from "../components/SimilarMovies";
import Navbar from "../components/Navbar";
import { ChevronDown } from "lucide-react";

const Details = () => {
    const theme = useTheme();
    const { movieId } = useParams();

    const {
        data: details,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["details", movieId],
        queryFn: () => getMovieDetails(movieId || ""),
        enabled: !!movieId,
    });

    if (isLoading) {
        return (
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: `${theme.palette.common.black}`,
                    color: `${theme.palette.common.white}`,
                }}
            >
                <Navbar />
                <Box sx={{ p: 4 }}>
                    <Typography>Loading...</Typography>
                </Box>
            </Box>
        );
    }

    if (isError || !details) {
        return (
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: `${theme.palette.common.black}`,
                    color: `${theme.palette.common.white}`,
                }}
            >
                <Navbar />
                <Box sx={{ p: 4 }}>
                    <Typography>Failed to load movie details.</Typography>
                </Box>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: `${theme.palette.common.black}`,
                color: `${theme.palette.common.white}`,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Navbar />

            <Box
                flex={1}
                sx={{
                    position: "relative",
                    overflow: "hidden",

                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        minHeight: "500px",
                        backgroundImage: `url(${IMAGEPATH}${details.backdropPath})`,
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
                {/* Content */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        width: {
                            xs: "95%",
                            sm: "90%",
                            md: "85%",
                        },
                        height: "100%",
                        mx: "auto",
                        pt: {
                            xs: 6,
                            sm: 10,
                            md: 15,
                        },
                        pb: 8,
                        overflow: "hidden",
                    }}
                >
                    <Stack
                        direction={{
                            xs: "column",
                            md: "row",
                        }}
                        gap={{
                            xs: 3,
                            md: 5,
                        }}
                        alignItems={{
                            xs: "center",
                            md: "flex-end",
                        }}
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

                        <Box
                            sx={{
                                maxWidth: "900px",
                            }}
                        >
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

                            {/* Tagline */}
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
                                    fontSize: {
                                        xs: "0.70rem",
                                        md: "1rem",
                                    },
                                }}
                            >
                                Genres:
                            </Typography>
                            <Stack direction="row" gap={0.5}>
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
                                    fontSize: {
                                        xs: "0.70rem",
                                        md: "1rem",
                                    },
                                }}
                            >
                                Rating: {details.voteAverage?.toFixed(1)}
                            </Typography>

                            <Typography
                                sx={{
                                    mb: 0.5,
                                    fontSize: {
                                        xs: "0.70rem",
                                        md: "1rem",
                                    },
                                }}
                            >
                                Original Language: {details.language}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "0.70rem",
                                        md: "1rem",
                                    },
                                }}
                            >
                                Release Date: {details.releaseDate}
                            </Typography>
                        </Box>
                    </Stack>

                    {/* Additional Sections */}
                    <Box
                        flex={1}
                        width="100%"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Typography>Trailers</Typography>
                        <ChevronDown size={32} />
                    </Box>
                    {/* 
                    <Trailers movieId={movieId} />
                    <SimilarMovies movieId={movieId} />
                    */}
                </Box>
            </Box>
        </Box>
    );
};

export default Details;
