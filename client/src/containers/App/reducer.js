import produce from 'immer';
import {
  LOAD_SESSION_FROM_LOCAL_STORAGE,
  USER_UNAUTHETICATED,
} from '../Auth/constants';
import {
  LOGIN_AGAINST_API_SUCCESS,
  LOGIN_AGAINST_API,
} from '../Auth/constants';

import { SAVE_USER_CONFIGURATIONS_SUCCESS } from '../UserConfigurations/constants';
import { WS_CONNECTED, ADD_VIEWER } from './constants';

export const initialState = {
  loading: true,
  error: false,
  WSConnected: false,
  connectionID: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_AGAINST_API:
        draft.loading = true;
        break;
      case WS_CONNECTED:
        draft.WSConnected = true;
        draft.connectionID = action.payload;
        break;
      case ADD_VIEWER:
      case USER_UNAUTHETICATED:
      case LOGIN_AGAINST_API_SUCCESS:
      case SAVE_USER_CONFIGURATIONS_SUCCESS:
      case LOAD_SESSION_FROM_LOCAL_STORAGE:
        draft.loading = false;
        break;
    }
  });

export default appReducer;
