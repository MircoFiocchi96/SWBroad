import handleError from '../../middleware/utils/handleError.js'

/**
 * Rename the token property to access_token so that the BearerStrategy library can validate
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const changeTokenProperty = async (req, res, next) => {
  try {
    
    req.body = Object.assign(req.body, { access_token: req.body.token })  
    delete req.body.token

    return next()

  } catch (error) {
    handleError(res, error)
  }
}

export default changeTokenProperty