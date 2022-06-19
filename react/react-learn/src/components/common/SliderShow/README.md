# 轮播图组件

## 属性

```js
width: PropTypes.number.isRequired, //容器宽度
height: PropTypes.number.isRequired, //容器高度
autoPlayDuration: PropTypes.number, //自动轮播切换时间
duration: PropTypes.number, //完成切换的时间
imgSrc: PropTypes.arrayOf(PropTypes.string), //图片路径数组
isAutoPlay: PropTypes.bool, //是否自动播放
isShowDots: PropTypes.bool, //是否显示切换的小圆点
isShowArrow: PropTypes.bool, //是否显示左右切换的按钮
```

默认值

```js
width: 520,
height: 280,
autoPlayDuration: 3000,
duration: 1000,
imgSrc: [],
isAutoPlay: true,
isShowDots: true,
isShowArrow: true,
```
