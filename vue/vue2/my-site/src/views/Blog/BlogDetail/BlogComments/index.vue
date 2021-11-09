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
  data(){
    return{
      pager:1,
      limit:10
    }
  },
  computed:{
    isHasMore(){
      return this.data.rows.length < this.data.total;
    }
  },
  created(){
    this.$bus.$on("mainScroll",this.handleScroll);
  },
  destroyed(){
    this.$bus.$off("mainScroll",this.handleScroll);
  },
  methods:{
    async fetchData(){
      return await getComments(this.$route.params.id,this.pager,this.limit);
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
    },
    // 评论加载下一页
    async showMore(){
      // 评论都已经加载完毕
      if(!this.isHasMore){
        return;
      }
      this.isLoading = true;
      this.pager++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
        this.isLoading = false;
    },
    handleScroll(dom){
      if(this.isLoading || !dom){
        // 如果dom不存在或正在加载则直接返回
        return;
      }
      const ranger = 100;//波动的范围
      const desc = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight );
      if(desc <= ranger){
        this.showMore();
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>