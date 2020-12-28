import reducer from '../reducer';
import produce from 'immer';
import {
  openUserConfig,
  loadUserConfig,
  loadUserConfigSuccess,
  loadUserConfigError,
  changeNicknameInputValue,
  saveUserConfig,
  saveUserConfigSuccess,
  saveUserConfigError,
  closeUserConfig,
} from '../actions';

describe('UserConfigurations reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      open: false,
      loading: false,
      error: false,
      nickname: null,
    };
  });
  it('should return the initial state', () => {
    const expectedResult = state;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the openUserConfig action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.open = true;
      draft.loading = false;
      draft.error = false;
    });
    expect(reducer(state, openUserConfig())).toEqual(expectedResult);
  });
  it('should handle the loadUserConfig action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.loading = true;
    });
    expect(reducer(state, loadUserConfig())).toEqual(expectedResult);
  });
  it('should handle the loadUserConfigSuccess action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.loading = false;
      draft.nickname = 'nickname';
    });
    expect(reducer(state, loadUserConfigSuccess('nickname'))).toEqual(
      expectedResult
    );
  });
  it('should handle the loadUserConfigError action correctly', () => {
    const error = 'error';
    const expectedResult = produce(state, (draft) => {
      draft.loading = false;
      draft.error = error;
    });
    expect(reducer(state, loadUserConfigError(error))).toEqual(expectedResult);
  });
  it('should handle the changeNicknameInputValue action correctly', () => {
    const nickname = 'nickname';
    const expectedResult = produce(state, (draft) => {
      draft.nickname = nickname;
    });
    expect(reducer(state, changeNicknameInputValue(nickname))).toEqual(
      expectedResult
    );
  });
  it('should handle the saveUserConfig action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.loading = true;
    });
    expect(reducer(state, saveUserConfig())).toEqual(expectedResult);
  });
  it('should handle the saveUserConfigSuccess action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.loading = false;
      draft.open = false;
    });
    expect(reducer(state, saveUserConfigSuccess())).toEqual(expectedResult);
  });
  it('should handle the saveUserConfigError action correctly', () => {
    const error = 'error';
    const expectedResult = produce(state, (draft) => {
      draft.error = error;
      draft.loading = false;
    });
    expect(reducer(state, saveUserConfigError(error))).toEqual(expectedResult);
  });
  it('should handle the closeUserConfig action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.open = false;
    });
    expect(reducer(state, closeUserConfig())).toEqual(expectedResult);
  });
});
