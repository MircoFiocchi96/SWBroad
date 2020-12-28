/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  OPEN_USER_CONFIGURATIONS,
  LOAD_USER_CONFIGURATIONS,
  LOAD_USER_CONFIGURATIONS_SUCCESS,
  LOAD_USER_CONFIGURATIONS_ERROR,
  CHANGE_NICKNAME_INPUT_VALUE,
  SAVE_USER_CONFIGURATIONS,
  SAVE_USER_CONFIGURATIONS_SUCCESS,
  SAVE_USER_CONFIGURATIONS_ERROR,
  CLOSE_USER_CONFIGURATION,
} from './constants';

// The initial state of the App
export const initialState = {
  open: false,
  loading: false,
  error: false,
  nickname: null,
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case OPEN_USER_CONFIGURATIONS:
        draft.open = true;
        draft.loading = false;
        draft.error = false;
        break;

      case LOAD_USER_CONFIGURATIONS:
        draft.loading = true;
        break;

      case LOAD_USER_CONFIGURATIONS_SUCCESS:
        draft.loading = false;
        draft.nickname = action.payload;
        break;

      case LOAD_USER_CONFIGURATIONS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;

      case CHANGE_NICKNAME_INPUT_VALUE:
        draft.nickname = action.nickname;
        break;

      case SAVE_USER_CONFIGURATIONS:
        draft.loading = true;
        break;

      case SAVE_USER_CONFIGURATIONS_SUCCESS:
        draft.loading = false;
        draft.open = false;
        break;

      case SAVE_USER_CONFIGURATIONS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case CLOSE_USER_CONFIGURATION:
        draft.open = false;
        break;
    }
  });

export default reducer;
