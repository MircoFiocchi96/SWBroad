import getUserEmailFromReq from "../middleware/utils/getUserEmailFromReq.js"

class SignUpInputDTO {
  nickname
  email
  name
  lastname
  categories

  constructor(req) {
    this.nickname = req.body.nickname
    this.email = getUserEmailFromReq(req)
    this.name = req.authInfo.name.split(' ')[0]
    this.lastname = req.authInfo.name.split(' ')[1]
    this.categories = null
  }
}

export default SignUpInputDTO
