export const msalConfig = {
  auth: {
    clientId: 'd066846f-56f0-4f35-8eb1-ffe769583744',
    authority:
      'https://login.microsoftonline.com/b25036e3-de39-4fec-a4aa-bda41b870d38',
    redirectUri: 'http://localhost:3000',
  },
};
export const msalScopes = {
  scopes: ['http://calcite-sp/user_impersonation'],
};
