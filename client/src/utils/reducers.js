import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './history';
import AppReducer from '../containers/App/reducer';
import userConfigurationReducer from '../containers/UserConfigurations/reducer';
import streamsListReducer from '../containers/StreamsList/reducer';
import authReducer from '../containers/Auth/reducer';
import categoriesReducer from '../containers/SideBar/reducer';
import streamViewReducer from '../containers/StreamView/reducer';
import favoriteListReducer from '../containers/NavBar/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    app: AppReducer,
    router: connectRouter(history),
    userConfigurations: userConfigurationReducer,
    streams: streamsListReducer,
    auth: authReducer,
    categories: categoriesReducer,
    streamView: streamViewReducer,
    navBar: favoriteListReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
