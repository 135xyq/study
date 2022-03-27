<template>
  <div id="app">
    <button v-on:click="tt='Test'">test</button>
    <button v-on:click="tt='HelloWorld'">helloWorld</button>
    <div v-bind:is="tt"></div>
    <!-- <HelloWorld>
      <template v-slot:header>
      wewe
    </template>
    <template v-slot:foot>
      wefhqwe
    </template>
    </HelloWorld>
    <Test></Test> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  },
  data(){
    return{
      user:{
        name:'xyq',
        age:21,
      },
      tt:Test
    }
  },
  created(){
    console.log(this.$root.txt)
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
