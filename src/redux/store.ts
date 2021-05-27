import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, LogUserArgsType, UsersArgsType, RootState } from "./reducers";

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export const sagaAction = (type: any/*: LogUserArgsType | UsersArgsType /*any*//*RootState*/ ) => store.dispatch({ type }); //saga

export default store;
