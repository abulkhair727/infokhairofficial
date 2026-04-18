import { useState } from "react";
import CardSection from "./CardSection";

const education = [
  { icon: "⭐", title: "PSC", desc: "Primary School Certificate", status: "completed" },
  { icon: "📖", title: "JSC", desc: "Junior School Certificate", status: "completed" },
  { icon: "🏫", title: "SSC", desc: "Secondary School Certificate", status: "completed" },
  { icon: "🔥", title: "HSC", desc: "Higher Secondary Certificate", status: "completed" },
  { icon: "🏛️", title: "(BSc Honours)", desc: "Higher Education", status: "coming" },
];

export default function EducationSection() {
  const [active, setActive] = useState<Record<string, boolean>>({});
  const toggle = (key: string) =>
    setActive((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <CardSection id="education" icon="🎓" title="Education">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(155px,1fr))] gap-4">
        {education.map((e) => {
          const isActive = active[e.title];
          return (
            <button
              key={e.title}
              type="button"
              onClick={() => toggle(e.title)}
              className={`rounded-2xl border bg-surface p-5 text-center transition-all duration-300 focus:outline-none ${
                isActive
                  ? "border-primary bg-primary/10 shadow-[0_0_30px_oklch(0.72_0.15_200/55%)] -translate-y-1 scale-[1.02]"
                  : "border-primary/8 hover:-translate-y-2 hover:scale-[1.03] hover:border-primary/40 hover:shadow-[0_0_25px_oklch(0.72_0.15_200/28%)]"
              }`}
            >
              <div className="mb-2.5 text-3xl">{e.icon}</div>
              <div className="text-[15px] font-semibold text-primary">{e.title}</div>
              <div className="text-[11px] leading-relaxed text-muted-foreground/65">{e.desc}</div>
              <span
                className={`mt-3 inline-block rounded-full px-3.5 py-1 text-[11px] font-semibold ${
                  e.status === "completed"
                    ? "border border-primary bg-primary/12 text-primary"
                    : "border border-amber-400 bg-amber-400/12 text-amber-400"
                }`}
              >
                {e.status === "completed" ? "✓ Completed" : "⏳ Coming Soon"}
              </span>
            </button>
          );
        })}
      </div>
    </CardSection>
  );
}
