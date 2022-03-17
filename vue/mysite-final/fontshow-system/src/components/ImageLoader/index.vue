<template>
    <div class="image-loader-container">
        <img class="placeholder"  :src="placeholder" v-if = "!success">
        <img class="src"
        @load = "loadSuc"
        :src="src"
        :style="{
            opacity:loadOpacity,
            transition:`${duration}ms`,
        }">
    </div>
</template>

<script>
export default {
    data(){
        return{
            loadSuccess:false,//加载成功
            success :false,//所有的操作完成
        }
    },
    props:{
        src:{
            type:String,
            required:true
        },
        placeholder:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            default:500
        }
    },
    computed:{
        loadOpacity(){
            return this.loadSuccess?1:0;
        }
    },
    methods:{
        loadSuc(){
            this.loadSuccess = true;
            setTimeout(()=>{
                this.success = true;
                this.$emit('load');
            },this.duration);
        }
    }

}
</script>

<style scoped lang="less">
@import '~@/styles/mixin.less';
.image-loader-container{
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;
    img{
        .self-full();
        object-fit: cover;
        &.src{
            opacity: 0;
        }
        &.placeholder{
            filter: blur(2vw);
        }
    }
}
</style>