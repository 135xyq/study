<template>
  <nav class="menu-container">
    <RouterLink
      :exact="item.exact"
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.name }"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Article",
          title: "文章",
          icon: "blog",
          exact: false, // 激活状态是否要精确匹配
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Daily",
          title: "每日一句",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
    text-shadow: 0 0 0.5em #0ae642, 0 0 0.2em #5c5c5c;
  margin: 24px 0;
  a {
    &.selected {
        background:linear-gradient(to bottom, #1e5e1e, #123010, #286f58);
    }
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 60px;
    .icon {
      margin-right: 10px;
      font-size: 25px;
    }
    &:hover {
      color: #fff;
      background:linear-gradient(to bottom, #1e5e1e, #123010, #286f58);
      .icon{
        animation: rotate 1.2s infinite;
      }
    }
    @keyframes rotate {
      0%{
        transform: rotate(0deg);
      }
      25%{
        transform: rotate(-30deg);
      }
      50%{
        transform: rotate(0deg);
      }
      75%{
        transform: rotate(30deg);
      }
      100%{
        transform: rotate(0deg);
      }
    }
  }
}
</style>
