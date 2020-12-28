import {
  HANDLE_LOGIN_REDIRECT,
  LOGIN_AGAINST_API_SUCCESS,
  TOKEN_ACQUIRED,
  USER_UNAUTHETICATED,
  LOAD_SESSION_FROM_LOCAL_STORAGE,
} from './constants';

export const initialState = {
  fetchingToken: true,
  accessToken: null,
  user: {
    name: null,
    nickname: null,
    email: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_LOGIN_REDIRECT:
      return {
        ...state,
        fetchingToken: true,
      };
    case TOKEN_ACQUIRED:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        fetchingToken: false,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    case USER_UNAUTHETICATED:
      return {
        ...state,
        accessToken: null,
        fetchingToken: false,
        user: {
          ...state.user,
          name: null,
          email: null,
          nickname: null,
        },
      };
    case LOGIN_AGAINST_API_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          nickname: action.payload,
        },
      };
    case LOAD_SESSION_FROM_LOCAL_STORAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
