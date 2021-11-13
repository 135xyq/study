<template>
  <div class="message-container" ref="messageContainer">
    <MessageComment 
    title="留言板"
    :subTitle="`(${data.total})`"
    :isListLoading="isLoading"
    :list="data.rows"
    @submit="handleSubmit"
    ></MessageComment>
  </div>
</template>

<script>
import MessageComment from '@/components/MessageComment';
import fetchData from '@/mixins/fetchData';
import * as setMessage from '@/api/message.js';
import mainScroll from '@/mixins/mainScroll.js';
import getMore from '@/mixins/getMore.js';
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
  },
  methods:{
    async fetchData() {
      return await setMessage.getMessage(this.page,this.limit);
    },
    async handleSubmit(data, callback) {
      const resp = await setMessage.postMessage(data);
      callback("感谢您的留言");
      this.data.rows.unshift(resp);
      this.data.total ++;
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
  box-sizing: border-box;
  scroll-behavior: smooth;
  .message-comment-container{
    width: 700px;
    margin: 0 auto;
  }
}
</style>