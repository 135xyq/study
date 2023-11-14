<template>
  <div class="app">
      <Empty></Empty>
  </div>
</template>

<script>
import Empty from './';
export default {
    components:{
        Empty,
    },
    data(){
        return{
            test:"测试Empty组件"
        }
    }
}
</script>

<style>
    .app{
        width: 500px;
        height: 200px;
        border: 1px solid #000;
        position: relative;
    }
</style>