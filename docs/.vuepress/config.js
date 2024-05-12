module.exports = {
  base: '/./', //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  //theme: '@vuepress-theme-reco',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'DIAM生存服文档',
      description: 'DIAM生存服，这是一段介绍',
      head: [
        ['link', { rel: 'icon', href: 'https://www.diams.icu/static/picture/icon.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
      ],
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress Template',
      description: 'VuePress template, theme, and plugin Demo. The purpose is that users can directly clone this repository as a startup project for initializing a VuePress website, and then add custom configurations and functions based on this project.'
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    ['qrcode',{
      // "/" and "/zh/" correspond to the path set by locales
        labelText: {
          "/": "页面二维码", 
          "/en/": "QRcode",
        },
        size:'small',
        channel:true
    }]
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
	  { text: 'QQ群', link: 'https://www.diams.icu/' }
        ],
        sidebar: {
          '/guide/': [
            '',
            'theme',
            'plugin'
          ],
          '/resource/': [],
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Guide', link: '/guide/', ariaLabel: 'Guide' },
          { text: 'Study', link: 'https://lwebapp.com', ariaLabel: 'Study' },
					{ text: 'Github', link: 'https://github.com/openHacking/vuepress-template' }
        ],
        sidebar: {
          '/guide/': [
            '',
            'theme',
            'plugin'
          ],
          '/resource/': [],
        }
      }
    }
  },
  
}
