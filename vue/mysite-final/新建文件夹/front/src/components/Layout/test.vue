<template>
  <div class="test-container">
      <Layout>
          <template #left>
              <div class="left">左</div>
          </template>
          <template #main>
              <div class="main">中</div>
          </template>
          <template #right>
              <div class="right">右</div>
          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from './';
export default {
    components:{
        Layout,
    }
}
</script>

<style lang="less" scoped>
.test-container{
    width:60%;
    height: 600px;
    border:1px solid;
    white-space: nowrap;
    margin: 0 auto;
    .left{
        width:200px;
        height: 100%;
        background-color:red;
    }
    .main{
        width:100%;
        height: 100%;
        background-color:yellowgreen;
    }
    .right{
        width: 200px;
        height: 100%;
        background-color:green;
    }
}
</style>