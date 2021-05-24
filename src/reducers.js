import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT, GET_PHONES } from './constants';

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
export const initialStatePhones = {
  phones: [],
};
export const setPhones = (state = initialStatePhones, action) => {
  switch (action.type) {
    case GET_PHONES:
      return {
        ...state,
        phones: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  logUser,
  setPhones
});
