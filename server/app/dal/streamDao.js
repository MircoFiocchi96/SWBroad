import DatabaseContext from '../azureCosmoDb/databaseContext.js'
import Stream from '../models/stream.js'

class StreamDao {
  async createStream(stream) {
    const dbContext = new DatabaseContext('streams')
    await dbContext.init()
    return await dbContext.addItem(stream)
  }

  async getItem(nickname) {
    const dbContext = new DatabaseContext('streams')
    await dbContext.init()
    console.log('This is the stream id ', nickname)

    const queryStart = {
      query:
        'SELECT c.title, c.category, c.description, c.startDate, c.endDate, c.filename, c.nickname, c.viewers, c.id ' +
        'FROM c ' +
        "WHERE (c.nickname=@nickname) AND (IS_NULL(c.endDate)=true)",
      parameters: [
        {
          name: '@nickname',
          value: nickname
        }
      ]
    }

    const streams = await dbContext.find(queryStart)
    const returnStream = streams[0] ? new Stream(streams[0]) : undefined
    console.log('Stream: ', returnStream)

    return returnStream
  }

  async getStreamByNickname(nickname, action) {
    const dbContext = new DatabaseContext('streams')
    await dbContext.init()
    const queryStart = {
      query:
        'SELECT c.title, c.category, c.description, c.startDate, c.endDate, c.filename, c.nickname, c.viewers, c.id ' +
        'FROM c ' +
        "WHERE (c.nickname=@nickname) AND ((@action='start' AND IS_NULL(c.startDate)=true AND IS_NULL(c.endDate)=true) OR (@action='stop' AND IS_NULL(c.startDate)=false AND IS_NULL(c.endDate)=true)) ",
      parameters: [
        {
          name: '@nickname',
          value: nickname
        },
        {
          name: '@action',
          value: action
        }
      ]
    }

    const streams = await dbContext.find(queryStart)
    const returnStream = streams[0] ? new Stream(streams[0]) : undefined
    return returnStream
  }

  async updateStream(stream) {
    const dbContext = new DatabaseContext('streams')
    await dbContext.init()
    await dbContext.updateItem(stream)
  }

  async getStreamsByCategories(categoryList, page, limit){
    const dbContext = new DatabaseContext('streams')
    await dbContext.init()
    const query = {
      query:
        'SELECT c.title, c.category, c.description, c.startDate, c.endDate, c.filename, c.nickname, c.viewers ' +
        'FROM c ' +
        "WHERE ARRAY_CONTAINS(@categoryList, c.category)"+           
        'ORDER BY c.title OFFSET ' +
        page +
        ' LIMIT ' +
        limit,
      parameters: [
        {
          name: '@categoryList',
          value: categoryList
        } 
      ]
    }
    return await dbContext.find(query)
  }

  async getStreams(page, limit, category, finished, search) {
    const dbContext = new DatabaseContext('streams')
    await dbContext.init()
    const query = {
      query:
        'SELECT c.title, c.category, c.description, c.startDate, c.endDate, c.filename, c.nickname, c.viewers ' +
        'FROM c ' +
        "WHERE (c.category=@category OR @category='') " +
        "AND (IS_NULL(c.endDate)=@finished OR @finished='') " +
        'AND (IS_NULL(c.startDate)=false) ' +
        "AND (@search = '' OR CONTAINS(c.category,@search,true) OR CONTAINS(@search,c.category,true) " +
        'OR  CONTAINS(c.title,@search,true) OR CONTAINS(@search,c.title,true) ' +
        'OR  CONTAINS(c.nickname,@search,true) OR CONTAINS(@search,c.nickname,true)) ' +
        'ORDER BY c.title OFFSET ' +
        page +
        ' LIMIT ' +
        limit,
      parameters: [
        {
          name: '@search',
          value: search
        },
        {
          name: '@category',
          value: category
        },
        {
          name: '@finished',
          value: finished
        }
      ]
    }

    return await dbContext.find(query)
  }

  async getStreamActive(nickname) {
    const dbContext = new DatabaseContext('streams')
    await dbContext.init()
    const query = {
      query:
        'SELECT c.id, c.title, c.description, c.nickname, c.startDate, c.endDate, c.viewers ' +
        'FROM c ' +
        'WHERE c.nickname=@nickname AND IS_NULL(c.endDate)=true',
      parameters: [
        {
          name: '@nickname',
          value: nickname
        }
      ]
    }

    const streams = await dbContext.find(query)
    const returnStream = streams[0] ? new Stream(streams[0]) : undefined
    return returnStream
  }

  async getStreamByConnectionId(connectionId) {
    const dbContext = new DatabaseContext('streams')
    await dbContext.init()
    const query = {
      query:
        'SELECT * ' +
        'FROM c ' +
        'WHERE EXISTS( ' +
        'SELECT VALUE n ' +
        'FROM n IN c.viewers ' +
        'WHERE n.connectionId = @connectionId' +
        ')',
      parameters: [
        {
          name: '@connectionId',
          value: connectionId
        }
      ]
    }

    const streams = await dbContext.find(query)
    const returnStream = streams[0] ? new Stream(streams[0]) : undefined
    return returnStream
  }
}

export default StreamDao
