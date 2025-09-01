import { flattenMessages } from "@/lib/i18n";

const nested = {
  nav: {
    home: "Home",
    about: "About",
  },
  home: {
    title: "Welcome Home!",
    subtitle: "You are a good developer",
  },
  action: {
    switchToZh: "Switch to Chinese",
    switchToEn: "Switch to English",
  },
};

export const messages = flattenMessages(nested);

export default messages;
