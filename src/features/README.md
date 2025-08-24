features 下根据功能来分类，目标是高内聚，一个功能所有业务性的东西都在同一个目录下

功能/api：负责与后端API直接交互的函数层，也就是直接调用 apiClient 的实现
功能/hooks：自定义 Tanstack Query Hooks 层，业务中使用只需要这些 hooks 传入定制配置就行，无需关心其他东西
功能/types：相关的所有类型定义，例如用 Zod 或 TS 定义类型
  在系统边界推荐使用 Zod，“系统边界”是指任何“不受你信任”的数据进入你应用的地方。
  - API 响应 (最重要的场景)
  - 用户提交的表单
  - 从 localStorage 或 sessionStorage 读取的数据
  - URL 查询参数
  使用 Zod 校验只需要在入口的时候校验一次就行，通过之后，正常内部不需要再校验，只使用推断出来的 TS 类型就可以了
功能/keys.ts：该功能的所有 Tanstack Query 的 key 集合
功能/index.ts：功能的“公共出口”，UI层只和它打交道
