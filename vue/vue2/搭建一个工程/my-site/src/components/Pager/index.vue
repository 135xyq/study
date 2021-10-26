<template>
  <div class="pager-container" v-if= "pagerNumber > 1">
      <a :class="{disabled:current === 1}" @click="handleClick(1)">|&lt;&lt;</a>
      <a :class="{disabled:current === 1}" @click="handleClick(current - 1)">&lt;&lt;</a>

      <a v-for="(n,i) in number" :key="i"
      :class="{active:current === n}"
      @click="handleClick(n)">{{n}}</a>

      <a :class="{disabled:current === pagerNumber}" @click="handleClick(current + 1)">&gt;&gt;</a>
      <a :class="{disabled:current === pagerNumber}" @click="handleClick(pagerNumber)">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
    props:{
        total:{
            // 总数据量
            type:Number,
            default:0
        },
        limit:{
            // 每页展示的数量
            type:Number,
            default:10
        },
        visibleNumber:{
            //可见的页面数量
            type:Number,
            default:10
        },
        current:{
            // 当前页码
            type:Number,
            default:1
        }
    },
    computed:{
        pagerNumber(){
            // 页码的数量
            return Math.ceil(this.total/this.limit);
        },
        visiblePagerMin(){
            // 页码可见区域的最小值
            let min = this.current - Math.floor(this.visibleNumber / 2);
            if(min < 1){
                min = 1;
            }
            return min;
        },
        visiblePagerMax() {
            // 页码可见区域的最大值
            let max = this.visiblePagerMin + this.visibleNumber -1;
            if(max > this.pagerNumber){
                max = this.pagerNumber;
            }
            return max;
        },
        number(){
            // 页码可见的数组
            let nums = [];
            for(let i = this.visiblePagerMin; i <= this.visiblePagerMax;i++){
                nums.push(i);
            }
            return nums;
        }
    },
    methods:{
        handleClick(newPager){
            if(newPager < 1){
                newPager = 1;
            }
            if(newPager > this.pagerNumber){
                newPager = this.pagerNumber;
            }
            if(newPager === this.current){
                return;
            }
            this.$emit('pagerChange',newPager);
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/var.less';
@pageSize:36px;
.pager-container{
    margin:20px 0;
    display:flex;
    justify-content:center;
    user-select: none;
    a{
        width:@pageSize;
        height: @pageSize;
        border: 1px solid @lightWords;
        border-radius:8px;
        margin:0 6px;
        text-align:center;
        line-height:@pageSize;
        cursor: pointer;
        font-size: 18px;
        &:hover:not(.disabled,.active){
            background-color: @gray;
        }
        &.active{
            background-color:@green;
        }
        &.disabled{
            cursor:not-allowed
        }
    }
}

</style>