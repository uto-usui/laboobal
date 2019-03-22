const path = require('path')

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
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
    },
    '@vuepress/google-analytics': {
      ga: 'UA-132902237-1',
    },
  },
  // serviceWorker: true,
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
        collapsable: false,
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
          '/canvas/distortion',
          '/canvas/distortion2',
          '/canvas/glitchImage',
          '/canvas/P5/',
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
      md.options.linkify = true;
    },
    toc: {
        listType: ['ol', 'ul'],
        containerHeaderHtml: '<strong>Table of Contents</strong>',
      }
  },
  chainWebpack: config => {

    config.module
      .rule('glsl')
        .test(/\.(glsl|vs|fs|vert|frag)$/)
        .use(['raw-loader', 'glslify-loader'])
          .loader('glslify-loader').end()

  },
};
