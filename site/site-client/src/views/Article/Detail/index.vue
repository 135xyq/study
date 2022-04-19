<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-vLoading="isLoading">
      <ArticleDetail :article="data" v-if="data" />
      <!-- <ArticleComment v-if="!isLoading" /> -->
    </div>
    <template #right>
      <div class="right-container" v-vLoading="isLoading">
        <!-- <ArticleTOC :toc="data.toc" v-if="data" /> -->
        目录
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
// import ArticleComment from "./components/ArticleComment";
import mainScroll from "@/mixins/mainScroll.js";
import titleController  from "@/utils/controlTitle";
export default {
  components: {
    Layout,
    ArticleDetail,
    // ArticleTOC,
    // ArticleComment,
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
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
