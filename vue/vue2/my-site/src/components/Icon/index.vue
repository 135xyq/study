<template>
  <i class="iconfont icon-container" :class="iconClass"></i>
</template>

<script>
// 图标类型与单词的映射
const iconMap = {
    home: "icon-zhuye",
    success: "icon-zhengque",
    error: "icon-cuowutishi",
    close: "icon-guanbi",
    warn: "icon-jinggao",
    info: "icon-xinxi",
    blog: "icon-blog",
    code: "icon-code",
    about: "icon-about",
    weixin: "icon-weixin",
    mail: "icon-email",
    github: "icon-github",
    qq: "icon-QQ-circle-fill",
    arrowUp: "icon-xiangshang",
    arrowDown: "icon-iconfonticonfonti2",
    empty: "icon-empty",
    chat: "icon-liuyan",
    top:"icon-huojian",
    noMore:"icon-meiyougengduoshujuliao"
}
export default {
    props:{
        type:{
            type:String,
            required:true,
        }
    },
    computed:{
        iconClass(){
            return iconMap[this.type];
        }
    }
};
</script>

<style>
@import "//at.alicdn.com/t/font_2889319_0j2iq9bdnble.css";
.icon-container{
    font-size:inherit;
}
</style>