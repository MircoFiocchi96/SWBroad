import { FETCH_STREAMS_SUCCESS,FETCH_STREAMS,
          SEARCH_STREAMS, SEARCH_STREAMS_SUCCESS } from '../constants';
import { fetchStreams, fetchStreamsSuccess,
          searchStreams, searchStreamsSuccess } from '../actions';
import { streams } from '../mockedData';
import { searchStreamsSaga } from '../saga';

describe('App Actions', () => {

    describe('fetchStreams', () => {
        it('should return the correct type', () => {
            const expectedResult = {
                type: FETCH_STREAMS,
            };
    
            expect(fetchStreams()).toEqual(expectedResult);
        });
    });

    describe('fetchStreamsSuccess', () => {
        it('should return the correct type and the passed repos', () => {
          const testStreams = streams;
          const expectedResult = {
            type: FETCH_STREAMS_SUCCESS,
            list: testStreams,
          };
    
          expect(fetchStreamsSuccess(testStreams)).toEqual(expectedResult);
        });
      });

    describe('searchStreams', () => {
        it('should return the correct type', () => {
            const searchText = 'test';
            const expectedResult = {
                type: SEARCH_STREAMS,
                text: searchText
            };
    
            expect(searchStreams(searchText)).toEqual(expectedResult);
        });
    });

    describe('searchStreamsSuccess', () => {
        it('should return the correct type and the passed repos', () => {
          const testStreams = streams;
          const expectedResult = {
            type: SEARCH_STREAMS_SUCCESS,
            list: testStreams,
          };
    
          expect(searchStreamsSuccess(testStreams)).toEqual(expectedResult);
        });
      });
  });
