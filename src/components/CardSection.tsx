import { motion } from "framer-motion";

interface Props {
  id: string;
  icon: string;
  title: string;
  children: React.ReactNode;
}

export default function CardSection({ id, icon, title, children }: Props) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-6 rounded-2xl border border-primary/10 bg-surface p-7 shadow-[0_0_20px_oklch(0.72_0.15_200/6%)] transition-all hover:border-primary/30 hover:shadow-[0_0_30px_oklch(0.72_0.15_200/12%)]"
    >
      <h2 className="mb-5 flex items-center gap-2.5 text-lg font-semibold text-primary">
        <span>{icon}</span> {title}
        <span className="flex-1 h-px bg-primary/20" />
      </h2>
      {children}
    </motion.div>
  );
}
