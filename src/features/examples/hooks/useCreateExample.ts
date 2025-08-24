import {
  type UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createExample } from "../api/createExample";
import { exampleKeys } from "../keys";
import type { CreateExampleDto, Example } from "../types";

export const useCreateExample = (
  options?: UseMutationOptions<Example, Error, CreateExampleDto>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createExample,
    onSuccess: (data, variables, context) => {
      console.log("✨ Example created successfully!");

      // 关键一步：让所有 Example 列表相关的查询都失效
      // TanStack Query 会在后台自动重新获取最新的列表数据
      // 从而让UI自动更新，这就是“响应式”的体现
      queryClient.invalidateQueries({ queryKey: exampleKeys.lists() });

      // 调用外部传入的 onSuccess (如果有)
      options?.onSuccess?.(data, variables, context);
    },
    ...options,
  });
};
