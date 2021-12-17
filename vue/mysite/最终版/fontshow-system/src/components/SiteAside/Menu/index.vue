<template>
  <nav class="menu-container">
      <router-link
        v-for="item in items" :key="item.icons"
       :to="{name:item.name}"
       active-class="selected"
       exact-active-class=""
       :exact="item.exact"
       >
        <span><Icon :type="item.icons"></Icon></span>
        <span>{{item.titles}}</span>
      </router-link>
  </nav>
</template>

<script>
import Icon from '@/components/Icon';
export default {
    components:{
        Icon,
    },
    data(){
        return{
            items:[{
                name:'home',
                icons:'home',
                titles:'首页',
                exact:true
            }
            ,{
                name:'blog',
                icons:'blog',
                titles:'文章',
                exact:false//特殊的判断条件，要以这开头
            }
            ,{
                name:'about',
                icons:'info',
                titles:'关于我',
                exact:true
            }
            ,{
                name:'project',
                icons:'code',
                titles:'项目&效果',
                exact:true
            }
            ,{
                name:'message',
                icons:'chat',
                titles:'留言板',
                exact:true
            }]
        }
    },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
// @import "~@/styles/global.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    padding: 0 50px;
    height: 42px;
    line-height: 42px;
    display: flex;
    align-items: center;
    span:first-child {
      font-size: 20px;
      width: 30px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
    background-color: #2d2d2d;
  }
  }
}
</style>