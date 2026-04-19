export default function Footer() {
  return (
    <footer className="border-t border-primary/12 bg-background/20 py-7 text-center">
      <div className="mb-3.5 flex flex-wrap items-center justify-center gap-5">
        <a
          href="mailto:infokhairofficial@gmail.com"
          className="inline-flex items-center gap-2 text-[13px] text-muted-foreground/60 transition-colors hover:text-primary"
        >
          ✉️ infokhairofficial@gmail.com
        </a>
        <a
          href="https://wa.me/8801717865806"
          className="inline-flex items-center gap-2 text-[13px] text-muted-foreground/60 transition-colors hover:text-[#25D366]"
        >
          💬 01717865806
        </a>
      </div>
      <p className="whitespace-nowrap text-center text-[10px] text-muted-foreground/30 sm:text-xs">
        © 2026 All rights reserved | Designed & Developed by{" "}
        <span className="font-bold text-gold">Abul Khair</span>
      </p>
    </footer>
  );
}
