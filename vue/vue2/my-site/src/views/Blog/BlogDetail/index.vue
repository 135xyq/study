<template>
  <Layout>
    <template #main>
      <div class="left-content-container" v-vLoading="isLoading" v-if="data">
        <BlogContent :article="data"></BlogContent>
        <BlogComments></BlogComments>
      </div>
    </template>
    <template #right>
      <div class="right-container" v-vLoading="isLoading" v-if="data.toc">
        <BlogTOC :list="data.toc"></BlogTOC>
      </div>
    </template>
  </Layout>
</template>

<script>
import BlogContent from "./BlogContent";
import BlogTOC from "./BlogTOC";
import BlogComments from './BlogComments';
import Layout from "@/components/Layout";
import fetchData from "@/mixins/fetchData.js";
import {getBlog} from '@/api/blog.js';
export default {
  mixins:[fetchData({})],
  components: {
    Layout,
    BlogTOC,
    BlogContent,
    BlogComments,
  },
  methods:{
    async fetchData(){
      return await getBlog(this.$route.params.id);
    }
  }
};
</script>

<style lang="less" scoped="true">
.left-content-container{
  height: 100%;
  overflow-y: scroll;
  width:100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-x:hidden;
  position: relative;
  scroll-behavior:smooth;
}

.right-container{
  width:300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
}

</style>