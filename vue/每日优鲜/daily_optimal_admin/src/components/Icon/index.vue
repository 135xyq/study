<template>
  <i class="icon-container iconfont" :class="iconType"></i>
</template>

<script>

const iconMap = {
    userName:"icon-yonghu",
    password:"icon-mima",
    success:"icon-success",
    info:"icon-infofill",
    error:"icon-error",
    warn:"icon-warning",
    close:"icon-close",
    eye:"icon-eye-fill",
    closeEye:'icon-no_eye'
}

export default {
    props:{
        type:{
            type:String,
            required:true
        }
    },
    computed:{
        iconType(){
            return iconMap[this.type];
        }
    }

}
</script>

<style lang='less' scoped>
@import '//at.alicdn.com/t/font_3171746_muriv8v99ea.css';
</style>