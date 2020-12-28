/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

import chai from 'chai'
import httpMocks from 'node-mocks-http'
import validateGetStream from '../app/controllers/streams/validators/validateGetStream.js'

const should = chai.should()
const expect = chai.expect
const assert = chai.assert

describe('Get streams Validators', () => {
  describe('ValidateGetStream', () => {
    let res
    beforeEach(() => (res = httpMocks.createResponse()))
    describe('Success cases', () => {
      it('should be status 200 with a valid id parameter.', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/',
          params: { id: '2' }
        })
        await validateGetStream[0](req, res, () => {})
        await validateGetStream[1](req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
    })
    describe('Fail cases', () => {
      it('should be invalid since id parameter is missing.', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/'
        })

        await validateGetStream[0](req, res, () => {})
        await validateGetStream[1](req, res, () => {})
        assert.equal(res.statusCode, 422)
      })
      it('should be invalid since the id parameter is empty.', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/',
          params: { id: null }
        })

        await validateGetStream[0](req, res, () => {})
        await validateGetStream[1](req, res, () => {})
        assert.equal(res.statusCode, '422')
      })
    })
  })
})
