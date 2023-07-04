export default class UserAccount {
  email: string;
  password: string;
  name?: string;
  constructor(email: string, password: string, name?: string) {
    this.email = email;
    this.password = password;
    this.name = name;
  }

  validateUser() {}

  setAccount() {}
}
