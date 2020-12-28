/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server.js'
import StreamService from '../app/services/streamService.js'
import sinon from 'sinon'

const should = chai.should()

/* Create objects to test */

chai.use(chaiHttp)

describe('Api test - GetStreams', () => {
  beforeEach(() =>
    sinon
      .stub(StreamService.prototype, 'getStreamsByCategory')
      .returns({ pepe: 3 })
  )
  afterEach(() => StreamService.prototype.getStreamsByCategory.restore())

  describe('/GET streams', () => {
    describe('Pagination tests', () => {
      it('should return an error since page number cant be negative', (done) => {
        chai
          .request(server)
          .get('/streams?page=-1')
          .end((err, res) => {
            res.should.have.status(422)
            done()
          })
      })
      it('should return an error since page index is zero', (done) => {
        chai
          .request(server)
          .get('/streams?page=0')
          .end((err, res) => {
            res.should.have.status(422)
            done()
          })
      })
      it('should return succesfully the first page', (done) => {
        chai
          .request(server)
          .get('/streams?page=1')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
      it('should return succesfully with limit 1', (done) => {
        chai
          .request(server)
          .get('/streams?limit=1')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
      it('Should return an error beacause pagination limit is zero ', (done) => {
        chai
          .request(server)
          .get('/streams?limit=0')
          .end((err, res) => {
            res.should.have.status(422)
            done()
          })
      })
      it('should return an error since pagination limit is negative ', (done) => {
        chai
          .request(server)
          .get('/streams?limit=-1')
          .end((err, res) => {
            res.should.have.status(422)
            done()
          })
      })
      it('should return the first page as a result of the parameter page missing', (done) => {
        chai
          .request(server)
          .get('/streams?limit=1&finished=false')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
      it('should return default size page limit parameter is missing:', (done) => {
        chai
          .request(server)
          .get('/streams?page=1&finished=false')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
      it('should get 1st page of 1 element pages  ', (done) => {
        chai
          .request(server)
          .get('/streams?page=1&limit=1&finished=false')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
      it('should get 1st page of given limit size ', (done) => {
        chai
          .request(server)
          .get('/streams?limit=10&finished=false')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
      it('should return an error', (done) => {
        chai
          .request(server)
          .get('/streams?limit=e&finished=false')
          .end((err, res) => {
            res.should.have.status(422)
            done()
          })
      })
    })
    describe('Result expected', () => {
      it('should return all the existant streams', (done) => {
        chai
          .request(server)
          .get('/streams')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
      it('should get streams by category', (done) => {
        chai
          .request(server)
          .get('/streams?category=sports&page=1&limit=5&finished=false')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
      it('should get streams by category that were finished', (done) => {
        chai
          .request(server)
          .get('/streams?category=sports&page=1&limit=5&finished=true')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
    })
  })
})
