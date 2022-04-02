<template>
  <div id="app">
    <Layout></Layout>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import Layout from '@/layout';
import Foot from '@/layout/Foot'
export default {
  components:{
    Layout,
    Foot
  }
}
</script>

<style lang="less">
#app{
  width: 100%;
  height: 100%;
}
</style>
