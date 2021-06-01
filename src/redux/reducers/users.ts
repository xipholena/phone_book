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
  users: [
    {
      "id": "6002f201e78c3fa4e3390f93",
      "isActive": true,
      "age": 23,
      "name": {
        "first": "Sutton",
        "last": "Morris"
      },
      "company": "ZILPHUR",
      "email": "sutton.morris@zilphur.me",
      "phone": "+1 (974) 540-2046",
      "address": "374 Mill Lane, Zarephath, New Mexico, 3252",
      "registered": "2016-03-10T06:10:01.723Z"
    },
    {
      "id": "6002f201031d235c8b5edc9d",
      "isActive": true,
      "age": 37,
      "name": {
        "first": "Bruce",
        "last": "Lester"
      },
      "company": "OBONES",
      "email": "bruce.lester@obones.us",
      "phone": "+1 (971) 502-2469",
      "address": "771 Langham Street, Rodman, Louisiana, 6395",
      "registered": "2016-10-18T00:32:55.703Z"
    },
  ],
  loading: false,
  error: null,
};

export type UsersArgsType = {
  type: typeof GET_USERS_SUCCESS | typeof GET_USERS_FAILED | typeof GET_USERS_REQUESTED | typeof DELETE_USER_REQUESTED | typeof DELETE_USER_SUCCESS | typeof DELETE_USER_FAILED | typeof SEND_USER_REQUESTED;
  users?: Array<IPerson>;
  message?: string;
  userId?: any;
};

type UsersReturnType = {
  loading?: boolean;
  users?: Array<IPerson>;
  error?: string | null;
};

export const  users: Reducer<UsersReturnType, UsersArgsType> = (state = initialStateFetch, action): UsersReturnType => {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      if(state?.users) {
        return {
          ...state,
          loading: true,
        };
      }
      return state;
      
    case GET_USERS_SUCCESS:
      console.log('ola GET_USERS_SUCCESS')
      return {
        ...state,
        loading: false,
       // users: action.users,
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case DELETE_USER_SUCCESS:
      console.log('reducer action.userId',action.userId);
      return {
        ...state,
        users: state.users?.filter((id: any) => id===action.userId)
      }
    case SEND_USER_REQUESTED:
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
