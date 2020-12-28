class Viewer {
  constructor(data) {
    this.email = data.email
    this.connectionId = data.connectionId
    this.name = data.name
    this.startDate = new Date().toISOString()
    this.endDate = null
  }
}

export default Viewer
