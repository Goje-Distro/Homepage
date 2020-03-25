export default {
  mode: 'universal',
  /*
   ** Headers of the page
  process.env.npm_package_name
   */
  head: {
    title: 'Sell Your Music Online - Digital Music Distribution | Goje Distro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Distributing African music on Spotify, iTunes, Deezer & More. Free Sign Up.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FFA96B', height: '5px' },
  /*
   ** Global CSS
   */
  css: ['@/sass/app.scss', 'swiper/css/swiper.css', 'hooper/dist/hooper.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '@/plugins/nuxt-swiper.plugin.js', ssr: false },
    // { src: '@/plugins/flickity.js', ssr: false },
    { src: '@/plugins/iconify.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  // Using custom Bootstrap SCSS
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'ImagePlugin',
      'NavbarPlugin',
      'ButtonPlugin',
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'FormGroupPlugin',
      'LinkPlugin'
    ],
    directivePlugins: [
      'VBPopoverPlugin',
      'VBTooltipPlugin',
      'VBScrollspyPlugin'
    ],
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [/vue-awesome/]
    // extend(config, ctx) {}
  },
  server: {
    port: 3000 // default: 3000
    // host: '0.0.0.0' // default: localhost
  }
}
