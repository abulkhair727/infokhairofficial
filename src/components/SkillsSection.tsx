import { useState } from "react";
import CardSection from "./CardSection";

type GlowColor = "blue" | "green" | "purple";

const skills: {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  tagGlow: GlowColor;
}[] = [
  {
    icon: "🎨",
    title: "Graphic Design",
    desc: "Creating designs using Photoshop, Illustrator, Canva.",
    tags: ["Photoshop", "Illustrator", "Canva", "Branding", "Logo Design"],
    tagGlow: "green",
  },
  {
    icon: "🌐",
    title: "Web Design",
    desc: "Designing responsive and modern websites.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    tagGlow: "blue",
  },
  {
    icon: "🔐",
    title: "Ethical Hacking",
    desc: "Learning cybersecurity and penetration testing.",
    tags: ["Network Security", "Kali Linux", "Penetration Testing", "OSINT", "Social Engineering", "CTF Challenges"],
    tagGlow: "purple",
  },
];

const glowStyles: Record<GlowColor, { base: string; active: string }> = {
  blue: {
    base: "border-primary/50 bg-primary/8 text-primary",
    active: "!border-primary !bg-primary/25 !text-primary shadow-[0_0_20px_oklch(0.72_0.15_200/65%)]",
  },
  green: {
    base: "border-green-accent/50 bg-green-accent/8 text-green-accent",
    active: "!border-green-accent !bg-green-accent/25 !text-green-accent shadow-[0_0_20px_oklch(0.78_0.18_150/65%)]",
  },
  purple: {
    base: "border-purple-accent/50 bg-purple-accent/8 text-purple-accent",
    active: "!border-purple-accent !bg-purple-accent/25 !text-purple-accent shadow-[0_0_20px_oklch(0.65_0.22_300/65%)]",
  },
};

export default function SkillsSection() {
  const [activeCards, setActiveCards] = useState<Record<string, boolean>>({});
  const [activeTags, setActiveTags] = useState<Record<string, boolean>>({});

  const toggleCard = (key: string) =>
    setActiveCards((prev) => ({ ...prev, [key]: !prev[key] }));
  const toggleTag = (key: string) =>
    setActiveTags((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <CardSection id="skills" icon="⚡" title="My Expertise">
      <div className="space-y-3.5">
        {skills.map((s) => {
          const cardActive = activeCards[s.title];
          return (
            <button
              key={s.title}
              type="button"
              onClick={() => toggleCard(s.title)}
              className={`block w-full text-left rounded-xl border bg-surface p-[18px] transition-all duration-300 cursor-pointer focus:outline-none ${
                cardActive
                  ? "border-primary bg-primary/10 shadow-[0_0_30px_oklch(0.72_0.15_200/55%)]"
                  : "border-primary/8 hover:border-primary/22"
              }`}
            >
              <div className="text-[15px] font-semibold text-primary">
                {s.icon} {s.title}
              </div>
              <div className="mt-1 text-xs text-muted-foreground/65">{s.desc}</div>
              <div className="mt-2.5 flex flex-wrap gap-2.5">
                {s.tags.map((t) => {
                  const tagKey = `${s.title}-${t}`;
                  const tagActive = activeTags[tagKey];
                  const style = glowStyles[s.tagGlow];
                  return (
                    <span
                      key={t}
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTag(tagKey);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleTag(tagKey);
                        }
                      }}
                      className={`inline-block rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300 cursor-pointer focus:outline-none ${
                        tagActive ? style.active : style.base
                      }`}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </button>
          );
        })}
      </div>
    </CardSection>
  );
}
