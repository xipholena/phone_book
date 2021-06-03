import { put, takeEvery, all, call, delay } from 'redux-saga/effects';
import {
  LOG_IN_REQUEST,
  LOG_OUT,
  DELETE_USER_REQUESTED,
  SEND_USER_REQUESTED,
  LOG_IN_SUCCESS,
  UPDATE_USER_REQUESTED,
} from './constants';
import {
  logInSuccess,
  logInFailed,
  getUsersSuccess,
  getUsersFailed,
  deleteUsersSuccess,
  sendUserSuccess,
  LogInSuccessType,
  LogInRequestType,
  LogOutType,
  DeleteUserType,
  SendUserType,
  UpdateUserType,
  logOutSuccess,
} from './actions';
import { loginToStorage, logoutOfStorage } from '../utils';
import {} from './constants';

const URL = 'http://localhost:3000/phones.json';
const getPhones = () => {
  return fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      redirect: 'error',
    },
  })
    .then(response => response.json())
    .then(data => data.phones)
    .catch(e => {
      console.log('some error', e.toString());
    });
};

function* fetchUsers(action: LogInSuccessType): any {
  //Since a generator function can technically return a dynamic value depending on how next() is called, Redux-Saga had decided it best to use type any rather than try to infer a type.
  try {
    yield delay(1000);
    const users = yield call(getPhones);
    yield put(getUsersSuccess(users)); //put === dispatch(action.type, payload)
  } catch (e) {
    yield put(getUsersFailed(e));
  }
}

function* userSaga(): any {
  //watcher
  yield takeEvery(LOG_IN_SUCCESS, fetchUsers); //listens to action with action.type GET_USERS_REQUESTED,  and when it is called calls function  fetchUsers
} //action is still being dispatched  //pass LOG_IN_SUCCESS action as arg to fetchUsers worker

function* logInSaga(action: LogInRequestType): any {
  try {
    yield delay(1000);
    loginToStorage();
    yield put(logInSuccess());
  } catch (e) {
    yield put(logInFailed(e));
  }
}
function* logOutSaga(action: LogOutType): any {
  yield delay(1000);
  logoutOfStorage();
  yield put(logOutSuccess());
}

function* handleLogInOut(): any {
  //watcher
  yield takeEvery(LOG_IN_REQUEST, logInSaga);
  yield takeEvery(LOG_OUT, logOutSaga);
}

function* deleteUser(action: DeleteUserType): any {
  try {
    yield delay(1000);
    yield put(deleteUsersSuccess(action.userId));
  } catch (e) {}
}

function* addUser(action: SendUserType): any {
  try {
    yield delay(1000);
    yield put(sendUserSuccess(action.newUser));
  } catch (e) {}
}
function* editUser(action: UpdateUserType): any {
  try {
    yield delay(1000);
    yield put(deleteUsersSuccess(action.userId));
    yield put(sendUserSuccess(action.updatedUser));
  } catch (e) {}
}

function* manageUserSaga(): any {
  //watcher
  yield takeEvery(DELETE_USER_REQUESTED, deleteUser);
  yield takeEvery(SEND_USER_REQUESTED, addUser);
  yield takeEvery(UPDATE_USER_REQUESTED, editUser);
}

export default function* rootSaga(): any {
  yield all([
    userSaga(), //fetch
    handleLogInOut(),
    manageUserSaga(),
  ]);
}
