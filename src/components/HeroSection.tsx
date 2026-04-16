import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const phrases = ["Graphic Designer 🎨", "Web Developer 💻", "Ethical Hacker 🔐", "Creative Thinker ✨"];

const socials = [
  { icon: "📨", label: "Telegram", href: "https://t.me/Rx_Khan25" },
  { icon: "🎬", label: "YouTube", href: "https://youtube.com/@ai_creation_2.0k" },
  { icon: "📸", label: "Instagram", href: "https://www.instagram.com/abul_khair_77" },
  { icon: "📘", label: "Facebook", href: "https://www.facebook.com/share/1AqyGnpzVY/" },
  { icon: "🐦", label: "Twitter", href: "https://x.com/KhanInfo95152" },
];

export default function HeroSection() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setCharIdx(0);
          setPhraseIdx((p) => (p + 1) % phrases.length);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? 55 : 90);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <header className="relative overflow-hidden pt-28 pb-16 text-center">
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_80px,oklch(0.72_0.15_200/3%)_80px,oklch(0.72_0.15_200/3%)_81px),repeating-linear-gradient(0deg,transparent,transparent_80px,oklch(0.72_0.15_200/3%)_80px,oklch(0.72_0.15_200/3%)_81px)]" />
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 bg-[radial-gradient(ellipse,oklch(0.72_0.15_200/12%),transparent_70%)]" />

      {/* Profile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mb-5 w-[170px]"
      >
        <div className="animate-spin-slow absolute top-1/2 left-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-primary/35" />
        <div className="mx-auto h-[150px] w-[150px] rounded-full border-[3px] border-primary p-[5px] shadow-[0_0_40px_oklch(0.72_0.15_200/50%),0_0_80px_oklch(0.72_0.15_200/15%)] mt-[10px]">
          <img
            src="https://ui-avatars.com/api/?name=Abul+Khair&background=0a2540&color=00bfff&size=150"
            alt="MD. Abul Khair"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-[30px] font-bold tracking-[2px] text-foreground"
      >
        MD. ABUL KHAIR
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mt-1.5 min-h-[26px] text-[15px] text-primary"
      >
        {text}
        <span className="animate-pulse">|</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="relative z-10 mt-3 inline-block rounded-full border border-primary/40 px-4 py-1 text-xs text-primary"
      >
        ✦ Available for Work
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 mt-5 flex flex-wrap items-center justify-center gap-2.5"
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-4 py-2 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_oklch(0.72_0.15_200/30%)]"
          >
            <span>{s.icon}</span>
            <span className="text-xs font-medium tracking-wide">{s.label}</span>
          </a>
        ))}
      </motion.div>
    </header>
  );
}
