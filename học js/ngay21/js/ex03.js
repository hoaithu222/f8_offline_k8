// Async function
// Await operator
// await function1()
// await function2()
// await function3()
// ==> đều phải nàm trong hàm async mỗi lần await là 1 lần then

// hàm async luôn trả về 1 promise

const somethings = async () => {
  const a = 1;
  return a;
};
somethings().then((data) => {
  console.log(data);
});

const getA = () =>
  new Promise((resolve, reject) => setTimeout(() => reject("LỖI GET A"), 1000));
const getB = () =>
  new Promise((resolve) => setTimeout(() => resolve("GET B"), 2000));
const getC = () =>
  new Promise((resolve) => setTimeout(() => resolve("GET C"), 3000));
// const result = async () => {
//   const a = await getA();
//   console.log(a);
//   const b = await getB();
//   console.log(b);
//   const c = await getC();
//   console.log(c);
// };
// result();

// (async () => {
//   try {
//     const a = await getA();
//     if (!a) {
//       //   throw new Error("Không có kết quả");
//       throw "Không có kết quả";
//     }
//   } catch (e) {
//     console.log(e);
//   }
// })();

// const showResult = async () => {
//   return await getA();
//   //   return getA();
// };

// showResult()
//   .then((data) => console.log(data))
//   .catch((e) => {
//     console.log(e);
//   });
