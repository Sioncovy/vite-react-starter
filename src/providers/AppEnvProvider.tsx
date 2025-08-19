import { useMount } from "ahooks";
import type { PropsWithChildren } from "react";
import { validateEnv } from "@/lib/env";

export const AppEnvProvider = ({ children }: PropsWithChildren) => {
  useMount(() => {
    validateEnv();
  });

  return children;
};
