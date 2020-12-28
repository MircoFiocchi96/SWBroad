import produce from 'immer';

import appReducer from '../reducer';
import { loadRepos, reposLoaded, repoLoadingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: true,
      error: false,
      WSConnected: false,
      connectionID: undefined
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });
});
