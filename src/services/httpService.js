import axios from "axios";
import { toast } from "react-toastify";
import logger from "./services/logService";

/* 全局错误处理
拦截服务器响应，先被拦截，然后跳转到 catch */
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // unexpected error
    logger.log(error);
    console.log("Logging the error", error);
    toast.error("An unexpected error occurred!");
  }

  return Promise.reject(error); // 返回一个拒绝的promise对象
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
