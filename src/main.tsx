import ReactDom from "react-dom/client";
import { AppProvider } from "./providers";

import "./global.css";

// Render the app
// biome-ignore lint/style/noNonNullAssertion: 模板代码
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDom.createRoot(rootElement);
  root.render(<AppProvider />);
}
