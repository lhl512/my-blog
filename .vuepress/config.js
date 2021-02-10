module.exports = {
  "title": "爱敲代码のfox",
  "description": "乾坤未定,你我皆黑马",
  "dest": "public",
  "base": "/my-blog/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    // 导航栏
    "nav": [{
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "nodes",
        "icon": "reco-document",
        "link": "/nodes/"
      },
      {
        "text": "tools",
        "icon": "reco-other",
        "items": [{
          "text": "MDN Wed 文档",
          "link": "https://developer.mozilla.org/zh-CN",
        }]
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [{
      //     "text": "vuepress-reco",
      //     "link": "/docs/theme-reco/"
      //   }]
      // },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [{
          "text": "GitHub",
          "link": "https://github.com/recoluan",
          "icon": "reco-github"
        }]
      }
    ],
    // 侧边栏
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      "/nodes/": [{
          "title": "html",
          "collapsable": true,
          "children": [
            '/nodes/html/html',
            '/nodes/html/html-one',
            "/nodes/html/html5"
          ]
        },
        {
          "title": "css",
          "collapsable": true,
          "children": [
            "/nodes/css/css",
            "/nodes/css/css2",
            "/nodes/css/css3"

          ]
        },
      ]
    },

    "type": "blog",
    "blogConfig": {
      // 分类
      "category": {
        "location": 2,
        "text": "Category"
      },
      // 标签
      "tag": {
        "location": 3,
        "text": "Tag"
      },
    },
    // 友情链接
    "friendLink": [{
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    //评论
    "valineConfig": {
      appId: 'N96ioqici4j8xSul4hpA9T3j-gzGzoHsz', // your appId
      appKey: 'bUT57OyzHm2fpbP6xPt8oyzg', // your appKey
      // recordIP:true;
      // placechoder:'来都来了，冒个泡再走呗...',
      // vsiitor:true,
    },
    // logo
    "logo": "/fox.jpg",
    // 搜索设置
    "search": true,
    "searchMaxSuggestions": 10,
    // 最后更新时间
    "lastUpdated": "Last Updated",
    // 作者
    "author": "爱敲代码のfox",
    // 右侧头像
    "authorAvatar": "/avatar.jpg",
    // 备案号
    "record": "爱敲代码のfox",
    // 项目开始时间
    "startYear": "2021"
  },
  // 代码显示行数
  "markdown": {
    "lineNumbers": true
  },
  // 插件
  "plugins": [
    // 看板娘
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["blackCat"],
        clean: false,
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        }
      }
    ],
    [
      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码", //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!"
      }
    }],
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 3, // size of the particle, default: 2
        shape: ['circle'], // shape of the particle, default: 'star'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ],
    ["vuepress-reco/vuepress-plugin-loading-page"],
  ]
}