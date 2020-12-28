import { query, validationResult } from 'express-validator'
import validateResult from '../../../middleware/utils/validateResult.js'

const validatePagination = [
  query('limit').optional().isInt({ min: 1, max: 20 }),
  query('page').optional().isInt({ min: 1 }),
  (req, res, next) => {
    validateResult(req, res, next);
  }
]

export default validatePagination