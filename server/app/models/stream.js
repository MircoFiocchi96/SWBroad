class Stream {
  id
  title
  category
  description
  nickname
  parentCohost
  startDate
  endDate
  fileName
  viewers

  constructor(stream = {}) {
    this.id = stream.id
    this.title = stream.title
    this.category = stream.category
    this.description = stream.description
    this.nickname = stream.nickname
    this.parentCohost = stream.parentCohost
    this.startDate = stream.startDate
    this.endDate = stream.endDate
    this.fileName = stream.fileName
    this.viewers = stream.viewers ?? []
  }

  addViewer(viewer) {
    this.viewers.push(viewer)
  }

  static createEmptyStream(nickname) {
    return new Stream({
      title: 'Untitled Stream',
      nickname: nickname,
      startDate: null,
      endDate: null,
      viewers: []
    })
  }
}
export default Stream
