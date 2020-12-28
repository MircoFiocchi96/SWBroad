import express from 'express'
import passport from 'passport'
import '../middleware/auth/passport.js'
import trimRequest from 'trim-request'
import {
  validatePatchUserFavoritesCategories,
  validateGetUserStreams,
  validateGetUser
} from '../controllers/users/validators/index.js'

import {
  getUser,
  getUserStreams,
  patchUserFavoritesCategories
} from '../controllers/users/index.js'

const router = express.Router()

const requireAuth = passport.authenticate('oauth-bearer', { session: false })

router.patch(
  '/:nickName/categories/:categoryId',
  trimRequest.all,
  validatePatchUserFavoritesCategories,
  requireAuth,
  patchUserFavoritesCategories
)

router.get('/:nickName', trimRequest.all, validateGetUser, requireAuth, getUser)

router.get(
  '/:nickName/streams/',
  trimRequest.all,
  validateGetUserStreams,
  requireAuth,
  getUserStreams
)

export default router
