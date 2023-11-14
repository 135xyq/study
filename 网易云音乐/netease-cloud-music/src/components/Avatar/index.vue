<template>
  <div class="avatar-container">
      <img :src="url" :class="{'img-round':round}" :style="{width:size+'px',height:size+'px'}">
  </div>
</template>

<script>
export default {
    props:{
        url:{
            type:String,
            required:true
        },
        size:{
            type:Number,
            default:50,
        },
        round:{
            type:Boolean,
            default:false,
        }
    }

}
</script>

<style lang="less" scoped>
img{
    object-fit: cover;
}
.img-round{
    border-radius: 50%;
}

</style>