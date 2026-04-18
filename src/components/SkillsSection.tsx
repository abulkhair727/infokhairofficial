import CardSection from "./CardSection";

const skills = [
  {
    icon: "🎨",
    title: "Graphic Design",
    desc: "Creating designs using Photoshop, Illustrator, Canva.",
    tags: ["Photoshop", "Illustrator", "Canva", "Branding", "Logo Design"],
    tagStyle: "border-green-accent/50 bg-green-accent/8 text-green-accent hover:bg-green-accent hover:text-background",
  },
  {
    icon: "🌐",
    title: "Web Design",
    desc: "Designing responsive and modern websites.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    tagStyle: "border-primary/50 bg-primary/8 text-primary hover:bg-primary hover:text-background",
  },
  {
    icon: "🔐",
    title: "Ethical Hacking",
    desc: "Learning cybersecurity and penetration testing.",
    tags: ["Network Security", "Kali Linux", "Penetration Testing", "OSINT", "Social Engineering", "CTF Challenges"],
    tagStyle: "border-purple-accent/50 bg-purple-accent/8 text-purple-accent hover:bg-purple-accent hover:text-background",
  },
];

export default function SkillsSection() {
  return (
    <CardSection id="skills" icon="⚡" title="My Expertise">
      <div className="space-y-3.5">
        {skills.map((s) => (
          <div
            key={s.title}
            tabIndex={0}
            className="rounded-xl border border-primary/8 bg-surface p-[18px] transition-all duration-200 hover:border-primary/22 cursor-pointer active:border-primary active:bg-primary/10 active:shadow-[0_0_25px_oklch(0.72_0.15_200/45%)] focus:border-primary focus:bg-primary/10 focus:shadow-[0_0_25px_oklch(0.72_0.15_200/45%)] focus:outline-none"
          >
            <div className="text-[15px] font-semibold text-primary">
              {s.icon} {s.title}
            </div>
            <div className="mt-1 text-xs text-muted-foreground/65">{s.desc}</div>
            <div className="mt-2.5 flex flex-wrap gap-2.5">
              {s.tags.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${s.tagStyle} active:!border-primary active:!bg-primary/20 active:!text-primary active:shadow-[0_0_18px_oklch(0.72_0.15_200/55%)] focus:!border-primary focus:!bg-primary/20 focus:!text-primary focus:shadow-[0_0_18px_oklch(0.72_0.15_200/55%)] focus:outline-none`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CardSection>
  );
}
