import handleError from '../../middleware/utils/handleError.js'
import StreamService from '../../services/streamService.js'

/**
 * Update viewer data into the database
 * @param {Object} connectionId - Connection ID belonging to websocket
 */
const endViewer = async (connectionId) => {
  try {
    const service = new StreamService()

    await service.endViewer(connectionId)
  } catch (error) {
    handleError(res, error)
  }
}

export default endViewer
