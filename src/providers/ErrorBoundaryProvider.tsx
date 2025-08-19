import type { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/ErrorFallback";

const logError = (error: Error) => {
  /* ... logging logic ... */
  console.error("App Error: ", error);
};

export const ErrorBoundaryProvider = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      {children}
    </ErrorBoundary>
  );
};
