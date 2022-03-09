import axios from "axios";
import logger from "./logService";
import auth from "./authService";
import { toast } from "react-toastify";

axios.defaults.headers.common["x-auth-token"] = auth.getJwt(); // 配置所有类型的 http 请求 header

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
    // console.log("Logging the error", error);
    toast.error("An unexpected error occurred!");
  }

  return Promise.reject(error); // 返回一个拒绝的promise对象
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
