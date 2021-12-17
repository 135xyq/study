<template>
  <ul class="contact-container">
    <li>
      <a :href="data.github" target="_blank">
        <Icon type="github"></Icon>
        <span>{{data.githubName}}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <Icon type="mail"></Icon>
        <span>{{data.mail}}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <Icon type="qq"></Icon>
        <span>{{data.qq}}</span>
      </a>
            <div class="pop">
        <img
          :src="data.qqQrCode"
          alt=""
        />
      </div>
    </li>
    <li>
      <a>
        <Icon type="weixin"></Icon>
        <span>{{data.weixin}}</span>
      </a>
            <div class="pop">
        <img
          :src="data.weixinQrCode"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import {mapState} from 'vuex';
export default {
  components: {
    Icon,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less">
@import "~@/styles/var.less";
.contact-container {
  padding: 20px;
  color: @gray;
  li {
    height: 30px;
    margin: 14px 0;
    position: relative;
    line-height: 30px;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    a {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 16px;
      .icon-container {
        font-size: 26px;
        width: 36px;
      }
    }
    .pop {
      position: absolute;
      left: 0;
      bottom: 35px;
      padding: 10px 15px;
      background: #fff;
      border-radius: 5px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.9s;
      img {
        width: 150px;
        height: 150px;
      }
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background: #fff;
        bottom: -4px;
      }
    }
  }
}
</style>