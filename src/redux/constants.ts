export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';

export const LOG_OUT = 'LOG_OUT';
export const GET_PHONES = 'GET_PHONES';

export const ROUTES = {
  main: '/',
  home: '/home',
  login: '/login',
  add: '/add',
  projectName: '/phone_book', // webstorm adds it
  dynamic: {
    phone: (personId = ':personId') => `/${personId}`,
    edit: (id = ':id') => `/edit/${id}`,
    delete: (id = ':id') => `/delete/${id}`,
  }
};

export const GET_USERS_REQUESTED = 'GET_USERS_REQUESTED';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';

export const SEND_USER_REQUESTED = 'SEND_USER_REQUESTED';
export const SEND_USER_SUCCESS = 'SEND_USER_SUCCESS';
export const SEND_USER_FAILED = 'SEND_USER_FAILED';

export const UPDATE_USER_REQUESTED = 'UPDATE_USER_REQUESTED';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const DELETE_USER_REQUESTED = 'DELETE_USER_REQUESTED';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';
