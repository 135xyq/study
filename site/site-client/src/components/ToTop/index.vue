<template>
  <div @click="handleClick" v-show="show" class="to-top-container">
    <Icon type="top"></Icon>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
export default {
  components:{
    Icon,
  },
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    handleClick() {
      // 回到顶部
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  z-index: 99;
  right: 80px;
  bottom: 50px;
  cursor: pointer;
  line-height: 50px;
  color: #0a3e0e;
  text-align: center;
  font-size: 70px;
  text-shadow: 1px 1px #000, -1px -1px #000;
}
</style>
