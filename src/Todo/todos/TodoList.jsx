import TodoListItem from './TodoListItem';
import {useSelector} from 'react-redux';
import {todosFilter} from './reducer/todosFilter';

const TodoList = () => {
	const state = useSelector((state) => state);
	const todos = todosFilter(state);
	const renderedListItems = todos?.map((todo) => {
		return <TodoListItem key={todo.id} todo={todo} />;
	});
	return <ul className='todo-list'>{renderedListItems}</ul>;
};

export default TodoList;
