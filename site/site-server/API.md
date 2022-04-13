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