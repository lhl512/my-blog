(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{563:function(s,a,e){"use strict";e.r(a);var t=e(3),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"隐藏盒子的几种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隐藏盒子的几种方式"}},[s._v("#")]),s._v(" 隐藏盒子的几种方式")]),s._v(" "),e("p",[s._v("隐藏盒子，有以下几种方式：")]),s._v(" "),e("p",[s._v("（1）方式一：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("overflow：hidden;   //隐藏盒子超出的部分\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（2）"),e("strong",[s._v("方式二")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("display: none;\t  隐藏盒子，而且不占位置(用的最多)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("比如，点击"),e("code",[s._v("X")]),s._v("，关闭京东首页上方的广告栏。")]),s._v(" "),e("p",[s._v("（3）方式三：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("visibility: hidden;   //隐藏盒子，占位置。\nvisibility: visible;   //让盒子重新显示\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("（4）方式四：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("opacity: 0;       //设置盒子的透明度（不建议，因为内容也会半透明），占位置\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（4）方式五：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Position/top/left/...-999px   //把盒子移得远远的，占位置。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("（5）方式六：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("margin-left: 1000px;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"设置盒子的半透明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置盒子的半透明"}},[s._v("#")]),s._v(" 设置盒子的半透明")]),s._v(" "),e("p",[s._v("方式一："),e("code",[s._v("opacity: 0.4")]),s._v("。优点是方便。缺点是：里面的内容也会半透明。")]),s._v(" "),e("p",[s._v("方式二：css3的技术来解决半透明。如下：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("background: rgba(0,0,0,0.3);")])]),s._v(" "),e("li",[e("p",[s._v("background: rgba(0,0,0,.3);")])])]),s._v(" "),e("p",[s._v("备注："),e("code",[s._v("a")]),s._v("指的是alpha透明度。")]),s._v(" "),e("h3",{attrs:{id:"给标签的形状设置为圆角矩形"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给标签的形状设置为圆角矩形"}},[s._v("#")]),s._v(" 给标签的形状设置为圆角矩形")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("border-radius: 50%;\nborder-radius: 10px 0 0 10px;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"行高的问题-儿子把父亲撑开"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#行高的问题-儿子把父亲撑开"}},[s._v("#")]),s._v(" 行高的问题：儿子把父亲撑开")]),s._v(" "),e("p",[s._v("比如对于下面这样的标签：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\t<div>\n\t\t<a href=""></a>\n\t</div>\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("前置条件：如果我们给父亲div的行高设为31px，然后给儿子a的行高也设置为31")]),s._v(" "),e("p",[s._v("结果：当我们给儿子a设置了字体属性之后，会发现，父亲被撑高为32px了。因为font字体自身会比较大，多撑出了一个像素。")]),s._v(" "),e("p",[s._v("解决办法："),e("strong",[s._v("行内元素尽量不要设置font属性")]),s._v("。对于行内元素而言，如果它和父亲都设置了行高，就不要去给自己设置font属性了。要么就，不要同时设置行高。")]),s._v(" "),e("h3",{attrs:{id:"背景图不能撑开盒子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景图不能撑开盒子"}},[s._v("#")]),s._v(" 背景图不能撑开盒子")]),s._v(" "),e("p",[s._v("高和行高都可以城开盒子，但背景图不能撑开盒子。")]),s._v(" "),e("h2",{attrs:{id:"js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[s._v("#")]),s._v(" JS")]),s._v(" "),e("h3",{attrs:{id:"超链接-a-的href跳转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#超链接-a-的href跳转"}},[s._v("#")]),s._v(" 超链接"),e("code",[s._v("<a>")]),s._v("的href跳转")]),s._v(" "),e("p",[s._v("一个空白的超链接如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<a href=""></a>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("当点击超链接时，由于 href 的属性值的不同，可以产生很多种情况：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("\t"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("                    //刷新页面\n\n\t"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v("                   //跳转到当前页面的顶部（不会刷新）\n\n\t"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"javascript:void(0)"')]),s._v("  // 什么都不做\n\n\t"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"javascript:;"')]),s._v("        // 什么都不做\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);