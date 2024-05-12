import { backtotop } from '@vuepress/back-to-top'
import { qrcode } from 'qrcode'
import { defineUserConfig } from 'vuepress'
import { socialSharePlugin } from 'vuepress-plugin-social-share'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from '@vuepress/plugin-copy-code'

export default defineUserConfig({
  plugins: [socialSharePlugin(networks: ['qq', 'wechat', 'email', 'weibo', 'qrcode'],)],
}),

export default {
  plugins: [
    backtotop(),
    qrcode({
        // "/" and "/zh/" correspond to the path set by locales
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
    catalogPlugin({
      // 配置项
    }),
    mdEnhancePlugin({
      // 开启标记
      mark: true,
    }),
    copyCodePlugin({
      // 配置项
    }),
  ],
}
