---
title:  jQuery
date: 2021-01-15
sidebar: auto
tags:
 - jQuery
categories:
 -  jQuery
---

## jQuery简介

###  JavaScript 库

​		JavaScript库：即 library，是一个封装好的特定的集合（方法和函数）。从封装一大堆函数的角度理解库，就是在这个库中，封装了很多预先定义好的函数在里面，比如动画animate、hide、show，比如获取元素等。

> 简单理解： 就是一个JS 文件，里面对我们原生js代码进行了封装，存放到里面。这样我们可以快速高效的使用这些封装好的功能了。
>
> 比如 jQuery，就是为了快速方便的操作DOM，里面基本都是函数（方法）。

常见的js库

- jquery
- prototype
- yui
- dojo
- ext js
- 移动端的zepto

### jQuery的概念

- jQuery是一个快速、简洁的js库，其设计的宗旨是“write less。do more”，即提倡写更少的代码，做更多的事情。
- jQuery 封装了 JavaScript 常用的功能代码，优化了 DOM 操作、事件处理、动画设计和 Ajax 交互。
- 学习jQuery本质： 就是学习调用这些函数（方法）。
- jQuery 出现的目的是加快前端人员的开发速度，我们可以非常方便的调用和使用它，从而提高开发效率。

### jquery的优点

优点：

1. 轻量级。核心代码猜几十kb，不会影响页面加载速度

2. 跨浏览器兼容。基本兼容了现在主流的浏览器

3. **链式编程**、**隐式迭代**
4. 对事件、样式、动画支持、大大简化了dom操作

5. 支持插件扩展开发、有着丰富的第三方插件

6. 免费，开源 

##  jQuery 的基本使用

### jQuery 的下载

​	jQuery的官网地址： https://jquery.com/，官网即可下载最新版本。

​    中文网：http://jquery.cuishifeng.cn/

>  各个版本的下载：https://code.jquery.com/

​	版本介绍：

> 1x ：兼容 IE 678 等低版本浏览器， 官网不再更新
>
> 2x ：不兼容 IE 678 等低版本浏览器， 官网不再更新
>
> 3x ：不兼容 IE 678 等低版本浏览器， 是官方主要更新维护的版本

### jquery入口函数

jQuery中常见的两种入口函数：

```js
// 第一种: 简单易用。
$(function () {   
    ...  // 此处是页面 DOM 加载完成的入口
}) ; 

// 第二种: 繁琐，但是也可以实现
$(document).ready(function(){
   ...  //  此处是页面DOM加载完成的入口
});
```

​	总结：

1. 等着 DOM 结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery 帮我们完成了封装。
2. 相当于原生 js 中的 DOMContentLoaded。
3. 不同于原生 js 中的 load 事件是等页面文档、外部的 js 文件、css文件、图片加载完毕才执行内部代码。
4. 更推荐使用第一种方式。

### jquery的顶级对象$

1.  \$是 jQuery 的别称，在代码中可以使用 jQuery 代替，但一般为了方便，通常都直接使用 $ 。
2.  \$是jQuery的顶级对象，相当于原生JavaScript中的 window。把元素利用$包装成jQuery对象，就可以调用jQuery 的方法。

### jquery对象和DOM对象

使用 jQuery 方法和原生JS获取的元素是不一样的，总结如下 : 

1. 用原生js获取过来的对象就是DOM对象

2. 用jq获取过来的对象就是矫情对象
3. jq对象的本质是：利用$对象DOM对象包装后产生的对象（伪数组形式存储）

DOM对象 

```js
let div = document.querySelector('div');
```

jQuery对象

```js
$('div');
```

> 注意：
>
> 只有 jQuery 对象才能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 方法。 

DOM对象与jq对象之间是可以相互转换的

1、DOM对象转jQuery对象

```js
let div = document.querySelector('div');
$(div);
```

2、jQuery对象转DOM对象（2种）

```js
$('div')[index]   index是索引值
$('div').get(index)   index是索引知
```

总结：实际开发比较常用的是把DOM对象转换为jQuery对象，这样能够调用功能更加强大的jQuery中的方法。

