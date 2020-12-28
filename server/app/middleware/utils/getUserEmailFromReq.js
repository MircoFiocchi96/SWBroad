
function getUserEmailFromReq(req){
    return  req.authInfo?.preferred_username
}

export default getUserEmailFromReq