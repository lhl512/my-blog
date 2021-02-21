const tools = require("./tools")
const Contact = require("./Contact")
module.exports = [{
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
    },
    {
        "text": "学习",
        "icon": "reco-document",
        "link": "/nodes/"
    },
    {
        "text": "工具",
        "icon": "reco-other",
        "items": tools
    },
    {
        "text": "时间轴",
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
        "items": Contact
    }
]