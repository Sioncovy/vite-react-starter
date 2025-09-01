import { flattenMessages } from "@/lib/i18n";

const nested = {
  nav: {
    home: "首页",
    about: "关于",
  },
  home: {
    title: "欢迎回到首页！",
    subtitle: "你是一位优秀的开发者",
  },
  action: {
    switchToZh: "切换到中文",
    switchToEn: "切换到英文",
  },
};

export const messages = flattenMessages(nested);

export default messages;
