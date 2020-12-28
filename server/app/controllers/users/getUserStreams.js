import handleError from '../../middleware/utils/handleError.js'
import UserService from '../../services/userService.js'
import getUsersFavoritesStreamsDTO from '../../dtos/UserDtos/getUsersFavoritesStreamsDTO.js'
/**
 * Return an user data using the email after authenticate it
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getUserStreams = async (req, res) => {
  try {
    const dto = new getUsersFavoritesStreamsDTO(req)
    const service = new UserService()    
    const dtoResponse = await service.getUserFavoritesStreams(dto)

    res.status(200).json(dtoResponse)
  } catch (error) {
    handleError(res, error)
  }
}

export default getUserStreams
