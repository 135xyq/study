// 评论区域
<template>
  <div class="blog-comments-container">
    <hr>
    <h2 id="comment">评论</h2>
    <MessageComment
    title="评论列表"
    :subTitle="data.total"
    :list="data.rows"
    :isListLoading = "isLoading"
    @submit="handleSubmit"></MessageComment>
  </div>
</template>

<script>
import MessageComment from "@/components/MessageComment";
import fetchData from '@/mixins/fetchData.js';
import {postComment,getComments} from'@/api/blog.js';
export default {
  mixins:[fetchData({total: 0, rows: []})],
  components: {
    MessageComment,
  },
  methods:{
    async fetchData(){
      return await getComments(this.$route.params.id,1,10);
    },
    async handleSubmit(formDate,callback){
      const resp = await postComment({
        blogId:this.$route.params.id,
        ...formDate,
      })
      const show = {
        avatar:"https://assets.leetcode-cn.com/aliyun-lc-upload/users/l2S75IqXVh/avatar_1619231728.png?x-oss-process=image%2Fformat%2Cwebp",
        content:formDate.nickcontent,
        createDate:new Date(),
        id:this.reateDate,
        nickname:formDate.nickname,
      }
      this.data.rows.unshift(show);
      this.data.total++;
      callback("评论成功");
    }
  }
};
</script>

<style>
</style>