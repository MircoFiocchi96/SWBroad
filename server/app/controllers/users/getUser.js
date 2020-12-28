import handleError from '../../middleware/utils/handleError.js'
import '../../middleware/auth/passport.js'
import UserService from '../../services/userService.js'
import getUserByNicknameDTO from '../../dtos/UserDtos/getUserByNickNameDTO.js'

/**
 * Authenticate an user with AzureAD from RoundTrip validator request
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getUser = async (req, res) => {
  try {
    const dto = new getUserByNicknameDTO(req.params)
    const service = new UserService()
    const dtoResponse = await service.getUserByNickName(dto)

    res.status(200).json(dtoResponse)
  } catch (error) {
    handleError(res, error)
  }
}

export default getUser
