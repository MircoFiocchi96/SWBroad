/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

import chai from 'chai'
import httpMocks from 'node-mocks-http'
import validateCreateStream from '../app/controllers/streams/validators/validateCreateStream.js'
import passport from 'passport'

const should = chai.should()
const expect = chai.expect
const assert = chai.assert

describe('Create streams Validators', () => {
  describe('ValidateCreateStream', () => {
    let res
    beforeEach(() => (res = httpMocks.createResponse()))
    describe('Success cases', () => {
      it('should be status 200 with description title and category valid parameters.', async () => {
        const req = httpMocks.createRequest({
          method: 'Post',
          url: '/streams/',
          params: {
            description: 'descripcion',
            title: 'title',
            category: 'category'
          }
        })
        await validateCreateStream[0](req, res, () => {})
        await validateCreateStream[1](req, res, () => {})
        await validateCreateStream[2](req, res, () => {})
        await validateCreateStream[3](req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
    })
    describe('Success cases', () => {
      it('should be status 200 with description title and category valid parameters and extra parameters.', async () => {
        const req = httpMocks.createRequest({
          method: 'Post',
          url: '/streams/',
          params: {
            description: 'descripcion',
            title: 'title',
            category: 'category',
            extraparameters: 'jejeje'
          }
        })
        await validateCreateStream[0](req, res, () => {})
        await validateCreateStream[1](req, res, () => {})
        await validateCreateStream[2](req, res, () => {})
        await validateCreateStream[3](req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
    })
    describe('Fail cases', () => {
      it('should be status 422 with parameter description missing', async () => {
        const req = httpMocks.createRequest({
          method: 'Post',
          url: '/streams/',
          params: {
            title: 'title',
            category: 'category'
          }
        })
        await validateCreateStream[0](req, res, () => {})
        await validateCreateStream[1](req, res, () => {})
        await validateCreateStream[2](req, res, () => {})
        await validateCreateStream[3](req, res, () => {})
        assert.equal(res.statusCode, 422)
      })
      it('should be status 422 with parameter category missing', async () => {
        const req = httpMocks.createRequest({
          method: 'Post',
          url: '/streams/',
          params: {
            description: 'descripcion',
            title: 'title'
          }
        })
        await validateCreateStream[0](req, res, () => {})
        await validateCreateStream[1](req, res, () => {})
        await validateCreateStream[2](req, res, () => {})
        await validateCreateStream[3](req, res, () => {})
        assert.equal(res.statusCode, 422)
      })
      it('should be status 422 with parameter title missing', async () => {
        const req = httpMocks.createRequest({
          method: 'Post',
          url: '/streams/',
          params: {
            description: 'descripcion',
            category: 'category'
          }
        })
        await validateCreateStream[0](req, res, () => {})
        await validateCreateStream[1](req, res, () => {})
        await validateCreateStream[2](req, res, () => {})
        await validateCreateStream[3](req, res, () => {})
        assert.equal(res.statusCode, 422)
      })
      it('should be status 422 with parameter description empty', async () => {
        const req = httpMocks.createRequest({
          method: 'Post',
          url: '/streams/',
          params: {
            title: 'title',
            category: 'category',
            description: ''
          }
        })
        await validateCreateStream[0](req, res, () => {})
        await validateCreateStream[1](req, res, () => {})
        await validateCreateStream[2](req, res, () => {})
        await validateCreateStream[3](req, res, () => {})
        assert.equal(res.statusCode, 422)
      })
      it('should be status 422 with parameter category empty', async () => {
        const req = httpMocks.createRequest({
          method: 'Post',
          url: '/streams/',
          params: {
            description: 'descripcion',
            title: 'title',
            category: ''
          }
        })
        await validateCreateStream[0](req, res, () => {})
        await validateCreateStream[1](req, res, () => {})
        await validateCreateStream[2](req, res, () => {})
        await validateCreateStream[3](req, res, () => {})
        assert.equal(res.statusCode, 422)
      })
      it('should be status 422 with parameter title empty', async () => {
        const req = httpMocks.createRequest({
          method: 'Post',
          url: '/streams/',
          params: {
            description: 'descripcion',
            category: 'category',
            title: ''
          }
        })
        await validateCreateStream[0](req, res, () => {})
        await validateCreateStream[1](req, res, () => {})
        await validateCreateStream[2](req, res, () => {})
        await validateCreateStream[3](req, res, () => {})
        assert.equal(res.statusCode, 422)
      })
    })
  })
})
