import getUserEmailFromReq from '../../middleware/utils/getUserEmailFromReq.js'
import handleError from '../../middleware/utils/handleError.js'
import UserService from '../../services/userService.js'

/**
 * Return an user data using the email after authenticate it
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const login = async (req, res) => {
  try {
    if (!getUserEmailFromReq(req)) res.sendStatus(422)
    const service = new UserService()
    const dtoResponse = await service.getUserByEmail(getUserEmailFromReq(req))

    if (dtoResponse.data) {
      res.status(200).json(dtoResponse)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    handleError(res, error)
  }
}

export default login
