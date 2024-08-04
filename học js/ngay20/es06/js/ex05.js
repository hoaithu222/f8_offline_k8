// OPP ===> SOLID --> nguyên lý cách tổ chức các class

class Person {
  #income = 1000; // Private Property
  name = "hoang an";
  email = "hoangan@gmail.com";
  static message = "Ok chưa";
  #data = ["user 1", "user 2", "user 3"];
  //static property
  //phần khai báo
  // phương thức khởi tạo sẽ chạy đầu tiên
  constructor(name, email) {
    console.log("Phương thức khởi tạo");
    this.name = name;
    this.email = email;
    // Khởi tạo thuộc tính
    // this.name = "hoàng an";
    // this.email = "hoangan@gmail.com";
  }
  getIncome() {
    return this.#income;
  }
  #getName() {
    return this.name;
  }
  #getEmail() {
    return this.email;
  }
  getInfo() {
    return [this.#getName(), this.#getEmail()];
  }
  //static method
  static getMessage() {
    return this.message;
  }
  get latest() {
    return this.#data[this.#data.length - 1];
  }
  set latest(value) {
    this.#data.push(value);
  }
}
const person = new Person("hoang an", "hoangan@gmail.com"); // instance
// console.log(person);
// console.log(person.getIncome());
// console.log(person.getInfo());
// // console.log(person.#getEmail());  lỗi bên ngoài không thể truy cập
// console.log(Person.message);
// console.log(Person.getMessage());
console.log(person.latest);
person.latest = "user 4";

console.log(person.latest);

class User {
  constructor() {
    return ["user 1", "user 2", "user 3"];
  }
}
const user = new User();
console.log(user);
