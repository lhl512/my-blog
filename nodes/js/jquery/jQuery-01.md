---
title:  jQuery-01
date: 2021-01-15
sidebar: auto
tags:
 - jQuery
categories:
 -  jQuery
---

## jQuery简介

js库：即library，是一个封装好特定的集合（方法和函数）

常见的js库

- jquery
- prototype
- yui
- dojo
- ext js
- 移动端的zepto

## jquery的概念

jquery是一个快速、简洁的js库，其设计的宗旨是“write less。do more”，即提倡写更少的代码，做更多的事情。

## jquery的优点

优点：

轻量级。核心代码猜几十kb，不会影响页面加载速度

跨浏览器兼容。基本兼容了现在主流的浏览器

**链式编程**、**隐式迭代**

对事件、样式、动画支持、大大简化了dom操作

支持插件扩展开发、有着丰富的第三方插件

免费，开源

## jquery入口函数

```
$(function(){
    //此处是页面DOM加载完成的入口
})
```

## jquery的顶级对象

$是jquery的别称，同时也是jquery的顶级对象，相当于js中的window

## jquery对象和DOM对象

1、用原生js获取过来的对象就是DOM对象

2、用jq获取过来的对象就是矫情对象

3、jq对象的本质是：利用$对象DOM对象包装后产生的对象（伪数组形式存储）

 DOM对象 

```
let div = document.querySelector('div');
```

jq对象

```
$('div');
```

注意：jq对象只能使用jq方法，DOM对象则使用原生的js属性和方法

DOM对象与jq对象之间是可以相互转换的

1、DOM转jq

```
let div = document.querySelector('div');
$(div);
```

2、jq转dom（2种）

```
$('div')[index]   index是索引号
$('div').get(index)   index是索引号
```

### jq选择器

| 名称       | 用法            | 描述                   |
| ---------- | --------------- | ---------------------- |
| id选择器   | $('#id')        | 获取指定id的元素       |
| 全选选择器 | $('*')          | 匹配所有元素           |
| 类选择器   | $('.class')     | 获取同一类class的元素  |
| 标签选择器 | $('div')        | 获取同一标签的所有元素 |
| 并集选择器 | $('div,p,li')   | 获取多个元素           |
| 交集选择器 | $('li.current') | 交集元素               |

### jq样式修改

```
$('div').css("background","pink");
```

### 隐式迭代（重要）

 遍历内部dom元素（伪数组形式存储）的过程就叫做**隐式迭代** 

### jquery筛选选择器

| 语法       | 用法          | 描述                                     |
| ---------- | ------------- | ---------------------------------------- |
| :first     | $('li:first') | 获取第一个li元素                         |
| :last      | $("li:last")  | 获取最后一个li元素                       |
| :eq(index) | $("li:eq(2)") | 获取到的li元素中，选择索引号为2的元素    |
| :odd       | $("li:odd")   | 获取到的li元素中，选择索引号为奇数的元素 |
| :even      | $("li:even")  | 获取到的li元素中，选择索引号为偶数的元素 |

### jquery筛选方法（重点）

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

### jquery的排他思想

```
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

```
$(this).css("background","pink").siblings().css("background","")
```

## jQuery样式操作

### 操作css方法

1.参数只写属性名，则返回属性值

```
$(this).css("color")
```

2.修改属性

```
$(this).css("color","pink") //属性名要加引号
```

3.修改多个属性

```
$(this).css({
    width:400,
    height:400
})
```

### 设置类方法

1.添加类

```
$(this).addClass("current");
```

2.移除类

```
$(this).removeClass("current");
```

3.切换类

```
$("div").toggleClass("current"); //没有添加，有移除
```

### 类操作与className区别

原生js中className对覆盖元素原先里面的类名

jquery里面类操作只是对指定类进行操作，不影响原先的类名

```
$(this).addClass("current");//相当于追加类名，不影响原先的类名
```





 