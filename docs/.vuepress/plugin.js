import { back_to_top } from '@vuepress/back-to-top'
import { qrcode } from 'qrcode'
import { defineUserConfig } from 'vuepress'
import { socialSharePlugin } from 'vuepress-plugin-social-share'

export default defineUserConfig({
  plugins: [socialSharePlugin(networks: ['qq', 'wechat', 'email', 'weibo', 'qrcode'],)],
}),

export default {
  plugins: [
    back_to_top(),
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
  ],
}