## jQuery选择器

​		原生 JS 获取元素方式很多，很杂，而且兼容性情况不一致，因此 jQuery 给我们做了封装，使获取元素统一标准。

### 基础选择器

```js
$("选择器")   //  里面选择器直接写 CSS 选择器即可，但是要加引号 
```

| 名称       | 用法            | 描述                   |
| ---------- | --------------- | ---------------------- |
| id选择器   | $('#id')        | 获取指定id的元素       |
| 全选选择器 | $('*')          | 匹配所有元素           |
| 类选择器   | $('.class')     | 获取同一类class的元素  |
| 标签选择器 | $('div')        | 获取同一标签的所有元素 |
| 并集选择器 | $('div,p,li')   | 获取多个元素           |
| 交集选择器 | $('li.current') | 交集元素               |

### 层级选择器

​		层级选择器最常用的两个分别为：后代选择器和子代选择器。

| 名称       | 用法       | 描述                                                         |
| ---------- | ---------- | ------------------------------------------------------------ |
| 子代选择器 | $("ul>li") | 使用>符号，获取亲儿子层级的元素；注意：并不会获取子层级的元素 |
| 后代选择器 | $("ul li") | 使用空格，代表后代选择器，获取ul下所有的元素，包括子孙等     |

### 隐式迭代（重要）

 遍历内部dom元素（伪数组形式存储）的过程就叫做**隐式迭代** 

### jQuery筛选选择器

| 语法       | 用法          | 描述                                     |
| ---------- | ------------- | ---------------------------------------- |
| :first     | $('li:first') | 获取第一个li元素                         |
| :last      | $("li:last")  | 获取最后一个li元素                       |
| :eq(index) | $("li:eq(2)") | 获取到的li元素中，选择索引号为2的元素    |
| :odd       | $("li:odd")   | 获取到的li元素中，选择索引号为奇数的元素 |
| :even      | $("li:even")  | 获取到的li元素中，选择索引号为偶数的元素 |

### jQuery筛选方法（重点）

| 语法               | 用法                           | 说明                                               |
| ------------------ | ------------------------------ | -------------------------------------------------- |
| parent()           | $("li").parent();              | 查找父级                                           |
| children(selector) | $("ul").children("li")         | 相当于$("ul>li"),最近一级（亲儿子）                |
| find(selector)     | $("ul").find("li")             | 相当于$("ul li"),后代选择器                        |
| siblings(selector) | $(".first").siblings("li")     | 查找兄弟节点，不包括自己                           |
| nextAll([expr])    | $(".first").nextAll()          | 查找当前元素之后所有同辈元素                       |
| prevtAll([expr])   | $(".last").prevAll()           | 查找当前元素之前所有同辈元素                       |
| hasClass(class)    | $("div").hasClass("protected") | 检查当前元素是否含有某个特定的类，如果有则返回true |
| eq(index)          | $("li").eq(2)                  | 相当于$("li:eq(2)")                                |

### jQuery的排他思想

```js
<body>
    <button>
        快速
    </button>
    <button>
        快速
    </button>
    <button>
        快速
    </button>
    <scrpit>
    	$(dunction(){
        	//1.隐式迭代，对所有的按钮都绑定了点击事件
        	$("button").click(function(){
        		//2.当前元素变化背景颜色
        		$(this).css("background","pink");
        		//3.其他兄弟去掉背景颜色
        		$(this).siblings("button").css("background","")
        	});
        })
    </scrpit>
</body>
```

### 链式编程

链式编程是为了节省代码量，看起来更优雅

```js
$(this).css("background","pink").siblings().css("background","")
```

## jQuery样式操作

​		jQuery中常用的样式操作有两种：css() 和 设置类样式方法

### 操作css方法

1.参数只写属性名，则返回属性值

```js
$(this).css("color")
```

2.修改属性

```js
$(this).css("color","pink") //属性名要加引号
```

3.修改多个属性

```js
$(this).css({
	width:400,
	height:400
})
```

### 设置类方法

​		作用等同于以前的 classList，可以操作类样式， 注意操作类里面的参数不要加点。

​		常用的三种设置类样式方法：

