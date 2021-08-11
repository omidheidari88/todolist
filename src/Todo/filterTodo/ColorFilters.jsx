import {useDispatch, useSelector} from 'react-redux';
import {changeColorStatus} from './reducer/filterAction';
import {availableColors, filterState} from './reducer/filterSlice';
// ['green', 'blue', 'orange', 'purple', 'red']

const ColorFilters = () => {
	const {colors} = useSelector(filterState);
	const dispatch = useDispatch();
	const renderedColors = availableColors.map((color) => {
		const checked = colors.includes(color);
		const type = checked ? 'removed' : 'added';
		return (
			<label key={color}>
				<input type='checkbox' name={color} defaultChecked={checked} onClick={() => dispatch(changeColorStatus(color, type))} />
				<span
					className='color-block'
					style={{
						backgroundColor: color,
					}}
				></span>
				{color}
			</label>
		);
	});

	return (
		<div className='filters colorFilters'>
			<h5>Filter by Color</h5>
			<form className='colorSelection'>{renderedColors}</form>
		</div>
	);
};

export default ColorFilters;
