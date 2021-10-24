<template>
  <img
  class="avatar-img"
  :src = "url" 
  :style="{
      width:`${size}px`,
      height:`${size}px`}">
</template>

<script>
export default {
    props:{
        url:{
            type:String,//类型
            required:true,//必传
        },
        size:{
            type:Number,
            default:150
        }
    },
}
</script>

<style scoped>
.avatar-img{
    border-radius:50%;
    object-fit: cover;
    display: block;
}
</style>