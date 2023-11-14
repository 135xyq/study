<template>
  <Layout>
      <template #main>
        <BlogList></BlogList>
      </template>
      <template #right>
        <BlogCategory></BlogCategory>
      </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout';
import BlogCategory from './BlogCategory';
import BlogList from './BlogList';
export default {
  components:{
    Layout,
    BlogCategory,
    BlogList,
  }
}
</script>

<style>

</style>