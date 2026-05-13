export type SectionTheme =
  | "notion"
  | "academic"
  | "hackathon"
  | "hotel"
  | "thoughts"
  | "future";

export type SectionData = {
  id: string;
  title: string;
  subtitle: string;
  theme: SectionTheme;
  lead: string;
};

export type MemoryItem = { title: string; body: string[] };
export type ThoughtItem = { tag: string; text: string };
export type FutureItem = { year: string; title: string; detail: string };

export const sections: SectionData[] = [
  {
    id: "home",
    title: "Home",
    subtitle: "現在地",
    theme: "notion",
    lead: "23歳の自分を、未来の自分のために保存する場所。",
  },
  {
    id: "university",
    title: "University",
    subtitle: "大学編",
    theme: "academic",
    lead: "研究の進捗だけでなく、迷いと再定義の連続も残す章。",
  },
  {
    id: "hackathon",
    title: "Hackathon",
    subtitle: "ハッカソン編",
    theme: "hackathon",
    lead: "熱量に触れ、未熟さを直視した深夜の記録。",
  },
  {
    id: "hotel",
    title: "Hotel",
    subtitle: "ホテル編",
    theme: "hotel",
    lead: "接客の静けさの中で、人と向き合う力を覚えた記録。",
  },
  {
    id: "thoughts",
    title: "Thoughts",
    subtitle: "思考ログ",
    theme: "thoughts",
    lead: "答えではなく、今の判断軸を置いておくためのメモ。",
  },
  {
    id: "future",
    title: "Future",
    subtitle: "未来編",
    theme: "future",
    lead: "派手さより、長く信頼される状態へ向かうロードマップ。",
  },
];

export const universityCards: MemoryItem[] = [
  {
    title: "Research Theme",
    body: [
      "色・奥行き・意味・位置が矛盾するとき、脳がどの順序で整合を取り直すのかに惹かれている。",
      "ストループ効果、奥行き知覚、ERPの時間解像度を手がかりに、認知の処理過程を追いたい。",
    ],
  },
  {
    title: "Laboratory",
    body: [
      "神経情報システム研究室で、認知と情報処理の接点を学んでいる。",
      "研究テーマはまだ固定しきれず、問いの立て方を何度も作り直している。",
    ],
  },
  {
    title: "What I Learned",
    body: [
      "研究は正解探しというより、曖昧な現象を観測可能な問いに翻訳する作業だと分かってきた。",
    ],
  },
  {
    title: "Struggle",
    body: [
      "進捗が見えない日は焦りが強くなる。でも、理解が一段深まる瞬間の嬉しさが次の一歩を作ってくれる。",
    ],
  },
  {
    title: "Why Cognition Matters",
    body: [
      "人間が情報をどう受け取り、どう誤り、どう修正するのかを知ることは、ITや対人支援の実践にもつながると感じている。",
    ],
  },
];

export const hackathonCards: MemoryItem[] = [
  {
    title: "The Night Before Demo",
    body: [
      "ドライバーの運転を同乗者視点で定量フィードバックするプロトタイプを、限られた時間で形にした。",
      "02:14 AM、バグが残るまま手を止める判断がいちばん難しかった。",
    ],
  },
  {
    title: "Team Development",
    body: [
      "初対面のメンバーと開発する難しさを痛感。技術以前に、前提共有と役割の言語化が重要だった。",
    ],
  },
  {
    title: "What I Could Not Do",
    body: [
      "思ったほど貢献できなかった悔しさが残っている。『もっとできたはず』という感覚は今もある。",
    ],
  },
  {
    title: "What I Learned",
    body: [
      "成果物に対して遠慮なく意見を出す姿勢、失敗時に原因を切り分ける姿勢を間近で見て、自分の基準が少し上がった。",
    ],
  },
  {
    title: "Still, I Tried",
    body: [
      "成功体験ではない。でも挑戦する環境に身を置いたこと自体が、次の行動を選ぶ力になっている。",
    ],
  },
];

export const hotelCards: MemoryItem[] = [
  {
    title: "Front Desk",
    body: [
      "フロントは、案内・荷物・伝票・代筆など細かな判断の連続。マニュアルだけでは足りない場面が多かった。",
    ],
  },
  {
    title: "Night Shift",
    body: [
      "一人勤務の夜は静かだが責任は重い。不安を抱えたままでも落ち着いて対応する習慣が身についた。",
    ],
  },
  {
    title: "English and Guests",
    body: [
      "喘息を持つ海外ゲストの病院対応で、医療系英語の難しさを痛感。通じない悔しさが学び直す動機になった。",
    ],
  },
  {
    title: "Being Trusted",
    body: [
      "『任せられる』と言われた経験は大きかった。責任を引き受けることに、少しずつ自信が生まれた。",
    ],
  },
  {
    title: "Conversations",
    body: [
      "会話の中で相手の表情が和らぐ瞬間が好き。接客は作業ではなく、人の困りごとに向き合う仕事だと感じる。",
    ],
  },
];

export const thoughtCards: ThoughtItem[] = [
  { tag: "About People", text: "人と話すことが好き。相手が笑ったり安心したりする瞬間に、素直な喜びを感じる。" },
  { tag: "About Communication", text: "深い会話が好き。発言を後から気にするのは、自分を責めるためだけではなく改善のため。" },
  { tag: "About Anxiety", text: "不安は消えない。だからこそ『なぜその判断をするか』を言語化して、自分の足場を作る。" },
  { tag: "About Growth", text: "挑戦する環境にいないと、思考は鈍る。未完成でも、前に出る選択を続けたい。" },
  { tag: "About Technology", text: "AIや認知科学への興味は、最終的に『人の理解を助ける』一点でつながっている。" },
  { tag: "About Work", text: "働く意味は、成果だけでなく信頼の蓄積。『任せられる人』であることを長期目標にしている。" },
];

export const futurePanels: FutureItem[] = [
  { year: "2026-2027", title: "Build Foundation", detail: "社会人基礎、技術理解、顧客対応を同時に積み上げる。まずは土台を安定させる。" },
  { year: "2028", title: "Expand Role", detail: "SEとして実務経験を増やし、技術を相手の言葉で伝える力を磨く。" },
  { year: "2029", title: "Trusted Professional", detail: "再現性のある対応と判断で『村瀬なら任せられる』を実際の評価にする。" },
  { year: "2030", title: "Life with Margin", detail: "生活基盤を整え、犬を迎える準備や車の維持ができる余白を持つ。" },
];
