import { CssBaseline } from "@mui/material";
import {
    amber,
    blue,
    deepPurple,
    green,
    grey,
    red,
} from "@mui/material/colors";
import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
} from "@mui/material/styles";
import { ReactNode, useMemo } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const themeOptions = useMemo(
        () =>
            createTheme({
                palette: {
                    primary: {
                        main: deepPurple["A400"],
                        light: deepPurple["A200"],
                        dark: deepPurple[700],
                    },
                    secondary: {
                        main: grey[300],
                        light: grey[50],
                    },
                    success: {
                        main: green[500],
                        light: "#7bf1a8",
                        dark: green[800],
                    },
                    warning: {
                        main: amber[500],
                        light: amber[100],
                    },
                    error: {
                        main: red[700],
                        light: red[300],
                    },
                    info: {
                        main: blue["A400"],
                        light: blue["A200"],
                    },
                    text: {
                        primary: "#212121",
                        secondary: "#666666",
                    },
                },
                typography: {
                    fontFamily: '"Poppins", sans-serif',

                    body1: {
                        fontSize: "1rem",
                        fontWeight: 400,
                    },

                    body2: {
                        fontSize: "0.875rem",
                        fontWeight: 400,
                    },

                    h1: {
                        fontWeight: 700,
                    },

                    h2: {
                        fontWeight: 700,
                    },

                    h3: {
                        fontWeight: 500,
                    },

                    h4: {
                        fontWeight: 500,
                    },

                    h5: {
                        fontWeight: 500,
                    },

                    h6: {
                        fontWeight: 500,
                    },
                },
            }),
        [],
    );

    return (
        <MuiThemeProvider theme={themeOptions}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
