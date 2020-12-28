import handleError from '../../middleware/utils/handleError.js'
import UserService from '../../services/userService.js'
import SignUpInputDTO from '../../dtos/signUpInputDTO.js'
import StreamServcice from '../../services/streamService.js'
import Stream from '../../models/stream.js'

/**
 * Create an user after authenticate it
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const signup = async (req, res) => {
  try {
    const userService = new UserService()
    const streamService = new StreamServcice()
    const userDTO = new SignUpInputDTO(req)
    const dtoResponse = await userService.createUser(userDTO)
    const stream = Stream.createEmptyStream(userDTO.nickname)

    await streamService.createStream(stream)

    res.status(200).json(dtoResponse)
  } catch (error) {
    handleError(res, error)
  }
}

export default signup
