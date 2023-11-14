<template>
  <div class="nav-menus-container">
    <el-row>
      <el-col :span="10"><LeftPlace></LeftPlace></el-col>
      <el-col :span="14"><RightNav></RightNav></el-col>
    </el-row>
  </div>
</template>

<script>
import LeftPlace from "./LeftPlace";
import RightNav from "./RightNav";
export default {
  components: {
    LeftPlace,
    RightNav,
  },
};
</script>

<style lang="less" scoped>
.nav-menus-container{
	width: 100%;
  background-color: #f8f8f8;
  height: 40px;
  line-height: 40px;
  margin: 0px;
  padding: 0px;
}
</style>
