class Category {
  name
  description
  like = false

  constructor(category = {}) {
    this.name = category.name
    this.description = category.description
    this.like = category.like
  }
}
export default Category
