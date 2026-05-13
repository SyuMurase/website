import { ReactNode } from "react";

export default function MemoryCard({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <article className={`rounded-2xl border border-white/15 bg-white/5 p-5 md:p-6 ${className}`}>
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <div className="space-y-3 text-sm leading-7 opacity-90">{children}</div>
    </article>
  );
}
