<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="addActive" @selectChange="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from "../../RightList";
import AntiShake from '@/utils/AntiShake';//防抖
export default {
  components: {
    RightList,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeAnchor:"",
    };
  },
  created(){
    this.setSelectAnit = AntiShake(this.setSelect,50)
    this.$bus.$on('mainScroll',this.setSelectAnit);
  },
  destroyed(){
    this.$bus.$off('mainScroll',this.setSelectAnit);
  },
  computed: {
    addActive(){
      const getToc = (list=[])=>{
        return list.map(t=>{
          return {
            ...t,
            active:this.activeAnchor === t.anchor,
            children:getToc(t.children)
          }
        })
      }
      return getToc(this.list);
    },
    doms(){
      let dom = [];
      const addDom = (item)=>{
        for (const t of item){
          dom.push(document.getElementById(t.anchor));
          if(t.children&&t.children.length){
            addDom(t.children);
          }
        }
      }
      addDom(this.addActive);
      return dom;
    }
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setSelect(){
      const range = 200;
      this.activeAnchor ="";
      for (const item of this.doms){
        if(!item){
          continue;
        }
        const top = item.getClientRects()[0].top;
        if(top >= 0 && top <=range){
          this.activeAnchor = item.id;
          return;
        }else if(top > range){
          return;
        }else{
          this.activeAnchor = item.id;
        }
      }
    }
  },
};
</script>

<style>
</style>