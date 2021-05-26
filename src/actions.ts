import { LOG_IN, LOG_OUT, GET_USERS_REQUESTED } from './constants';

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

export const logIn = (): ActionsType => ({ type: LOG_IN, payload: true }); //dispatched in components

export const logOut = (): ActionsType => ({type: LOG_OUT})

export const getUsers = (): ActionsType => ({type: GET_USERS_REQUESTED})

