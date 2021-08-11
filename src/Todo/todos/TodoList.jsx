import TodoListItem from './TodoListItem';
import {useSelector} from 'react-redux';
import {selectTodos} from './reducer/todosSlice';
import {filterState} from '../filterTodo/reducer/filterSlice';

const TodoList = () => {
	const todos = useSelector(selectTodos);
	const {colors} = useSelector(filterState);
	const renderedListItems = todos?.map((todo) => {
		// const {color} = todo;
		// if (colors.includes(color)) {
		// 	console.log('');
		// }

		return <TodoListItem key={todo.id} todo={todo} />;
	});

	return <ul className='todo-list'>{renderedListItems}</ul>;
};

export default TodoList;
