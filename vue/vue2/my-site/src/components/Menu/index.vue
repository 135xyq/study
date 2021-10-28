<template>
  <ul class="menu-container">
      <li>
          <a href="/">
            <Icon type="home"></Icon>
            <span>主页</span>
          </a>
      </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon';
export default {
    components:{
        Icon,
    }

}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.menu-container{
    padding:20px;
    color: @gray;
}

</style>