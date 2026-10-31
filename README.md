# Trailnema

Trailnema is a movie discovery app for browsing popular, top-rated, now-playing, and upcoming movies. Search for a title, open its details, explore similar movies, and watch available trailers without leaving the app.

Movie information comes from [The Movie Database (TMDB)](https://www.themoviedb.org/), and trailers are embedded from YouTube.

## Live demo

Check out the deployed app at [trailnema.netlify.app](https://trailnema.netlify.app/).

## Features

- Browse movies by category, including Popular, Top Rated, Now Playing, and Upcoming.
- Search for movies by title.
- View movie details and recommendations for similar movies.
- Watch available movie trailers on the details page.
- Load additional movies on category pages as you scroll.

## Getting started

### Prerequisites

- Node.js and npm
- A TMDB account and API Read Access Token

### Install and configure

1. Clone the repository and enter the project directory:

    ```sh
    git clone <repository-url>
    cd trailnema
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

    If you want to install exactly the dependency versions in the lockfile, use `npm ci` instead.

3. Create a local environment file by copying `env-example.txt` to `.env`.

    PowerShell:

    ```powershell
    Copy-Item env-example.txt .env
    ```

    macOS, Linux, or Git Bash:

    ```sh
    cp env-example.txt .env
    ```

4. Open `.env` and set your TMDB API base URL and API Read Access Token:

    ```dotenv
    VITE_BASE_URL_TMDB=https://api.themoviedb.org
    VITE_AUTHORIZATION_KEY=YOUR_TMDB_API_READ_ACCESS_TOKEN
    ```

    Create or find your token in your TMDB account's API settings.

### Run the app

Start the development server:

```sh
npm run dev
```

Open the local URL printed by Vite in your terminal (usually `http://localhost:5173`).

## Other commands

| Command           | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| `npm run build`   | Type-check the project and create a production build in `dist/`.             |
| `npm run preview` | Serve the production build locally for a preview. Run `npm run build` first. |
| `npm run lint`    | Run ESLint on the project.                                                   |

## Project structure

```text
src/
├── components/       # Shared UI, such as the navbar, search, movie cards, and carousels
├── features/         # Movie-specific screens and sections
│   ├── HomeSlider/
│   ├── MovieDetails/
│   ├── MovieList/
│   ├── MovieListPage/
│   └── Trailers/
├── hooks/            # Data-fetching and UI hooks
├── pages/            # Page-level composition
├── providers/        # React Query and Material UI theme providers
├── routes/           # Application route definitions
├── services/         # TMDB movie API operations
└── utils/            # API helpers, movie formatting, constants, and types
```
