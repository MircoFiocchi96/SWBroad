import { START_STREAM } from '../constants';
import saveStreamSaga, { saveStream } from '../saga';
import { takeLatest } from 'redux-saga/effects';

describe('SaveStreamSaga', () => {
    const genObject = saveStreamSaga();
    it('should wait for every START_STREAM and call saveStream', () => {
        const expectedResult = takeLatest(START_STREAM, saveStream);
      expect(genObject.next().value).toEqual(expectedResult);
    });
  
    it('should be done', () => {
      expect(genObject.next().done).toBeTruthy();
    });
  });