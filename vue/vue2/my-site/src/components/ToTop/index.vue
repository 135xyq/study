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
      count:0,//防止重复点击
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
      if(this.count){
        return;
      }
      // 回到顶部
      this.$bus.$emit("setMainScroll", 0);
      this.count = 1;
      this.$refs.toTopContainer.style.transform = "translateY(-300px)";
      setTimeout(() => {
        this.$refs.toTopContainer.style.transform = "none";
        this.count = 0;
      },700);
    },
  },
};
</script>

<style lang="less" scoped>
.to-top-container {
  position: fixed;
  bottom: 30px;
  right: 60px;
  z-index: 99;
  font-size: 60px;
  color: #0ff;
  cursor: pointer;
  transition: all .7s;
  animation: rotate 1.6s steps(360) infinite;
  &:hover {
    animation: none;
    color: rgb(30, 153, 96);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>