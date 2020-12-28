import { put, takeLatest } from 'redux-saga/effects';
import * as streamsApi from '../../../api/streams/get';
import  StreamsListSaga, {fetchStreams, searchStreams, searchStreamsSaga} from '../saga';
import { runSaga } from 'redux-saga';
import { fetchStreamsSuccess, searchStreamsSuccess } from '../actions';
import { streamsMock } from './__mocks__/streamMock';

import { FETCH_STREAMS, SEARCH_STREAMS } from '../constants';
const axios = require('axios');

//jest.mock('../../../api/streams/get');

//const getService = require('../../../api/streams/get');

describe('StreamsListSaga', () => {
  const genObject = StreamsListSaga();
  it('should wait for every FETCH_STREAMS and call fetchStreams', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(FETCH_STREAMS, fetchStreams)
    );
  });

  it('should be done', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('fetchStreams full saga tests', ()=> {
  it('should call api and dispatch success action', async () => {
    const dummyStreams = {
      "data": [
          {
              "category": "sports",
              "streams": {
                  "title": "Title 1",
                  "category": "sports",
                  "description": "Description",
                  "startDate": "2020-11-17",
                  "endDate": null,
                  "filename": "Filename",
                  "nickname": "gferreira",
                  "viewers": [
                      "gferreira",
                      "user2"
                  ]
              }
          },
          {
              "category": "sports",
              "streams": {
                  "title": "Title 2",
                  "category": "sports",
                  "description": "World Cup",
                  "startDate": "2020-11-17",
                  "endDate": null,
                  "filename": "Filename",
                  "nickname": "gferreira",
                  "viewers": null
              }
          },
          {
              "category": "games",
              "streams": {
                  "title": "Title 3",
                  "category": "games",
                  "description": "FIFA 2020",
                  "startDate": "2020-11-18",
                  "endDate": null,
                  "filename": "Filename",
                  "nickname": "gferreira",
                  "viewers": null
              }
          }
      ]
    };

    const requestStreams = jest.spyOn(streamsApi, 'get')
      .mockImplementation(() => Promise.resolve(dummyStreams));
  
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, fetchStreams);

    expect(requestStreams).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchStreamsSuccess(dummyStreams)]);
    requestStreams.mockClear();
  });
})

describe('SearchListSaga', () => {
  const genObject = searchStreamsSaga();
  it('should wait for every SEARCH_STREAMS and call searchStreams', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(SEARCH_STREAMS, searchStreams)
    );
  });

  it('should be done', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('Search streams saga', () => {
  it('should search the streams', async () => {
    const action2 = {
      type: FETCH_STREAMS,
      text: 'prueba'
    };
    // const gen = searchStreams(action);
    // const result = await gen.next().value;
    // expect(result).toEqual(streamsMock);

    const requestStreams = jest.spyOn(streamsApi, 'get')
      .mockImplementation(() => Promise.resolve(streamsMock));
  
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, searchStreams, action2);

    expect(requestStreams).toHaveBeenCalledTimes(1);
    //expect(requestStreams).toHaveBeenCalledWith('prueba');
    expect(dispatched).toEqual([searchStreamsSuccess(streamsMock)]);
    requestStreams.mockClear();
  })
})