<template>
  <div class="detail-container">
    <router-link :to="{name:'Layout'}">layout</router-link>
    <router-view name="Header"></router-view>
    <router-view name="Main"></router-view>
    <router-view name="Foot"></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>