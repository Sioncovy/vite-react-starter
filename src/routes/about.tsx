import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/views/About";

export const Route = createFileRoute("/about")({
  component: About,
});
