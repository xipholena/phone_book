import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT, GET_PHONES } from './constants';
import {GET_USERS_REQUESTED, GET_USERS_SUCCESS, GET_USERS_FAILED} from "./constants";
import {IPerson} from "./containers/App";
export const initialStateLogUser = {
  isLogged: false,
};

type LogUserArgsType = {
  type: typeof LOG_IN | typeof LOG_OUT
}

type UsersArgsType = {
  type: typeof GET_USERS_SUCCESS | typeof GET_USERS_FAILED,
  users?: Array<IPerson>,
  message: string,
}

type LogUserReturnType = {
  isLogged?: boolean,
}
type UsersReturnType = {
  loading?: boolean ,
  users?: Array<IPerson>,
  error?: string | null,
}
export const logUser = (state = initialStateLogUser, action: LogUserArgsType): LogUserReturnType => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogged: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

const initialStateFetch = {
  users: [],
  loading: false,
  error: null,
}

export function users(state = initialStateFetch, action: UsersArgsType): UsersReturnType {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  logUser,
  users,
});