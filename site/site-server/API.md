## 表结构

### 文章

|name|type|allowNull|description|
|:---:|:---:|:---:|:---:|
|title|String|false|文章名称|
|content|Text|false|文章内容|
|readCount|Integer|false|浏览量|
|description|String|false|文章描述|
|thumb|String|false|文章缩略图|
|CategoryId|String|false|分类ID|

### 分类

|name|type|allowNull|description|
|:---:|:---:|:---:|:---:|
|name|String|false|分类名称|


### 评论

|name|type|allowNull|description|
|:---:|:---:|:---:|:---:|
|nickName|String|false|昵称|
|content|String|false|评论内容|
|avatar|String|false|头像|


### 项目

|name|type|allowNull|description|
|:---:|:---:|:---:|:---:|
|name|String|false|项目名称|
|description|String|false|描述|
|linkUrl|String|false|项目链接|
|thumb|String|false|项目缩略图|
|github|String|true|github地址|
|order|Integer|false|排序|


### 管理员

|name|type|allowNull|description|
|:---:|:---:|:---:|:---:|
|userName|String|false|用户名|
|password|String|false|密码|
|avatar|String|false|头像|


## 数据库增删查改

### 项目 project

#### 新增一个项目 addProject

```js
addProject({
    name: '你好1',
    content: '非常好1',
    linkUrl: 'https://xyq135.com',
    description: 'good',
    thumb: '1231.jpg',
    github: 'xyq135.github.com',
    order: 1,
}).then(res => {
    console.log(res)
})
```


#### 分页查询项目 selectProject

```js
selectProject(0,10).then(res => {
    console.log(res)
})
```


#### 修改项目内容 updateProject

```js
updateProject(2, {
    thumb: '12345.jpg',
}).then(res => {
    console.log(res)
})
```

#### 根据ID查询数据 selectProjectById

```js
selectProjectById(2).then(res => {
    console.log(res)
})

```

#### 删除项目 deleteProject

```js
deleteProject(2).then(res => {
    console.log(res)
})
```

### 文章 article

#### 新增一个文章 addArticle

```js
addArticle({
    name: '你好1',
    content: '非常好1',
    linkUrl: 'https://xyq135.com',
    description: 'good',
    thumb: '1231.jpg',
    github: 'xyq135.github.com',
    order: 1,
}).then(res => {
    console.log(res)
})
```


#### 分页查询文章 selectArticle

```js
selectArticle(0,10).then(res => {
    console.log(res)
})
```


#### 修改文章内容 updateArticle

```js
updateArticle(2, {
    thumb: '12345.jpg',
}).then(res => {
    console.log(res)
})
```

#### 根据ID查询数据 selectArticleById

```js
selectArticleById(2).then(res => {
    console.log(res)
})

```

#### 删除文章 deleteArticle

```js
deleteArticle(2).then(res => {
    console.log(res)
})
```


### 评论 comment

#### 新增一个评论 addComment

```js
for (let i = 0; i < 10; i++) {
    addComment({
        nickName: 'test' + (i + 2),
        content: '非常好' + (i + 2),
        avatar: (i + 2) + '.jpg',
    }).then(res => {
        console.log(res)
    })
}
```


#### 分页查询评论 selectComment

```js
selectComment(0,10).then(res => {
    console.log(res)
})
```


#### 修改评论内容 updateComment

```js
updateComment(2, {
    thumb: '12345.jpg',
}).then(res => {
    console.log(res)
})
```

#### 根据ID查询数据 selectCommentById

```js
selectCommentById(2).then(res => {
    console.log(res)
})

```

#### 删除评论 deleteComment

```js
deleteComment(2).then(res => {
    console.log(res)
})
```




### 分类 category

#### 新增一个分类 addProject

```js
addProject({
    name: '你好1',
    content: '非常好1',
    linkUrl: 'https://xyq135.com',
    description: 'good',
    thumb: '1231.jpg',
    github: 'xyq135.github.com',
    order: 1,
}).then(res => {
    console.log(res)
})
```


