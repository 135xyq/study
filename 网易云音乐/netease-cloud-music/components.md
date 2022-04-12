# 组件也页面布局

## 组件

### Icon

icon图标

#### 属性

|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|type|String|图标类型|null|true|

#### 属性列表
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
|    tuichu|icon-tuichu|
|    shimingrenzheng| icon-zhuanjifenshimingrenzheng|
|    viphuiyuan| icon-VIPhuiyuan|
|    xiaoxi| icon-xiaoxi|
|    shezhi| icon-gerenshezhi|
|    shang| icon-zhixiangshangshangjiantou|
|    xia| icon-xiangxiajiantou|
|    xiazai1|icon-xiazai|
|    pinglun|icon-xiaoxi1|
|    jia| icon-jia|
|    shijian |icon-shijian|
|    bofang1|icon-bofang|
|    xiala|icon-xiala|
|    dianzhan |icon-dianzan|
|    shanchu |icon-shanchu|

## Avatar

头像
#### 属性

|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|url|String|图片链接|null|true|
|size|Number|图片尺寸|50|false|
|round|Boolean|图片是否为圆形|null|false|


### SlideShow

轮播图(一半轮播，一半固定)

#### 属性

|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|bannerInfo|Array|轮播信息|null|true|
|fixedImg|String|固定图片地址|u本地图片url|false|


### PlayListCard

歌单封面

#### 属性


|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|img|String|图片|null|true|
|listened|Number|播放次数|null|true|
|size|Number|卡片的尺寸|140|false|
|tipTitle|String|鼠标移入提示文字|null|true|
|id|Number|歌单ID|null|true|

#### 事件

##### onHandlePlay
点击播放触发的事件

参数一：ID    歌单ID 


### TypeHead

分类的头部，更多

#### 属性


|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|title|String|标题|null|true|
|showMore|Boolean|是否显示更多|true|false|
|path|String|点击更多要跳转的地址|Playlist|false|
|routerPath|String|标题对应的地址|''|false|

### AlbumListCard

#### 属性
|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|width|Number|宽度|null|true|
|height|Number|高度|null|true|
|imgUrl|String|图片地址|null|true|
|title|String|唱片名称|null|true|
|subTitle|String|歌手名字|null|true|
|path|String|唱片地址|/album|true|
|artistPath|String|歌手名字|/artist|true|
|size|Number|图片尺寸|100|true|
|id|Number|唱片id|null|true|
|artistId|Number|歌手ID|null|true|

#### 事件

onPlayAlbum

点击播放触发

参数一为：唱片的地址


### SlideShowPlus

另一种轮播图
#### 属性

|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|data|Array|唱片信息|null|true|


### TopListCard

推荐页热榜的头部卡片

|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|title|String|标题|null|true|
|imgUrl|String|图片|null|true|
|path|String|歌单地址|null|true|


### TopListTopListCard

排行榜的分类卡片

#### 属性
|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|title|String|标题|null|true|
|imgUrl|String|图片|null|true|
|description|String|描述信息|null|true|


### Page

分页组件

#### 属性

|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|total|Number|总数量|null|true|
|limit|Number|每页显示数量|35|false|
|showCount|Number|显示多少个页码|10|false|

#### 时间

pageChange:换页触发

参数为当前页码

### Comment

评论
		avatarUrl: {
			type: String,
			required: true,
		},
		nickName: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		time: {
			type: Number,
			required: true,
		},
		like: {
			type: Number,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},

|name|type|description|default|required|
|:---:|:---:|:---:|:---:|:---:|
|avatarUrl|String|头像|null|true|
|nickName|String|昵称|null|true|
|content|String|评论内容|null|true|
|id|String|用户ID|null|true|
|time|Number|时间戳|null|true|
|like|Number|评论电站数|null|true|

## Layout


### Home

首页


#### Album

新碟上架

#### Artist

歌手分类


#### Discover

推荐

##### Content

内容区

###### HotDiscover

热门推荐


###### PersonalDiscover

个性化推荐


###### NewAlbum

新碟上架

###### Topist

榜单

###### User

右侧的用户和推荐歌手

PersonInfo
用户信息



#### Djradio

主播电台

#### Playlist

歌单封面

##### PlsyLIstType

歌单分类

#### Toplist

排行榜


### Member

VIP会员

### Msg

消息

### User

个人中心

#### Home

个人中心主页

#### Level

等级

#### Update

设置
