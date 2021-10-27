<template>
  <div class="test-container">
      <Contact/>
  </div>
</template>

<script>
import Contact from "./";
export default {
    components:{
        Contact,
    }
}
</script>

<style lang="less">
@import '~@/styles/global.less';
.test-container{
    width:300px;
    height: 300px;
    border:1px solid #000;
    background-color:#000;
    margin:100px auto;
    position: relative;
}
</style>