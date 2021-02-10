(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{545:function(t,a,v){"use strict";v.r(a);var _=v(3),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"表格"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表格"}},[t._v("#")]),t._v(" 表格")]),t._v(" "),v("h3",{attrs:{id:"表格的主要作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表格的主要作用"}},[t._v("#")]),t._v(" 表格的主要作用")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("1.表格主要用于显示、展示数据，因为它可以让数据显示的非常的规整，可读性非常好。特别是后台展示数据的时候，能够熟练运用表格就显得很重要。一个清爽简约的表格能够把繁杂的数据表现得很有条理\n\n2.表格不是用来布局页面的,而是用来展示数据的。\n")])])]),v("p",[t._v("​    "),v("img",{attrs:{src:"images/%E8%A1%A8%E6%A0%BC1.png",alt:""}}),t._v("\n​    3.表格的具体用法：\n​         "),v("table",[t._v("\n​            "),v("tr",[t._v("\n​                "),v("td",[t._v("单元格内的文字")]),t._v("\n​                ...\n​            ")]),t._v("\n​            ...\n​        ")]),t._v("\n​        1."),v("table"),t._v(" 是用于定义表格的标签。\n​        2.")]),v("tr"),t._v(" 标签用于定义表格中的行，必须嵌套在 "),v("table"),t._v("标签中。\n​        3."),v("td"),t._v(" 用于定义表格中的单元格，必须嵌套在"),v("tr"),t._v("标签中。\n​        4.字母 td 指表格数据（table data），即数据单元格的内容。"),v("p"),t._v(" "),v("h3",{attrs:{id:"表头单元格标签"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表头单元格标签"}},[t._v("#")]),t._v(" 表头单元格标签：")]),t._v(" "),v("p",[t._v("​        表头标签的具体实现：\n​         "),v("table",[t._v("\n​            "),v("tr",[t._v("\n​                "),v("th",[t._v("姓名")]),t._v("\n​                ...\n​            ")]),t._v("\n​            ...\n​        ")]),t._v("\n​        1.一般表头单元格位于表格的第一行或第一列，表头单元格里面的文本内容加粗居中显示.\n​            ")]),v("th",[t._v(" 标签表示 HTML 表格的表头部分(table head 的缩写)\n​        2.一般表头单元格位于表格的第一行或第一列，表头单元格里面的文本内容加粗居中显示.\n​            ")]),v("th",[t._v(" 标签表示 HTML 表格的表头部分(table head 的缩写)\n​    5.表头单元格也是单元格，常用于表格第一行突出重要性，表头单元格里面的文字会加粗居中"),v("p"),t._v(" "),v("h3",{attrs:{id:"表格属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表格属性"}},[t._v("#")]),t._v(" 表格属性：")]),t._v(" "),v("p",[t._v("​    1.表格标签这部分属性我们实际开发我们不常用，后面通过 CSS 来设置.\n​        "),v("img",{attrs:{src:"images/%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7.png",alt:""}}),t._v("\n​    完成下面综合案例：")]),t._v(" "),v("p",[t._v("​    "),v("img",{attrs:{src:"images/%E8%A1%A8%E6%A0%BC%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B.png",alt:""}})]),t._v(" "),v("p",[t._v("​    "),v("strong",[t._v("思路：")])]),t._v(" "),v("p",[v("strong",[t._v("先制作表格的结构.")])]),t._v(" "),v("p",[t._v("1.第一行里面是 th 表头单元格")]),t._v(" "),v("p",[t._v("2.第二行开始里面是 td 普通单元格单元格里面可以放任何元素")]),t._v(" "),v("p",[t._v("3.文字链接图片等都可以")]),t._v(" "),v("p",[v("strong",[t._v("后书写表格属性")])]),t._v(" "),v("p",[t._v("1.用到宽度高度边框cellpadding 和 cellspacing")]),t._v(" "),v("p",[t._v("2.表格浏览器中对齐 align")]),t._v(" "),v("h3",{attrs:{id:"表格结构标签"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表格结构标签"}},[t._v("#")]),t._v(" 表格结构标签：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("使用场景:\n    因为表格可能很长,为了更好的表示表格的语义，可以将表格分割成 表格头部和表格主体两大部分.\n在表格标签中，分别用：<thead>标签 表格的头部区域、<tbody>标签 表格的主体区域. 这样可以更好的分清表格结构。\n")])])]),v("p",[v("img",{attrs:{src:"images/%E8%A1%A8%E6%A0%BC%E7%BB%93%E6%9E%84%E6%A0%87%E7%AD%BE.png",alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("总结:")]),t._v("\n1. ")]),v("thead"),t._v("：用于定义表格的头部。"),v("thead",[t._v(" 内部必须拥有 "),v("tr",[t._v(" 标签。 一般是位于第一行。\n2. "),v("tbody"),t._v("：用于定义表格的主体，主要用于放数据本体 。\n3.  以上标签都是放在 "),v("table"),t._v(" 标签中。"),v("p"),t._v(" "),v("h3",{attrs:{id:"合并单元格"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#合并单元格"}},[t._v("#")]),t._v(" 合并单元格：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("特殊情况下,可以把多个单元格合并为一个单元格,  这里同学们会最简单的合并单元格即可.\n1.合并单元格方式\n2.目标单元格\n3.合并单元格的步骤\n如下图：\n")])])]),v("p",[v("img",{attrs:{src:"images/%E5%90%88%E5%B9%B6%E5%8D%95%E5%85%83%E6%A0%BC.png",alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("合并单元格方式：")])]),t._v(" "),v("p",[v("strong",[t._v("跨行合并")]),t._v('：rowspan="合并单元格的个数"')]),t._v(" "),v("p",[t._v("​\t最上侧单元格为目标单元格, 写合并代码")]),t._v(" "),v("p",[v("strong",[t._v("跨列合并")]),t._v('：colspan="合并单元格的个数"')]),t._v(" "),v("p",[t._v("​\t最左侧单元格为目标单元格, 写合并代码")]),t._v(" "),v("p",[v("strong",[t._v("合并单元格三步曲：")])]),t._v(" "),v("p",[t._v("先确定是跨行还是跨列合并。")]),t._v(" "),v("p",[t._v("找到目标单元格. 写上合并方式 = 合并的单元格数量。")]),t._v(" "),v("p",[t._v("比如：")]),v("td",{attrs:{colspan:"“2”"}}),t._v("。删除多余的单元格。"),v("p"),t._v(" "),v("p",[v("strong",[t._v("表格总结")])]),t._v(" "),v("p",[t._v("​\t表格学习整体可以分为三大部分:")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);