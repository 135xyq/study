<template>
    <div class="app-container">
        <Layout>
            <template #left>
                <div class="aside">
                    <SiteAside></SiteAside>
                </div>
            </template>
            <template #main>
                <div class="main">
                    <RouterView />
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import '@/styles/global.less';
import Layout from '@/components/Layout';
import SiteAside from '@/components/SiteAside';
export default {
    components:{
        Layout,
        SiteAside,
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container{
    .self-full(fixed);
    .aside{
        width:250px;
        height:100%;
    }
    // .main{
    //     background-color:red;
    //     height:100%;
    // }
}
</style>