import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILED,
  LOG_OUT,
  GET_USERS_REQUESTED, GET_USERS_SUCCESS, GET_USERS_FAILED,
  SEND_USER_REQUESTED, SEND_USER_SUCCESS, SEND_USER_FAILED,
  UPDATE_USER_REQUESTED, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED,
  DELETE_USER_REQUESTED, DELETE_USER_SUCCESS, DELETE_USER_FAILED,
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
export const getUsersSuccess = (users: Array<IPerson>): ActionsType => ({ type: GET_USERS_SUCCESS, users: users });
export const getUsersFailed = (e: any): ActionsType => ({ type: GET_USERS_FAILED, message: e.message });

export const sendUser = (): any => ({ type: SEND_USER_REQUESTED });
export const sendUserSuccess = (newUser: IPerson): any => {
  console.log('actions, sendUserSuccess, parameter: ', newUser )
  return({ type: SEND_USER_SUCCESS, newUser: newUser });
}


export const sendUserFailed = (e: any): any => ({ type: SEND_USER_FAILED, message: e.message });

export const updateUser = (): any => ({ type: UPDATE_USER_REQUESTED });
export const updateUsersSuccess = (): any => ({ type: UPDATE_USER_SUCCESS });
export const updateUsersFailed = (e: any): any => ({ type: UPDATE_USER_FAILED, message: e.message });

export const deleteUser = (): any => ({ type: DELETE_USER_REQUESTED });
export const deleteUsersSuccess = (id: any): any => {
  console.log('actions, deleteUsersSuccess, parameter: ', id )
  return { type: DELETE_USER_SUCCESS, userId: id }
};
export const deleteUsersFailed = (e: any): any => ({ type: DELETE_USER_FAILED, message: e.message });
