import { put, takeEvery, all, call } from 'redux-saga/effects'
import {GET_PHONES} from "./constants";
import {logIn} from "./actions";
import {loginToStorage} from "./utils";
import {GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS} from "./constants";
import {IPerson} from "./containers/App";
type FetchUserParams = {
    type: string,
    users?: Array<IPerson>,
    message?: string
}
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

function* fetchUsers(action: FetchUserParams): any {//Since a generator function can technically return a dynamic value depending on how next() is called, Redux-Saga had decided it best to use type any rather than try to infer a type.
    try {
        const users = yield call(getPhones);
        yield put({type: GET_USERS_SUCCESS, users: users}); //put === dispatch(action.type, payload)
    } catch (e) {
        yield put({type: GET_USERS_FAILED, message: e.message});
    }
}
function* userSaga(): any {
    yield takeEvery(GET_USERS_REQUESTED, fetchUsers);
}


export default function* rootSaga(): any {
    yield all([
        userSaga() //fetch
    ])
}