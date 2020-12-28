import StreamDao from '../dal/streamDao.js'
import Stream from '../models/stream.js'
import ResponseStreamsDTO from '../dtos/responseStreamsDTO.js'
import ResponseStreamDTO from '../dtos/responseStreamDTO.js'
import Viewer from '../models/viewer.js'

const dao = new StreamDao()

class StreamService {
  async createStream(dto) {
    const stream = new Stream(dto)
    const dao = new StreamDao()

    return await dao.createStream(stream)
  }

  async getStream(id) {
    const dao = new StreamDao()
    return new ResponseStreamDTO(await dao.getItem(id))
  }

  async getStreamsByCategory(page, limit, category, finished, search) {
    const dao = new StreamDao()
    const streams = await dao.getStreams(
      page,
      limit,
      category,
      finished,
      search
    )

    const dtoResponse = new ResponseStreamsDTO(streams)

    return dtoResponse
  }

  async getStreamsByCategories(userFavoritesStreamsDto) {
    const dao = new StreamDao()

    const streams = await dao.getStreamsByCategories(
      userFavoritesStreamsDto.categories,
      userFavoritesStreamsDto.page,
      userFavoritesStreamsDto.limit
    )

    const dtoResponse = new ResponseStreamsDTO(streams)

    return dtoResponse
  }

  async updateLiveStream(nickname, action) {
    const dao = new StreamDao()
    const stream = await dao.getStreamByNickname(nickname, action)
    if (action === 'start') {
      stream.startDate = new Date().toISOString()
    } else if (action === 'stop') {
      const newStream = Stream.createEmptyStream(stream.nickname)
      stream.endDate = new Date().toISOString()
      // Update endDate property to all viewers in the stream and copy the viewers which endDate is null
      stream.viewers.forEach((viewer) => {
        if (!viewer.endDate) {
          newStream.viewers.push(new Viewer(viewer))
          viewer.endDate = new Date().toISOString()
        }
      })

      await dao.createStream(newStream)
    }

    await dao.updateStream(stream)
  }

  async addViewer(viewer, nickname) {
    const dao = new StreamDao()
    // Verify that the Stream exists with nickname, startDate != null and endDate = null
    const stream = await dao.getStreamActive(nickname)

    // Save viewer into the created or existed Stream
    if (stream !== undefined) {
      stream.addViewer(viewer)
      await dao.updateStream(stream)
      return true
    } else {
      return false
    }
  }

  async endViewer(connectionId) {
    const dao = new StreamDao()
    const stream = await dao.getStreamByConnectionId(connectionId)

    if (stream !== undefined) {
      stream.viewers.map(function (viewer) {
        if (viewer.connectionId === connectionId) {
          viewer.endDate = new Date().toISOString()
        }
        return viewer
      })

      await dao.updateStream(stream)
    }
  }
}

export default StreamService
