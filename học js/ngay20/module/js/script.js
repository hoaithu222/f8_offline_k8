//
// // console.log("app");
// // const { a, b } = require("../component/home");

// console.log(a, b);

// import hoangan, { a as _a, b } from "../component/home.js";
// // import default phải đứng trước --> không cần giống tên
// // import theo tên thì phải đúng tên
// console.log(hoangan());
// console.log(_a, b);

import * as home from "../component/home.js";
// import tất cả mọi thứ
console.log(home);

import { a, b } from "../utils/index.js";
console.log(a, b);
