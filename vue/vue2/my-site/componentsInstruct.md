
# 各组件的功能及使用方法
### Avatar 头像
#### 属性

| 参数名 | 参数介绍| 类型 | 是否必选|默认值|
|:---------:| :---------:|:---------:|:---------:|:----:|
|url | 需要传入图片地址|String|true|无|
|size| 图片大小|Number|false|150px|

<br>

### Icon 图标
#### 属性

| 参数名 | 参数介绍 | 类型 | 是否必选|默认值|
|:---------:| :----------:|:---:|:---:|:---:|
|type | 图标的类型|String|true|无|

<img src="http://mdrs.yuanjin.tech/img/20201130155542.jpg" alt="iShot2020-11-30下午03.47.09" style="zoom:33%;" />

### Pager 分页
#### 属性
|参数名|参数介绍|参数类型|是否必选|默认值|
|:----:|:----:|:----:|:----:|:----:|
|total|数据总数|Number|false|0|
|limit|每页数据|Number|false|10|
|current|当前页码|Number|false|1|
|visibleNumber|可见的页码总数|Number|false|10|

#### 事件
|事件名|介绍|参数|类型|
|:----:|:----:|:----:|:----:|
|pagerChange|页码变化|新的页码|Number|

### Empty 数据为空

#### 属性
|参数名|参数介绍|参数类型|是否必选|默认值|
|:----:|:----:|:----:|:----:|:----:|
|text|展示的文本|String|false|"无数据"|

### ImageLoader  渐进式加载图片
#### 属性
|参数名|参数介绍|参数类型|是否必选|默认值|
|:----:|:----:|:----:|:----:|:----:|
|src|正常的图片地址|String|true|null|
|placeholder|占位的图片|String|true|null|
|duration|图片加载完成过渡时间|Number|false|null|

#### 事件
|事件名|介绍|参数|类型|
|:----:|:----:|:----:|:----:|
|load|图片加载完成|null|null|

### Contact 联系方式的组件

### Menu 目录组件

### SiteAside 侧边栏组件
包括了Menu组件和Contact组件）

### RightList 右侧菜单栏
#### 属性
|参数名|参数介绍|参数类型|是否必选|默认值|
|:----:|:----:|:----:|:----:|:----:|
|list|列表内容|Array|true|null|
list:里面每一项都是一个对象，要包含name(列表的内容)，isSelect（是否选中的），children（子节点，也是一个对象）