// src/components/ThemeToggle.tsx

import { IconButton } from "@radix-ui/themes";
import { MoonStar, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  // next-themes 提供的 hook，用来获取和设置主题
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "system" || theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <IconButton onClick={cycleTheme} variant="ghost">
      {theme === "light" && <Sun />}
      {theme === "dark" && <MoonStar />}
      {theme === "system" && <SunMoon />}
    </IconButton>
  );
};
