import axios from "axios";

export const baseApi = axios.create({
    baseURL: "https://api.themoviedb.org",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzEwODI4YjMwNjExN2RhOWQyM2Y2MTY2ZDE2ZTlkMCIsIm5iZiI6MTc0NDg3ODA0MS42ODYsInN1YiI6IjY4MDBiOWQ5NGY1OWMyNGMwZGFkMTYxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7JEuBMvx0UsWm7Vaw2Cl4_8jsymqQkLQdUFyUQgVlS0'
    }
});