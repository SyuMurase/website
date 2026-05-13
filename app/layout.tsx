import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "23歳の人生アーカイブ",
  description: "自分のために保存する個人ホームページ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-neutral-950 text-neutral-100 antialiased">{children}</body>
    </html>
  );
}
