import DatabaseContext from '../azureCosmoDb/databaseContext.js'

class UserDao {
  dbContext = undefined

  async setContext() {
    if (this.dbContext == undefined) {
      this.dbContext = new DatabaseContext('users')
      await this.dbContext.init()
    }
  }

  async createUser(user) {
    await this.setContext()

    return await this.dbContext.addItem(user)
  }

  async patchUserFavoritesCategories(userFavoriteCategory) {
    await this.setContext()
    let user = await this.getUserByNickName(userFavoriteCategory.userId)
    user.categories = user.categories ?? []
    if (userFavoriteCategory.isFavorite) {
      if (user.categories.indexOf(userFavoriteCategory.categoryId) === -1)
        user.categories.push(userFavoriteCategory.categoryId)
    } else {
      user.categories = user.categories.filter(
        (e) => e.toLowerCase() !== userFavoriteCategory.categoryId.toLowerCase()
      )
    }
    return await this.dbContext.updateItem(user)
  }

  async getUserByNickName(userNickName) {
    return await this.#getUserBy('nickname', userNickName)
  }

  async getUserByEmail(userEmail) {
    return await this.#getUserBy('email', userEmail)
  }

  async #getUserBy(fieldName, data) {
    await this.setContext()
    const query = {
      query:
        'SELECT c.id, c.nickname, c.email, c.name, c.lastname, c.categories ' +
        'FROM c ' +
        'WHERE (c.' +
        fieldName +
        ' = @data)',
      parameters: [
        {
          name: '@data',
          value: data
        }
      ]
    }
    let result = await this.dbContext.find(query)
    result = result[0]
    if (result == undefined) throw new Error('User not found')
    return result
  }

  async getUsers(user, withCount = false) {
    await this.setContext()
    const select =
      withCount === true
        ? 'SELECT VALUE COUNT(1) '
        : 'SELECT c.nickname, c.email, c.name, c.lastname, c.categories '

    const query = {
      query:
        select +
        'FROM c ' +
        'WHERE (c.email=@email) ' + // Email is required
        'AND (c.nickname=@nickname OR IS_DEFINED(@nickname)=false) ' +
        'AND (c.name=@name OR IS_DEFINED(@name)=false) ' +
        'AND (c.lastname=@lastname OR IS_DEFINED(@lastname)=false)',
      parameters: [
        {
          name: '@email',
          value: user.email
        },
        {
          name: '@nickname',
          value: user.nickname
        },
        {
          name: '@name',
          value: user.name
        },
        {
          name: '@lastname',
          value: user.lastname
        }
      ]
    }

    return await this.dbContext.find(query)
  }
}

export default UserDao
