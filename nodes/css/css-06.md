---
title:  css-精灵图-字体图标-css三角-用户界面样式
date: 2021-01-12
sidebar: auto
tags:
 - CSS
categories:
 -  css
---

## 1. 精灵图（重点）

### 1.1 为什么需要精灵图

一个网页中往往会应用很多小的背景图像作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度。

**为什么使用精灵图（目的）：**

​		**为了有效地减少服务器接收和发送请求的次数**，**提高**页面的**加载速度**，出现了 **CSS 精灵技术**（也称 CSS Sprites、CSS 雪碧）。

**核心原理**：

将网页中的一些小背景图像整合到一张大图中 ，这样服务器只需要一次请求就可以了。

### 1.2 精灵图（sprites）的使用

使用精灵图核心：

1. 精灵技术主要针对于背景图片使用。就是把多个小背景图片整合到一张大图片中。
2. 这个大图片也称为 sprites  精灵图  或者 雪碧图
3. 移动背景图片位置， 此时可以使用 background-position 。
4. 移动的距离就是这个目标图片的 x 和 y 坐标。注意网页中的坐标有所不同
5. 因为一般情况下都是往上往左移动，所以数值是负值。
6. 使用精灵图的时候需要精确测量，每个小背景图片的大小和位置。



使用精灵图核心总结：

1. 精灵图主要**针对于小的背景图片**使用。

2. 主要借助于背景位置来实现---**background-position** 。

3. 一般情况下精灵图都是**负值**。（千万注意网页中的坐标： x轴右边走是正值，左边走是负值， y轴同理。）

## 2. 字体图标

### 2.1 字体图标的产生

字体图标使用场景：  主要用于显示网页中通用、常用的一些小图标。

精灵图是有诸多优点的，但是缺点很明显。

1.图片文件还是比较大的。

2.图片本身放大和缩小会失真。

3.一旦图片制作完毕想要更换非常复杂。

此时，有一种技术的出现很好的解决了以上问题，就是**字体图标 iconfont**。

**字体图标**可以为前端工程师提供一种方便高效的图标使用方式，**展示的是图标，本质属于字体**。

### 2.2 字体图标的优点

**轻量级**：一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器请求

- 灵活性：本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果、旋转等
- 兼容性：几乎支持所有的浏览器，请放心使用
- 注意： 字体图标不能替代精灵技术，只是对工作中图标部分技术的提升和优化。

**总结：**

1.如果遇到一些结构和样式比较简单的小图标，就用字体图标。

2.如果遇到一些结构和样式复杂一点的小图片，就用精灵图。

**使用步骤**

字体图标是一些网页常见的小图标，我们直接网上下载即可。 因此使用可以分为：

1.字体图标的下载 

2.字体图标的引入 （引入到我们html页面中）

3.字体图标的追加 （以后添加新的小图标）

### **2.3** **字体图标的下载**

**推荐下载网站：**

- **icomoon** **字库**  http://icomoon.io    推荐指数  **★★★★★**

IcoMoon 成立于 2011 年，推出了第一个自定义图标字体生成器，它允许用户选择所需要的图标，使它们成一字型。该字库内容种类繁多，非常全面，唯一的遗憾是国外服务器，打开网速较慢。

- **阿里** **iconfont** **字库**   http://www.iconfont.cn/   推荐指数   **★★★★★** 

这个是阿里妈妈 M2UX 的一个 iconfont 字体图标字库，包含了淘宝图标库和阿里妈妈图标库。可以使用 AI制作图标上传生成。 重点是，免费！

### **2.4** **字体图标的引入**

**下载完毕之后，注意原先的文件不要删，后面会用**。

1. 把下载包里面的 **fonts** 文件夹放入页面根目录下

* **字体文件格式**

不同浏览器所支持的字体格式是不一样的，字体图标之所以兼容，就是因为包含了主流浏览器支持的字体文件。

1).TureType(  **.ttf**  )格式.ttf字体是Windows和Mac的最常见的字体，支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、iOS Mobile、Safari4.2+；

2).Web Open Font Format( **.woff** )格式woff字体，支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+；

