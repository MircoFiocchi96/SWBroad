import { runSaga } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import userConfigurationSaga, {
  openUserConfiguration,
  loadUserConfiguration,
  saveUserConfiguration,
  saveUserConfigurationSuccess,
} from '../saga';
import {
  OPEN_USER_CONFIGURATIONS,
  SAVE_USER_CONFIGURATIONS,
  LOAD_USER_CONFIGURATIONS,
  SAVE_USER_CONFIGURATIONS_SUCCESS,
} from '../constants';
import {
  loadUserConfig,
  loadUserConfigSuccess,
  saveUserConfigSuccess,
} from '../actions';

describe('userConfigurationSaga', () => {
  const genObject = userConfigurationSaga();
  it('should wait for every OPEN_USER_CONFIGURATIONS and call openUserConfiguration', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(OPEN_USER_CONFIGURATIONS, openUserConfiguration)
    );
  });
  it('should wait for every LOAD_USER_CONFIGURATIONS and call loadUserConfiguration', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(LOAD_USER_CONFIGURATIONS, loadUserConfiguration)
    );
  });
  it('should wait for every SAVE_USER_CONFIGURATIONS and call saveUserConfiguration', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(SAVE_USER_CONFIGURATIONS, saveUserConfiguration)
    );
  });
  it('should wait for every SAVE_USER_CONFIGURATIONS_SUCCESS and call saveUserConfigurationSuccess', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(SAVE_USER_CONFIGURATIONS_SUCCESS, saveUserConfigurationSuccess)
    );
  });
  it('should be done', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('UserConfiguration full saga tests', () => {
  let dispatched;
  let options;
  beforeEach(() => {
    dispatched = [];
    options = {
      dispatch: (action) => dispatched.push(action),
      getState: () => ({
        userConfigurations: {
          nickname: 'test',
        },
      }),
    };
  });
  describe('openUserConfiguration', () => {
    it('should dispatch loadUserConfig', () => {
      runSaga(options, openUserConfiguration);
      expect(dispatched[0]).toEqual(loadUserConfig());
    });
  });

  describe('loadUserConfiguration', () => {
    it('should dispatch loadUserConfigSuccess', async () => {
      const response = await runSaga(options, loadUserConfiguration);
      expect(dispatched[0]).toEqual(loadUserConfigSuccess());
    });
  });

  describe('saveUserConfiguration', () => {
    it('should dispatch saveUserConfigSuccess', () => {
      const response = runSaga(options, saveUserConfiguration);
      expect(dispatched[0]).toEqual(saveUserConfigSuccess('test'));
    });
  });
});
