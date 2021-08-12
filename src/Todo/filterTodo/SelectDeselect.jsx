import React from 'react';
import {useDispatch} from 'react-redux';
import {clearAllCompletedTodos, markAllCompletedTodos} from '../todos/reducer/todosAction';

const SelectDeselect = () => {
	const dispatch = useDispatch();

	return (
		<div className='actions'>
			<button className='button' onClick={() => dispatch(markAllCompletedTodos())}>
				Select All
			</button>
			<button className='button' onClick={() => dispatch(clearAllCompletedTodos())}>
				Clear All
			</button>
		</div>
	);
};

export default SelectDeselect;
