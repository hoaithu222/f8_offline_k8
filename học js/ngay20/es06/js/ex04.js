// Arrow function

// const getMessage = (msg) => {
//   console.log("hello", msg);
// };
// getMessage("f8");

// const getTotal = (a, b) => a + b;
// console.log(getTotal(10, 20));

// const getUser = () => ({
//   email: "hoangan@gmail.com",
// });
// console.log(getUser());

// const getFullName = () => ["hoang an"];

// console.log(getFullName());

// const users = [
//   {
//     id: 1,
//     name: "user 1",
//   },
//   {
//     id: 2,
//     name: "user 2",
//   },
//   {
//     id: 3,
//     name: "user 3",
//   },
// ];
// const getUser = (userId) => users.find(({ id }) => userId === id);
// console.log(getUser(2));

// từ khóa this ---> nhận từ khóa this của function cha
// không có từ khóa arguments
// không dùng làm function constructor --> hầu như dùng class thay
// không có object prototype
// Không có hoisting

// const contentEl = document.querySelector(".content");

// const bnt = document.querySelector(".btn");

// bnt.addEventListener("click", function () {
//   const h1El = document.createElement("h1");
//   h1El.innerText = "học js khong khó";
//   contentEl.append(h1El);
//   h1El.addEventListener("click", () => {
//     // console.log(arguments);
//     console.log(this);
//     // this ở đây là function cha
//   });
// });

// function somethings() {
//   console.log(arguments);
// }
// somethings();

// const User = () => {
//   this.email = "hoangan@gmail.com";
// };
// var newUser = new User();
// console.log(newUser);
