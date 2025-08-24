import { type UseQueryOptions, useQuery } from "@tanstack/react-query";
import { getExamples } from "../api/getExmaples";
import { exampleKeys } from "../keys";
import type { Example } from "../types";
// ...其他类型导入

export const useGetExamples = (options?: UseQueryOptions<Example[]>) => {
  return useQuery({
    queryFn: getExamples,
    queryKey: exampleKeys.lists(),
    ...options,
  });
};
