<template>
  <div class="register-container">
    <div class="container">
      <div class="title">欢迎新用户</div>
      <form class="form-container">
        <ul class="lis-container">
          <li>
            <label>
              <span class="label-text"
                >邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱: </span
              ><input v-model="userInfo.email" />
              <span
                class="content-clear email-clear"
                v-show="userInfo.email.length > 0"
                @click="userInfo.email = ''"
                >&times;</span
              >
            </label>
          </li>
          <li>
            <label>
              <span class="label-text">用 &nbsp;户&nbsp; 名: </span
              ><input v-model="userInfo.username" />
              <span
                class="content-clear username-clear"
                v-show="userInfo.username.length > 0"
                @click="userInfo.username = ''"
                >&times;</span
              >
            </label>
          </li>
          <li>
            <label>
              <span class="label-text"
                >密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码: </span
              ><input
                v-model="userInfo.password"
                type="password"
                ref="register_pas"
              />
              <span
                class="content-clear password-clear"
                v-show="userInfo.password.length > 0"
                @click="userInfo.password = ''"
                >&times;</span
              >
              <span @click="showPassword" v-show="userInfo.password.length > 0"
                ><Icon
                  type="eye"
                  class="icon-eye"
                  v-show="isShowPassword"
                ></Icon
              ></span>
              <span @click="showPassword" v-show="userInfo.password.length > 0"
                ><Icon
                  type="closeEye"
                  class="icon-eye"
                  v-show="!isShowPassword"
                ></Icon
              ></span>
            </label>
          </li>
          <li>
            <label>
              <span class="label-text">确认密码:</span>
              <input
                v-model="conformPassword"
                type="password"
                ref="register_pas1"
                :class="{ error: !isPasswordSame }"
                @focus="isPasswordSame = true"
              />
              <span class="error-text" v-show="!isPasswordSame"
                >两次密码不同</span
              >
              <span
                class="content-clear conformPassword-clear"
                v-show="conformPassword.length > 0"
                @click="conformPassword = ''"
                >&times;</span
              >
              <span @click="showPassword1" v-show="userInfo.password.length > 0"
                ><Icon
                  type="eye"
                  class="icon-eye icon-eye-conform"
                  v-show="isShowPassword1"
                ></Icon
              ></span>
              <span @click="showPassword1" v-show="userInfo.password.length > 0"
                ><Icon
                  type="closeEye"
                  class="icon-eye icon-eye-conform"
                  v-show="!isShowPassword1"
                ></Icon
              ></span>
            </label>
          </li>
          <li>
            <label>
              <span class="label-text">验&nbsp;&nbsp;证&nbsp;&nbsp;码: </span
              ><input v-model="userInfo.code" class="code-container" /> </label
            ><button class="get-code" @click.prevent="onGetCode">
              发送验证码
            </button>
            <span
              class="content-clear code-clear"
              v-show="userInfo.code.length > 0"
              @click="userInfo.code = ''"
              >&times;</span
            >
          </li>
          <li>
            <label>
              <span class="label-text"
                >角&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色:</span
              >
              <select v-model="userInfo.role" class="role-container">
                <option selected value="customer">customer</option>
                <option value="admin">admin</option>
              </select>
            </label>
          </li>
        </ul>
        <button class="submit-button" @click.prevent="onsubmitRegister">
          注册
        </button>
      </form>
    </div>
    <router-link :to="{ name: 'login' }" class="to-login">已有账号</router-link>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { getCode, logon } from "@/api/user.js";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      userInfo: {
        email: "", //邮箱
        username: "", //用户名
        password: "", // 密码
        code: "", // 验证码
        role: "customer", //角色
      },
      conformPassword: "", // 确认密码
      isShowPassword: false, // 是否显示密码
      isShowPassword1: false, // 是否显示密码
      isPasswordSame: true, // 两次的密码是否相同
    };
  },
  methods: {
    onGetCode() {
      if (this.userInfo.email.trim().length === 0) {
        return;
      }
      getCode(this.userInfo.email).then((resp) => {
        console.log("验证码发送成功！");
      });
    },
    showPassword() {
      this.isShowPassword = !this.isShowPassword;
      if (this.isShowPassword) {
        this.$refs.register_pas.type = "text";
      } else {
        this.$refs.register_pas.type = "password";
      }
    },
    showPassword1() {
      this.isShowPassword1 = !this.isShowPassword1;
      if (this.isShowPassword1) {
        this.$refs.register_pas1.type = "text";
      } else {
        this.$refs.register_pas1.type = "password";
      }
    },
    onsubmitRegister() {
      if (this.userInfo.password !== this.conformPassword) {
        this.isPasswordSame = false;
        return;
      }
      logon(this.userInfo).then((resp) => {
        if (resp != null) {
          // 注册成功，跳转到登录界面
          this.$showMessage({
            content: "两秒后自动跳转到登录界面",
            duration: 1500,
          });
          setTimeout(() => {
            this.$router.push({ name: "login" });
          }, 2000);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
@import "~@/style/init.less";

.register-container {
  .self-full();
  background-image: url("~@/assets/bg.jpg");
  background-size: cover;
  .title {
    color: @white;
    font-size: 25px;
    margin-bottom: 20px;
    font-weight: 100;
    text-align: center;
  }

  .container {
    .self-center();
  }

  label {
    color: @white;
    .label-text {
      display: inline-block;
      width: 75px;
      text-align: justify;
    }
  }

  input {
    width: 300px;
    height: 30px;
    margin: 10px 0px;
    padding: 4px 20px;
    padding-left: 20px;
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
    }
  }

  .lis-container {
    display: flex;
    flex-direction: column;
  }

  .submit-button,
  .role-container {
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

  .submit-button {
    position: absolute;
    top: 410px;
    left: 45px;
  }

  .role-container {
    background-color: transparent;
    outline: none;
    option {
      color: @primary;
      text-align: center;
    }
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
    left: 370px;
    color: @transparent;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }

  .email-clear {
    top: 65px;
  }
  .username-clear {
    top: 125px;
  }
  .password-clear {
    top: 185px;
  }
  .conformPassword-clear {
    top: 245px;
  }
  .code-clear {
    left: 230px;
    top: 305px;
  }
  .icon-eye {
    position: absolute;
    top: 195px;
    left: 345px;
    cursor: pointer;
  }
  .icon-eye-conform {
    top: 255px;
  }
  .error-text {
    position: absolute;
    top: 283px;
    left: 100px;
    font-size: 12px;
    color: @danger;
  }

  .to-login {
    position: absolute;
    left: 888px;
    top: 620px;
    color: @transparent;
    text-decoration: underline;
    &:hover {
      color: @primary;
    }
  }
}
</style>