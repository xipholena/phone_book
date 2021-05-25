import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT, GET_PHONES } from './constants';
import {GET_USERS_REQUESTED, GET_USERS_SUCCESS, GET_USERS_FAILED} from "./constants";

export const initialStateLogUser = {
  isLogged: false,
};

export const logUser = (state = initialStateLogUser, action) => {
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

export function users(state = initialStateFetch, action) {
  switch (action.type) {
    case GET_USERS_REQUESTED: //type.GET_USERS_REQUESTED: ???
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