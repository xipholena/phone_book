import { Reducer } from 'redux';
import { LOG_IN_REQUEST, LOG_IN_FAILED, LOG_IN_SUCCESS, LOG_OUT, LOG_OUT_SUCCESS } from '../constants';
export const initialStateLogUser: LogUserReturnType = {
  isLogged: false,
  isLoading: false,
  email: '',
  error: null,
};

export type LogUserArgsType = {
  type: typeof LOG_IN_REQUEST | typeof LOG_IN_SUCCESS | typeof LOG_IN_FAILED | typeof LOG_OUT | typeof LOG_OUT_SUCCESS;
  error: null | string;
  message: string;
};

type LogUserReturnType = {
  isLogged?: boolean;
  isLoading?: boolean;
  isLeaving?: boolean;
  email: string;
  error?: null | string;
};

export const logUser: Reducer<LogUserReturnType, LogUserArgsType> = (
  state = initialStateLogUser,
  action
): LogUserReturnType => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
      };
    case LOG_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        isLogged: false,
        error: action.message,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        isLeaving: true,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLeaving: false,
      };
    default:
      return state;
  }
};
