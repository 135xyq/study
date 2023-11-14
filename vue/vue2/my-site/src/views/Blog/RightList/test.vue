<template>
  <div class="test-container">
      <RightList :list="list" @selectChange="select" />
  </div>
</template>

<script>
import RightList from './';
export default {
    components:{
        RightList,
    },
    data() {
    return {
      list: [
        { name: "a", isSelect: false },
        { name: "b", isSelect: false },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "c-1", isSelect: false },
            {
              name: "c-2",
              isSelect: false,
              children: [
                { name: "c-2-1", isSelect: false },
                { name: "c-2-2", isSelect: false },
                { name: "c-2-3", isSelect: false },
                { name: "c-2-4", isSelect: false },
              ],
            },
            { name: "c-3", isSelect: false },
            { name: "c-4", isSelect: false },
          ],
        },
        { name: "d", isSelect: false },
      ],
    };
  },
  methods:{
      select(item){
          console.log(item);
      }
  }
}
</script>

<style lang="less" scoped>
.test-container{
    width: 400px;
    height: 600px;
    border: 1px solid;
    margin: 0 auto;
}

</style>