import { START_STREAM } from '../constants';
import { startStream } from '../actions';

describe('App Actions', () => {
    describe('Start stream', () => {
        it('should return the correct type', () => {
            const expectedResult = {
                type: START_STREAM,
            };

            expect(startStream()).toEqual(expectedResult);
        });
    });
})