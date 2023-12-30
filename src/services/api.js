import axios from "axios";
const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: `${REACT_APP_API_URL}api`,
});

api.interceptors.request.use(
  async (config) => {
    config.headers["Content-Type"] = "application/json";
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("status code :", response.status);
    return response;
  },
  (error) => {
    console.log("error :", error);
    return Promise.reject(error);
  }
);

export default api;
