<template>
  <div class="findback-container">
    <div class="container">
      <div class="title">找回密码</div>
      <form class="form-container">
        <div class="userName-container">
          <Icon type="userName" class="icon-userName icon-input"></Icon>
          <input
            type="text"
            v-model="userInfo.email"
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
            v-show="userInfo.email.length > 0"
            @click="userInfo.email = ''"
            >&times;</span
          >
        </div>
        <div class="password-container">
          <Icon type="password" class="icon-password icon-input"></Icon>
          <input
            type="password"
            v-model="userInfo.password"
            class="password"
            ref="pas"
            @focus="isPasswordError = false"
            placeholder="请输入新密码"
            :class="{ error: isPasswordError }"
          />
          <span class="password-error-msg" v-show="isPasswordError"
            >密码不能为空</span
          >
          <span
            class="icon-password-close"
            v-show="userInfo.password.length > 0"
            @click="userInfo.password = ''"
            >&times;</span
          >
          <span @click="showPassword" v-show="userInfo.password.length > 0"
            ><Icon type="eye" class="icon-eye" v-show="isShowPassword"></Icon
          ></span>
          <span @click="showPassword" v-show="userInfo.password.length > 0"
            ><Icon
              type="closeEye"
              class="icon-eye"
              v-show="!isShowPassword"
            ></Icon
          ></span>
        </div>
        <div class="code-container">
          <input
            v-model="userInfo.code"
            class="code-container"
            placeholder="请填写验证码"
          />
          <button class="get-code" @click.prevent="onGetCode">
            发送验证码
          </button>
          <span
            class="content-clear code-clear"
            v-show="userInfo.code.length > 0"
            @click="userInfo.code = ''"
            >&times;</span
          >
        </div>
        <button class="findback-button" @click.prevent="handleSubmit">
          提交
        </button>
      </form>
      <router-link class="findback-link" :to="{ name: 'login' }"
        >返回登录</router-link
      >
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { findBack, getCode } from "@/api/user.js";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      isEmailError: false, // 邮箱是否有误
      isPasswordError: false, // 密码是否有误
      data: {}, // 返回数据
      isShowPassword: false, // 显示密码
      userInfo: {
        email: "",
        password: "",
        code: "",
      },
    };
  },

  methods: {
    handleSubmit() {
      const reg = /^[\w]+@[\w.-]+.com/;
      // 邮箱格式错误
      if (reg.test(this.userInfo.email)) {
        this.isEmailError = false;
      } else {
        this.isEmailError = true;
        return null;
      }
      // 密码不能为空
      if (this.userInfo.password.trim().length === 0) {
        this.isPasswordError = true;
        return null;
      } else {
        this.isShowPassword = false;
      }
      // console.log(this.isShowPassword)

      findBack(this.userInfo).then((resp) => {
        // 成功返回结果
        if (resp != null) {
          // 成功两秒后跳转到登录界面
          this.$showMessage({
            content: "密码已重置！两秒后自动跳转到登录页面",
            duration: 1500,
          });
          setTimeout(() => {
            this.$router.push({ name: "login" });
          }, 2000);
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
    onGetCode() {
      if (this.userInfo.email.trim().length === 0) {
        return;
      }
      // console.log(1)
      getCode(this.userInfo.email).then((resp) => {
        console.log("验证码发送成功！");
      });
    },
  },
};
</script>

<style lang = "less" scoped>
@import "~@/style/init.less";
@import "~@/style/self.less";
.findback-container {
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
    &.code-container {
      width: 150px;
      padding-left: 20px;
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
  .findback-button {
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
  .get-code {
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-weight: 100;
    border-radius: 20px;
    outline: none;
    margin-left: 20px;
    cursor: pointer;
    border: none;
    font-size: 16px;
  }
  .content-clear {
    position: absolute;
    left: 155px;
    top: 185px;
    color: @transparent;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
  .findback-link {
    position: absolute;
    left: 290px;
    bottom: -30px;
    color: @transparent;
    text-decoration: underline;
    &:hover {
      color: @primary;
    }
  }
}
</style>