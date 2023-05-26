const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? ''
      : '/',
  pages: {
    index: {
      title: 'Mini Article Book',
      entry: 'src/main.js'
    }
  }
})
