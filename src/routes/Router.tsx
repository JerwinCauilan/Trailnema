import { createBrowserRouter, RouterProvider } from "react-router";
import MovieDetails from "../features/MovieDetails/MovieDetails";
import MovieListPage from "../features/MovieListPage/MovieListPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/movies/details/:movieId",
        element: <MovieDetails />,
    },
    {
        path: "/movies/list/:path",
        element: <MovieListPage />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
