import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDom from "react-dom/client";

import { AppThemeProvider } from "./components/AppThemeProvider";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import "./global.css";
import "@radix-ui/themes/styles.css";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// Render the app
// biome-ignore lint/style/noNonNullAssertion: 模板代码
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
	const root = ReactDom.createRoot(rootElement);
	root.render(
		<AppThemeProvider>
			<RouterProvider router={router} />
		</AppThemeProvider>,
	);
}
