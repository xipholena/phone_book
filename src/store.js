import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, initialState } from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
