class ErrorDTO {
  status
  description

  /**
   * 
   * @param status {number}
   * @param description {string}
   */

  constructor(status, description, properties) {
    this.status = status
    this.description = description
  }
}

export default ErrorDTO
