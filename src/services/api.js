import { create } from "apisauce";
// import AppConfig from "@config/AppConfig";

const tokenOption = (token) => ({
  headers: { Authorization: `bearer ${token}` },
});

const createApi = () => {
  const api = create({
    baseURL: 'http://nft.botfans.org',
    headers: {
      "Cache-Control": "no-cache",
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    timeout: 10000,
  });

  const login = (payload) => api.post("/user/login", payload);
  const getUsers = (payload, token) => api.get("/user", payload, tokenOption(token));
  const register = (payload) => api.post("/user/register", payload);
  const getType = (payload) => api.get("/project", payload);
  return {
    login,
    register,
    getUsers,
    getType,
  };
};

export { createApi };
