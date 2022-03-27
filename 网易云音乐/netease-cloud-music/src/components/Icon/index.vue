<template>
  <div class="icon-container">
      <i class="iconfont" :class="iconType"></i>
  </div>
</template>

<script>
import iconObj from '@/config/icons';
export default {
    props:{
        type:{
            type:String,
            required:true,
        },
    },
    computed:{
        iconType(){
            return iconObj[this.type];
        }
    }

}
</script>

<style lang="less" scoped>
@import '//at.alicdn.com/t/font_3281760_a2p17olguko.css';
</style>