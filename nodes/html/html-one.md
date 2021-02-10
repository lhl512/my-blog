---
title:  HTML第二天
date: 2021-01-10
 
sidebar: auto  

tags:
 - html
categories:
 -  html
---


## 表格
### 表格的主要作用
    1.表格主要用于显示、展示数据，因为它可以让数据显示的非常的规整，可读性非常好。特别是后台展示数据的时候，能够熟练运用表格就显得很重要。一个清爽简约的表格能够把繁杂的数据表现得很有条理

    2.表格不是用来布局页面的,而是用来展示数据的。

​    ![](images/表格1.png)
​    3.表格的具体用法：
​         <table>
​            <tr>
​                <td>单元格内的文字</td>
​                ...
​            </tr>
​            ...
​        </table>
​        1.<table> </table> 是用于定义表格的标签。
​        2.<tr> </tr> 标签用于定义表格中的行，必须嵌套在 <table> </table>标签中。
​        3.<td> </td> 用于定义表格中的单元格，必须嵌套在<tr></tr>标签中。
​        4.字母 td 指表格数据（table data），即数据单元格的内容。
### 表头单元格标签：
​        表头标签的具体实现：
​         <table>
​            <tr>
​                <th>姓名</th>
​                ...
​            </tr>
​            ...
​        </table>
​        1.一般表头单元格位于表格的第一行或第一列，表头单元格里面的文本内容加粗居中显示.
​            <th> 标签表示 HTML 表格的表头部分(table head 的缩写)
​        2.一般表头单元格位于表格的第一行或第一列，表头单元格里面的文本内容加粗居中显示.
​            <th> 标签表示 HTML 表格的表头部分(table head 的缩写)
​    5.表头单元格也是单元格，常用于表格第一行突出重要性，表头单元格里面的文字会加粗居中
### 表格属性：
​    1.表格标签这部分属性我们实际开发我们不常用，后面通过 CSS 来设置.
​        ![](images/表格属性.png)
​    完成下面综合案例：

​    ![](images/表格综合案例.png)

​    **思路：**

**先制作表格的结构.**  

1.第一行里面是 th 表头单元格

2.第二行开始里面是 td 普通单元格单元格里面可以放任何元素

3.文字链接图片等都可以

**后书写表格属性**

1.用到宽度高度边框cellpadding 和 cellspacing

2.表格浏览器中对齐 align   
### 表格结构标签：
    使用场景:
        因为表格可能很长,为了更好的表示表格的语义，可以将表格分割成 表格头部和表格主体两大部分.
    在表格标签中，分别用：<thead>标签 表格的头部区域、<tbody>标签 表格的主体区域. 这样可以更好的分清表格结构。

![](images/表格结构标签.png)

**总结:**
    1. <thead></thead>：用于定义表格的头部。<thead> 内部必须拥有 <tr> 标签。 一般是位于第一行。
    2. <tbody></tbody>：用于定义表格的主体，主要用于放数据本体 。
    3.  以上标签都是放在 <table></table> 标签中。
### 合并单元格：
    特殊情况下,可以把多个单元格合并为一个单元格,  这里同学们会最简单的合并单元格即可.
    1.合并单元格方式
    2.目标单元格
    3.合并单元格的步骤
    如下图：

![](images/合并单元格.png)

**合并单元格方式：**

**跨行合并**：rowspan="合并单元格的个数"     

​	最上侧单元格为目标单元格, 写合并代码

 **跨列合并**：colspan="合并单元格的个数"

​	最左侧单元格为目标单元格, 写合并代码

**合并单元格三步曲：**

先确定是跨行还是跨列合并。

找到目标单元格. 写上合并方式 = 合并的单元格数量。

比如：<td colspan=“2”></td>。删除多余的单元格。

**表格总结**

​	表格学习整体可以分为三大部分:
