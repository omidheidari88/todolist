import produce from 'immer';
import {filterStatusActions as actions} from './filterAction';
export const filterStatus = {All: actions.ALL, Active: actions.ACTIVE, Completed: actions.COMPELTED};
export const availableColors = ['green', 'blue', 'orange', 'purple', 'red'];

const initState = {
	colors: [],
	activeFilter: actions.ALL,
};

export const filtersReducer = produce((state, action) => {
	switch (action.type) {
		case 'filter/filterStatus':
			state.activeFilter = action.payload;
			break;
		case 'filter/colors':
			const {color, type} = action.payload;
			const {colors} = state;
			switch (type) {
				case 'added':
					state.colors.push(color);
					break;
				case 'removed':
					state.colors = state.colors.filter((c) => c !== color);
					break;
				default:
					return colors;
			}
			break;
		default:
			return state;
	}
}, initState);

export const filterState = (state) => state.filters;
