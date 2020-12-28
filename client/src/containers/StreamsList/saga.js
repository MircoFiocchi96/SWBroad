import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_STREAMS, SEARCH_STREAMS } from './constants';
import { fetchStreamsSuccess, searchStreamsSuccess } from './actions';
import * as streamsApi from '../../api/streams';

export default function* streamsListSaga() {
  yield takeLatest(FETCH_STREAMS, fetchStreams);
}

export function* fetchStreams(action) {
  try {
    const streams = yield streamsApi.get(action.payload);
    yield put(fetchStreamsSuccess(streams));
  } catch (error) {
    console.error(error);
  }
}

export function* searchStreamsSaga() {
  yield takeLatest(SEARCH_STREAMS, searchStreams);
}

export function* searchStreams(action) {
  try {
    const streams = yield streamsApi.get(action.payload);
    yield put(searchStreamsSuccess(streams));
  } catch (error) {
    console.error(error);
  }
}
