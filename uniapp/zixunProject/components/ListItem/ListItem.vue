<template>
  <view class="list-scroll-container">
	  <view class="no-article" v-if="articleList.length===0">
	  	 暂无文章
	  </view>
    <view class="" v-if="articleList.length>0">
    	<scroll-view scroll-y="true" class="list-scroll" @scrolltolower="loadmore">
    	  <view>
    	    <ListCard :item="item" v-for="item in articleList" :key="item._id" @saveHistory="$emit('saveHistory')"></ListCard>
    	  </view>
    	  <uni-load-more v-if="isShowLoading && (articleList.length === 0 || articleList.length> 7)" :status="loadData.loading || 'loading'"></uni-load-more>
    	</scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    articleList: {
      type: Array,
      default () {
        return []
      }
    },
    loadData: {
      type: Object,
      default () {
        return {
          loading: "loading"
        }
      }
    },
    isShowLoading: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    };
  },
  methods: {
    loadmore () {   // 监听触底事件，通知articleLIs组件到底状态
      this.$emit('loadmore')
    }
  },
  created(){
	  console.log(this.articleList)
  }
}
</script>

<style lang="scss">
.list-scroll-container {
  height: 100%;
  .list-scroll {
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
  }
}
.no-article{
	text-align: center;
	margin-top: 20px;
	color: #3e3939;
}
</style>
