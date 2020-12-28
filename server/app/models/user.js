class User {
    nickname
    email 
    name
    lastname
    categories
    
    constructor(userData){
        this.nickname = userData?.nickname
        this.email = userData?.email
        this.name = userData?.name
        this.lastname = userData?.lastname
        this.categories = userData?.categories
    }
}

export default User