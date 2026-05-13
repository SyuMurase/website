"use client";

import { useEffect, useMemo, useState } from "react";
import FuturePanel from "@/components/FuturePanel";
import HeaderTabs from "@/components/HeaderTabs";
import MemoryCard from "@/components/MemoryCard";
import SectionWrapper from "@/components/SectionWrapper";
import ThoughtCard from "@/components/ThoughtCard";
import {
  futurePanels,
  hackathonCards,
  hotelCards,
  sections,
  thoughtCards,
  universityCards,
} from "@/data/sections";

export default function Page() {
  const [active, setActive] = useState("home");
  const sectionIds = useMemo(() => sections.map((s) => s.id), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.5, 0.8] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <main>
      <HeaderTabs sections={sections} active={active} />

      <SectionWrapper id="home" title="Home" subtitle="現在地" theme="notion" lead={sections[0].lead}>
        <div className="space-y-6 text-left">
          <p className="text-sm text-neutral-500">📌 personal archive / age 23 / private</p>
          <h1 className="text-4xl font-semibold">Murase Takashi</h1>
          <ul className="space-y-2 text-neutral-700">
            <li>age 23</li>
            <li>university student</li>
            <li>Osaka / Japan</li>
            <li>neuroscience / cognition / IT / communication</li>
          </ul>
          <p className="max-w-3xl leading-8">
            これは、23歳になった自分を保存するための個人的なホームページです。誰かに見せるためではなく、今の自分が何を考え、何に迷い、何を大切にしていたのかを残すために作っています。
          </p>
          <p className="max-w-3xl border-l-2 border-neutral-300 pl-4 text-neutral-600">
            成果を並べる場所ではなく、未完成さも含めて未来の自分が読み返せる場所にしたい。
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="university" title="University" subtitle="大学編" theme="academic" lead={sections[1].lead}>
        <div className="mb-8 h-10 w-full rounded-lg border border-zinc-300 bg-[linear-gradient(90deg,transparent_0%,transparent_6%,rgba(0,0,0,0.15)_7%,transparent_8%,transparent_100%)] opacity-70" />
        <div className="grid gap-4 md:grid-cols-2">
          {universityCards.map((card) => (
            <MemoryCard key={card.title} title={card.title} className="border-zinc-300 bg-white/80 text-zinc-800">
              {card.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </MemoryCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="hackathon" title="Hackathon" subtitle="ハッカソン編" theme="hackathon" lead={sections[2].lead}>
        <div className="mb-6 rounded-xl border border-indigo-300/20 bg-black/30 p-4 font-mono text-xs text-indigo-300/85">
          <p>02:14 AM // bug still alive</p>
          <p>Discord call connected</p>
          <p>prototype submitted</p>
          <p>I wanted to contribute more</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {hackathonCards.map((card) => (
            <MemoryCard key={card.title} title={card.title}>
              {card.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </MemoryCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="hotel" title="Hotel" subtitle="ホテル編" theme="hotel" lead={sections[3].lead}>
        <div className="mb-6 rounded-xl border border-amber-100/25 bg-black/20 p-4 text-sm italic text-amber-100/80">
          夜のロビーは静かだけど、相談は突然やってくる。そこでどう振る舞うかが、そのまま自分の仕事観になる。
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {hotelCards.map((card) => (
            <MemoryCard key={card.title} title={card.title} className="border-amber-200/30 bg-amber-50/10">
              {card.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </MemoryCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="thoughts" title="Thoughts" subtitle="思考ログ" theme="thoughts" lead={sections[4].lead}>
        <div className="mb-4 rounded-xl border border-stone-300 bg-white/70 p-4 text-sm leading-7 text-stone-700">
          ここは答えを出す場所ではなく、今の判断基準を残す場所。将来読み返したとき、迷い方の癖まで分かるように。 
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {thoughtCards.map((card) => (
            <ThoughtCard key={card.tag} tag={card.tag} text={card.text} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="future" title="Future" subtitle="未来編" theme="future" lead={sections[5].lead}>
        <div className="mb-6 rounded-2xl border border-cyan-300/25 bg-cyan-100/5 p-5 text-sm leading-7 text-cyan-50/85">
          大きな夢より、現実的な積み上げ。技術と対話の両方を伸ばして、長く働ける状態を作る。
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {futurePanels.map((panel) => (
            <FuturePanel key={panel.year} year={panel.year} title={panel.title} detail={panel.detail} />
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
