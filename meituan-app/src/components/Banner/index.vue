<template>
  <div class="banner-container">
    <div class="carousel">
      <el-carousel trigger="click" height="240px" class="my-carousel">
        <el-carousel-item v-for="(item, index) in imagesCarousel" :key="index">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="footer-img">
      <img
        src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
        alt=""
      />
      <img
        src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
        alt=""
      />
    </div>
    <div class="right-img">
      <img
        src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
        alt=""
      />
      <img
        src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg;"
        alt=""
      />
    </div>
  </div>
</template>

<script>
const imagesCarousel = [
  "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
  "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
  "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
  "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
  "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
];
export default {
  data() {
    return {
      imagesCarousel,
    };
  },
};
</script>

<style lang="less" scoped>
.banner-container {
  position: relative;
  margin: 10px 0 0 10px;
}
.my-carousel {
  width: 550px;
  img {
    width: 550px;
    cursor: pointer;
  }
}
.footer-img {
  img {
    width: 270px;
    height: 165px;
    margin: 10px 0 0 0px;
    cursor: pointer;
  }
  img:nth-of-type(2) {
    margin-left: 10px;
  }
}

.right-img {
  img {
    width: 150px;
    height: 240px;
    position: absolute;
    top: 0px;
    left: 560px;
    cursor: pointer;
  }
  img:nth-of-type(2) {
    height: 165px;
    top: 250px;
  }
}
</style>
