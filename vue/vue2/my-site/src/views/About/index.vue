<template>
  <div class="about-container" v-vLoading="loading || !iframeLoading">
    <iframe class="about-content" :src="src" frameborder="0" @load="iframeLoading = true"></iframe>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: mapState("about",{
    src:"data",
    loading:"loading"
  }),
  data(){
    return{
      iframeLoading:false,//iframe网页是否加载完毕
    }
  },
  created(){
    this.$store.dispatch('about/fetchAbout');
  }
}
</script>

<style lang="less" scoped>
.about-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .about-content{
    width: 100%;
    height: 100%;
  }
}
</style>