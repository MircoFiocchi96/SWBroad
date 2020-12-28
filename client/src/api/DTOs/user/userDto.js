export default class userDTO {
  id;
  nickname;
  email;
  name;
  lastname;
  birthday;
  avatar;
  categories;

  constructor({ id,nickname,email,name,lastname,birthday,avatar,categories }) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.name = name;
    this.lastname = lastname;
    this.birthday = birthday;
    this.avatar = avatar;
    this.categories = categories;
  }
}
  