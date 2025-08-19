/** biome-ignore-all lint/style/useNamingConvention: 环境变量，格式特殊 */

import { z } from "zod";
import { createGlobalError } from "@/utils/error";

const envSchema = z.object({
  // Vite 的启动项目的模式
  MODE: z.enum(["production", "development"]),
  // 定义 API URL，我们希望它是一个有效的 URL 字符串
  VITE_API_URL: z.url({ message: "Invalid API URL" }),
});

const parsedEnv = envSchema.safeParse(import.meta.env);

export const validateEnv = () => {
  if (!parsedEnv.success) {
    const info = z.treeifyError(parsedEnv.error);
    // 如果校验失败，我们在控制台打印出清晰的错误信息，并抛出一个错误
    // 这会让你的应用在开发阶段启动时就立刻崩溃，让你马上知道环境变量配错了
    console.error("❌ Invalid environment variables:", info);

    throw new Error(
      createGlobalError({
        detail: JSON.stringify(info),
        title: "环境变量初始化错误",
      }),
    );
  }
};

// biome-ignore lint/style/noNonNullAssertion: 在 AppEnvProvider 中进行过校验，使用的时候必定为正确的内容
export const env = parsedEnv.data!;
