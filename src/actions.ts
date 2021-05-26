import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILED, LOG_OUT, GET_USERS_REQUESTED } from './constants';
/*
type LogInType = {
    type: typeof LOG_IN,
    payload: boolean,
}
type LogOutType = {
    type: typeof LOG_OUT,
}
type GetUsersType = {
    type: typeof GET_USERS_REQUESTED,
}
type ActionsType = LogInType | LogOutType | GetUsersType;
*/


export const logInRequest = (email = ''): any => ({ type: LOG_IN_REQUEST, payload: email /*no need in it ...?*/}); //called in components, saga listens
export const logInSuccess = (): any => ({ type: LOG_IN_SUCCESS });
export const logInFailed = (): any => ({ type: LOG_IN_FAILED});

export const logOut = (): any => ({type: LOG_OUT})

export const getUsers = (): any => ({type: GET_USERS_REQUESTED})

