import handleError from '../../middleware/utils/handleError.js'

/**
 * Verify user type
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const verifyUserType = async (req, res, next) => {
  try {
    if (req.body.type === 'publisher') {
      return next()
    } else {
      if (req.body.type === 'subscriber') {
        res.status(200).json({ result: true })
      } else {
        res.status(200).json({ result: false })
      }
    }
  } catch (error) {
    handleError(res, error)
  }
}

export default verifyUserType
