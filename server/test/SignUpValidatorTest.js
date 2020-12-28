/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

import chai from 'chai'
import httpMocks from 'node-mocks-http'
import validateSignup from '../app/controllers/auth/validators/validateSignup.js'

const should = chai.should()
const expect = chai.expect
const assert = chai.assert

describe('Sign up validator', () => {
  describe('validateSignup', () => {
    let res
    beforeEach(() => (res = httpMocks.createResponse()))
    describe('Success cases', () => {
      it('should be status 200 with valid nickname.', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/',
          params: { nickname: '2' }
        })
        await validateSignup[0](req, res, () => {})
        await validateSignup[1](req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
    })
    describe('Fail cases', () => {
      it('should be status 422 with nickname missing.', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/'
        })
        await validateSignup[0](req, res, () => {})
        await validateSignup[1](req, res, () => {})
        assert.equal(res.statusCode, 422)
      })
      it('should be status 422 with nickname empty.', async () => {
        const req = httpMocks.createRequest({
          method: 'GET',
          url: '/streams/',
          nickname: ''
        })
        await validateSignup[0](req, res, () => {})
        await validateSignup[1](req, res, () => {})
        assert.equal(res.statusCode, 422)
      })
    })
  })
})
