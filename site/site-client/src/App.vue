<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <router-view/>
      </template>
    </Layout>
    <ToTop></ToTop>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside"
import ToTop from '@/components/ToTop';
export default {
  components:{
    Layout,
    SiteAside,
    ToTop
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container{
    .self-full(fixed);
    .aside{
        width:250px;
        height:100%;
    }
    .main{
        // background-color:red;
        height:100%;
    }
}
</style>
