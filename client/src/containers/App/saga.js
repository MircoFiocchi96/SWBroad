import { take, fork, call, put, takeLatest, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  INITIATE_WS_CONNECTION,
  SEND_BY_WS,
  ADD_VIEWER,
  VIEWER_CONNECTED,
  VIEWER_DISCONNECTED,
  HOST_CONNECTED,
  HOST_DISCONNECTED,
  VIEWER_DISCONNECT
} from './constants';
import getWebSocket from '../../utils/getWebSocket';
import { displayNotification } from '../Notifications/actions';
import {
  WSConnected,
  viewerConnected,
  viewerDisconnected,
  hostConnected,
  hostDisconnected,
} from './actions';
import * as streamsApi from '../../api/streams';
import { Auth_NicknameSelector } from '../Auth/selectors';
import { UpdateViewerCount } from '../StreamView/actions';

export default function* rootSaga() {
  yield fork(flow);
  yield fork(connectionsHandlers);
}

export function* connectionsHandlers() {
  yield takeLatest(VIEWER_CONNECTED, handleViewerConnection);
  yield takeLatest(VIEWER_DISCONNECTED, handleViewerDisconnection);
  yield takeLatest(HOST_CONNECTED, handleHostConnection);
  yield takeLatest(HOST_DISCONNECTED, handleHostDisconnection);
}

export function* flow() {
  yield take(INITIATE_WS_CONNECTION);
  const socket = yield call(connect);
  yield put(WSConnected(socket.id));
  yield fork(read, socket);
  yield fork(write, socket);
  const action = yield take(VIEWER_DISCONNECT);
  yield call(disconnect, socket, action);
}

function connect() {
  const socket = getWebSocket();
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function* disconnect(socket, action) {
  console.log(action);
  socket.emit('viewerDisconnect', action.payload);
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

export function subscribe(socket) {
  return new eventChannel((emit) => {
    const handleViewerConnectionWS = (data) => {
      return emit(viewerConnected(data));
    };

    const handleHostConnectionWS = (data) => {
      return emit(hostConnected(data));
    };

    const handleHostDisconnectionWS = (data) => {
      return emit(hostDisconnected(data));
    };

    const handleViewerDisconnectionWS = (data) => {
      return emit(viewerDisconnected(data));
    };

    socket.on('viewerConnected', handleViewerConnectionWS);
    socket.on('viewerDisconnected', handleViewerDisconnectionWS);
    socket.on('hostConnected', handleHostConnectionWS);
    socket.on('hostDisconnected', handleHostDisconnectionWS);
    return () => {};
  });
}

export function* write(socket) {
  while (true) {
    const { data } = yield take(SEND_BY_WS);
    socket.emit(data.type, data.info);
  }
}

export function* addViewerSaga() {
  yield takeLatest(ADD_VIEWER, addViewer);
}

export function* addViewer(action) {
  try {
    yield streamsApi.addViewer(action.payload);
  } catch (error) {
    console.error(error);
  }
}

export function* handleViewerConnection(action) {
  const { nickname, message, name } = action.payload;
  const channelNickname = yield select(Auth_NicknameSelector);
  if (nickname === channelNickname) {
    yield put(displayNotification({ message: message }));
  }

  yield put(UpdateViewerCount({ name: name, connection: true}));
}

export function* handleHostConnection() {
  yield put(displayNotification({ message: 'Host connected' }));
}

export function* handleHostDisconnection() {
  yield put(displayNotification({ message: 'Host disconnected.' }));
}

export function* handleViewerDisconnection(action) {
  const { nickname, message, name } = action.payload;
  yield put(displayNotification({ message: `${name} has disconnected.` }));
  yield put(UpdateViewerCount({name: name, connection: false}));
}
