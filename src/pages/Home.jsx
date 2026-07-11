import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import Aurora from "@/reactbits/Aurora";
import ClickSpark from "@/reactbits/ClickSpark";
import { lazy, Suspense } from "react";

const Scene3D = lazy(() =>
  import("../components/three/Scene3D").then((m) => ({ default: m.Scene3D }))
);

export const Home = () => {
  return (
    <ClickSpark sparkColor="#a78bfa" sparkSize={12} sparkRadius={22} sparkCount={10} duration={500}>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Subtle Aurora wash under the 3D scene */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
          <Aurora colorStops={["#8B5CF6", "#5227FF", "#A78BFA"]} amplitude={1.1} blend={0.55} speed={0.7} />
        </div>

        {/* Three.js 3D scene (r3f + drei) — lazy so text paints first */}
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ClickSpark>
  );
};
