import {Reducer} from 'redux'
import {
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  DELETE_USER_REQUESTED,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
  SEND_USER_REQUESTED,
} from '../constants';
import { IPerson } from '../../containers/App';
const initialStateFetch: UsersReturnType = {
  users: [],
  loading: false,
  error: null,
};

export type UsersArgsType = {
  type: typeof GET_USERS_SUCCESS | typeof GET_USERS_FAILED | typeof GET_USERS_REQUESTED | typeof DELETE_USER_REQUESTED | typeof DELETE_USER_SUCCESS | typeof DELETE_USER_FAILED | typeof SEND_USER_REQUESTED;
  users?: Array<IPerson>;
  message?: string;
  userId?: any;
  newUser?: object;
};

type UsersReturnType = {
  loading?: boolean;
  users?: Array<IPerson>;
  error?: string | null;
};

export const  users: Reducer<UsersReturnType, UsersArgsType> = (state = initialStateFetch, action): UsersReturnType => {
  switch (action.type) {
    case GET_USERS_REQUESTED:
        return {
          ...state,
          loading: true,
      }

      
    case GET_USERS_SUCCESS:

      //if(users.length === 0) {
        return {
          ...state,
          loading: false,
          users: action.users,
        };
      //}
     // return state;

    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users?.filter((user: any) => user.id !== action.userId)
      }
    case SEND_USER_REQUESTED:
      //console.log('reducer, action.newUser',action.newUser);
      return {
        ...state,
        users: [
          //@ts-ignore
         ...state.users,
         //@ts-ignore
         action.newUser
        ]
      }
    default:
      return state;
  }
}
