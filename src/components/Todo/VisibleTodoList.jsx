import { connect } from "react-redux";
import { toggleTodo } from "../../app/actions/todo";
import TodoList from "./List/TodoList";
import { VisibilityFilters } from "../../app/actions/todo";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos?.filter((t) => t?.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos?.filter((t) => !t?.completed);
    default:
      throw new Error("Unknowns filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state?.todos, state?.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
