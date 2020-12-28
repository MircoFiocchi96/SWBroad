class getFavoritesStreamsDTO {
  isFavorite
  limit
  page
  categories

  constructor(getUsersFavoritesStreamsDTO) {
    this.isFavorite = getUsersFavoritesStreamsDTO.like 
    this.limit = getUsersFavoritesStreamsDTO.limit
    this.page = getUsersFavoritesStreamsDTO.page
  }
}

export default getFavoritesStreamsDTO
