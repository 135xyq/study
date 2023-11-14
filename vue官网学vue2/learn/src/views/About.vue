<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="onHandleToHome">首页</button>
  </div>
</template>

<script>
export default {
  methods: {
    onHandleToHome() {
      this.$router.push({name: 'Home', query: {a: '1', b: '2'}});
    }
  }
};
</script>
