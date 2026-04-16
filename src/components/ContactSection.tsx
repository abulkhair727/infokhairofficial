import { useState } from "react";
import CardSection from "./CardSection";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSend = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in all fields!");
      return;
    }
    alert("✅ Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <CardSection id="contact" icon="✉️" title="Contact">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-xl border border-primary/20 bg-surface px-4 py-3 text-[13px] text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:shadow-[0_0_12px_oklch(0.72_0.15_200/20%)]"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-xl border border-primary/20 bg-surface px-4 py-3 text-[13px] text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:shadow-[0_0_12px_oklch(0.72_0.15_200/20%)]"
        />
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="min-h-[120px] w-full resize-y rounded-xl border border-primary/20 bg-surface px-4 py-3 text-[13px] text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:shadow-[0_0_12px_oklch(0.72_0.15_200/20%)]"
        />
        <button
          onClick={handleSend}
          className="w-full rounded-xl bg-gradient-to-br from-primary to-[oklch(0.55_0.15_230)] py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_oklch(0.72_0.15_200/40%)]"
        >
          ✈️ Send Message
        </button>
        <a
          href="https://wa.me/8801717865806"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] py-3.5 text-[15px] font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)]"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    </CardSection>
  );
}
