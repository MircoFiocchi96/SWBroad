import UserDao from '../dal/userDao.js'
import User from '../models/user.js'
import getUserByNicknameDTO from '../dtos/UserDtos/getUserByNickNameDTO.js'
import StreamService from '../services/streamService.js'
import ResponseUserDto from '../dtos/responseUserDTO.js'
import getFavoritesStreamsDTO from '../dtos/UserDtos/getFavoritesStreamsDTO.js'

const dao = await new UserDao()

class UserService {
  async patchUserCategories(favoritesCategoriesDTO) {
    dao.patchUserFavoritesCategories(favoritesCategoriesDTO)
  }

  async getUserByNickName(userStreamsDto) {
    return await dao.getUserByNickName(userStreamsDto.nickName)
  }

  async getUserFavoritesStreams(getUsersFavoritesStreamsDTO) {
    const userByNickName = new getUserByNicknameDTO(getUsersFavoritesStreamsDTO)
    const userFavoritesStreamsDTO = new getFavoritesStreamsDTO(getUsersFavoritesStreamsDTO)
    const dtoResponse = getUsersFavoritesStreamsDTO.isFavorite
      ? await this.#getFavorites(userByNickName, userFavoritesStreamsDTO)
      : await this.#getNotFavorites(userFavoritesStreamsDTO)

    return dtoResponse
  }

  async #getFavorites(userByNickName, userFavoritesStreamsDTO) {    
    const streamService = new StreamService()
    const retrievedUser = await this.getUserByNickName(userByNickName)
    userFavoritesStreamsDTO.categories = retrievedUser.categories
    const dtoResponse = await streamService.getStreamsByCategories(
      userFavoritesStreamsDTO
    )
    return dtoResponse
  }

  async #getNotFavorites(userFavoritesStreamsDTO) {
    const streamService = new StreamService()
    const dtoResponse = await streamService.getStreamsByCategory(
      userFavoritesStreamsDTO.page,
      userFavoritesStreamsDTO.limit,
      '',
      '',
      ''
    )
    return dtoResponse
  }

  async createUser(userDTO) {
    const user = new User(userDTO)

    const userResponse = await dao.createUser(user)

    return new ResponseUserDto(userResponse)
  }

  async getUserByEmail(email) {
    const user = new User()
    user.email = email

    const userResponse = await dao.getUsers(user)
    const returnUser = userResponse[0]
      ? new User(userResponse[0])
      : userResponse[0]

    return new ResponseUserDto(returnUser)
  }

  async isValidNickname(email, nickname) {
    const user = new User()
    user.email = email
    user.nickname = nickname

    const count = await dao.getUsers(user, true)

    return count !== 0
  }
}

export default UserService
