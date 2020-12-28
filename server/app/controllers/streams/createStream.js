import CreateStreamDTO from '../../dtos/createStreamDTO.js'
import handleError from '../../middleware/utils/handleError.js'
import StreamService from '../../services/streamService.js'

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createStream = async (req, res) => {
  try {
    const service = new StreamService()
    const dto = new CreateStreamDTO(req.body)
    const stream = await service.createStream(dto)

    res.status(201).json(stream)
  } catch (error) {
    handleError(res, error)
  }
}

export default createStream
