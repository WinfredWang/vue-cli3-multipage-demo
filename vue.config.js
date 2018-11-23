// vue.config.js
module.exports = {
  baseUrl: "./",
  pages: {
    p1: {
      entry: 'src/p1/main.js',
      template: 'public/index.html',
      filename: 'p1.html',
    },
    p2: {
      entry: 'src/p2/main.js',
      template: 'public/index.html',
      filename: 'p2.html',
    }
  },

  chainWebpack: config => {
    config.plugins.delete('preload-p1')
    config.plugins.delete('preload-p2')
    config.plugins.delete('prefetch-p1')
    config.plugins.delete('prefetch-p2')
  }
}