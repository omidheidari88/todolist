import {createAction, nanoid} from '@reduxjs/toolkit';

// export const todoAdded = (text) => ({
// 	type: 'todos/todoAdded',
// 	payload: {id: 6, text, completed: false},
// });
export const todoAdded = createAction('todos/todoAdded', (text) => {
	return {
		payload: {id: nanoid(), completed: false, text},
	};
});

// export const todoToggled = (todoId) => ({
// 	type: 'todos/todoToggled',
// 	payload: todoId,
// });
export const todoToggled = createAction('todos/todoToggled');

// export const todoDeleted = (todoId) => ({
// 	type: 'todos/todoDeleted',
// 	payload: todoId,
// });
export const todoDeleted = createAction('todos/todoDeleted');

// export const todoChangedColor = (todoId, color) => {
// 	return {
// 		type: 'todos/todoChangedColor',
// 		payload: {todoId, color},
// 	};
// };
export const todoChangedColor = createAction(
	'todos/todoChangedColor',
	(todoId, color) => {
		return {
			payload: {todoId, color},
		};
	},
);

// export const markAllCompletedTodos = () => ({
// 	type: 'todos/markAllCompleted',
// });
export const markAllCompleted = createAction('todos/markAllCompleted');
export const clearAllCompleted = createAction('todos/clearAllCompleted');
