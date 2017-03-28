### React 中使用 wowjs 让页面元素动起来
---
[官网](http://mynameismatthieu.com/WOW/)

[github文档](https://github.com/matthieua/WOW)

> wowjs要个animate.css 配合使用

- 安装 wowjs

```
npm install --save-dev wowjs

```

- 在index.js 中 引入 wowjs 和animate.css
```js
import wow from 'wowjs';
import 'animate.css';

```

- 初始wow对象

```js
new wow.WOW().init();

```

- 给需要运动的DOM元素 添加 class  wow  和  动画名称


> data-wow-duration 动画持续时间
  data-wow-delay    每个动画延迟时间

```html
<section className="wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.3s"></section>
```
