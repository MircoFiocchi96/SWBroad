class patchUserFavoritesCategoriesDTO {
  categoryId
  isFavorite
  userId

  constructor(req) {
    this.userId = req.params.nickName
    this.categoryId = req.params.categoryId
    this.isFavorite = req.body.like === true
  }
}

export default patchUserFavoritesCategoriesDTO
