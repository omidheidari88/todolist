import React from 'react';
import {useDispatch} from 'react-redux';
// import {clearAllCompleted, markAllCompleted} from '../todos/reducer/todosAction';
import {clearAllCompleted, markAllCompleted} from '../todos/reducer/todosSlice';

const SelectDeselect = () => {
	const dispatch = useDispatch();

	return (
		<div className='actions'>
			<button className='button' onClick={() => dispatch(markAllCompleted())}>
				Select All
			</button>
			<button className='button' onClick={() => dispatch(clearAllCompleted())}>
				Clear All
			</button>
		</div>
	);
};

export default SelectDeselect;
