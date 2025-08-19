import axios from "axios";
import { env } from "./env";

export const apiClient = axios.create({
  // biome-ignore lint/style/useNamingConvention: 三方库 axios 命名的字段
  baseURL: env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10_000,
});
