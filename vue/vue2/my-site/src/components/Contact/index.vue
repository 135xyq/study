<template>
  <ul class="contact-container">
    <li>
      <a>
        <Icon type="github"></Icon>
        <span>xyq135</span>
      </a>
    </li>
    <li>
      <a href="mailto:xyq135@gmail.com">
        <Icon type="mail"></Icon>
        <span>xyq135@gmail.com</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=2420711995&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <Icon type="qq"></Icon>
        <span>2420711995</span>
      </a>
            <div class="pop">
        <img
          src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
          alt=""
        />
      </div>
    </li>
    <li>
      <a href="">
        <Icon type="weixin"></Icon>
        <span>xyq010305</span>
      </a>
            <div class="pop">
        <img
          src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon,
  },
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
      display: block;
      width: 100%;
      height: 100%;
      font-size: 16px;
      .icon-container {
        font-size: 26px;
        display: inline-block;
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
      transition: 0.3s;
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