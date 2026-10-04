import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const Navbar = () => {
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
            <Container maxWidth="xl">
                <Typography
                    fontFamily="fantasy"
                    color="textPrimary"
                    variant="h4"
                    component="a"
                    href="/"
                    textTransform="uppercase"
                    sx={{ textDecoration: "none", cursor: "pointer" }}
                >
                    Trailnema
                </Typography>
            </Container>
        </AppBar>
    );
};

export default Navbar;
