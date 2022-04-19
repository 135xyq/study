<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${comments.length})`"
      :list="comments"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import {postComment } from "@/api/comment.js";
export default {
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  props:['comments'],
//   created() {
//     this.$bus.$on("mainScroll", this.handleScroll);
//   },
//   destroyed() {
//     this.$bus.$off("mainScroll", this.handleScroll);
//   },
  computed: {
    // hasMore() {
    //   return this.data.rows.length < this.data.total;
    // },
  },
  methods: {
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        ArticleId: this.$route.params.id,
        ...formData,
      });
      this.comments.unshift(resp);
      callback("评论成功"); // 告诉子组件，我这边处理完了，你继续
    },
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>
