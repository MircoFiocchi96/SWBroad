import { takeLatest, put, select } from 'redux-saga/effects';
import { FETCH_FAVORITES_STREAMS } from './constants';
import { getFavorite } from '../../api/user/getFavorite';
import { displayNotification } from '../Notifications/actions';
import { fetchFavoriteStreamsSuccess } from './actions';
import {
  Auth_NicknameSelector,
  Auth_AccessTokenSelector,
} from '../Auth/selectors';
import { fetchStreamsSuccess } from '../StreamsList/actions';

export default function* streamsFavoriteListSaga() {
  yield takeLatest(FETCH_FAVORITES_STREAMS, fetchFavoriteStreams);
}

export function* fetchFavoriteStreams(action) {
  const nicknameSelector = yield select(Auth_NicknameSelector);
  const tokenSelector = yield select(Auth_AccessTokenSelector);
  const data = {
    ...action.payload,
    nickname: nicknameSelector,
    token: tokenSelector,
  };
  try {
    const streams = yield getFavorite(data);
    yield put(fetchStreamsSuccess(streams));
    yield put(fetchFavoriteStreamsSuccess());
  } catch (error) {
    yield put(displayNotification({ message: error.message }));
  }
}
