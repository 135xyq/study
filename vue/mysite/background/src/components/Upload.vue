// 上传图片的组件
<template>
  <div>
    <!-- 上传组件标题 -->
    <div class="block">{{ uploadTitle }}</div>
    <!-- 上传控件 -->
    <el-upload
      class="avatar-uploader"
      action="/api/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :headers="headers"
    >
      <img v-if="value" :src="imgUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import { serverUrl } from "@/urlConfig.js";
export default {
  props: ["uploadTitle", "value"],
  computed: {
    // 更改图片地址
    imgUrl() {
      if (this.value) {
        return serverUrl + this.value;
      }
    },
    // 授权
    headers(){
      return{
        Authorization: "Bearer" + localStorage.getItem("adminToken"),//从本地获取token，添加到header中
      }
    }
  },
  methods: {
    // 上传成功
    handleAvatarSuccess(res){
      if(!res.code && res.data){
        // 图片上传成功
        this.$emit("input",res.data)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  margin: 15px 0;
  font-weight: 100;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
