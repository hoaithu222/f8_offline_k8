// xử lý nhiều request bị fail cùng 1 lúc giả hành động

// các request độc lập
let token = `My Token`;
let isExpire = false;
let refreshTokenPromise;
const refreshToken = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`New Token:${Math.random()}`);
    }, Math.random() * 1000);
  });
};

const callApi = (url) => {
  setTimeout(async () => {
    if (url === "/course") {
      isExpire = true;
    }
    if (isExpire) {
      //hết hạn --> gọi refresh token
      if (!refreshTokenPromise) {
        refreshTokenPromise = refreshToken();
      }
      const newToken = await refreshTokenPromise;
      token = newToken;
      isExpire = false;
    }
    console.log(`Request URL :${url}`, `Token:${token}`);
  }, 1000);
};

callApi(`/profile`);
callApi(`/course`);
callApi(`/products`);
callApi(`/posts`);
