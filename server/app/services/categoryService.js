import CategoryDao from '../dal/categoryDao.js'
import UserDao from '../dal/userDao.js'
import ResponseCategoriesDTO from '../dtos/responseCategoriesDTO.js'

const dao = new CategoryDao()

class CategoryService {
  async getCategories(dto) {
    const dao = new CategoryDao()
    let userCategories = [] 
    const categories = await dao.getCategories()
    if (dto.isLogged) {
      const userDao = new UserDao()
      userCategories = (await userDao.getUserByEmail(dto.email)).categories ?? []
    }

    const dtoResponse = new ResponseCategoriesDTO(
      categories,
      userCategories
    )

    return dtoResponse
  }
}

export default CategoryService
