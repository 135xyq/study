<template>
  <div class="about-container">
    <mavon-editor v-model="mdData"/>
    <button class="button" @click="showWhich = 'html'">展示HTMl效果</button>
    <button class="button" @click="showWhich = 'detail'">展示HTML代码</button>
    <button class="button" @click="showWhich = 'none'">都不显示</button>
    <div class="showHtml" v-if="showWhich ==='detail' ">
      <p>HTML代码</p>
      <p class="content">{{htmlData}}</p>
      <button class="btn"  id="foo" :data-clipboard-text="htmlData" @click="copy('#foo')">
      copy
    </button>
    </div>
    <div class="showHtmlDetail" v-if="showWhich === 'html'">
      <p>HTML</p>
      <p v-html="htmlData" class="content"></p>
        <button class="btn"  id="html" :data-clipboard-text="htmlData" @click="copy('#html')">
      copy
    </button>
    </div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it"
import Clipboard from 'clipboard'
const md = new MarkdownIt();

export default {
  data(){
    return{
      mdData:'',
      htmlData:'',
      showWhich:'all'
    }
  },
  watch:{
    mdData(val){
      this.htmlData =  md.render(val);
    }
  },
  methods:{
    copy (target) {
    var clipboard = new Clipboard(target) // 这里可以理解为选择器，选择上面的复制按钮
    clipboard.on('success', e => {
        alert('复制成功')
        // 释放内存
        clipboard.destroy()
    })
    clipboard.on('error', e => {
        // 不支持复制
        alert('复制失败')
        // 释放内存
        clipboard.destroy()
    })
}
  }
}
</script>

<style lang="less" scoped>
@import "https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css";
.button{
  cursor: pointer;
  border: none;
  margin: 20px 30px;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.741);
}
.content{
  width: 800px;
  border: 1px solid #ccc;
  margin: 0 auto;
  padding: 10px;
  word-break: break-all;
}
.showHtml,.showHtmlDetail{
  position: relative;
  width: 800px;
  margin: 0 auto;
}

.btn{
  position: absolute;
  top:10px;
  right: 0px;
  cursor: pointer;
}
</style>
