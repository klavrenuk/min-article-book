const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      title: 'Mini Article Book',
      entry: 'src/main.js'
    }
  }
})
