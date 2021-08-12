import ColorFilters from './ColorFilters';
import StatusFilter from './StatusFilter';
import RemainingTodos from './RemainingTodos';
import SelectDeselect from './SelectDeselect';

export default function Footer() {
	return (
		<footer className='footer'>
			<SelectDeselect />
			<RemainingTodos />
			<StatusFilter />
			<ColorFilters />
		</footer>
	);
}
