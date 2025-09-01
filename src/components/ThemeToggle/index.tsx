// src/components/ThemeToggle.tsx

import { MoonStar, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

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
    <Button onClick={cycleTheme} variant="ghost">
      {theme === "light" && <Sun />}
      {theme === "dark" && <MoonStar />}
      {theme === "system" && <SunMoon />}
    </Button>
  );
};
