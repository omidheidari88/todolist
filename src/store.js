// import {createStore, compose,applyMiddleware} from 'redux';
import reducer from './reducer';
import {configureStore} from '@reduxjs/toolkit';
// import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension';

// import {initState} from './Todo/todos/reducer/todosSlice';
// import {logActions, logStates} from './plugin/enhancer';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// const enhancer = compose(composeWithDevTools(), logActions, logStates);
// const store = createStore(rootReducer, initState, enhancer);

export const store = configureStore({
	reducer,
	// middleware: (defaultMiddleware) => [...defaultMiddleware(),addNewMiddleWareHere],
	enhancers: [],
});
export default store;
