<template>
  <div class="recommend-container">
    <div class="title">
      <ul class="title-container">
        <li style="font-weight: 700">推荐</li>
        <li
          v-for="(value, key) in recommendData"
          :key="key"
          @click="changeShow(key)"
        >
          {{ key }}
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="item" v-for="(item, index) in showingData" :key="index">
        <div>
          <img :src="item.image" class="image" />
        </div>
        <div>
          <p class="item-title">{{ item.title }}</p>
          <span class="subTitle">{{ item.subTitle }} |</span>
          <span class="address">&nbsp;&nbsp;{{ item.address }}</span>
          <p class="price">￥ {{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommend } from "@/api/page.js";
export default {
  data() {
    return {
      showingKey: "all", // 正在展示的数据类型
      showingData: [], //正在展示的数据
      recommendData: {}, // 推荐信息
    };
  },
  // created() {
  //   getRecommend().then((resp) => {
  //     if (resp.status === "success") {
  //       this.recommendData = resp.data;
  //       this.showingData = this.recommendData[this.showingKey];
  //     } else {
  //       this.$message({
  //         type: "error",
  //         message: resp.msg,
  //       });
  //     }
  //   });
  // },
  methods: {
    changeShow(key) {
      if (this.showingKey === key) {
        return;
      } else {
        this.showingKey = key;
        this.showingData = this.recommendData[this.showingKey];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.recommend-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .title {
    width: 100%;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background: linear-gradient(
        to right,
        rgb(243, 182, 74) 2%,
        rgb(242, 197, 69) 97%
      )
      rgb(243, 182, 74);
    .title-container {
      display: flex;
      li {
        margin: 0 20px;
        position: relative;
        &:hover {
          &::after {
            position: absolute;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 7px solid #fff;
            content: " ";
            display: block;
            width: 2px;
            height: 0;
            top: 37px;
            left: 0;
            right: 0;
            margin: auto;
          }
        }
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    .item {
      height: 340px;
      width: 370px;
      background-color: #fff;
      margin-top: 20px;

      margin-left: 20px;
      .image {
        width: 370px;
        height: 208px;
        border-radius: 10px;
      }
      .item-title {
        font-size: 16px;
        color: #222222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 7px 0;
        font-weight: 400;
        width: 297px;
      }

      .subTitle,
      .address {
        font-size: 12px;
        color: #999999;
        text-align: left;
      }
      .price {
        font-weight: 500;
        font-size: 22px;
        color: #ff6600;
        letter-spacing: -0.8px;
        padding: 4px 0;
      }
    }
  }
}
</style>
