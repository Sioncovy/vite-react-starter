/** biome-ignore-all assist/source/useSortedKeys: 需要手动指定顺序保证可读性 */
export const exampleKeys = {
  // all 是根键，用于全局性地让所有 example 相关缓存失效
  all: ["example"] as const,

  // 列表查询的键
  lists: () => [...exampleKeys.all, "list"] as const,
  list: (filters: { status: string; year: number }) =>
    [...exampleKeys.lists(), filters] as const,

  // 详情查询的键
  details: () => [...exampleKeys.all, "detail"] as const,
  detail: (id: string) => [...exampleKeys.details(), id] as const,
};
