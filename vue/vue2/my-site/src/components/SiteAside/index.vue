<template>
  <div class="site-aside-container">
    <Avatar :url="urls"/>
    <h1 class="title">筱</h1>
    <Menu/>
    <Contact />
    <footer>筱的专属</footer>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Menu from './Menu';
import Contact from './Contact';
import urls from '@/assets/images/head.jpeg';
export default {
    data(){
        return{
            urls:urls
        }
    },
    components:{
        Avatar,
        Menu,
        Contact,
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.site-aside-container{
    width:100%;
    height: 100%;
    background-color:@dark;
    padding: 15px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    .avatar-container{
        margin: 0 auto;
    }
    .title{
        font-size: 1.2em;
        color: #fff;
        text-align: center;
        font-weight: normal;
    }
    footer {
        text-align: center;
        font-size: 12px;
    }
}


</style>