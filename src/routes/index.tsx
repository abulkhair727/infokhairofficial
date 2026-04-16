import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "../components/Navbar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MD. Abul Khair — Digital Creativity Portfolio" },
      { name: "description", content: "Portfolio of Md. Abul Khair — Graphic Designer, Web Developer & Ethical Hacker from Bangladesh." },
      { property: "og:title", content: "MD. Abul Khair — Digital Creativity Portfolio" },
      { property: "og:description", content: "Graphic Designer, Web Developer & Ethical Hacker from Bangladesh." },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <Navbar />
      <HeroSection />
      <main className="mx-auto max-w-[900px] px-5 pb-10">
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
