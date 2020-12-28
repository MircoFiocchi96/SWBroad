import handleError from '../../middleware/utils/handleError.js'
import UserService from '../../services/userService.js'
import patchUserFavoritesCategoriesDTO from '../../dtos/UserDtos/patchUserFavoritesCategoriesDTO.js'

/**
 * Create an user after authenticate it
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const patchUserFavoritesCategories = async (req, res) => {
  try {
    const userService = new UserService()
    const favoritesCategoriesDTO = new patchUserFavoritesCategoriesDTO(req)
    const response = await userService.patchUserCategories(
      favoritesCategoriesDTO
    )

    res.status(200).json(response)
  } catch (error) {
    handleError(res, error)
  }
}

export default patchUserFavoritesCategories
