import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../NavBar';
import HomePage from '../HomePage';
import StreamView from '../StreamView';
import UserRecords from '../UserRecords';
import NotFound from '../NotFound';
import Notifications from '../Notifications';
import Loading from '../../components/Global/Loading';

import UserConfigurations from '../UserConfigurations';

import { handleLoginRedirect } from '../Auth/actions';

import { App_LoadingSelector } from './selectors';

import GlobalStyle, {
  MainContainer,
} from '../../components/Global/GlobalStyles';

import { InitiateWSConnection } from './actions';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(App_LoadingSelector);
  useEffect(() => {
    dispatch(handleLoginRedirect());
  }, [dispatch]);

  useEffect(() => {
    dispatch(InitiateWSConnection());
  }, [dispatch]);

  return (
    <div className='App-Layout'>
      <GlobalStyle />
      <Notifications />
      <NavBar />
      <MainContainer>
        {loading && <Loading />}
        {!loading && (
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/:URLNickname' component={StreamView} />
            <Route exact path='/*/Records' component={UserRecords} />
            <Route path='/*/*' component={NotFound} />
          </Switch>
        )}
        <UserConfigurations />
      </MainContainer>
    </div>
  );
}

export default App;
