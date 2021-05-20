import {combineReducers} from "redux";
import {LOG_IN, LOG_OUT, GET_PHONES} from "./constants";


export const initialState = {
    isLogged: false,
    phones: [],
    //emailField: '', //controlled by redux-forms?
    //passwordField: '',
}


export const logUser = (state = initialState.isLogged, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLogged: true,
            };
        case LOG_OUT:
            return {
                ...state,
                isLogged: false
            };
        default:
            return state;
    }
}

export const setPhones = (state = initialState.phones, action) => {
    switch (action.type) {
        case GET_PHONES:
            return {
                ...state,
                phones: action.payload,
            };
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    logUser,
    setPhones
})



