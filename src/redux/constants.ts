export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';

export const LOG_OUT = 'LOG_OUT';
export const GET_PHONES = 'GET_PHONES';

export const ROUTES = {
  main: '/',
  home: '/home',
  login: '/login',
  projectName: '/phone_book', // webstorm adds it
  dynamic: {
    phone: (personId = ':personId') => `/${personId}`,
  }
};

export const GET_USERS_REQUESTED = 'GET_USERS_REQUESTED';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';
