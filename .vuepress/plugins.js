module.exports = [
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
    // ['@vuepress/last-updated', {

    //     dateOptions: {
    //         hour12: true

    //     }
    // }]
]