import {
  FETCH_FAVORITES_STREAMS,
  FETCH_FAVORITES_STREAMS_SUCCESS,
} from './constants';

export function fetchFavoriteStreams(payload) {
  return {
    type: FETCH_FAVORITES_STREAMS,
    payload: payload,
  };
}

export function fetchFavoriteStreamsSuccess() {
  return {
    type: FETCH_FAVORITES_STREAMS_SUCCESS,
  };
}
