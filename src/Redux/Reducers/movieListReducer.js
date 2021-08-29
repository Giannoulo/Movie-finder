import {
  ADD_PICKED_MOVIE,
  POPULATE_MOVIE_LIST,
  PLAY_FINDER,
  CARD_NUMBER,
  DARK_MODE,
  RESTART_FINDER,
} from "../../Redux/Actions/types";

/*
 ** movieReducer.js
 ** Returns state based on actions provided
 */

const initialState = {
  movieList: null,
  pickedMovieList: [],
  playFinder: false,
  cardNumber: 0,
  darkMode: false,
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PICKED_MOVIE:
      return {
        ...state,
        pickedMovieList: [...state.pickedMovieList, action.payload],
      };
    case POPULATE_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload,
      };
    case PLAY_FINDER:
      return {
        ...state,
        playFinder: true,
      };
    case RESTART_FINDER:
      return {
        ...state,
        playFinder: false,
        pickedMovieList: [],
        cardNumber: 0,
      };
    case CARD_NUMBER:
      return {
        ...state,
        cardNumber: state.cardNumber + 1,
      };
    case DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};
export default movieListReducer;
