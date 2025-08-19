import type { GlobalError } from "@/types/error";

export const createGlobalError = (globalError: GlobalError) => {
  return JSON.stringify(globalError);
};
