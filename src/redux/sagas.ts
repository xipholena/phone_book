import { put, takeEvery, all, call, delay } from 'redux-saga/effects';
import {
  GET_USERS_REQUESTED,
  LOG_IN_REQUEST,
  LOG_OUT,
  DELETE_USER_REQUESTED,
  SEND_USER_REQUESTED,
} from './constants';
import {logInSuccess, logInFailed, logOut,
   getUsersSuccess, getUsersFailed,
   deleteUsersSuccess, 
   sendUserSuccess
  } from './actions';
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
      redirect: 'error'
    },
  })
    .then(response => response.json())
    .then(data => data.phones)
    .catch(e => {
      console.log('some error', e.toString());
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


function* deleteUser (action: any): any {
  try {
    yield put(deleteUsersSuccess(action.id))
  } catch (e) {
    
  } 
}

function* addUser (action: any): any {
  try {
    yield put(sendUserSuccess(action.newUser))
  } catch (e) {
    
  } 
}

function* manageUserSaga(): any {
  //watcher
  yield takeEvery(DELETE_USER_REQUESTED, deleteUser)
  yield takeEvery(SEND_USER_REQUESTED, addUser)
}

export default function* rootSaga(): any {
  yield all([
    userSaga(), //fetch
    handleLogInOut(),
    manageUserSaga(),
  ]);
}
