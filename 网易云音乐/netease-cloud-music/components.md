## 组件

## Icon

icon图标

### 属性

|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|type|String|图标类型|null|true|

### 属性列表
|参数名|对应icon|
|:---:|:---:|
|   zanting| icon-zanting|
|   jingyin| icon-jingyin|
|   youjiantou| icon-youjiantou|
|   suoding| icon-suoding|
|   sousuo| icon-sousuoxiao|
|   danquxunhuan| icon-danquxunhuan|
|   xunhuanbofang| icon-xunhuan|
|   erji| icon-erji-|
|   you| icon-you|
|   shengyin| icon-shengyin|
|   bofangliebiao| icon-wj-bflb|
|   bofang| icon-bofanganniu|
|   shoucang| icon-24gl-folderPlus|
|   shangyishou| icon-shangyishou|
|   xiayishou| icon-xiayishou|
|   zuo| icon-zuo|
|   xiazai| icon-download|
|   fenxiang| icon-share|
|   suijibofang| icon-xunhuanbofang|
|   huazhonghua| icon-huazhonghua|
|    gedan |icon-gedan|
|    zhuanji |icon-zhuanji|
|    danqu| icon-yinle|
|   geshou|icon-ren-danren|
|    weixin| icon-weixin|
|    qq| icon-ic_tencent_qq|
|    wangyiyouxiang| icon-WANGYI|
|    weibo| icon-weibo|
|    dengji| |icon-dengji|
|    tuichu| |icon-tuichu|
|    shimingrenzheng| |icon-zhuanjifenshimingrenzheng|
|    viphuiyuan| |icon-VIPhuiyuan|
|    xiaoxi| |icon-xiaoxi|
|    shezhi| |icon-gerenshezhi|## Avatar

### 属性

|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|url|String|图片链接|null|true|
|size|Number|图片尺寸|50|false|
|round|Boolean|图片是否为圆形|null|false|


## SlideShow

轮播图(一半轮播，一半固定)

### 属性

|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|bannerInfo|Array|轮播信息|null|true|
|fixedImg|String|固定图片地址|u本地图片url|false|


## PlayListCard

歌单封面

### 属性


|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|img|String|图片|null|true|
|listened|Number|播放次数|null|true|
|size|Number|卡片的尺寸|140|false|
|tipTitle|String|鼠标移入提示文字|null|true|

### 事件

#### onHandlePlay
点击播放触发的事件

参数一：true | false 播放 | 暂停


## TypeHead

分类的头部，更多

### 属性


|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|title|String|标题|null|true|
|showMore|Boolean|是否显示更多|true|false|
|path|String|点击更多要跳转的地址|Playlist|false|