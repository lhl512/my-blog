const tools = require("./tools")
const Contact = require("./Contact")
module.exports = [{
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
        "items": tools
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
        "items": Contact
    }
]