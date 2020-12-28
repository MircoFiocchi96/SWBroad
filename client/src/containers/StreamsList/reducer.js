import produce from 'immer';
import { FETCH_STREAMS, FETCH_STREAMS_SUCCESS, 
        SEARCH_STREAMS, SEARCH_STREAMS_SUCCESS } from './constants';

export const initialState = {
  loading: false,
  error: false,
  list: [],
};

/* eslint-disable default-case, no-param-reassign */
const streamsListReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_STREAMS:
        draft.loading = true;
        draft.error = false;
        break;
      case FETCH_STREAMS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.list = action.list;
        break;
      case SEARCH_STREAMS:
          draft.loading = true;
          draft.error = false;
          break;
      case SEARCH_STREAMS_SUCCESS:
          draft.loading = false;
          draft.error = false;
          draft.list = action.list;
          break;
    }
  });

export default streamsListReducer;
