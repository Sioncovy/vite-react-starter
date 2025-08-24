import {
  queryOptions,
  type UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { getExamples } from "../api/getExmaples";
import { exampleKeys } from "../keys";
import type { Example } from "../types";

/**
 *  可以在 tanstack router 的 loader 中使用这个请求
    loader: async ({ context }) => {
      // context 中包含了我们在创建 router 时传入的 queryClient
      const queryClient = context.queryClient;

      // `ensureQueryData` 是最佳选择:
      // 1. 检查缓存中是否已有数据。
      // 2. 如果有且未过期，直接返回缓存数据。
      // 3. 如果没有或已过期，则会执行 queryFn 获取数据，
      //    将数据放入缓存，然后返回数据。
      await queryClient.ensureQueryData(exampleQueryOptions);
      
      // loader 可以不返回任何东西，它的主要目的是预填充缓存
      return {}; 
    },
 */
export const exampleQueryOptions = queryOptions<Example[]>({
  queryFn: getExamples,
  queryKey: exampleKeys.lists(),
});

export const useGetExamples = (options?: UseQueryOptions<Example[]>) => {
  return useQuery({
    ...exampleQueryOptions,
    ...options,
  });
};
