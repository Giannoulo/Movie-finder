import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Redux/Reducers";

/*
** Store.js
** Store holds the whole state tree of your application. 
*/

export const middleware = [thunk];

let store;

if (
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
) {
  store = createStore(
    rootReducer,
    // compose is used when multiple enhancers are present
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
}
export default store;
