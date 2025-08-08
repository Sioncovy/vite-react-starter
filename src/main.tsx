import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: 模板代码
createRoot(document.getElementById("root")!).render(<App />);
