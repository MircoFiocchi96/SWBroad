import getCategoriesDTO from '../../dtos/CategoriesDTO/getCategoriesDTO.js'
import handleError from '../../middleware/utils/handleError.js'
import CategoryService from '../../services/categoryService.js'

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getCategories = async (req, res) => {
  try {
    const service = new CategoryService()
    const dto = new getCategoriesDTO(req)
    const dtoResponse = await service.getCategories(dto)

    res.status(200).json(dtoResponse)
  } catch (error) {
    handleError(res, error)
  }
}

export default getCategories
