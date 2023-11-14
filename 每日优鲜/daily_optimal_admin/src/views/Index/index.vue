<template>
  <div class="index-container">
    <Card :cardInfo="cardInfo"></Card>
    <Charts></Charts>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Charts from "@/components/Charts";
import { cardInfo } from "@/mock";
export default {
  components: {
    Card,
    Charts,
  },
  data() {
    return {
      cardInfo,
    };
  },
};
</script>

<style lang="less" scoped>
</style>