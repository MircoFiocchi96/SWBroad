import * as msal from '@azure/msal-browser';
import { msalConfig, msalScopes } from '../config/msal';

class MsalAuthProvider {
  authInstance;
  token;
  myAccounts;

  constructor() {
    this.authInstance = new msal.PublicClientApplication(msalConfig);
  }

  async handleRedirect() {
    const response = await this.authInstance.handleRedirectPromise();
    if (response) this.myAccounts = this.authInstance.getAllAccounts();
    return response
      ? {
          accessToken: response.accessToken,
          name: this.myAccounts[0]?.name,
          email: this.myAccounts[0]?.username,
        }
      : null;
  }

  async loginRedirect() {
    await this.authInstance.loginRedirect(msalScopes);
  }

  async logout() {
    await this.authInstance.logout();
  }
}

export default MsalAuthProvider;
