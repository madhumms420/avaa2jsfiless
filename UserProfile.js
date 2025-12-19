export default class UserProfile {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getUserInfo() {
    return `${this.name} (${this.age})`;
  }
}
