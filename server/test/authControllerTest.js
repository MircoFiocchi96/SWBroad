/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

import chai from 'chai'
import sinon from 'sinon'
import { signup, login, authentication } from '../app/controllers/auth/index.js'
import userService from '../app/services/userService.js'
import httpMocks from 'node-mocks-http'

const assert = chai.assert

describe('Controller test - auth', () => {
  describe('login test', () => {
    let res
    beforeEach(() => {
      res = httpMocks.createResponse()
    })
    describe('Success cases', async () => {
      beforeEach(() => {
        sinon.stub(userService.prototype, 'getUserByEmail').returns({
          data: {
            nickname: 'pepeto',
            email: 'pepe@pepe',
            name: 'rodriguez',
            lastname: 'pepito',
            categories: []
          }
        })
      })
      afterEach(() => {
        userService.prototype.getUserByEmail.restore()
      })
      it('should return a valid user wrapped', async () => {
        let req = { user: { preferred_username: 'pepito' } }
        await login(req, res, () => {})
        assert.equal(res.statusCode, 200)
      })
    })
    describe('Fail cases', async () => {
      beforeEach(() => {
        sinon.stub(userService.prototype, 'getUserByEmail').throws('error')
      })
      afterEach(() => {
        userService.prototype.getUserByEmail.restore()
      })
      it('should return an exception', async () => {
        const req = { user: { preferred_username: 'pepito' } }
        await login(req, res, () => {})

        assert.notEqual(res.statusCode, 200)
      })
    })
  })
})
