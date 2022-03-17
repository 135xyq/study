// 评论区域
<template>
  <div class="blog-comments-container">
    <hr />
    <h2 id="comment">评论</h2>
    <MessageComment
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    ></MessageComment>
    <div class="no-more" v-if="!isHasMore">
      <Icon type="noMore"></Icon>
      <span>没有更多了</span>
    </div>
  </div>
</template>

<script>
import MessageComment from "@/components/MessageComment";
import fetchData from "@/mixins/fetchData.js";
import { postComment, getComments } from "@/api/blog.js";
import getMore from "@/mixins/getMore.js";
import Icon from "@/components/Icon";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), getMore()],
  components: {
    MessageComment,
    Icon,
  },
  data() {
    return {
      pager: 1,
      limit: 10,
    };
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.pager, this.limit);
    },
    async handleSubmit(formDate, callback) {
      const resp = await postComment(formDate);
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功");
    },
  },
};
</script>

<style lang="less" scoped>
.no-more {
  position: relative;
  bottom: 0px;
  width: 150px;
  text-align: center;
  left: 40%;
  font-size: 30px;
  height: 30px;
  line-height: 30px;
  span {
    font-size: 20px;
  }
}
</style>