import { Link } from "react-router";

const NotFound = () => {
    return (
        <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
            <h1>404</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default NotFound;
