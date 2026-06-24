export default function ThoughtCard({ tag, text }: { tag: string; text: string }) {
  return (
    <article className="rounded-xl border border-stone-300 bg-white/80 p-5 shadow-sm">
      <p className="mb-3 inline-block rounded-full bg-stone-200 px-3 py-1 text-xs font-medium">{tag}</p>
      <p className="leading-7">{text}</p>
    </article>
  );
}
