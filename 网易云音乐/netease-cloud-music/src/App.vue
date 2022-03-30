<template>
  <div id="app">
    <Layout></Layout>
    <router-view/>
  </div>
</template>

<script>
import Layout from '@/layout';
export default {
  components:{
    Layout
  }
}
</script>

<style lang="less">
#app{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
