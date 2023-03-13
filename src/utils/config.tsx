import axios from "axios";
export const DOMAIN = "https://640ec8864ed25579dc3c6153.mockapi.io/api/v1";

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

http.interceptors.request.use(
  (config: any) => {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
