import validateResult from '../../../middleware/utils/validateResult.js'
import { check } from 'express-validator'

const validateGetStream = [
  check('id')    
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default validateGetStream
