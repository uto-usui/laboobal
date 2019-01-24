// https://vuepress.vuejs.org/config/

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
        children: [
//          '/basic/',
          '/basic/easing',
          '/basic/follow',
          '/basic/trigonometry',
          '/basic/rotate3d',
          '/basic/scroll',
          '/basic/hover',
          '/basic/drag',
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
        ],
      },
    ],
    // 子ページの見出しはデフォルトでは見出しレベルが2 までがぶら下がって表示される
    // 見出しレベルが3の見出しをサイドバーに表示したいとき、sidebarDepthを設定する
    // page ごとに上書きできる
//    sidebarDepth: 3,
    repo: 'uto-usui/laboobal',
    docsRepo: 'uto-usui/laboobal',
    editLinks: true,
    editLinkText: '✍🏻 edit?',
  },
  markdown: {
    // markdown の行番号
    lineNumbers: true,
    extendMarkdown(md) {
      md.options.linkify = true;
    }
  },
  // override webpack config
  configureWebpack: {
    resolve: {
      alias: {
//        '@': 'docs/.vuepress/public/'
      },
    },
  },
};
