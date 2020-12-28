process.env.NODE_ENV = 'test'

import chai from 'chai'
import sinon from 'sinon'
import StreamService from '../app/services/streamService.js'
import StreamDao from '../app/dal/streamDao.js'
import CreateStreamDTO from '../app/dtos/createStreamDTO.js'

const should = chai.should()
const expect = chai.expect

describe('Streams Service', () => {
  describe('Create stream', () => {
    const stream = new CreateStreamDTO({
      id: 3,
      title: 'title',
      description: 'description',
      categoryId: 'category'
    })
    describe('Success cases', () => {
      beforeEach(() =>
        sinon.stub(StreamDao.prototype, 'createStream').returns(1)
      )
      afterEach(() => StreamDao.prototype.createStream.restore())
      it('should create a stream', () => {
        const service = new StreamService()
        return service.createStream(stream).then((result) => {
          result.should.equal(1)
        })
      })
    })
    describe('Fail cases', () => {
      beforeEach(() =>
        sinon.stub(StreamDao.prototype, 'createStream').throws(Error)
      )
      afterEach(() => StreamDao.prototype.createStream.restore())
      it('should throw an error if there is any kind of problem in the dao', async () => {
        const service = new StreamService()
        return service.createStream(stream).should.throw
      })
    })
  })

  describe('Get streams by category', () => {
    describe('Success cases', () => {
      beforeEach(() =>
        sinon.stub(StreamDao.prototype, 'getStreams').returns([
          {
            title: 'title1',
            category: 'category1',
            description: 'descritpion1',
            startDate: '2020/05/02',
            endDate: '2020/12/12',
            filename: 'filename',
            nickname: 'nickname',
            viewers: null
          }
        ])
      )
      afterEach(() => StreamDao.prototype.getStreams.restore())
      it('should get all the streams by category', () => {
        const service = new StreamService()
        return service.getStreamsByCategory(1, 1, '', false).then((result) => {
          result.data[0].streams.title.should.equal('title1')
          result.data[0].category.should.equal('category1')
          result.data[0].streams.description.should.equal('descritpion1')
          result.data[0].streams.startDate.should.equal('2020/05/02')
          result.data[0].streams.endDate.should.equal('2020/12/12')
          result.data[0].streams.filename.should.equal('filename')
          result.data[0].streams.nickname.should.equal('nickname')
          expect(result.data[0].streams.viewers).to.be.null
        })
      })
    })
    describe('Fail cases', () => {
      beforeEach(() =>
        sinon.stub(StreamDao.prototype, 'getStreams').throws(Error)
      )
      afterEach(() => StreamDao.prototype.getStreams.restore())
      it('should throw an error if there is any kind of problem in the dao', () => {
        const service = new StreamService()
        return service.getStreamsByCategory(1, 1, '', false).should.throw
      })
    })
  })
})
