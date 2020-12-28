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
} from './constants';

export function openUserConfig() {
  return {
    type: OPEN_USER_CONFIGURATIONS,
  };
}

export function loadUserConfig() {
  return {
    type: LOAD_USER_CONFIGURATIONS,
  };
}

export function loadUserConfigSuccess(payload) {
  return {
    type: LOAD_USER_CONFIGURATIONS_SUCCESS,
    payload,
  };
}

export function loadUserConfigError(error) {
  return {
    type: LOAD_USER_CONFIGURATIONS_ERROR,
    error,
  };
}

export function changeNicknameInputValue(nickname) {
  return {
    type: CHANGE_NICKNAME_INPUT_VALUE,
    nickname,
  };
}

export function saveUserConfig() {
  return {
    type: SAVE_USER_CONFIGURATIONS,
  };
}

export function saveUserConfigSuccess(payload) {
  return {
    type: SAVE_USER_CONFIGURATIONS_SUCCESS,
    payload,
  };
}

export function saveUserConfigError(error) {
  return {
    type: SAVE_USER_CONFIGURATIONS_ERROR,
    error,
  };
}

export function closeUserConfig() {
  return {
    type: CLOSE_USER_CONFIGURATION,
  };
}
