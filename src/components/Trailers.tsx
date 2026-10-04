import { Box, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import YouTube from "react-youtube";
import { fetchMovieTrailers } from "../services/MovieService";
import { TrailerType } from "../utils/type";

const Trailers = ({ movieId }: Readonly<{ movieId: string }>) => {
    const {
        data: trailer,
        isLoading,
        isError,
    } = useQuery<TrailerType[]>({
        queryKey: ["movieTrailers", movieId],
        queryFn: () => fetchMovieTrailers(movieId),
        enabled: !!movieId,
    });

    const opts = {
        width: "380",
        height: "280",
    };

    return (
        <Box sx={{ mt: 20, width: "100%" }}>
            {trailer && trailer?.length > 0 && (
                <Box sx={{ mt: { sm: "1rem", md: "4rem" } }}>
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
                        }}
                    >
                        Watch Trailers
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" spacing={2}>
                        {trailer.map((link) => (
                            <Box
                                key={link.id}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mt: "1rem",
                                    flexWrap: "wrap",
                                }}
                            >
                                <YouTube videoId={link?.key} opts={opts} />
                                <Typography
                                    variant="h6"
                                    component="h1"
                                    sx={{
                                        color: "#fff",
                                    }}
                                >
                                    {link.name}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            )}
        </Box>
    );
};

export default Trailers;
