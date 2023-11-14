<template>
  <div class="home-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components:{
  },
}
</script>
<style scoped lang="less">
.home-container{
  background: #F5F5F5;
  height: 100%;
}
</style>
