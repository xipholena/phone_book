import {LOG_IN, LOG_OUT, GET_PHONES} from './constants'
import {IPerson} from "./containers/App";



export const logIn = (email, password) => (dispatch) => {
    const loginHandler = (email) => { //validation here??
        localStorage.setItem(email, email);
    };
    dispatch({type: LOG_IN, payload: {email, password}});
}

export const logOut = (email) => (dispatch) => {
    const logout = () => {
        localStorage.removeItem(email);
    };
    dispatch({type: LOG_OUT, payload: email});
}

export const getPhones = () => (dispatch) => {
    async function getPhonesHandler() {
        return fetch('http://localhost:3000/phones.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => dispatch({
                type: GET_PHONES,
                payload: data.phones.sort((a, b) => a.name.last.localeCompare(b.name.last))
            }))
            .catch(e => {
                console.log(e.toString());
            });
    }

}

//const logIn = (email, password) => ({type: LOG_IN, payload: {email, password}})
// const logOut = (email) => ({type: LOG_OUT, payload: email})//email to find and remove key from localStorage
//const getPhones = (url) => ({type: GET_PHONES, payload: url})
