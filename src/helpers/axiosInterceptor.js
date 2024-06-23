import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const axiosInstance = axios.create();

// instance defaults
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Request interceptor
axios.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage("accessToken");

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Response interceptor
axios.interceptors.response.use(
  function (response) {
    const responseObject = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };

    return responseObject;
  },
  function (error) {
    const errorResponseObject = {
      statusCode: error?.response?.data?.statusCode,
      message: error?.response?.data?.message,
    };

    return errorResponseObject;
  },
);

export default axiosInstance;
