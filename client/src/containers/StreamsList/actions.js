import {
  FETCH_STREAMS,
  FETCH_STREAMS_SUCCESS,
  SEARCH_STREAMS,
  SEARCH_STREAMS_SUCCESS,
} from './constants';

export function fetchStreams(payload) {
  return {
    type: FETCH_STREAMS,
    payload: payload,
  };
}

export function fetchStreamsSuccess(streams) {
  return {
    type: FETCH_STREAMS_SUCCESS,
    list: streams,
  };
}

export function searchStreams(payload) {
  return {
    type: SEARCH_STREAMS,
    payload: payload,
  };
}

export function searchStreamsSuccess(streams) {
  return {
    type: SEARCH_STREAMS_SUCCESS,
    list: streams,
  };
}
