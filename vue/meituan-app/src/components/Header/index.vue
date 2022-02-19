<template>
  <div class="header contianer">
    <div class="nav-menus">
      <NavMenus></NavMenus>
    </div>
    <div class="search">
      <Search></Search>
    </div>
  </div>
</template>

<script>
import NavMenus from "./NavMenus";
import Search from "./Search";
export default {
  components:{
    NavMenus,
    Search
  }

}
</script>

<style scoped lang="less">
.nav-menus{
  width: 100%;
  margin:0px;
  padding: 0px;
}
</style>
