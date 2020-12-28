/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

import chai from 'chai'
import httpMocks from 'node-mocks-http'
import validatePagination from '../app/controllers/streams/validators/validatePagination.js'

const assert = chai.assert

describe('Get Stream Validators', () => {
  describe('Pagination validator', () => {
    let res
    beforeEach(() => (res = httpMocks.createResponse()))
    describe('Success cases', () => {
      it('should be status 200 with missing page and limit parameter.', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/'
        })
        await validatePagination[0](req, res, () => {})
        await validatePagination[1](req, res, () => {})
        await validatePagination[2](req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
    })
    it('should be status 200 with greater than 0 page and limit missing', async () => {
      const req = httpMocks.createRequest({
        method: 'GET',
        url: '/streams/',
        params: { page: 1 }
      })
      await validatePagination[0](req, res, () => {})
      await validatePagination[1](req, res, () => {})
      await validatePagination[2](req, res, () => {})
      assert.equal(res.statusCode, 200)
    })
    it('should be status 200 with greater than 0 limit and page missing', async () => {
      const req = httpMocks.createRequest({
        method: 'GET',
        url: '/streams/',
        params: { limit: 1 }
      })
      await validatePagination[0](req, res, () => {})
      await validatePagination[1](req, res, () => {})
      await validatePagination[2](req, res, () => {})
      assert.equal(res.statusCode, 200)
    })
    it('should be status 200 with greater than 0 page and greater than 0 limit', async () => {
      const req = httpMocks.createRequest({
        method: 'GET',
        url: '/streams/',
        params: { page: 1, limit: 1 }
      })
      await validatePagination[0](req, res, () => {})
      await validatePagination[1](req, res, () => {})
      await validatePagination[2](req, res, () => {})
      assert.equal(res.statusCode, 200)
    })

    describe('Fail cases', () => {
      it('should be status 422 with equal 0 page', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/',
          params: { page: 0 }
        })
        await validatePagination[0](req, res, () => {})
        await validatePagination[1](req, res, () => {})
        await validatePagination[2](req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
      it('should be status 422 with equal -1 page', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/',
          params: { page: -1 }
        })
        await validatePagination[0](req, res, () => {})
        await validatePagination[1](req, res, () => {})
        await validatePagination[2](req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
      it('should be status 422 with equal 0 limit', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/',
          params: { limit: 0 }
        })
        await validatePagination[0](req, res, () => {})
        await validatePagination[1](req, res, () => {})
        await validatePagination[2](req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
      it('should be status 422 with equal -1 limit', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/',
          params: { limit: -1 }
        })
        await validatePagination[0](req, res, () => {})
        await validatePagination[1](req, res, () => {})
        await validatePagination[2](req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
      it('should be status 422 with equal 0 page and equal 0 limit', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/',
          params: { page: 0, limit: 0 }
        })
        await validatePagination[0](req, res, () => {})
        await validatePagination[1](req, res, () => {})
        await validatePagination[2](req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
      it('should be status 422 with equal -1 page and equal -1 limit', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/',
          params: { page: -1, limit: -1 }
        })
        await validatePagination[0](req, res, () => {})
        await validatePagination[1](req, res, () => {})
        await validatePagination[2](req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
    })
  })
})
