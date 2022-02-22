<template>
  <div class="change-city-container">
    <div class="select-city">
      <span>按省份选择:</span>
      <el-select
        placeholder="省份"
        class="select-city-province"
        v-model="selectProvince"
      >
        <el-option
          v-for="(value, index) in cityMap"
          :key="index"
          :value="value[0]"
          >{{ value[0] }}
        </el-option>
      </el-select>
      <el-select
        placeholder="城市"
        class="select-city-city"
        v-model="selectCity"
        :disabled="selectProvince === ''"
      >
        <el-option
          v-for="(item, index) in cityMap.get(selectProvince)"
          :key="index"
          :value="item.name"
          >{{ item.name }}
        </el-option>
      </el-select>
      <span class="search-input-title">直接搜索:</span>
      <input
        placeholder="请输入城市中文或拼音"
        class="search-input"
        v-model="inputSearch"
      />
    </div>
    <div class="hot-city">
      <span class="hot-city-title">热门城市:</span>
      <ul class="hot-city-list">
        <li class="hot-city-item" v-for="item in hotCity" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="recent-search">
      <span class="recent-search-title">最近访问:</span>
      <ul class="recent-search-list">
        <li
          class="recent-search-item"
          v-for="item in recentCity"
          :key="item.id"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="select-alphabet">
      <span class="select-alphabet-title">按拼音首字母选择:</span>
      <ul class="select-alphabet-list">
        <li class="select-alphabet-item" v-for="item in 26" :key="item">
          <a :href="'#city-' + String.fromCharCode(item + 64)">{{
            String.fromCharCode(item + 64)
          }}</a>
        </li>
      </ul>
    </div>
    <div class="alphabet-city">
      <div
        class="every-city"
        :id="'city-' + key"
        v-for="(value, key) in cityAlphabet"
        :key="key"
      >
        <span class="city-alpha-title">{{ key }}</span>
        <span class="cities">
          <span v-for="item in value" :key="item" @click="onHandleChangePlace(item,value)">{{ item }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import city from "@/mock/place.js";
import { getHotCity, getRecentCity, getProvince } from "@/api/place.js";
export default {
  data() {
    return {
      hotCity: [], // 热门城市
      recentCity: [], // 最近搜索
      province: city, //省份信息
      cityMap: new Map(), //城市和省份的对应信息
      selectProvince: "", // 选择的省份
      selectCity: "", // 对应的城市
      inputSearch: "", //输入框中的数据
      cityAlphabet: {}, // 字母开头的城市
      unSortCityAlphabet:{},//未排序的字母开头的城市
    };
  },
  created() {
    // 获取热门城市
    getHotCity().then((resp) => {
      console.log(resp);
      if (resp.status === "success") {
        this.hotCity = resp.data;
        console.log(this.hotCity);
      } else {
        this.$message({
          type: "error",
          message: resp.msg,
        });
      }
    });
    // 获取最近的城市
    getRecentCity().then((resp) => {
      console.log(resp);
      if (resp.status === "success") {
        this.recentCity = resp.data;
        console.log(this.recentCity);
      } else {
        this.$message({
          type: "error",
          message: resp.msg,
        });
      }
    });
    // 获取省份信息
    getProvince().then((resp) => {
      if (resp.status === "success") {
        this.province = resp.data;
        // 处理信息
        this.provinceToCity();
        console.log(this.province);
      } else {
        this.$message({
          type: "error",
          message: resp.msg,
        });
      }
    });
    // 将省份与城市对应
    this.provinceToCity();
    // console.log(this.cityMap);

    // 将城市与字母对应
    this.cityToAlphabet();
    const sortKeys = Object.keys(this.unSortCityAlphabet).sort();
    for(let i = 0;i<sortKeys.length;i++) {
      this.cityAlphabet[sortKeys[i]] = this.unSortCityAlphabet[sortKeys[i]];
    }
    // console.log(this.unSortCityAlphabet);
  },
  methods: {
    // 将省份与城市对应
    provinceToCity() {
      for (const item of this.province) {
        if (this.cityMap.has(item.provinceName)) {
          continues;
        } else {
          this.cityMap.set(item.provinceName, item.cityInfoList);
        }
      }
    },

    // 将字母与城市对应
    cityToAlphabet() {
      for (const items of this.province) {
        for (const item of items.cityInfoList) {
          if (this.unSortCityAlphabet[item.firstChar]) {
            this.unSortCityAlphabet[item.firstChar].push(item.name);
          } else {
            this.unSortCityAlphabet[item.firstChar] = [];
            this.unSortCityAlphabet[item.firstChar].push(item.name);
          }
        }
      }
    },

    // 处理修改定位
    onHandleChangePlace(place,cities){
      this.$store.dispatch('setPosition',
      {name:place,
      nearCity:cities.slice(0,3)});
      setTimeout(()=>{
        this.$router.push({name:'home'})
      },1000)
      // console.log(this.$store.state.position)
    }
  },
};
</script>

<style lang="less" scoped>
.change-city-container {
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
  color: #666;
  .select-city {
    padding-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
    .select-city-province {
      margin-left: 20px;
      width: 150px;
      color: #666;
    }
    .select-city-city {
      margin-left: 20px;
      width: 150px;
    }
    .search-input-title {
      font-weight: 500;
      margin-left: 100px;
      padding-right: 10px;
      color: #333;
    }

    .search-input {
      padding-left: 10px;
      width: 220px;
      height: 40px;
      border-radius: 4px;
      outline: none;
      border: 1px solid #e5e5e5;
      margin-left: 10px;
      font-size: 14px;
      color: #666;
      box-sizing: border-box;
    }
  }
  .hot-city,
  .recent-search,
  .select-alphabet {
    border-bottom: 1px solid #e5e5e5;
    padding: 30px 0;
    .hot-city-title,
    .recent-search-title,
    .select-alphabet-title {
      vertical-align: center;
      float: left;
      margin-right: 30px;
      color: #333;
    }
    .hot-city-list,
    .recent-search-list,
    .select-alphabet-list {
      display: flex;
      .hot-city-item,
      .recent-search-item,
      .select-alphabet-item {
        margin: 0 20px;
        font-size: 14px;
        color: #666;
      }
    }
  }
  .select-alphabet {
    border: none;
    .select-alphabet-list {
      justify-content: space-between;
      .select-alphabet-item {
        margin: 0;
        a {
          color: #666;
          font-weight: 500;
          font-size: 15px;
        }
      }
    }
  }

  .alphabet-city {
    .every-city {
      margin-top:20px ;
      padding: 10px 10px;
      border-radius: 10px;
      .city-alpha-title {
        box-sizing: border-box;
        vertical-align: top;
        padding-top: 10px;
        display: inline-block;
        text-align: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #222222;
        background: #ffd000;
        box-shadow: 0 4px 5px 0 rgba(39, 178, 164, 0.22);
      }
      &:hover {
        background-color: #c5bcbc42;
      }
      .cities {
        display: inline-block;
        max-width: 1065px;

        span {
          margin: 10px 20px;
          color: #666;
          display: inline-block;
          cursor: pointer;
          font-size: 14px;
          // &:hover{
          //   color: ;
          // }
        }
      }
    }
  }
}
</style>
