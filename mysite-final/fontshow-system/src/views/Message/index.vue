<template>
  <div class="message-container" ref="messageContainer">
    <MessageComment 
    title="留言板"
    :subTitle="`(${data.total})`"
    :isListLoading="isLoading"
    :list="data.rows"
    @submit="handleSubmit"
    ></MessageComment>
    <div class="no-more" v-if="!isHasMore">
      <Icon type="noMore"></Icon>
      <span>没有更多了</span>
    </div>
  </div>
</template>

<script>
import MessageComment from '@/components/MessageComment';
import fetchData from '@/mixins/fetchData';
import * as setMessage from '@/api/message.js';
import mainScroll from '@/mixins/mainScroll.js';
import getMore from '@/mixins/getMore.js';
import Icon from '@/components/Icon'
export default {
  mixins:[fetchData({ total: 0, rows: [] }),mainScroll('messageContainer'),getMore()],
  data(){
    return {
      page: 1,
      limit:10,
    }
  },
  components:{
    MessageComment,
    Icon
  },
  methods:{
    async fetchData() {
      return await setMessage.getMessage(this.page,this.limit);
    },
    async handleSubmit(data, callback) {
      const resp = await setMessage.postMessage(data);
      callback("感谢您的留言");
      this.data.rows.unshift(resp);
    },
  }

}
</script>

<style lang="less" scoped>
.message-container{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  position: relative;
  box-sizing: border-box;
  scroll-behavior: smooth;
  .message-comment-container{
    width: 700px;
    margin: 0 auto;
  }
  .no-more{
    position:relative;
    bottom: 0px;
    width:150px;
    text-align: center;
    left:40%;
    font-size: 30px;
    height: 30px;
    line-height: 30px;
    span{
      font-size: 20px;
    }
  }
}
</style>