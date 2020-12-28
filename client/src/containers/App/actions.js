import {
  INITIATE_WS_CONNECTION,
  SEND_BY_WS,
  WS_CONNECTED,
  ADD_VIEWER,
  VIEWER_CONNECTED,
  VIEWER_DISCONNECTED,
  HOST_CONNECTED,
  HOST_DISCONNECTED,
  VIEWER_DISCONNECT
} from './constants';

export const InitiateWSConnection = () => ({
  type: INITIATE_WS_CONNECTION,
});

export const WSConnected = (connID) => ({
  type: WS_CONNECTED,
  payload: connID,
});

export const SendByWS = (data) => ({ type: SEND_BY_WS, data });

export const AddViewer = (data) => ({
  type: ADD_VIEWER,
  payload: data,
});

export const viewerConnected = (payload) => ({
  type: VIEWER_CONNECTED,
  payload,
});

export const viewerDisconnected = (payload) => ({
  type: VIEWER_DISCONNECTED,
  payload,
});

export const hostConnected = () => ({
  type: HOST_CONNECTED,
});

export const hostDisconnected = () => ({
  type: HOST_DISCONNECTED,
});

export const viewerDisconnect = (payload) => ({
  type: VIEWER_DISCONNECT,
  payload,
});