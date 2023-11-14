<template>
  <div class="index-container">
    <div class="top-header-blank"></div>
    <div class="main">
      <div class="left-nav">
        <Nav></Nav>
      </div>
      <div class="home-header">
        <a
          href="#"
          class="link-item"
          v-for="(item, index) in homeHeaderLinks"
          :key="index"
          >{{ item }}</a
        >
      </div>
      <div class="center-banner">
        <Banner></Banner>
      </div>
      <div class="right-user">
        <User></User>
      </div>
    </div>
    <div class="recommend">
      <Recommend></Recommend>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import User from "@/components/User";
import Recommend from "./Recommend";
const homeHeaderLinks = [
  "美团外卖",
  "猫眼电影",
  "美团酒店",
  "民宿/公寓",
  "商家入驻",
  "美团公益",
];
export default {
  components: {
    Nav,
    Banner,
    User,
    Recommend
  },
  data() {
    return {
      homeHeaderLinks,
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.index-container {
  position: relative;
  .top-header-blank {
    height: 50px;
    width: 100%;
    background: #fff;
  }
  .main {
    display: flex;
  }
  .left-nav {
    position: relative;
    width: 230px;
    height: 475px;
  }
  .center-banner {
    margin-left: 164px;
  }
  .home-header {
    position: absolute;
    top: 20px;
    left: 420px;
    z-index: 998;
    a {
      color: #222;
      font-weight: 700;
      font-size: 16px;
      margin: 0 20px;
      cursor: pointer;
      position: relative;
      &:hover {
        color: @linkHoverColor;
      }
    }
  }
  .right-user {
    margin-left: 164px;
  }
  .recommend{
    width: 1190px;
    height: 733px;
    margin-top: 40px;
    margin: 0 auto;
  }
}
</style>
