---
title:  css-vertical-align-文字省略号-常见布局技巧-初始化
date: 2021-01-12
sidebar: auto
tags:
 - CSS
categories:
 -  css
---

## 1.vertical-align 属性应用

CSS 的 **vertical-align** 属性使用场景： 经常用于设置图片或者表单(行内块元素）和文字垂直对齐。

官方解释： 用于设置一个元素的**垂直对齐方式**，但是它只针对于行内元素或者行内块元素有效。

语法：

```css
vertical-align : baseline | top | middle | bottom 
```

| 值       | 描述                                   |
| -------- | -------------------------------------- |
| baseline | 默认。元素放置在父元素的基线上         |
| top      | 把元素的顶端与行中最高元素的顶端对齐   |
| middle   | 把元素放置在父元素的中部               |
| bottom   | 把元素的顶端与行中最低的元素的顶端对齐 |

![](/my-blog/images/1571522040645.png)

### 1.1**图片、表单和文字对齐**

图片、表单都属于行内块元素，默认的 vertical-align 是基线对齐。

![](/my-blog/images/1571522093729.png)

此时可以给图片、表单这些行内块元素的 **vertical-align 属性设置为 middle** 就可以让文字和图片垂直居中对齐了。

### 1.2 解决图片底部默认空白缝隙问题

bug：图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。

主要解决方法有两种：

1.**给图片**添加 **vertical-align:middle | top| bottom** 等。 （提倡使用的）

2.把图片转换为块级元素  **display: block**; 

## 2.溢出的文字省略号显示

### 2.1 单行文本溢出显示省略号

单行文本溢出显示省略号--必须满足三个条件：

```css
  /*1. 先强制一行内显示文本*/
   white-space: nowrap;  （ 默认 normal 自动换行）
   
  /*2. 超出的部分隐藏*/
   overflow: hidden;
   
  /*3. 文字用省略号替代超出的部分*/
   text-overflow: ellipsis;
```

### 2.2 多行文本溢出显示省略号（了解）

多行文本溢出显示省略号，**有较大兼容性问题**，适合于webKit浏览器或移动端（移动端大部分是webkit内核）

```css
/*1. 超出的部分隐藏 */
overflow: hidden;

/*2. 文字用省略号替代超出的部分 */
text-overflow: ellipsis;

/* 3. 弹性伸缩盒子模型显示 */
display: -webkit-box;

/* 4. 限制在一个块元素显示的文本的行数 */
-webkit-line-clamp: 2;

/* 5. 设置或检索伸缩盒对象的子元素的排列方式 */
-webkit-box-orient: vertical;
```

**更推荐让后台人员来做这个效果，因为后台人员可以设置显示多少个字，操作更简单。**

## 3.常见布局技巧

1. margin负值的运用
2. 文字围绕浮动元素
3. 行内块的巧妙运用
4. CSS三角强化

### 3.1. margin负值运用

![](/my-blog/images/1571522666082.png)

![](/my-blog/images/1571522683897.png)

1.让每个盒子margin 往左侧移动 -1px 正好压住相邻盒子边框

2.鼠标经过某个盒子的时候，提高当前盒子的层级即可（如果没有有定位，则加相对定位（保留位置），如果有定位，则加z-index）

### 3.2 文字围绕浮动元素

**效果**

![](/my-blog/images/1571522777745.png)

**布局示意图**

![](/my-blog/images/1571522761996.png)

**巧妙运用浮动元素不会压住文字的特性**

### 3.3 行内块巧妙运用

![](/my-blog/images/1571522898744.png)

页码在页面中间显示:

1. 把这些链接盒子转换为行内块， 之后给父级指定  text-align:center;
2. 利用行内块元素中间有缝隙，并且给父级添加 text-align:center; 行内块元素会水平会居中

![](/my-blog/images/1571522910580.png)

### 3.4CSS 三角强化 案例

**3.4.1 原理**

![](/my-blog/images/1571550959181.png)

![](/my-blog/images/1571551000391.png)

![](/my-blog/images/1571548058053.png)

```html
<style>
    .box1 {
        width: 0;
        height: 0;
        
        /* 把上边框宽度调大 */
        /* border-top: 100px solid transparent;
        border-right: 50px solid skyblue; */
        /* 左边和下边的边框宽度设置为0 */
        /* border-bottom: 0 solid blue;
        border-left: 0 solid green; */
        
        /* 1.只保留右边的边框有颜色 */
        border-color: transparent red transparent transparent;
        /* 2. 样式都是solid */
        border-style: solid;
        /* 3. 上边框宽度要大， 右边框 宽度稍小， 其余的边框该为 0 */
        border-width: 100px 50px 0 0 ;
    }

</style>
</head>
<body>
    <div class="box1"></div>
</body>
```

#### 3.4.2 案例效果

![](/my-blog/images/1571551000391.png)

#### **3.4.3 代码参考**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>CSS三角强化的巧妙运用</title>
        <style>
            .price {
                width: 160px;
                height: 24px;
                line-height: 24px;
                border: 1px solid red;
                margin: 0 auto;
            }
            .miaosha {
                position: relative;
                float: left;
                width: 90px;
                height: 100%;
                background-color:red;
                text-align: center;
                color: #fff;
                font-weight: 700;
                margin-right: 8px;

            }
            .miaosha i {
                position: absolute;
                right: 0;
                top: 0;
                width: 0;
                height: 0;
                border-color: transparent #fff transparent transparent;
                border-style: solid;
                border-width: 24px 10px 0 0;
            }
            .origin {
                font-size: 12px;
                color: gray;
                text-decoration: line-through;
            }
        </style>
    </head>
    <body>
        <div class="price">
            <span class="miaosha">
                ¥1650
                <i></i>
            </span>
            <span class="origin">¥5650</span>
        </div>
    </body>
</html>
```

## 4.CSS 初始化

不同浏览器对有些标签的默认值是不同的，为了消除不同浏览器对HTML文本呈现的差异，照顾浏览器的兼容，我们需要对CSS 初始化

简单理解： CSS初始化是指重设浏览器的样式。 (也称为CSS reset）

每个网页都必须首先进行 CSS初始化。

这里我们以 京东CSS初始化代码为例。

**Unicode编码字体：**

把中文字体的名称用相应的Unicode编码来代替，这样就可以有效的避免浏览器解释CSS代码时候出现乱码的问题。

比如：

黑体 \9ED1\4F53
宋体 \5B8B\4F53
微软雅黑 \5FAE\8F6F\96C5\9ED1