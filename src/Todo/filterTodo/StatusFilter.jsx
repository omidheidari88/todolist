import {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeFilterStatus} from './reducer/filterAction';
import {filterState} from './reducer/filterSlice';

const StatusFilter = () => {
	const dispatch = useDispatch();

	const {filterStatus, activeFilter} = useSelector(filterState);
	const renderedFilters = Object.keys(filterStatus).map((key) => {
		const value = filterStatus[key];
		const className = value === activeFilter ? 'selected' : '';
		const filterSelected = (e) => {
			console.log(e.target);
			return dispatch(changeFilterStatus('Active'));
		};
		return (
			<li key={value}>
				<button className={className} onClick={(e) => filterSelected(e)}>
					{key}
				</button>
			</li>
		);
	});

	return (
		<div className='filters statusFilters'>
			<h5>Filter by Status</h5>
			<ul>{renderedFilters}</ul>
		</div>
	);
};

export default StatusFilter;
