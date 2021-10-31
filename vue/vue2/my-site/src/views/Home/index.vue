<template>
  <div class="home-container" ref="container" @wheel = "handleWheel">
    <ul class="carousel-container" :style="{
        marginTop,
      }"
      @transitionend = "handleTransitionEnd">
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :data="item"></CarouselItem>
      </li>
    </ul>
    <div class="icon icon-up"
    v-show="index >= 1"
    @click="switchTo(index - 1)">
      <Icon type="arrowUp"></Icon>
    </div>
    <div class="icon icon-down"
    v-show="index < banners.length - 1"
    @click = "switchTo(index + 1)">
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="btns">
      <li v-for="(item,i) in banners" 
      :key="item.id" 
      :class="{active:index === i}"
      @click="switchTo(i)"></li>
    </ul>
  </div>
</template>

<script>
import {getBanner} from '@/api/banner';
import CarouselItem from './CarouselItem';
import Icon from '@/components/Icon';
export default {
  components:{
    Icon,
    CarouselItem,
  },
  data(){
    return{
      banners:[],
      index:0,//当前轮播的下标
      clientHeight:0,//外层容器的高度
      switching :false,//是否正在切换轮播图
    }
  },
  computed:{
    marginTop(){
      return -this.index * this.clientHeight  + "px";
    }
  },
  async created(){
    this.banners = await getBanner();
    console.log(this.banners)
  },
  mounted(){
    this.clientHeight = this.$refs.container.clientHeight;
    window.addEventListener('resize', this.handleSize);
  },
  destroyed(){
    window.removeEventListener('resize', this.handleSize);
  },
  methods: {
    // 翻到某一页
    switchTo(i){
      this.index = i;
    },
    // 鼠标滚动事件
    handleWheel(e){
      if(this.switching){
        return;
      }
      if(e.deltaY < -5 && this.index>0){
        this.index--;
        this.switching = true;
      }else if(e.deltaY > 5 && this.index < this.banners.length -1 ){
        this.index++;
        this.switching = true;
      }
    },
    handleTransitionEnd(){
      this.switching = false;
    },
    // 监听浏览器窗口大小变化
    handleSize(){
      this.clientHeight = this.$refs.container.clientHeight;
    }

  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@size-fill:100%;
@grap:10px;//定位上下的距离
@jumpDistance:10px;//上下活动动画距离
@asideBtnSize:8px;
.home-container{
  width: @size-fill;
  height: @size-fill;
  position: relative;
  overflow: hidden;
  .carousel-container{
    width:@size-fill;
    height: @size-fill;
    transition:.4s;
    li{
      width: @size-fill;
      height: @size-fill;
    }
  }
}
.icon{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  opacity:0.1;
  &:hover{
    opacity: .8;
  }
  &.icon-up{
    top: @grap;
    animation:jump-up 2s infinite;
  }
  &.icon-down{
    bottom: @grap;
    animation:jump-down 2s infinite;
  }
}

@keyframes jump-up{
  0%{
    transform: translateY(@jumpDistance);
  }
  50%{
    transform:translateY(-@jumpDistance);
  }
  100%{
    transform:translateY(@jumpDistance)
  }
}

@keyframes jump-down{
  0%{
    transform: translateY(-@jumpDistance);
  }
  50%{
    transform:translateY(@jumpDistance);
  }
  100%{
    transform:translateY(-@jumpDistance)
  }
}

.btns{
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  li{
    width:@asideBtnSize;
    height:@asideBtnSize;
    margin:5px 0;
    border-radius:50%;
    background-color:@words;
    border: 1px solid #fff;
    box-sizing:border-box;
    cursor: pointer;
    &.active{
      background-color: #fff;
    }
  }
}
</style>