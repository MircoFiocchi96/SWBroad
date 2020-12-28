import { takeLatest } from 'redux-saga/effects';
import { START_STREAM } from './constants';
import * as streamsApi from '../../api/streams';

function* saveStreamSaga() {
  yield takeLatest(START_STREAM, saveStream);
}

export function* saveStream() {
  const DTO = {
    title: 'prueba',
    category: 'Gaming',
    description: 'String',
  };
  try {
    yield streamsApi.post(DTO);
  } catch (error) {
    console.error('Error posting stream: ', error);
  }
}

export default saveStreamSaga;
