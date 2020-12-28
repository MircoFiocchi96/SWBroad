import { put, takeLatest, take } from 'redux-saga/effects';
import { fetchStreamSuccess } from './actions';
import { FETCH_STREAM, VIEWERS_UPDATE } from './constants';
import * as streamApi from '../../api/streams';

export default function* streamViewSaga(){
    yield takeLatest(FETCH_STREAM, fetchStream);
}

export function* fetchStream(action){
    try {
        const stream = yield streamApi.getById(action.payload);
        yield put(fetchStreamSuccess(stream));
    } catch(error) {
        console.error(error);
    }
}

export function* subscriberSaga(){
    yield take(VIEWERS_UPDATE);
}
