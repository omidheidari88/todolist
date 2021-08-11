import produce from 'immer';

const initState = {
	entities: [
		{id: 1, text: 'Deign ui', completed: true, color: 'red'},
		{id: 2, text: 'discover state', completed: false},
		{id: 3, text: 'discover actions', completed: false},
		{id: 4, text: 'implement reducer', completed: false, color: 'blue'},
		{id: 5, text: 'Complete patterns', completed: false, color: 'red'},
	],
};

export const todosReducer = produce((state, action) => {
	switch (action.type) {
		case 'todos/todoAdded':
			state.entities.push(action.payload);
			break;

		case 'todos/todoToggled':
			state.entities.map((todo) => (todo.id === action.payload ? (todo.completed = !todo.completed) : todo));
			break;

		case 'todos/todoDeleted':
			state.entities = state.entities.filter((todo) => todo.id !== action.payload);
			break;
		default:
			return state;
	}
}, initState);

// export const todosReducer = (state = initState, action) => {
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

export const selectTodos = (state) => state.todos.entities;
