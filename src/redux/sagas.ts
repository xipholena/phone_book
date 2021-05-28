import { put, takeEvery, all, call, delay } from 'redux-saga/effects';
import {
  GET_USERS_REQUESTED,
  LOG_IN_REQUEST,
  LOG_OUT,
} from './constants';
import {logInSuccess, logInFailed, logOut, getUsersSuccess, getUsersFailed } from './actions';
import { loginToStorage, logoutOfStorage } from '../utils';
import {} from './constants';
import { IPerson } from '../containers/App';

type FetchUserParams = {
  type: string;
  users?: Array<IPerson>;
  message?: string;
};

const URL = 'http://localhost:3000/phones.json';
const getPhones = () => {
  return fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => data.phones)
    .catch(e => {
      console.log(e.toString());
    });
};



function* fetchUsers(action: FetchUserParams): any {
  //Since a generator function can technically return a dynamic value depending on how next() is called, Redux-Saga had decided it best to use type any rather than try to infer a type.
  try {
    yield delay(1000);
    const users = yield call(getPhones);
    yield put(getUsersSuccess(users)); //put === dispatch(action.type, payload)
  } catch (e) {
    yield put(getUsersFailed(e));
  }
}

function* logInSaga(action: any): any {
  try {
    yield delay(1000);
    loginToStorage();
    yield put(logInSuccess());
  } catch (e) {
    yield put(logInFailed(e));
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

const info = {
  id: "6002f201e78c3fa4e3390f93",
  isActive: true,
  age: 23,
  name: {
    first: "Sutton",
    last: "Morris"
  },
  company: "ZILPHUR",
  email: "sutton.morris@zilphur.me",
  phone: "+1 (974) 540-2046",
  address: "374 Mill Lane, Zarephath, New Mexico, 3252",
  registered: "2016-03-10T06:10:01.723Z"
};
const URL_POST = 'https://jsonplaceholder.typicode.com/posts';
export const send = () => {
  return fetch(URL_POST, { //'https://jsonplaceholder.typicode.com/posts'
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

const info2 = {title: 'foo'}
const URL_PATCH = 'https://jsonplaceholder.typicode.com/posts/1';
export const update = () => {
  fetch(URL_PATCH, {
    method: 'PATCH',
    body: JSON.stringify(info2),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

const URL_DELETE = 'https://jsonplaceholder.typicode.com/posts/1'
export const deleteUser = () => {
  fetch(URL_DELETE, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
