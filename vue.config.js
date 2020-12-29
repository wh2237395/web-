module.exports = {
  publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://47.115.85.237:3000/', 
        changeOrigin: true, 
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}