1.添加类

```JS
$(this).addClass("current");
```

2.移除类

```JS
$(this).removeClass("current");
```

3.切换类

```JS
$("div").toggleClass("current"); //没有添加，有移除
```

注意：

1. 设置类样式方法比较适合样式多时操作，可以弥补css()的不足。
2. 原生 JS 中 className 会覆盖元素原先里面的类名，jQuery 里面类操作只是对指定类进行操作，不影响原先的类名。

### 类操作与className区别

​		原生js中className对覆盖元素原先里面的类名

jquery里面类操作只是对指定类进行操作，不影响原先的类名

```JS
$(this).addClass("current");//相当于追加类名，不影响原先的类名
```

## jQuery 动画效果

​		jQuery 给我们封装了很多动画效果，最为常见的如下：

- 显示隐藏：show() / hide() / toggle() ;

- 划入画出：slideDown() / slideUp() / slideToggle() ; 

- 淡入淡出：fadeIn() / fadeOut() / fadeToggle() / fadeTo() ; 

- 自定义动画：animate() ;

  注意：

  动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行。

  jQuery为我们提供另一个方法，可以停止动画排队：stop() ;

### 显示隐藏

#### 显示

1.显示语法规范

```JS
show([speed,[easing],[fn]])
```

2.显示参数

1）参数都可以省略

2）speed：三种预定速度之一（"slow","normal","fast"）或表示动画时长的毫秒数值（如：1000）

3）easing：（Optional）用来指定切换效果，默认是"swing",可用参数"linear"

4) fn:回调函数，在动画完成时执行的函数，每个元素 执行一次

#### 隐藏

1、隐藏语法规范

```JS
hide([speed,[easing],[fn]])
```

2、隐藏参数

1）参数都可以省略

2）speed：三种预定速度之一（"slow","normal","fast"）或表示动画时长的毫秒数值（如：1000）

3）easing：（Optional）用来指定切换效果，默认是"swing",可用参数"linear"

4) fn:回调函数，在动画完成时执行的函数，每个元素 执行一次

#### 切换

1、切换语法规范

```js
toggle([speed,[easing],[fn]])
```

2、切换参数

1）参数都可以省略

2）speed：三种预定速度之一（"slow","normal","fast"）或表示动画时长的毫秒数值（如：1000）

3）easing：（Optional）用来指定切换效果，默认是"swing",可用参数"linear"

4) fn:回调函数，在动画完成时执行的函数，每个元素 执行一次

#### 代码演示

```js
<body>
    <button>显示</button>
    <button>隐藏</button>
    <button>切换</button>
    <div></div>
    <script>
        $(function() {
            $("button").eq(0).click(function() {
                $("div").show(1000, function() {
                    alert(1);
                });
            })
            $("button").eq(1).click(function() {
                $("div").hide(1000, function() {
                    alert(1);
                });
            })
            $("button").eq(2).click(function() {
              $("div").toggle(1000);
            })
            // 一般情况下，我们都不加参数直接显示隐藏就可以了
        });
    </script>
</body>
```

### 滑入滑出

#### 滑入

1.滑入语法规范

```JS
sideDown([speed,[easing],[fn]])
```

2.滑入参数

1）参数都可以省略

2）speed：三种预定速度之一（"slow","normal","fast"）或表示动画时长的毫秒数值（如：1000）

3）easing：（Optional）用来指定切换效果，默认是"swing",可用参数"linear"

4) fn:回调函数，在动画完成时执行的函数，每个元素 执行一次

#### 滑出

1.滑出语法规范

```JS
sideUp([speed,[easing],[fn]])
```

2.滑入参数

1）参数都可以省略

2）speed：三种预定速度之一（"slow","normal","fast"）或表示动画时长的毫秒数值（如：1000）

3）easing：（Optional）用来指定切换效果，默认是"swing",可用参数"linear"

4) fn:回调函数，在动画完成时执行的函数，每个元素 执行一次

#### 切换

1.切换语法规范

```JS
sideToggle([speed,[easing],[fn]])
```

2.切换参数

1）参数都可以省略

