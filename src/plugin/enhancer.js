export const logActions = (createStore) => {
	return (rootReducer, initState, enhancer) => {
		const store = createStore(rootReducer, initState, enhancer);
		const logDispatch = (actions) => {
			const dispatch = store.dispatch(actions);
			console.log(actions);
			return dispatch;
		};
		return {...store, dispatch: logDispatch};
	};
};

export const logStates = (createStore) => {
	return (rootReducer, initState, enhancer) => {
		const store = createStore(rootReducer, initState, enhancer);
		const logState = () => {
			const state = store.getState();
			console.log(state);
			return state;
		};
		return {...store, getState: logState};
	};
};
