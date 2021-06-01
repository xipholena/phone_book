import {Reducer} from 'redux';
import {IPerson} from '../../containers/App'
import store from '../../redux/store'

import {
  DELETE_USER_REQUESTED,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from '../constants';

const state = store?.getState();
const currentUsers = state;
 console.log('reducer: ',state);

export const initialStateDeleteUser: DeleteUserReturnType = {
  isDeleting: false,
  //@ts-ignore
  users: currentUsers,//??
  message:'',
};

export type DeleteUserArgsType = {
  type: typeof DELETE_USER_REQUESTED | typeof DELETE_USER_SUCCESS | typeof DELETE_USER_FAILED;
  users: Array<IPerson> ,
  isDeleting: false,
  message: string;
  userId: any;
  currentUsers: any
};

type DeleteUserReturnType = {
  isDeleting: boolean,
  users: Array<IPerson> | undefined,//??
  message:'',
};

export const deleteUser: Reducer<DeleteUserReturnType, DeleteUserArgsType> = (state = initialStateDeleteUser, action):DeleteUserReturnType => {
  switch (action.type) {
    case DELETE_USER_REQUESTED:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_USER_SUCCESS:
      console.log('ola DELETE_USER_SUCCESS')
      console.log('reducer deleteUser, action.userId',action.userId)
      console.log('currentUsers', action.currentUsers)
      return {
        ...state,
        isDeleting: false,
        //@ts-ignore
        users: []/*currentUsers?.filter(id => id===action.userId)*/
      };
    case DELETE_USER_FAILED:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
};
