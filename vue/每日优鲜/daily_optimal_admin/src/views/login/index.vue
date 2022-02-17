<template>
  <div class="login-container">
    <div class="container">
      <div class="title">每日优鲜后台管理</div>
      <form class="form-container">
        <div class="userName-container">
          <Icon type="userName" class="icon-userName icon-input"></Icon>
          <input
            type="text"
            v-model="email"
            class="email"
            placeholder="请输入邮箱"
            @focus="isEmailError = false"
            :class="{ error: isEmailError }"
          />
          <span class="email-error-msg" v-show="isEmailError"
            >邮箱格式错误</span
          >
          <span
            class="icon-email-close"
            v-show="email.length > 0"
            @click="email = ''"
            >&times;</span
          >
        </div>
        <div class="password-container">
          <Icon type="password" class="icon-password icon-input"></Icon>
          <input
            type="password"
            v-model="password"
            class="password"
            ref="pas"
            @focus="isPasswordError = false"
            placeholder="请输入密码"
            :class="{ error: isPasswordError }"
          />
          <span class="password-error-msg" v-show="isPasswordError"
            >密码不能为空</span
          >
          <span
            class="icon-password-close"
            v-show="password.length > 0"
            @click="password = ''"
            >&times;</span
          >
          <span @click="showPassword" v-show="password.length > 0"
            ><Icon type="eye" class="icon-eye" v-show="isShowPassword"></Icon
          ></span>
          <span @click="showPassword" v-show="password.length > 0"
            ><Icon
              type="closeEye"
              class="icon-eye"
              v-show="!isShowPassword"
            ></Icon
          ></span>
        </div>
        <button class="login-button" @click.prevent="handleSubmit">登录</button>
        <router-link class="register-link" :to="{ name: 'register' }"
          >注册账号</router-link
        >
        <router-link class="findback-link" :to="{ name: 'findback' }"
          >忘记密码</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { login } from "@/api/user.js";
import {setStorage,getStorage,removeStorage} from '@/utils/userStorage';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      email: "", // 邮箱
      password: "", // 密码
      isEmailError: false, // 邮箱是否有误
      isPasswordError: false, // 密码是否有误
      data: {}, // 返回数据
      isShowPassword: false, // 显示密码
    };
  },
  computed: {
    userInfo() {
      return {
        email: this.email,
        password: this.password,
      };
    },
  },
  methods: {
    handleSubmit() {
      const reg = /^[\w]+@[\w.-]+.com/;
      // 邮箱格式错误
      if (reg.test(this.email)) {
        this.isEmailError = false;
      } else {
        this.isEmailError = true;
        return null;
      }
      // 密码不能为空
      if (this.password.trim().length === 0) {
        this.isPasswordError = true;
        return null;
      } else {
        this.isShowPassword = false;
      }
      // console.log(this.isShowPassword)

      login(this.userInfo).then((resp) => {
        // 登录返回结果
        if (resp != null) {
          // 存储用户数据
          this.$store.dispatch('setUserInfo',resp.data)
          // 登录成功两秒后跳转到首页
          this.$showMessage({
            content: "登录成功！一秒后自动跳转到首页",
            duration: 1000,
          });
          setTimeout(() => {
            this.$router.push({ name: "home"});
          }, 1000);
        }
      });
    },
    showPassword() {
      this.isShowPassword = !this.isShowPassword;
      if (this.isShowPassword) {
        this.$refs.pas.type = "text";
      } else {
        this.$refs.pas.type = "password";
      }
    },
  },
};
</script>

<style lang = "less" scoped>
@import "~@/style/init.less";
@import "~@/style/self.less";
.login-container {
  .self-full();
  background-image: url("~@/assets/bg.jpg");
  background-size: cover;
  /* opacity: 0.7; */
}

.container {
  .self-center();
  .title {
    color: @white;
    font-size: 25px;
    margin-bottom: 20px;
    font-weight: 100;
    text-align: center;
  }
  .email-error-msg {
    position: absolute;
    font-size: 10px;
    color: @danger;
    top: 104px;
    left: 40px;
  }
  .password-error-msg {
    position: absolute;
    font-size: 10px;
    color: @danger;
    top: 164px;
    left: 40px;
  }
  input {
    width: 300px;
    height: 30px;
    margin: 10px 0px;
    padding: 4px 20px;
    padding-left: 43px;
    border-radius: 20px;
    outline: none;
    font-size: 14px;
    background: transparent;
    color: @white;
    border: 1px @transparent solid;
    &.error {
      border: 1px @danger solid;
    }
  }
  .icon-input {
    font-size: 25px;
    color: @white;
    position: absolute;
    left: 10px;
    &.icon-userName {
      top: 70px;
    }
    &.icon-password {
      top: 130px;
    }
  }
  .login-button {
    margin-top: 30px;
    width: 365px;
    height: 40px;
    border-radius: 20px;
    background: @primary;
    color: @white;
    font-size: 20px;
    padding: 2px 20px;
    cursor: pointer;
    border: none;
  }
  .register-link {
    position: absolute;
    right: 10px;
    bottom: -30px;
    color: @transparent;
    text-decoration: underline;
    &:hover {
      color: @primary;
    }
  }
  .findback-link {
    position: absolute;
    left: 215px;
    bottom: -30px;
    color: @transparent;
    text-decoration: underline;
    &:hover {
      color: @primary;
    }
  }
  .icon-email-close,
  .icon-password-close,
  .icon-eye,
  .icon-close-eye {
    position: absolute;
    left: 320px;
    color: @transparent;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
  .icon-email-close {
    top: 65px;
  }
  .icon-password-close {
    top: 125px;
  }

  .icon-eye,
  .icon-close-eye {
    top: 130px;
    left: 290px;
  }
}
</style>