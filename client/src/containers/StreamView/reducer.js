import produce from 'immer';
import { HOST_CONNECTED, HOST_DISCONNECTED } from '../App/constants';
import { FETCH_STREAM, FETCH_STREAM_SUCCESS, VIEWERS_UPDATE } from './constants';

export const initialState = {
  started: false,
  viewers: [],
};

/* eslint-disable default-case, no-param-reassign */
const streamViewReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HOST_CONNECTED:
        draft.started = true;
        break;
      case HOST_DISCONNECTED:
        draft.started = false;
        break;
      case FETCH_STREAM:
        break;
      case FETCH_STREAM_SUCCESS:
        draft.viewers = action.payload.viewers.filter(v => !v.endDate).map(s => s.name);
        //console.log('Payload: ', action.payload);
        break;
      case VIEWERS_UPDATE:
        if(action.payload.connection){
          draft.viewers = state.viewers ? [ action.payload.name, ...state.viewers ] : [action.payload.name];
          console.log('Reducer connection...', draft.viewers);
        } else {
          draft.viewers = state.viewers ? state.viewers.filter(v => v !== action.payload.name) : [];
          console.log('Reducer disconnection...')
        }
    }
  });

export default streamViewReducer;
