<template>
  <div
    class="to-top-container"
    v-show="show"
    @click="handleClick"
    ref="toTopContainer"
  >
    <Icon type="top"></Icon>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
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
      this.show = dom.scrollTop > 500;
    },
    handleClick() {
      // 回到顶部
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
.to-top-container {
  position: fixed;
  bottom: 30px;
  right: 100px;
  z-index: 99;
  font-size: 60px;
  color: #0ff;
  cursor: pointer;
  transition: all 0.7;
  animation: rotate 3.6s infinite;
  &:hover {
    animation: none;
    color:rgb(30, 153, 96);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-30deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>