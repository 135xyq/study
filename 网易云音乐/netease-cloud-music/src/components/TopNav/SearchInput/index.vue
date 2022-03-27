<template>
  <div class="search-input">
      <span class="search-icon">
          <Icon type="sousuo"></Icon>
      </span>
      <input type="text" v-model="inputData" class="input">
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
    components:{
        Icon
    },
    data(){
        return{
            inputData:'',//输入框数据
        }
    }
}
</script>

<style lang="less" scoped>
.search-input{
    width: 158px;
    height: 32px;
}

</style>