import { config } from "./config.js";
import { httpClient } from "./http_client.js";
const { SERVER_API } = config;
const authClient = httpClient.create({
  baseUrl: SERVER_API,
});
authClient.request(function (config) {
  //Viết logic sửa request tại đây
  try {
    if (localStorage.getItem("user_token")) {
      const { access_token: accessToken } = JSON.parse(
        localStorage.getItem("user_token")
      );
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
  } catch (e) {
    console.log(e);
  }
  return config;
});
authClient.response(async function (response) {
  try {
    if (
      localStorage.getItem("user_token") &&
      !response.ok &&
      !response.url.includes("auth/refresh-token")
    ) {
      const { refresh_token: refreshToken } = JSON.parse(
        localStorage.getItem("user_token")
      );
      const newToken = await requestRefreshToken(refreshToken);
      if (newToken) {
        localStorage.setItem("user_token", JSON.stringify(newToken));
        return authClient;
      } else {
        throw new Error("Unauthorize");
      }
    }
  } catch (e) {
    //Xử lý logout
    localStorage.removeItem("user_token");
    return false;
  }
  return response;
});
export const requestLogin = async (data) => {
  const response = await authClient.post(`/auth/login`, data);
  if (response.ok) {
    return response.data;
  }
  return false;
};

export const requestProfile = async (accessToken) => {
  const response = await authClient.get(`/auth/profile`);
  if (!response.ok) {
    return false;
  }
  return response.data;
};

export const requestRefreshToken = async (refreshToken) => {
  const response = await authClient.post(`/auth/refresh-token`, {
    refreshToken,
  });

  if (!response.ok) {
    return false;
  }
  return response.data;
};
