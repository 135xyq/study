<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="list" @selectChange="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from '../RightList';
export default {
  components:{
    RightList,
  },
  props:{
    list:{
      type:Array,
      required:true,
    }
  },
  methods:{
    handleSelect(item){
      location.hash = item.anchor;
    }
  }
}
</script>

<style>

</style>