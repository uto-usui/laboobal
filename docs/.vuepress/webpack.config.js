const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    // for WebStorm
    alias: {
      '@': path.resolve(__dirname),
      '@assets': path.resolve(__dirname, 'assets'),
    },
  },
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin(),
  ],
}
