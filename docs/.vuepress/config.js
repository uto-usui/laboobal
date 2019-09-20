module.exports = {
  base: '/', // base URL
  title: 'laboobal',
  description: 'This is a laboratory, managed by uto-usui. A warehouse of interaction skills.',
  head: [
    ['link',
      {rel: 'manifest', href: '/manifest.json'},
    ],
    ['meta',
      {name: 'theme-color', content: '#FF6473'},
    ],
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
          '/canvas/shiftImage',
          '/canvas/P5/',
          {
            title: 'Three',
            path: '/canvas/three/',
            collapsable: false,
            children: [
              '/canvas/three/video',
              '/canvas/three/typo',
            ]
          },
        ],
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
//  chainWebpack: config => {
//    config.module
//      .rule('glsl')
//      .test(/\.(glsl|vs|fs|vert|frag)$/)
//      .use(['raw-loader', 'glslify-loader'])
//      .end()
//  },
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
  }
}
