<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <Avatar :url="myBaseUrl + item.avatar" :size="44" />
      <div class="data">
        <div class="nickname">{{ item.nickName }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ formateDate(item.createdAt) }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import formateDate  from "@/utils/formateDate";
import {myBaseUrl} from "@/config.js";
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
  methods: {
    formateDate,
  },
  data(){
    return{
      myBaseUrl
    }
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  border-bottom: 1px solid lighten(@gray, 20%);
  padding: 15px 0;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: darken(@success, 10%);
  margin-bottom: 10px;
}
.content {
  font-size: 14px;
}
.data {
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: @gray;
}
</style>
