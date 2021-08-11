import { combineReducers } from "redux";
import { todosReducer } from "./Todo/todos/reducer/todosSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
