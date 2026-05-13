"use client";

import { motion } from "framer-motion";
import { SectionData } from "@/data/sections";

type Props = {
  sections: SectionData[];
  active: string;
};

export default function HeaderTabs({ sections, active }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/75 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 py-3">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/15"
                  transition={{ type: "spring", stiffness: 250, damping: 30 }}
                />
              )}
              {section.title}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
