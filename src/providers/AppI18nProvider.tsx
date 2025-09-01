import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type SupportedLocale = "en" | "zh";

type AppI18nContextValue = {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => Promise<void>;
};

const AppI18nContext = createContext<AppI18nContextValue | undefined>(
  undefined,
);

const detectInitialLocale = (): SupportedLocale => {
  if (typeof navigator !== "undefined") {
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith("zh")) {
      return "zh";
    }
  }
  return "en";
};

const loadCatalog = async (locale: SupportedLocale) => {
  switch (locale) {
    case "zh": {
      const mod = await import("../locales/zh/messages");
      return mod.messages;
    }
    // case "en":
    default: {
      const mod = await import("../locales/en/messages");
      return mod.messages;
    }
  }
};

export const AppI18nProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocaleState] = useState<SupportedLocale>(
    detectInitialLocale(),
  );

  const activate = useCallback(async (nextLocale: SupportedLocale) => {
    const messages = await loadCatalog(nextLocale);
    i18n.load(nextLocale, messages);
    i18n.activate(nextLocale);
    setLocaleState(nextLocale);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: 只需要挂载的时候激活一次
  useEffect(() => {
    activate(locale);
  }, []);

  const contextValue = useMemo<AppI18nContextValue>(
    () => ({
      locale,
      setLocale: activate,
    }),
    [activate, locale],
  );

  return (
    <AppI18nContext.Provider value={contextValue}>
      <I18nProvider i18n={i18n}>{children}</I18nProvider>
    </AppI18nContext.Provider>
  );
};

export const useAppI18n = () => {
  const ctx = useContext(AppI18nContext);
  if (!ctx) {
    throw new Error("useAppI18n must be used within AppI18nProvider");
  }
  return ctx;
};
