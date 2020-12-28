import DatabaseContext from '../azureCosmoDb/databaseContext.js'

class CategoryDao {
  constructor() {
    this.dbContext = new DatabaseContext('categories')
  }

  async getCategories() {
    await this.dbContext.init()
    const query = {
      query: 'SELECT c.name, c.description ' + 'FROM c ' + 'ORDER BY c.name ASC'
    }

    return await this.dbContext.find(query)
  }
}

export default CategoryDao
