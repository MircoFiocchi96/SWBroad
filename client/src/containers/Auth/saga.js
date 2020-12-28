import { takeLatest, put, select } from 'redux-saga/effects';

import {
  HANDLE_LOGIN_REDIRECT,
  LOGIN_AGAINST_API,
  USER_LOGIN,
  USER_LOGOUT,
  SIGNUP_AGAINST_API,
} from './constants';
import {
  tokenAcquired,
  userUnauthenticated,
  loginAgainstAPI,
  loginAgainstAPISuccess,
  LoadSessionFromLocalStorage,
} from './actions';
import { authProvider } from '../../index';
import * as authApi from '../../api/auth';
import {
  loadUserConfig,
  saveUserConfigSuccess,
} from '../UserConfigurations/actions';
import { userConfig_NicknameSelector } from '../UserConfigurations/selectors';
import { Auth_AccessTokenSelector } from './selectors';
import { displayNotification } from '../Notifications/actions';

export default function* handleLoginSaga() {
  yield takeLatest(HANDLE_LOGIN_REDIRECT, handleRedirect);
  yield takeLatest(USER_LOGIN, login);
  yield takeLatest(USER_LOGOUT, logout);
  yield takeLatest(LOGIN_AGAINST_API, loginAPI);
  yield takeLatest(SIGNUP_AGAINST_API, signupAPI);
}

function* handleRedirect() {
  try {
    const sessionData = yield authProvider.handleRedirect();
    if (sessionData) {
      yield put(tokenAcquired(sessionData));
      yield put(loginAgainstAPI(sessionData.accessToken));
    } else {
      yield loadFromLocalStorage();
    }
  } catch (error) {
    yield loadFromLocalStorage();
  }
}

function* loadFromLocalStorage() {
  const authState = JSON.parse(localStorage.getItem('auth'));
  if (authState) {
    yield put(LoadSessionFromLocalStorage(authState));
  } else {
    yield put(userUnauthenticated());
  }
}

function* saveToLocalStorage() {
  const authState = yield select((state) => state.auth);
  localStorage.setItem('auth', JSON.stringify(authState));
}

function* login() {
  try {
    yield authProvider.loginRedirect();
  } catch (error) {
    yield put(userUnauthenticated());
  }
}

function* logout() {
  try {
    localStorage.clear('auth');
    yield authProvider.logout();
  } catch (error) {
    console.error(error);
  }
}

function* loginAPI(action) {
  try {
    const response = yield authApi.login(action.payload);
    if (response.data?.nickname) {
      yield put(loginAgainstAPISuccess(response.data.nickname));
      yield saveToLocalStorage();
    } else {
      yield put(loadUserConfig());
    }
  } catch (error) {
    console.error(error);
    yield put(userUnauthenticated());
  }
}

function* signupAPI() {
  const nickname = yield select(userConfig_NicknameSelector);
  const token = yield select(Auth_AccessTokenSelector);
  try {
    const response = yield authApi.signup({ nickname, token });
    if (response) {
      yield put(loginAgainstAPISuccess(response.data.nickname));
      yield put(saveUserConfigSuccess(response.data.nickname));
      yield saveToLocalStorage();
    } else {
      yield put(
        displayNotification({
          type: 'error',
          message: 'Please choose a different nickame',
        })
      );
      yield put(loadUserConfig());
    }
  } catch (error) {
    console.error(error);
  }
}
