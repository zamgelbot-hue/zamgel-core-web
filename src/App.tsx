// 📍 Ruta del archivo: src/App.tsx

import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { StatsBar } from "./components/sections/StatsBar";
import { TechStack } from "./components/sections/TechStack";
import { Footer } from "./components/layout/Footer";
import Services from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { About } from "./components/sections/About";
import { FinalCTA } from "./components/sections/FinalCTA";
import { PlansPreview } from "./components/sections/PlansPreview";
import { Planes } from "./pages/Planes";

export default function App() {
  const path = window.location.pathname;

  if (path === "/planes" || path === "/planes/") {
    return <Planes />;
  }

  return (
    <div className="min-h-screen bg-zam-bg selection:bg-zam-orange selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <TechStack />
        <Services />
        <PlansPreview />
        <Projects />
        <About />
        <FinalCTA />
      </main>

      <Footer />

      <div className="fixed bottom-0 left-0 w-full h-1 glow-line opacity-50 pointer-events-none z-50" />
    </div>
  );
}
