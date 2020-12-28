import produce from 'immer';
import {
  FETCH_FAVORITES_STREAMS,
  FETCH_FAVORITES_STREAMS_SUCCESS,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  list: [],
};

/* eslint-disable default-case, no-param-reassign */
const favoriteListReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_FAVORITES_STREAMS:
        draft.loading = true;
        draft.error = false;
        break;
      case FETCH_FAVORITES_STREAMS_SUCCESS:
        draft.loading = false;
        draft.error = false;
    }
  });

export default favoriteListReducer;
