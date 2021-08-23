import {
  ADD_MOVIE_ID,
  POPULATE_MOVIE_LIST,
  PLAY_FINDER,
  CARD_NUMBER,
} from "../../Redux/Actions/types";

/*
 ** loginReducer.js
 ** Returns login state based on actions provided
 */

const initialState = {
  movieList: null,
  pickedMovieList: ["Fwe", "Feggdeg", "Vieo", "Kiko"],
  playFinder: false,
  cardNumber: 0,
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_ID:
      return {
        ...state,
        pickedMovieList: action.payload,
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
    case CARD_NUMBER:
      return {
        ...state,
        cardNumber: state.cardNumber + 1,
      };
    default:
      return state;
  }
};
export default movieListReducer;
