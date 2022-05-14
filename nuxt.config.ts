import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Nuxt v3.0.0-rc.2 では、まだ target:'static' は動作しない
  ssr: true,
  target: 'server',
  // TypeScript の Strict type checks を有効に
  typescript: {
    strict: true
  },
  // 共通scss参照
  css: [
    "@/assets/scss/reset.scss",
    "@/assets/scss/global.scss"
  ]
})
