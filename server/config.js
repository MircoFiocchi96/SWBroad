const config = {
  databaseId: 'broadcast-database',
  vaultUrl: 'https://broadcastapp-keys.vault.azure.net/',
  secretName: 'BroadcastApp-Db-Key',
  creds: {
    // Requried
    identityMetadata:
      'https://login.microsoftonline.com/b25036e3-de39-4fec-a4aa-bda41b870d38/v2.0/.well-known/openid-configuration',
    // Required
    clientID: 'd066846f-56f0-4f35-8eb1-ffe769583744',
    // Required.
    // If you are using the common endpoint, you should either set `validateIssuer` to false, or provide a value for `issuer`.
    validateIssuer: true,
    // Required.
    // Set to true if you use `function(req, token, done)` as the verify callback.
    // Set to false if you use `function(req, token)` as the verify callback.
    passReqToCallback: true,
    // Required if you are using common endpoint and setting `validateIssuer` to true.
    // For tenant-specific endpoint, this field is optional, we will use the issuer from the metadata by default.
    issuer:
      'https://login.microsoftonline.com/b25036e3-de39-4fec-a4aa-bda41b870d38/v2.0',
    // Optional. Default value is false.
    // Set to true if you accept access_token whose `aud` claim contains multiple values.
    allowMultiAudiencesInToken: false,
    // Optional. 'error', 'warn' or 'info'
    loggingLevel: 'info',
    audience: null
  }
}
export default config
