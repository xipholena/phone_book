import { Reducer } from 'redux';
import {
  DELETE_USER_FAILED,
  DELETE_USER_REQUESTED,
  DELETE_USER_SUCCESS,
  GET_USERS_FAILED,
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  SEND_USER_REQUESTED,
  SEND_USER_SUCCESS,
  UPDATE_USER_REQUESTED,
} from '../constants';
import { IPerson } from '../../containers/App';

const initialStateFetch: UsersReturnType = {
  users: [],
  loading: false,
  error: null,
  isMakingRequest: false,
};

export type UsersArgsType = {
  type:
    | typeof GET_USERS_SUCCESS
    | typeof GET_USERS_FAILED
    | typeof GET_USERS_REQUESTED
    | typeof DELETE_USER_REQUESTED
    | typeof DELETE_USER_SUCCESS
    | typeof DELETE_USER_FAILED
    | typeof SEND_USER_REQUESTED
    | typeof SEND_USER_SUCCESS
    | typeof UPDATE_USER_REQUESTED;
  users?: Array<IPerson>;
  message?: string;
  userId?: any;
  newUser?: object;
};

type UsersReturnType = {
  loading?: boolean;
  users?: Array<IPerson>;
  error?: string | null;
  isMakingRequest?: boolean;
};

export const users: Reducer<UsersReturnType, UsersArgsType> = (state = initialStateFetch, action): UsersReturnType => {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };

    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case SEND_USER_REQUESTED:
      return {
        ...state,
        isMakingRequest: true,
      };
    case SEND_USER_SUCCESS:
      let users1: Array<IPerson> | any[] = state.users || [];
      return {
        ...state,
        users: [...users1, action.newUser],
        isMakingRequest: false,
      };
    case UPDATE_USER_REQUESTED:
      return {
        ...state,
        isMakingRequest: true,
      };
    case DELETE_USER_REQUESTED:
      return {
        ...state,
        isMakingRequest: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users?.filter((user: any) => user.id !== action.userId),
        isMakingRequest: false,
      };
    default:
      return state;
  }
};
