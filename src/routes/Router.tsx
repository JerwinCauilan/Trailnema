import { createBrowserRouter, RouterProvider } from "react-router";
import Details from "../pages/Details";
import Home from "../pages/Home";
import MovieListPage from "../features/MovieListPage/MovieListPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/movies/details/:movieId",
        element: <Details />,
    },
    {
        path: "/movies/list/:path",
        element: <MovieListPage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
