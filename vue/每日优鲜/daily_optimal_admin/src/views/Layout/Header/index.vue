// 头部的信息和导航栏

<template>
  <div class="header-container">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-content" >
        <!-- <el-breadcrumb-item :to="{ path: '/index' }" >{{headerInfo[0]}}</el-breadcrumb-item> -->
        <el-breadcrumb-item v-for="item in headerInfo" :key="item.path">
         {{item.name}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="userInfo">
      <img :src="avatar" class="avatar" />
      <el-dropdown>
        <span class="el-dropdown-link" style="color: #2d2d2d">
          {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command>
            <el-button type="text" @click="onExitLogin">退出登录</el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import avatar from "@/assets/avatar.jpeg";
import { removeStorage } from "@/utils/userStorage";
import routes from '@/router/routes';
export default {
  data() {
    return {
      avatar,
    };
  },
  computed: {
    username() {
      if (this.$store.state.user) {
        return this.$store.state.user.username;
      } else {
        return "请登录!";
      }
    },
    headerInfo(){
      if(this.$route.fullPath.indexOf('product') !== -1){
        return [{
          name:'商品',
          path:'/product'
        },{
          name:this.$route.meta.title,
          path:this.$route.fullPath
        }]
      }else if(this.$route.fullPath.indexOf('index') !==-1){
        return [{
          name:'首页',
          path:'/'
        },{
          name:this.$route.meta.title,
          path:this.$route.fullPath
        }]
      }
    }
  },
  methods: {
    onExitLogin() {
      this.$confirm(`此操作会退出正在登录的账号: '${this.username}'`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch('logout',routes); // 移除登录信息
          this.$router.push({ name: "login" });
          this.$message({
            type: "success",
            message: "退出成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.header-container {
  .breadcrumb {
    margin-left: 10px;
    .breadcrumb-content {
      line-height: 40px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .userInfo {
    position: absolute;
    line-height: 40px;
    top: 10px;
    right: 260px;
  }
  .avatar {
    width: 40px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      animation: rotate 1s;
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>