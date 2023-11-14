<template>
  <div class="layout-container">
    <div class="leftMenus">
      <SiteNav></SiteNav>
    </div>
    <div class="header">
      <Header></Header>
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SiteNav from "./SiteNav";
import Header from "./Header";
export default {
  components: {
    SiteNav,
    Header,
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.layout-container {
  .self-full();
}
.leftMenus {
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}
.header {
  //   width: calc(100vw - 200px);
  position: fixed;
  width: 100%;
  padding: 10px 10px;
  left: 200px;
  top: 0px;
  height: 40px;
  border-bottom: 1px solid #ccc;
}
.main-container {
  width: calc(100% - 200px);
  height: calc(100% - 61px);
  position: absolute;
  top: 61px;
  left: 200px;
  overflow: hidden;
  overflow-y: scroll;
}
</style>