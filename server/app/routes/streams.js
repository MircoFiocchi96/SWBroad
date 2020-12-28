import express from 'express'
import passport from 'passport'
import '../middleware/auth/passport.js'
import trimRequest from 'trim-request'
import {
  validateCreateStream,
  validateGetStream,
  validatePagination
} from '../controllers/streams/validators/index.js'
import {
  getStreams,
  createStream,
  getStream,
  updateLiveStream,
  addViewer,
  authenticateToken
} from '../controllers/streams/index.js'

const router = express.Router()
const requireAuth = passport.authenticate('oauth-bearer', { session: false })

router.get('/', validatePagination, trimRequest.all, getStreams)

router.post(
  '/',
  trimRequest.all,
  validateCreateStream,
  requireAuth,
  createStream
)

router.get('/:id', trimRequest.all, getStream)

router.patch('/:nickname/:action', trimRequest.all, updateLiveStream)

router.post('/addviewer', trimRequest.all, authenticateToken, addViewer)

export default router
