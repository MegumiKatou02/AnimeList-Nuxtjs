// https://nuxt.com/docs/api/configuration/nuxt-config
import envCompatible from 'vite-plugin-env-compatible'

export default defineNuxtConfig({
  ssr: true,
  vite: {
    plugins: [envCompatible()],
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css'
  ],
  runtimeConfig: {
    MAL_CLIENT_ID: process.env.NUXT_CLIENT_ID_MYANIMELIST
  },

  modules: [
    '@nuxt/devtools',
    '@nuxt-alt/proxy',
  ],
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    }
  },
  experimental: {
    payloadExtraction: true
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'vi'
      },
      title: "Anime List",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "referrer", content: "same-origin" },
        { property: 'og:site_name', content: 'Manga Reader' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Pacifico&family=Playwrite+IN:wght@100..400&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
        },
      ],
    },
  },
})