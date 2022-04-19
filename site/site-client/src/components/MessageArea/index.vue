<template>
  <div class="message-area-container">
    <hr>
    <div class="content">
      评论</div>
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-vLoading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
.content{
  font-size: 20px;
font-weight: bold;
margin-bottom: 20px;
}
</style>
