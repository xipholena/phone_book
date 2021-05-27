import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {  LogUserArgsType } from './reducers/logUser';
import {  UsersArgsType  } from './reducers/users';
import {rootReducer, RootState} from './rootReducer'

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export const sagaAction = (type: any ) => store.dispatch({ type }); //saga

export default store;
