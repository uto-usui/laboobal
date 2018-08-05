
// https://vuepress.vuejs.org/config/

module.exports = {
  base: '/', // base URL
  title: 'laboobal',
  description: 'uto-usui laboratory.',
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
        text: 'info',
        link: '/info/',
      },
    ],
  },
  markdown: {
    // markdown の行番号
    lineNumbers: true
  },
  // override webpack config
  configureWebpack: {
    resolve: {
      alias: {
//        '@': 'docs/.vuepress/public/'
      }
    }
  }
};
