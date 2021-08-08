import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "./reducers/todo/todo";
import visibilityFilter from "./reducers/todo/visibilityFilter";
import counterReducer from "./reducers/counter/counter";
import { composeWithDevTools } from "redux-devtools-extension";
export const reducers = combineReducers({
  todos,
  visibilityFilter,
  counter: counterReducer,
});

// export const storeCounter = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
export const store = createStore(reducers, composeWithDevTools());
