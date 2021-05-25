import { put, takeEvery, all, call } from 'redux-saga/effects'
import {GET_PHONES} from "./constants";


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

export default function* rootSaga() {
    yield all([
        userSaga() //fetch
    ])
}