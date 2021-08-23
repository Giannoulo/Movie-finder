import { ADD_MOVIE_ID, POPULATE_MOVIE_LIST, PLAY_FINDER, CARD_NUMBER } from "./types";

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

export const addMovieId = () => {
  return {
    type: ADD_MOVIE_ID,
  };
};

export const playFinderFunction = () => {
  return {
    type: PLAY_FINDER,
  };
};

export const increaseCardNumber = () => {
  return {
    type: CARD_NUMBER,
  };
};
