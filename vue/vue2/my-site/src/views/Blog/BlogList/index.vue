<template>
  <div class="blog-list-container" v-vLoading="isLoading" ref="container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link :to="{
            name:'blogdetail',
            params:{
              id:item.id,
            }
          }">
            <img v-vLazy="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <router-link :to="{
            name:'blogdetail',
            params:{
              id:item.id
            }
          }">
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{formateDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <router-link :to="{
              name:'blogtype',
              params:{
                categoryId:item.category.id
              }
            }" class="">{{ item.category.name }}</router-link>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager
      v-if="data.total"
      :total="data.total"
      :limit="getRouteIfo.limit"
      :current="getRouteIfo.page"
      :visibleNumber="10"
      @pagerChange="handlePageChange"
    ></Pager>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import { getBlogs } from "@/api/blog.js";
import Pager from "@/components/Pager";
import formateDate from '@/utils/formateDate';
import mainScroll from '@/mixins/mainScroll.js';
export default {
  mixins: [fetchData({}),mainScroll('container')],
  components: {
    Pager,
  },
  computed: {
    getRouteIfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const limit = +this.$route.query.limit || 10;
      const page = +this.$route.query.page || 1;
      return {
        categoryId,
        limit,
        page,
      };
    },
  },
  methods: {
    formateDate,
    async fetchData() {
      return await getBlogs(
        this.getRouteIfo.page,
        this.getRouteIfo.limit,
        this.getRouteIfo.categoryId
      );
    },
    handlePageChange(newPager) {
      const query = {
        page: newPager,
        limit: this.getRouteIfo.limit,
      };

      // 没有分类Id
      if (this.getRouteIfo.categoryId === -1) {
        this.$router.push({
          name: "blog",
          query,
        });
      } else {
        this.$router.push({
          name: "blogtype",
          query,
          params: {
            categoryId: this.getRouteIfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      // 滚动高度为0
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>