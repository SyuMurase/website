# Personal Archive Site (23歳の人生アーカイブ)

このリポジトリは、**公開ポートフォリオではなく**、
23歳時点の思考・迷い・記憶を自分のために保存する個人サイトです。

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animation: Framer Motion

---

## 1. 前提環境

以下がインストールされていることを確認してください。

- **Node.js 20 以上推奨**
- **npm 10 以上推奨**

確認コマンド:

```bash
node -v
npm -v
```

---

## 2. セットアップ手順（起動まで）

### 2-1. リポジトリに移動

```bash
cd /workspace/website
```

### 2-2. 依存関係をインストール

```bash
npm install
```

### 2-3. 開発サーバーを起動

```bash
npm run dev
```

起動後、ブラウザで以下を開きます。

- http://localhost:3000

---

## 3. よく使うコマンド

### 開発サーバー

```bash
npm run dev
```

### 型チェック

```bash
npx tsc --noEmit
```

### 本番ビルド

```bash
npm run build
```

### 本番サーバー起動（build後）

```bash
npm run start
```

---

## 4. ディレクトリ構成（主要ファイル）

```text
app/
  layout.tsx        # ルートレイアウト
  page.tsx          # 6章構成のメインページ
  globals.css       # 全体スタイル
components/
  HeaderTabs.tsx    # 上部固定タブ
  SectionWrapper.tsx
  MemoryCard.tsx
  ThoughtCard.tsx
  FuturePanel.tsx
data/
  sections.ts       # 章・カード本文のデータ定義
```

---

## 5. カスタマイズ方法

本文を編集したい場合は、主に `data/sections.ts` を変更してください。

- 章タイトル・リード文: `sections`
- University/Hackathon/Hotel: `universityCards`, `hackathonCards`, `hotelCards`
- Thoughts: `thoughtCards`
- Future: `futurePanels`

レイアウトや見た目を変えたい場合は、以下を編集します。

- セクション共通UI: `components/SectionWrapper.tsx`
- タブ挙動: `components/HeaderTabs.tsx`
- 全体トーン: `app/globals.css`

---

## 6. トラブルシューティング

### `npm install` で失敗する

ネットワーク制限やレジストリアクセス制限で失敗する場合があります。
その場合は、接続可能な環境で以下を再実行してください。

```bash
npm install
```

### ポート3000が使用中

別ポートで起動:

```bash
npm run dev -- -p 3001
```

---

## 7. このサイトのコンセプト

- 成果よりも過程
- 実績よりも記憶
- 見栄えよりも主張

未来の自分が読み返したときに、
「23歳の時、何を考えていたか」が伝わることを最優先にしています。
