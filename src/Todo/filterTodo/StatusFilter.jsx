import {useDispatch, useSelector} from 'react-redux';
import {changeFilterStatus} from './reducer/filterAction';
import {filterState, filterStatus} from './reducer/filterSlice';

const StatusFilter = () => {
	const dispatch = useDispatch();
	const {activeFilter} = useSelector(filterState);

	const renderedFilters = Object.keys(filterStatus).map((key) => {
		const value = filterStatus[key];
		const className = value === activeFilter ? 'selected' : '';

		return (
			<li key={value}>
				<button
					className={className}
					onClick={() => dispatch(changeFilterStatus(value))}
				>
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
