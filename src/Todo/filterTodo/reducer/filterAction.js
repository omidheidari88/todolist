export const changeFilterStatus = (filter) => {
	return {
		type: 'filter/filterStatus',
		payload: filter,
	};
};

export const changeColorStatus = (color, type) => {
	return {
		type: 'filter/colors',
		payload: {color, type},
	};
};

export const filterStatusActions = {
	ALL: 'All',
	ACTIVE: 'Active',
	COMPELTED: 'Completed',
};
