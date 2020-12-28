import express from 'express'
import trimRequest from 'trim-request'
import { getCategories } from '../controllers/categories/index.js'
import passport from 'passport'

const router = express.Router()
const requireAuthWrapper = (req, res, next) => {
  req.isLogged = false
  if (
    (!Object.keys(req.body).length || req.body.authorization == undefined) &&
    req.headers.authorization == undefined
  ) {
    next()
  } else {
    passport.authenticate(
      'oauth-bearer',
      { session: false },
      async (_, req, user) => {
        if (req !== false) {
          req.authInfo = user
          req.isLogged = true
          next()
        } else {
          next()
        }
      }
    )(req, res, next)
  }
}

router.get('/', trimRequest.all, requireAuthWrapper, getCategories)

export default router
