import {
  userConfig_OpenSelector,
  userConfig_NicknameSelector,
  userConfig_LoadingSelector,
} from '../selectors';

describe('User configuration selectors', () => {
  let state;
  beforeEach(() => {
    state = {
      userConfigurations: {
        open: false,
        loading: false,
        error: false,
        nickname: 'nickname',
      },
    };
  });
  describe('userConfig_OpenSelector', () => {
    it('should return a false', () => {
      expect(userConfig_OpenSelector(state)).toBe(false);
    });
  });
  describe('userConfig_NicknameSelector', () => {
    it('should return a nickname', () => {
      expect(userConfig_NicknameSelector(state)).toEqual('nickname');
    });
  });
  describe('userConfig_LoadingSelector', () => {
    it('should return a false', () => {
      expect(userConfig_LoadingSelector(state)).toBe(false);
    });
  });
});
