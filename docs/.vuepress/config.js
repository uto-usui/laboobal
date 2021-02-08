const path = require('path')

module.exports = {
  base: process.env.VUEPRESS_BASE || '/',

  title: 'laboobal',
  description:
    'This is a laboratory, managed by uto-usui. A warehouse of interaction skills.',

  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#FF6473' }],
  ],

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-132902237-1',
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: 'New content is available.',
          buttonText: 'Refresh',
        },
      },
    ],
    '@vuepress/back-to-top',
    'vuepress-plugin-smooth-scroll',
    '@vuepress/last-updated',
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // Vuepress compilation is ridiculously slow without this, type checking belongs in development not documentation anyway
          transpileOnly: true,
          compilerOptions: {
            target: 'ES2019',
          },
        },
      },
    ],
  ],

  themeConfig: {
    // repo: '',
    docsDir: 'docs',
    nav: [
      {
        text: 'home',
        link: '/',
      },
      {
        text: 'basic',
        link: '/basic/',
      },
      {
        text: 'effects',
        link: '/effects/',
      },
      {
        text: 'canvas',
        link: '/canvas/',
      },
      {
        text: 'UI',
        link: '/UI/',
      },
    ],
    sidebar: [
      '/',
      {
        title: 'basic',
        children: [
          //          '/basic/',
          '/basic/easing',
          '/basic/follow',
          '/basic/trigonometry',
          '/basic/rotate3d',
          '/basic/scroll',
          '/basic/hover',
          '/basic/drag',
          '/basic/random',
          '/basic/gsap',
        ],
      },
      {
        title: 'effects',
        children: [
          //          '/effects/',
          '/effects/mouse',
          '/effects/reveal',
        ],
      },
      {
        title: 'canvas',
        children: [
          '/canvas/',
          '/canvas/fillText',
          '/canvas/distortion',
          '/canvas/distortion2',
          '/canvas/fake3d',
          '/canvas/drawImage',
          '/canvas/shiftImage',
          '/canvas/glitchImage',
          '/canvas/P5/',
          {
            title: 'Three',
            path: '/canvas/three/',
            collapsable: false,
            children: [
              '/canvas/three/video',
              '/canvas/three/typo',
              '/canvas/three/scale',
            ],
          },
        ],
      },
      {
        title: 'UI',
        children: ['/UI/', '/UI/virtualScroll'],
      },
    ],
    sidebarDepth: 3,
    repo: 'uto-usui/laboobal',
    docsRepo: 'uto-usui/laboobal',
    editLinks: true,
    editLinkText: '✍🏻 edit?',
    lastUpdated: 'Last Updated',
  },

  markdown: {
    lineNumbers: true,
    extendMarkdown(md) {
      md.options.linkify = true
    },
    toc: {
      containerHeaderHtml: '<strong>Table of Contents</strong>',
    },
  },

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
      })
    }
    // glsl
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      use: ['raw-loader', 'glslify-loader'],
      exclude: /(node_modules)/,
    })

    // Solely to speed up Vuepress, if you need to debug your setup
    config.devtool = false

    // from .vuepress/config.js
    config.resolve.alias['@'] = path.join(__dirname)
    config.resolve.alias['@assets'] = path.join(__dirname, 'assets')
  },
}
