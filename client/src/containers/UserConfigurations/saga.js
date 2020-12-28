import { takeLatest, put, select } from 'redux-saga/effects';
import {
  SAVE_USER_CONFIGURATIONS,
  LOAD_USER_CONFIGURATIONS,
  SAVE_USER_CONFIGURATIONS_SUCCESS,
  LOAD_USER_CONFIGURATIONS_SUCCESS,
} from './constants';
import {
  loadUserConfigSuccess,
  openUserConfig,
  saveUserConfigSuccess,
} from './actions';
import { userConfig_NicknameSelector } from './selectors';
import {
  Auth_AccessTokenSelector,
  Auth_FetchingTokenSelector,
} from '../Auth/selectors';
import { userLogin } from '../Auth/actions';
import { push } from 'connected-react-router';
import { Auth_NicknameSelector } from '../Auth/selectors';

export default function* userConfigurationSaga() {
  yield takeLatest(LOAD_USER_CONFIGURATIONS, loadUserConfiguration);
  yield takeLatest(
    LOAD_USER_CONFIGURATIONS_SUCCESS,
    saveUserConfigurationSuccess
  );
  yield takeLatest(SAVE_USER_CONFIGURATIONS, saveUserConfiguration);
  yield takeLatest(
    SAVE_USER_CONFIGURATIONS_SUCCESS,
    saveUserConfigurationSuccess
  );
}

function* loadUserConfiguration() {
  const fetchingToken = yield select(Auth_FetchingTokenSelector);
  if (fetchingToken) {
    return;
  }
  const accessToken = yield select(Auth_AccessTokenSelector);
  if (!accessToken) {
    yield put(userLogin());
    return;
  }
  const nickname = yield select(Auth_NicknameSelector);
  if (nickname) {
    yield put(loadUserConfigSuccess(nickname));
  } else {
    yield put(openUserConfig());
  }
}

export function* saveUserConfiguration() {
  const nickname = yield select(userConfig_NicknameSelector);
  yield put(saveUserConfigSuccess(nickname));
}

export function* saveUserConfigurationSuccess(action) {
  yield put(push(action.payload));
}