2）speed：三种预定速度之一（"slow","normal","fast"）或表示动画时长的毫秒数值（如：1000）

3）easing：（Optional）用来指定切换效果，默认是"swing",可用参数"linear"

4) fn:回调函数，在动画完成时执行的函数，每个元素 执行一次

#### 代码演示

```js
<body>
    <button>下拉滑动</button>
    <button>上拉滑动</button>
    <button>切换滑动</button>
    <div></div>
    <script>
        $(function() {
            $("button").eq(0).click(function() {
                // 下滑动 slideDown()
                $("div").slideDown();
            })
            $("button").eq(1).click(function() {
                // 上滑动 slideUp()
                $("div").slideUp(500);
            })
            $("button").eq(2).click(function() {
                // 滑动切换 slideToggle()
                $("div").slideToggle(500);
            });
        });
    </script>
</body>
```

### 淡入淡出

#### 淡入

1.淡入语法规范

```JS
fadeIn([speed,[easing],[fn]])
```

2.淡入参数

1）参数都可以省略

2）speed：三种预定速度之一（"slow","normal","fast"）或表示动画时长的毫秒数值（如：1000）

3）easing：（Optional）用来指定切换效果，默认是"swing",可用参数"linear"

4) fn:回调函数，在动画完成时执行的函数，每个元素 执行一次

#### 淡出

1.淡出语法规范

```JS
fadeOut([speed,[easing],[fn]])
```

2.淡出参数

1）参数都可以省略

2）speed：三种预定速度之一（"slow","normal","fast"）或表示动画时长的毫秒数值（如：1000）

3）easing：（Optional）用来指定切换效果，默认是"swing",可用参数"linear"

4) fn:回调函数，在动画完成时执行的函数，每个元素 执行一次

#### 切换

1.淡出语法规范

```JS
fadeToggle([speed,[easing],[fn]])
```

2.淡出参数

1）参数都可以省略

2）speed：三种预定速度之一（"slow","normal","fast"）或表示动画时长的毫秒数值（如：1000）

3）easing：（Optional）用来指定切换效果，默认是"swing",可用参数"linear"

4) fn:回调函数，在动画完成时执行的函数，每个元素 执行一次

#### 渐进方式调整到指定不透明度

1.调整语法规范

```js
fadeTo([[speed],opacity,[easing],[fn]])
```

2.调整参数

1）`opacity透明度必须写，取值0~1之间`

2）speed：三种预定速度之一（"slow","normal","fast"）或表示动画时长的毫秒数值（如：1000),`必须写`

3）easing：（Optional）用来指定切换效果，默认是"swing",可用参数"linear"

4) fn:回调函数，在动画完成时执行的函数，每个元素 执行一次

#### 代码演示

```js
<body>
    <button>淡入效果</button>
    <button>淡出效果</button>
    <button>淡入淡出切换</button>
    <button>修改透明度</button>
    <div></div>
    <script>
        $(function() {
            $("button").eq(0).click(function() {
                // 淡入 fadeIn()
                $("div").fadeIn(1000);
            })
            $("button").eq(1).click(function() {
                // 淡出 fadeOut()
                $("div").fadeOut(1000);
            })
            $("button").eq(2).click(function() {
                // 淡入淡出切换 fadeToggle()
                $("div").fadeToggle(1000);
            });
            $("button").eq(3).click(function() {
                //  修改透明度 fadeTo() 这个速度和透明度要必须写
                $("div").fadeTo(1000, 0.5);
            });
        });
    </script>
</body>
```

### 事件切换

```JS
hover([over],out)
```

1)over：鼠标移动到元素上要触发的函数(相当于mouseenter)

2)out：鼠标移除元素要触发的函数

语法：

```JS
$("div").hover(function(){},function(){})
```

注意：如果只写一个函数，那么鼠标经过和离开都会触发这个函数

```js
$("div").hover(function(){
	$(this).slideToggle();
})
```

### 动画队列及其停止排队方法

**1、动画或效果队列**

动画或者效果一旦触发就会执行，如果多次触发。就造成多个动画或者效果排队执行

**2.停止排队**

```js
stop()
```

1)stop()方法用于停止动画或效果

