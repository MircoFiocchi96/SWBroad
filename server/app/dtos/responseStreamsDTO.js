import StreamsByCategoryDTO from './streamsByCategoryDTO.js'
import StreamDTO from './streamDto.js'

class ResponseStreamDTO {
  data = []

  constructor(streams) {
    let streamsByCategoryDTO = new Map()
    streams.forEach((stream) => {
      const streamDTO = new StreamDTO(stream)
      if (!streamsByCategoryDTO.get(stream.category)) {
        streamsByCategoryDTO.set(stream.category, Array(streamDTO))
      } else {
        streamsByCategoryDTO.get(stream.category).push(streamDTO)
      }
    })

    streamsByCategoryDTO.forEach((value, key) => {
      this.data.push(new StreamsByCategoryDTO(key, value))
    })
  }
}

export default ResponseStreamDTO
