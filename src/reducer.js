import {combineReducers} from 'redux';
import {todosReducer} from './Todo/todos/reducer/todosSlice';
import {filtersReducer} from './Todo/filterTodo/reducer/filterSlice';
const rootReducer = combineReducers({
	todos: todosReducer,
	filters: filtersReducer,
});

export default rootReducer;
