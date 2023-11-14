<template>
  <div class="user-container">
    <div class="user-info">
      <div class="avatar">
        <img
          :src="whichUrl"
          alt=""
        />
      </div>
      <div class="no-login" v-if="!userName">
        <p class="user-name">Hi! 你好</p>
        <div class="button">
          <button class="link-button register-button">
            <router-link :to="{ name: 'register' }" class="link"
              >注册</router-link
            >
          </button>
          <button class="link-button login-button">
            <router-link :to="{ name: 'login' }" class="link"
              >立即登录</router-link
            >
          </button>
        </div>
      </div>
      <div class="has-login" v-if="userName">
        <p class="user-name">{{ userName }}</p>
        <div class="setting">
          <i class="iconfont icon-shezhi"></i>
        </div>
        <ul class="my-todo">
          <li v-for="(item, index) in userToDos" :key="index">
            <i
              :class="item.icon"
              class="iconfont my-todo-icon"
              style="color: #ffc300; font-size: 20px"
            ></i>
            <p class="my-todo-name">{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="phone-app">
      <img
        src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
        alt=""
        class="erweima-app"
      />
      <p class="app-name">美团APP手机版</p>
      <p class="app-description"><span>1元起</span><span>吃喝玩乐</span></p>
    </div>
  </div>
</template>

<script>
import url from '@/assets/avatar.jpeg';
const userToDos = [
  {
    name: "我的订单",
    icon: "icon-dingdan",
  },
  {
    name: "我的收藏",
    icon: "icon-shoucang",
  },
  {
    name: "抵用券",
    icon: "icon-youhuiquan",
  },
  {
    name: "余额",
    icon: "icon-yuebao",
  },
  {
    name: "更多",
    icon: "icon-gengduo",
  },
];
export default {
  data() {
    return {
      userName: this.$store.state.userName,
      userToDos,
      url,
    };
  },
  computed:{
    whichUrl(){
      if(this.userName) {
        return this.url;
      }else{
        return 'https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg'
      }
    }
  }
};
</script>

<style lang="less" scoped>
.user-container {
  .user-info {
    margin: 10px 0 0 10px;
    width: 228px;
    height: 238px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    position: relative;
    .avatar {
      padding-top: 30px;
      cursor: pointer;
      img {
        width: 47px;
        height: 47px;
        border-radius: 50%;
        border: 4px solid #e5e5e5;
        position: relative;
        // top: 30px;
        left: calc(50% - 24px);
      }
    }
    .user-name {
      text-align: center;
      margin-top: 5px;
      cursor: pointer;
    }
    .link-button {
      width: 118px;
      text-align: center;
      margin: 10px auto 15px auto;
      background: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 40px;
      font-size: 14px;
      transition: background-color 0.5s;
      display: block;
      line-height: 38px;
      &:hover {
        background-color: rgba(105, 96, 96, 0.377);
      }
      .link {
        color: #333;
      }
    }
    .has-login {
      .setting {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        i {
          font-size: 20px;
          color: #222222;
        }
      }
      .my-todo {
        display: flex;
        flex-wrap: wrap;
        margin-left: 10px;
        justify-content: space-between;

        &:after {
          content: "";
          width: 30%;
        }

        li {
          width: 30%;
          margin-top: 10px;
          text-align: center;
          font-size: 12px;
          cursor: pointer;
          p{
            margin-top: 5px;
          }
        }
      }
    }
  }
  .phone-app {
    width: 228px;
    height: 163px;
    margin-top: 10px;
    margin-left: 10px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    position: relative;
    .erweima-app {
      margin-top: 10px;
      width: 95px;
      height: 95px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    .app-name {
      font-size: 16px;
      color: #222222;
      font-weight: 500;
      text-align: center;
    }
    .app-description {
      text-align: center;
      font-size: 12px;
      font-weight: 500;
      margin-top: 2px;
      color: #3f3f3f;
      span:nth-of-type(1) {
        color: #ec5330;
        margin-right: 5px;
      }
    }
  }
}
</style>
