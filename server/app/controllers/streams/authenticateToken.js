import handleError from '../../middleware/utils/handleError.js'
import StreamService from '../../services/streamService.js'
import Viewer from '../../models/viewer.js'
import passport from 'passport'
import '../../middleware/auth/passport.js'

/**
 * Add viewer data into the database
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const authenticateToken = async (req, res, next) => {
  try {
    req.body = Object.assign(req.body, { access_token: req.body.token })
    delete req.body.token

    if (req.body.access_token !== undefined) {
      // Validate user against AzureAD
      passport.authenticate(
        'oauth-bearer',
        { session: false },
        async (_, req, user) => {
          if (req === false) {
            res.status(200).json({ result: false })
          } else {
            req.body = Object.assign(req.body, {
              email: user.preferred_username
            })
            next()
          }
        }
      )(req, res, next)
    } else {
      next()
    }
  } catch (error) {
    handleError(res, error)
  }
}

export default authenticateToken