2)注意：stop()写动画或者效果的前面，相当于停止结束上一次的动画

```js
$("div").hover(function(){
	$(this).stop().slideToggle();
})
```

### 自定义动画

#### 1.语法：

```js
animate(params,[speed],[easing],[fn])
```

#### 2.参数

1)**paeams:想要改变的样式属性，以对象形式传递，必须写**。

2)speed：三种预定速度之一（"slow","normal","fast"）或表示动画时长的毫秒数值（如：1000）必须写

3）easing：（Optional）用来指定切换效果，默认是"swing",可用参数"linear"

4) fn:回调函数，在动画完成时执行的函数，每个元素 执行一次

#### 代码演示

```js
$("button").click(function(){
	$("div").animate({
		left:500,
        top:300,
        opactity:.4,
        width:500
	},500)
})
```

## jQuery属性操作

​		jQuery 常用属性操作有三种：prop() / attr() / data() 

### 1.设置或获取元素固有属性值prop()

​		所谓元素固有属性就是元素本身自带的属性，比如 <a> 元素里面的 href ，比如 <input> 元素里面的 type。

```js
$("a").prop("href")
```

1.获取

```js
$("a").prop("属性名")
```

2.设置

```js
$("a").prop("属性名","属性值")
```

​		注意：prop() 除了普通属性操作，更适合操作表单属性：disabled / checked / selected 等。

### 2.设置或获取元素自定义属性值attr()

​		用户自己给元素添加的属性，我们称为自定义属性。 比如给 div 添加 index =“1”。

```js
$("div").attr("index")
```

1.获取

```js
$("div").attr("属性")
```

2.设置

```js
$("div").attr("属性","属性值")
```

### 3.数据缓存data()

data()方法可以在指定的元素上存取数据，并不会修改DOM元素结构，一旦页面刷新，之前存放的数据都将被移除

语法

1.附加数据语法

```js
 data("name","value") //向被选元素附加数据
```

2.获取数据语法

```js
date("name") //向被选元素获取数据
```

​		注意：同时，还可以读取 HTML5 自定义属性  data-index ，得到的是数字型。

#### 代码演示

```js
<body>
    <a href="http://www.itcast.cn" title="都挺好">都挺好</a>
    <input type="checkbox" name="" id="" checked>
    <div index="1" data-index="2">我是div</div>
    <span>123</span>
    <script>
        $(function() {
            //1. element.prop("属性名") 获取元素固有的属性值
            console.log($("a").prop("href"));
            $("a").prop("title", "我们都挺好");
            $("input").change(function() {
                console.log($(this).prop("checked"));
            });
            // console.log($("div").prop("index"));
            // 2. 元素的自定义属性 我们通过 attr()
            console.log($("div").attr("index"));
            $("div").attr("index", 4);
            console.log($("div").attr("data-index"));
            // 3. 数据缓存 data() 这个里面的数据是存放在元素的内存里面
            $("span").data("uname", "andy");
            console.log($("span").data("uname"));
            // 这个方法获取data-index h5自定义属性 第一个 不用写data-  而且返回的是数字型
            console.log($("div").data("index"));
        })
    </script>
</body>
```

## jQuery内容文本值

​		jQuery的文本属性值常见操作有三种：html() / text() / val() ; 分别对应JS中的 innerHTML 、innerText 和 value 属性。

### 1.普通元素内容html()  (相当于原生innerHTML)

**语法**

```js
html()  //获取元素内容
html("内容")   //设置元素的内容
```

### 2.普通文本内容text() (相当于原生innerText)

**语法**

```js
text()	//获取元素文本内容
text("内容")	//设置元素文本内容
```

### 3.表单值

**语法**

```js
val()
val("内容")
```

#### 代码演示

```js
<body>
    <div>
        <span>我是内容</span>
    </div>
    <input type="text" value="请输入内容">
    <script>
        // 1. 获取设置元素内容 html()
        console.log($("div").html());
        // $("div").html("123");
        // 2. 获取设置元素文本内容 text()
        console.log($("div").text());
        $("div").text("123");
        // 3. 获取设置表单值 val()
        console.log($("input").val());
        $("input").val("123");
    </script>
</body>
```

