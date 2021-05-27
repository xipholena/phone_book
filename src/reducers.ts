import { combineReducers } from 'redux';
import {GET_PHONES, LOG_IN_REQUEST, LOG_IN_FAILED, LOG_IN_SUCCESS, LOG_OUT, GET_USERS_REQUESTED,GET_USERS_SUCCESS, GET_USERS_FAILED} from './constants';
import {IPerson} from "./containers/App";
export const initialStateLogUser = {
  isLogged: false,
  isLoading: false,
  email: '',
  error: null,
};

type LogUserArgsType = {
  type: typeof LOG_IN_REQUEST | typeof LOG_IN_SUCCESS | typeof LOG_IN_FAILED | typeof LOG_OUT
  error: null | string
  message: string
}

type LogUserReturnType = {
  isLogged?: boolean,
  isLoading?: boolean,
  email: string,
  error?:  null | string
}

export const logUser = (state = initialStateLogUser, action: LogUserArgsType): LogUserReturnType => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
      };
    case LOG_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        isLogged: false,
        error: action.message
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
type UsersArgsType = {
  type: typeof GET_USERS_SUCCESS | typeof GET_USERS_FAILED | typeof GET_USERS_REQUESTED,
  users?: Array<IPerson>,
  message: string,
}

type UsersReturnType = {
  loading?: boolean,
  users?: Array<IPerson>,
  error?: string | null,
}

export function users(state = initialStateFetch, action: UsersArgsType): UsersReturnType {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
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

export type RootState = ReturnType<typeof rootReducer>