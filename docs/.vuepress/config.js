module.exports = {
  base: '/./', //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  //theme: '',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'DIAM生存服文档',
      description: 'DIAM生存服，这是一段介绍',
      head: [
        ['link', { rel: 'icon', href: 'https://www.diams.icu/static/picture/icon.png' }],// 需要被注入到当前页面的 HTML <head> 中的标签
	['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
      ],
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    ['qrcode',{labelText: {"/": "页面二维码", "/en/": "QRcode",},size:'small',channel:true}],
    '@vuepress/last-updated',
    '@vuepress/active-header-links',
    '@vuepress/nprogress',
    'vuepress-plugin-reading-time',
    ['vuepress-plugin-code-copy', true],
    'reading-progress',
    //'social-share',
    ['@ikangxu/vuepress-plugin-share', {supports: ['qq-qzone', 'renren', 'douban', 'sina-weibo', 'wechat', 'tieba-baidu', 'qq']}]
  ],
  themeConfig: {
    subSidebar: 'auto',
    logo: 'https://www.diams.icu/static/picture/icon.png',
    lastUpdated: '上次更新',
    repo: 'zip8919/docs', // 你的 GitHub 仓库地址
    docsRepo: 'zip8919/docs', // 文档所在的仓库地址
    docsDir: 'docs', // 文档目录
    docsBranch: 'main', // 文档所在的 Git 分支
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '指南', link: '/guide/', ariaLabel: '指南' },
          { text: '官网', link: 'https://www.diams.icu', ariaLabel: '官网' },
	        { text: 'QQ群', link: 'https://qm.qq.com/q/xgTfPgytGg' }
        ],
        sidebar: {
          '/guide/': [
            '',
            'theme',
            'Slimefun',
            'about' 
          ],
          '/resource/': [],
        }
      },
    }
  },
}
