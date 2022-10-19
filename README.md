# lujia-ui  -  一个vue2的UI组件

作者： jiahaoLU

## 介绍



## 开始使用

1. 安装 CSS 样式
使用本框架前，请在 CSS 中开启 border-box
````
*{box-sizing: border-box;}
*::before{box-sizing: border-box;}
*::after{box-sizing: border-box;}
````
你还需要设置默认颜色等变量（后续会改为scss变量）
````
html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
}
````

IE15及以上浏览器都支持此样式

2. 安装 lujia-ui
````
    npm install lujia-ui
````

3. 引入 lujia-ui
````
import {Button,ButtonGroup,Icon} from 'lujia-ui'
import 'lujia-ui/dist/index.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
		'g-button': Button,
		'g-button-group': ButtonGroup,
		'g-icon': Icon
  }
}
````
4. 引入svg symbols
````
<script src="//at.alicdn.com/t/c/font_3708097_9ana35dhdjp.js"></script>
````
## 文档

## 提问

## 更变记录

## 联系方式

## 贡献代码