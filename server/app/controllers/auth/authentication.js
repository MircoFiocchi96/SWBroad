import handleError from '../../middleware/utils/handleError.js'
import passport from 'passport'
import '../../middleware/auth/passport.js'
import UserService from '../../services/userService.js'

const service = new UserService()

/**
 * Authenticate an user with AzureAD from RoundTrip validator request
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const authentication = async (req, res, next) => {
  try {
    passport.authenticate(
      'oauth-bearer',
      { session: false },
      async (_, req, user) => {
        if (req === false) {
          res.status(200).json({ result: false }) // Response HTTP status 200 OK and false into the body when the token is invalid
        } else {
          if (
            (await service.isValidNickname(
              user.preferred_username,
              req.body.streamID
            )) === true
          ) {
            res.status(200).json({ result: true }) // Response HTTP status 200 OK and true into the body when the token is valid
          } else {
            res.status(200).json({ result: false })
          }
        }
      }
    )(req, res, next)
  } catch (error) {
    handleError(res, error)
  }
}

export default authentication
