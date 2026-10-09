# Tailwind CSS 入門デモ

React、Vite、Tailwind CSS、TypeScript で作成した入門記事用のデモです。

## 使用技術

- React 19
- Vite 8
- Tailwind CSS 4
- TypeScript 6

## 起動方法

```bash
npm install
npm run dev
```

表示されたローカル URL をブラウザで開きます。

## コマンド

```bash
npm run dev      # 開発サーバーを起動
npm run build    # 型チェックと本番ビルド
npm run lint     # Oxlint を実行
npm run preview  # ビルド結果をローカルで確認
```

Tailwind CSS は `@tailwindcss/vite` プラグイン経由で Vite に接続し、
`src/index.css` から `@import 'tailwindcss';` で読み込んでいます。

## 画像素材のライセンス

デモの画像は [Lorem Picsum](https://picsum.photos/) のものを使用しています。画像の出典は [Unsplash](https://unsplash.com/) であり、著作権上の利用条件は [Unsplash License](https://unsplash.com/license) に従います。

使用画像の ID は `13`、`237`〜`239`、`241`〜`244`、`249`、`1016` です。
