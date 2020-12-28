import userConfigurationSaga from '../containers/UserConfigurations/saga';
import streamsListSaga, {
  searchStreamsSaga,
} from '../containers/StreamsList/saga';
import saveStreamSaga from '../containers/Red5Content/saga';
import handleLoginSaga from '../containers/Auth/saga';
import { addViewerSaga } from '../containers/App/saga';
import notificationSaga from '../containers/Notifications/saga';
import rootSaga from '../containers/App/saga';
import categoriesListSaga from '../containers/SideBar/saga';
import streamViewSaga, {subscriberSaga} from '../containers/StreamView/saga';
import { setLikeCategory } from '../containers/SideBar/saga';
import streamsFavoriteListSaga from '../containers/NavBar/saga';

export const sagas = {
  rootSaga,
  handleLoginSaga,
  userConfigurationSaga,
  streamsListSaga,
  saveStreamSaga,
  searchStreamsSaga,
  notificationSaga,
  addViewerSaga,
  categoriesListSaga,
  streamViewSaga,
  subscriberSaga,
  setLikeCategory,
  streamsFavoriteListSaga,
};

export const initSagas = (sagaMiddleware) => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