#### 分页查询分类 selectCategory

```js
selectCategory(0,10).then(res => {
    console.log(res)
})
```


#### 修改分类内容 updateCategory

```js
updateCategory(2, {
    thumb: '12345.jpg',
}).then(res => {
    console.log(res)
})
```

#### 根据ID查询数据 selectCategoryById

```js
selectCategoryById(2).then(res => {
    console.log(res)
})

```

#### 删除分类 deleteCategory

```js
deleteCategory(2).then(res => {
    console.log(res)
})
```

### 管理员 admin

#### 新增管理员 addAdmin


#### 更改管理员信息  updateAdmin


#### 删除管理员  deleteAdmin


#### 登录 login

#### 查询  getAdminById



## API响应

### admin   /api/admin

#### login 管理员登录

method:POST

##### 请求参数
```js
{
    userName:''
    password:''
},
```

##### 响应


###### 成功

```json
{
    "code": 0,
    "msg": "",
    "data": {
        "id": 4,
        "userName": "xyq",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "avatar": "d:\\学习\\前端\\前端代码\\study\\site\\site-server\\config\\public\\avatar\\default.avatar.jpeg",
        "createdAt": "2022-04-14T03:42:01.000Z",
        "updatedAt": "2022-04-14T03:42:01.000Z",
        "deletedAt": null
    }
}
```


###### 失败

```json
{
    "code": 404,
    "msg": "账号或密码错误"
}
```


#### whoami 管理员信息

method:GET

##### 响应


###### 成功

```json
{
    "code": 0,
    "msg": "",
    "data": {
        "id": 4,
        "userName": "xyq"
    }
}
```


###### 失败

```json
{
    "code": 403,
    "msg": "权限不够,禁止操作！"
}
```

#### / 修改管理员信息

method:GET

##### 请求参数

```js
{
    userName:''
    password:''
}

```
##### 响应


###### 成功

```json
{
    "code": 0,
    "msg": "",
    "data": "修改成功!"
}
```


###### 失败

```json
{
    "code": 0,
    "msg": "",
    "data": "修改失败!"
}
```


















### article  /api/article

#### / 分页获取文章

method: GET

##### 请求参数

```js
page:'',//页码
limit：'',//每页多少数据

```

###### 响应

```json
{
    "code": 0,
    "msg": "",
    "data": {
        "total": 17,
        "rows": [
            {
                "id": 3,
                "title": "test2",
                "content": "非常好2",
                "readCount": 101,
                "description": "good1",
                "thumb": "2.jpg",
                "createdAt": "2022-04-13T13:50:03.000Z",
                "updatedAt": "2022-04-13T13:50:03.000Z",
                "deletedAt": null,
                "CategoryId": null
            },
            {
                "id": 4,
                "title": "test3",
                "content": "非常好3",
                "readCount": 102,
                "description": "good2",
                "thumb": "3.jpg",
                "createdAt": "2022-04-13T13:50:03.000Z",
                "updatedAt": "2022-04-13T13:50:03.000Z",
                "deletedAt": null,
                "CategoryId": null
            }
        ]
    }
}
```




#### / 新增一篇文章

method:POST

##### 请求参数

```js
title: test20
content: 非常好20
readCount: 120
description: good20
thumb: 20.jpg
```

##### 响应

```json
{
    "code": 0,
    "msg": "",
    "data": {
        "id": 18,
        "title": " test20",
        "content": " 非常好20",
        "readCount": " 120",
        "description": " good20",
        "thumb": " 20.jpg",
        "updatedAt": "2022-04-14T07:53:43.209Z",
        "createdAt": "2022-04-14T07:53:43.209Z"
    }
}
```

#### / 修改文章

method:PUT

##### 请求参数

```js
title: test20
content: 非常好20
readCount: 120
description: good20
thumb: 20.jpg
```

##### 响应

###### 成功


```json
{
    "code": 0,
    "msg": "",
    "data": "修改成功"
}
```
###### 失败


```json
{
    "code": 0,
    "msg": "",
    "data": "修改失败"
}
```
