import TodoListItem from './TodoListItem';
import {useSelector} from 'react-redux';
import {todosFilter} from './reducer/todosFilter';
import {globalState} from '../../reducer';

const TodoList = () => {
	const state = useSelector(globalState);
	const todos = todosFilter(state);
	const renderedListItems = todos?.map((todo) => {
		return <TodoListItem key={todo.id} todo={todo} />;
	});
	return <ul className='todo-list'>{renderedListItems}</ul>;
};

export default TodoList;
