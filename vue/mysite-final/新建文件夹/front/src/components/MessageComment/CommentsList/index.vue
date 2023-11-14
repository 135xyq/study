<template>
  <ul class="comment-list">
    <li v-for="item in list" :key="item.id?item.id:Math.random()">
      <Avatar :url="item.avatar" :size="44"></Avatar>
      <div class="data">
        <div class="name">{{item.nickname}}</div>
        <div class="content">{{item.content}} </div>
        <div class="time">{{formateDate(item.createDate,true)}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import formateDate from '@/utils/formateDate'
export default {
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    formateDate,
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
li {
  display: flex;
  border-bottom: 1px solid lighten(@gray, 20%);
  padding: 15px 0;
  .data {
    flex: 1 1 auto;
    position: relative;
  }
}

.avatar-container {
  margin-right: 15px;
}

.name {
  color: darken(@success, 10%);
  margin-bottom: 10px;
}

.content {
  font-size: 14px;
}

.time{
    font-size:12px;
    color:@gray;
    position:absolute;
    top: 0;
    right: 0;
}
</style>