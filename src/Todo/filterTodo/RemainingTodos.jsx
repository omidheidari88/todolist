import {useSelector} from 'react-redux';

const RemainingTodos = () => {
	const todos = useSelector((state) => state.todos.entities);
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
