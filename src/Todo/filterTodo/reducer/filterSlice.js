import produce from "immer";
import { sele } from "../../todos/reducer/todosSlice";

export const filterReducer = produce((state, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      state.entities.push(action.payload);
      break;

    case "todos/todoToggled":
      state.entities.map((todo) => (todo.id === action.payload ? (todo.completed = !todo.completed) : todo));
      break;

    case "todos/todoDeleted":
      return {
        ...state,
        entities: state.entities.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}, initState);
