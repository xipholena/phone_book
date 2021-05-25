import { LOG_IN, LOG_OUT, GET_PHONES, GET_USERS_REQUESTED } from './constants';
//import { IPerson } from './containers/App';
import store from "./store";

export const logIn = (nowLogged) =>  {
  store.dispatch({ type: LOG_IN, payload: nowLogged });
};

export const logOut = () => {
  store.dispatch({type: LOG_OUT});
};

export function getUsers() {
  return {
    type: GET_USERS_REQUESTED, // was type.GET_USERS_REQUESTED
  }
}
