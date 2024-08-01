// Destructuring --> áp dụng với object và array phá vỡ cấu trúc và trả về biến riêng biệt

// const user = {
//   name: "hoang an",
//   email: "hoangan@gamil.com",
//   shipping_address: "Hà nội",
//   age: 35,
// };

// const name = user.name;
// const email = user.email;

// const { name, email, shipping_address: shippingAddress, age = 32 } = user;
// console.log(name, email, shippingAddress, age);
// const { name, ...rest } = user;

// console.log(name);
// console.log(rest);

// const user = {
//   displayName: "hoang an F8",
//   email: {
//     id: 1,
//     email: "hoangan@gmail.com",
//   },
// };
// const {
//   displayName,
//   email: { email },
// } = user;
// console.log(displayName);
// console.log(email);

// const user = ["hoang an", "hoangan@gmail.com", 32, "hà nội"];

// const [fullName, email, , address] = user;
// console.log(address);
// const [fullName, ...rest] = user;

// console.log(rest);

// không lạm dụng

// const somethings = function ({ name, email }) {
//   console.log({ name, email });
// };

// somethings({ name: "hoàng an", email: "hoangan@gmail.com" });

const users = [
  {
    name: "User 1",
    salary: 10000,
  },
  {
    name: "User 2",
    salary: 20000,
  },
  {
    name: "User 3",
    salary: 30000,
  },
];

const total = users.reduce(function (total, { salary }) {
  return total + salary;
}, 0);
console.log(total);
