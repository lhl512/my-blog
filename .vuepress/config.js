const nav = require("./nav.js")
const plugins = require("./plugins.js")
const friendLink = require("./friendLink.js")
const sidebar = require("./sidebar")
module.exports = {
  "title": "爱敲代码のfox",
  "description": "星光不问赶路人,时光不负有心人",
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
    "nav": nav,
    // 侧边栏
    "sidebar": sidebar,

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
    "friendLink": friendLink,
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
  "plugins": plugins
}