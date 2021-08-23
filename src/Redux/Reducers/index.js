import { combineReducers } from "redux";
import movieListReducer from "./movieListReducer";

/*
** index.js
** combinereducers is used when multiple reducers are present
*/

export default combineReducers({
  movies:movieListReducer,
});
