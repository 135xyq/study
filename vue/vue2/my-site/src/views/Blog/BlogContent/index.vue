<template>
  <div class="blog-content-container">
    <h1>{{ article.title }}</h1>
    <div class="article-info">
        <span>{{`日期：${formateDate(article.createDate)}`}}</span>
        <span>{{`浏览：${article.scanNumber}`}}</span>
        <a href="">{{`评论：${article.commentNumber}`}}</a>
        <a href="" v-if="article.category">{{article.category.name}}</a>
    </div>
    <div class="aritcle-main-container markdown-body" v-html="article.htmlContent"></div>
  </div>
</template>

<script>
import formateDate from "@/utils/formateDate";
import "highlight.js/styles/base16/solarized-dark.css";
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods:{
      formateDate,
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/markdown.css';
.article-info{
    font-size:12px;
    color:@gray;
    span{
        margin-right:15px;
    }
    a{
        margin-right:15px;
    }
}
.aritcle-main-container{
  margin:2em 0;
}
</style>