<template>
  <div class="test-container">
      <SiteAside></SiteAside>
  </div>
</template>

<script>
import '@/styles/global.less';
import SiteAside from './';
export default {
    components:{
        SiteAside,
    }
}
</script>

<style>
.test-container{
    width: 300px;
    height: 600px;
    border: 2px solid #f0f;
    margin: 0 auto;
}
</style>