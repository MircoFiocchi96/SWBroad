import Category from '../models/category.js'

class ResponseCategoriesDTO {
  data

  constructor(categories, userCategories) {
    this.data = categories.map((category) => {
      category.like = userCategories.find((e) => e.toLowerCase() == category.name.toLowerCase()) == category.name.toLowerCase()
      return new Category(category)
    })
  }
}

export default ResponseCategoriesDTO
