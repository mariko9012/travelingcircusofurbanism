const fs = require('fs')

const cities = fs.readdirSync('./static/posts')
  .filter(c => c.indexOf('.') !== 0)
const posts = require('./static/generated/posts.json')
let locations = posts.map(p => {
    if (Array.isArray(p.mapPosition))
      return p.mapPosition.map(pos => pos.location)
        .filter(l => l)
    if (p.mapPosition && p.mapPosition.location)
      return [p.mapPosition.location]
  })
  .filter(p => p)
locations = Array.from(new Set([].concat.apply([], locations)))

module.exports = {
  head: {
    titleTemplate: '%s | Traveling Circus of Urbanism',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A platform for urban narratives that are collected from the world through traveling' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css' }
    ],
    script: [
      { src: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js' },
    ]
  },
  css: [ './assets/main.scss' ],
  loading: false,
  // markdown module & settings
  modules: [
    '@nuxtjs/markdownit',
    ['@nuxtjs/google-analytics', {
      id: 'UA-120224641-1'
    }]
  ],
  markdownit: {
    html: true,
    linkify: true,
    breaks: true,
    typographer: true
  },
  build: {
    styleResources: {
      scss: './assets/variables.scss',
    },
  },
  generate: {
    dir: 'docs',
    routes: () => [
      ...cities.map(c => `/${c}`),
      ...posts.map(p => `/${p.city}/${p.slug}`),
      ...locations.map(l => `/at/${l}`),
    ]
  }
}
