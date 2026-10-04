import QueryProvider from "./providers/QueryProvider";
import ThemeProvider from "./providers/ThemeProvider";
import Router from "./routes/Router";

const App = () => {
    return (
        <QueryProvider>
            <ThemeProvider>
                <Router />
            </ThemeProvider>
        </QueryProvider>
    );
};

export default App;
