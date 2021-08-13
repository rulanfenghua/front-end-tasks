- [HTML](#html)
- [JS](#js)
- [CSS](#css)
  - [写法](#写法)
- [ES6](#es6)
- [ECharts](#echarts)
- [jQuery](#jquery)
- [Nodejs](#nodejs)
  - [Express](#express)
- [Webpack](#webpack)
- [tomcat](#tomcat)
- [Vuejs](#vuejs)
- [微信小程序](#微信小程序)
- [PS](#ps)
- [Bash](#bash)
  - [NPM](#npm)
- [Git](#git)
- [Sublime](#sublime)
- [Axios](#axios)

## HTML
```
<a href="javascript:viod(0);"></a>
页面跳转为空（死链）
```
```
<a name="label">锚（文本）</a>
<a href="#label">文本</a>
```
```
模板字面量 是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能。在ES2015规范的先前版本中被称为“模板字符串”。
`
<div class="blog-post">
  <h3>{{ post.title }}</h3>
  <div v-html="post.content"></div>
</div>
`
它们在 IE 下并没有被支持，所以如果你需要在不 (经过 Babel 或 TypeScript 之类的工具) 编译的情况下支持 IE，请使用折行转义字符取而代之。
'\
<li>\
  {{ title }}\
  <button v-on:click="$emit(\'remove\')">Remove</button>\
</li>\
'
```
```
自定义名称
kebab-case (短横线分隔命名)；PascalCase (驼峰式命名) 
```
```
meta标签
<meta>标签；用于描述网页的元信息
```
```
视口
<meta name="viewport">视口
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
user-scalable：缩放控制；initial-scale：缩放比例
```

## JS
```
call() ;aplly() ;bind()
call() 方法调用一个函数, 其具有一个指定的this值和分别地提供的参数
apply() 方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象）提供的参数
bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列

指定的this值为null和undefined的this值会自动指向全局对象(浏览器中就是window对象)，同时值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象
```
```
TouchEvent
```
[TouchEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent)
```
WheelEvent
```
[WheelEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/WheelEvent)
```
event.currentTarget
当事件遍历DOM时，标识事件的当前目标。它总是引用事件处理程序附加到的元素，而不是event.target，event.target标识事件发生的元素。
```
```
Array.prototype.map()
map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

Array.prototype.some()
some() 方法测试数组中的某些元素是否通过由提供的函数实现的测试。
```
```
Number.prototype.toFixed()
toFixed() 方法使用定点表示法来格式化一个数。

numObj.toFixed(digits)
digits：小数点后数字的个数；介于 0 到 20 （包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 0。
```
```
localStorage
localStorage 与 sessionStorage 一样，都遵循同源策略，但是它是持续存在的。
```
```
Object.keys()
Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。
```
```js
// 伪数组

// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType != 3 test.
function isArrayLike(o) {
    if (o && // o is not null, undefined, etc.
        typeof o === 'object' && // o is an object
        isFinite(o.length) && // o.length is a finite number
        o.length >= 0 && // o.length is non-negative
        o.length === Math.floor(o.length) && // o.length is an integer
        o.length < 4294967296) // o.length < 2^32
        return true; // Then o is array-like
    else
        return false; // Otherwise it is not
}
```
```
设置element样式

HTMLElement.style
HTMLElement.style 属性返回一个 CSSStyleDeclaration 对象，表示元素的 内联style 属性（attribute）

Element.setAttribute()
```
[HTMLElement.style](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/style)
```
var element = document.documentElement;
document.documentElement 是一个会返回文档对象（document）的根元素的只读属性。
```

## CSS
```
@font-face
允许网页开发者为其网页指定在线字体
@font-face {
  [ font-family: <family-name>; ] ||
  [ src: [ <url> [ format(<string>#) ]? | <font-face-name> ]#; ] ||
  [ unicode-range: <urange>#; ] ||
  [ font-variant: <font-variant>; ] ||
  [ font-feature-settings: normal | <feature-tag-value>#; ] ||
  [ font-variation-settings: normal | [ <string> <number>] # ||
  [ font-stretch: <font-stretch>; ] ||
  [ font-weight: <weight>; ] ||
  [ font-style: <style>; ]
}
```
```
inherit 关键字使得元素获取其父元素的计算值(computed value )；
对于非继承属性，一般使用使用“initial”或“unset”作为替代；
transparent 初始值。
(Sass 中类似 inherit 或 sans-serif 的标识符无须引用起来)
```
```
CSS Transitions
transition-property
transition-duration
transition-timing-function
参数：ease,ease-in,ease-out,ease-in-out,linear,step-start,step-end,steps(4,end),cubic-bezier(0.1, 0.7, 1.0, 0.1);
其中：cubic-bezier()是立方贝塞尔曲线
transition-delay

简写：transition: <property><duration><time-function><delay>
```
<!-- ![cubic-bezier](cubic-bezier,example.png) -->
```
resolution
@media属性：定义设备的分辨率

dppx:Represents the number of dots per px unit.

@media (min-resolution: 300dpi) { ... }
```
[<resolution>](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution)
```
粘性定位
position: sticky;
须指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
```
```
FLEX CSS 弹性盒子布局
flex属性 flex: <flex-grow><flex-shrink><flex-basis>
flex-grow 属性定义弹性盒子项（flex item）的拉伸因子。
flex-shrink 属性指定了 flex 元素的收缩规则。
flex-basis 指定了 flex 元素在主轴方向上的初始大小。
```
```
CSS align-items属性将所有直接子节点上的align-self值设置为一个组。 align-self属性设置项目在其包含块中的对齐方式。
```
[align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)
```
CSS justify-content 属性定义了浏览器如何分配顺着父容器主轴的弹性元素之间及其周围的空间。
```
[justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)
```
CSS函数
width: calc(100% - 80px);
```
```
块格式化上下文（Block Formatting Context，BFC）
```
[块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
```
box-shadow 以由逗号分隔的列表来描述一个或多个阴影效果。
box-shadow: [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ]]
```
```
CSS伪类
:link, :visited, :hover, :active
```
[CSS伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover)
```
background 是一种 CSS 简写属性

可以在一次声明中定义一个或多个属性：background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size，和 background-attachment。

其中，<position>和<bg-size>要以/分开
<bg-size>横向在前，纵向在后

单张图片的背景大小可以使用以下三种方法中的一种来规定：

使用关键词 contain（嵌入）
使用关键词 cover（覆盖）
设定宽度和高度值
```
#### 写法
```
Sticky Footer
页面结构：
<div class="wrapper">
    <div class="content">< !-- 页面主体内容区域 --></div>
</div>
<div class="footer">< !-- 需要做到 Sticky Footer 效果的页脚 --></div>

方式1（relative）：
.wrapper {
  min-height: 100%;
  .content {
    padding-bottom: 32px;
  }
}
.footer {
  position: relative;
  margin-top: -32px;
}

页面结构：
<div class="wrapper">
    <div class="content">< !-- 页面主体内容区域 --></div>
    <div class="footer">< !-- 需要做到 Sticky Footer 效果的页脚 --></div>
</div>

方式2（absolute）：
.wrapper {
    position: relative;
    min-height: 100%;
    padding-bottom: 32px;
}
.footer {
    position: absolute;
    bottom: 0;
    height: 32px;
}

方式3（flex）：
.wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
.content {
    flex: 1;
}
```
```
行省略号
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

多行省略号
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

## ES6
```
ES6的类只是一个语法糖。
类支持基于原型的继承，调用父类的构造函数，生成实例，静态方法和构造函数。
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    // 调用父类的构造函数 super是父类的实例
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //调用this.update()
    super.update();
  }

  // 静态方法
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```
```js
// 实现斐波那契数列的迭代器
var fibonacci = {
    [Symbol.iterator]: function*() {
        let [prev, curr] = [0, 1];
        for (;;) { // while (true) {
            [prev, curr] = [curr, prev + curr];
            yield curr;
        }
    }
}

for (let n of fibonacci) {
     console.log(n); 
    // 当n大于1000时跳出循环
    if (n >= 1000)
        break;
}
```
```
解构赋值
// Can be used in parameter position

increment ({ commit }) {
  commit('increment')
}
替代：
increment (context) {
  context.commit('increment')
}
```
```
这里使用了 ES6 计算属性名称的语法更新给定输入名称对应的 state 值：

例如：

this.setState({
  [name]: value
});
等同 ES5:

var partialState = {};
partialState[name] = value;
this.setState(partialState);
```
#### Promises
```js
import() 会返回一个 promise，它可以和 async 函数一起使用。
一个 Promise 就是一个代表了异步操作最终完成或者失败的对象。
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})
```
```js
在旧式回调API中创建Promise
我们可以用promise构造器来包裹它。

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(10000).then(() => saySomething("10 seconds")).catch(failureCallback);
```

## ECharts
```
label.formatter 配置项

折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）

散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）

地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）

饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
```

## jQuery
#### API
```
.stop( [clearQueue ] [, jumpToEnd ] )
停止匹配元素当前正在运行的动画
[clearQueue ]：指示是否取消以列队动画；false
[, jumpToEnd ]:指示是否当前动画立即完成；false
```
#### 基本结构
```
立即执行函数表达式
(function(global, factory) {
    factory(global);
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
    };
	
    jQuery.fn = jQuery.prototype = {
        //定义了实例方法和实例数据
        //实例方法通过静态方法传入this
        each: function( callback ) {
            return jQuery.each( this, callback );
        },
    };
	
    jQuery.extend = jQuery.fn.extend = function() { //将两个或更多对象的内容合并到第一个对象，如果参数唯一将扩展jQuery的命名空间。
        //接收方法和函数并做处理然后return target
        //工具类
    }
	
    jQuery.extend({
        //定义了静态方法和静态数据然后使用jQuery.extend工具类处理
        each: function( obj, callback ) {
            //
            return obj;
        }
    });

    var init = jQuery.fn.init = function( selector, context, root ) {
        //return
    }
	
    if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
}); 
//作为构造函数创建实例
```
#### AJAX
```js
//jQuery.ajax()请求JSON数据
function useTestFun() {
  $.ajax({
    url: "/Usedefine",//获取数据的URL
    data:JSON.stringify({
      'wJsona':"kkk",        
      'wjsonb':12,
      'wjsonc':80,
    }),
    type: "POST",//HTTP请求方法
    dataType:'JSON',//获取数据执行方式
    success:function(data){
      if(data.status == 'True'){//传入为JSON对象格式
          alert('连接成功');
      }
      else{ 
          $("#labletip").show();
      }
    },
    error:function(err){
      alert('连接失败');
    }
  });
}
```

## Nodejs
```
path.resolve([...paths])
path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
```
```
__dirname
当前模块的文件夹名称。等同于 __filename 的 path.dirname() 的值。
```
#### Express
```
中间件
Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。

中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

Express 应用可使用如下几种中间件：

应用级中间件
路由级中间件
错误处理中间件
内置中间件
第三方中间件
```

## Webpack
```
CLI方式
npx webpack --config webpack.config.js
npm 脚本(npm script)
"scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack"
},
然后npm run build
```
```
代码分离
main bundle 会随着自身的新增内容的修改，而发生变化。
vendor bundle 会随着自身的 module.id 的修改，而发生变化。
manifest bundle 会因为当前包含一个新模块的引用，而发生变化。
```
#### 模块路径
```
模块将在 resolve.modules 中指定的所有目录内搜索。 你可以替换初始模块路径，此替换路径通过使用 resolve.alias 配置选项来创建一个别名。

一旦根据上述规则解析路径后，解析器(resolver)将检查路径是否指向文件或目录。如果路径指向一个文件：
1，如果路径具有文件扩展名，则被直接将文件打包。
2，否则，将使用 [resolve.extensions] 选项作为文件扩展名来解析，此选项告诉解析器在解析中能够接受哪些扩展名（例如 .js, .jsx）。

如果路径指向一个文件夹，则采取以下步骤找到具有正确扩展名的正确文件：
1，如果文件夹中包含 package.json 文件，则按照顺序查找 resolve.mainFields 配置选项中指定的字段。并且 package.json 中的第一个这样的字段确定文件路径。
2，如果 package.json 文件不存在或者 package.json 文件中的 main 字段没有返回一个有效路径，则按照顺序查找 resolve.mainFiles 配置选项中指定的文件名，看是否能在 import/require 目录下匹配到一个存在的文件名。
3，文件扩展名通过 resolve.extensions 选项采用类似的方法进行解析。

webpack 根据构建目标(build target)为这些选项提供了合理的默认配置。
```
#### 插件
```
SplitChunksPlugin

new webpack.optimize.SplitChunksPlugin({
          
}),
new webpack.optimize.RuntimeChunkPlugin({
            name: 'manifest'
}),
```

## tomcat
```
用户名和密码
/config/tomcat-users.xml

<role rolename="admin-gui"/>
<user username="tomcat" password="tomcat" roles="admin-gui"/>
```
```
Tomcat数据库连接池的配置方法
1.在Tomcat的conf/context.xml中配置
2.在Tomcat的conf/server.xml中配置
3.在Tomcat的conf/server.xml中配置虚拟目录时配置 
4.在Web项目中的META-INF目录下新建一个文件context.xml,写入配置
```
[Tomcat数据库连接池的配置](http://www.cnblogs.com/huangwentian/p/7542280.html)

## Vuejs
<!-- ![lifecycle](lifecycle.png) -->
```
一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。
 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)。组件是可复用的 Vue 实例
```
```
v-on 缩写@；v-bind 缩写:
```
```
只有当实例被创建时 data 中存在的属性才是响应式的
```
```
特殊变量 $event 传入原始的 DOM 事件
```
```
禁用特性继承
inheritAttrs: false
```
#### API
```
全局
选项/数据，DOM，生命周期钩子，资源，组合，其它
实例属性，实例方法/数据，事件，生命周期
指令
内置组件
```
```
实例属性

vm.$attrs
类型：{ [key: string]: string }
只读
详细：
包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。
```
```
实例方法/事件

vm.$emit( eventName, […args] )
参数：
{string} eventName
[...args]

触发当前实例上的事件。附加参数都会传给监听器回调。
```
#### 组件
```
在组件上使用v-model

其中v-model：在表单控件或者组件上创建双向绑定。

为了让v-model正常工作，这个组件内的 <input> 必须：
将其 value 特性绑定到一个名叫 value 的 prop 上
在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

使用：
<custom-input v-model="searchText"></custom-input>

例子：
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
model 选项可以用来避免冲突
```
#### 自定义指令
```
钩子函数

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。

unbind：只调用一次，指令与元素解绑时调用。
```
```
钩子函数参数

指令钩子函数会被传入以下参数：

el：指令所绑定的元素，可以用来直接操作 DOM 。
binding：一个对象，包含以下属性：

name：指令名，不包括 v- 前缀。
value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
```

## 微信小程序
```
条件渲染hidden
<view hidden="{{flag ? true : false}}">hidden</view>
```

## cocos creator
```
convertToNodeSpaceAR
将一个点转换到节点 (局部) 空间坐标系，这个坐标系以锚点为原点。 // 用于区分cocos2d-x

convertToWorldSpaceAR
将一个点转换到节点 (局部) 空间坐标系，这个坐标系以锚点为原点。 // 用于区分cocos2d-x
```

## PS
```
使用前景或背景色填充

D, X, Alt+ Delete 填充白色
```
#### 选区
```
选区运算

新建
添加 Shift
减去 Alt  
保留相交 Shift+ Alt
```
```
撤销选区 Ctrl+ D
```
#### 图层
```
通过Ctrl键和移动工具V选择图层

Ctrl+ Shift点击减去选择
```

## Bash
```bash
#!/bin/bash
# This script will print your username.
whoami
#!:shebang;是重定向
```
```
管道
一个程序的输出当做另一个程序的输入
管道符号：|；管道：pipe
```
#### NPM
```bash
npm list -g --depth 0
# 查看全局安装的包
```
```
如果你在 Windows 上通过 minTTY 使用 Git Bash，交互提示符并不工作。你必须通过 winpty vue.cmd create hello-world 启动这个命令。
```
```
配置文件
.npmrc
prefix=${APPDATA}\npm
registry = https://registry.npm.taobao.org
```
```
npm cache clean --force
```

## Git
#### 命令
1. 历史
```bash
git log --graph --pretty=oneline --abbrev-commit
# --graph：合并图
git reflog # 命令历史
```
2. 撤销修改
```bash
git reset <commit> # 重置HEAD
git reset --hard <commit> # 重置HEAD并回滚工作区
git reset -- <filename> # 清空缓存区
git reset --hard # 清空缓存区并回滚工作区
git checkout -- <filename> # 回滚工作区
# 使用.回滚全部
```
3. 远程仓库
```bash
git remote [-v] 查看远程仓库信息
git remote add <repository> <url> # repository为：origin或者upstream
git remote remove <repository>
git push [-u] <repository> <branch> # 推送master分支
git push <repository> --delete <branch>
git push <repository> :<branch>
# 删除远程分支
```
4. pull
```bash
git pull <repository> <branch>
# 等于git fetch和git merge
# git fetch origin
# git merge origin/master
git pull -p
# 在pull之后清理本地分支
```
5. 分支
```bash
git branch [-a] # 详情
git checkout -b <branch> # 创建分支
git checkout <branch> # 切换
git merge --no-ff -m <message> <branch> # 合并
# --no-of:禁用Fast forward
git branch -d <branch>
git remote prune <repository> # 清理本地分支
git gc # 清理本地git对象
```
6. 标签和储藏
```bash
git tag [-a <tagname>] [-m <message>] [<commit id>]
git tag # 查看标签
git show <tagname> # 查看标签信息
git push <repository> <tagname> # 推送一个本地标签
git push <repository> --tags # 推送全部未推送过的本地标签
git tag -d <tagname> # 删除一个本地标签
git push <repository> :refs/tags/<tagname> # 删除一个远程标签

git stash # 储藏变更
git stash list # 查看储藏
git stash apply [--index] [stash@{2}] # 应用储藏
# --index 重新应用被暂存的变更
git stash drop
git stash clear
# 清除储藏
```
7. 版本回退和其它
```bash
git push -f 
# 方式1：强制推送
git revert <commit> # 方式2：替代reset

git mv [-v] [-f] [-n] [-k] <source> <destination>
# 部署dist目录下的代码
git subtree push --prefix dist origin gh-pages
git config core.ignorecase false # 设置大小写敏感
--allow-unrelated-histories # 远程冲突命令
ssh-keygen -t rsa -C "rulanfenghua@163.com" # 生成SSH
# 添加SSH私钥到ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa_github
```
8.忽略已跟踪文件的变更
```
git rm --cached package-lock.json
git add package-lock.json
git commit -m "ignore package-lock.json"
```

## Sublime
#### 快捷键
1. 操作
```
Ctrl + `： 打开Sublime Text控制台（Esc退出）
Ctrl+Shift+P：打开命令面板（Esc退出）
Ctrl + K, Ctrl + B： 组合键，显示或隐藏侧栏
Alt ：光标调到菜单栏，↑↓←→ 移动光标
```
2. 编辑
```
Ctr+Shift+D：复制粘贴光标所在行
Alt+.：关闭标签
Ctrl+/：用//注释当前行。
Ctrl+Shift+/：用/**/注释。
CTRL + Enter： 在当前行下面新增一行然后跳至该行
CTRL + Shift + Enter： 在当前行上面增加一行并跳至该行
CTRL + ←/→： 进行逐词移动，
CTRL + Shift + ←/→： 进行逐词选择
CTRL + Shift + ↑/↓： 移动当前行（文件会被修改）
Ctrl+KK ：从光标处删除至行尾
Ctrl+K Backspace ：从光标处删除至行首
Ctrl+Z：撤销
Ctrl+Y：恢复撤销
Ctrl+J：合并行（已选择需要合并的多行时）
Ctrl + [： 选中内容向左缩进
Ctrl + ]： 选中内容向右缩进
Ctrl + KU : 切换大写
Ctrl + KL : 切换小写
```
3. 选择
```
Alt+F3：选中关键词后，选中所有相同的词。可以配合Ctrl+D使用。
Ctrl + D Ctrl + K Ctrl + U：Ctrl + D选择当前光标所在的词并高亮该词所有出现的位置，再次Ctrl + D，会选择该词出现的下一个位置。在多重选词的过程中，Ctrl + K会将当前选中的词进行跳过。在多重选词的过程中，Ctrl + U进行回退
Ctrl+L ：选择光标所在整行
Ctrl+X：删除光标所在行
Ctrl+Shift+M：选中当前括号内容，重复可选着括号本身
```
4. 查找
```
（如果有窗口弹出都是Esc退出弹出窗口）
Ctr+p：输入@显示容器（css或者js里面）
Ctrl + F： 调出搜索框
Ctrl + H： 调出替换框进行替换
Ctrl + Shift + H： 输入替换内容后，替换当前关键字
Ctrl + Alt + Enter： 输入替换内容后，替换所有匹配关键字。(NOTE: 注意此时如果鼠标焦点在编辑窗口中，则替换失败，将鼠标焦点调到替换框中，Ctrl + Alt + Enter才会起作用)
Ctrl + Shift + F： 开启多文件搜索&替换
Alt + C： 切换大小写敏感（Case-sensitive）模式
Alt + W： 切换整字匹配（Whole matching）模式
Alt + R： 切换正则匹配模式的开启/关闭
```
5. 跳转
```
Ctrl + P：列出当前打开的文件（或者是当前文件夹的文件），输入文件名然后 Enter 跳转至该文件，输入@symbol跳转到symbol符号所在的位置，输入#keyword跳转到keyword所在的位置，输入:n跳转到文件的第n行
Ctrl + R：列出当前文件中的符号（例如类名和函数名，但无法深入到变量名），输入符号名称 Enter 即可以跳转到该处。
会列出Markdown文件的大纲
F12： 快速跳转到当前光标所在符号的定义处（Jump to Definition）。比如当前光标所在为一个函数调用，F12会跳转至该函数的定义处。
Ctrl + G： 输入行号以跳转到指定行
Ctrl+M：跳转到括号另一半。
```
6. 窗口和Tab页
```
Ctrl + N： 在当前窗口创建一个新标签
Ctrl + Shift + N： 创建一个新窗口（该快捷键 和搜狗输入法快捷键冲突）
Ctrl + W： 关闭标签页，如果没有标签页了，则关闭该窗口
Ctrl+Shift+W：关闭所有打开文件
Ctrl + Shift + T： 恢复刚刚关闭的标签。
Ctrl + Tag：移动标签。
```
7. 屏幕
```
F11： 切换普通全屏
Shift + F11： 切换无干扰全屏
Alt + Shift + 2： 进行左右分屏
Alt + Shift + 8： 进行上下分屏
Alt + Shift + 5： 进行上下左右分屏（即分为四屏）
Ctrl + 数字键： 跳转到指定屏
Ctrl + Shift + 数字键： 将当前屏移动到指定屏
```
```
Settings Sync
gist: ddfc9d24b1dc499ba6607e8c718a710c
```
```
XFLXR-QMA88-IBBET
```
```
@ts-ignore 忽略下行
@ts-nocheck 忽略下文
```
```
下面的示例演示如何使用反射在运行时检索给定程序实体的属性信息。
using System;
using System.Reflection;

class Test
{
    static void ShowHelp(MemberInfo member) {
        HelpAttribute a = Attribute.GetCustomAttribute(member,
            typeof(HelpAttribute)) as HelpAttribute;
        if (a == null) {
            Console.WriteLine("No help for {0}", member);
        }
        else {
            Console.WriteLine("Help for {0}:", member);
            Console.WriteLine("  Url={0}, Topic={1}", a.Url, a.Topic);
        }
    }

    static void Main() {
        ShowHelp(typeof(Widget));
        ShowHelp(typeof(Widget).GetMethod("Display"));
    }
}
通过反射请求获得特定特性时，将调用特性类的构造函数（由程序源提供信息），并返回生成的特性实例。 如果是通过属性提供其他信息，那么在特性实例返回前，这些属性会设置为给定值。
```

## Axios
```
使用 application/x-www-form-urlencoded format
默认情况下，axios将JavaScript对象序列化为JSON。 要以application / x-www-form-urlencoded格式发送数据，您可以使用以下选项之一。

浏览器
在浏览器中，您可以使用URLSearchParams API，如下所示：

const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
请注意，所有浏览器都不支持URLSearchParams（请参阅caniuse.com），但可以使用polyfill（确保填充全局环境）。

或者，您可以使用qs库编码数据：

const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
或者以另一种方式（ES6），

import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
```

`/[\u4e00-\u9fa5]/`是错的，不要用二十年前的正则表达式了
`/\p{Unified_Ideograph}/u`是正确的，不需要维护，匹配所有汉字。这里`\p`是 Unicode 属性转义正则表达式。
`/\p{Ideographic}/u` 和 `/\p{Script=Han}/u` 匹配了除了汉字以外的其他一些字符，在「汉字匹配正则表达式」这个需求下，是错的。
目前 Chrome 和 Safari 支持 Unicode 属性转义正则表达式。对其他环境，使用 7.7 版本的 `@babel/env` 就可以自动根据浏览器规定打开支持。