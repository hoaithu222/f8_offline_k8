class Person {
  //thuộc tính
  constructor(name, email) {
    this.name = name;
    this.email = email;
    console.log("hàm constructor sẽ chạy đầu tiên");
  }
  //phương thức
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}
// Enhanced Object Literal

class User extends Person {
  constructor(name, email) {
    super();
    console.log("constructor của User");
  }
  getInfo() {
    return [this.getName(), this.getEmail()];
  }
}

var user = new User("hoang an", "hoangan@gmail.com");
// console.log(person.getName());
console.log(user.getInfo());
