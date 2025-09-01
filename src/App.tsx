import { Trans } from "@lingui/react/macro";
import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";
import { ThemeToggle } from "./components/ThemeToggle";

export const App = () => {
  return (
    <div className="p-4 w-screen h-screen">
      <div className="flex w-full justify-center gap-2 relative">
        <Link className="[&.active]:font-bold" to="/">
          <Trans id="nav.home">Home</Trans>
        </Link>
        <Link className="[&.active]:font-bold" to="/about">
          <Trans id="nav.about">About</Trans>
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
