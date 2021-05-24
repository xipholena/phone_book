import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger} from "redux-logger/src";
import { rootReducer} from './reducers';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

const action = type => store.dispatch({type});

export default store;
