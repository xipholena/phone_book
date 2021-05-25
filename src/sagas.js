import { put, takeEvery, all, call } from 'redux-saga/effects'
import {GET_PHONES} from "./constants";

/*  example start*/
const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
    console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
/*example  ALMOST end*/


const URL = 'http://localhost:3000/phones.json';
 const getPhones = () => {
        return fetch(URL, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(response => response.json())
            /*.then(data =>
                dispatch({
                    type: GET_PHONES,
                    payload: data.phones.sort((a, b) => a.name.last.localeCompare(b.name.last)),
                })
            )*/
            .then(data => data)

            .catch(e => {
                console.log(e.toString());
            });
};

function* fetchUsers(action) {
    try {
        const users = yield call(getPhones);
        yield put({type: 'GET_USERS_SUCCESS', users: users}); //put === dispatch
    } catch (e) {
        yield put({type: 'GET_USERS_FAILED', message: e.message});
    }
}
function* userSaga() {
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        helloSaga(), //example
        watchIncrementAsync(), //example
        userSaga() //fetch
    ])
}