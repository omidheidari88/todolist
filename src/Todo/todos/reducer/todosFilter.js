import {filterStatusActions as actions} from '../../filterTodo/reducer/filterAction';

export const todosFilter = (state) => {
	//get all state
	const todos = state.todos.entities;
	const {colors, activeFilter} = state.filters;
	//check activeFilter
	const showCompleted = activeFilter === actions.COMPELTED;
	const showAll = activeFilter === actions.ALL;
	//return todos
	return todos?.filter((todo) => {
		const filterByStatus = showAll || todo.completed === showCompleted;
		const filterBycolor = colors.length === 0 || colors.includes(todo.color);
		return filterByStatus && filterBycolor;
	});
};
