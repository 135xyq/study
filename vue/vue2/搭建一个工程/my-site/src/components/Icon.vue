<template>
  <i class="iconfont" :class="iconClass"></i>
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
@import "//at.alicdn.com/t/font_2889319_jqfpmh0raqg.css";
</style>