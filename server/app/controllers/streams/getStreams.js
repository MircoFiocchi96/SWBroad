import handleError from '../../middleware/utils/handleError.js'
import StreamService from '../../services/streamService.js'

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getStreams = async (req, res) => {
  try {
    const limit = req.query.limit ? req.query.limit : 10000
    const page = req.query.page ? req.query.page * limit - limit : 0
    const category = req.query.category ? req.query.category : ''
    const finished = req.query.finished ? req.query.finished === 'false' : ''
    const search = req.query.q || ''

    const service = new StreamService()
    const dtoResponse = await service.getStreamsByCategory(
      page,
      limit,
      category,
      finished,
      search
    )

    res.status(200).json(dtoResponse)
  } catch (error) {
    handleError(res, error)
  }
}

export default getStreams
