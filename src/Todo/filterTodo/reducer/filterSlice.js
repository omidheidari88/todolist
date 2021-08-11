import produce from 'immer';
import {filterStatusActions as actions} from './filterAction';

const initState = {
	colors: ['red', 'blue', 'green', 'orange', 'purple'],
	filterStatus: {All: actions.ALL, Active: actions.ACTIVE, Completed: actions.COMPELTED},
	activeFilter: actions.ALL,
};

export const filtersReducer = produce((state, action) => {
	switch (action.type) {
		case 'filter/filterStatus':
			state.activeFilter = action.payload;
			break;

		case 'filter/colors':
			return {
				...state,
				colors: state.colors.filter((c) => c !== action.payload),
			};

		default:
			return state;
	}
}, initState);

export const filterState = (state) => state.filters;
