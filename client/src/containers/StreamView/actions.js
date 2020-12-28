import { FETCH_STREAM, FETCH_STREAM_SUCCESS, VIEWERS_UPDATE } from './constants';

export function fetchStream(data) {
  return {
    type: FETCH_STREAM,
    payload: data
  };
}

export function fetchStreamSuccess(stream) {
  return {
    type: FETCH_STREAM_SUCCESS,
    payload: stream,
  };
}

export const UpdateViewerCount = (data) => ({
    type: VIEWERS_UPDATE,
    payload: data
});