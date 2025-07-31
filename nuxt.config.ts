// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
    ],
  css: ['~/assets/css/main.css'],        // global CSS file:contentReference[oaicite:11]{index=11} 

   app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/omr.png' }
      ],
    }
  },
})