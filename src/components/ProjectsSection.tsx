import { useState } from "react";
import CardSection from "./CardSection";

const projects = [
  {
    icon: "🎨",
    title: "Brand Identity Design",
    desc: "A complete brand identity created for a local business — including logo, color palette, and brand guidelines.",
    type: "Graphic Design",
    gradient: "from-pink-500 to-primary",
  },
  {
    icon: "💻",
    title: "Personal Portfolio",
    desc: "This website itself is a project — built with a dark theme, smooth animations and a clean creative layout.",
    type: "Web Design",
    gradient: "from-primary to-green-accent",
  },
  {
    icon: "📱",
    title: "Social Media Pack",
    desc: "Designed professional thumbnails and posts for Facebook, Instagram and YouTube for various clients.",
    type: "Design",
    gradient: "from-amber-500 to-pink-500",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    desc: "AI-powered solutions and smart automation projects built with modern tools like ChatGPT, image generation, and intelligent chatbots for creative and technical innovation.",
    type: "Design Through AI",
    gradient: "from-primary to-purple-accent",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState<Record<string, boolean>>({});
  const toggle = (key: string) =>
    setActive((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <CardSection id="projects" icon="🚀" title="Projects">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
        {projects.map((p) => {
          const isActive = active[p.title];
          return (
            <button
              key={p.title}
              type="button"
              onClick={() => toggle(p.title)}
              className={`group relative overflow-hidden text-left rounded-2xl border bg-surface p-6 transition-all duration-300 focus:outline-none ${
                isActive
                  ? "border-primary bg-primary/10 shadow-[0_0_30px_oklch(0.72_0.15_200/55%)]"
                  : "border-primary/10 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_10px_30px_oklch(0.72_0.15_200/18%)]"
              }`}
            >
              <div className={`absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r ${p.gradient}`} />
              <div className="mb-2.5 text-3xl">{p.icon}</div>
              <div className="mb-2 text-[15px] font-semibold text-primary">{p.title}</div>
              <div className="text-xs leading-[1.7] text-muted-foreground/65">{p.desc}</div>
              <span className="mt-3 inline-block rounded-lg border border-primary/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                {p.type}
              </span>
            </button>
          );
        })}
      </div>
    </CardSection>
  );
}