## jQuery元素操作

​		jQuery 元素操作主要讲的是用jQuery方法，操作标签的遍历、创建、添加、删除等操作。

### 1.遍历元素

​		jQuery隐式迭代是对同一类元素做了同样的操作，如果想要给同一类元素做不同操作，就需要用到遍历。

**语法1：**

```js
$("div").each(function (index,domElm){})
```

1. each()方法遍历匹配的每一个元素，主要用DOM处理。each每一个

2. 里面的回调函数有两个参数：index是每个元素的索引号：demEle是**每个DOM元素对象，不是jQuery对象**

3. **所以要想使用jquer方法，需要给每个都没元素转化为jQuery对象$(domEle)**

   ​	注意：此方法用于遍历 jQuery 对象中的每一项，回调函数中元素为 DOM 对象，想要使用 jQuery 方法需要转换。

```html
<div>1</div>
<div>2</div>
<div>3</div>
<script>
	$("div").each(function(index,domEle){
        $(domEle).css("color","red")
    })
</script>
```

**语法2：**

```js
$.each(object,function(index,element){})
```

1. $.each()方法可用于遍历任何对象，主要用于数据处理，比如数组，对象

2. 里面的函数有2个参数：index是每个元素的索引号；element遍历内容


```html
<div>1</div>
<div>2</div>
<div>3</div>
<script>
    let arr = [1,2,3]
    // $.each()方法遍历元素 主要用于遍历数据，处理数据
	$.each($("div"),function(index,element){})
	$.each(arr,function(index,element){})
</script>
```

### 2.创建元素

#### 演示代码

```js
$(function(){
	//创建li
	let li = $("<li>我是后来的li</li>")
	//内部添加li
	$("ul").append(li)
	//外部添加
	$(li).before("<li>我是前面的li</li>")
	$(li).after("<li>我是后面的li</li>")
	//删除
	//$("ul").remove();自杀
	//$("ul").empty();孩子
	$("ul").html();孩子
})
```

**语法：**

```js
$("<li></li>")
```

动态创建一个`<li>`

### 3.添加元素

**1.内部添加：**

```js
element.append("内容")
```

把内容放入匹配元素内部最后面，类似原生appendChild

**2.外部添加**

```js
element.after("内容")  //把内容放到目标元素后面
element.before("内容") //把内容放到目标元素前面
```

**1、内部添加元素，生成之后，它们是父子关系**

**2、外部添加元素，生成之后，它们是兄弟关系**

### 4.删除元素

```js
element.remove() //删除匹配元素(本身)
element.empty()	//删除匹配元素集合中的所有子节点
element.html("") //清空匹配元素内容
```

## jQuery尺寸、位置操作

​		jQuery中分别为我们提供了两套快速获取和设置元素尺寸和位置的API，方便易用，内容如下。

### 1.jQuery 尺寸操作

 		jQuery 尺寸操作包括元素宽高的获取和设置，且不一样的API对应不一样的盒子模型。

| 语法                                 | 用法                                               |
| ------------------------------------ | -------------------------------------------------- |
| width() / height()                   | 取得匹配元素宽度和高度 只算width / height          |
| innerWidth() / innerHeight           | 取得匹配元素宽度和高度 包含 padding                |
| outerWidth() / outerHeight()         | 取得匹配元素宽度和高度 包含padding、border         |
| outerWidth(true) / outerHeight(true) | 取得匹配元素宽度和高度 包含padding、border、margin |

- 以上参数为空时，则是获取相应值，返回的是数字型
- 如果参数时数字，则是修改相应值
- 参数可以不写单位

#### 演示代码

```js
<body>
    <div></div>
    <script>
        $(function() {
            // 1. width() / height() 获取设置元素 width和height大小 
            console.log($("div").width());
            // $("div").width(300);

            // 2. innerWidth() / innerHeight()  获取设置元素 width和height + padding 大小 
            console.log($("div").innerWidth());

            // 3. outerWidth()  / outerHeight()  获取设置元素 width和height + padding + border 大小 
            console.log($("div").outerWidth());

            // 4. outerWidth(true) / outerHeight(true) 获取设置 width和height + padding + border + margin
            console.log($("div").outerWidth(true));
        })
    </script>
</body>
```

