import { Box } from "@mui/material";
import MovieList from "../features/MovieList/MovieList";
import Navbar from "../components/Navbar";
import HomeSlider from "../features/HomeSlider/HomeSlider";

const Home = () => {
    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Navbar />

                <Box sx={{ flex: 1, minHeight: 0 }}>
                    <HomeSlider />
                </Box>
            </Box>

            <Box
                sx={{
                    width: "100%",
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                }}
            >
                <MovieList title="Top Rated" path="top_rated" />
                <MovieList title="Now Playing" path="now_playing" />
                <MovieList title="Popular" path="popular" />
                <MovieList title="Upcoming" page={2} />
            </Box>
        </Box>
    );
};

export default Home;
