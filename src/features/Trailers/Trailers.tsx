import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Card, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import YouTube from "react-youtube";
import { useMovieTrailers } from "../../hooks/useMovieTrailer";

type CardContentProps = {
    isTrailerActive: boolean;
    trailerKey: string;
    trailerName: string;
    onPlay: () => void;
};

const CardContent = ({
    isTrailerActive,
    trailerKey,
    trailerName,
    onPlay,
}: CardContentProps) => {
    if (isTrailerActive)
        return (
            <YouTube
                title={trailerName}
                videoId={trailerKey}
                opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                        autoplay: 1,
                        controls: 1,
                        rel: 0,
                        playsinline: 1,
                    },
                }}
                style={{ width: "100%", height: "100%" }}
                iframeClassName="trailer-iframe"
            />
        );

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <Box
                component="img"
                src={`https://img.youtube.com/vi/${trailerKey}/hqdefault.jpg`}
                alt={trailerName}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
            <IconButton
                aria-label={`Play-button-${trailerName}`}
                onClick={onPlay}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#fff",
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                        bgcolor: "rgba(0, 0, 0, 0.9)",
                    },
                }}
            >
                <PlayArrowIcon fontSize="large" />
            </IconButton>
        </Box>
    );
};

const Trailers = ({ movieId }: Readonly<{ movieId?: string }>) => {
    const [activeTrailer, setActiveTrailer] = useState<string | null>(null);

    const { data: trailers } = useMovieTrailers(movieId ?? "");

    if (!trailers?.length) return null;

    return (
        <Box
            component="section"
            sx={{
                mt: 3,
                width: "100%",
                p: { xs: 2, sm: 3 },
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
                Watch Trailers
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gap: 2,
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, minmax(0, 1fr))",
                        lg: "repeat(3, minmax(0, 1fr))",
                    },
                }}
            >
                {trailers.map((trailer) => (
                    <Card
                        key={trailer.id}
                        elevation={0}
                        sx={{
                            bgcolor: "rgba(0, 0, 0, 0.7)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderRadius: 2,
                            overflow: "hidden",
                            transition:
                                "transform 0.2s ease, border-color 0.2s ease",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                borderColor: "primary.main",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                aspectRatio: "16 / 9",
                                bgcolor: "common.black",
                            }}
                        >
                            <CardContent
                                isTrailerActive={activeTrailer === trailer.key}
                                trailerKey={trailer.key}
                                trailerName={trailer.name}
                                onPlay={() => setActiveTrailer(trailer.key)}
                            />
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Trailers;
