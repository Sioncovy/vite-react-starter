import { AppEnvProvider } from "./AppEnvProvider";
import { AppRouterProvider } from "./AppRouterProvider";
import { AppThemeProvider } from "./AppThemeProvider";
import { ErrorBoundaryProvider } from "./ErrorBoundaryProvider";

export const AppProvider = () => {
  return (
    <ErrorBoundaryProvider>
      <AppEnvProvider>
        <AppThemeProvider>
          <AppRouterProvider />
        </AppThemeProvider>
      </AppEnvProvider>
    </ErrorBoundaryProvider>
  );
};
