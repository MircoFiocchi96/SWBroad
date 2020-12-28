import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ModalProvider } from 'styled-react-modal';

import { ThemeProvider } from 'styled-components';
import * as theme from './components/Global/PrimaryTheme';

import App from './containers/App';
import getStore from './utils/getStore';
import history from './utils/history';
import MsalAuthProvider from './utils/authProvider';

export const authProvider = new MsalAuthProvider();

const initialState = {};

const store = getStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </ModalProvider>
  </ThemeProvider>,
  MOUNT_NODE
);
