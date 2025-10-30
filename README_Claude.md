
# Project Structure for Claude

This document outlines the folder and file structure of the Spotify React Web Client project to provide context for understanding the codebase.

## Root Directory

- **`.gitignore`**: Specifies files and folders that Git should ignore.
- **`docker-compose.yml`**: Defines the services, networks, and volumes for a multi-container Docker application.
- **`Dockerfile`**: Contains instructions to build the Docker image for the application.
- **`package.json`**: Lists the project dependencies and scripts.
- **`tsconfig.json`**: The configuration file for the TypeScript compiler.
- **`yarn.lock`**: A file that records the exact versions of your dependencies.
- **`README.md`**: The main project README file.

## `/public`

This directory contains the static assets that are publicly served.

- **`index.html`**: The main HTML page for the single-page application (SPA).
- **`favicon.ico` / `favicon*.png`**: Application icons.
- **`/images`**: Publicly available images used within the application UI.

## `/src`

This is the main directory containing all the application's source code.

### `/src/components`

This folder contains reusable React components used throughout the application.

- **`/Actions`**: Components related to user actions, such as adding a song to a library or a playlist.
- **`/Button`, `/Chip`, `/Slider`, `/Tooltip`**: Basic, reusable UI components.
- **`/Drawers`**: Components for slide-out panels, like the "Library" and "Playing Now" views.
- **`/Layout`**: The main application layout structure, including the navigation bar and playing bar.
- **`/Lists`**: Components for displaying data in various list formats, like grids of cards or rows.
- **`/Modals`**: Components for creating dialog boxes (e.g., Login, Edit Playlist).
- **`/SongsTable`**: A specific component for rendering the main song list view, including headers and individual rows.

### `/src/constants`

Contains constant values used across the application.

- **`languages.ts`**: Defines the supported languages for internationalization.
- **`spotify.ts`**: Spotify-related constants, such as API endpoints or scopes.

### `/src/i18n`

This directory handles the internationalization (i18n) of the application.

- **`/en`**: Contains English translation files, broken down by feature (album, artist, playlist, etc.).
- **`/es`**: Contains Spanish translation files, with the same structure as the English ones.
- **`index.ts`**: Initializes and configures the i18next library.

### `/src/interfaces`

This is a critical directory that contains all TypeScript type and interface definitions (`.d.ts` files). These files define the shape of the data objects used in the application, such as `Album`, `Artist`, `Track`, `Playlist`, etc., which are based on the Spotify API responses.

### `/src/pages`

Contains the top-level components for each "page" or view of the application. These are typically mapped to routes.

- **`/Album`**: The page that displays a single album's details and tracklist.
- **`/Artist`**: The page for a single artist, showing their top tracks, albums, etc.
- **`/Home`**: The main landing page of the application.
- **`/LikedSongs`**: The page that displays the user's saved or "liked" songs.
- **`/Playlist`**: The page for viewing a single playlist.
- **`/Search`**: The search page with its results.

### `/src/services`

This directory contains modules responsible for making API calls to the Spotify Web API. Each file typically groups endpoints related to a specific resource.

- **`albums.ts`**: Functions for fetching album data.
- **`artist.ts`**: Functions for fetching artist data.
- **`auth.ts`**: Handles the authentication flow with the Spotify API.
- **`player.ts`**: Functions for controlling the music player (play, pause, next, etc.).
- **`playlists.ts`**: Functions for fetching and modifying playlists.
- **`search.ts`**: Functions for performing searches.

### `/src/store`

This folder contains the Redux Toolkit setup for state management.

- **`store.ts`**: The main Redux store configuration.
- **`slices`**: Although not detailed in the provided structure, this directory would contain Redux "slices" for managing different parts of the application's state (e.g., `playerSlice`, `userSlice`).

### `/src/styles`

Contains the SASS (`.scss`) stylesheets for the application.

- **`App.scss`**: Global application styles.
- **`variables.scss`**: SASS variables (colors, fonts, etc.) used across other style files.
- Other files are named after the components or pages they style (e.g., `PlaylistPage.scss`, `Artist.scss`).

### `/src/utils`

A collection of utility functions that can be reused throughout the project.

- **`capitalize.ts`**: A function to capitalize strings.
- **`localstorage.ts`**: Helper functions for interacting with the browser's local storage.
- **`isMobile.ts`**: A utility to check if the user is on a mobile device.
