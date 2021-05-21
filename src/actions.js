import { LOG_IN, LOG_OUT, GET_PHONES } from './constants';
import { IPerson } from './containers/App';
import store from "./store";

export const logIn = (nowLogged) =>/* (dispatch)  => */{
  alert('ola actions')
 // return {type: LOG_IN, payload: nowLogged};
  //dispatch({ type: LOG_IN, payload: nowLogged });
  console.log(store.getState())
};

export const logOut = email => {
  return {type: LOG_OUT, payload: email};
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

//const logIn = (email, password) => ({type: LOG_IN, payload: {email, password}})
// const logOut = (email) => ({type: LOG_OUT, payload: email})//email to find and remove key from localStorage
//const getPhones = (url) => ({type: GET_PHONES, payload: url})
