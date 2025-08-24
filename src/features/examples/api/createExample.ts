import { apiClient } from "@/lib/apiClient";
import { type CreateExampleDto, type Example, ExampleSchema } from "../types"; // 导入 Schema 和类型

export const createExample = async (
  dto: CreateExampleDto,
): Promise<Example> => {
  // 从 API 获取的是 `unknown` 类型的原始数据
  const data = await apiClient.post("/example", dto);

  // 🛡️ Zod 在这里进行“运行时安检”
  // 如果 API 返回的数据格式不对，.parse 会抛出错误，
  // 这个错误会被 apiClient 的拦截器捕获，并最终被 TanStack Query 捕获
  const validatedOkrs = ExampleSchema.parse(data);

  // 只有通过了安检的数据，才能在应用内部流通
  return validatedOkrs;
};
