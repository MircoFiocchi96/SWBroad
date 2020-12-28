import handleError from '../../middleware/utils/handleError.js'
import StreamService from '../../services/streamService.js'
import Viewer from '../../models/viewer.js'
import passport from 'passport'
import '../../middleware/auth/passport.js'

/**
 * Add viewer data into the database
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const addViewer = async (req, res) => {
  try {
    const service = new StreamService()
    const viewer = new Viewer(req.body)

    // Join a websocket to the corresponding channel
    const socket = req.io.of('/').sockets.get(req.body.connectionId)
    socket.join(req.body.nickname)

    let result = false;
    if(!req.body.publisher){
      result = await service.addViewer(viewer, req.body.nickname)
      req.io.in(req.body.nickname).emit('viewerConnected', {
        nickname: req.body.nickname,
        message: 'New viewer added!',
        name: req.body.name ?? req.body.email
      })
    }

    res.status(200).json({ result: result })
  } catch (error) {
    handleError(res, error)
  }
}

export default addViewer
