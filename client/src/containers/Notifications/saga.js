import { toast } from 'react-toastify';
import { takeLatest } from 'redux-saga/effects';
import { DISPLAY_NOTIFICATION } from './constants';

function* notificationSaga() {
  yield takeLatest(DISPLAY_NOTIFICATION, displayNotification);
}

function* displayNotification(action) {
  yield toast[action.payload.type](
    action.payload.message,
    action.payload.extra
  );
}

export default notificationSaga;
