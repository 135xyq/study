<template>
  <div class="search-container">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="search">
      <input
        type="text"
        v-model="inputData"
        placeholder="搜索商家或地点"
        @focus="onHandleFucus"
        @blur="onHandleBlur"
        @input="onHandleInput"
      />
      <button @click="onHandleSearch">搜索</button>
      <dl class="hot-place" v-show="isShowHotPlace">
        <dt class="title">热门搜索</dt>
        <span
          class="delete-history"
          @click="onHandleDeleteHistory"
          v-if="hotPlace.length > 0"
          >删除搜索历史</span
        >
        <dd v-for="(item, index) in hotPlace" :key="index">{{ item }}</dd>
      </dl>
      <dl class="search-list" v-show="isShowSearchList">
        <dd v-for="(item, index) in searchList" :key="index">{{ item }}</dd>
      </dl>

      <dl class="suggest-place">
        <dd v-for="(item, index) in suggestPlace" :key="index + 100">
          {{ item }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { getHotWords, getSearchInfo } from "@/api/search.js";
export default {
  data() {
    return {
      inputData: "", // 输入框数据
      searchList: [], // 搜索数据列表
      hotPlace: [], // 热门搜索列表
      suggestPlace: [], // 推荐去的地方
      isFocus: true, // 输入框是否聚焦
    };
  },
  created() {
    getHotWords().then((resp) => {
      if (resp.status === "success") {
        this.hotPlace = resp.data;
        this.suggestPlace = resp.data;
      } else {
        this.$message({
          type: "error",
          message: resp.msg,
        });
      }
    });
  },
  computed: {
    // 是否显示热门搜索
    isShowHotPlace() {
      return !this.inputData && this.isFocus;
    },
    // 是否显示搜索列表
    isShowSearchList() {
      return this.inputData && this.isFocus;
    },
  },
  methods: {
    onHandleFucus() {
      this.isFocus = true;
    },
    onHandleBlur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    onHandleInput() {
      getSearchInfo().then((resp) => {
        if (resp.status === "success") {
          this.searchList = resp.data.list.filter((item) => {
            return item.indexOf(this.inputData) !== -1;
          });
        } else {
          this.$message({
            type: "error",
            message: resp.msg,
          });
        }
      });
    },
    // 删除最近搜索历史
    onHandleDeleteHistory() {
      this.$confirm("此操作将永久搜索历史, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.hotPlace = []; // 清空历史记录
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 提交搜索
    onHandleSearch() {
      this.hotPlace.push(this.inputData); // 将新的搜索添加到历史记录中
      // this.$router.push({
      //   name:'home'
      // })
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.search-container {
  height: 122px;
  background-color: #fff;
  .logo {
    > img {
      width: 126px;
      position: absolute;
      top: 50%;
      left: 164px;
      transform: translateY(-50%);
    }
  }
  position: relative;

  .search {
    width: 550px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    input {
      padding: 15px;
      box-sizing: border-box;
      border-right: none;
      border: 1px solid #e5e5e5;
      outline: none;
      border-radius: 4px 0 0 4px;
      line-height: 100%;
      height: 100%;
      background: transparent;
      width: 85.45%;
    }
    button {
      display: inline-block;
      width: 14.55%;
      height: 40px;
      box-sizing: border-box;
      outline: none;
      line-height: 100%;
      border: 1px solid #ffc300;
      background-color: #ffc300;
      cursor: pointer;
      border-radius: 0 4px 4px 0;
    }
    .hot-place,
    .search-list {
      position: relative;
      width: 85.45%;
      background: #fff;
      font-size: 12px;
      color: #666;
      padding-bottom: 10px;
      z-index: 9999;
      .title {
        color: #999;
        margin: 10px 5px;
      }
      dd {
        margin: 5px;
        font-size: 12px;
        cursor: pointer;
        &:hover {
          color: @linkHoverColor;
        }
      }
      .delete-history {
        position: absolute;
        top: 1px;
        right: 20px;
        cursor: pointer;
      }
    }
    .suggest-place {
      color: #666;
      font-size: 12px;
      dd {
        float: left;
        margin: 10px 5px;
        cursor: pointer;
        &:hover {
          color: @linkHoverColor;
        }
      }
    }
  }
}
</style>
