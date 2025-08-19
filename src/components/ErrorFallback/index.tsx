import { Card } from "@radix-ui/themes";
import type { FallbackProps } from "react-error-boundary";
import type { GlobalError } from "@/types/error";

// FallbackProps 类型由库提供，包含了 error 和 resetErrorBoundary
export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const errorBody = JSON.parse(error.message) as GlobalError;

  return (
    <Card className="w-full h-full" role="alert">
      <div className="flex flex-col items-center">
        <h2>{errorBody.title}</h2>
        <pre style={{ color: "red" }}>{errorBody.detail}</pre>
        {/* resetErrorBoundary 函数可以重置内部状态，尝试重新渲染 */}
        <button
          className="cursor-pointer"
          onClick={resetErrorBoundary}
          type="button"
        >
          Try again
        </button>
      </div>
    </Card>
  );
};
