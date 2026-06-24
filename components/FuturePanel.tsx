export default function FuturePanel({ year, title, detail }: { year: string; title: string; detail: string }) {
  return (
    <article className="rounded-2xl border border-cyan-300/30 bg-white/5 p-5 shadow-glow backdrop-blur">
      <p className="text-xs tracking-[0.2em] text-cyan-300">{year}</p>
      <h3 className="mt-2 text-xl font-semibold text-cyan-100">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-cyan-50/85">{detail}</p>
    </article>
  );
}
