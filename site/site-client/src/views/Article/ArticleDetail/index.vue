<template>
  <div class="article-detail-container" v-if="article.id">
    <h1>{{ article.title }}</h1>
    <div class="aside">
      <span>日期: {{ formateDate(article.createdAt) }}</span>
      <span>浏览: {{ article.readCount }}</span>
      <a href="#data-form-container">评论: {{ article.Comments.length }}</a>
      <RouterLink
        :to="{
          name: 'CategoryArticle',
          params: {
            categoryId: article.CategoryId,
          },
        }"
      >
        {{ article.Category.name }}
      </RouterLink>
    </div>
    <div v-html="contentHtml" class="markdown-body"></div>
  </div>
</template>

<script>
import formateDate  from "@/utils/formateDate";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
import {marked} from 'marked'
import tran from "@/utils/getToc";
import toc from "markdown-toc";
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data(){
    return{
    tocs:[],//目录
    }
  },
  methods: {
    formateDate,
  },
  computed:{
    contentHtml(){
      if(this.article.content){
        const md = marked(this.article.content);
        return md;
      }
      return null;
    }
  },
  // async created(){
  //   if(this.article.content){
  //    console.log(toc(this.article.content).json);
  //   }
  // }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 2em 0;
}
</style>
