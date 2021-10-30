<template>
  <div class="home-container" >
    <button @click="handle">点我</button>
    <div class="sf" ref="container"></div>
  </div>
</template>

<script>
export default {
  methods:{
    handle(){
      console.log(123536)
      this.$showMessage({
        content:"你好",
        container:this.$refs.container,
      })
    }
  }
}
</script>

<style>
.sf{
  width:300px;
  height: 500px;
  border: 1px solid #000;
  margin: 100px auto;
}
</style>