<template>
  <ul class="right-list-container">
      <li v-for="(item,i) in list" :key="i">
          <span :class="{active:item.isSelect}"  @click="handleSelect(item)">{{item.name}}</span>
          <RightList :list="item.children" @selectChange="handleSelect"></RightList>
      </li>
  </ul>

</template>

<script>
export default {
    name:'RightList',
    props:{
        list:{
            type:Array,
            default:()=>[]
        }
    },
    methods:{
        handleSelect(item){
            this.$emit('selectChange',item);
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/global.less';
.right-list-container{
    font-size: 25px;
    .right-list-container{
        margin-left: 1em;
        font-size: 90%;
    }
    li{
        min-height: 40px;
        line-height: 40px;
        cursor: pointer;
        .active{
            color: @warn;
            font-weight:bold;
        }
    }
}
</style>