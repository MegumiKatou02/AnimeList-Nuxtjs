// https://nuxt.com/docs/api/configuration/nuxt-config
import envCompatible from 'vite-plugin-env-compatible'

export default defineNuxtConfig({
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
  // nitro: {
  //   devProxy: {
  //     '/api/': {
  //       target: 'https://api.myanimelist.net/v2',
  //       changeOrigin: true,
  //       prependPath: false,
  //       headers: {
  //         'X-MAL-CLIENT-ID': `39bd5673e38f2ddd2bae2518e57b5b04`
  //       }
  //     },
  //     '/mangadex-api/': {
  //       target: 'https://api.mangadex.org',
  //       changeOrigin: true,
  //       prependPath: false,
  //     },
  //     '/mangadex-covers/': {
  //       target: 'https://uploads.mangadex.org',
  //       changeOrigin: true,
  //       prependPath: false,
  //       headers: {
  //         Referer: 'https://mangadex.org',
  //         'Cache-Control': 'no-cache',
  //       },
  //     },
  //   },
  // },

  app: {
    head: {
      title: "Anime List",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "referrer", content: "same-origin" },
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