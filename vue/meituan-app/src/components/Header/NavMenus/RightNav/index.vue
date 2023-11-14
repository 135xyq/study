<template>
  <div class="right-nav-container">
    <ul class="nav">
      <li class="list my">
        <router-link :to="{ name: 'home' }">我的美团</router-link>
        <dl>
          <dd>
            <router-link :to="{ path: '/' }">我的订单</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">我的收藏</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">抵用券</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link :to="{ name: 'home' }">手机APP</router-link>
      </li>
      <li class="list bd">
        <router-link :to="{ name: 'home' }">商家中心</router-link>
        <dl>
          <dd>
            <router-link :to="{ path: '/' }">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">我想合作</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <router-link :to="{ name: 'home' }">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>
              <router-link :to="{ path: '/' }">国际机票</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">火车票</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">民宿</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">主题酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">经济型酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">客栈</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">青年旅社</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">别墅</router-link>
            </dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>
              <router-link :to="{ path: '/' }">烤鱼</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">火锅</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">特色小吃</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">烧烤</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">自助餐</router-link>
            </dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>
              <router-link :to="{ path: '/' }">热映电影</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">热门电影院</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">电影排行榜</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">国内票房榜</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">海外票房榜</router-link>
            </dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <img
                class="appicon"
                src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                title="美团app"
                alt="美团app"
              />
            </dd>
            <dd>
              <img
                class="appicon"
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                title="美团app"
                alt="美团app"
              />
            </dd>
            <dd>
              <img
                class="appicon"
                src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                title="美团app"
                alt="美团app"
              />
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-nav-container {
  font-size: 12px;
  float: right;
  margin-right: 164px;
  padding: 0;
  z-index: 888;
  .nav {
    list-style: none;
    float: right;
    height: 40px;
    > li {
      float: left;
      width: 78px;
      box-sizing: border-box;
      text-align: center;
      cursor: pointer;

      a {
        color: #999;

        &:hover {
          color: @linkHoverColor;
        }
      }

      &.list:hover {
        border: 1px solid #e5e5e5;
        border-top: none;

        > dl {
          display: block;
        }

        .subContainer {
          display: flex;
        }
      }

      dl {
        background: #fff;
        display: none;
        z-index: 888;

        dd {
          line-height: 35px;

          &:hover {
            color: @linkHoverColor;
          }
        }
      }

      &.my{
        dl{
          position: relative;
        }
      }

      &.bd {
        dl {
          width: 140%;
          position: relative;
          border: 1px solid #e5e5e5;
          left: -31px;
          top: -1px;
          // border-bottom: 1px solid #e5e5e5;
          // border-left: 1px solid #E5E5E5;
          position: relative;

          &:before {
            content: " ";
            display: block;
            background: #fff;
            height: 4px;
            width: 76px;
            position: absolute;
            top: -1px;
            right: 0;
          }
        }

        &:hover {
          border-bottom: none;
        }
      }

      &.site {
        &:hover {
          border-bottom: none;
        }
      }

      .subContainer {
        box-sizing: border-box;
        background: #fff;
        padding: 30px 36px 36px 47px;
        width: 1250px;
        position: relative;
        left: -1175px;
        z-index: 999;
        border: 1px solid #e5e5e5;
        display: none;
        text-align: left;

        &:before {
          content: " ";
          display: block;
          width: 76px;
          height: 4px;
          background: #fff;
          position: absolute;
          top: -1px;
          right: 0;
        }

        > dl {
          box-sizing: border-box;
          text-align: left;
          display: inline-block !important;
          margin-right: 47px;
          font-size: 0;

          dt {
            margin-bottom: 26px;
            font-size: 14px;
            color: @linkHoverColor;
            text-align: center;
          }

          dd {
            width: 78px;
            display: inline-block;
            text-align: center;
            font-size: 12px;
          }

          &.hotel {
            width: 234px;
          }

          &.food {
            width: 156px;
          }

          &.movie {
            width: 90px;
            dd {
              width: 100%;
            }
          }

          &.app {
            width: 380px;
            flex: 1;
            text-align: center;
            dd {
              width: 60px;
              height: 73px;
              line-height: 73px;
              text-align: center;
              margin: 0 8px;
              img {
                width: 60px;
                height: 60px;
              }
            }
          }
        }
      }
    }
  }
}
a {
  text-decoration: none;
}
</style>
