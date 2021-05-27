import { put, takeEvery, all, call, delay } from 'redux-saga/effects';
import {
  GET_PHONES,
  GET_USERS_FAILED,
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILED,
  LOG_OUT,
  ROUTES,
} from './constants';
import { logInRequest, logInSuccess, logInFailed, logOut } from './actions';
import { loginToStorage, logoutOfStorage } from './utils';
import {} from './constants';
import { IPerson } from './containers/App';
import store from './store';

type FetchUserParams = {
  type: string;
  users?: Array<IPerson>;
  message?: string;
};
//const state = store.getState();
const URL = 'http://localhost:3000/phones.json';
const getPhones = () => {
  return fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => data)
    .catch(e => {
      console.log(e.toString());
    });
};

function* fetchUsers(action: FetchUserParams): any {
  //Since a generator function can technically return a dynamic value depending on how next() is called, Redux-Saga had decided it best to use type any rather than try to infer a type.
  try {
    yield delay(1000);
    const users = yield call(getPhones);
    yield put({ type: GET_USERS_SUCCESS, users: users }); //put === dispatch(action.type, payload)
  } catch (e) {
    yield put({ type: GET_USERS_FAILED, error: e.message });
  }
}

function* logInSaga(action: any): any {
  try {
    yield delay(1000);
    loginToStorage();
    yield put({ type: LOG_IN_SUCCESS });
  } catch (e) {
    yield put({ type: LOG_IN_FAILED, message: e.message });
  }
}
function* logOutSaga(action: any): any {
  logoutOfStorage();
  yield put(logOut());
}

function* handleLogInOut(): any {
  //watcher
  yield takeEvery(LOG_IN_REQUEST, logInSaga);
  yield takeEvery(LOG_OUT, logOutSaga);
}

function* userSaga(): any {
  //watcher
  yield takeEvery(GET_USERS_REQUESTED, fetchUsers); //listens to action with action.type GET_USERS_REQUESTED,  and when it is called calls function  fetchUsers
} //action is still being dispatched

export default function* rootSaga(): any {
  yield all([
    userSaga(), //fetch
    handleLogInOut(),
  ]);
}
