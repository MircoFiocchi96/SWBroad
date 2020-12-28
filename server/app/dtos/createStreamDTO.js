class CreateStreamDTO {
  id
  title
  categoryId
  description
  nickname
  parentCohost
  startDate
  endDate
  fileName
  viewers

  constructor(body) {
    this.id = body.id
    this.title = body.title
    this.categoryId = body.categoryId
    this.description = body.description
    this.nickname = body.nickname
    this.parentCohost = body.parentCohost
    this.startDate = body.startDate
    this.endDate = body.endDate
    this.fileName = body.fileName
    this.viewers = body.viewers
  }
}

export default CreateStreamDTO