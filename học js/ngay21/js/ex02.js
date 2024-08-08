const getUser = (userId) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 1000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 2000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 3000,
    },
    {
      id: 4,
      name: "User 4",
      salary: 4000,
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(({ id }) => userId === id);
      resolve(user);
    }, Math.random() * 1000);
  });
};

const ids = [1, 2, 3, 4];

/*
let totalPromise = new Promise((resolve) => {
  let total = 0;
  let count = 0;
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    getUser(id).then((user) => {
      total += user.salary;
      count++;
      if (count === ids.length) {
        resolve(total);
      }
    });
  }
});

totalPromise.then((total) => {
  console.log(total);
});
*/
// tính tổng thu nhập của các user trong ids
// Ràng buộc:Không dùng async, await,Promise, all,setTimeout

// Promise.all(arrayPromise) chạy đồng thời áp dụng khi chạy nhiều promise cùng một lúc
// const promiseArr = ids.map((id) => getUser(id));
// Promise.all(promiseArr).then((users) => {
//   const total = users.reduce((total, { salary }) => total + salary, 0);
//   console.log(total);
// });

// Promise.resolve
// Promise.reject
