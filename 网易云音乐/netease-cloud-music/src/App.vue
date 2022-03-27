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
</style>
