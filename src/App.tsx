import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
	return (
		<>
			<div className="p-2 flex w-full justify-center gap-2 relative">
				<Link className="[&.active]:font-bold" to="/">
					Home
				</Link>
				<Link className="[&.active]:font-bold" to="/about">
					About
				</Link>
				<div className="absolute right-2">
					<ThemeToggle />
				</div>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
}

export default App;
