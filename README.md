# Nuxt3 RC + SCSS : Starter kit.

## これはなに

Nuxt3 RC + SCSS + TypeScript が使えるもっともシンプルな環境を構築するものです。  
`pages/index.vue` と `pages/about.vue` の間に張られたリンクを行き来するだけのシンプルな構成となっています。  

- 公式情報
  - [Nuxt 3 Quick Start](https://v3.nuxtjs.org/getting-started/quick-start/)
  - [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation)

- 動作環境
  - node.js `v16.14.2`
  - yarn `v1.22.18`
  - npm `v8.5.0`

## セットアップ

- gitリポジトリから取得

```bash
git clone https://github.com/old-pgmrs-will/nuxt3_scss_starter
cd nuxt3_scss_starter
```

- モジュール・インストール

```bash
# yarn
yarn install

# npm
npm install
```

- 開発用サーバ起動

```bash
# yarn
yarn dev -o

# npm
npm run dev
```

稼働環境: http://localhost:3000

（yarn の場合は '-o' オプションでブラウザが自動起動します）

- プロダクション・ビルド

```bash
yarn build
```

- プロダクション・ビルドのローカルプレビュー

```bash
yarn preview
```

- デプロイに関する情報
  - https://v3.nuxtjs.org/guide/deploy/node-server
  - https://v3.nuxtjs.org/guide/deploy/static-hosting
  - https://v3.nuxtjs.org/guide/deploy/presets

