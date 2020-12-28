import {
  HANDLE_LOGIN_REDIRECT,
  USER_LOGIN,
  USER_LOGOUT,
  TOKEN_ACQUIRED,
  USER_UNAUTHETICATED,
  LOGIN_AGAINST_API,
  SIGNUP_AGAINST_API,
  LOGIN_AGAINST_API_SUCCESS,
  LOAD_SESSION_FROM_LOCAL_STORAGE,
} from './constants';

export const handleLoginRedirect = () => ({
  type: HANDLE_LOGIN_REDIRECT,
});

export const userLogin = () => ({
  type: USER_LOGIN,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const tokenAcquired = (payload) => ({
  type: TOKEN_ACQUIRED,
  payload,
});

export const userUnauthenticated = () => ({
  type: USER_UNAUTHETICATED,
});

export const signupAgainstAPI = () => ({
  type: SIGNUP_AGAINST_API,
});

export const loginAgainstAPI = (payload) => ({
  type: LOGIN_AGAINST_API,
  payload,
});

export const loginAgainstAPISuccess = (payload) => ({
  type: LOGIN_AGAINST_API_SUCCESS,
  payload,
});

export const LoadSessionFromLocalStorage = (payload) => ({
  type: LOAD_SESSION_FROM_LOCAL_STORAGE,
  payload,
});