​		注意：有了这套 API 我们将可以快速获取和子的宽高，至于其他属性想要获取和设置，还要使用 css() 等方法配合。

### jQuery 位置操作

​		jQuery的位置主要有三个：**offset()**、position()、scrollTop()/scrollLefr()

#### 1.offset()设置或获取元素偏移

1 offset()方法设置或返回被选元素相对于文档的偏移坐标，跟父级没有关系

```js
$("son").offset() //返回对象
$("son").offset().top

//设置
$("son").offset({
	top:200,
	left:200
});
```

2 该方法有两个属性left，top。offset().top用于获取距离文档顶部的距离,offset().left用于获取距离文档左侧的距离

#### 2.position()获取元素偏移（只能获取不能设置）

1 position()方法用于返回被选中元素相对于**带有定位父级**偏移坐标，如果父级都没有定位，则以文档为准

```js
$("son").position() //返回对象
```

#### 3.scrollTop() / scrollLeft()设置或获取元素被卷去的头部和左侧

1 scrollTop()方法设置或返回被选中元素被卷去的头部

```js
$(windwo).scroll(function(){
	$(cocument).scrollTop();
})
```

#### 演示代码

```js
<body>
    <div class="father">
        <div class="son"></div>
    </div>
        
    <div class="back">返回顶部</div>
    <div class="container"></div>
   
    <script>
        $(function() {
            // 1. 获取设置距离文档的位置（偏移） offset
            console.log($(".son").offset());
            console.log($(".son").offset().top);
            // $(".son").offset({
            //     top: 200,
            //     left: 200
            // });
      
            // 2. 获取距离带有定位父级位置（偏移） position   如果没有带有定位的父级，则以文档为准
            // 这个方法只能获取不能设置偏移
            console.log($(".son").position());
            // $(".son").position({
            //     top: 200,
            //     left: 200
            // });
      
      		// 3. 被卷去的头部
      		$(document).scrollTop(100);
            // 被卷去的头部 scrollTop()  / 被卷去的左侧 scrollLeft()
            // 页面滚动事件
            var boxTop = $(".container").offset().top;
            $(window).scroll(function() {
                // console.log(11);
                console.log($(document).scrollTop());
                if ($(document).scrollTop() >= boxTop) {
                    $(".back").fadeIn();
                } else {
                    $(".back").fadeOut();
                }
            });
            // 返回顶部
            $(".back").click(function() {
                // $(document).scrollTop(0);
                $("body, html").stop().animate({
                    scrollTop: 0
                });
                // $(document).stop().animate({
                //     scrollTop: 0
                // }); 不能是文档而是 html和body元素做动画
            })
        })
    </script>
</body>
```

## jQuery事件注册

**单个事件注册**

语法：

```js
element.事件(function(){})
```

```js
$("div").click(function(){事件处理程序})
```

## jQuery事件处理

### 1.事件处理 on()绑定事件

 on()方法在匹配元素上绑定一个或多个事件的事件处理函数

**语法：**

```js
element.on(events,[selector],fn)
```

1.events:一个或多个用哪个空格分隔的事件类型，如"click"或"keydown"

2.selector:元素的子元素选择器

3.fn：回调函数

```js
$("div").on({
	mouseenter:function(){
		$(this).css("background","pink")
	},
	click:function(){
		$(this).css("background","blue")
	}
})
```

**on()方法优势1：**

可以绑定多个事件，多个处理事件处理程序

```js
$("div").on({
	mouseenter:function(){
		
	},
	click:function(){
	
	}
});
```

如果事件处理程序相同

```js
$("div").on("mouseover mouseout", function(){
	$(this).toggleClass("current")
})
```

**on()方法优势2：**

可以事件委派操作。事件委派的定义是，把原来加个子元素身上的事件绑定在父元素身上，就是把事件委派给父元素。

```js
 $("ul").on("click","li",function(){
 		
 });
```

**on()方法优势3：**

