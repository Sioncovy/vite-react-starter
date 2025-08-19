import { Theme as RadixTheme } from "@radix-ui/themes";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { PropsWithChildren } from "react";

const THEME_STORAGE_KEY = "app-theme";

// 这个组件的目的是将 next-themes 的状态同步到 Radix Themes
const RadixThemeAdapter = ({ children }: PropsWithChildren) => {
  const { resolvedTheme } = useTheme(); // 从 next-themes 获取最终解析出的主题 ('light' 或 'dark')

  // Radix <Theme> 组件需要一个明确的 appearance prop
  // resolvedTheme 可能是 'light' 或 'dark'，正好匹配
  return (
    <RadixTheme appearance={resolvedTheme as "light" | "dark"}>
      {children}
    </RadixTheme>
  );
};

// 这是我们最终要暴露出去的总 Provider
export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  // next-themes 的 Provider
  // attribute="class" -> 会在 <html> 上添加 .dark 或 .light class，完美驱动 Tailwind
  // defaultTheme="system" -> 默认跟随系统设置
  // enableSystem -> 启用系统偏好检测
  // storageKey -> 自定义 localStorage 中的键名
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey={THEME_STORAGE_KEY}
    >
      <RadixThemeAdapter>{children}</RadixThemeAdapter>
    </NextThemesProvider>
  );
};
