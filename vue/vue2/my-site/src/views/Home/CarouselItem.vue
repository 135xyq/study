// 单个轮播图内容
<template>
  <div class="carousel-item-container">
    <div class="item-container">
      <ImageLoader :src="data.bigImg" :placeholder="data.midImg" @load="showWords"></ImageLoader>
    </div>
    <div class="title" ref="title">{{data.title}}</div>
    <div class="desc" ref="desc">{{data.description}}</div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader';
export default {
  props:["data"],
  components:{
    ImageLoader,
  },
  data(){
    return{
      titleWidth:0,//标题的宽度
      descWidth:0,//描述文字的 宽度
    }
  },
  mounted(){
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
  },
  methods:{
    showWords(){
      // 显示标题
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;// 强行渲染一遍
      this.$refs.title.style.transition = '2s';
      this.$refs.title.style.width = this.titleWidth + "px";

      // 显示描述
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;// 强行渲染一遍
      this.$refs.desc.style.transition = '4s 2s';
      this.$refs.desc.style.width = this.descWidth + "px";
    }
  }
}
</script>

<style lang="less" scoped>
.carousel-item-container{
  width: 100%;
  height: 100%;
  // background-color: #2d2d2d;
  color: #fff;
  position: relative;
  user-select: none;
  .item-container{
    width: 100%;
    height: 100%;
  }
  .title,
  .desc{
    position: absolute;
    left: 5%;
    letter-spacing: .6rem;
    text-shadow: 0 1px  0 rgba(0, 0, 0,.5), 0 -1px  0 rgba(0, 0, 0,.5),
    -1px 0 0 rgba(0, 0, 0,.5), 1px 0  0 rgba(0, 0, 0,.5);
    opacity: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  .title{
    top: calc(70% - 40px);
    font-size: 30px;
  }
  .desc{
    top: calc(70% + 20px);
    font-size: 20px;
  }
}
</style>