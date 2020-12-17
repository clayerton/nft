import { create } from "apisauce";
// import AppConfig from "@config/AppConfig";

const tokenOption = (token) => ({
  headers: { Authorization: `bearer ${token}` },
});

const createApi = () => {
  const api = create({
    // baseURL: 'http://nft.botfans.org',
    baseURL: 'http://api.nftable.org',

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    timeout: 10000,
  });

  const login = (payload) => api.post("/user/login", payload);
  const getUsers = (payload, token) => api.get("/user", payload, tokenOption(token));
  const register = (payload) => api.post("/user/register", payload);
  const getType = (payload) => api.get("/type", payload);
  const getProduct = (payload) => api.get("/project", payload);
  const getHome = (payload) => api.get("/", payload);
  const getSearch = (payload) => api.get("/search", payload);

  return {
    login,
    register,
    getUsers,
    getType,
    getProduct,
    getHome,
    getSearch,
  };
};

export { createApi };
