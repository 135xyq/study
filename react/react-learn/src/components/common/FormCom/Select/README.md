# 表单组件多选框

## 属性

1. datas  数组，单选框渲染数据
数组每一项为对象
```js
datas = [{
    value:'',//展示的值
    text:'',//多选框的值
}]
```

2. name  字符串 单选框的name属性


3. chooseArr 字符串 选中的数据

## 事件

1. onChange  选项改变时触发
参数一：改变后的选中的数据
参数二：name