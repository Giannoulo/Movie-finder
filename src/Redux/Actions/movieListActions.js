import {
  ADD_PICKED_MOVIE,
  POPULATE_MOVIE_LIST,
  PLAY_FINDER,
  CARD_NUMBER,
  DARK_MODE,
  RESTART_FINDER,
} from "./types";

/*
 ** movieListActions.js
 ** Controls actions around the picked movie list used in the application.
 */

export const populateMovieList = (movieList) => {
  return {
    type: POPULATE_MOVIE_LIST,
    payload: movieList,
  };
};

export const addPickedMovie = (movie) => {
  return {
    type: ADD_PICKED_MOVIE,
    payload: movie,
  };
};

export const playFinderFunction = () => {
  return {
    type: PLAY_FINDER,
  };
};

export const restartFinderFunction = () => {
  return {
    type: RESTART_FINDER,
  };
};

export const increaseCardNumber = () => {
  return {
    type: CARD_NUMBER,
  };
};

export const toggleDarkMode = () => {
  return {
    type: DARK_MODE,
  };
};
