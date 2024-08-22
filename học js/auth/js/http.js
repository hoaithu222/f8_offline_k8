import { config } from "./config.js";
const { SERVER_API } = config;
export const requestLogin = async (data) => {
  try {
    const response = await fetch(`${SERVER_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Unauthenticated");
    }
    return response.json();
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const requestProfile = async (accessToken) => {
  try {
    const response = await fetch(`${SERVER_API}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Unauthenticated");
    }
    return response.json();
  } catch {
    return false;
  }
};

export const requestRefreshToken = async (refreshToken) => {
  try {
    const response = await fetch(`${SERVER_API}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    if (!response.ok) {
      throw new Error("Unauthenticated");
    }
    return response.json();
  } catch (e) {
    console.log(e);
    return false;
  }
};