3).Embedded Open Type( **.eot** )格式.eot字体是IE专用字体，支持这种字体的浏览器有IE4+；

4).SVG(  .**svg**  )格式.svg字体是基于SVG字体渲染的一种格式，支持这种字体的浏览器有Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+；



2.在 CSS 样式中全局声明字体： 简单理解把这些字体文件通过css引入到我们页面中。

一定注意字体文件路径的问题

```css
 @font-face {
   font-family: 'icomoon';
   src:  url('fonts/icomoon.eot?7kkyc2');
   src:  url('fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
     url('fonts/icomoon.ttf?7kkyc2') format('truetype'),
     url('fonts/icomoon.woff?7kkyc2') format('woff'),
     url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
   font-weight: normal;
   font-style: normal;
 }
```

3.html 标签内添加小图标。

![](/my-blog/images/1571520411345.png)

4.给标签定义字体。

```css
  span {
     font-family: "icomoon";
   }
或
span::before {
    content:'\e91b';
     font-family: 'icomoon';
}	
```

注意：务必保证 字体和上面@font-face里面的字体保持一致 

### 2.5 字体图标的追加

如果工作中，原来的字体图标不够用了，我们需要添加新的字体图标到原来的字体文件中。

把压缩包里面的 **selection.json** 从新上传，然后选中自己想要新的图标，从新下载压缩包，并替换原来的文件即可。

## 3. CSS 三角

### 3.1 介绍

网页中常见一些三角形，使用 CSS 直接画出来就可以，不必做成图片或者字体图标。

一张图， 你就知道 CSS 三角是怎么来的了, 做法如下：

![](/my-blog/images/1571520965966.png)

```css
 div {
 	width: 0; 
    height: 0;
    border: 50px solid transparent;
	border-color: red green blue black;
	line-height:0;
    font-size: 0;
 }
```

1. 我们用css 边框可以模拟三角效果
2. 宽度高度为0
3. 我们4个边框都要写， 只保留需要的边框颜色，其余的不能省略，都改为 transparent 透明就好了
4. 为了照顾兼容性 低版本的浏览器，加上 font-size: 0;  line-height: 0;

### 3.2 案例：京东三角

#### 3.2.1效果图

![](/my-blog/images/1571521183026.png)

#### 3.2.2 代码参考

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS 三角制作</title>
    <style>
        .box1 {
            width: 0;
            height: 0;
            /* border: 10px solid pink; */
            border-top: 10px solid pink;
            border-right: 10px solid red;
            border-bottom: 10px solid blue;
            border-left: 10px solid green;
        }
        .box2 {
            width: 0;
            height: 0;
            border: 50px solid transparent;
            border-left-color: pink;
            margin: 100px auto;
        }
        .jd {
            position: relative;
            width: 120px;
            height: 249px;
            background-color: pink;
        }
        .jd span {
            position: absolute;
            right: 15px;
            top: -10px;
            width: 0;
            height: 0;
            /* 为了照顾兼容性 */
            line-height: 0;  
            font-size: 0;
            border: 5px solid transparent;
            border-bottom-color: pink;
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="jd">
        <span></span>
    </div>
</body>
</html>
```

## 4. CSS 用户界面样式

**什么是界面样式**

所谓的界面样式，就是更改一些用户操作样式，以便提高更好的用户体验。

- 更改用户的鼠标样式 
- 表单轮廓
- 防止表单域拖拽

### 4.1 鼠标样式 cursor

```css
 li {
 	cursor: pointer; 
 }
```

设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

| 属性值      | 描述      |
| ----------- | --------- |
| default     | 小白 默认 |
| pointer     | 小手      |
| move        | 移动      |
| text        | 文本      |
| not-allowed | 禁止      |



### 4.2 轮廓线 outline

给表单添加 outline: 0;   或者  outline: none; 样式之后，就可以去掉默认的蓝色边框。

```css
 input {
 	outline: none; 
 }
```

### 4.3 防止拖拽文本域 resize

 实际开发中，我们文本域右下角是不可以拖拽的。

```css
 textarea{ 
 	resize: none;
 }
```

vertical-align 属性应用