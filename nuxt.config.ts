// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/dist/css/tabler.min.css',
    '~/assets/dist/css/tabler-flags.min.css',
    '~/assets/dist/css/tabler-vendors.min.css',
    '~/assets/dist/css/demo.min.css'
  ],
  modules: [[
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'storeToRefs', 'acceptHMRUpdate'],
    }
  ], '@nuxt/image', '@vueuse/nuxt', "@nuxtjs/i18n"],
  imports: {
    dirs: ['stores'],
  },
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
  image: {
    format: ['webp'],
    domains: [
      'https://fakestoreapi.com'
    ],
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    customRoutes: 'config',
    pages: {
      login: {
        en: '/login',
        fr: '/connextion',
      },
    },
  },
  ssr: false,
})