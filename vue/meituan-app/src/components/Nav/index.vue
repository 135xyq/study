<template>
  <div class="nav-container">
    <div class="title">全部分类</div>
    <div class="menus">
      <ul class="menus-list">
        <li v-for="(item, index) in navData" :key="item.type" class="item">
          <div class="left-title">
            <span
              class="iconfont my-icon"
              :class="icons[index]"
              style="color: #ffb500"
            ></span>
            <span class="nav-title">{{ item.name }}</span>
            <span class="el-icon-arrow-right right-open"></span>
          </div>
          <dl class="hidden-container">
            <div
              class="hidden-content"
              v-for="childItem in item.items"
              :key="childItem.title"
            >
              <span class="more-info"
                >更多<i class="el-icon-d-arrow-right"></i
              ></span>
              <dt>{{ childItem.title }}</dt>
              <dd v-for="(list, index) in childItem.items" :key="index">
                {{ list }}
              </dd>
            </div>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getNav } from "@/api/page.js";
import { icons, navData } from "@/mock/navs.js";
export default {
  data() {
    return {
      icons,
      navData,
    };
  },

  // created(){
  //   getNav().then(resp=>{
  //     console.log(resp)
  //     if(resp.status === 'success') {
  //       this.navData = resp.data;
  //       console.log(this.navData);
  //     }else{
  //       this.$message({
  //         type:'error',
  //         message:resp.msg,
  //       })
  //     }
  //   })
  // }
};
</script>

<style lang="less" scoped>
.nav-container {
  @import "~@/styles/var.less";
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  width: 230px;
  z-index: 666;
  position: absolute;
  top: -50px;
  left: 164px;
  .title {
    box-sizing: border-box;
    height: 50px;
    width: 230px;
    background-color: #fff;
    padding-top: 15px;
    color: #222222;
    font-size: 16px;
    font-weight: 700;
    padding-left: 15px;
  }
  .menus {
    width: 100%;
    height: 425px;
    background: #fff;
    font-size: 13px;
    color: #646464;
    .menus-list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      li {
        flex: 1 1 auto;
        line-height: 26px;

        .my-icon {
          padding: 10px;
        }

        .nav-title {
          cursor: pointer;
        }

        .right-open {
          float: right;
          padding-right: 10px;
          line-height: 26px;
        }

        .left-title {
          &:hover {
            background-color: rgba(255, 150, 0, 0.08);
            .nav-title {
              font-size: 1.1em;
            }
            font-weight: 700;
          }
        }

        .hidden-container {
          width: 400px;
          height: 425px;
          background: #fff;
          position: absolute;
          top: 50px;
          left: 230px;
          box-sizing: border-box;
          padding: 0 30px;
          display: none;
          .more-info {
            float: right;
            padding-top: 20px;
            padding-bottom: 10px;
          }
          cursor: pointer;
          dt {
            padding-top: 20px;
            padding-bottom: 10px;
            font-size: 16px;
            font-weight: 400;
            border-bottom: 1px solid #ccc;
          }

          dd {
            float: left;
            margin-right:20px;
            &:hover {
              color: @linkHoverColor;
            }
          }
          .hidden-content{
            padding:10px;
          }
        }
      }
    }
    .item {
      &:hover {
        .hidden-container {
          display: block;
        }
      }
    }
  }
}
</style>
