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

<style lang="less">
@import "~@/styles/global.less";
.test-container{
    width:250px;
    height:400px;
    background-color:#000;
    margin:0 auto;
}
</style>