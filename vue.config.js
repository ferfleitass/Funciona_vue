const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencias : true,
    publicPath: process.env.NODE_ENV === 'production'
     ? '/Funciona-vue/'
     : '/'
})