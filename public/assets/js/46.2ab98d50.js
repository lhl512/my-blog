(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{557:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("h3",{attrs:{id:"常见的布局属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的布局属性"}},[t._v("#")]),t._v(" 常见的布局属性")]),t._v(" "),a("p",[t._v("（1）"),a("code",[t._v("display")]),t._v(" 确定元素的显示类型：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("block：块级元素。")])]),t._v(" "),a("li",[a("p",[t._v("inline：行内元素。")])]),t._v(" "),a("li",[a("p",[t._v("inline-block：对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。")])])]),t._v(" "),a("p",[t._v("（2）"),a("code",[t._v("positon")]),t._v(" 确定元素的位置：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("static：默认属性值。")])]),t._v(" "),a("li",[a("p",[t._v("relative：相对定位。相对于元素本身进行偏移，"),a("strong",[t._v("不会改变它所占据的空间")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("absolute：绝对定位。相对于父元素中最近的 relative/absolute 进行偏移，会脱离文档流。音标：[ˈæbsəluːt]。")])]),t._v(" "),a("li",[a("p",[t._v("fixed：固定定位。相对于可视区域固定，会脱离文档流。")])])]),t._v(" "),a("p",[a("code",[t._v("relative")]),t._v("、"),a("code",[t._v("absolute")]),t._v("、"),a("code",[t._v("fixed")]),t._v("这三个属性，可以结合 z-index 来设置层级。")]),t._v(" "),a("h3",{attrs:{id:"常见的布局方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的布局方法"}},[t._v("#")]),t._v(" 常见的布局方法")]),t._v(" "),a("p",[t._v("1、"),a("strong",[t._v("table 表格布局")]),t._v("：早期使用的布局，如今用得很少。")]),t._v(" "),a("p",[t._v("2、"),a("strong",[t._v("float 浮动 + margin")]),t._v("：为了兼容低版本的IE浏览器，很多网站（比如腾讯新闻、网易新闻、淘宝等）都会采用 float 布局。")]),t._v(" "),a("p",[t._v("3、"),a("strong",[t._v("inline-block 布局")]),t._v("：对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。")]),t._v(" "),a("p",[t._v("4、"),a("strong",[t._v("flex 布局")]),t._v("：为布局而生，非常灵活，是最为推荐的布局写法。")]),t._v(" "),a("p",[t._v("唯一的缺点是兼容性问题：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20191005_1200.png",alt:""}})]),t._v(" "),a("p",[t._v("上图中可以看到， flex 布局不支持 IE9 及以下的版本。如果你的页面不需要处理 IE浏览器的兼容性问题，则可以放心大胆地使用 flex 布局。")]),t._v(" "),a("p",[t._v("flex 是一种现代的布局方式，是 W3C 第一次提供真正用于布局的 CSS 规范。")]),t._v(" "),a("p",[t._v("5、响应式布局。")]),t._v(" "),a("h2",{attrs:{id:"float-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#float-布局"}},[t._v("#")]),t._v(" float 布局")]),t._v(" "),a("p",[t._v("是 CSS 中一种比较麻烦的属性，涉及到 BFC 和清除浮动（面试的重点）。")]),t._v(" "),a("h3",{attrs:{id:"float-属性的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#float-属性的特点"}},[t._v("#")]),t._v(" float 属性的特点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("元素浮动")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("脱离文档流，但不脱离文本流")])])])]),t._v(" "),a("p",[t._v("代码举例：")]),t._v(" "),a("p",[t._v("下面这两个并列的"),a("code",[t._v("div1")]),t._v("和"),a("code",[t._v("div2")]),t._v("，默认是在标准流中的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20191005_2029.png",alt:""}})]),t._v(" "),a("p",[t._v("在此基础之上，如果给"),a("code",[t._v("div1")]),t._v("增加"),a("code",[t._v("float: left")]),t._v("属性后，效果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20191005_2037.png",alt:""}})]),t._v(" "),a("p",[t._v("上图中，可以看到，"),a("code",[t._v("div1")]),t._v("设置为浮动后，会脱离文档流，不会对"),a("code",[t._v("div2")]),t._v("的布局造成影响；但是"),a("code",[t._v("div1")]),t._v("不会脱离文本流，它会影响"),a("code",[t._v("div2")]),t._v("中文字的排列。")]),t._v(" "),a("p",[t._v("其实，这正是 float 属性的作用。float 本身是用来做图文混排、文字环绕的效果。")]),t._v(" "),a("h3",{attrs:{id:"float-所带来的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#float-所带来的影响"}},[t._v("#")]),t._v(" float 所带来的影响")]),t._v(" "),a("p",[a("strong",[t._v("1、对自身的影响")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("形成“块”（BFC）")])]),t._v(" "),a("li",[a("p",[t._v("位置尽量靠上")])]),t._v(" "),a("li",[a("p",[t._v("位置尽量靠左/右")])])]),t._v(" "),a("p",[t._v("下面这两个并列的"),a("code",[t._v("div1")]),t._v("和"),a("code",[t._v("div2")]),t._v("，设置为浮动之后的效果：（都是尽量靠左显示的）")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20191005_2130.png",alt:""}})]),t._v(" "),a("p",[t._v("在上方代码的基础之上，增加 "),a("code",[t._v("div2")]),t._v("的宽度之后，会发现，"),a("code",[t._v("div2")]),t._v("掉下来了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20191005_2135.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("2、对兄弟元素的影响")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("不影响其他块级元素的位置")])]),t._v(" "),a("li",[a("p",[t._v("影响其他块级元素的内部文本")])])]),t._v(" "),a("p",[a("strong",[t._v("3、对父级元素的影响")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("从父级的布局中“消失”")])]),t._v(" "),a("li",[a("p",[t._v("造成父级元素的高度塌陷：父级元素撑开 div1 之后（父级元素里没有其他元素的情况下），如果设置 div1 为 float 之后，，会让父级元素的高度变为0。")])])]),t._v(" "),a("h2",{attrs:{id:"inline-block-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inline-block-布局"}},[t._v("#")]),t._v(" inline-block 布局")]),t._v(" "),a("p",[t._v("对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。")]),t._v(" "),a("p",[a("strong",[t._v("思路")]),t._v("：像文本一样去排列 block 元素，没有清除浮动等问题。")]),t._v(" "),a("p",[a("strong",[t._v("存在的问题")]),t._v("：需要处理间隙。代码举例如下：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Document"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".div1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".div2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellowgreen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".div3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("div1的inline-block 属性"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("div2的inline-block 属性"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t琴棋书画不会，洗衣做饭嫌累。\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20191005_2200.png",alt:""}})]),t._v(" "),a("p",[t._v("上面的代码，存在两个问题。")]),t._v(" "),a("p",[a("strong",[t._v("问题一")]),t._v("：如果设置"),a("code",[t._v("div2")]),t._v("的宽度为 200px 之后，"),a("code",[t._v("div2")]),t._v(" 掉下来。")]),t._v(" "),a("p",[a("strong",[t._v("问题二")]),t._v("："),a("code",[t._v("div1")]),t._v("和"),a("code",[t._v("div2")]),t._v("设置为 inline-block之后，这两个盒子之间存在了间隙。这是因为，此时的 "),a("code",[t._v("div1")]),t._v("和"),a("code",[t._v("div2")]),t._v(" 已经被当成文本了。文本和文本之间，本身就会存在间隙。")]),t._v(" "),a("p",[t._v("为了去掉这个间隙，可以有几种解决办法：")]),t._v(" "),a("p",[t._v("办法1：设置父元素"),a("code",[t._v("container")]),t._v("的字体大小为0，即"),a("code",[t._v("font-size: 0")]),t._v("，然后设置子元素 "),a("code",[t._v("div1")]),t._v("、"),a("code",[t._v("div2")]),t._v("的字体"),a("code",[t._v("font-size: 12px")]),t._v("。")]),t._v(" "),a("p",[t._v("办法2：在写法上，去掉"),a("code",[t._v("div1")]),t._v("和"),a("code",[t._v("div2")]),t._v("之间的换行。改为：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("div1的inline-block 属性"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("div2的inline-block 属性"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"响应式布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式布局"}},[t._v("#")]),t._v(" 响应式布局")]),t._v(" "),a("p",[t._v("移动端用得较多，本文暂时先不讲。")])])}),[],!1,null,null,null);s.default=e.exports}}]);