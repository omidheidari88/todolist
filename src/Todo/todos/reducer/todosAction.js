export const todoAdded = (text) => ({
	type: 'todos/todoAdded',
	payload: {id: 6, text, completed: false},
});

export const todoToggled = (todoId) => ({
	type: 'todos/todoToggled',
	payload: todoId,
});

export const todoDeleted = (todoId) => ({
	type: 'todos/todoDeleted',
	payload: todoId,
});

export const todoChangedColor = (color) => {
	console.log(color);
	return {
		type: 'todos/todoChangedColor',
		payload: color,
	};
};
