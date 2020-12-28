import handleError from '../../middleware/utils/handleError.js'
import StreamService from '../../services/streamService.js'

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const getStream = async (req, res) => {
  try {
    const service = new StreamService()
    const stream = await service.getStream(req.params.id)

    res.status(200).json(stream)
  } catch (error) {
    handleError(res, error)
  }
}

export default getStream
