import CardSection from "./CardSection";

const socials = [
  { icon: "📨", label: "Telegram", href: "https://t.me/Rx_Khan25" },
  { icon: "🎬", label: "YouTube", href: "https://youtube.com/@ai_creation_2.0k" },
  { icon: "📸", label: "Instagram", href: "https://www.instagram.com/abul_khair_77" },
  { icon: "📘", label: "Facebook", href: "https://www.facebook.com/share/1AqyGnpzVY/" },
  { icon: "🐦", label: "Twitter", href: "https://x.com/KhanInfo95152" },
];

export default function AboutSection() {
  return (
    <CardSection id="about" icon="👤" title="About Me">
      <p className="text-sm leading-[1.9] text-muted-foreground">
        Hi! I'm <span className="font-semibold text-cyan">Md. Abul Khair</span>, a passionate tech enthusiast from{" "}
        <span className="font-semibold text-cyan">Bangladesh</span>. I love exploring the world of technology — from
        graphic design and web development to cybersecurity. My mission is to keep learning every day and turn that
        knowledge into meaningful projects. I believe that curiosity and consistency are the two pillars of any
        successful career in tech.Whether it's crafting beautiful visuals, building responsive websites, or understanding how systems stay secure, I'm always eager to level up my skills and contribute positively to the digital world.
      </p>

      <p className="mt-4 text-center text-sm tracking-[3px] text-primary/60">
        ...................∞✧∞..................
      </p>

      {/* Social Media Buttons */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-4 py-2 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-cyan hover:text-cyan hover:shadow-[0_0_15px_oklch(0.72_0.15_200/30%)]"
          >
            <span>{s.icon}</span>
            <span className="text-xs font-medium tracking-wide">{s.label}</span>
          </a>
        ))}
      </div>
    </CardSection>
  );
}
