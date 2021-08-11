export const changeFilterStatus = (filter) => {
	console.log(filter);
	return {
		type: 'filter/filterStatus',
		payload: filter,
	};
};

export const todoToggled = (todoId) => ({
	type: 'todos/todoToggled',
	payload: todoId,
});

export const todoDeleted = (todoId) => ({
	type: 'todos/todoDeleted',
	payload: todoId,
});

export const filterStatusActions = {
	ALL: 'All',
	ACTIVE: 'Active',
	COMPELTED: 'Completed',
};
