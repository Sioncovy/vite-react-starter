import { AppEnvProvider } from "./AppEnvProvider";
import { AppI18nProvider } from "./AppI18nProvider";
import { AppRouterProvider } from "./AppRouterProvider";
import { AppThemeProvider } from "./AppThemeProvider";
import { ErrorBoundaryProvider } from "./ErrorBoundaryProvider";

export const AppProvider = () => {
  return (
    <ErrorBoundaryProvider>
      <AppEnvProvider>
        <AppI18nProvider>
          <AppThemeProvider>
            <AppRouterProvider />
          </AppThemeProvider>
        </AppI18nProvider>
      </AppEnvProvider>
    </ErrorBoundaryProvider>
  );
};
