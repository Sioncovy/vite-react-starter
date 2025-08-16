### 项目介绍

本项目是一个基于 Vite 7、React 19 与 TypeScript 的纯 CSR（Client-Side Rendering）模板，开箱即用地提供路由、主题、样式与代码质量规范，适合快速搭建现代化前端项目脚手架。

### 技术栈选型

- 构建工具：Vite 7
- 框架：React 19
- 路由库：TanStack Router（含 Devtools 与自动代码分割）
- 组件与样式：Radix Themes + Tailwind CSS v4（@tailwindcss/vite）
- 主题切换：next-themes（与 Radix Themes 同步）
- 图标库：Lucide
- 代码质量：Biome（Lint & Format）
- Git 提交规范：Lefthook + Commitlint + Commitizen（CZ）
- 请求库：TanStack Query（计划中）

### Roadmap

**已完成**
- 项目脚手架：Vite 7 + React 19 + TypeScript
- 路由：TanStack Router 集成，启用 `@tanstack/router-plugin` 与自动代码分割；提供 Devtools
- 页面示例：`/`（Home）与 `/about`（About）
- 样式：Tailwind CSS v4 集成（`@import "tailwindcss"`）
- 组件与主题：Radix Themes 集成，`next-themes` 统一驱动主题；提供主题切换组件 `ThemeToggle`
- 图标：Lucide（在主题切换中演示使用）
- 代码质量：Biome Lint/Format 脚本
- 提交校验：Lefthook 安装钩子、Commitlint 与 Commitizen 配置

**未完成 / 计划中**
- 请求与数据层：TanStack Query（`QueryClient`、`Provider`、示例请求与缓存策略）
- 测试：Vitest + React Testing Library 单元测试与组件测试
- CI：GitHub Actions（Lint/Build/Test 流程）
- 环境配置：`.env` 管理与类型安全的环境变量声明
- 错误边界与加载态：全局 ErrorBoundary、Suspense Fallback
- 路由增强：基于路由的权限守卫与元信息（title、meta）
- 工程化：别名路径、产物分析、Bundle 体积监控
