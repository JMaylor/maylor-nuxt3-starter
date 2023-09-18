// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: { host: 'localhost' },
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/main.css'],
  modules: [
    '@vueuse/nuxt', // https://vueuse.org/nuxt/README.html
    '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org/
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    'nuxt-icon', // https://github.com/nuxt-modules/icon
    '@nuxtjs/eslint-module', // https://nuxt.com/modules/eslint
  ],
})
