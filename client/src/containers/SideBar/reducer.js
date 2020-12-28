import produce from 'immer';
import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  IS_LIKE_CATEGORY,
} from './constants';

export const initialState = {
  loading: true,
  error: false,
  list: [],
  like: null,
  category: null,
};

/* eslint-disable default-case, no-param-reassign */
const categoryListReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_CATEGORIES:
        draft.loading = true;
        draft.error = false;
        break;
      case FETCH_CATEGORIES_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.list = action.list;
        break;
      case IS_LIKE_CATEGORY:
        draft.like = action.payload.like;
        draft.category = action.payload.category;
    }
  });

export default categoryListReducer;
