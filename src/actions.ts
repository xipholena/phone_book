import { LOG_IN, LOG_OUT, GET_USERS_REQUESTED } from './constants';

export const logIn = () => ({ type: LOG_IN, payload: true }); //dispatched in components

export const logOut = () => ({type: LOG_OUT})

export const getUsers = () => ({type: GET_USERS_REQUESTED})

