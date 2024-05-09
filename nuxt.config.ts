// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ui: {
    // icons: 'all',
    icons: [
      'material-symbols',
      'eos-icons',
      'ic',
      'mdi',
      'heroicons',
      // 'fluent',
      // 'line-md',
    ],
  },
  modules: ['nuxt-icon', '@nuxt/ui'],
  runtimeConfig: {
    RESEND_API: '',
    MONGODB_URL: '',
  },
})
