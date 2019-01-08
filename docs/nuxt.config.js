
module.exports = {
  srcDir: __dirname,

  build: {
    extractCSS: true,
    cssSourceMap: true,
    // postcss: [],
    extend (config) {
      config.devtool = 'source-map'
    }
  },

  loading: {
    color: '#59cc93'
  },

  manifest: {
    name: 'fabric map vue',
    description: 'fabric map with Vue.js',
    theme_color: '#563d7c'
  },

  plugins: [
    { src: '~plugins/fabric-map-vue.js', ssr: false }
  ],

  modules: [
    '@nuxtjs/pwa'
  ],

  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    ],
    script: [
      { src: '/js/fabric.js' },
    ]
  },
  css: [
    '~assets/css/app.scss'
  ]
}