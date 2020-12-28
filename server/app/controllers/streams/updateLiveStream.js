import handleError from '../../middleware/utils/handleError.js'
import StreamService from '../../services/streamService.js'

/**
 * Update Start Date properties from Stream
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateLiveStream = async (req, res) => {
  const nickname = req.params.nickname
  const action = req.params.action
  const event = action === 'start' ? 'hostConnected' : 'hostDisconnected'
  const message =
    action === 'start'
      ? `The broadcast on the ${nickname} channel has started`
      : `The broadcast on the ${nickname} channel has ended`
  try {
    const service = new StreamService()
    await service.updateLiveStream(nickname, action)

    req.io.in(nickname).emit(event, message)
    res.status(200).json('Start or stop updated correctly')
  } catch (error) {
    handleError(res, error)
  }
}

export default updateLiveStream
