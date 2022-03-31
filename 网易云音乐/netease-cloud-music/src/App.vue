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
  width: 100%;
  height: 100%;
}
</style>
