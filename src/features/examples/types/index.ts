import { z } from "zod";

const TITLE_MIN_LENGTH = 3;

// 1. 定义 Zod Schema，它是“唯一真相来源”
export const ExampleSchema = z.object({
  createdAt: z.iso.datetime(),
  id: z.uuid(),
  status: z.enum(["created", "completed", "failed"]),
  title: z
    .string()
    .min(TITLE_MIN_LENGTH, "Title must be at least 3 characters long"),
});

export const ExampleArraySchema = z.array(ExampleSchema);

// 2. 从 Schema 推断出 TypeScript 类型
export type Example = z.infer<typeof ExampleSchema>;

// 从完整数据中筛出创建时需要的数据
export const CreateExampleDtoSchema = ExampleSchema.pick({
  title: true,
});
export type CreateExampleDto = z.infer<typeof CreateExampleDtoSchema>;
