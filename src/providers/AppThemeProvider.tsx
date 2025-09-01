import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { PropsWithChildren } from "react";

const THEME_STORAGE_KEY = "app-theme";

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
      {children}
    </NextThemesProvider>
  );
};
