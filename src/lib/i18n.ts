// 任意位置可复用的小工具
interface Nested {
  [key: string]: string | Nested;
}

export const flattenMessages = (
  obj: Nested,
  prefix = "",
): Record<string, string> => {
  const out: Record<string, string> = {};
  for (const [key, val] of Object.entries(obj)) {
    const next = prefix ? `${prefix}.${key}` : key;
    if (typeof val === "string") {
      out[next] = val;
    } else {
      Object.assign(out, flattenMessages(val, next));
    }
  }
  return out;
};
