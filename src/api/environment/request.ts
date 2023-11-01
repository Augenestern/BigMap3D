import axios from "axios";
import { ElMessage } from "element-plus";
// import router from "../router/index";
// 创建axios实例
const request = axios.create({
  baseURL: "http://119.45.136.206:8091/",
  // baseURL: "/api", // timeout: 80000, // 请求超时时间(毫秒) // withCredentials: true,// 异步请求携带cookie // headers: { // 设置后端需要的传参类型 // 'Content-Type': 'application/json', // 'token': x-auth-token',//一开始就要token // 'X-Requested-With': 'XMLHttpRequest', // },
});
// request拦截器
request.interceptors.request.use(
  (config) => {
    // 如果你要去localStor获取token,(如果你有)
    // const token = localStorage.getItem("token") || ""; // 添加请求头
    // config.headers["token"] = token;
    config.headers["token"] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1M2I0OTBhOTc4YjRiOWYyNWViNzZlOCIsImFjY291bnQiOiJzZGxhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJHBadkYyMXIyY2JvTG5ielNOMzZ0enUya3pqRzZQaG1oVDlLY0JiSzRpVXNJbnBLS1lLellXIiwibmFtZSI6Iui1pOaXrSIsIkF2YXRhclVybCI6Imh0dHBzOi8vcDMtcGMuZG91eWlucGljLmNvbS9pbWcvYXdlbWUtYXZhdGFyL3Rvcy1jbi1pLTA4MTNfZTE3YWZmYjQzOTJmNGZiYTljNDU4ZDNlMmYxNGE0ZGN-YzVfMzAweDMwMC5qcGVnP2Zyb209Mjk1NjAxMzY2MiIsInNleCI6IueUtyIsInBob25lIjoiMTIzNDU2Iiwic2FsdCI6IjM5NDM2NzQ3Njk5ODczODgxMCIsInJvbGVJZCI6IjYyMDlkZmQ0MmVkYTI1N2ViZjMxYzdmNiIsIm9wZW5JZCI6IiJ9LCJpc3MiOiJzZGwiLCJuYmYiOjE2OTg2MzA2NDJ9.hkilHkldzbA1laIbwOPPYp9c-GLZNoEv45ZzkaltsVI';
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// response 拦截器
request.interceptors.response.use(
  (response) => {
    // token失效，重新登录
    if (response.data.code === 401) {
      //  重新登录
      // showFailToast("token失效");·
      ElMessage.error("token失效");
      localStorage.clear();
    //   location.href = "/";
    //   router.push("/login");
    } // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default request;