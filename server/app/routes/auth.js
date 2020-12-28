import express from 'express'
import passport from 'passport'
import '../middleware/auth/passport.js'
import trimRequest from 'trim-request'
import { signup, login, authentication } from '../controllers/auth/index.js'
import { validateSignup } from '../controllers/auth/validators/index.js'
import {
  verifyUserType,
  changeTokenProperty
} from '../middleware/auth/index.js'

const router = express.Router()

const requireAuth = passport.authenticate('oauth-bearer', { session: false })

router.post('/signup', trimRequest.all, requireAuth, validateSignup, signup)

router.post('/login', trimRequest.all, requireAuth, login)

router.post(
  '/authentication',
  trimRequest.all,
  verifyUserType,
  changeTokenProperty,
  authentication
)

export default router
