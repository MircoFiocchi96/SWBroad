class getFavoritesStreamsDTO {
  isFavorite
  limit
  page
  nickName

  constructor(req) {
    this.isFavorite = req.query.favorite == 'true'
    this.limit = req.query.limit ?? 10000
    this.page = req.query.page ? req.query.page * this.limit - this.limit : 0
    this.nickName = req.params.nickName
  }
}

export default getFavoritesStreamsDTO
