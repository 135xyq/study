<template>
  <div class="blog-category-container" v-vLoading="isLoading">
    <h2>全部分类</h2>
    <RightList :list="list" @selectChange="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from '../RightList';
import fetchData from '@/mixins/fetchData.js';
import {getBlogTypes} from '@/api/blog.js';
export default {
  mixins:[fetchData([])],
  components:{
    RightList,
  },
  methods:{
    async fetchData(){
      return await getBlogTypes();
    },
    handleSelect(item){
      const query = {
        page:1,
        limit:this.getRouteIfo.limit,
      };
      // 如果没有指定分类
      if(item.id === -1) {
        this.$router.push({
          name:'blog',
          query
        });
      }else{
        this.$router.push({
          name:'blogtype',
          query,
          params:{
            categoryId:item.id,
          }
        })
      }
    }
  },
  computed:{
    getRouteIfo(){
      const categoryId = +this.$route.params.categoryId || -1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        limit
      }
    },
    list(){
      const counts = this.data.reduce((a,b)=>a+b.articleCount,0);

      const result = [
        {name:"全部",articleCount:counts,id:-1},
        ...this.data,
      ];
      return result.map(it =>({
        ...it,
        active:it.id === this.getRouteIfo.categoryId,
        count:`${it.articleCount} 篇`
      }))
    }
  }
}
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
  .right-list-container {
    font-size: 14px;
  }
}
</style>