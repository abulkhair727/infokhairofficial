import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTelegram, FaYoutube, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import profileImg from "@/assets/profile.jpg";

const phrases = ["Graphic Designer 🎨", "Web Developer 💻", "Ethical Hacker 🔐", "Creative Thinker ✨"];

const socials = [
  { icon: FaTelegram, label: "Telegram", href: "https://t.me/Rx_Khan25", color: "#26A5E4" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com/@ai_creation_2.0k", color: "#FF0000" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/abul_khair_77", color: "#E4405F" },
  { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/share/1AqyGnpzVY/", color: "#1877F2" },
  { icon: FaXTwitter, label: "Twitter", href: "https://x.com/KhanInfo95152", color: "#FFFFFF" },
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
        className="relative z-10 mx-auto mb-5 h-[210px] w-[210px]"
      >
        <div className="animate-ring-spin absolute inset-[2px] rounded-full border-2 border-dashed border-cyan/50 shadow-[0_0_18px_oklch(0.72_0.15_200/40%),inset_0_0_18px_oklch(0.72_0.15_200/15%)]" />
        <div className="animate-ring-spin-reverse absolute inset-[6px] rounded-full border border-dotted border-cyan/30 shadow-[0_0_12px_oklch(0.72_0.15_200/25%)]" />
        <svg className="animate-ring-spin-mid absolute inset-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)]" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.72 0.15 200)" stopOpacity="0.9" />
              <stop offset="50%" stopColor="oklch(0.65 0.2 300)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="oklch(0.72 0.15 200)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="96" fill="none" stroke="url(#arcGrad)" strokeWidth="2" strokeDasharray="120 80 60 40" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-[15px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.15_200/10%)_0%,transparent_70%)]" />
        <div className="absolute inset-[20px] rounded-full border-[3px] border-primary/60 p-[3px] shadow-[0_0_30px_oklch(0.72_0.15_200/45%),0_0_60px_oklch(0.72_0.15_200/15%),inset_0_0_20px_oklch(0.72_0.15_200/10%)]">
          <img src={profileImg} alt="MD. Abul Khair" className="h-full w-full rounded-full object-cover" />
        </div>
        <div className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_8px_oklch(0.72_0.15_200/80%)]" />
        <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_8px_oklch(0.72_0.15_200/80%)]" />
        <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_8px_oklch(0.72_0.15_200/80%)]" />
        <div className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_8px_oklch(0.72_0.15_200/80%)]" />
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
        {socials.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/12 px-4 py-2 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_oklch(0.72_0.15_200/30%)]"
            >
              {s.label === "Twitter" ? (
                <Icon size={16} className="text-foreground" />
              ) : (
                <Icon size={16} style={{ color: s.color }} />
              )}
              <span className="text-xs font-medium tracking-wide">{s.label}</span>
            </a>
          );
        })}
      </motion.div>
    </header>
  );
}
