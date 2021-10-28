<template>
  <div class="test-container">
      <Menu></Menu>
  </div>
</template>

<script>
import Menu from './';
export default {
    components:{
        Menu,
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.test-container{
    width:300px;
    height:400px;
    background-color:#000;
}
</style>