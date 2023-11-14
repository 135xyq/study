<template>
  <form
    class="from-container"
    @submit.prevent="handleSubmit"
    ref="form"
    id="form-container"
  >
    <div class="nickname">
      <div class="input">
        <input
          type="text"
          maxlength="10"
          placeholder="请填写昵称"
          v-model="formDate.nickname"
        />
        <span class="tip">{{ `${formDate.nickname.length}/10` }}</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="nickcontent">
      <div class="textarea">
        <textarea
          maxlength="300"
          placeholder="请填写内容"
          v-model="formDate.nickcontent"
        ></textarea>
        <span class="tip">{{ `${formDate.nickcontent.length}/300` }}</span>
      </div>
      <div class="error">{{ error.nickcontent }}</div>
    </div>
    <button class="submit" :disabled="isSubmiting">
      {{ isSubmiting ? "提交中" : "提交" }}
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formDate: {
        nickname: "",
        nickcontent: "",
      },
      error: {
        nickname: "",
        nickcontent: "",
      },
      isSubmiting: false, //是否正在提交
    };
  },
  methods: {
    handleSubmit() {
      this.error.nickname = this.formDate.nickname.trim() ? "" : "请填写昵称！";
      this.error.nickcontent = this.formDate.nickcontent.trim() ? "" : "请输入要评论内容！";
      if (this.error.nickcontent || this.error.nickname) {
        return; //有错误直接返回
      } else {
        this.isSubmiting = true;
        this.$emit("submit", this.formDate, (message) => {
          this.$showMessage({
            content: message,
            duration: 1000,
            type: "success",
            container: this.$refs.form,
            callback: () => {
              this.formDate.nickname = "";
              this.formDate.nickcontent = "";
              this.isSubmiting = false;
            },
          });
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.from-container {
  margin-top: 20px;
}

.nickname {
  margin-bottom: 8px;
  width: 50%;
  .input {
    position: relative;
    input {
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      outline: none;
      border: 2px dashed @success;
      border-radius: 5px;
      padding: 0 15px;
      line-height: 30px;
      color: @words;
      &:focus {
        border-color: @primary;
      }
    }
  }
}
.tip {
  position: absolute;
  bottom: 2px;
  right: -15px;
  color: @gray;
  user-select: none;
}
.error {
  color: @danger;
}

.nickcontent {
  width: 50%;
  margin: 20px 0;
}
.textarea {
  position: relative;
  textarea {
    width: 100%;
    display: block;
    font-size: 16px;
    border: 2px dashed @success;
    outline: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-family: "-apple-system", "BlinkMacSystemFont", "Roboto",
      "Helvetica Neue", "微软雅黑", sans-serif;
    resize: none;
    color: @words;
    height: 120px;
    &:focus {
      border-color: @primary;
    }
  }
}

.submit {
  padding: 5px 20px;
  background-color: #0ff;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>