import axios from "axios";
import { HTTP_STATUS_CODE } from "@/constants/httpStatusCode";
import { TOKEN_STORAGE_KEY } from "@/constants/user";
import { env } from "./env";

export const apiClient = axios.create({
  baseURL: env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10_000,
});

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 带上 token
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (config.headers && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
        window.location.assign("/login");
      }

      const processedError = {
        message: error.response?.data?.message || error.message,
        status: error.response?.status,
      };

      // 关键：必须将处理过的错误 reject 出去
      // 这样 TanStack Query 才能捕获到错误，并将查询状态置为 `isError`
      return Promise.reject(processedError);
    } else {
      // 对于非 axios 错误（例如，请求设置阶段的错误），直接抛出
      return Promise.reject(error);
    }
  },
);
