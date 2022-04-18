<template>
  <div class="blog-category-container" v-vLoading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "../RightList";
import fetchData from "@/mixins/fetchData.js";
import { getCategory } from "@/api/category.js";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const result = [
        { name: "全部", id: -1,},
        ...this.data,
      ];
      return result.map((it) => ({
        ...it,
        isSelect: it.id == this.categoryId,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getCategory();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id === -1) {
        this.$router.push({
          name: "Article",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryArticle",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
