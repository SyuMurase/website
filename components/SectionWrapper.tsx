import { motion } from "framer-motion";
import { ReactNode } from "react";
import { SectionTheme } from "@/data/sections";

const themeClasses: Record<SectionTheme, string> = {
  notion: "bg-white text-neutral-800",
  academic: "bg-gradient-to-b from-zinc-100 to-white text-zinc-800",
  hackathon: "bg-gradient-to-b from-[#0b1023] to-[#111827] text-indigo-100 grid-noise",
  hotel: "bg-gradient-to-b from-[#1d1612] via-[#231913] to-[#120f0d] text-amber-100",
  thoughts: "bg-[#f7f4ef] text-stone-800",
  future: "bg-gradient-to-b from-[#030711] via-[#071325] to-[#040910] text-cyan-100",
};

export default function SectionWrapper({
  id,
  title,
  subtitle,
  theme,
  lead,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  theme: SectionTheme;
  lead: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`min-h-screen scroll-mt-20 px-4 py-16 md:py-24 ${themeClasses[theme]}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-5xl"
      >
        <p className="mb-2 text-xs uppercase tracking-[0.2em] opacity-70">{subtitle}</p>
        <h2 className="mb-3 text-3xl font-semibold md:text-4xl">{title}</h2>
        <p className="mb-8 max-w-3xl text-sm leading-7 opacity-80">{lead}</p>
        {children}
      </motion.div>
    </section>
  );
}
