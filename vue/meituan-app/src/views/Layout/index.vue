<template>
  <el-container>
    <el-header class="header" style="height:162px">
      <SelfHeader></SelfHeader>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <self-Footer></self-Footer>
    </el-footer>
  </el-container>
</template>

<script>
import SelfHeader from "@/components/Header";
import SelfFooter from "@/components/Footer";
export default {
  components: {
    SelfHeader,
    SelfFooter,
  },
};
</script>

<style lang="less" scoped>
.header{
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
