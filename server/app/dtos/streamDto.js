class StreamDTO {
  constructor(stream) {
    this.id = stream.id
    this.title = stream.title
    this.category = stream.category
    this.description = stream.description
    this.startDate = stream.startDate
    this.endDate = stream.endDate
    this.filename = stream.filename
    this.nickname = stream.nickname
    this.viewersCount = stream.viewers ? stream.viewers.length : 0
    this.avatar = null
  }
}

export default StreamDTO
