<template>
  <div :class="$style.container">
    <p>测试CSS module</p>
  </div>
</template>

<script>
export default {

}
</script>

<style module>
.container{
    color: red;
}
</style>