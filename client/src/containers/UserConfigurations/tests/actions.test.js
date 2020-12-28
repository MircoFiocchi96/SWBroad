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
import {
  OPEN_USER_CONFIGURATIONS,
  LOAD_USER_CONFIGURATIONS,
  LOAD_USER_CONFIGURATIONS_SUCCESS,
  LOAD_USER_CONFIGURATIONS_ERROR,
  CHANGE_NICKNAME_INPUT_VALUE,
  SAVE_USER_CONFIGURATIONS,
  SAVE_USER_CONFIGURATIONS_SUCCESS,
  SAVE_USER_CONFIGURATIONS_ERROR,
  CLOSE_USER_CONFIGURATION,
} from '../constants';

describe('User configurations actions', () => {
  describe('openUserConfig', () => {
    it('should return the correct type', () => {
      const result = { type: OPEN_USER_CONFIGURATIONS };
      expect(openUserConfig()).toEqual(result);
    });
  });

  describe('loadUserConfig', () => {
    it('should return the correct type', () => {
      const result = { type: LOAD_USER_CONFIGURATIONS };
      expect(loadUserConfig()).toEqual(result);
    });
  });

  describe('loadUserConfigSuccess', () => {
    it('should return the correct type', () => {
      const payload = 'payload';
      const result = { type: LOAD_USER_CONFIGURATIONS_SUCCESS, payload };
      expect(loadUserConfigSuccess(payload)).toEqual(result);
    });
  });
  describe('loadUserConfigError', () => {
    it('should return the correct type', () => {
      const error = 'error';
      const result = { type: LOAD_USER_CONFIGURATIONS_ERROR, error };
      expect(loadUserConfigError(error)).toEqual(result);
    });
  });
  describe('changeNicknameInputValue', () => {
    it('should return the correct type', () => {
      const nickname = 'test';
      const result = { type: CHANGE_NICKNAME_INPUT_VALUE, nickname };
      expect(changeNicknameInputValue(nickname)).toEqual(result);
    });
  });
  describe('saveUserConfig', () => {
    it('should return the correct type', () => {
      const result = { type: SAVE_USER_CONFIGURATIONS };
      expect(saveUserConfig()).toEqual(result);
    });
  });
  describe('saveUserConfigSuccess', () => {
    it('should return the correct type', () => {
      const payload = 'payload';
      const result = { type: SAVE_USER_CONFIGURATIONS_SUCCESS, payload };
      expect(saveUserConfigSuccess(payload)).toEqual(result);
    });
  });
  describe('saveUserConfigError', () => {
    it('should return the correct type', () => {
      const error = 'error';
      const result = { type: SAVE_USER_CONFIGURATIONS_ERROR, error };
      expect(saveUserConfigError(error)).toEqual(result);
    });
  });
  describe('closeUserConfig', () => {
    it('should return the correct type', () => {
      const result = { type: CLOSE_USER_CONFIGURATION };
      expect(closeUserConfig()).toEqual(result);
    });
  });
});
