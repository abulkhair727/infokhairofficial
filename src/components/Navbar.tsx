import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "About Me", icon: "👤", href: "#about" },
  { label: "Education", icon: "🎓", href: "#education" },
  { label: "My Expertise", icon: "⚡", href: "#skills" },
  { label: "Projects", icon: "🚀", href: "#projects" },
  { label: "Contact", icon: "✉️", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    document.addEventListener("click", onClick);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("click", onClick); };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 backdrop-blur-xl transition-all duration-300 border-b ${
        scrolled ? "border-primary/20 bg-background/95" : "border-primary/10 bg-background/88"
      }`}
    >
      <div className="flex items-center" ref={wrapRef}>
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border border-purple-accent/35 bg-purple-accent/12 transition-all hover:bg-purple-accent/25 hover:shadow-[0_0_14px] hover:shadow-purple-accent/40"
        >
          <span className="block h-0.5 w-[18px] rounded bg-purple-accent transition-colors" />
          <span className="block h-0.5 w-[18px] rounded bg-purple-accent transition-colors" />
          <span className="block h-0.5 w-[18px] rounded bg-purple-accent transition-colors" />
        </button>

        {/* Sparkle */}
        <div className="flex items-center justify-center px-2">
          <svg className="h-6 w-6 animate-sparkle" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <path d="M20 2 C20 11 29 20 38 20 C29 20 20 29 20 38 C20 29 11 20 2 20 C11 20 20 11 20 2Z" fill="url(#pg1)" />
            <path d="M32 5 C32 8.5 35.5 12 39 12 C35.5 12 32 15.5 32 19 C32 15.5 28.5 12 25 12 C28.5 12 32 8.5 32 5Z" fill="#e9d5ff" opacity="0.9" />
          </svg>
        </div>

        <span className="text-sm font-bold tracking-wide text-gold whitespace-nowrap drop-shadow-[0_0_14px_oklch(0.85_0.15_85/45%)]">
          Digital Creativity Portfolio
        </span>

        {/* Dropdown */}
        {menuOpen && (
          <div className="absolute top-[50px] left-0 z-50 min-w-[215px] overflow-hidden rounded-xl border border-purple-accent/25 bg-background/97 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 border-b border-purple-accent/8 px-5 py-3 text-[13px] font-medium text-muted-foreground transition-all hover:bg-purple-accent/12 hover:pl-7 hover:text-foreground"
              >
                <span className="w-4 text-center text-primary">{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
