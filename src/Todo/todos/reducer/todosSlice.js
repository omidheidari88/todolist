import {createAction, createReducer, createSlice} from '@reduxjs/toolkit';
// import produce from 'immer';

export const initialState = {
	entities: [
		{id: 1, text: 'Deign ui', completed: true, color: 'red'},
		{id: 2, text: 'discover state', completed: false},
		{id: 3, text: 'discover actions', completed: false},
		{id: 4, text: 'implement reducer', completed: false, color: 'blue'},
		{id: 5, text: 'Complete patterns', completed: false, color: 'red'},
	],
};
// NOTE ------------reducer with createSlice (has built in immer functionality/no need immer seperatly)  --------------------------------
const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		todoAdded(state, action) {
			state.entities.push(action.payload);
		},
		todoToggled(state, action) {
			state.entities.map((todo) =>
				todo.id === action.payload ? (todo.completed = !todo.completed) : todo,
			);
		},
		todoChangedColor(state, action) {
			state.entities.map((todo) => {
				return (
					todo.id === action.payload.todoId &&
					(todo.color = action.payload.color)
				);
			});
		},

		todoDeleted(state, action) {
			state.entities = state.entities.filter((todo) => todo.id !== action.payload);
		},
		markAllCompleted(state) {
			state.entities.map((todo) => !todo.completed && (todo.completed = true));
		},
		clearAllCompleted(state) {
			state.entities.map((todo) => todo.completed && (todo.completed = false));
		},
	},
});
export const {
	todoAdded,
	todoToggled,
	todoChangedColor,
	todoDeleted,
	markAllCompleted,
	clearAllCompleted,
} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

// NOTE ------------reducer with immer --------------------------------
// export const todosReducer = produce((state, action) => {
// 	switch (action.type) {
// 		case 'todos/todoAdded':
// 			state.entities.push(action.payload);
// 			break;
// 		case 'todos/todoToggled':
// 			state.entities.map((todo) =>
// 				todo.id === action.payload ? (todo.completed = !todo.completed) : todo,
// 			);
// 			break;
// 		case 'todos/todoChangedColor':
// 			state.entities.map(
// 				(todo) =>
// 					todo.id === action.payload.todoId &&
// 					(todo.color = action.payload.color),
// 			);
// 			break;
// 		case 'todos/todoDeleted':
// 			state.entities = state.entities.filter((todo) => todo.id !== action.payload);
// 			break;
// 		case 'todos/markAllCompleted':
// 			state.entities.map((todo) => !todo.completed && (todo.completed = true));
// 			break;
// 		case 'todos/clearAllCompleted':
// 			state.entities.map((todo) => todo.completed && (todo.completed = false));
// 			break;
// 		default:
// 			return state;
// 	}
// }, initialState);

// NOTE ------------normal reducer --------------------------------
// export const todosReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "todos/todoAdded":
//       return {
//         ...state,
//         entities: [...state.entities, action.payload],
//       };

//     case "todos/todoToggled":
//       return {
//         ...state,
//         entities: state.entities.map((todo) => {
//           if (todo.id === action.payload) {
//             return {
//               ...todo,
//               completed: !todo.completed,
//             };
//           }

//           return todo;
//         }),
//       };
//     case "todos/todoDeleted":
//       return {
//         ...state,
//         entities: state.entities.filter((todo) => todo.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// NOTE ------------reducer with createReducer --------------------------------
// const todoAdded1 = createAction('todos/todoAdded');
// const todoToggled1 = createAction('todos/todoToggled');
// export const todosReducer1 = createReducer(initialState, (builder) => {
// 	builder
// 		.addCase(todoAdded1, (state, action) => state.entities.push(action.payload))
// 		.addCase(todoToggled1, (state, action) =>
// 			state.entities.map((todo) =>
// 				todo.id === action.payload ? (todo.completed = !todo.completed) : todo,
// 			),
// 		);
// });
