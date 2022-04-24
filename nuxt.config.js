export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'benjampo-portfolio',
    description: 'Je suis Benjamin Porchet, développeur Front-end basé en Suisse. Je développe des sites et applications webs pour mes clients',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { crossorigin: 'anonymous', src: 'https://polyfill.io/v3/polyfill.min.js?features=WeakMap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/kinesis.js',
    { src: '~~/node_modules/vue-rellax/lib/nuxt-plugin', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/prismic',
    '@nuxtjs/color-mode'

  ],
  prismic: {
    endpoint: 'https://benjampo-portfolio.prismic.io/api/v2',
    modern: true
    /* see configuration for more */
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
