// 单个轮播图内容
<template>
  <div class="carousel-item-container" 
  @mousemove="handleMouseMove"
  @mouseleave="handleMouseLeave"
  ref="container">
    <div class="item-container" ref="inner" :style="{
      transform:imgPosition
    }">
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
      containerSize:null,//外层容器的尺寸
      innerSize:null,//内存容器的尺寸
      mouseX:0,//鼠标的横坐标
      mouseY:0,//鼠标的纵坐标
    }
  },
  computed:{
    imgPosition(){
      if(!this.containerSize||!this.innerSize){
        return;
      }
      const outsizeWidth =this.innerSize.width -  this.containerSize.width;
      const outsizeHeight =this.innerSize.height -  this.containerSize.height;
      const left = -(outsizeWidth /  this.innerSize.width) * this.mouseX;
      const top = -(outsizeHeight /  this.innerSize.height) * this.mouseY;
      return `translate(${left}px, ${top}px)`;
    },
    center(){
      return{
        x:this.innerSize.width / 2,
        y:this.innerSize.height / 2,
      }
    }
  },
  mounted(){
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.getResize();
    window.addEventListener("resize",this.getResize);
  },
  destroyed(){
    window.removeEventListener("resize",this.getResize);
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
    },
    // 鼠标移动事件
    handleMouseMove(e){
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.x - rect.left;
      this.mouseY = e.y - rect.top;
    },
    handleMouseLeave(){
      
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
      console.log(this.mouseX, this.mouseY);
    },
    // 获取尺寸
    getResize(){
      // 获取完成容器的尺寸
      this.containerSize= {
        width : this.$refs.container.clientWidth,
        height : this.$refs.container.clientHeight,
      }
      // console.log(this.containerSize.width,this.containerSize.height)

      // 获取内层图片的宽度
      this.innerSize={
        width : this.$refs.inner.clientWidth,
        height : this.$refs.inner.clientHeight,
      } 
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
  overflow: hidden;
  .item-container{
    width: 110%;
    height: 110%;
    position:absolute;
    transition:0.3s;
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