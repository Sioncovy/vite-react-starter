// import { env } from "../../lib/env";

import { Trans } from "@lingui/react/macro";
import { useAppI18n } from "@/providers/AppI18nProvider";

export const Home = () => {
  const { locale, setLocale } = useAppI18n();
  // console.log("环境变量", env);
  return (
    <div className="p-2 m-4">
      <h3 className="">
        <Trans id="home.title">Welcome Home!</Trans>
      </h3>
      <div>
        <Trans id="home.subtitle">You are a good developer</Trans>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm opacity-70">Locale: {locale}</span>
        <button
          type="button"
          className="px-2 py-1 rounded border"
          onClick={() => setLocale("zh")}
        >
          <Trans id="action.switchToZh">切换到中文</Trans>
        </button>
        <button
          type="button"
          className="px-2 py-1 rounded border"
          onClick={() => setLocale("en")}
        >
          <Trans id="action.switchToEn">Switch to English</Trans>
        </button>
      </div>
    </div>
  );
};
