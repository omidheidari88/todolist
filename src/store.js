import {createStore, compose} from 'redux';
import rootReducer from './reducer';
import {configureStore} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';

// import {initState} from './Todo/todos/reducer/todosSlice';
// import {logActions, logStates} from './plugin/enhancer';

const store = createStore(rootReducer, composeWithDevTools());

// const enhancer = compose(composeWithDevTools(), logActions, logStates);
// const store = createStore(rootReducer, initState, enhancer);

export default store;
