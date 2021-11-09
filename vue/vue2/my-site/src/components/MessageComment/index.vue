<template>
  <div class="message-comment-container">
    <FormData v-on="$listeners"></FormData>
    <h3>
      {{ title }}
      <span>{{`(${subTitle})` }}</span>
    </h3>
    <CommentsList :list="list"></CommentsList>
    <div class="loading" v-vLoading="isListLoading"></div>
  </div>
</template>

<script>
import FormData from "./FormData";
import CommentsList from "./CommentsList";
export default {
  components: {
    FormData,
    CommentsList,
  },
  props: {
    title:{
      type:String,
      default:""
    },
    subTitle:{
      type:Number,
      default:""
    },
    list:{
      type:Array,
      default:()=>[],
    },
    isListLoading:{
      type:Boolean,
      default:false
    }
  },
};
</script>

<style lang="less" scoped>
.loading {
  position: relative;
  height: 200px;
}
</style>