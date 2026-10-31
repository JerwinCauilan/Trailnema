import { Box } from "@mui/material";
import { ReactNode } from "react";
import Navbar from "../../components/Navbar/Navbar";

const MovieDeitalsContent = ({ children }: { children: ReactNode }) => {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                bgcolor: "common.black",
                color: "common.white",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Navbar />
            {children}
        </Box>
    );
};

export default MovieDeitalsContent;
