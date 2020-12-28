import ErrorDTO from "../../dtos/errorDTO.js"
/**
 * Handles error by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */
const handleError = (res = {}, err = {}) =>{

  if (process.env.NODE_ENV === 'development') {
    console.log(err)
  }

  res.status(err.code).send(new ErrorDTO(err.code, err.message));
}

export default handleError
