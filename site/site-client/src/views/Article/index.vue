<template>
  <Layout>
    <template #default>
      <ArticleList></ArticleList>
    </template>
    <template #right>
      <CategoryList></CategoryList>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import ArticleList from "./ArticleList";
import CategoryList from "./CategoryList";
export default {
  components:{
    Layout,
    ArticleList,
    CategoryList
  }
}
</script>

<style>

</style>