// https://vuepress.vuejs.org/config/

module.exports = {
  base: '/', // base URL
  title: 'laboobal',
  description: 'This is a laboratory, managed by uto-usui. A warehouse of interaction skills.',
  //  head: [
  //    ['link', { rel: 'icon', href: `/logo.png` }]
  //  ],
  // ga: 'xxxx',
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
//      {
//        text: 'Guide',
//        items: [
//          { text: 'toc', link: '/guide/toc' },
//          { text: 'emoji', link: '/guide/emoji' },
//          { text: 'component', link: '/guide/component' },
//          { text: 'customblock', link: '/guide/customblock' },
//          { text: 'linehighlight', link: '/guide/linehighlight' },
//        ]
//      }
    ],
    sidebar: [
      '/',
      {
        title: 'basic',
        children: [
          '/basic/',
          '/basic/easing',
          '/basic/follow',
        ],
      },
      {
        title: 'effects',
        children: [
          '/effects/',
          '/effects/mouse',
          '/effects/reveal',
        ],
      }
    ],
    // 子ページの見出しはデフォルトでは見出しレベルが2 までがぶら下がって表示される
    // 見出しレベルが3の見出しをサイドバーに表示したいとき、sidebarDepthを設定する
    // page ごとに上書きできる
//    sidebarDepth: 3,
    repo: 'uto-usui/laboobal',
    docsRepo: 'uto-usui/laboobal',
    editLinks: true,
    editLinkText: 'edit?',
  },
  markdown: {
    // markdown の行番号
    lineNumbers: true,
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
