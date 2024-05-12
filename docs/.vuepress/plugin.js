const { backtotop } = require('@vuepress/plugin-back-to-top')
const { qrcode } = require('vuepress-plugin-qrcode')
//const { socialSharePlugin } = require('vuepress-plugin-social-share')
//const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");
//const { copyCodePlugin } = require('@vuepress/plugin-copy-code')
const { readingTimePlugin } require('@vuepress/plugin-reading-time')

module.exports = {
  plugins: [
    backtotop(),
    qrcode({
        labelText: {
          "/": "页面二维码", 
          "/en/": "QRcode",
        },
        size:'small',
        channel:true
    }),
    readingTimePlugin({
      // 配置项
    }),
    //socialSharePlugin({
      //networks: ['qq', 'wechat', 'email', 'weibo', 'qrcode'],
    //}),
    //mdEnhancePlugin({
      // 开启标记
      //mark: true,
    //}),
    //copyCodePlugin({
      // 配置项
    //}),
  ],
}
