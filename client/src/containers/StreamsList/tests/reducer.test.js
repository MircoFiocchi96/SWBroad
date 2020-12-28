import produce from 'immer';
import streamsListReducer from '../reducer';
import { fetchStreams, fetchStreamsSuccess,
        searchStreams, searchStreamsSuccess } from '../actions';
import { streams } from '../mockedData';

describe('streamsListReducer', () => {
    let state;
    beforeEach(() => {
      state = {
        loading: false,
        error: false,
        list: []
      };
    });
  
    it('should return the initial state', () => {
      const expectedResult = state;
      expect(streamsListReducer(state, {})).toEqual(expectedResult);
    }); 
  
    it('should handle the fetchStreams action correctly', () => {
      const expectedResult1 = produce(state, draft => {
        draft.loading = true;
        draft.error = false;
      });
  
      expect(streamsListReducer(state, fetchStreams(streams))).toEqual(expectedResult1);
    });
    
    it('should handle the fetchStreamsSuccess action correctly', () => {
        const expectedResult2 = produce(state, draft => {
          draft.loading = false;
          draft.error = false;
          draft.list = streams;
        });

        expect(streamsListReducer(state, fetchStreamsSuccess(streams))).toEqual(expectedResult2);
      });

    
    //Search streams
    it('should handle the searchStreams action correctly', () => {
        const expectedResult3 = produce(state, draft => {
          draft.loading = true;
          draft.error = false;
        });
    
        expect(streamsListReducer(state, searchStreams(streams))).toEqual(expectedResult3);
      });
      
    it('should handle the searchStreamsSuccess action correctly', () => {
        const expectedResult4 = produce(state, draft => {
          draft.loading = false;
          draft.error = false;
          draft.list = streams;
        });

        expect(streamsListReducer(state, searchStreamsSuccess(streams))).toEqual(expectedResult4);
      });

  });