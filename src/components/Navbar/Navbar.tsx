import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useMatch } from "react-router";
import { MOVIE_CATEGORIES } from "../../utils/constant";
import SearchBar from "../Searchbar/Searchbar";
import CategoryMenu from "./CategoryMenu";

const Navbar = () => {
    const listMatch = useMatch("/movies/list/:path");
    const currentPath = listMatch?.params.path;

    const showCategoryMenu = MOVIE_CATEGORIES.some(
        (category) => category.path === currentPath,
    );

    return (
        <AppBar
            position="sticky"
            sx={{
                py: 1,
                background: "#f5f5f5",
                backdropFilter: "blur(10px)",
                height: "60px",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: { xs: 1.5, sm: 3 },
                }}
            >
                <Typography
                    fontFamily="fantasy"
                    color="textPrimary"
                    component="a"
                    href="/"
                    textTransform="uppercase"
                    sx={{
                        textDecoration: "none",
                        flexShrink: 0,
                        fontSize: { xs: "1.3rem", sm: "2.125rem" },
                    }}
                >
                    Trailnema
                </Typography>
                <SearchBar />
                {showCategoryMenu && <CategoryMenu currentPath={currentPath} />}
            </Container>
        </AppBar>
    );
};

export default Navbar;
