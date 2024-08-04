// //
// setTimeout(() => {
//   console.log("Học lập trình");
// }, 0);
// setTimeout(() => {
//   console.log("Học lập trình để đi làm");
// }, 3000);
// console.log("để đi lam");

//xử lý bất đồng bộ

// 1.callback
// 2.promise
// 3.async await

// const getUsers = (callback) => {
//   setTimeout(() => {
//     const users = ["user 1", "user 2", "user 3"];
//     if (typeof callback === "function") {
//       callback(users);
//     }
//   }, 1000);
// };
// getUsers((users) => {
//   console.log(users);
// });

// Promise ---> xử lý các tác vụ bất đồng bộ theo cách viết chaining
//a.getB().getC().getD(); --> 1 cấp callback

// Trạng thái của promise

// 1.Pending : gửi yêu cầu chưa trả về
// 2.Fulfilled: thành công
// 3.Rejected:thất bại

// bước 1 : Định nghĩa object promise
// bước 2 : hiển thị kết qủa

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ["user1", "user2", "user3", "user4"];
      // nếu xử lý thành công sẽ gọi hàm resolve và truyền hàm user và trả về kết quả --> chạy vào .then
      // nếu xử lý thất bại sẽ gọi hàm reject để trả về thông báo lỗi -->  chạy vào .catch
      resolve(users);
      reject("lỗi rồi");
    }, 1000);
  });
};
// .then là trả về kết quả

// getUser()
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     // kiểu gì cũng chạy

//     console.log("xong");
//   });

const getImage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Demo Image");
    }, 1000);
  });
};
const result = getUser()
  .then((users) => {
    console.log(users);
    return getImage();
  })
  .then((response) => {
    console.log(response);
  });

//   .then((response) => {
//     console.log(response);
//     return "c";
//   });
//   promise chaining
