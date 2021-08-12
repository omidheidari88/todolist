import {useSelector} from 'react-redux';
import {todosState} from '../todos/reducer/todosSlice';

const RemainingTodos = () => {
	const todos = useSelector(todosState);
	const remainTodo = todos?.filter((todo) => (!todo.completed ? true : false));
	const count = remainTodo?.length;

	const suffix = count === 1 ? '' : 's';

	return (
		<div className='todo-count'>
			<h5>Remaining Todos</h5>
			<strong>{count}</strong> item{suffix} left
		</div>
	);
};

export default RemainingTodos;
