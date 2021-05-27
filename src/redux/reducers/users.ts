import {Reducer} from 'redux'
import {
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
} from '../constants';
import { IPerson } from '../../containers/App';
const initialStateFetch: UsersReturnType = {
  users: [],
  loading: false,
  error: null,
};

export type UsersArgsType = {
  type: typeof GET_USERS_SUCCESS | typeof GET_USERS_FAILED | typeof GET_USERS_REQUESTED;
  users?: Array<IPerson>;
  message?: string;
};

type UsersReturnType = {
  loading?: boolean;
  users?: Array<IPerson>;
  error?: string | null;
};

export const  users: Reducer<typeof initialStateFetch, UsersArgsType> = (state = initialStateFetch, action: UsersArgsType) => {
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
    default:
      return state;
  }
}