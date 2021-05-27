import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILED,
  LOG_OUT,
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS, GET_USERS_FAILED
} from "./constants";
import { IPerson } from "../containers/App";

type LogInRequestType = {
    type: typeof LOG_IN_REQUEST,
}
type LogInSuccessType = {
  type: typeof LOG_IN_SUCCESS,
}
type LogInFailedType = {
  type: typeof LOG_IN_FAILED,
  message: boolean,
}
type LogOutType = {
    type: typeof LOG_OUT,
}

type GetUsersType = {
    type: typeof GET_USERS_REQUESTED,
}
type GetUsersSuccessType = {
  type: typeof GET_USERS_SUCCESS,
  users: Array<IPerson>
}
type GetUsersFailedType = {
  type: typeof GET_USERS_FAILED,
  message: string
}

type ActionsType = LogInRequestType | LogInSuccessType| LogInFailedType| LogOutType | GetUsersType | GetUsersSuccessType | GetUsersFailedType ;


export const logInRequest = (email = ''): ActionsType => ({ type: LOG_IN_REQUEST }); //called in components, saga listens
export const logInSuccess = (): ActionsType => ({ type: LOG_IN_SUCCESS});
export const logInFailed = (e: any): ActionsType => ({ type: LOG_IN_FAILED, message: e.message });
export const logOut = (): ActionsType => ({ type: LOG_OUT });

export const getUsers = (): ActionsType => ({ type: GET_USERS_REQUESTED });
export const getUsersSuccess = (users: Array<IPerson>): ActionsType => ({ type: GET_USERS_SUCCESS, users: users })
export const getUsersFailed = (e: any): ActionsType => ({ type: GET_USERS_FAILED, message: e.message })