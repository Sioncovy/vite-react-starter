import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";
import { ThemeToggle } from "./components/ThemeToggle";

export const App = () => {
  return (
    <div className="p-4">
      <div className="flex w-full justify-center gap-2 relative">
        <Link className="[&.active]:font-bold" to="/">
          Home
        </Link>
        <Link className="[&.active]:font-bold" to="/about">
          About
        </Link>
        <div className="absolute right-2">
          <ThemeToggle />
        </div>
      </div>
      <hr className="my-4" />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        resetKeys={[location.pathname]}
      >
        <Outlet />
      </ErrorBoundary>
      <TanStackRouterDevtools />
    </div>
  );
};
