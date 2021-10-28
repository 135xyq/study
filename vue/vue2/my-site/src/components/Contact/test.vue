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
    height: 400px;
    background-color:#000;
    padding-top:200px;
    margin:100px auto;
    position: relative;
}
</style>