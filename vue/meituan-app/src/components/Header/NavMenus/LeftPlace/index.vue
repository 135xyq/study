<template>
  <div class="left-place-container">
    <div class="place">
      <i class="el-icon-location"></i>
      {{ $store.state.position.name }}
      <router-link :to="{ name: 'changecity' }" class="change-city"
        >切换城市</router-link
      >
      [
      <a
        href="#"
        v-for="(item, index) in nearCity"
        :key="index"
        class="near-city"
        >{{ item.name }}</a
      >
      ]
    </div>
    <div class="user">
      <router-link :to="{ name: 'login' }" class="login-link"
        >立即登录</router-link
      >
      <router-link :to="{ name: 'register' }" class="register-link"
        >注册</router-link
      >
    </div>
  </div>
</template>

<script>
import { getPosition } from "@/api/place.js";
export default {
  data() {
    return {
      nearCity: [], // 附近的城市
    };
  },
  watch: {
    "$store.state.position": function () {
      this.nearCity = this.$store.state.position.nearCity;
    },
  },
  created() {
    getPosition().then((resp) => {
      if (resp.status === "success") {
        this.$store.dispatch("setPosition", resp.data);
        this.nearCity = resp.data.nearCity;
      } else {
        this.$message({
          type: "error",
          message: resp.msg,
        });
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.left-place-container {
  font-size: 12px;
  color: @headerWord;
  padding-left: 164px;
  display: flex;

  .change-city {
    border: 1px solid #e5e5e5;
    &:hover {
      color: @linkHoverColor;
    }
  }
  .near-city {
    margin: 0px 5px;
    color: @headerWord;
    &:hover {
      color: @linkHoverColor;
    }
  }
  .user {
    margin-left: 30px;
    .login-link {
      color: @linkHoverColor;
      margin-right: 20px;
    }
    .register-link {
      &:hover {
        color: @linkHoverColor;
      }
    }
  }
}
</style>
