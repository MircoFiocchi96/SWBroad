import getUserEmailFromReq from "../../middleware/utils/getUserEmailFromReq.js"

class getCategoriesDTO {
  isLogged
  userName

  constructor(req) {
    this.isLogged = req.isLogged
    this.email = getUserEmailFromReq(req)
  }
}

export default getCategoriesDTO
