<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-vLoading="isLoading">
      <ArticleDetail :article="data" v-if="data" />
      <ArticleComment v-if="!isLoading" :comments="data.Comments" />
    </div>
    <template #right>
      <div class="right-container" v-vLoading="isLoading">
        <CategoryList></CategoryList>
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getArticleDetail } from "@/api/article";
import Layout from "@/components/Layout";
import ArticleDetail from "../ArticleDetail";
// import ArticleTOC from "./components/ArticleTOC";
import ArticleComment from "../ArticleComments";
import mainScroll from "@/mixins/mainScroll.js";
import titleController  from "@/utils/controlTitle";
import CategoryList from '../CategoryList'
export default {
  components: {
    Layout,
    ArticleDetail,
    // ArticleTOC,
    ArticleComment,
    CategoryList
  },
  mixins: [fetchData(null), mainScroll("mainContainer")],
  methods: {
    async fetchData() {
      let resp = await getArticleDetail(this.$route.params.id);
      // resp = null;
      if (!resp) {
        // 文章不存在
        this.$router.push({name:'Article'});
        return;
      }
      titleController.setRouteTitle(resp.title);
      return resp;
    },
  },

  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  box-sizing: border-box;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
