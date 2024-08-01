// Spread Operator
// const course = {
//   courseName: "FULLSTACK",
//   coursePrice: 1000,
// };
// const user = {
//   name: "hoang an",
//   email: "Hoangan@gmail.com",
//   //   ...course,
// };

// Copy biến user và lưu và biến mới và đồng thời đổi giá trị của key name

// const newUser = { ...user, name: "hoang an F8" };

// console.log(user);
// console.log(newUser);

// const state = {
//   mgs: "OK chưa",
//   products: ["Product 1", "Product 2"],
// };

// Tạo 1 obejct mới copy obejct state và thực hiện các công việc sau
// Gữi nguyên msg
// thêm product 3 vào key products
// const newState = { ...state, products: [...state.products, "Product 3"] };
// console.log(newState);

// Enhanced Object Literal

// const fullName = "Hoang an F8";
// const age = undefined;
// const email = "hoangan@gamil.com";
// const user = {
//   fullName: fullName,
//   email: email,
//   age,
//   getName() {
//     return this.fullName;
//   },
// };

// console.log(user);
// console.log(user.getName());

// named arguments đối số có tên
// const somethings = function (a, b = 0, c = false, d = null) {
//   console.log(`a:${a} b:${b} c:${c} d:${d}`);
// };
// somethings("F8",0,true,);
// const somethings = function ({ a, b = 0, c = false, d = null }) {
//   console.log(`a:${a} b:${b} c:${c} d:${d}`);
// };
// const a = "F8";
// const c = true;
// somethings({ a, c });
// arrow function, class, Module:CommJS ES6 Module,
// bất đồng bộ
