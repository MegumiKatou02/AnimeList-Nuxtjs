// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css'
  ],

  runtimeConfig: {
    public: {
      clientIdMyanimelist: process.env.NUXT_PUBLIC_CLIENT_ID_MYANIMELIST,
      discordCLientId: process.env.NUXT_PUBLIC_DISCORD_CLIENT_ID,
      discordRedirectUri: process.env.NUXT_PUBLIC_DISCORD_REDIRECT_URI,
    },
    private: {
      discordClientSecret: process.env.NUXT_PRIVATE_DISCORD_CLIENT_SECRET,
      firebaseApiKey: process.env.NUXT_PRIVATE_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_PRIVATE_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PRIVATE_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_PRIVATE_FIREBASE_STORAGE_BUCKET,
      firebaseSenderId: process.env.NUXT_PRIVATE_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_PRIVATE_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.NUXT_PRIVATE_FIREBASE_MEASUREMENT_ID
    }
  },

  modules: [
    '@nuxt/devtools',
    '@nuxt-alt/proxy',
  ],
  nitro: {
    devProxy: {
      '/api/': {
        target: 'https://api.myanimelist.net/v2',
        changeOrigin: true,
        prependPath: false,
      },
      '/mangadex-api/': {
        target: 'https://api.mangadex.org',
        changeOrigin: true,
        prependPath: false,
      },
      '/mangadex-covers/': {
        target: 'https://uploads.mangadex.org',
        changeOrigin: true,
        prependPath: false,
        headers: {
          Referer: 'https://mangadex.org',
          'Cache-Control': 'no-cache',
        },
      },
    },
  },
  
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