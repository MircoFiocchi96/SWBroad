export default class signinDTO {
  nickname;
  email;
  name;
  lastname;
  birthday;
  avatar;

  constructor({ nickname,email,name,lastname,birthday,avatar }) {
    this.nickname = nickname;
    this.email = email;
    this.name = name;
    this.lastname = lastname;
    this.birthday = birthday;
    this.avatar = avatar;
  }
}
