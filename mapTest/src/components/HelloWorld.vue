<template>
  <div class="amap-wrapper">
    <el-amap :zoom="14" :center="center">
      <el-amap-marker
          :events="{'click': onHandleClick}"
          v-for="marker in markers"
          :label="marker.label"
          :position="marker.position"
      ></el-amap-marker>
    </el-amap>
    <button @click="click">定位</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: [112.98626, 28.25591],
      markers: [
        {position: [112.98626, 28.25591], label: {content: '长沙党校', offset: [-20, -30]}},
        {position: [112.88626, 28.25591], label: {content: '岳阳党校', offset: [-20, -30]}},
        {position: [112.78626, 28.25591], label: {content: '省委党校', offset: [-20, -30]}}
      ]
    };
  },
  methods: {
    click() {
      this.center = [112.98626, 28.25591];
    },
    onHandleClick(marker) {
      console.log('Clicked marker:', marker);
    }
  }
};
</script>

<style lang="less" scoped>
.amap-wrapper {
  width: 500px;
  height: 500px;
}

::v-deep .amap-marker-label {
  background-color: red;
  padding: 5px;
  color: white;
  border: none;
}
</style>