动态创建的元素，click()没有办法绑定事件, on()可以给动态生成的元素绑定事件

```js
 $("ul").on("click","li",function(){
 });
 let li =$("<li>我是后来的li</li>");
 $("ul").append(li);
```

### 事件处理 0ff()解绑事件

off()方法可以移除通过on()方法添加的事件处理程序。

```js
$("div").on({
	mouseenter:function(){
		
	},
	click:function(){
	
	}
});
$("div").off(); //解除div身上所有事件
$("div").off("click"); //解除了div身上的点击事件

//解除事件委托
$("ul").on("click","li",function(){
 });
 $("ul").off("click","li");
```

如果事件只想触发一次，可以使用one()来绑定事件

```js
$("p").one("click",function(){
	
})
```

### 自动触发事件 trigger()

```
$("div").on("click",function(){
	
});
$("div").click();
$("div").trigger("click"); 
$("div").triggerHandler("click");就是不会触发元素的默认行为
```

有些事件希望自动触发，比如轮播图自动播放跟点击左右侧按钮一致。可以利用定时器自动触发按钮点击事件，不必鼠标点击触发。

```
element.click()   //第一种简写形式
```

```
element.trigger("事件")
```

```
element.triggerHandler("事件")
```

## jQuery事件对象

事件被触发，就会有事件对象的产生

```
element.on(events,[selector],function(event))
```

```
$("div").on("click",function(event){
	
});
```

阻止默认行为：event.prevenDefauit()或者return false

阻止事件冒泡:event.stopPropagation()

## jQuery对象拷贝

如果想要把某个对象拷贝(合并)个另一个对象使用，此时可以使用$.extend()方法

**语法：**

```
$.extend([deep],target,object1,[objectN])
```

1.deep:如果设为true为深拷贝，默认为false，浅拷贝

2.target：要拷贝的目标对象

3.object1：待拷贝到第一个对象的对象。

4.objectN： 待拷贝到第N个对象的对象

5.浅拷贝是把被拷贝的对象**复杂数据类型中的地址**拷贝给目标对象，修改目标对象**会影响**被拷贝对象

6.深拷贝，前面加true，完全克隆( 拷贝的对象，而不是地址)，修改目标对象**不会影响**被拷贝对象。

```
let  targetObj = {}
let obj ={
	id:1,
	name:"andy"
};
$.extend(targetObj,obj)
```

```
let  targetObj = {id:1}
let obj ={
	id:1,
	name:"andy"
};
// 浅拷贝
$.extend(targetObj,obj) //会覆盖以前的数据
// 深拷贝
$.extend(true,targetObj,obj)
```

## jQuery多库共存

**问题概述：**

jQuery使用$作为标识符，随着jQuery的流行，其他js库也会用这$作为标识符，这样一起使用会引发冲突

**客观需求：**

需要一个解决方案，让jQuery和其他的js库不存在冲突，可以同时存在，这就叫做多库共存。

**jQuery解决方案：**

**1.把里面的$符号统一改成jQuery。比如jQuery("div")**

**2.jQuery变量规定新的名称：$.noConflict()     let xx = $.noConflict()**

## jQuery插件

jQuery功能比较有限，想要更复杂的特效效果，可以借助于jQuery插件完成。

注意：这些插件也是依赖jQuery来完成的，所以必须要引入jQuery文件，因此也称为jQuery插件

**jQuery插件常用网站：**

1.jQuery插件库  http://www.jq22.com

2.jQuery之家 http://www.htmleaf.com

**jQuery插件使用步骤：**

1.引入相关文件。(jQuery文件和插件文件)

2.复制相关html、css、js(调用插件)。

#### 图片懒加载(图片使用延迟加载在可提高网页下载速度。它也能帮助减轻服务器负载)

当我们页面滑动到可视区域，再显示图片

### 全屏滚动(fullpage.js)

gitHub:https://github.com/alvarotroigo/fullPage.js

中文翻译网站：http://www.dowebok.com/demo/2014/77/

#### bootstrap插件：

bootstrap框架也是依赖jQuery开发的，因此里面的js插件使用，也必须引入jQuery文件

 