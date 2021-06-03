import {
  DELETE_USER_FAILED,
  DELETE_USER_REQUESTED,
  DELETE_USER_SUCCESS,
  GET_USERS_FAILED,
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  LOG_IN_FAILED,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT,
  LOG_OUT_SUCCESS,
  SEND_USER_FAILED,
  SEND_USER_REQUESTED,
  SEND_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUESTED,
  UPDATE_USER_SUCCESS,
} from './constants';
import { IPerson } from '../containers/App';

export type LogInRequestType = {
  type: typeof LOG_IN_REQUEST;
};
export type LogInSuccessType = {
  type: typeof LOG_IN_SUCCESS;
};
type LogInFailedType = {
  type: typeof LOG_IN_FAILED;
  message: string | undefined;
};
export type LogOutType = {
  type: typeof LOG_OUT;
  isLeaving: boolean;
};
export type LogOutSuccessType = {
  type: typeof LOG_OUT_SUCCESS;
  isLeaving: boolean;
};

type GetUsersType = {
  type: typeof GET_USERS_REQUESTED;
  currentUsers?: Array<IPerson>;
};
type GetUsersSuccessType = {
  type: typeof GET_USERS_SUCCESS;
  users: Array<IPerson>;
};
type GetUsersFailedType = {
  type: typeof GET_USERS_FAILED;
  message: string | undefined;
};

export type SendUserType = {
  type: typeof SEND_USER_REQUESTED;
  newUser: IPerson;
};

type SendUserSuccessType = {
  type: typeof SEND_USER_SUCCESS;
  newUser: IPerson;
};

type SendUserFailedType = {
  type: typeof SEND_USER_FAILED;
  message: string | undefined;
};

export type UpdateUserType = {
  type: typeof UPDATE_USER_REQUESTED;
  userId: string;
  updatedUser: IPerson;
};

type UpdateUserSuccessType = {
  type: typeof UPDATE_USER_SUCCESS;
};

type UpdateUserFailedType = {
  type: typeof UPDATE_USER_FAILED;
  message: string | undefined;
};

export type DeleteUserType = {
  type: typeof DELETE_USER_REQUESTED;
  userId: string;
};

type DeleteUserSuccessType = {
  type: typeof DELETE_USER_SUCCESS;
  userId: string;
};

type DeleteUserFailedType = {
  type: typeof DELETE_USER_FAILED;
  message: string | undefined;
};

export type ActionsType =
  | LogInRequestType
  | LogInSuccessType
  | LogInFailedType
  | LogOutType
  | LogOutSuccessType
  | GetUsersType
  | GetUsersSuccessType
  | GetUsersFailedType
  | SendUserType
  | SendUserSuccessType
  | SendUserFailedType
  | UpdateUserType
  | UpdateUserSuccessType
  | UpdateUserFailedType
  | DeleteUserType
  | DeleteUserSuccessType
  | DeleteUserFailedType;

export type ErrorObject = {
  message?: string;
  name?: string;
  fileName?: string;
  lineNumber?: number;
  columnNumber?: number;
  stack?: string;
  description?: string;
  number?: number;
};

export const logInRequest = (email = ''): ActionsType => ({ type: LOG_IN_REQUEST }); //called in components, saga listens
export const logInSuccess = (): ActionsType => ({ type: LOG_IN_SUCCESS });
export const logInFailed = (e: ErrorObject): ActionsType => ({ type: LOG_IN_FAILED, message: e.message });
export const logOut = (): ActionsType => ({ type: LOG_OUT, isLeaving: true });
export const logOutSuccess = (): ActionsType => ({ type: LOG_OUT_SUCCESS, isLeaving: false });

export const getUsers = (): ActionsType => ({ type: GET_USERS_REQUESTED });
export const getUsersSuccess = (users: Array<IPerson>): ActionsType => ({ type: GET_USERS_SUCCESS, users: users });
export const getUsersFailed = (e: ErrorObject): ActionsType => ({ type: GET_USERS_FAILED, message: e.message });

export const sendUserRequest = (newUser: IPerson): ActionsType => ({ type: SEND_USER_REQUESTED, newUser: newUser });
export const sendUserSuccess = (newUser: IPerson): ActionsType => ({ type: SEND_USER_SUCCESS, newUser: newUser });
export const sendUserFailed = (e: ErrorObject): ActionsType => ({ type: SEND_USER_FAILED, message: e.message });

export const updateUser = (id: string, updatedUser: IPerson): ActionsType => ({
  type: UPDATE_USER_REQUESTED,
  userId: id,
  updatedUser: updatedUser,
});
export const updateUsersSuccess = (): ActionsType => ({ type: UPDATE_USER_SUCCESS });
export const updateUsersFailed = (e: ErrorObject): ActionsType => ({ type: UPDATE_USER_FAILED, message: e.message });

export const deleteUser = (id: string): ActionsType => ({ type: DELETE_USER_REQUESTED, userId: id });
export const deleteUsersSuccess = (id: string): ActionsType => ({ type: DELETE_USER_SUCCESS, userId: id });
export const deleteUsersFailed = (e: ErrorObject): ActionsType => ({ type: DELETE_USER_FAILED, message: e.message });
