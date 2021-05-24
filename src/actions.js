import { LOG_IN, LOG_OUT, GET_PHONES } from './constants';
//import { IPerson } from './containers/App';
import store from "./store";

export const logIn = (nowLogged) =>  {
  store.dispatch({ type: LOG_IN, payload: nowLogged });
};

export const logOut = () => {
  store.dispatch({type: LOG_OUT});
};

export const getPhones = () => dispatch => {
  async function getPhonesHandler() {
    return fetch('http://localhost:3000/phones.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: GET_PHONES,
          payload: data.phones.sort((a, b) => a.name.last.localeCompare(b.name.last)),
        })
      )
      .catch(e => {
        console.log(e.toString());
      });
  }
};
