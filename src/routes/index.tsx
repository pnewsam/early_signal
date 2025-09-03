import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/hero";
import FeaturesSection from "@/components/features-section";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="py-20">
      <Hero />
      <FeaturesSection />
    </main>
  );
}
