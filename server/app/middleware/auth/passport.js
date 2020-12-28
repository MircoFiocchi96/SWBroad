import passport from 'passport'
import passportAzureAD from 'passport-azure-ad'
import config from '../../../config.js'

const OIDCBearerStrategy = passportAzureAD.BearerStrategy

const options = {
    identityMetadata: config.creds.identityMetadata,
    clientID: config.creds.clientID,
    validateIssuer: config.creds.validateIssuer,
    issuer: config.creds.issuer,
    passReqToCallback: config.creds.passReqToCallback,
    isB2C: config.creds.isB2C,
    policyName: config.creds.policyName,
    allowMultiAudiencesInToken: config.creds.allowMultiAudiencesInToken,
    audience: config.creds.audience,
    loggingLevel: config.creds.loggingLevel
  }

const bearerStrategy = new OIDCBearerStrategy(options, 
    function (req, token, done) {
        console.log(token, 'was the token retreived')
        done(null, req, token)
    }
)

passport.use(bearerStrategy)
